export default function About() {
  return (
    <div className="zine-container">
      <section className="zine-section">
        <h2 className="zine-title">About Baseball Zine</h2>
        <div className="prose prose-lg max-w-none">
          <p className="zine-text">
            Baseball Zine is a DIY-style publication that celebrates the beautiful game of baseball. 
            We believe in the power of grassroots journalism and the importance of preserving the 
            stories that make baseball America&apos;s pastime.
          </p>
          
          <h3 className="text-2xl mt-8 mb-4">Our Mission</h3>
          <p className="zine-text">
            We aim to capture the essence of baseball through authentic storytelling, 
            detailed statistics, and a punk rock attitude. Our content is created by fans, 
            for fans, with a focus on the human side of the game.
          </p>
          
          <h3 className="text-2xl mt-8 mb-4">Get Involved</h3>
          <p className="zine-text">
            We&apos;re always looking for contributors! Whether you&apos;re a writer, 
            photographer, or just passionate about baseball, we&apos;d love to hear from you.
          </p>
          
          <button className="zine-button mt-6">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
} 