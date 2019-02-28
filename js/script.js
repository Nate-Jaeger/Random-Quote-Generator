// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//Array of quote objects
var quotes = [
  {
    quote: "Every accomplishment stats with the decision to try.",
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

console.log(quotes);



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.