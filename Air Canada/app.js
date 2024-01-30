let currentReview = 1;
    let counter = 0;

    function toggleNav() {
        const nav = document.querySelector('nav');
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    }

    function cycleReviews() {
        const currentReviewElement = document.getElementById(`review${currentReview}`);
        currentReviewElement.style.display = 'none';

        currentReview = (currentReview % 4) + 1;

        const nextReviewElement = document.getElementById(`review${currentReview}`);
        nextReviewElement.style.display = 'block';
    }

    function updateCounter(value) {
        counter += value;
        const counterElement = document.getElementById('counter');
        counterElement.innerText = counter;

        if (counter > 0) {
            counterElement.style.color = 'white';
        } else if (counter < 0) {
            counterElement.style.color = 'red';
        } else {
            counterElement.style.color = 'black';
        }
    }

    function resetCounter() {
        counter = 0;
        document.getElementById('counter').innerText = counter;
        document.getElementById('counter').style.color = 'black';
    }

    function changeColorScheme() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor.background;
        document.body.style.color = randomColor.text;
        document.querySelector('header').style.backgroundColor = randomColor.header;
        document.querySelector('nav').style.backgroundColor = randomColor.nav;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        const color = '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
        return {
            background: color,
            text: invertColor(color),
            header: invertColor(color),
            nav: invertColor(color)
        };
    }

    function invertColor(hex) {
        return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
    }
    // Array of destinations
const destinations = [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
    "Edmonton",
    "victoria",
  ];
  
  function bookRandomFlight() {
    // Get a random destination from the array
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
  
    // Display a personalized message with the randomly selected destination
    alert(`Congratulations! You've booked your Air Canada flight to ${randomDestination}. Get ready for an amazing journey!`);
    // Additional actions or redirects can be added here based on the specific functionality you want.
  }
  
