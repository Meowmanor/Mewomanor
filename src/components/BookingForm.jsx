import { useEffect, useState } from 'react'
import { businessConfig } from '../config/businessConfig'
import { bookingFields } from '../data/siteData'
import SectionHeading from './SectionHeading'

const initialForm = {
  parentName: '',
  mobile: '',
  catName: '',
  numberOfCats: '1',
  checkIn: '',
  checkOut: '',
  stayPlan: '',
  mealPlan: '',
  specialBreedCare: 'No',
}

function isValidIndianMobile(value) {
  const digits = value.replace(/\D/g, '')
  if (/^[6-9]\d{9}$/.test(digits)) return true
  if (/^91[6-9]\d{9}$/.test(digits)) return true
  return false
}

function formatMobileForMessage(value) {
  const digits = value.replace(/\D/g, '')
  if (/^91[6-9]\d{9}$/.test(digits)) return `+${digits}`
  if (/^[6-9]\d{9}$/.test(digits)) return `+91${digits}`
  return value.trim()
}

function BookingForm({ selections }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    if (!selections.stayPlanNonce || !selections.stayPlan) return
    setForm((prev) => ({ ...prev, stayPlan: selections.stayPlan }))
    setStatusMessage('')
  }, [selections.stayPlanNonce, selections.stayPlan])

  useEffect(() => {
    if (!selections.mealPlanNonce || !selections.mealPlan) return
    setForm((prev) => ({ ...prev, mealPlan: selections.mealPlan }))
    setStatusMessage('')
  }, [selections.mealPlanNonce, selections.mealPlan])

  useEffect(() => {
    if (!selections.breedCareNonce) return
    setForm((prev) => ({ ...prev, specialBreedCare: 'Yes' }))
    setStatusMessage('')
  }, [selections.breedCareNonce])

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setStatusMessage('')
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.parentName.trim()) {
      nextErrors.parentName = 'Pet parent name is required.'
    }

    if (!form.mobile.trim()) {
      nextErrors.mobile = 'Mobile number is required.'
    } else if (!isValidIndianMobile(form.mobile)) {
      nextErrors.mobile = 'Enter a valid Indian mobile number.'
    }

    if (!form.catName.trim()) {
      nextErrors.catName = 'Cat name is required.'
    }

    const cats = Number(form.numberOfCats)
    if (!form.numberOfCats || Number.isNaN(cats) || cats < 1) {
      nextErrors.numberOfCats = 'Number of cats must be at least 1.'
    }

    if (!form.checkIn) {
      nextErrors.checkIn = 'Check-in date is required.'
    }

    if (!form.checkOut) {
      nextErrors.checkOut = 'Check-out date is required.'
    } else if (form.checkIn && form.checkOut < form.checkIn) {
      nextErrors.checkOut = 'Check-out date cannot be earlier than check-in date.'
    }

    if (!form.stayPlan) {
      nextErrors.stayPlan = 'Please select a stay plan.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const buildWhatsAppMessage = () => {
    return [
      `Hello ${businessConfig.businessName},`,
      '',
      'I would like to enquire about a cat boarding booking.',
      '',
      `Pet Parent Name: ${form.parentName.trim()}`,
      `Mobile Number: ${formatMobileForMessage(form.mobile)}`,
      `Cat Name: ${form.catName.trim()}`,
      `Number of Cats: ${form.numberOfCats}`,
      `Check-in Date: ${form.checkIn}`,
      `Check-out Date: ${form.checkOut}`,
      `Stay Plan: ${form.stayPlan}`,
      `Meal Plan: ${form.mealPlan || 'None / Bringing own food'}`,
      `Special Breed Care: ${form.specialBreedCare}`,
    ].join('\n')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatusMessage('')

    if (!validate()) return

    const message = buildWhatsAppMessage()
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${businessConfig.whatsappNumber}?text=${encoded}`

    window.open(url, '_blank', 'noopener,noreferrer')
    setStatusMessage(
      'Your booking request has been prepared. Please send the message on WhatsApp to complete your enquiry.',
    )
  }

  return (
    <section id="booking" className="section section--alt" aria-labelledby="booking-heading">
      <div className="container booking-layout">
        <SectionHeading
          id="booking-heading"
          eyebrow="Enquire"
          title="Book a Stay"
          subtitle="Share a few details and we will prepare your WhatsApp booking enquiry."
        />

        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="parentName">
                Pet parent name <span className="required">*</span>
              </label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                autoComplete="name"
                value={form.parentName}
                onChange={(e) => updateField('parentName', e.target.value)}
                required
              />
              {errors.parentName ? <span className="error">{errors.parentName}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="mobile">
                Mobile number <span className="required">*</span>
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="10-digit Indian mobile number"
                value={form.mobile}
                onChange={(e) => updateField('mobile', e.target.value)}
                required
              />
              {errors.mobile ? <span className="error">{errors.mobile}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="catName">
                Cat name <span className="required">*</span>
              </label>
              <input
                id="catName"
                name="catName"
                type="text"
                value={form.catName}
                onChange={(e) => updateField('catName', e.target.value)}
                required
              />
              {errors.catName ? <span className="error">{errors.catName}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="numberOfCats">
                Number of cats <span className="required">*</span>
              </label>
              <input
                id="numberOfCats"
                name="numberOfCats"
                type="number"
                min="1"
                step="1"
                value={form.numberOfCats}
                onChange={(e) => updateField('numberOfCats', e.target.value)}
                required
              />
              {errors.numberOfCats ? <span className="error">{errors.numberOfCats}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="checkIn">
                Check-in date <span className="required">*</span>
              </label>
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                value={form.checkIn}
                onChange={(e) => updateField('checkIn', e.target.value)}
                required
              />
              {errors.checkIn ? <span className="error">{errors.checkIn}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="checkOut">
                Check-out date <span className="required">*</span>
              </label>
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                value={form.checkOut}
                onChange={(e) => updateField('checkOut', e.target.value)}
                required
              />
              {errors.checkOut ? <span className="error">{errors.checkOut}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="stayPlan">
                Stay plan <span className="required">*</span>
              </label>
              <select
                id="stayPlan"
                name="stayPlan"
                value={form.stayPlan}
                onChange={(e) => updateField('stayPlan', e.target.value)}
                required
              >
                {bookingFields.stayPlanOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.stayPlan ? <span className="error">{errors.stayPlan}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="mealPlan">Meal plan</label>
              <select
                id="mealPlan"
                name="mealPlan"
                value={form.mealPlan}
                onChange={(e) => updateField('mealPlan', e.target.value)}
              >
                {bookingFields.mealPlanOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field form-field--full">
              <span id="special-breed-label">Special breed care required</span>
              <div className="radio-group" role="radiogroup" aria-labelledby="special-breed-label">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="specialBreedCare"
                    value="Yes"
                    checked={form.specialBreedCare === 'Yes'}
                    onChange={(e) => updateField('specialBreedCare', e.target.value)}
                  />
                  Yes
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="specialBreedCare"
                    value="No"
                    checked={form.specialBreedCare === 'No'}
                    onChange={(e) => updateField('specialBreedCare', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {statusMessage ? <p className="form-success" role="status">{statusMessage}</p> : null}

          <button type="submit" className="btn btn--full">
            Send Booking Request on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookingForm
