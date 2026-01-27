import Section from '../components/Section'

const About = () => {
  return (
    <>
      <Section title="Our Story" className="first-section">
        <p>
          Founded in 1985, our church has been a beacon of hope and faith in this community 
          for over three decades. What started as a small gathering of believers has grown 
          into a vibrant community dedicated to worshiping God and serving others.
        </p>
      </Section>

      <Section title="Our Mission" dark>
        <p>
          To glorify God by making disciples who love Jesus, love people, and transform 
          communities through the power of the Gospel.
        </p>
      </Section>

      <Section title="Our Values" gray>
        <div className="cards-grid">
          <div className="card">
            <h3>Scripture</h3>
            <p>We believe the Bible is God's inspired Word and the foundation for all we do.</p>
          </div>
          <div className="card">
            <h3>Community</h3>
            <p>We're committed to authentic relationships and caring for one another.</p>
          </div>
          <div className="card">
            <h3>Service</h3>
            <p>We serve our local community and support global missions with joy and generosity.</p>
          </div>
          <div className="card">
            <h3>Prayer</h3>
            <p>We depend on God through prayer in all aspects of church life and ministry.</p>
          </div>
          <div className="card">
            <h3>Discipleship</h3>
            <p>We're dedicated to helping people grow in their faith and relationship with Jesus.</p>
          </div>
          <div className="card">
            <h3>Worship</h3>
            <p>We gather to praise God with hearts full of gratitude and reverence.</p>
          </div>
        </div>
      </Section>

      <Section title="What We Believe">
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '15px' }}>The Bible</h3>
          <p style={{ marginBottom: '30px' }}>
            We believe the Bible is the inspired, authoritative Word of God, without error in all it affirms.
          </p>

          <h3 style={{ marginBottom: '15px' }}>God</h3>
          <p style={{ marginBottom: '30px' }}>
            We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
          </p>

          <h3 style={{ marginBottom: '15px' }}>Jesus Christ</h3>
          <p style={{ marginBottom: '30px' }}>
            We believe Jesus Christ is fully God and fully man, born of a virgin, lived a sinless life, 
            died for our sins, rose from the dead, and will return again.
          </p>

          <h3 style={{ marginBottom: '15px' }}>Salvation</h3>
          <p style={{ marginBottom: '30px' }}>
            We believe salvation is a gift of God's grace, received through faith in Jesus Christ alone.
          </p>
        </div>
      </Section>
    </>
  )
}

export default About
