let bookings = [];

let form = document.getElementById("bookingForm");
let movieSelect = document.getElementById("movie");
let timeSelect = document.getElementById("time");
let emailInput = document.getElementById("email");
let ticketsInput = document.getElementById("tickets");
let totalText = document.getElementById("total");
let errorText = document.getElementById("error");
let listBox = document.getElementById("list");
let countTitle = document.getElementById("count");

function updateTotal() {
    let selectedOption = movieSelect.selectedOptions[0];
    let price = Number(selectedOption.dataset.price) || 0;

    let tickets = Number(ticketsInput.value) || 0;

    if (tickets > 0) {
        totalText.innerText = "₹" + (price * tickets);
    } else {
        totalText.innerText = "₹0";
    }
}

movieSelect.addEventListener("change", updateTotal);
ticketsInput.addEventListener("input", updateTotal);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let movie = movieSelect.value;
    let time = timeSelect.value;
    let email = emailInput.value;
    let tickets = Number(ticketsInput.value);

    if (movie === "" || time === "" || email === "" || tickets < 1) {
        errorText.style.display = "block";
        return;
    }
    errorText.style.display = "none";

    let booking = {
        id: Date.now(),
        movie: movie,
        time: time,
        email: email,
        tickets: tickets,
        total: totalText.innerText
    };
    bookings.push(booking);

    showBookings();
    alert("Booking successful for " + movie + "!");

    form.reset();
    totalText.innerText = "₹0";
});

function cancelBooking(id) {
    bookings = bookings.filter(function (b) {
        return b.id !== id;
    });
    showBookings();
}

function showBookings() {
    countTitle.innerText = "Your Bookings (" + bookings.length + ")";

    listBox.innerHTML = "";

    if (bookings.length === 0) {
        listBox.innerText = "No bookings yet.";
        return;
    }

    bookings.forEach(function (b) {
        let item = document.createElement("div");
        item.className = "item";

        let title = document.createElement("p");
        title.innerText = b.movie + " (" + b.time + ")";

        let details = document.createElement("p");
        details.innerText = "Tickets: " + b.tickets + " | " + b.total;

        let emailLine = document.createElement("p");
        emailLine.innerText = "Email: " + b.email;

        let cancelButton = document.createElement("button");
        cancelButton.innerText = "Cancel";
        cancelButton.addEventListener("click", function () {
            cancelBooking(b.id);
        });

        item.appendChild(title);
        item.appendChild(details);
        item.appendChild(emailLine);
        item.appendChild(cancelButton);
        listBox.appendChild(item);
    });
}