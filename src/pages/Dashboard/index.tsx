import React from 'react';
import AnatomySection from './components/AnatomySection';
import HealthStatusCards from './components/HealthStatusCards';
import CalendarView from './components/CalendarView';
import UpcomingSchedule from './components/UpcomingSchedule';
import ActivityFeed from './components/ActivityFeed';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
      <div className="xl:col-span-2 space-y-4 lg:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <CalendarView />
      </div>
      
      <div className="space-y-4 lg:space-y-6">
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default Dashboard;