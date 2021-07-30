
var portrait = [
    './images/me/me01.jpg',
    './images/me/me02.jpg',
    './images/me/me03.jpg',
    './images/me/me04.jpg',
    './images/me/me05.jpg',
    './images/me/me06.jpg',
    './images/me/me07.jpg',
    './images/me/me08.jpg',
    './images/me/me09.jpg',
    './images/me/me10.jpg',
    './images/me/me11.jpg',
    './images/me/me12.jpg',
    './images/me/me13.jpg'
    ];

var image =
    document.getElementById('random-image');

image.src = portrait[Math.floor(Math.random() * Math.floor(portrait.length))]