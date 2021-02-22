import { formatDate, formatDuration, formatPrice } from "../utils";

function EventItem({ event }) {
  return (
    <li>
      <article className="flex flex-col sm:flex-row bg-white border shadow rounded p-4 m-4 md:mx-auto md:w-3/4 lg:w-1/2 2xl:w-1/3">
        {event.photos[0] && (
          <figure className="mb-2 sm:mr-4 sm:mb-0">
            <img
              src={event.photos[0].small_url}
              alt={event.title}
              loading="lazy"
              className="w-full h-40 sm:w-44 sm:h-full object-fit sm:object-cover rounded-sm"
            ></img>
          </figure>
        )}

        <div className="flex flex-col">
          <header className="mb-2">
            <h1 className="text-xl">{event.title}</h1>
            <h2 className="text-gray-500">{event.provider.name}</h2>
          </header>

          {event.start_time_iso_string && event.end_time_iso_string && (
            <div>
              <time className="block">
                {formatDate(event.start_time_iso_string)}
              </time>
              <time className="block">
                {formatDuration(
                  event.start_time_iso_string,
                  event.end_time_iso_string
                )}
              </time>
            </div>
          )}

          <div className="mb-4">
            <p>{event.attendance_string}</p>
            <p>{formatPrice(event.price_integer, event.currency)}</p>
          </div>

          <div className="mt-auto flex items-baseline">
            {event.available_spots > 0 ? (
              <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white px-2 py-1 rounded">
                Reserve Your Spot
              </button>
            ) : (
              <p className="text-yellow-600">Reservations Full</p>
            )}

            {event.available_spots > 0 && event.available_spots < 5 && (
              <p className="ml-2 text-sm text-yellow-600">
                Only {event.available_spots} spots left!
              </p>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}

export default EventItem;
