# Work Day Scheduler Starter Code

## User Story
```AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Functionality
- It works by displaying the date and time at the top of the page using moment method.

- Depending on the time of day relative to 9am-5pm, the columns inner textarea will have a different color; gray means past the current time, red means on the current hour, yellow means that is the next hour, and green is 2 or more hours away.

- The middle textarea is editable, and tasks may be saved to localStorage by clicking the floppy disk icon at the rightmost side of the row. This will keep a task in the memory should the page be exited or refreshed. 

- The look is similar to what was instructed in class, but obviously can be improved further if desired.

## Link to Deployed Application 

https://archier1999.github.io/workday-scheduler