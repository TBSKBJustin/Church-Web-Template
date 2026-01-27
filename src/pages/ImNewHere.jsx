import Section from '../components/Section'
import FAQ from '../components/FAQ'

const ImNewHere = () => {
  const faqItems = [
    {
      question: "What should I wear?",
      answer: "Come as you are! Our community dresses casually, and we want you to be comfortable. Whether it's jeans and a t-shirt or something more formal, you'll fit right in."
    },
    {
      question: "Where should I park?",
      answer: "We have free parking in our main lot off Church Street. If it's full, there's additional parking on the street and in the overflow lot behind the building. Volunteers will be happy to direct you."
    },
    {
      question: "What about my kids?",
      answer: "We love kids! We offer age-appropriate programs for children from birth through 5th grade during all services. Our children's ministry is staffed by background-checked volunteers who create a safe, fun environment for learning."
    },
    {
      question: "How long is the service?",
      answer: "Our services typically last about 75 minutes, including worship music and a message. We start on time and end on time to respect your schedule."
    },
    {
      question: "What's the service like?",
      answer: "Our services include contemporary worship music, biblical teaching that's practical and relevant, and opportunities to connect with others. The atmosphere is welcoming and casual."
    },
    {
      question: "Will I be singled out as a visitor?",
      answer: "Never! We're glad you're here, but we won't embarrass you. If you'd like to connect with us, there are welcome cards in the seats, or you can visit our welcome center after the service."
    }
  ]

  return (
    <>
      <Section title="Welcome! We're Glad You're Here" className="first-section">
        <p style={{ fontSize: '20px', marginBottom: '30px' }}>
          Visiting a new church can feel overwhelming. We want to make your first visit 
          as comfortable as possible. Here's what you need to know.
        </p>
      </Section>

      <Section title="Your First Sunday" gray>
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '15px' }}>Arriving</h3>
          <p style={{ marginBottom: '30px' }}>
            We recommend arriving 10-15 minutes early to find parking, drop off your kids 
            (if needed), grab a coffee, and find a seat. Our greeters will be at the doors 
            to welcome you and answer any questions.
          </p>

          <h3 style={{ marginBottom: '15px' }}>During the Service</h3>
          <p style={{ marginBottom: '30px' }}>
            The service begins with worship music, followed by announcements and a message. 
            Feel free to participate as much or as little as you're comfortable with. 
            We'll never call you out or put you on the spot.
          </p>

          <h3 style={{ marginBottom: '15px' }}>After the Service</h3>
          <p style={{ marginBottom: '30px' }}>
            Stick around for coffee and conversation! This is a great time to meet people 
            and ask questions. Visit our welcome center to learn more about our church, 
            upcoming events, and ways to get connected.
          </p>
        </div>
      </Section>

      <Section title="Service Times & Location" dark>
        <p style={{ fontSize: '20px', marginBottom: '10px' }}>Sundays at 9:00 AM & 11:00 AM</p>
        <p>123 Church Street, Your City, State 12345</p>
        <div style={{ marginTop: '30px' }}>
          <a href="https://maps.google.com" className="btn primary">Get Directions</a>
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <FAQ items={faqItems} />
      </Section>

      <Section title="Next Steps" gray>
        <p style={{ marginBottom: '40px' }}>
          Ready to dive deeper? Here are some ways to get more connected with our community.
        </p>
        <div className="cards-grid">
          <div className="card">
            <h3>Connect Groups</h3>
            <p>Join a small group to build meaningful relationships and grow in your faith together.</p>
          </div>
          <div className="card">
            <h3>Serve</h3>
            <p>Discover your gifts and use them to make a difference in our church and community.</p>
          </div>
          <div className="card">
            <h3>Classes</h3>
            <p>Learn more about Christianity, the Bible, and what we believe through our classes.</p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default ImNewHere
