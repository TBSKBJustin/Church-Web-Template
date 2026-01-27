import Section from '../components/Section'

const Leadership = () => {
  const pastors = [
    {
      name: "Rev. John Smith",
      title: "Lead Pastor",
      description: "John has been serving as our Lead Pastor since 2010. He is passionate about teaching God's Word and shepherding people toward spiritual maturity."
    },
    {
      name: "Sarah Johnson",
      title: "Worship Pastor",
      description: "Sarah leads our worship ministry with a heart for creating authentic worship experiences that draw people closer to God."
    },
    {
      name: "Mike Williams",
      title: "Youth Pastor",
      description: "Mike has a passion for investing in the next generation and helping students discover their identity in Christ."
    }
  ]

  const elders = [
    { name: "David Chen", role: "Elder" },
    { name: "Robert Martinez", role: "Elder" },
    { name: "James Anderson", role: "Elder" },
    { name: "Lisa Thompson", role: "Elder" }
  ]

  return (
    <>
      <Section title="Our Leadership" className="first-section">
        <p>
          Our church is led by a team of dedicated pastors and elders who are committed 
          to serving God and shepherding our community with wisdom, integrity, and love.
        </p>
      </Section>

      <Section title="Pastoral Staff" gray>
        <div className="cards-grid">
          {pastors.map((pastor, index) => (
            <div key={index} className="card">
              <h3>{pastor.name}</h3>
              <p style={{ 
                color: 'var(--color-primary)', 
                fontWeight: '600', 
                marginBottom: '15px' 
              }}>
                {pastor.title}
              </p>
              <p>{pastor.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Elder Board" dark>
        <p style={{ marginBottom: '40px' }}>
          Our elders provide spiritual oversight and leadership, working alongside our 
          pastoral staff to guide the direction and health of our church.
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {elders.map((elder, index) => (
            <div key={index}>
              <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>{elder.name}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{elder.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Leadership Philosophy">
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '15px' }}>Servant Leadership</h3>
          <p style={{ marginBottom: '30px' }}>
            We believe leadership is about serving others, following the example of Jesus 
            who came not to be served but to serve.
          </p>

          <h3 style={{ marginBottom: '15px' }}>Biblical Foundation</h3>
          <p style={{ marginBottom: '30px' }}>
            Our leadership operates according to biblical qualifications and principles, 
            ensuring that Christ is the head of our church.
          </p>

          <h3 style={{ marginBottom: '15px' }}>Shared Leadership</h3>
          <p style={{ marginBottom: '30px' }}>
            We practice plurality of leadership, with pastors and elders working together 
            in unity to provide wisdom, accountability, and guidance.
          </p>

          <h3 style={{ marginBottom: '15px' }}>Empowering Others</h3>
          <p>
            Our goal is to equip and empower every member of our church to discover and 
            use their gifts for God's glory and the benefit of others.
          </p>
        </div>
      </Section>

      <Section title="Get Involved" gray>
        <p style={{ marginBottom: '30px' }}>
          We're always looking for people who want to serve and make a difference. 
          Whether you're interested in greeting, children's ministry, worship, or behind-the-scenes 
          support, there's a place for you.
        </p>
        <a href="/im-new-here" className="btn primary">Learn More</a>
      </Section>
    </>
  )
}

export default Leadership
