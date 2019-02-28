// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//Array of quote objects
var quotes = [
  {
    quote: "Every accomplishment starts with the decision to try.",
    source: "John F. Kennedy",
  },
  {
    quote: "A man is but a product of his thoughts. What he thinks, he becomes.",
    source: "Mahatma Gandhi",
  },
  {
    quote: "There are no great limits to growth because there are no limits of human intelligence, imagination, and wonder.",
    source: "Ronald Reagan",
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
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

//Get a random quote
function getRandomQuote() {
  //get a random number between 0 - quotes.length
  var randomNumber = Math.floor(Math.random() * quotes.length);
  //Assign randomNumber to a random object
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

  //check if quote object has a citation property and then add it to HTML string
  if(randomQuote.citation){
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  //Check if quote has a year property then add it to HTML string
  if(randomQuote.year){
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  //Close opening P tag from source, nesting citation and year in the same paragraph
  html += '</p>';

  console.log(html);
    
  document.getElementById('quote-box').innerHTML = html;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.