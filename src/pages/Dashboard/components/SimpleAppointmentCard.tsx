import React from 'react';

interface SimpleAppointmentCardProps {
  title: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
}

const SimpleAppointmentCard: React.FC<SimpleAppointmentCardProps> = ({
  title,
  time,
  status
}) => {
  return (
    <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
      <div>
        <h5 className="font-medium">{title}</h5>
        <p className="text-xs text-accent-500">{time}</p>
      </div>
      
      <div className="flex items-center">
        <div className={`status-indicator ${
          status === 'confirmed' ? 'status-healthy' : 
          status === 'pending' ? 'status-warning' : 
          'status-error'
        }`}></div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;