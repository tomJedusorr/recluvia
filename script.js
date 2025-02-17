document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Simulate loading for the holdings section
    const holdingsContainer = document.querySelector(".holdings-container p");
    setTimeout(() => {
        holdingsContainer.textContent = "Your portfolio data is now available!";
    }, 2000);

    // Generate a random daily question
    const questions = [
        "What is the average return of the S&P 500 over the last 50 years?",
        "Who was the most successful investor of all time?",
        "What is the difference between growth and value investing?",
        "How does compound interest affect long-term investments?"
    ];
    
    const questionContainer = document.querySelector(".question-container p");
    questionContainer.textContent = questions[Math.floor(Math.random() * questions.length)];

    // Subscription form submission
    document.querySelector(".subscribe-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for subscribing! You will now receive exclusive insights.");
        this.reset();
    });

    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;
    
        if (currentScrollY > lastScrollY) {
            // Scrolling down → Hide navbar
            navbar.style.transform = "translateY(-100%)";
        } else {
            // Scrolling up → Show navbar
            navbar.style.transform = "translateY(0)";
        }
    
        lastScrollY = currentScrollY;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
        { text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.", author: "Philip Fisher" },
        { text: "Do not save what is left after spending, but spend what is left after saving.", author: "Warren Buffett" },
        { text: "Time in the market beats timing the market.", author: "Unknown" }
    ];

    let currentIndex = 0;

    function displayQuote() {
        document.getElementById("quote-text").textContent = `"${quotes[currentIndex].text}"`;
        document.getElementById("quote-author").textContent = `- ${quotes[currentIndex].author}`;
        currentIndex = (currentIndex + 1) % quotes.length;
    }

    displayQuote();
    setInterval(displayQuote, 15000); // Changes quote every 15 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".articles-slider");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    const scrollAmount = 320; // Adjust based on card width

    nextBtn.addEventListener("click", function () {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", function () {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});
