import { useLoaderData, json } from 'react-router-dom';
import EventItem from '../components/EventItem'



function EventsDetailPage() {
   
  //const params = useParams();
  const data = useLoaderData()      

  return (
    <>
      {/* <h1> Welcome to Events Page</h1>
      <p>{params.eventsId}</p> */}
      <EventItem event={data.event}/>
    </>
  );
}

export default EventsDetailPage;

export async function loader({request, params}){
  const id = params.eventsId
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if(!response.ok){
    return json(
      {message: 'Could Not Fetch details for selected Event!!.'},
      {status: 500}
    )
  }else{
    return response;
  }
 
}
