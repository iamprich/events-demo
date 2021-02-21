import EventItem from "./EventItem";

function EventList({ events }) {
  return (
    <ul>
      {events.map((event) => {
        return <EventItem event={event} key={event.id} />;
      })}
    </ul>
  );
}

export default EventList;
