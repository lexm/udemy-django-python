// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name) {
  roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(name) {
  var idx = roster.indexOf(name)
  if(idx >= 0) {
    roster.splice(idx, 1);
  }
}
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display() {
  console.log(roster);
}

// Start by asking if they want to use the web app
var runIt = prompt('Run the app? (y/n)');
if(runIt === 'y') {
  // Now create a while loop that keeps asking for an action (add,remove, display or quit)
  // Use if and else if statements to execute the correct function for each command.
  var done = false;
  while(!done) {
    var action = prompt('Action? (add, remove, display, quit)');
    if(action === 'add') {
      addNew(prompt('Enter the name to add'));
    } else if (action === 'remove') {
      remove(prompt('Enter the name to remove'));
    } else if (action === 'display') {
      display(roster);
    } else if (action === 'quit') {
      done = true;
    } else {
      alert('invalid input!');
    }
  }
}