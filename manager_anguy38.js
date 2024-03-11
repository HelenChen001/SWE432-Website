let timeslots = []; //array of work schedule

for (let i = 0; i < 6; i++) {
    let schedule = new WorkSchedule();
    timeslots.push(schedule);
}

/* Work Schedule Proptype */
function WorkSchedule() {
    this.schedule = []; // Initialize an empty array to store dates and times
}

// Add methods to the WorkSchedule prototype
WorkSchedule.prototype.addDateTime = function (date, time, djName, producerName, djSongs, producerSongs) {
    this.schedule.push({
        date: date,
        time: time,
        djName: djName,
        producerName: producerName,
        djSongs: djSongs,
        producerSongs: producerSongs
    });
}

WorkSchedule.prototype.removeDateTime = function (date, time) {
    // Filter out the specified date and time from the schedule
    this.schedule = this.schedule.filter(function (entry) {
        return !(entry.date === date && entry.time === time);
    });
};

/* DJ objects */
let trueCrimeDJs = [
    {
        name: "Detective Jackson",
        yearsOfExperience: 15,
        specialty: "Serial Killers",
        focus: ["Psychological Profiling", "Crime Scene Analysis", "Cold Case Investigation"],
        workSchedule: timeslots[0], //has objects time and date
        photo: "Images/dj.jpg"
    },
    {
        name: "Investigator Smith",
        yearsOfExperience: 10,
        specialty: "Forensic Evidence",
        focus: ["DNA Analysis", "Ballistics", "Trace Evidence"],
        workSchedule: timeslots[1],
        photo: "Images/dj.jpg"
    },
    {
        name: "Agent Thompson",
        yearsOfExperience: 12,
        specialty: "Cybercrime",
        focus: ["Digital Forensics", "Cybersecurity", "Online Investigations"],
        workSchedule: timeslots[2],
        photo: "Images/dj.jpg"
    },
    {
        name: "Profiler Williams",
        yearsOfExperience: 8,
        specialty: "Behavioral Analysis",
        focus: ["Criminal Profiling", "Victimology", "Crime Pattern Analysis"],
        workSchedule: timeslots[3],
        photo: "Images/dj.jpg"
    },
    {
        name: "FBI Agent Rodriguez",
        yearsOfExperience: 20,
        specialty: "Undercover Operations",
        focus: ["Deep Cover Assignments", "Infiltration", "Informant Handling"],
        workSchedule: timeslots[4],
        photo: "Images/dj.jpg"
    },
    {
        name: "Detective Sanchez",
        yearsOfExperience: 18,
        specialty: "Cold Cases",
        focus: ["Re-investigation", "Missing Persons", "Unsolved Homicides"],
        workSchedule: timeslots[5],
        photo: "Images/dj.jpg"
    }
];
//showcase of modifying nad adding new properties
trueCrimeDJs[0].yearsOfExperience = 6;

