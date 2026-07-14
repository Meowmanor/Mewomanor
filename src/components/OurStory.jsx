import { useEffect, useState } from 'react'
import story1 from '../assets/story-1.jpg'
import story2 from '../assets/story-2.jpg'
import story3 from '../assets/story-3.jpg'
import story4 from '../assets/story-4.jpg'
import { ourStory } from '../data/siteData'
import SectionHeading from './SectionHeading'

const slideImages = {
  story1,
  story2,
  story3,
  story4,
}

function OurStory() {
  const slides = ourStory.slides
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || slides.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 2000)

    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <section id="our-story" className="section" aria-labelledby="our-story-heading">
      <div className="container">
        <SectionHeading
          id="our-story-heading"
          eyebrow="Our Heart"
          title={ourStory.title}
          subtitle="A gentle story of two brothers who inspired this home for cats."
        />

        <div className="story-intro">
          <p>{ourStory.intro}</p>
        </div>

        <article className="card story-combined">
          <div className="story-combined__media story-carousel" aria-roledescription="carousel">
            {slides.map((slide, index) => (
              <img
                key={slide.srcKey}
                src={slideImages[slide.srcKey]}
                alt={slide.alt}
                className={`story-carousel__image${index === activeIndex ? ' is-active' : ''}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <div className="story-carousel__dots" role="tablist" aria-label="Story photos">
              {slides.map((slide, index) => (
                <button
                  key={slide.srcKey}
                  type="button"
                  className={`story-carousel__dot${index === activeIndex ? ' is-active' : ''}`}
                  aria-label={`Show photo ${index + 1}`}
                  aria-selected={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="story-combined__content">
            <h3>{ourStory.names}</h3>
            {ourStory.descriptions.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </article>

        <p className="story-closing">{ourStory.closing}</p>
      </div>
    </section>
  )
}

export default OurStory
