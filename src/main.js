// query selector variables go here 👇

// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

var cleanUnmotivationalPosters = []

var savedPosters = [];
var currentPoster;

var currentImage = document.querySelector(".poster-img")
var currentTitle = document.querySelector(".poster-title")
var currentQuote = document.querySelector(".poster-quote")
var showRandomPosterBtn = document.querySelector(".show-random")

var mainPosterSection = document.querySelector(".main-poster")
var createPosterSection = document.querySelector(".poster-form")
var savedPostersSection = document.querySelector(".saved-posters")

var showPosterFormBtn = document.querySelector(".show-form")
var showSavedPosterBtn = document.querySelector(".show-saved")
var takeMeBackBtn = document.querySelector(".show-main")
var backToMainBtn = document.querySelector(".back-to-main")
var showMyPosterBtn = document.querySelector(".make-poster")

var posterImageInput = document.querySelector("#poster-image-url")
var posterTitleInput = document.querySelector("#poster-title")
var posterQuoteInput = document.querySelector("#poster-quote")

var savePosterBtn = document.querySelector(".save-poster")
var savedPostersGrid = document.querySelector(".saved-posters-grid")

var unmotivationalPosterBtn = document.querySelector(".show-unmotivational")
var unmotivationalPosterSection = document.querySelector(".unmotivational-posters")
var unmotivationalPostersGrid = document.querySelector(".unmotivational-posters-grid")
var backToMainBtn2 = document.querySelector(".back-to-main-2")

// event listeners go here 👇

showRandomPosterBtn.addEventListener("click", displayRandomPoster)
window.addEventListener("load", displayRandomPoster)

showPosterFormBtn.addEventListener("click", function(event) {
  switchPage(createPosterSection)
})
showSavedPosterBtn.addEventListener("click", function(event) {
  switchPage(savedPostersSection)
})
takeMeBackBtn.addEventListener("click", function(event) {
  switchPage(mainPosterSection)
})
backToMainBtn.addEventListener("click", function(event) {
  switchPage(mainPosterSection)
})
showMyPosterBtn.addEventListener("click", function(event) {
  event.preventDefault()
  handlePosterSubmission()
})
savePosterBtn.addEventListener("click", savePoster)

showSavedPosterBtn.addEventListener("click", displaySavedPostersGrid)

unmotivationalPosterBtn.addEventListener("click", function(event) {
  cleanData()
  displayUnmotivationalPosters ()
  switchPage(unmotivationalPosterSection)
})
backToMainBtn2.addEventListener("click", function(event) {
  console.log("button was clicked")
  switchPage(mainPosterSection)
})

// functions and event handlers go here 👇
// (we've provided two to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now() + Math.random(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

// my functions
function updatePoster() {
  currentImage.src = currentPoster.imageURL
  currentTitle.innerText = currentPoster.title
  currentQuote.innerText = currentPoster.quote
}
function displayRandomPoster() {
  randomImage = images[getRandomIndex(images)]
  randomTitle = titles[getRandomIndex(titles)]
  randomQuote = quotes[getRandomIndex(quotes)]

  currentPoster = createPoster(randomImage, randomTitle, randomQuote)

  updatePoster()
}
function hideAllSections() {
  mainPosterSection.classList.add("hidden")
  createPosterSection.classList.add("hidden") 
  savedPostersSection.classList.add("hidden")
  unmotivationalPosterSection.classList.add("hidden")
}
function switchPage(sectionToView) {
  // debugger
  hideAllSections()
  sectionToView.classList.remove("hidden")
}
function handlePosterSubmission() {
  var imageURLValue = posterImageInput.value
  var posterTitleValue = posterTitleInput.value
  var posterQuoteValue = posterQuoteInput.value
  
  currentPoster = createPoster(imageURLValue, posterTitleValue, posterQuoteValue)
  images.push(imageURLValue)
  titles.push(posterTitleValue)
  quotes.push(posterQuoteValue)

  switchPage(mainPosterSection)

  updatePoster()
}
function savePoster() {
  // console.log("Current poster being saved:", currentPoster);
  if (!savedPosters.includes(currentPoster))
    savedPosters.push(currentPoster)
  // debugger
}

function displaySavedPostersGrid() {
  savedPostersGrid.innerHTML = ""
  savedPosters.forEach(function(poster) {
    var miniPosterCard = document.createElement("div")
    miniPosterCard.classList.add("mini-poster")
    
    var miniPosterImageUrl = document.createElement("img")
    miniPosterImageUrl.src = poster.imageURL

    var miniPosterTitle = document.createElement("h2")
    miniPosterTitle.innerText = poster.title

    var miniPosterQuote = document.createElement("h4")
    miniPosterQuote.innerText = poster.quote

    miniPosterCard.append(miniPosterImageUrl, miniPosterTitle, miniPosterQuote)
  
    savedPostersGrid.append(miniPosterCard)
  })
}

function cleanData() {
  cleanUnmotivationalPosters = unmotivationalPosters.map(function(poster) {
    var imageURL = poster.img_url 
    var title = poster.name 
    var quote = poster.description 

    return createPoster(imageURL, title, quote)
  })
}

function displayUnmotivationalPosters () {
  unmotivationalPostersGrid.innerHTML = ""
  cleanUnmotivationalPosters.forEach(function(poster) {
    var miniUnmoPosters = document.createElement("div")
    miniUnmoPosters.classList.add("mini-poster")
    miniUnmoPosters.setAttribute("data-id", poster.id)
    // console.log("Assigned Data-ID:", miniUnmoPosters.getAttribute("data-id"));
    
    miniUnmoPosters.addEventListener("dblclick", function(event) {
      
      var clickedPoster = event.target.closest(".mini-poster")
      if (clickedPoster) {
        var posterID = Number(clickedPoster.getAttribute("data-id"))
        console.log("Double-clicked poster ID:", posterID);
      deleteUnmotivationalPosters(posterID)
      }
    })
    
    var miniUnmoImageUrl = document.createElement("img")
    miniUnmoImageUrl.src = poster.imageURL

    var miniUnmoTitle = document.createElement("h2")
    miniUnmoTitle.innerText = poster.title

    var miniUnmoQuote = document.createElement("h4")
    miniUnmoQuote.innerText = poster.quote

    miniUnmoPosters.append(miniUnmoImageUrl, miniUnmoTitle, miniUnmoQuote)
  
    unmotivationalPostersGrid.append(miniUnmoPosters)
  })
}

function deleteUnmotivationalPosters(posterID) {
  let index = cleanUnmotivationalPosters.findIndex(function(poster) {
    return poster.id === posterID
  })
  
    if (index !== -1) {
      cleanUnmotivationalPosters.splice(index, 1)
    }
    document.querySelectorAll(".mini-poster").forEach(function(miniPoster) {
    if (Number(miniPoster.getAttribute("data-id")) === posterID) {
      // console.log("✅ Match Found! Deleting Mini Poster:", miniPoster);
      miniPoster.remove()
    }
  })
}