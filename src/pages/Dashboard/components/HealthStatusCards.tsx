import React from 'react';
import { healthStatusCards } from '../../../data/healthData';

const HealthStatusCards: React.FC = () => {
  return (
    <div className="card h-full">
      <h3 className="text-lg font-semibold mb-4">Health Status</h3>
      
      <div className="space-y-4">
        {healthStatusCards.map((card, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
            <div>
              <h4 className="font-medium">{card.title}</h4>
              <p className="text-xs text-accent-500">{card.date}</p>
            </div>
            
            <div className="flex items-center">
              <div className={`status-indicator ${
                card.status === 'healthy' ? 'status-healthy' : 
                card.status === 'warning' ? 'status-warning' : 'status-error'
              }`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthStatusCards;