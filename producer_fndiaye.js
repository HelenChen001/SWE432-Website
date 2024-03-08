window.onload = function () {
  console.log("Window.onload: Page is fully loaded!");

  //   setTimeout(function () {
  //     console.log("Delayed Message for 2 sections");
  //   }, 2000);

  class Story {
    constructor(title, author, genre, duration) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.duration = duration;
    }
  }
  // logging function
  function log_story_objects(title, author, genre, duration, time_slot) {
    if (time_slot == null) {
      console.log(
        "Title: " +
          title +
          "\n Author: " +
          author +
          "\n Genre: " +
          genre +
          "\n Duration: " +
          duration
      );
    } else {
      console.log(
        "Title: " +
          title +
          "\n Author: " +
          author +
          "\n Genre: " +
          genre +
          "\n Duration: " +
          duration +
          "\n Time Slot: " +
          time_slot
      );
    }
  }

  let story_one = new Story(
    "The Crimson Cipher",
    "Evelyn Blackwood",
    "True Crime",
    "1:00:19"
  );
  let story_two = new Story(
    "Shadows in the Orchard",
    "Harper Sinclair",
    "Fictional Narrative",
    "1:19:21"
  );

  // logging
  console.log("Properties of Story One");
  log_story_objects(
    story_one.title,
    story_one.author,
    story_one.genre,
    story_one.duration,
    story_one.time_slot
  );
  // altering a property
  story_one.author = "Evelyn Blackwood and Richie Smith";
  console.log(
    "Another author was also involved in this story, so the authors are now: " +
      story_one.author
  );

  // adding a new property
  story_one.time_slot = "8pm - 10pm";
  console.log("New Added Property: TimeSlot: " + story_one.time_slot);
  console.log("New Properties of Story One");
  log_story_objects(
    story_one.title,
    story_one.author,
    story_one.genre,
    story_one.duration,
    story_one.time_slot
  );

  if (
    story_one.genre == "Fictional Narrative" ||
    story_two.genre == "Fictional Narrative"
  ) {
    console.log(
      "Either " +
        story_one.title +
        " or " +
        story_two.title +
        " is Fictional Narrative."
    );
  }
  log_story_objects(
    story_two.title,
    story_two.author,
    story_two.genre,
    story_two.duration,
    story_two.time_slot
  );

  if (story_two.time_slot == null) {
    story_two.time_slot = "1pm - 3pm";
    console.log("New Properties of Story Two");
    log_story_objects(
      story_two.title,
      story_two.author,
      story_two.genre,
      story_two.duration,
      story_two.time_slot
    );
  } else if (story_two.time_slot == story_one.time_slot) {
    console.log(
      story_one + " and " + story_two + " air from " + story_one.time_slot
    );
  } else {
    console.log(story_two + " airs from " + story_two.time_slot);
  }

  // changing the color of the producer tab in the navbar
  let producer_tab = document.getElementById("producer-nav-tab");
  producer_tab.style.background =
    "linear-gradient(to bottom, #5f4bb6, #f7f5fb)";
  producer_tab.style.padding = "5px";

  // FORM VALIDATION
  const saveButton = document.getElementById("save-button");

  // getting all the dropdowns
  const dropdowns = document.querySelectorAll(".playlist-grid .time_options");
  let formChanged = false;

  // getting the initial state of the form
  let initialDropdownValues = [];
  dropdowns.forEach(function (dropdown) {
    initialDropdownValues.push(dropdown.value);
  });

  dropdowns.forEach(function (dropdown, index) {
    // checking for changes
    dropdown.addEventListener("change", function () {
      console.log("here");
      formChanged = true;
    });
  });

  if (saveButton) {
    // checking if the save button was clicked
    saveButton.addEventListener("click", function (event) {
      event.preventDefault();
      // if the form didnt change
      if (!formChanged) {
        alert("No Changes to Playlist");
        return;
      }
      // add changes to database... to be implemented
      alert("Playlist saved!");
      window.location.reload();
    });
  }

  //SEARCH BAR
  const search = document.querySelector('.search input[type="text"]');

  if (search) {
    search.addEventListener("keydown", function (event) {
      // Check if the pressed key is Enter
      if (event.key === "Enter") {
        console.log("Enter key pressed in search input");

        // search function for dj entered
        performSearch(search.value);
      }
    });

    // Function to perform search -- to be implemented
    function performSearch(query) {
      alert("Performing search for: " + query);
      // look for dj in database
    }
  }

  const currentPlaylist = document.querySelectorAll(".playlist-item.page2");

  //EDIT PLAYLISTS - ADD PLAYLIST BUTTON
  const hoverTarget = document.querySelectorAll(".right-item p");

  hoverTarget.forEach(function (new_item) {
    // event listener for mouseover event
    new_item.addEventListener("mouseover", function () {
      // change pointer on over
      new_item.style.cursor = "pointer";
    });
    // event listener for clicking the add to playlist button
    new_item.addEventListener("click", function () {
      const parentItem = new_item.closest(".story-search-item");

      // Find the element with class "story-search-results" inside the parent element
      const searchResults = parentItem.querySelector(".story-search-results");
      // call function to move the story to the playlist
      add_to_playlist(searchResults);

      alert("New Story added to Playlist!");
    });
  });

  // EDIT PLAYLISTS - ADD STORIES BUTTON
  // Select the edit-section element
  const editSection = document.querySelector(".edit-section");

  // Select the first button element within the edit-section element
  if (editSection) {
    const buttons = editSection.querySelectorAll("button");
    const firstButton = buttons[0];

    if (firstButton) {
      // event listener for mouseover event
      firstButton.addEventListener("mouseover", function () {
        // change pointer on over
        firstButton.style.cursor = "pointer";
      });
      // event listener for clicking the add to playlist button
      firstButton.addEventListener("click", function () {
        alert(
          "Add Stories Button Clicked! Search for a story to add to the playlist"
        );
      });
    }
    // EVENTS FOR DELETING A STORY
    const secondButton = buttons[1];
    if (secondButton) {
      // event listener for mouseover event
      secondButton.addEventListener("mouseover", function () {
        // change pointer on over
        secondButton.style.cursor = "pointer";
      });
      // event listener for clicking the add to playlist button
      secondButton.addEventListener("click", function () {
        alert(
          "Delete Stories Button Clicked! Click on an entry in the playlist to delete it "
        );

        delete_from_playlists();
      });
    }
  }

  function add_to_playlist(searchResults) {
    let text = searchResults.querySelector("h5").textContent;

    // iterate through the current playlist and look for an empty spot

    for (let i = 0; i < currentPlaylist.length; ++i) {
      if (currentPlaylist[i].textContent == "") {
        // need to fix formatting and display
        currentPlaylist[i].innerHTML += "<p>" + text + i + "</p>";
        break;
      }
    }
  }

  function delete_from_playlists() {
    currentPlaylist.forEach(function (item, index) {
      // if the entry is not empty
      if (item.textContent != "") {
        // make the deleting image appear
        const image = item.querySelector("img");

        image.src = "Images/delete_button.png";
        image.style.width = "15px";
        image.style.height = "100%";
        image.style.visibility = "visible";
        // event listener for each item
        image.addEventListener("mouseover", function () {
          image.style.cursor = "pointer";
        });
        // if an item is clicked
        image.addEventListener("click", function () {
          const pElement = item.querySelector("p");
          if (pElement.textContent != "") {
            pElement.remove();
            image.style.visibility = "hidden";
            console.log(item);
          }
        });
      }
    });
    console.log(currentPlaylist);
  }
};
