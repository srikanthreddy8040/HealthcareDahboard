import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarData, appointmentData } from '../../../data/appointmentData';

const CalendarView: React.FC = () => {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">October 2023</h3>
        <div className="flex space-x-2">
          <button className="p-1 rounded-md hover:bg-accent-100">
            <ChevronLeft size={18} />
          </button>
          <button className="p-1 rounded-md hover:bg-accent-100">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-center text-xs text-accent-500 font-medium py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {calendarData.map((day, index) => (
            <div 
              key={index} 
              className={`relative h-16 p-1 rounded-lg ${
                day.isCurrentMonth ? 'bg-white' : 'bg-accent-100 opacity-50'
              } ${day.isToday ? 'border border-primary-500' : ''}`}
            >
              <span className={`text-xs ${
                day.isToday ? 'bg-primary-500 text-white w-5 h-5 rounded-full flex items-center justify-center' : ''
              }`}>
                {day.date}
              </span>
              
              {day.appointments && (
                <div className="mt-1 space-y-1">
                  {day.appointments.map((time, timeIndex) => (
                    <div 
                      key={timeIndex} 
                      className="text-xs bg-primary-100 text-primary-700 px-1 py-0.5 rounded"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Appointment Cards */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Upcoming Appointments</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {appointmentData.slice(0, 2).map((appointment, index) => (
            <div key={index} className="bg-accent-50 p-3 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-medium">{appointment.title}</h5>
                <span className={`status-indicator ${
                  appointment.status === 'confirmed' ? 'status-healthy' : 
                  appointment.status === 'pending' ? 'status-warning' : ''
                }`}></span>
              </div>
              <p className="text-xs text-accent-500">{appointment.date} • {appointment.time}</p>
              <p className="text-xs mt-1">{appointment.doctor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;