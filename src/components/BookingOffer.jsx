import { bookingOffer } from '../data/siteData'
import SectionHeading from './SectionHeading'

function BookingOffer() {
  return (
    <section id="offer" className="section section--alt" aria-labelledby="offer-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Welcome Gift"
          title="First Booking Offer"
          subtitle="A warm welcome for first-time Meow Manor guests."
        />
        <article className="offer-card">
          <div className="offer-card__top">
            <h3 id="offer-heading" className="offer-card__title">
              {bookingOffer.title}
            </h3>
            <span className="badge offer-card__badge">{bookingOffer.badge}</span>
          </div>
          <p className="offer-card__highlight">{bookingOffer.highlight}</p>
          <ul className="offer-card__terms">
            {bookingOffer.terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default BookingOffer
