var preference = prompt('Are you a Casual Rider or a Racer?');
var response;

if (preference === 'Casual Rider') {
    response = 'Great, Bikes are Cool!';
} else if (preference === 'Racer') {
    response = 'Yes! Racing is Awesome';
} else {
    response = 'Fine, don\'t answer!';
} 

document.write('<h3>' + response + '</h3>');
