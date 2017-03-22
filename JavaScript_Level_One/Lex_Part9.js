var firstName = prompt('Please enter your first name:');
var lastName = prompt('Please enter your last name:');
var age = prompt('Please enter your age:');
var height = prompt('Now, your height (in centimeters)');
var petName = prompt('How about the name of your pet?');
if(firstName[0] === lastName[0]
   && age > 20
   && age < 30
   && height >= 170
   && petName[petName.length - 1] === 'y') {
     console.log('Hello, Spy!');
   } else {
     console.log('This is not the message you are looking for');
   }
alert('Thanks for your answers!');