// Add work dates and times for each DJ
trueCrimeDJs.forEach(function (dj) {
    dj.workSchedule.addDateTime("2024-03-21", "8:00 AM");
});
trueCrimeDJs[0].workSchedule.removeDateTime("2024-03-21", "8:00 AM");
// Print each true crime DJ object with work schedule
trueCrimeDJs.forEach(function (dj) {
    console.log("Name: " + dj.name);
    console.log("Years of Experience: " + dj.yearsOfExperience);
    console.log("Specialty: " + dj.specialty);
    console.log("Focus Areas: " + dj.focus.join(", "));
    console.log("Work Schedule:");
    dj.workSchedule.schedule.forEach(function (entry) {
        console.log("- Date: " + entry.date + ", Time: " + entry.time);
    });
    console.log("--------------------------");
});
/* Set date min as today and date max as two months from min */
document.addEventListener("DOMContentLoaded", function () {
    let today = new Date();

    let minDate = today.toISOString().split("T")[0];
    document.getElementById("date").min = minDate;

    let maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate = maxDate.toISOString().split("T")[0];
    document.getElementById("date").max = maxDate;
    /* Add event listener for input event */
    if (window.location.pathname === '/manager_anguy38.html') {
        document.getElementById("search-bar").addEventListener("input", function (event) {
            // Get the input value
            let inputValue = event.target.value;

            // Regular expression to match only letters (a-z, A-Z)
            let lettersRegex = /^(?:[a-zA-Z\s"]*|)$/;

            // Check if the input matches the letters regex
            if (!lettersRegex.test(inputValue)) {
                // If input is invalid, clear input value
                event.target.value = "";
                alert("Letters only");
            }
            let djInfo = document.getElementById('dj');
            for (let i = 0; i < trueCrimeDJs.length; i++) {
                // Check if the current DJ's name matches the input name
                if (trueCrimeDJs[i].name === inputValue) {
                    // Display information about the matched DJ
                    console.log('Found DJ:', trueCrimeDJs[i]);
                    // You can perform additional actions here, such as displaying the DJ's information on the webpage

                    djInfo.innerHTML = `
                  <div class="radio-group">
                  <div>
                      <input type="radio" id="dj${i + 1}" name="dj" class = "dj" data-index="${i}" value="${trueCrimeDJs[i].name}" required>
                      <label for="dj${i + 1}">${trueCrimeDJs[i].name}</label>
                  </div>
              `;
                    return; // Exit the function after finding the first match
                }
            }
            // If no match is found, display a message
            djInfo.innerHTML = `
              <div class="radio-group">
              <div>
                  <input type="radio" id="dj1" name="dj" class = "dj" data-index="0" value="Detective Jackson" required>
                  <label for="dj1">Detective Jackson</label>
              </div>
              <div>
                  <input type="radio" id="dj2" name="dj" class = "dj" data-index="1" value="Investigator Smith" required>
                  <label for="dj2">Investigator Smith</label>
              </div>
          </div>
          <div class="radio-group">
              <div>
                  <input type="radio" id="dj3" name="dj" class = "dj" data-index="2" value="Agent Thompson" required>
                  <label for="dj3">Agent Thompson</label>
              </div>
              <div>
                  <input type="radio" id="dj4" name="dj" class = "dj" data-index="3" value="Profiler Williams" required>
                  <label for="dj4">Profiler Williams</label>
              </div>
          </div>
          <div class="radio-group">
              <div>
                  <input type="radio" id="dj5" name="dj" class = "dj" data-index="4" value="FBI Agent Rodriguez" required>
                  <label for="dj5">FBI Agent Rodriguez</label>
              </div>
              <div>
                  <input type="radio" id="dj6" name="dj" class = "dj" data-index="5" value="Detective Sanchez" required>
                  <label for="dj6">Detective Sanchez</label>
              </div>
          </div>
          `;
        });
        document.querySelectorAll('.dj').forEach(function (djName) {
            djName.addEventListener('click', function () {
                let index = parseInt(djName.getAttribute('data-index'));
                console.log(index);
                updateDJInfo(trueCrimeDJs[index]);
            });
        });

        // Function to update the aside with DJ information
        function updateDJInfo(dj) {
            let djInfo = document.getElementById('right-sidebar');
            djInfo.innerHTML = `
            <h1>${dj.name}</h1>
            <figure>
                        <img src= ${dj.photo} alt="dj-image" id="dj-image" />
                        <figcaption>Photo</figcaption>
            </figure>
            <h3>${dj.name}</h3>
            <article style="font-size: 12px; text-align: left;margin-bottom: 10px;">
            <p>Years of Experience: ${dj.yearsOfExperience}</p>
            <p>Specialty: ${dj.specialty}</p>
            <p>Focus Areas: ${dj.focus.join(", ")}</p>
            </article>
            <article id="black-box">
                More information
            </article>
        `;
        }
        document.getElementById("Schedule").addEventListener("submit", function (event) {
            // Get all checkboxes
            let checkboxes = document.querySelectorAll('input[type="checkbox"]');
            let isChecked = false;
            // Loop through checkboxes to check if at least one is checked
            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    isChecked = true;
                    // Exit loop if at least one checkbox is checked
                    return;
                }
            });

            // If no checkbox is checked, prevent form submission and show an alert
            if (!isChecked) {
                alert("Please check at least one checkbox.");
                event.preventDefault(); // Prevent form submission
            }
            else {
                event.preventDefault();
                function showPopup(message) {
                    let popup = document.getElementById('popup');
                    let popupMessage = document.getElementById('popup-message');
                    popupMessage.textContent = message;
                    popup.style.display = 'block';
                    // Automatically close the popup after 5 seconds
                    setTimeout(function () {
                        popup.style.display = 'none';
                        document.querySelector("form").submit();
                    }, 5000);
                }
                showPopup('Form submitted!');
            }
        });
    }
    else {
        document.getElementById("Report").addEventListener("submit", function (event) {
            event.preventDefault();
            function showPopup(message) {
                let popup = document.getElementById('popup');
                let popupMessage = document.getElementById('popup-message');
                popupMessage.textContent = message;
                popup.style.display = 'block';
                // Automatically close the popup after 5 seconds
                setTimeout(function () {
                    popup.style.display = 'none';
                    document.querySelector("form").submit();
                }, 5000);
            }
            showPopup('Form submitted!');
        });
        let radioButtons = document.querySelectorAll('input[type="radio"]');
        function findWorkScheduleByDateTime(date, time) {
            // Iterate over the timeslots array
            for (let i = 0; i < timeslots.length; i++) {
                let schedule = timeslots[i];
                // Check if the date and time match
                if (schedule.date === date && schedule.time === time) {
                    // Return DJ and producer names from the matching WorkSchedule
                    return { djName: schedule.djName, producerName: schedule.producerName };
                }
            }
            // If no matching WorkSchedule is found, return null
            return null;
        }
        // Attach event listener to each radio button
        radioButtons.forEach(function (radioButton) {
            radioButton.addEventListener('click', function (event) {
                // Get the value of the clicked radio button
                let selectedTime = event.target.value;
                // Get the date input element
                let dateInput = document.getElementById('date');
                let selectedDate = dateInput.value;

                // Log the selected date
                console.log('Selected Date:', selectedDate);
                // Log the selected value 
                console.log('Selected Time:', selectedTime);
                let foundSchedule = findWorkScheduleByDateTime(selectedDate, selectedTime);
                if (foundSchedule) {
                    console.log('DJ Name:', foundSchedule.djName);
                    console.log('Producer Name:', foundSchedule.producerName);
                } else {
                    console.log('No matching schedule found.');
                }
            });
        });
    }
});

