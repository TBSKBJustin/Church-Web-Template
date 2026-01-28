import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    let lastScroll = 0
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (isHome) {
        setIsTransparent(false)
      } else {
        setIsTransparent(false)
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY < 10) {
        // Always show at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScroll && currentScrollY > 80) {
        // Scrolling down - hide navbar
        setIsVisible(false)
      } else if (currentScrollY < lastScroll) {
        // Scrolling up - show navbar
        setIsVisible(true)
      }

      lastScroll = currentScrollY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <nav className={`navbar ${isHome && isTransparent ? 'transparent' : ''} ${!isVisible ? 'hidden' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="nav-logo">Church</Link>
        <ul className="nav-links">
          <li 
            className="nav-dropdown"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <span className="nav-link-text">About</span>
            <div className={`dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
              <Link to="/beliefs" className="dropdown-item">Beliefs</Link>
              <Link to="/leadership" className="dropdown-item">Leadership</Link>
              <Link to="/sermons" className="dropdown-item">Sermons</Link>
            </div>
          </li>
          <li><Link to="/im-new-here">I'm New Here</Link></li>
          <li><Link to="/give">Give</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
