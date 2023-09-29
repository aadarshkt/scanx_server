export function calculateTimeDifference(
  startDateTime,
  endDateTime
) {
  const startDate = new Date(
    startDateTime
  );
  const endDate = new Date(endDateTime);

  // Calculate the difference in milliseconds
  const timeDifference =
    endDate - startDate;

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(
    timeDifference /
      (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (timeDifference %
      (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeDifference %
      (1000 * 60 * 60)) /
      (1000 * 60)
  );
  const seconds = Math.floor(
    (timeDifference % (1000 * 60)) /
      1000
  );

  // Format the result including days (DD:HH:MM:SS)
  const formattedTimeDifference = `${days}:${padZero(
    hours
  )}:${padZero(minutes)}:${padZero(
    seconds
  )}`;

  return formattedTimeDifference;
}

function padZero(value) {
  return value < 10
    ? `0${value}`
    : `${value}`;
}
