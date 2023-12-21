// @desc        For testing. Since stored cookie use different timezone.
// @example     getCookieExpiryWithCurrentTimezone('Wed, 20 Dec 2023 18:16:27 GMT')
const getCookieExpiryWithCurrentTimezone = (utcTimestamp) => {

    // UTC timestamp from the "Expires" attribute
    //const utcTimestamp = "Wed, 20 Dec 2023 18:02:29 GMT";

    // Create a Date object from the UTC timestamp
    const utcDate = new Date(utcTimestamp);

    // Get the local time zone
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Format the local date and time
    const localDate = utcDate.toLocaleString(undefined, { timeZone: localTimeZone });

    console.log(localDate); // Display the local date and time

};

export { getCookieExpiryWithCurrentTimezone };