import { useEffect, useRef } from 'react'

const Section = ({ 
  title, 
  children, 
  dark = false, 
  gray = false,
  className = ""
}) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const sectionClasses = `section reveal ${dark ? 'dark' : ''} ${gray ? 'gray' : ''} ${className}`

  return (
    <section ref={sectionRef} className={sectionClasses}>
      <div className="container">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  )
}

export default Section
