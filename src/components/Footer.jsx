const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/im-new-here">I'm New Here</a>
          <a href="/leadership">Leadership</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Church Community. All rights reserved.</p>
          <p style={{ marginTop: '10px' }}>Glorifying God as a community of disciples</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
