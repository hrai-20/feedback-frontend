import React from 'react';

const FeedbackItem = ({ feedback }) => (
  <div className="p-4 border rounded">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-medium">{feedback.userName}</h3>
        <p className="text-sm text-gray-500">{feedback.email}</p>
      </div>
      <span className="text-sm bg-gray-100 px-2 py-1 rounded">
        {feedback.category.replace('_', ' ')}
      </span>
    </div>
    <p className="mt-2">{feedback.feedbackText}</p>
    <p className="text-sm text-gray-500 mt-2">
      {new Date(feedback.timestamp).toLocaleString()}
    </p>
  </div>
);

export default FeedbackItem;