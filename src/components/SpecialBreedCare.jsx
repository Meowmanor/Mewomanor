import { specialBreedCare } from '../data/siteData'
import SectionHeading from './SectionHeading'

function SpecialBreedCare({ onAddToBooking }) {
  return (
    <section
      id="special-breed-care"
      className="section section--alt"
      aria-labelledby="special-breed-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Add-On"
          title="Special Breed Care"
          subtitle="Extra pampering for fluffy babies who need a little more attention."
        />

        <article className="addon-card">
          <div className="addon-card__header">
            <div>
              <span className="badge">{specialBreedCare.label}</span>
              <h3 id="special-breed-heading">{specialBreedCare.heading}</h3>
              <p className="addon-card__price">
                {specialBreedCare.price}{' '}
                <span className="pricing-card__unit">{specialBreedCare.unit}</span>
              </p>
            </div>
          </div>

          <ul className="addon-card__includes">
            {specialBreedCare.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="addon-card__closing">{specialBreedCare.closing}</p>

          <button type="button" className="btn" onClick={onAddToBooking}>
            Add to Booking
          </button>
        </article>
      </div>
    </section>
  )
}

export default SpecialBreedCare
