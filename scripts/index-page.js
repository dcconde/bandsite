import BandSiteApi from "./band-site-api.js";
//import BandSiteApi from "./band-site-api.js";

const bandSiteApi = new BandSiteApi();
 
  // get the comment list from the HTML file
  const commentList = document.querySelector(".comment-list"); // <ul>
  
  async function displayComments() {
    commentList.innerText = ""; // clears the <ul> before looping and appending, avoiding duplicates

    const commentsData = await bandSiteApi.getComments();

    for (let i = 0; i < commentsData.length; i++) {
      // create a comment list item
      const commentListItem = document.createElement("li");
      commentListItem.classList.add("comment-list__item");
  
      // create an h3 element for the commenter name
      const commentAuthor = document.createElement("h3");
      commentAuthor.innerText = commentsData[i].name;
      commentAuthor.classList.add("comment-list__name");
      commentListItem.appendChild(commentAuthor); // append to the <li>

      //convert timestamp to date in XX/XX/XXXX format
      const date = new Date(commentsData[i].timestamp);
      console.log(date.toLocaleDateString('en-US'));
      const dateNumber = date.toLocaleDateString('en-US')

      //create a p tag for the comment timestamp
      const commentDate = document.createElement("p");
      commentDate.innerText = dateNumber;
      commentDate.classList.add("comment-list__date");
      commentListItem.appendChild(commentDate); 
  
      // create a p tag for the comment body
      const commentBody = document.createElement("p");
      commentBody.innerText = commentsData[i].comment;
      commentBody.classList.add("comment-list__description");
      commentListItem.appendChild(commentBody);
  
      // append to the <ul>
      commentList.appendChild(commentListItem);
    }
  }
  displayComments();

  // get the form from the HTML file
  const commentForm = document.querySelector(".comment-form");
  // Listen for the comment form submission
  commentForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    // create object where extracted data is placed?
    const newComment = {
      name: event.target.name.value, 
      comment: event.target.comment.value,
    };

    await bandSiteApi.postComment(newComment);
  
    // Re-render the comments list
    displayComments();
  
    // Reset the form
    event.target.reset();
  });
  
  // Initial rendering of the comments
  // displayComments();
  