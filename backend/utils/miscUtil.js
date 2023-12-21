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

// @desc        For testing. y-m-d h:m:s format
// @example     getFormattedTimestamp('2023-12-21T10:44:03.935+00:00')
const getFormattedTimestamp = (timestampStr) => {

    /// Given timestamp
    // const timestampStr = "2023-12-21T10:44:03.935+00:00";

    // Convert string to Date object
    const timestampDate = new Date(timestampStr);

    // Format date as a string in the "month-day-year hour:minute:second" format in GMT+8
    const options = {
        timeZone: "Asia/Singapore",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Use 24-hour clock
    };
    const formattedTimestamp = timestampDate.toLocaleString("en-US", options).replace(/\//g, '-').replace(',', '');

    // Add AM/PM to the formatted timestamp
    const ampm = timestampDate.getHours() >= 12 ? "PM" : "AM";
    const finalFormattedTimestamp = `${formattedTimestamp} ${ampm}`;

    // Output the result
    console.log(finalFormattedTimestamp);

};


export {
    getCookieExpiryWithCurrentTimezone,
    getFormattedTimestamp
};