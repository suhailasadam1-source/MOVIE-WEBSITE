import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to a real email/newsletter API.
    setSubmitted(true);
  };

  return (
    <section className="section newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__text">
          <h2>Stay updated with the latest movies</h2>
          <p>Subscribe to our newsletter and never miss a new release or exclusive trailer.</p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
        {submitted && <p className="newsletter__success">Thanks — check your inbox to confirm your subscription.</p>}
      </div>
    </section>
  );
}

export default Newsletter;
