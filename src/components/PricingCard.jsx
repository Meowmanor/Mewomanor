function PricingCard({
  icon,
  name,
  description,
  price,
  unit,
  benefit,
  featured = false,
  buttonLabel = 'Book This Plan',
  onSelect,
}) {
  return (
    <article className={`card pricing-card${featured ? ' pricing-card--featured' : ''}`}>
      {featured ? (
        <span className="badge pricing-card__featured-label">Most Popular</span>
      ) : null}
      <div className="pricing-card__icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="pricing-card__price">
        {price}
        {unit ? <span className="pricing-card__unit"> {unit}</span> : null}
      </p>
      <p className="pricing-card__benefit">{benefit}</p>
      <button type="button" className="btn btn--full" onClick={onSelect}>
        {buttonLabel}
      </button>
    </article>
  )
}

export default PricingCard
