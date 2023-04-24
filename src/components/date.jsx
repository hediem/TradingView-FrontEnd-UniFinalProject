export default function date(timestamp) {
    const date = new Date(timestamp);

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()]; // Get month name
    const day = date.getDate(); // Get day
    const year = date.getFullYear(); // Get year

    const dateString = `${month} ${day}, ${year}`;
    return dateString;
}

export function longDate(timestamp) {

    const date = new Date(timestamp);

    const options = {
        weekday: 'long', // Get full weekday name
        month: 'long', // Get full month name
        day: 'numeric', // Get day as numeric value
        year: 'numeric' // Get year as numeric value
    };

    const dateString = date.toLocaleDateString('en-US', options);
    return dateString;

}