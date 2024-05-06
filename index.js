const imageDisplay = document.getElementById('image-display');
const buttons = document.querySelectorAll('.button');

const images = [
  'blue.png',
  'red.png',
  'purple.png',
  'orange.png',
  'teal.png',
  'green.png'
];

// set button background colors
buttons.forEach((button, index) => {
  button.style.backgroundColor = images[index].replace('.png', '');
});

// default to a random color on page load
let currentIndex = Math.floor(Math.random() * images.length);
imageDisplay.src = `assets/${images[currentIndex]}`;
buttons[currentIndex].classList.add('active');

// change image every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  imageDisplay.src = `assets/${images[currentIndex]}`;
  buttons.forEach((btn) => btn.classList.remove('active'));
  buttons[currentIndex].classList.add('active');
}, 3000);

// add event listeners to buttons
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    imageDisplay.src = `assets/${images[index]}`;
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    currentIndex = index;
  });
});