import React from 'react';

const ActivityFeed: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Activity</h3>
      
      <div className="mb-4">
        <p className="text-sm">3 appointments on this week</p>
      </div>
      
      <div className="flex items-end h-32 space-x-4 pb-1">
        {/* Activity bars */}
        {[
          { day: 'Mon', height: '40%', active: false },
          { day: 'Tue', height: '30%', active: false },
          { day: 'Wed', height: '70%', active: true },
          { day: 'Thu', height: '50%', active: false },
          { day: 'Fri', height: '20%', active: false },
          { day: 'Sat', height: '60%', active: false },
          { day: 'Sun', height: '10%', active: false },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className={`w-full rounded-t-md ${item.active ? 'bg-primary-500' : 'bg-primary-100'}`}
              style={{ height: item.height }}
            ></div>
            <span className="text-xs mt-2 text-accent-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;