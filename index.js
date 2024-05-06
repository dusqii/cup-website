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

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const imageUrl = images[index];
    imageDisplay.src = imageUrl;
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});