// Calendar data for the month view
export const calendarData = [
  { date: 27, isCurrentMonth: false, isToday: false },
  { date: 28, isCurrentMonth: false, isToday: false },
  { date: 29, isCurrentMonth: false, isToday: false },
  { date: 30, isCurrentMonth: false, isToday: false },
  { date: 1, isCurrentMonth: true, isToday: false },
  { date: 2, isCurrentMonth: true, isToday: false },
  { date: 3, isCurrentMonth: true, isToday: false },
  { date: 4, isCurrentMonth: true, isToday: false },
  { date: 5, isCurrentMonth: true, isToday: false },
  { date: 6, isCurrentMonth: true, isToday: false },
  { date: 7, isCurrentMonth: true, isToday: false },
  { date: 8, isCurrentMonth: true, isToday: false },
  { date: 9, isCurrentMonth: true, isToday: false },
  { date: 10, isCurrentMonth: true, isToday: false },
  { date: 11, isCurrentMonth: true, isToday: false },
  { date: 12, isCurrentMonth: true, isToday: false, appointments: ['09:00'] },
  { date: 13, isCurrentMonth: true, isToday: false },
  { date: 14, isCurrentMonth: true, isToday: true, appointments: ['11:00', '15:00'] },
  { date: 15, isCurrentMonth: true, isToday: false },
  { date: 16, isCurrentMonth: true, isToday: false },
  { date: 17, isCurrentMonth: true, isToday: false },
  { date: 18, isCurrentMonth: true, isToday: false, appointments: ['13:00'] },
  { date: 19, isCurrentMonth: true, isToday: false },
  { date: 20, isCurrentMonth: true, isToday: false },
  { date: 21, isCurrentMonth: true, isToday: false },
  { date: 22, isCurrentMonth: true, isToday: false },
  { date: 23, isCurrentMonth: true, isToday: false, appointments: ['09:00'] },
  { date: 24, isCurrentMonth: true, isToday: false },
  { date: 25, isCurrentMonth: true, isToday: false },
  { date: 26, isCurrentMonth: true, isToday: false },
  { date: 27, isCurrentMonth: true, isToday: false },
  { date: 28, isCurrentMonth: true, isToday: false },
  { date: 29, isCurrentMonth: true, isToday: false },
  { date: 30, isCurrentMonth: true, isToday: false },
  { date: 31, isCurrentMonth: true, isToday: false },
  { date: 1, isCurrentMonth: false, isToday: false },
  { date: 2, isCurrentMonth: false, isToday: false },
  { date: 3, isCurrentMonth: false, isToday: false },
];

// Appointment data for the calendar section
export const appointmentData = [
  {
    title: 'Dentist',
    date: 'Oct 18, 2023',
    time: '09:00 AM',
    doctor: 'Dr. John Smith',
    status: 'confirmed'
  },
  {
    title: 'Physiotherapy Appointment',
    date: 'Oct 23, 2023',
    time: '11:30 AM',
    doctor: 'Dr. Amanda Lee',
    status: 'pending'
  },
  {
    title: 'Cardiologist',
    date: 'Oct 14, 2023',
    time: '15:00 PM',
    doctor: 'Dr. Robert Johnson',
    status: 'confirmed'
  }
];

// Schedule data grouped by day
export const scheduleData = {
  'Thursday': [
    {
      title: 'Health checkup complete',
      time: '09:00 AM',
      status: 'completed'
    },
    {
      title: 'Ophthalmologist',
      time: '11:30 AM',
      status: 'pending'
    }
  ],
  'Saturday': [
    {
      title: 'Cardiologist',
      time: '10:00 AM',
      status: 'confirmed'
    },
    {
      title: 'Neurologist',
      time: '14:30 PM',
      status: 'confirmed'
    }
  ]
};