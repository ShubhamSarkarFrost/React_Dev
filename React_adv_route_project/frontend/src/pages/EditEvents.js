import { useLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm'

function EditEventsPage() {
  const data = useLoaderData();
  return <EventForm event={data.event}/>
  
}

export default EditEventsPage;
