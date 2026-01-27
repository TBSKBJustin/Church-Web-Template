import Section from '../components/Section'

const Sermons = () => {
  const sermonSeries = [
    {
      title: "Living by Faith",
      date: "Current Series",
      description: "Exploring what it means to walk by faith in everyday life, trusting God's promises and character.",
      weeks: 6
    },
    {
      title: "The Gospel of John",
      date: "Fall 2025",
      description: "A verse-by-verse study through the Gospel of John, discovering who Jesus is and what He came to do.",
      weeks: 12
    },
    {
      title: "Psalms: Songs of the Heart",
      date: "Summer 2025",
      description: "Learning to worship, pray, and lament through the poetry of the Psalms.",
      weeks: 8
    }
  ]

  const recentSermons = [
    {
      title: "Faith in the Fire",
      speaker: "Rev. John Smith",
      date: "January 26, 2026",
      passage: "Daniel 3:1-30"
    },
    {
      title: "Walking by Faith, Not by Sight",
      speaker: "Rev. John Smith",
      date: "January 19, 2026",
      passage: "2 Corinthians 5:7"
    },
    {
      title: "The Prayer of Faith",
      speaker: "Rev. John Smith",
      date: "January 12, 2026",
      passage: "James 5:13-18"
    },
    {
      title: "Faith That Moves Mountains",
      speaker: "Rev. John Smith",
      date: "January 5, 2026",
      passage: "Matthew 17:14-21"
    }
  ]

  return (
    <>
      <Section title="Sermons" className="first-section">
        <p style={{ fontSize: '18px' }}>
          We believe God's Word is alive and active. Listen to our recent messages and 
          sermon series to grow in your faith and understanding of Scripture.
        </p>
      </Section>

      <Section title="Current Sermon Series" gray>
        <div className="cards-grid">
          {sermonSeries.map((series, index) => (
            <div key={index} className="card">
              <h3>{series.title}</h3>
              <p style={{ 
                color: 'var(--color-primary)', 
                fontWeight: '600', 
                marginBottom: '15px',
                fontSize: '14px'
              }}>
                {series.date} • {series.weeks} weeks
              </p>
              <p>{series.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Recent Messages" dark>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {recentSermons.map((sermon, index) => (
            <div 
              key={index} 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '24px',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'left',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{sermon.title}</h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                {sermon.speaker} • {sermon.date}
              </p>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '15px',
                fontStyle: 'italic'
              }}>
                {sermon.passage}
              </p>
              <button 
                className="btn primary" 
                style={{ marginTop: '15px', fontSize: '14px', padding: '10px 20px' }}
              >
                Listen Now
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Watch Live" gray>
        <p style={{ marginBottom: '30px' }}>
          Join us online every Sunday at 9:00 AM & 11:00 AM for our live worship services.
        </p>
        <div style={{ marginTop: '30px' }}>
          <a href="#" className="btn primary" style={{ marginRight: '15px' }}>
            Watch Live
          </a>
          <a href="#" className="btn secondary" style={{ 
            background: 'var(--color-dark)',
            color: 'white',
            border: '2px solid var(--color-dark)'
          }}>
            View Archive
          </a>
        </div>
      </Section>

      <Section title="Sermon Notes & Resources">
        <p style={{ marginBottom: '40px' }}>
          Download sermon notes, discussion guides, and additional resources to help you 
          go deeper in your study of God's Word.
        </p>
        <div className="cards-grid" style={{ maxWidth: '800px' }}>
          <div className="card">
            <h3>Weekly Sermon Notes</h3>
            <p>Follow along and take notes during the message with our printable guides.</p>
            <a href="#" style={{ 
              color: 'var(--color-primary)', 
              fontWeight: '600', 
              marginTop: '15px',
              display: 'inline-block'
            }}>
              Download PDF
            </a>
          </div>
          <div className="card">
            <h3>Small Group Guides</h3>
            <p>Discussion questions and activities to explore the sermon with your group.</p>
            <a href="#" style={{ 
              color: 'var(--color-primary)', 
              fontWeight: '600', 
              marginTop: '15px',
              display: 'inline-block'
            }}>
              Download PDF
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Sermons
