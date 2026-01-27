import Section from '../components/Section'

const ContactUs = () => {
  return (
    <>
      <Section title="Contact Us" className="first-section">
        <p style={{ fontSize: '18px' }}>
          We'd love to hear from you! Whether you have questions, prayer requests, 
          or just want to say hello, feel free to reach out.
        </p>
      </Section>

      <Section title="Get in Touch" gray>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: 'var(--color-text)'
              }}>
                Name *
              </label>
              <input 
                type="text" 
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: 'var(--color-text)'
              }}>
                Email *
              </label>
              <input 
                type="email" 
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: 'var(--color-text)'
              }}>
                Phone
              </label>
              <input 
                type="tel" 
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: 'var(--color-text)'
              }}>
                Subject *
              </label>
              <select 
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select a topic...</option>
                <option value="general">General Inquiry</option>
                <option value="prayer">Prayer Request</option>
                <option value="visit">Planning a Visit</option>
                <option value="serve">Serving Opportunities</option>
                <option value="giving">Giving Questions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: 'var(--color-text)'
              }}>
                Message *
              </label>
              <textarea 
                required
                rows="6"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn primary"
              style={{ width: '100%' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <Section title="Visit Us" dark>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px',
            textAlign: 'left'
          }}>
            <div>
              <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>Location</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                123 Church Street<br/>
                Your City, State 12345
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--color-primary)', 
                  marginTop: '10px',
                  display: 'inline-block',
                  textDecoration: 'underline'
                }}
              >
                Get Directions →
              </a>
            </div>

            <div>
              <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>Service Times</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Sunday Worship<br/>
                9:00 AM & 11:00 AM
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginTop: '15px' }}>
                Wednesday Prayer<br/>
                7:00 PM
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>Contact Info</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <strong>Phone:</strong><br/>
                (555) 123-4567
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginTop: '15px' }}>
                <strong>Email:</strong><br/>
                <a 
                  href="mailto:info@church.org"
                  style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
                >
                  info@church.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Office Hours" gray>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ marginBottom: '20px', textAlign: 'center' }}>
            Our church office is open during the following hours:
          </p>
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontWeight: '600' }}>Monday - Thursday</span>
              <span>9:00 AM - 5:00 PM</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontWeight: '600' }}>Friday</span>
              <span>9:00 AM - 3:00 PM</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '600' }}>Saturday - Sunday</span>
              <span>Closed (except during services)</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Connect on Social Media">
        <p style={{ marginBottom: '30px' }}>
          Stay updated with the latest news, events, and encouragement by following us on social media.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="btn secondary" style={{ 
            background: 'var(--color-dark)',
            color: 'white',
            border: '2px solid var(--color-dark)'
          }}>
            Facebook
          </a>
          <a href="#" className="btn secondary" style={{ 
            background: 'var(--color-dark)',
            color: 'white',
            border: '2px solid var(--color-dark)'
          }}>
            Instagram
          </a>
          <a href="#" className="btn secondary" style={{ 
            background: 'var(--color-dark)',
            color: 'white',
            border: '2px solid var(--color-dark)'
          }}>
            YouTube
          </a>
        </div>
      </Section>
    </>
  )
}

export default ContactUs
