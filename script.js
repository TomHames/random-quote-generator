// Array to store quotes as strings variables
var randomQuotes = [
    "\"The mind is everything. What you think you become\".",
    "\"We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves\".",
    "\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment\".",
    "\"Three things cannot be long hidden: the sun, the moon, and the truth.",
 "You, yourself, as much as anybody in the entire universe, deserve your love and affection\".",
"\"No one saves us but ourselves. No one can and no one may. We ourselves must walk the path\".",
"\"Peace comes from within. Do not seek it without\".",
"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship\".",
"\"To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear\".",
  "\"If a man who enjoys a lesser happiness beholds a greater one, let him leave aside the lesser to gain the greater\".",
  "\"There is no path to happiness. Happiness is the path\".",
  "\"Happiness never decreases by being shared\".",
  "\"Happiness is a journey, not a destination\".",
  "\"Happiness comes when your work and words are of benefit to yourself and others.",
  // Quotes on the mind
  "\"There is nothing so disobedient as an undisciplined mind, and there is nothing so obedient as a disciplined mind\".",
  "\"We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves\".",
  "\"What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind\".",
  "\"In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true\".",
  "\"The mind is the source of happiness and unhappiness\".",
  "\"As the fletcher whittles and makes straight his arrows, so the master directs his straying thoughts\".",
  "\"Whatever words we utter should be chosen with care for people will hear them and be influenced by them for good or ill\".",
    "\"Make your mind pure as a silversmith blows away the impurities of silver, little by little, instant by instant\"."
];

function newQuote() {
  /* Generates a random array index number to select a random quote */
  var randomNumber = Math.floor(Math.random() * (randomQuotes.length));
  /* Selects by ID and allows us to regenerate the HTML content */
  document.getElementById("quoteId").innerHTML = randomQuotes[randomNumber];
}

// Tweet me quote function

function tweetQuote () {
  var generatedQuote = document.getElementById("quoteId").innerHTML;
 var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote) + ' "Buddha"';
   window.open(tweetUrl); 
}