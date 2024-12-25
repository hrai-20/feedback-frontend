import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FeedbackList from './FeedbackList';
import FeedbackFilter from './FeedbackFilter';

const FeedbackDashboard = ({ feedbacks, filter, setFilter, sortOrder, setSortOrder }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <FeedbackFilter
          filter={filter}
          setFilter={setFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <FeedbackList feedbacks={feedbacks} />
      </CardContent>
    </Card>
  );
};

export default FeedbackDashboard;