import ChurchSchedule from '../../components/ChurchSchedule';

export default function SchedulePage() {
  return (
    <main className="zine-container">
      <h1 className="zine-title">The Church Schedule</h1>
      <p className="text-xl text-center mb-12 italic">All Upcoming Services at the Church of Baseball</p>
      
      <ChurchSchedule />
    </main>
  );
} 