from collections import deque
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parents[1]
path = root / 'src' / 'assets' / 'meow-manor-logo.png'
im = Image.open(path).convert('RGBA')
pixels = im.load()
w, h = im.size


def is_bg(r, g, b, a, loose=False):
    if a == 0:
        return True
    chroma = max(r, g, b) - min(r, g, b)
    avg = (r + g + b) / 3
    if min(r, g, b) >= 235 and chroma <= 18:
        return True
    if min(r, g, b) >= 220 and chroma <= 12 and avg >= 230:
        return True
    if loose:
        # soft fringe / halo next to already-transparent pixels
        if avg >= 200 and chroma <= 25 and min(r, g, b) >= 185:
            return True
        if avg >= 210 and chroma <= 40 and b >= g - 5 and r >= 200:
            # pale cool/neutral fringe, not warm peach badge
            return True
    return False


visited = [[False] * w for _ in range(h)]
q = deque()

for x in range(w):
    for y in (0, h - 1):
        r, g, b, a = pixels[x, y]
        if is_bg(r, g, b, a):
            q.append((x, y))
            visited[y][x] = True

for y in range(h):
    for x in (0, w - 1):
        if not visited[y][x]:
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b, a):
                q.append((x, y))
                visited[y][x] = True

while q:
    x, y = q.popleft()
    pixels[x, y] = (0, 0, 0, 0)
    for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
        if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
            r, g, b, a = pixels[nx, ny]
            if is_bg(r, g, b, a):
                visited[ny][nx] = True
                q.append((nx, ny))

# Second pass: remove light halo pixels adjacent to transparency
changed = True
passes = 0
while changed and passes < 3:
    changed = False
    passes += 1
    to_clear = []
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if not is_bg(r, g, b, a, loose=True):
                continue
            neighbors = (
                (x - 1, y),
                (x + 1, y),
                (x, y - 1),
                (x, y + 1),
                (x - 1, y - 1),
                (x + 1, y - 1),
                (x - 1, y + 1),
                (x + 1, y + 1),
            )
            if any(
                0 <= nx < w and 0 <= ny < h and pixels[nx, ny][3] == 0
                for nx, ny in neighbors
            ):
                to_clear.append((x, y))
    for x, y in to_clear:
        pixels[x, y] = (0, 0, 0, 0)
        changed = True

im.save(path, 'PNG')
im.save(root / 'public' / 'favicon.png', 'PNG')
im.save(root / 'public' / 'og-image.png', 'PNG')
print('done; corner', im.getpixel((0, 0)), 'center', im.getpixel((w // 2, h // 2)))
