// const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const images = [
    'https://source.unsplash.com/random/1920x1080',
    'https://source.unsplash.com/random/1920x1080?nature',
    'https://source.unsplash.com/random/1920x1080?city',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

const body = document.body;
const randomIndex = Math.floor(Math.random() * images.length);
body.style.backgroundImage = `url(${images[randomIndex]})`;
