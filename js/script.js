//Declare timer that will call printQuote() every 20 seconds
//Information about setInterval read from: https://www.w3schools.com/js/js_timing.asp 
const timer = window.setInterval(callFuncs, 20000);


//Function to create a random RGB value and post that value to background property
function randomBG(){
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${x}, ${y}, ${z})`;

  document.body.style.background = bgColor;
}

function getRandomQuote() {
  //get a random number between 0 and quotes.length
  const randomNumber = Math.floor(Math.random() * quotes.length);

  //Assign randomNumber to a random object in quotes array
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}

//Get randomQuote to print to screen
function printQuote() {
  const randomQuote = getRandomQuote();
  let html = ``;

  //Give html string the quote & source properties to display
  html += `<p class="quote">${randomQuote.quote} </p>`;
  html += `<p class="source">${randomQuote.source}`;

  //check if quote-object has a citation property, add it to HTML string
  if(randomQuote.citation){
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  //Check if quote-object has a year property, add it to HTML string
  if(randomQuote.year){
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  //Check if quote-object has a tags property, add it to the string
  if(randomQuote.tags){
    html += `<br><span class="tags">${randomQuote.tags}</span>`;
  }
  //Close opening P tag
  html += `</p>`;
  
  document.getElementById('quote-box').innerHTML = html;
}

//Call both printQuote and randomBG, so both can be called on click or setInterval
function callFuncs() {
  printQuote();
  randomBG();
}

callFuncs();
document.getElementById('loadQuote').addEventListener("click", callFuncs, false);