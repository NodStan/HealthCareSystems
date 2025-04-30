import React from 'react'
import './CallToAction.css'
import { useDarkMode } from '../DarkModeContext';

const CallToAction = () => {
    const { darkMode: isDarkMode } = useDarkMode();
    return (
        <div>
            <section className={`call-to-action ${isDarkMode ? 'dark' : ''}`}>
                <div className="cta-content">
                <h2 className="cta-title">Take control of your health today</h2>
                <p className="cta-subtitle">
                    Join thousands of users who have transformed their health journey with HealthHub.
                </p>
                <div className="cta-buttons">
                    <div className="button-wrappers">
                    <a href="/?auth=register" className="btns btns-primary">
                        Create free account
                    </a>
                    </div>
                    <div className="button-wrapper ml">
                    <a href="/articles" className="btns btns-secondary">
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