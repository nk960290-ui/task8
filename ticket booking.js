let age = Number(prompt("Enter Your Age:"));

if (age >= 18) {

    let booking = confirm("Do you want to book the movie ticket?");

    if (booking) {
        console.log("Ticket Booked Successfully!");
    } else {
        console.log("Booking Cancelled.");
    }

} else {
    console.log("Not Allowed. Age must be 18 or above.");
}