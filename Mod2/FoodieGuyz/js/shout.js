const stringToShout = prompt("What do you want to shout?: ");
const shout = stringToShout.toUpperCase();
const shoutMessage = `I'm a ${shout}!!`;
//document.write(shoutMessage);

document.querySelector('main').innerHTML = shoutMessage;