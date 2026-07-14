import { importantNotice } from '../data/siteData'
import SectionHeading from './SectionHeading'

function ImportantNotice() {
  return (
    <section
      id="important-notice"
      className="section"
      aria-labelledby="important-notice-heading"
    >
      <div className="container">
        <SectionHeading
          id="important-notice-heading"
          eyebrow="Before You Arrive"
          title={importantNotice.heading}
          subtitle={importantNotice.description}
        />

        <div className="notice-card">
          <ul className="notice-card__list">
            {importantNotice.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="notice-reminder">{importantNotice.reminder}</p>
        </div>
      </div>
    </section>
  )
}

export default ImportantNotice
