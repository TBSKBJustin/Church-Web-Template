import Hero from '../components/Hero'
import Section from '../components/Section'
import FAQ from '../components/FAQ'

const Home = () => {
  const faqItems = [
    {
      question: "What should I wear?",
      answer: "Casual is completely fine. We want you to feel comfortable and welcome. Come as you are!"
    },
    {
      question: "What time are services?",
      answer: "Our worship gatherings are on Sundays at 9:00 AM and 11:00 AM. Both services offer the same worship experience."
    },
    {
      question: "Is there childcare available?",
      answer: "Yes! We provide age-appropriate programs for children from infants through 5th grade during all services."
    },
    {
      question: "Where do I park?",
      answer: "We have free parking available in our main lot. Additional parking is available on the street and in the overflow lot behind the building."
    }
  ]

  return (
    <>
      <Hero 
        title="Glorifying God as a community of disciples"
        primaryButtonText="I'm New Here"
        primaryButtonLink="/im-new-here"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />

      <Section title="When?">
        <p>Worship Gatherings | Sundays at 9AM & 11AM</p>
      </Section>

      <Section title="Where?" gray>
        <p>123 Church Street, Your City, State 12345</p>
        <p style={{ marginTop: '20px' }}>
          We're located in the heart of the community, just off Main Street. 
          Free parking is available in our main lot.
        </p>
      </Section>

      <Section title="Who We Are" dark>
        <p>
          We are a community of believers dedicated to glorifying God through worship, 
          discipleship, and service. Our mission is to love God, love people, and make disciples 
          who make disciples.
        </p>
      </Section>

      <Section title="What to Expect">
        <div className="cards-grid">
          <div className="card">
            <h3>Welcoming Community</h3>
            <p>Experience authentic relationships and genuine care from the moment you walk through our doors.</p>
          </div>
          <div className="card">
            <h3>Biblical Teaching</h3>
            <p>Engage with relevant, Bible-centered messages that apply God's Word to everyday life.</p>
          </div>
          <div className="card">
            <h3>Vibrant Worship</h3>
            <p>Join us in contemporary worship that honors God and inspires hearts to praise.</p>
          </div>
        </div>
      </Section>

      <Section title="Frequently Asked Questions" gray>
        <FAQ items={faqItems} />
      </Section>
    </>
  )
}

export default Home
