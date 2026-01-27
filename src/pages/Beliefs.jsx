import Section from '../components/Section'

const Beliefs = () => {
  return (
    <>
      <Section title="What We Believe" className="first-section">
        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
          Our beliefs are rooted in the Bible and centered on Jesus Christ. 
          Here are the core truths that guide our faith and practice.
        </p>
      </Section>

      <Section title="The Bible" gray>
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <p>
            We believe the Bible is the inspired, authoritative Word of God, without error 
            in all it affirms. It is our final authority for faith and practice, containing 
            everything we need for life and godliness.
          </p>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
            "All Scripture is God-breathed and is useful for teaching, rebuking, correcting 
            and training in righteousness." - 2 Timothy 3:16
          </p>
        </div>
      </Section>

      <Section title="God">
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <p>
            We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. 
            God is infinite, eternal, and unchangeable in His being, wisdom, power, holiness, 
            justice, goodness, and truth.
          </p>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
            "Hear, O Israel: The Lord our God, the Lord is one." - Deuteronomy 6:4
          </p>
        </div>
      </Section>

      <Section title="Jesus Christ" dark>
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <p>
            We believe Jesus Christ is fully God and fully man, born of a virgin, lived a sinless life, 
            died on the cross for our sins, rose from the dead on the third day, ascended to heaven, 
            and will return again in glory to judge the living and the dead.
          </p>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)' }}>
            "For God so loved the world that he gave his one and only Son, that whoever believes 
            in him shall not perish but have eternal life." - John 3:16
          </p>
        </div>
      </Section>

      <Section title="The Holy Spirit" gray>
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <p>
            We believe the Holy Spirit is the third person of the Trinity, dwelling in every believer 
            from the moment of salvation. He convicts the world of sin, regenerates, sanctifies, 
            and empowers believers for life and service.
          </p>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
            "But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach 
            you all things." - John 14:26
          </p>
        </div>
      </Section>

      <Section title="Salvation">
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <p>
            We believe salvation is a gift of God's grace, received through faith in Jesus Christ alone. 
            It is not earned by works, but is freely given to all who repent of their sins and trust 
            in Christ for forgiveness and eternal life.
          </p>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
            "For it is by grace you have been saved, through faith—and this is not from yourselves, 
            it is the gift of God—not by works, so that no one can boast." - Ephesians 2:8-9
          </p>
        </div>
      </Section>

      <Section title="The Church" dark>
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <p>
            We believe the Church is the body of Christ, composed of all true believers from every 
            nation and generation. The local church exists to worship God, make disciples, build up 
            believers, and serve the world in Jesus' name.
          </p>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)' }}>
            "And he is the head of the body, the church; he is the beginning and the firstborn 
            from among the dead." - Colossians 1:18
          </p>
        </div>
      </Section>

      <Section title="Eternity">
        <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
          <p>
            We believe in the resurrection of both the saved and the lost: the saved to eternal life 
            with God in heaven, and the lost to eternal separation from God. We believe Jesus Christ 
            will return personally and visibly to establish His kingdom.
          </p>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
            "And this is the testimony: God has given us eternal life, and this life is in his Son." 
            - 1 John 5:11
          </p>
        </div>
      </Section>
    </>
  )
}

export default Beliefs
