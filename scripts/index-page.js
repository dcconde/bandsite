// const bioComments = [ 
//     {
//       posted: "11/02/2023",
//       name: "Victor Pinto",
//       description:
//         "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//     },
//     {
//       posted: "10/28/2023",
//       name: "Christina Cabrera",
//       description:
//         "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//     },
//     {
//       posted: "10/20/2023",
//       name: "Isaac Tadesse",
//       description:
//         "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//     },
//   ];
  
  // get the form from the HTML file
  const commentForm = document.querySelector(".comment-form");
  // get the comment list from the HTML file
  const commentList = document.querySelector(".comment-list"); // <ul>
  
  async function loopAndAppendComments() {
    commentList.innerText = ""; // clears the <ul> before looping and appending, avoiding duplicates
  
    const response = await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=daniela");
    console.log(response.data);
    const bioComments = response.data;

    for (let i = 0; i < bioComments.length; i++) {
      // create a comment list item
      const commentListItem = document.createElement("li");
      commentListItem.classList.add("comment-list__item");
  
      // create an h3 element for the commenter name
      const commentAuthor = document.createElement("h3");
      commentAuthor.innerText = bioComments[i].name;
      commentAuthor.classList.add("comment-list__name");
      commentListItem.appendChild(commentAuthor); // append to the <li>

      //convert timestamp to date in XX/XX/XXXX format
      const date = new Date(bioComments[i].timestamp);
      console.log(date.toLocaleDateString('en-US'));
      const dateNumber = date.toLocaleDateString('en-US')

      //create a p tag for the comment timestamp
      const commentDate = document.createElement("p");
      commentDate.innerText = dateNumber;
      commentDate.classList.add("comment-list__date");
      commentListItem.appendChild(commentDate); 
  
      // create a p tag for the comment body
      const commentBody = document.createElement("p");
      commentBody.innerText = bioComments[i].comment;
      commentBody.classList.add("comment-list__description");
      commentListItem.appendChild(commentBody);
  
      // append to the <ul>
      commentList.appendChild(commentListItem);
    }
  }
  
  // Listen for the comment form submission
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Extract data from form fields
    const newComment = {
      posted: new Date().toLocaleDateString(),
      name: event.target.name.value, // Assuming 'name' is the correct input field for the commenter's name
      description: event.target.commentBody.value, // Assuming 'commentBody' is the correct input field for the comment body
    };
  
    // Add the new comment to the start of the bioComments array
    bioComments.unshift(newComment);
    console.log(bioComments);
  
    // Re-render the comments list
    loopAndAppendComments();
  
    // Reset the form
    event.target.reset();
  });
  
  // Initial rendering of the comments
  loopAndAppendComments();
  