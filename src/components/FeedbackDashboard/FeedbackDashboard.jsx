import React from 'react';

const FeedbackDashboard = ({ feedbacks, filter, setFilter, sortOrder, setSortOrder }) => {
  return (
    <div className="h-screen max-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
        <h2 className="text-2xl font-bold p-6 pb-4">Feedback Dashboard</h2>
        
        <div className="px-6 pb-4 flex gap-4">
          <select
            className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="suggestion">Suggestions</option>
            <option value="bug_report">Bug Reports</option>
            <option value="feature_request">Feature Requests</option>
            <option value="other">Other</option>
          </select>
          <select
            className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
        
        <div className="flex-1 min-h-0 px-6 pb-6">
          <div 
            className="h-full overflow-y-auto space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {feedbacks.map((feedback) => (
              <div key={feedback._id} className="p-4 border rounded hover:bg-gray-50">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDashboard;