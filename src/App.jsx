import { useState } from 'react'
import Benefits from './components/Benefits'
import BookingForm from './components/BookingForm'
import BookingOffer from './components/BookingOffer'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ImportantNotice from './components/ImportantNotice'
import MealPlans from './components/MealPlans'
import MealPricingInfo from './components/MealPricingInfo'
import OurStory from './components/OurStory'
import SpecialBreedCare from './components/SpecialBreedCare'
import StayPlans from './components/StayPlans'

function scrollToBooking() {
  const booking = document.getElementById('booking')
  if (booking) {
    booking.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function App() {
  const [selections, setSelections] = useState({
    stayPlan: '',
    mealPlan: '',
    specialBreedCare: 'No',
    stayPlanNonce: 0,
    mealPlanNonce: 0,
    breedCareNonce: 0,
  })

  const selectStayPlan = (planName) => {
    setSelections((prev) => ({
      ...prev,
      stayPlan: planName,
      stayPlanNonce: Date.now(),
    }))
    scrollToBooking()
  }

  const selectMealPlan = (planName) => {
    setSelections((prev) => ({
      ...prev,
      mealPlan: planName,
      mealPlanNonce: Date.now(),
    }))
    scrollToBooking()
  }

  const addSpecialBreedCare = () => {
    setSelections((prev) => ({
      ...prev,
      specialBreedCare: 'Yes',
      breedCareNonce: Date.now(),
    }))
    scrollToBooking()
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BookingOffer />
        <StayPlans onSelectPlan={selectStayPlan} />
        <Benefits />
        <OurStory />
        <MealPlans onSelectMeal={selectMealPlan} />
        <MealPricingInfo />
        <SpecialBreedCare onAddToBooking={addSpecialBreedCare} />
        <ImportantNotice />
        <BookingForm selections={selections} />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
