// TO DO 

// # 1. ADD MOMENT.JS TO INDICATE WHAT DATE IT IS. INSERT IT INTO THE HEADER, BELOW THE DESCRIPTION OF THE APP
// function updates time every second.
function updateDateAndColors() {
    let currentDay = moment();
    $("#currentDay").text(currentDay.format('dddd, MMMM Do, h:mm:ss a'));
    
    // Get the current hour in 24-hour format as a number
    let currentTime = parseInt(moment().format('HH'));
    
// # 2. ADD COLORS TO THE FILE FROM 9 - 5. DEPENDING ON THE TIME, IT SHOULD BE PAST, PRESENT, UPCOMING OR SOON, AND FUTURE.
    for (let i = 9; i < 18; i++) {
        if (i < currentTime) {
            // Add past class for times that have already passed
            $('#' + i).removeClass('upcoming future present').addClass('past');
        } else if (i === currentTime) {
            // Add present class for the current hour
            $('#' + i).removeClass('past upcoming future').addClass('present');
        } else if (i - currentTime <= 1) {
            // Add upcoming class for time slots within 1 hour from now
            $('#' + i).removeClass('past future present').addClass('upcoming');
        } else {
            // Add future class for time slots 2 hours or more into the future
            $('#' + i).removeClass('past upcoming present').addClass('future');
        }
    }
}

// Capture date and colors immediately on page load
updateDateAndColors();

// Update date and colors every second
setInterval(updateDateAndColors, 1000);


// # 3. ADD SAVE BUTTON FUNCTIONALITY TO SAVE OT LOCAL STORAGE 

function saveToStorage() {
    $(".saveBtn9am").on('click', function () {
        localStorage.setItem("timerBlock9", $('#9').val());
    });
    
    $(".saveBtn10am").on('click', function () {
        localStorage.setItem("timerBlock10", $('#10').val());
    });
    
    $(".saveBtn11am").on('click', function () {
        localStorage.setItem("timerBlock11", $('#11').val());
    });
    
    $(".saveBtn12pm").on('click', function () {
        localStorage.setItem("timerBlock12", $('#12').val());
    });
    
    $(".saveBtn1pm").on('click', function () {
        localStorage.setItem("timerBlock13", $('#13').val());
    });
    
    $(".saveBtn2pm").on('click', function () {
        localStorage.setItem("timerBlock14", $('#14').val());
    });
    
    $(".saveBtn3pm").on('click', function () {
        localStorage.setItem("timerBlock15", $('#15').val());
    });
    
    $(".saveBtn4pm").on('click', function () {
        localStorage.setItem("timerBlock16", $('#16').val());
    });
    
    $(".saveBtn5pm").on('click', function () {
        localStorage.setItem("timerBlock17", $('#17').val());
    });
}

saveToStorage();

// shows the textarea to user once page is refreshed
function displayMessage() {
    $('#9').text((localStorage.getItem("timerBlock9")));
    $('#10').text((localStorage.getItem("timerBlock10")));
    $('#11').text((localStorage.getItem("timerBlock11")));
    $('#12').text((localStorage.getItem("timerBlock12")));
    $('#13').text((localStorage.getItem("timerBlock13")));
    $('#14').text((localStorage.getItem("timerBlock14")));
    $('#15').text((localStorage.getItem("timerBlock15")));
    $('#16').text((localStorage.getItem("timerBlock16")));
    $('#17').text((localStorage.getItem("timerBlock17")));
}

displayMessage();