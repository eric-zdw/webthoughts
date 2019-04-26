var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sheerspark-1.png') {
        myImage.setAttribute('src', 'images/sheerspark-2.png');
    }
    else {
        myImage.setAttribute('src', 'images/sheerspark-1.png');
    }
}

var myButton = document.querySelector('button');

function setName() {
    var name = prompt('Please enter a name.');
    localStorage.setItem('name', name);
}

