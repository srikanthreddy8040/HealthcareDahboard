import React from 'react';
import { anatomyData } from '../../../data/healthData';

const AnatomySection: React.FC = () => {
  return (
    <div className="card h-full relative">
      <h3 className="text-lg font-semibold mb-4">Anatomy Overview</h3>
      
      <div className="relative h-64 flex justify-center">
        {/* Human body illustration */}
        <div className="relative w-40 h-full">
          <img 
            src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=300" 
            alt="Human anatomy" 
            className="mx-auto h-full object-contain opacity-30"
          />
          
          {/* Health indicators positioned around the body */}
          {anatomyData.map((item, index) => (
            <div 
              key={index}
              className="absolute flex items-center"
              style={{ 
                top: `${item.position.y}%`, 
                left: `${item.position.x}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`status-indicator ${
                item.status === 'healthy' ? 'status-healthy' : 
                item.status === 'warning' ? 'status-warning' : 'status-error'
              } mr-2`}></div>
              <span className="text-xs font-medium whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;