import { benefits } from '../data/siteData'
import SectionHeading from './SectionHeading'

function Benefits() {
  return (
    <section id="services" className="section section--alt" aria-labelledby="benefits-heading">
      <div className="container">
        <SectionHeading
          id="benefits-heading"
          eyebrow="Included Care"
          title="What Your Cat Gets"
          subtitle="Thoughtful comforts that help every guest settle in and feel at home."
        />
        <article className="card benefits-box">
          <ul className="benefits-list">
            {benefits.map((item) => (
              <li key={item.title}>
                <span className="benefits-list__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>
                  <strong>{item.title}</strong>
                  {' — '}
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Benefits
