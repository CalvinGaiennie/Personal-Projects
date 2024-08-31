document
  .getElementById("trip-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const catchDetails = document.getElementById("catch").value;
    const gear = document.getElementById("gear").value;
    const notes = document.getElementById("notes").value;

    const trip = {
      location,
      date,
      catchDetails,
      gear,
      notes,
    };

    addTripToList(trip);
    clearForm();
  });

function addTripToList(trip) {
  const tripList = document.getElementById("trip-list");
  const listItem = document.createElement("li");

  listItem.innerHTML = `
        <p><strong>Location:</strong> ${trip.location}</p>
        <p><strong>Date:</strong> ${trip.date}</p>
        <p><strong>Catch:</strong> ${trip.catchDetails}</p>
        <p><strong>Gear:</strong> ${trip.gear}</p>
        <p><strong>Notes:</strong> ${trip.notes}</p>
    `;

  tripList.appendChild(listItem);
}

function clearForm() {
  document.getElementById("trip-form").reset();
}
