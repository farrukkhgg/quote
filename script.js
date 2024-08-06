const quotes = [
    "“The best revenge is massive success.” — Frank Sinatra",
    "“Do not watch the clock. Do what it does. Keep going.” – Sam Levenson",
    "“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau",
    "“The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt",
    "“Believe you can and you're halfway there.” – Theodore Roosevelt",
    "“The best way to find yourself is to lose yourself in the service of others.” — Mahatma Gandhi",
    "“Don’t let the noise of others’ opinions drown out your own inner voice.” — Steve Jobs",
    "“Success is walking from failure to failure with no loss of enthusiasm.” — Winston Churchill",
    "“The greatest glory in living lies not in never falling, but in rising every time we fall.” — Nelson Mandela",
    "“Try not to become a man of success, but rather try to become a man of value.” — Albert Einstein",
    "“Act as if what you do makes a difference. It does.” — William James",
    "“It does not matter how slowly you go as long as you do not stop.” — Confucius",
    "“Life is what happens when you're busy making other plans.” — John Lennon",
    "“Be yourself; everyone else is already taken.” ― Oscar Wilde",
    "“In the end, it's not the years in your life that count. It's the life in your years.” — Abraham Lincoln",
    "“Well done is better than well said.” — Benjamin Franklin",
    "“To be successful, you have to be selfish, or else you will never achieve. And once you get to your highest level, then you have to be unselfish.” – Michael Jordan",
    "“Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.” – Nikola Tesla",
    "“Whether you think you can or you think you can't, you're right.” — Henry Ford",
    "“A man may die, nations may rise and fall, but an idea lives on.” – John F. Kennedy"
];


const quoteElement = document.getElementById('quote');
const button = document.getElementById('generate-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

button.addEventListener('click', () => {
    quoteElement.textContent = getRandomQuote();
});
