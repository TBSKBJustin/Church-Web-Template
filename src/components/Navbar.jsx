import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setIsTransparent(window.scrollY < 100)
      } else {
        setIsTransparent(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <nav className={`navbar ${isHome && isTransparent ? 'transparent' : ''}`}>
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
