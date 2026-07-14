import logo from '../assets/meow-manor-logo.png'
import { heroContent } from '../data/siteData'

function Hero() {
  return (
    <section id="home" className="section hero" aria-labelledby="hero-heading">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1 id="hero-heading">{heroContent.heading}</h1>
          <p className="hero__tagline">{heroContent.tagline}</p>
          <p className="hero__description">{heroContent.description}</p>
          <div className="hero__actions">
            <a href={heroContent.primaryCta.href} className="btn">
              {heroContent.primaryCta.label}
            </a>
            <a href={heroContent.secondaryCta.href} className="btn btn--secondary">
              {heroContent.secondaryCta.label}
            </a>
          </div>
          <p className="hero__trust">{heroContent.trustLine}</p>
        </div>

        <div className="hero__visual" aria-hidden="false">
          <span className="hero__paw hero__paw--1" aria-hidden="true">
            🐾
          </span>
          <span className="hero__paw hero__paw--2" aria-hidden="true">
            🐾
          </span>
          <span className="hero__paw hero__paw--3" aria-hidden="true">
            🐾
          </span>
          <span className="hero__paw hero__paw--4" aria-hidden="true">
            🐾
          </span>
          <div className="hero__logo-wrap">
            <img
              src={logo}
              alt="Meow Manor official badge logo with a cat reading a book"
              className="hero__logo"
              width="320"
              height="420"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
