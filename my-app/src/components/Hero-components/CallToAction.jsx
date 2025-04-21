import React from 'react'
import '../Hero.css'

const CallToAction = () => {
  return (
    <div>
      <section className="call-to-action">
                <div className="cta-content">
                <h2 className="cta-title">Take control of your health today</h2>
                <p className="cta-subtitle">
                    Join thousands of users who have transformed their health journey with HealthHub.
                </p>
                <div className="cta-buttons">
                    <div className="button-wrapper">
                    <a href="/?auth=register" className="btn btn-primary">
                        Create free account
                    </a>
                    </div>
                    <div className="button-wrapper ml">
                    <a href="/articles" className="btn btn-secondary">
                        Browse health topics
                    </a>
                    </div>
                </div>
                </div>
            </section>     
      </div>
  )
}

export default CallToAction