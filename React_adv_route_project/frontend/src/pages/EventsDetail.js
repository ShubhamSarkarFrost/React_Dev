import { useParams } from 'react-router-dom';



function EventsDetailPage() {
   
  const params = useParams();      

  return (
    <>
      <h1> Welcome to Events Page</h1>
      <p>{params.eventsId}</p>
    </>
  );
}

export default EventsDetailPage;
