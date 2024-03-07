window.onload = function () {
  console.log("Window.onload: Page as fully loaded!");

  setTimeout(function () {
    console.log("Delayed Message for 2 sections");
  }, 2000);

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
};
