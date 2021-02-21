import { useEffect, useState } from "react";
import EventList from "./components/EventList";

const BASE_URL = "https://api.getgalore-staging.com/v1/";
const EVENTS_URL = `${BASE_URL}/events`;
const API_KEY = "y7LfciquwtdT4gCQgnNMzQxx";

function App() {
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    fetch(EVENTS_URL, {
      headers: {
        "Api-Key": API_KEY
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setEventList([...data.activities, ...data.series]);
      });
  };

  if (loading) {
    return <p className="text-2xl text-center mt-4">Loading...</p>;
  } else {
    return (
      <section id="events">
        {eventList.length > 0 ? (
          <EventList events={eventList} />
        ) : (
          <p>No Events Found</p>
        )}
      </section>
    );
  }
}

export default App;
