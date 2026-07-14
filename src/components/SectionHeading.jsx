function SectionHeading({ eyebrow, title, subtitle, id }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </div>
  )
}

export default SectionHeading
