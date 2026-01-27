import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true)
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/im-new-here">I'm New Here</Link></li>
          <li><Link to="/leadership">Leadership</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
