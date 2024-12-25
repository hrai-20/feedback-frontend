import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard/FeedbackDashboard';

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const fetchFeedback = async () => {
    try {
      const url = new URL('https://feedback-backend-2ftb.onrender.com/feedback');
      if (filter) url.searchParams.append('category', filter);
      url.searchParams.append('sortBy', 'timestamp');
      url.searchParams.append('order', sortOrder);

      const response = await fetch(url);
      const data = await response.json();
      setFeedbacks(data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [filter, sortOrder]);

  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="p-4 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold text-center">Feedback System</h1>
      </header>
      <main className="flex-1 flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/3 p-4 bg-gray-100">
          <FeedbackForm onFeedbackSubmit={fetchFeedback} />
        </div>
        <div className="w-full md:w-2/3 p-4 bg-gray-50">
          <FeedbackDashboard
            feedbacks={feedbacks}
            filter={filter}
            setFilter={setFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
