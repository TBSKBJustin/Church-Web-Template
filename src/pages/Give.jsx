import Section from '../components/Section'

const Give = () => {
  return (
    <>
      <Section title="Give" className="first-section">
        <p style={{ fontSize: '20px', marginBottom: '20px' }}>
          Your generosity makes a difference in our community and around the world.
        </p>
        <p style={{ fontSize: '16px', color: '#666' }}>
          Thank you for partnering with us in God's work through your faithful giving.
        </p>
      </Section>

      <Section title="Why We Give" gray>
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ marginBottom: '20px' }}>
            Giving is an act of worship and obedience. When we give, we acknowledge that everything 
            we have comes from God, and we trust Him to provide for our needs. Our giving supports:
          </p>
          <ul style={{ 
            textAlign: 'left', 
            lineHeight: '2',
            fontSize: '16px',
            listStyle: 'none',
            paddingLeft: '0'
          }}>
            <li style={{ marginBottom: '12px' }}>✓ Local ministry and outreach programs</li>
            <li style={{ marginBottom: '12px' }}>✓ Global missions and missionaries</li>
            <li style={{ marginBottom: '12px' }}>✓ Church operations and staff</li>
            <li style={{ marginBottom: '12px' }}>✓ Community service initiatives</li>
            <li style={{ marginBottom: '12px' }}>✓ Building maintenance and facilities</li>
          </ul>
          <p style={{ marginTop: '30px', fontStyle: 'italic', color: '#666' }}>
            "Each of you should give what you have decided in your heart to give, not reluctantly 
            or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
          </p>
        </div>
      </Section>

      <Section title="Ways to Give" dark>
        <div className="cards-grid">
          <div className="card">
            <h3>Online Giving</h3>
            <p style={{ marginBottom: '20px' }}>
              Give securely online using your credit card, debit card, or bank account. 
              Set up one-time or recurring gifts.
            </p>
            <button className="btn primary">Give Online</button>
          </div>
          <div className="card">
            <h3>Text to Give</h3>
            <p style={{ marginBottom: '20px' }}>
              Text GIVE to (555) 123-4567 and follow the prompts to make a secure gift 
              from your mobile device.
            </p>
            <button className="btn primary">Text Now</button>
          </div>
          <div className="card">
            <h3>In Person</h3>
            <p style={{ marginBottom: '20px' }}>
              You can give during any worship service by placing your gift in the offering 
              boxes at the exits.
            </p>
            <a href="/im-new-here" className="btn primary">Service Times</a>
          </div>
        </div>
      </Section>

      <Section title="Other Ways to Give" gray>
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '15px' }}>Mail a Check</h3>
          <p style={{ marginBottom: '30px' }}>
            Make checks payable to "Church Community" and mail to:<br/>
            <strong style={{ display: 'block', marginTop: '10px' }}>
              Church Community<br/>
              123 Church Street<br/>
              Your City, State 12345
            </strong>
          </p>

          <h3 style={{ marginBottom: '15px' }}>Stock or Securities</h3>
          <p style={{ marginBottom: '30px' }}>
            Donating appreciated stock can provide significant tax benefits. Contact our office 
            at <a href="mailto:giving@church.org" style={{ color: 'var(--color-primary)' }}>
            giving@church.org</a> for more information.
          </p>

          <h3 style={{ marginBottom: '15px' }}>Estate Planning</h3>
          <p>
            Consider leaving a legacy gift through your will or trust. Speak with your financial 
            advisor or contact us to learn about planned giving opportunities.
          </p>
        </div>
      </Section>

      <Section title="Questions About Giving?">
        <p style={{ marginBottom: '30px' }}>
          We're here to help! If you have questions about giving, tax receipts, or how your 
          gifts are used, please don't hesitate to reach out.
        </p>
        <a href="/contact" className="btn primary">Contact Us</a>
      </Section>

      <Section title="Financial Transparency" dark>
        <p style={{ marginBottom: '30px' }}>
          We are committed to stewarding your gifts wisely and transparently. Annual financial 
          reports are available to all church members.
        </p>
        <div style={{ 
          display: 'inline-flex', 
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button className="btn secondary">View Annual Report</button>
          <button className="btn secondary">Budget Overview</button>
        </div>
      </Section>
    </>
  )
}

export default Give
