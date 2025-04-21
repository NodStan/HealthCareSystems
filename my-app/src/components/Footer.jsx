import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // optional, if you have a separate CSS file

const Footer = () => {
  return (
    <div className="footer-wrapper">
                <footer className="footer">
                <div className="top-footer">
                <div className="footer-logo-section">
                    <a href="/" className="footer-logo-link">
                    <span className="footer-logo-blue">Health</span>
                    <span className="footer-logo-green">Hub</span>
                    </a>
                    <p className="footer-description">
                    Comprehensive health information and personalized recommendations for your well-being.
                    </p>
                    <div className="footer-socials">
                    <a href="#" className="footer-social-link">
                        <span className="sr-only">Twitter</span>
                        <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..."></path>
                        </svg>
                    </a>
                    <a href="#" className="footer-social-link">
                        <span className="sr-only">Facebook</span>
                        <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12..."></path>
                        </svg>
                    </a>
                    <a href="#" className="footer-social-link">
                        <span className="sr-only">Instagram</span>
                        <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06..."></path>
                        </svg>
                    </a>
                    </div>
                    </div>
                    <div className="footer-explore">
                <h3 className="footer-heading">Explore</h3>
                <ul className="footer-links">
                    <li>
                    <a href="/articles?category=cardiovascular" className="footer-link">
                        Cardiovascular Health
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=diabetes" className="footer-link">
                        Diabetes Management
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=mental-health" className="footer-link">
                        Mental Health
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=nutrition" className="footer-link">
                        Nutrition & Diet
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=fitness" className="footer-link">
                        Fitness & Exercise
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=preventive-care" className="footer-link">
                        Preventive Care
                    </a>
                    </li>
                </ul>
                    </div>
                    <div className="footer-quick-links">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-links">
                    <li>
                    <a href="/" className="footer-link">
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="/articles" className="footer-link">
                        Health Articles
                    </a>
                    </li>
                    <li>
                    <a href="/dashboard" className="footer-link">
                        My Dashboard
                    </a>
                    </li>
                    <li>
                    <a href="/profile" className="footer-link">
                        Health Profile
                    </a>
                    </li>
                    <li>
                    <a href="/?auth=login" className="footer-link">
                        Sign In
                    </a>
                    </li>
                    <li>
                    <a href="/?auth=register" className="footer-link">
                        Register
                    </a>
                    </li>
                </ul>
                    </div>
                    <div className="md:col-span-1">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-4">
                    <li className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-health-blue mr-2"
                    >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>123 Health Street, Medical City, MC 12345</span>
                    </li>
                    <li className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-health-blue mr-2"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+1 (555) 123-4567</span>
                    </li>
                    <li className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-health-blue mr-2"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>info@healthhub.com</span>
                    </li>
                </ul>
                    </div>
                </div>
                    
                    <div className="bottom-footer">
                    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
                <p className="text-base text-gray-400 md:mb-0">
                    © 2025 HealthHub. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    <Link className="text-gray-400 hover:text-white" to="/terms">
                    Terms of Service
                    </Link>
                    <Link className="text-gray-400 hover:text-white" to="/privacy">
                    Privacy Policy
                    </Link>
                    <Link className="text-gray-400 hover:text-white" to="/cookies">
                    Cookie Policy
                    </Link>
                </div>
                </div>
                    </div>
                </footer>
            </div>
  );
};

export default Footer;
