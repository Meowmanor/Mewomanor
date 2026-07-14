import { mealPlans, mealPlansIntro } from '../data/siteData'
import PricingCard from './PricingCard'
import SectionHeading from './SectionHeading'

function MealPlans({ onSelectMeal }) {
  return (
    <section id="meal-plans" className="section section--alt" aria-labelledby="meal-plans-heading">
      <div className="container">
        <SectionHeading
          id="meal-plans-heading"
          eyebrow="Dining"
          title="Meal Plans"
          subtitle="Bring your own food, or let us handle mealtimes with care."
        />

        <div className="meal-intro">
          {mealPlansIntro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="pricing-grid meal-plans-grid">
          {mealPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              icon={plan.icon}
              name={plan.name}
              description="Customizable to your cat’s needs"
              price={plan.price}
              unit={plan.unit}
              benefit="Meals tailored to preferences, age, and dietary needs"
              buttonLabel="Select Meal Plan"
              onSelect={() => onSelectMeal(plan.name)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MealPlans
