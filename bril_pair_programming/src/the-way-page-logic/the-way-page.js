
// <---------- Randomize wording logic ---------->   

// Get the HTML element to hover over
var hoverElement = document.querySelector('.hover-element');
var originalWord = hoverElement.innerHTML;

// Add event listener for mouseover event
hoverElement.addEventListener('mouseover', function() {
  var word = hoverElement.innerHTML;
  var randomizedWord = randomizeWord(word);
  hoverElement.innerHTML = randomizedWord;
});

// Add event listener for mouseout event
hoverElement.addEventListener('mouseout', function() {
    hoverElement.innerHTML = originalWord; // Reset back to original word
  });

// Function to randomize a word
function randomizeWord(word) {
    // Convert the word into an array of characters
    var characters = word.split('');
  
    // Shuffle the array
    for (var i = characters.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = characters[i];
      characters[i] = characters[j];
      characters[j] = temp;
    }
  
    // Join the characters back into a string
    var randomizedWord = characters.join('');
    return randomizedWord;
  }


// <---------- Switch to a GIF logic ----------> 

// Get the HTML element to hover over
const myGif = document.getElementById('hover__research__gif');
const domainSearch = document.getElementById('domain__search__image');

// Add event listener for mouseover event
domainSearch.addEventListener('mouseover', function () {
  domainSearch.style.visibility = 'hidden';
  myGif.style.visibility = 'visible';
  
});

// Add event listener for mouseout event  
myGif.addEventListener('mouseout', function () {
  domainSearch.style.visibility = 'visible';
  myGif.style.visibility = 'hidden';
});
  
  
  
  

  





