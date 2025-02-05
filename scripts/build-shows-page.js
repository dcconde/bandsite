const upcomingShows = [ 
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA",
    },
  ];

  // Get the container where you'll display the upcoming shows
const showsList = document.querySelector(".shows-list"); // assuming an <ul> or <div> container for the shows

// Function to loop through the upcoming shows and display them
function loopAndAppendShows() {
  showsList.innerHTML = ""; // clears the container before appending new content

  for (let i = 0; i < upcomingShows.length; i++) {
    // Create a list item for each show
    const showItem = document.createElement("li");
    showItem.classList.add("show-item");

    // Create a heading for the show date
    const showDate = document.createElement("h3");
    showDate.innerText = `Date: ${upcomingShows[i].date}`;
    showDate.classList.add("show-date");
    showItem.appendChild(showDate);

    // Create a paragraph for the venue and location
    const venueLocation = document.createElement("p");
    venueLocation.innerText = `Venue: ${upcomingShows[i].venue} - Location: ${upcomingShows[i].location}`;
    venueLocation.classList.add("show-venue-location");
    showItem.appendChild(venueLocation);

    // Create a paragraph for the show description
    const showDescription = document.createElement("p");
    showDescription.innerText = upcomingShows[i].description;
    showDescription.classList.add("show-description");
    showItem.appendChild(showDescription);

    // Append the show item to the shows list
    showsList.appendChild(showItem);
  }
}

// Call the function to initially render the upcoming shows
loopAndAppendShows();
