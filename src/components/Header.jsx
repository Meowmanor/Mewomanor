import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/meow-manor-logo.png'
import { businessConfig } from '../config/businessConfig'
import { navLinks } from '../data/siteData'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Meow Manor logo"
            className="brand__logo"
            width="40"
            height="40"
          />
          <span className="brand__text">{businessConfig.businessName}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#booking" className="btn btn--book-desktop">
            Book Now
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX size={22} aria-hidden="true" /> : <FiMenu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#booking" className="btn" onClick={closeMenu}>
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
