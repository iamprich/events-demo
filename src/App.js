import { useEffect, useState } from "react";
import EventList from "./components/EventList";

const BASE_URL = "https://api.getgalore-staging.com/v1/";
const EVENTS_URL = `${BASE_URL}/events`;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_VERSION = "1.25";

function App() {
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    fetch(EVENTS_URL, {
      headers: {
        "Api-Key": API_KEY,
        "Api-Version": API_VERSION
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
