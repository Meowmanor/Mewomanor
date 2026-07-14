import { businessConfig } from '../config/businessConfig'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-bottom">
        <p>
          © {year} {businessConfig.businessName}. All rights reserved.
        </p>
        <p>{businessConfig.privacyNote}</p>
      </div>
    </footer>
  )
}

export default Footer
