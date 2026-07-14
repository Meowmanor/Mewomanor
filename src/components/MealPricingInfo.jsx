import { mealPricingInfo } from '../data/siteData'
import SectionHeading from './SectionHeading'

function MealPricingInfo() {
  return (
    <section
      id="meal-pricing"
      className="section"
      aria-labelledby="meal-pricing-heading"
    >
      <div className="container">
        <SectionHeading
          id="meal-pricing-heading"
          eyebrow="Transparent Pricing"
          title="Meal Pricing Explained"
          subtitle="Fair charges based on your instructions and your kitty’s appetite."
        />

        <div className="info-panel">
          <p>{mealPricingInfo.intro}</p>
          <p>
            <strong>{mealPricingInfo.basedOnLabel}</strong>
          </p>
          <ul>
            {mealPricingInfo.baseItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {mealPricingInfo.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <p className="info-highlight">{mealPricingInfo.highlight}</p>
        </div>
      </div>
    </section>
  )
}

export default MealPricingInfo
