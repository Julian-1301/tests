class RandomQuote {
  constructor(author, quote, date) {
    this.author = author;
    this.quote = quote;
    this.date = date;
  }
}

const quotes = [
  new RandomQuote(
    "Albert Einstein",
    "Life is like riding a bicycle. To keep your balance you must keep moving.",
    "1946"
  ),
  new RandomQuote(
    "Oscar Wilde",
    "Be yourself; everyone else is already taken.",
    "1883"
  ),
  new RandomQuote(
    "Mahatma Gandhi",
    "Be the change that you wish to see in the world.",
    "1913"
  ),
  new RandomQuote("Yoda", "Do, or do not. There is no try.", "1980"),
  new RandomQuote(
    "Dr. Seuss",
    "Don’t cry because it’s over, smile because it happened.",
    "1957"
  ),
  new RandomQuote(
    "Walt Disney",
    "The way to get started is to quit talking and begin doing.",
    "1947"
  ),
  new RandomQuote(
    "Steve Jobs",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "2005"
  ),
  new RandomQuote(
    "Mother Teresa",
    "Not all of us can do great things. But we can do small things with great love.",
    "1985"
  ),
  new RandomQuote(
    "Nelson Mandela",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "1994"
  ),
  new RandomQuote(
    "Winston Churchill",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "1941"
  ),
  new RandomQuote(
    "Mark Twain",
    "The secret of getting ahead is getting started.",
    "1904"
  ),
  new RandomQuote(
    "Eleanor Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams.",
    "1936"
  ),
  new RandomQuote(
    "Leonardo da Vinci",
    "Simplicity is the ultimate sophistication.",
    "1504"
  ),
  new RandomQuote(
    "Henry Ford",
    "Whether you think you can or you think you can't, you're right.",
    "1922"
  ),
  new RandomQuote(
    "Buddha",
    "The mind is everything. What you think you become.",
    "500 BC"
  ),
  new RandomQuote(
    "Confucius",
    "It does not matter how slowly you go as long as you do not stop.",
    "551 BC"
  ),
  new RandomQuote(
    "Martin Luther King Jr.",
    "Injustice anywhere is a threat to justice everywhere.",
    "1963"
  ),
  new RandomQuote(
    "John Lennon",
    "Life is what happens when you're busy making other plans.",
    "1980"
  ),
  new RandomQuote(
    "Maya Angelou",
    "You will face many defeats in life, but never let yourself be defeated.",
    "1978"
  ),
  new RandomQuote(
    "Aristotle",
    "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    "350 BC"
  ),
  new RandomQuote(
    "Helen Keller",
    "The only thing worse than being blind is having sight but no vision.",
    "1925"
  ),
  new RandomQuote(
    "Vincent van Gogh",
    "I would rather die of passion than of boredom.",
    "1882"
  ),
  new RandomQuote(
    "Abraham Lincoln",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "1855"
  ),
  new RandomQuote(
    "William Shakespeare",
    "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
    "1603"
  ),
  new RandomQuote(
    "Benjamin Franklin",
    "An investment in knowledge pays the best interest.",
    "1748"
  ),
  new RandomQuote(
    "Socrates",
    "The only true wisdom is in knowing you know nothing.",
    "399 BC"
  ),
  new RandomQuote(
    "Isaac Newton",
    "If I have seen further it is by standing on the shoulders of Giants.",
    "1675"
  ),
  new RandomQuote("Plato", "Courage is knowing what not to fear.", "380 BC"),
  new RandomQuote(
    "Ralph Waldo Emerson",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "1841"
  ),
  new RandomQuote(
    "Confucius",
    "Life is really simple, but we insist on making it complicated.",
    "500 BC"
  ),
  new RandomQuote(
    "Gautama Buddha",
    "Three things cannot be long hidden: the sun, the moon, and the truth.",
    "500 BC"
  ),
  new RandomQuote(
    "Thomas Edison",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "1921"
  ),
  new RandomQuote(
    "Theodore Roosevelt",
    "Believe you can and you're halfway there.",
    "1901"
  ),
  new RandomQuote(
    "Charles Dickens",
    "It was the best of times, it was the worst of times.",
    "1859"
  ),
  new RandomQuote(
    "Jane Austen",
    "It isn't what we say or think that defines us, but what we do.",
    "1813"
  ),
  new RandomQuote(
    "J.K. Rowling",
    "It does not do to dwell on dreams and forget to live.",
    "1997"
  ),
  new RandomQuote(
    "Oprah Winfrey",
    "The biggest adventure you can take is to live the life of your dreams.",
    "2005"
  ),
  new RandomQuote(
    "Mahatma Gandhi",
    "The best way to find yourself is to lose yourself in the service of others.",
    "1914"
  ),
  new RandomQuote(
    "Albert Camus",
    "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    "1954"
  ),
  new RandomQuote(
    "Anne Frank",
    "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    "1944"
  ),
  new RandomQuote(
    "Rumi",
    "The wound is the place where the Light enters you.",
    "1260"
  ),
  new RandomQuote(
    "Leo Tolstoy",
    "Everyone thinks of changing the world, but no one thinks of changing himself.",
    "1874"
  ),
  new RandomQuote(
    "Virginia Woolf",
    "One cannot think well, love well, sleep well, if one has not dined well.",
    "1929"
  ),
  new RandomQuote(
    "J.R.R. Tolkien",
    "Not all those who wander are lost.",
    "1954"
  ),
  new RandomQuote(
    "Margaret Mead",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "1975"
  ),
  new RandomQuote(
    "Dalai Lama",
    "Happiness is not something ready made. It comes from your own actions.",
    "1992"
  ),
  new RandomQuote(
    "C.S. Lewis",
    "You are never too old to set another goal or to dream a new dream.",
    "1960"
  ),
  new RandomQuote(
    "John F. Kennedy",
    "Ask not what your country can do for you—ask what you can do for your country.",
    "1961"
  ),
  new RandomQuote(
    "Maya Angelou",
    "You will face many defeats in life, but never let yourself be defeated.",
    "1978"
  ),
  new RandomQuote(
    "Stephen Hawking",
    "However difficult life may seem, there is always something you can do and succeed at.",
    "1985"
  ),
  new RandomQuote(
    "Elon Musk",
    "When something is important enough, you do it even if the odds are not in your favor.",
    "2013"
  ),
  new RandomQuote(
    "Marie Curie",
    "Nothing in life is to be feared, it is only to be understood.",
    "1903"
  ),
  new RandomQuote(
    "Frida Kahlo",
    "Feet, what do I need you for when I have wings to fly?",
    "1953"
  ),
  new RandomQuote(
    "Pablo Picasso",
    "Everything you can imagine is real.",
    "1927"
  ),
  new RandomQuote(
    "Vincent Van Gogh",
    "I dream my painting and I paint my dream.",
    "1888"
  ),
  new RandomQuote(
    "Albert Einstein",
    "Imagination is more important than knowledge.",
    "1929"
  ),
  new RandomQuote(
    "Mark Twain",
    "The best way to cheer yourself is to try to cheer someone else up.",
    "1897"
  ),
  new RandomQuote(
    "Winston Churchill",
    "We make a living by what we get, but we make a life by what we give.",
    "1948"
  ),
  new RandomQuote(
    "Nelson Mandela",
    "Education is the most powerful weapon which you can use to change the world.",
    "1993"
  ),
  new RandomQuote(
    "Ralph Waldo Emerson",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "1855"
  ),
  new RandomQuote(
    "Mother Teresa",
    "If you can't feed a hundred people, then feed just one.",
    "1981"
  ),
  new RandomQuote(
    "Abraham Lincoln",
    "Whatever you are, be a good one.",
    "1859"
  ),
  new RandomQuote(
    "Helen Keller",
    "Alone we can do so little; together we can do so much.",
    "1920"
  ),
  new RandomQuote(
    "Walt Whitman",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "1885"
  ),
  new RandomQuote(
    "Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts.",
    "170"
  ),
  new RandomQuote(
    "Henry David Thoreau",
    "Go confidently in the direction of your dreams. Live the life you have imagined.",
    "1854"
  ),
  new RandomQuote(
    "Benjamin Franklin",
    "Tell me and I forget, teach me and I may remember, involve me and I learn.",
    "1750"
  ),
  new RandomQuote(
    "Thomas Jefferson",
    "I find that the harder I work, the more luck I seem to have.",
    "1785"
  ),
  new RandomQuote(
    "Maya Angelou",
    "Try to be a rainbow in someone's cloud.",
    "1993"
  ),
  new RandomQuote(
    "Steve Jobs",
    "Your time is limited, don't waste it living someone else's life.",
    "2005"
  ),
  new RandomQuote(
    "Confucius",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "500 BC"
  ),
  new RandomQuote(
    "Winston Churchill",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "1943"
  ),
  new RandomQuote(
    "Helen Keller",
    "The only thing worse than being blind is having sight but no vision.",
    "1925"
  ),
  new RandomQuote(
    "Albert Einstein",
    "Anyone who has never made a mistake has never tried anything new.",
    "1935"
  ),
  new RandomQuote(
    "Nelson Mandela",
    "I never lose. I either win or learn.",
    "1994"
  ),
  new RandomQuote(
    "Marie Curie",
    "Be less curious about people and more curious about ideas.",
    "1904"
  ),
  new RandomQuote(
    "J.K. Rowling",
    "It matters not what someone is born, but what they grow to be.",
    "1998"
  ),
  new RandomQuote(
    "Plato",
    "Wise men speak because they have something to say; fools because they have to say something.",
    "400 BC"
  ),
  new RandomQuote(
    "Buddha",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "500 BC"
  ),
  new RandomQuote(
    "Albert Einstein",
    "I have no special talent. I am only passionately curious.",
    "1921"
  ),
  new RandomQuote(
    "Thomas Edison",
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "1903"
  ),
  new RandomQuote(
    "Stephen Hawking",
    "Intelligence is the ability to adapt to change.",
    "1982"
  ),
  new RandomQuote(
    "Socrates",
    "The unexamined life is not worth living.",
    "399 BC"
  ),
  new RandomQuote(
    "Ralph Waldo Emerson",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "1841"
  ),
  new RandomQuote(
    "Marcus Aurelius",
    "You have power over your mind—not outside events. Realize this, and you will find strength.",
    "175"
  ),
  new RandomQuote(
    "Martin Luther King Jr.",
    "I have decided to stick with love. Hate is too great a burden to bear.",
    "1963"
  ),
  new RandomQuote(
    "Leonardo da Vinci",
    "Learning never exhausts the mind.",
    "1500"
  ),
  new RandomQuote(
    "Albert Camus",
    "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    "1954"
  ),
  new RandomQuote(
    "Walt Disney",
    "All our dreams can come true, if we have the courage to pursue them.",
    "1957"
  ),
  new RandomQuote(
    "Vincent Van Gogh",
    "Great things are done by a series of small things brought together.",
    "1885"
  ),
  new RandomQuote(
    "Friedrich Nietzsche",
    "That which does not kill us makes us stronger.",
    "1888"
  ),
  new RandomQuote(
    "Rumi",
    "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
    "1270"
  ),
  new RandomQuote(
    "Mahatma Gandhi",
    "The best way to find yourself is to lose yourself in the service of others.",
    "1914"
  ),
  new RandomQuote(
    "Mother Teresa",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "1975"
  ),
  new RandomQuote(
    "Maya Angelou",
    "If you don't like something, change it. If you can't change it, change your attitude.",
    "1987"
  ),
  new RandomQuote(
    "George Bernard Shaw",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "1903"
  ),
  new RandomQuote(
    "Pablo Picasso",
    "Action is the foundational key to all success.",
    "1942"
  ),
  new RandomQuote(
    "Oscar Wilde",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "1891"
  ),
  new RandomQuote(
    "Mark Twain",
    "The two most important days in your life are the day you are born and the day you find out why.",
    "1901"
  ),
  new RandomQuote(
    "Nelson Mandela",
    "It always seems impossible until it's done.",
    "1993"
  ),
  new RandomQuote(
    "Confucius",
    "Everything has beauty, but not everyone sees it.",
    "500 BC"
  ),
  new RandomQuote(
    "Aristotle",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "350 BC"
  ),
  new RandomQuote(
    "Albert Einstein",
    "Imagination is more important than knowledge.",
    "1929"
  ),
  new RandomQuote(
    "Henry David Thoreau",
    "What lies behind us and what lies ahead of us are tiny matters compared to what lies within us.",
    "1854"
  ),
  new RandomQuote(
    "Helen Keller",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "1920"
  ),
  new RandomQuote(
    "Socrates",
    "An unexamined life is not worth living.",
    "399 BC"
  ),
  new RandomQuote(
    "Martin Luther King Jr.",
    "The time is always right to do what is right.",
    "1963"
  ),
  new RandomQuote(
    "Leonardo da Vinci",
    "Learning never exhausts the mind.",
    "1500"
  ),
  new RandomQuote(
    "Albert Einstein",
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "1931"
  ),
  new RandomQuote(
    "Isaac Newton",
    "If I have seen further, it is by standing on the shoulders of giants.",
    "1675"
  ),
  new RandomQuote(
    "Rumi",
    "Let the beauty of what you love be what you do.",
    "1270"
  ),
  new RandomQuote(
    "Vincent Van Gogh",
    "What would life be if we had no courage to attempt anything?",
    "1886"
  ),
  new RandomQuote(
    "Mother Teresa",
    "If you judge people, you have no time to love them.",
    "1976"
  ),
  new RandomQuote(
    "Walt Disney",
    "The way to get started is to quit talking and begin doing.",
    "1947"
  ),
  new RandomQuote(
    "Pablo Picasso",
    "Every child is an artist. The problem is how to remain an artist once he grows up.",
    "1955"
  ),
  new RandomQuote(
    "Albert Einstein",
    "Try not to become a man of success, but rather try to become a man of value.",
    "1948"
  ),
  new RandomQuote(
    "Martin Luther King Jr.",
    "Faith is taking the first step even when you don't see the whole staircase.",
    "1964"
  ),
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Update the quoteelement with the random quote
  document.getElementById(
    "quoteelement"
  ).innerHTML = `<p>"${randomQuote.quote}"</p>`;

  // Update the authorelement with the author of the random quote
  document.getElementById(
    "authorelement"
  ).innerHTML = `<p>-${randomQuote.author}</p>`;

  // Update the yearelement with the year of the random quote
  document.getElementById(
    "yearelement"
  ).innerHTML = `<p>${randomQuote.date}</p>`;
}

document
  .getElementById("quotebutton")
  .addEventListener("click", generateRandomQuote);

window.onload = generateRandomQuote;
