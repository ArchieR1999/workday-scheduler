// TO DO 

// # 1. ADD MOMENT.JS TO INDICATE WHAT DATE IT IS. INSERT IT INTO THE HEADER, BELOW THE DESCRIPTION OF THE APP
// function updates time every second.
setInterval(function () {
 let currentDay = moment();
 $("#currentDay").text(currentDay.format('dddd, MMMM Do, h:mm:ss a'));
}, 1);

// # 2. ADD COLORS TO THE FILE FROM 9 - 5. DEPENDING ON THE TIME, IT SHOULD BE PAST, PRESENT, UPCOMING OR SOON, AND FUTURE.

// # 3. ADD DRAG DROP 

// # 4. ADD DELETE A TASK 

// # 5. ADD EDITNG OF A TASK

// # 6. ADD SAVE BUTTON FUNCTIONALITY TO SAVE OT LOCAL STORAGE 
