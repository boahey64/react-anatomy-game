import Review from './Review.jsx';
import { useState } from 'react';

export default function ReviewInput() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [showFeedback, setShowFeedback] = useState('');
  const [showName, setShowName] = useState('');

  function handleFeedbackChange(event) {
    setFeedback(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSaveFeedback() {
    setShowFeedback(feedback);
    setShowName(name);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea required value={feedback} onChange={handleFeedbackChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={handleNameChange}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={showFeedback} student={showName} />

        <p>
          <button onClick={handleSaveFeedback}>Save</button>
        </p>
      </section>
    </>
  );
}
