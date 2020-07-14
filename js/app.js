function sayHello() {
    console.log('Hello World!');
}

sayHello();

var sayHellowCookie = function () {
    console.log('Hello Cookie')
}

function sayHelloUser(name) {
    console.log('Hello ' + name);
}

//First Function//

function askName() {
    var name = prompt('What is your name');
    var message = 'Hello, ' + name;

    return document.write('<h3>' + message + '</h3>');

}

//Second Function//

function askPreference() {
    var preference = prompt('Are you a Casual Rider or a Racer?');
    var response;

    if (preference === 'Casual Rider') {
        response = 'Great, Bikes are Cool!';
    } else if (preference === 'Racer') {
        response = 'Yes! Racing is Awesome';
    } else {
        response = 'Fine, don\'t answer!';
    }

    return document.write('<h3>' + response + '</h3>');

}

//Third Function//

function addContent() {
    var today = new Date();
    var hourNow = today.getHours();


    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome';
    }

    return document.write('<h3>' + greeting + '</h3>');
}

function buildBike(bikeType, barType, tireType ) {
    var message = 'I want a ' + bikeType + 'bike with ' + barType + 'bars ' + tireType + 'tires.'
    return message;
}