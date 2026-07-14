import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import { businessConfig } from '../config/businessConfig'
import { contactCards } from '../data/siteData'
import SectionHeading from './SectionHeading'

const icons = {
  whatsapp: FaWhatsapp,
  phone: FaPhoneAlt,
  email: FaEnvelope,
  instagram: FaInstagram,
  location: FaMapMarkerAlt,
}

function getContactValue(type) {
  switch (type) {
    case 'whatsapp': {
      const defaultMessage = encodeURIComponent(
        "Hi! 👋 I'm interested in boarding my cat at Meow Manor.",
      )
      return {
        href: `https://wa.me/${businessConfig.whatsappNumber}?text=${defaultMessage}`,
        text: businessConfig.phoneNumber,
      }
    }
    case 'phone': {
      const tel = businessConfig.phoneNumber.replace(/[^\d+]/g, '')
      return {
        href: `tel:${tel}`,
        text: businessConfig.phoneNumber,
      }
    }
    case 'email':
      return {
        href: `mailto:${businessConfig.email}`,
        text: 'Email us',
      }
    case 'instagram':
      return {
        href: businessConfig.instagramUrl,
        text: 'Follow on Instagram',
      }
    case 'location':
      return {
        href: businessConfig.googleMapsUrl || null,
        text: 'View on Google Maps',
      }
    default:
      return { href: null, text: '' }
  }
}

function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          id="contact-heading"
          eyebrow="Get in Touch"
          title="Contact"
          subtitle="Reach out anytime. Find us in Thanisandra, Bengaluru."
        />

        <div className="contact-grid">
          {contactCards.map((card) => {
            const Icon = icons[card.type]
            const value = getContactValue(card.type)

            return (
              <article key={card.id} className="card contact-card">
                <div className="contact-card__icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{card.label}</h3>
                <p>{card.description}</p>
                {value.href ? (
                  <a
                    href={value.href}
                    target={
                      card.type === 'phone' || card.type === 'email' ? undefined : '_blank'
                    }
                    rel={
                      card.type === 'phone' || card.type === 'email'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                  >
                    {value.text}
                  </a>
                ) : (
                  <p>
                    <strong>{value.text}</strong>
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
