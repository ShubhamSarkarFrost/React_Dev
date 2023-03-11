// import { useEffect, useState } from 'react';
import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  // if(data.isError){
  //   return <p>{data.message}</p>
  // }

  const events = data.events;


  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader (){
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
      //return {isError: true, message:'Could Not Fetch the Events'};
      // throw new Response(JSON.stringify({message: 'Could Not Fetch Events.'}), {
      //   status:500,
      // })
      return json(
        {message: 'Could Not Fetch Events.'},
        {status: 500}
      )
  } else {
  //  const resData = await response.json();
  // //  return resData.events;
  //  const res = new Response('Any Data', {status:201});
  //  return res
    return response;
}

}
