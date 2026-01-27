import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item">
      <button 
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      <div className={`faq-answer ${isOpen ? 'active' : ''}`}>
        {answer}
      </div>
    </div>
  )
}

const FAQ = ({ items }) => {
  return (
    <div className="faq-container">
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

export default FAQ
