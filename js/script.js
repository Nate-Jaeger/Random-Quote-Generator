//Declare timer that will call printQuote() every 20 seconds
//Information about setInterval read from: https://www.w3schools.com/js/js_timing.asp 
const timer = window.setInterval(callFuncs, 20000);

//Array of quote objects
var quotes = [
  {
    quote: "Every accomplishment starts with the decision to try.",
    source: "John F. Kennedy",
    tags: "Courage"
  },
  {
    quote: "A man is but a product of his thoughts. What he thinks, he becomes.",
    source: "Mahatma Gandhi",
    tags: "Self-worth"
  },
  {
    quote: "There are no great limits to growth because there are no limits of human intelligence, imagination, and wonder.",
    source: "Ronald Reagan",
    tags: "Inspiration"
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
    tags: "Bravery"
  },
  {
    quote: "They who dream by day are cognizant of many things which escape those who dream only by night.",
    source: "Edgar Allan Poe",
  },
  {
    quote: "It’s the possibility of having a dream come true that makes life interesting.",
    source: "Paulo Coelho",
    citation: "The Alchemist",
    year: 1988
  },
  {
    quote: "I don't know what frightens me more, the power that crushes us, or our endless ability to endure it.",
    source: "Gregory David Roberts",
    citation: "Shantaram",
    year: 2003
  },
];

//Function to create a random RGB value and post that value to background property
//Information for this previously received on Colt Steele's Udemy course 'The Web Developer Bootcamp', Random Color Game project
function randomBG(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = bgColor;
}

function getRandomQuote() {
  //get a random number between 0 and quotes.length
  var randomNumber = Math.floor(Math.random() * quotes.length);
  //Assign randomNumber to a random object in quotes array
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

//Get randomQuote to print to screen
function printQuote() {
  var randomQuote = getRandomQuote();
  var html = '';

  //Give html string the quote & source properties to display
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

  //check if quote-object has a citation property, add it to HTML string
  if(randomQuote.citation){
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  //Check if quote-object has a year property, add it to HTML string
  if(randomQuote.year){
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  //Check if quote-object has a tags property, add it to the string
  if(randomQuote.tags){
    //Break used for easier readability, tags class added for CSS styling
    html += '<br><span class="tags">' + randomQuote.tags + '</span>';
  }
  //Close opening P tag from source, nesting citation, year, and tags in the same paragraph
  html += '</p>';
  
  //Set innerHTML of quote-box
  document.getElementById('quote-box').innerHTML = html;
}

//Function to call both printQuote and randomBG, so both can be called on click or setInterval
function callFuncs() {
  printQuote();
  randomBG();
}

//Listen for a click event on the loadQuote button
document.getElementById('loadQuote').addEventListener("click", callFuncs, false);