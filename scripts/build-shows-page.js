// const upcomingShows = [ 
//     {
//         date: "Mon Sept 09 2024",
//         venue: "Ronald Lane",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Tue Sept 17 2024",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Sat Oct 12 2024",
//         venue: "View Lounge",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Sat Nov 16 2024",
//         venue: "Hyatt Agency",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Fri Nov 29 2024",
//         venue: "Moscow Center",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Wed Dec 18 2024",
//         venue: "Press Club",
//         location: "San Francisco, CA",
//     },
//   ];

  // Get the container where you'll display the upcoming shows
const showsList = document.querySelector(".shows-list"); // assuming an <ul> or <div> container for the shows

// Function to loop through the upcoming shows and display them
async function loopAndAppendShows() {
  showsList.innerHTML = ""; // clears the container before appending new content

  const response = await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=daniela");
  console.log(response.data);
  const upcomingShows = response.data;

  for (let i = 0; i < upcomingShows.length; i++) {
    // Create a list item for each show
    const showItem = document.createElement("li");
    showItem.classList.add("show-item");

    //convert timestamp to date in XX/XX/XXXX format
    const date = new Date(upcomingShows[i].date);
    console.log(date.toLocaleDateString('en-US'));
    const dateNumber = date.toLocaleDateString('en-US')

    // DATE label
    const dateLabel = document.createElement("div");
    dateLabel.classList.add("show-label");
    dateLabel.textContent = "DATE";
    showItem.appendChild(dateLabel);

    // Create a heading for the show date
    const showDate = document.createElement("h3");
    showDate.innerText = dateNumber;
    showDate.classList.add("show-date");
    showItem.appendChild(showDate);

    // VENUE label
    const venueLabel = document.createElement("div");
    venueLabel.classList.add("show-label");
    venueLabel.textContent = "VENUE";
    showItem.appendChild(venueLabel);

    // Create a paragraph for the venue
    const showVenue = document.createElement("p");
    showVenue.innerText = upcomingShows[i].place;
    showVenue.classList.add("show-venue");
    showItem.appendChild(showVenue);

    // LOCATION label
    const locationLabel = document.createElement("div");
    locationLabel.classList.add("show-label");
    locationLabel.textContent = "LOCATION";
    showItem.appendChild(locationLabel);

    // Create a paragraph for the location
    const showLocation = document.createElement("p");
    showLocation.innerText = upcomingShows[i].location;
    showLocation.classList.add("show-location");
    showItem.appendChild(showLocation);

    // BUY TICKETS button
    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-tickets-btn");
    buyButton.textContent = "BUY TICKETS";
    showItem.appendChild(buyButton);

    // Append the show item to the shows list
    showsList.appendChild(showItem);
  }
}

// Call the function to initially render the upcoming shows
loopAndAppendShows();
