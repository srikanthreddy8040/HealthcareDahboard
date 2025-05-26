import React from 'react';
import { scheduleData } from '../../../data/appointmentData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">The Upcoming Schedule</h3>
      
      <div className="space-y-6">
        {Object.entries(scheduleData).map(([day, appointments], index) => (
          <div key={index}>
            <h4 className="text-sm font-medium text-accent-500 mb-3">On {day}</h4>
            <div className="space-y-3">
              {appointments.map((appointment, appointmentIndex) => (
                <SimpleAppointmentCard
                  key={appointmentIndex}
                  title={appointment.title}
                  time={appointment.time}
                  status={appointment.status}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;