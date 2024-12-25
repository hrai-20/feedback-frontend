import React from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbacks }) => (
  <div className="space-y-4">
    {feedbacks.map((feedback) => (
      <FeedbackItem key={feedback._id} feedback={feedback} />
    ))}
  </div>
);

export default FeedbackList;