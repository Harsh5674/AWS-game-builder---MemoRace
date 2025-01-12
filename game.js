// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });


// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }

//     } else {

//       console.log("wrong");

//       playSound("wrong");

//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       //2. Call startOver() if the user gets the sequence wrong.
//       startOver();
//     }

// }

// function nextSequence() {

//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// //1. Create a new function called startOver().
// function startOver() {

//   //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
//   level = 0;
//   gamePattern = [];
//   started = false;
// }


// // Auth0 configuration
// let auth0Client = null;
// const configureAuth0 = async () => {
//   auth0Client = await auth0.createAuth0Client({
//     domain: 'dev-gi3gmtydfkte61jl.us.auth0.com',
//     clientId: 'XaKMRkLbMMsMU2apk1uDWCMF1sZdv7qW',
//     authorizationParams: {
//       redirect_uri: window.location.origin
//     }
//   });

//   // Check if user is returning from Auth0 login
//   if (location.search.includes("code=") && location.search.includes("state=")) {
//     await auth0Client.handleRedirectCallback();
//     window.history.replaceState({}, document.title, "/");
//   }

//   // Update UI based on authentication state
//   updateUI();
// };

// const updateUI = async () => {
//   const isAuthenticated = await auth0Client.isAuthenticated();
//   const loginButton = document.getElementById('login');

//   if (isAuthenticated) {
//     const user = await auth0Client.getUser();
//     loginButton.textContent = 'Logout';
//     loginButton.onclick = () => logout();
//   } else {
//     loginButton.textContent = 'Login';
//     loginButton.onclick = () => login();
//   }
// };

// const login = async () => {
//   await auth0Client.loginWithRedirect({
//     authorizationParams: {
//       redirect_uri: window.location.origin
//     }
//   });
// };

// const logout = () => {
//   auth0Client.logout({
//     logoutParams: {
//       returnTo: window.location.origin
//     }
//   });
// };

// // Initialize Auth0 when the page loads
// window.onload = async () => {
//   await configureAuth0();
// };

// // Game Variables
// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log("success");

//     if (userClickedPattern.length === gamePattern.length){
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     console.log("wrong");
//     playSound("wrong");

//     $("body").addClass("game-over");
//     setTimeout(function () {
//       $("body").removeClass("game-over");
//     }, 200);

//     $("#level-title").text("Game Over, Press Any Key to Restart");
//     startOver();
//   }
// }

// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }


// Auth0 configuration
// let auth0Client = null;
// const configureAuth0 = async () => {
//   auth0Client = await auth0.createAuth0Client({
//     domain: 'dev-gi3gmtydfkte61jl.us.auth0.com',
//     clientId: 'XaKMRkLbMMsMU2apk1uDWCMF1sZdv7qW',
//     authorizationParams: {
//       redirect_uri: window.location.origin
//     }
//   });

//   // Check if user is returning from Auth0 login
//   if (location.search.includes("code=") && location.search.includes("state=")) {
//     await auth0Client.handleRedirectCallback();
//     window.history.replaceState({}, document.title, "/");
//   }

//   // Update UI based on authentication state
//   updateUI();
// };

// const updateUI = async () => {
//   const isAuthenticated = await auth0Client.isAuthenticated();
//   const loginButton = document.getElementById('login');

//   if (isAuthenticated) {
//     const user = await auth0Client.getUser();
//     loginButton.textContent = 'Logout';
//     loginButton.onclick = () => logout();
    
//     // Send user data to backend
//     saveUserToDatabase(user);
//   } else {
//     loginButton.textContent = 'Login';
//     loginButton.onclick = () => login();
//   }
// };

// // Function to save user to database
// async function saveUserToDatabase(user) {
//   try {
//     const response = await fetch('http://localhost:7000/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         auth0Id: user.sub,
//         email: user.email,
//         name: user.name,
//         lastLogin: new Date()
//       })
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to save user');
//     }
    
//     console.log('User saved successfully');
//   } catch (error) {
//     console.error('Error saving user:', error);
//   }
// }

// const login = async () => {
//   await auth0Client.loginWithRedirect({
//     authorizationParams: {
//       redirect_uri: window.location.origin
//     }
//   });
// };

// const logout = () => {
//   auth0Client.logout({
//     logoutParams: {
//       returnTo: window.location.origin
//     }
//   });
// };

// // Initialize Auth0 when the page loads
// window.onload = async () => {
//   await configureAuth0();
// };

// // Game Variables
// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log("success");

//     if (userClickedPattern.length === gamePattern.length){
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     console.log("wrong");
//     playSound("wrong");

//     $("body").addClass("game-over");
//     setTimeout(function () {
//       $("body").removeClass("game-over");
//     }, 200);

//     $("#level-title").text("Game Over, Press Any Key to Restart");
//     startOver();
//   }
// }

// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }

// function showHighScores() {
//     document.getElementById('highScoresContainer').style.display = 'flex';
//     fetchHighScores();
// }

// function hideHighScores() {
//     document.getElementById('highScoresContainer').style.display = 'none';
// }

// // Function to update high score in database
// async function saveScore(score) {
//     try {
//       const user = await auth0Client.getUser();
//       if (!user) return;
  
//       const response = await fetch('http://localhost:3000/api/scores', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           auth0Id: user.sub,
//           score: score
//         })
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to save score');
//       }
  
//       const scores = await response.json();
//       displayHighScores(scores);
//     } catch (error) {
//       console.error('Error saving score:', error);
//     }
//   }

//   async function fetchHighScores() {
//     try {
//       const user = await auth0Client.getUser();
//       if (!user) return;
  
//       const response = await fetch(`http://localhost:3000/api/scores/${user.sub}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch scores');
//       }
  
//       const scores = await response.json();
//       displayHighScores(scores);
//     } catch (error) {
//       console.error('Error fetching scores:', error);
//     }
//   }
  
//   // Add this function to display high scores
//   function displayHighScores(scores) {
//     const highScoresDiv = document.getElementById('highScores');
//     if (!highScoresDiv) return;
  
//     let html = '<h2>Your Top 5 Scores</h2><ul>';
//     scores.forEach((score, index) => {
//       const date = new Date(score.date).toLocaleDateString();
//       html += `<li>Level ${score.score} (${date})</li>`;
//     });
//     html += '</ul>';
    
//     highScoresDiv.innerHTML = html;
//   }

// // Update checkAnswer function to include high score tracking
// function checkAnswer(currentLevel) {
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length) {
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       console.log("wrong");
//       playSound("wrong");
  
//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);
  
//       $("#level-title").text("Game Over, Press Any Key to Restart");
      
//       // Save score when game ends
//       saveScore(level);
      
//       startOver();
//     }
//   }
  
//   // Add click handler for the Records button
//   document.getElementById('highScores').addEventListener('click', function(e) {
//     e.preventDefault();
//     fetchHighScores();
//   });



// Auth0 configuration
let auth0Client = null;
const configureAuth0 = async () => {
  auth0Client = await auth0.createAuth0Client({
    domain: 'dev-gi3gmtydfkte61jl.us.auth0.com',
    clientId: 'XaKMRkLbMMsMU2apk1uDWCMF1sZdv7qW',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  });

  // Check if user is returning from Auth0 login
  if (location.search.includes("code=") && location.search.includes("state=")) {
    await auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }

  // Update UI based on authentication state
  updateUI();
};

const updateUI = async () => {
  const isAuthenticated = await auth0Client.isAuthenticated();
  const loginButton = document.getElementById('login');

  if (isAuthenticated) {
    const user = await auth0Client.getUser();
    loginButton.textContent = 'Logout';
    loginButton.onclick = () => logout();
    
    // Send user data to backend
    saveUserToDatabase(user);
  } else {
    loginButton.textContent = 'Login';
    loginButton.onclick = () => login();
  }
};

// Function to save user to database
async function saveUserToDatabase(user) {
  try {
    const response = await fetch('http://localhost:7000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        auth0Id: user.sub,
        email: user.email,
        name: user.name,
        lastLogin: new Date()
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to save user');
    }
    
    console.log('User saved successfully');
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

const login = async () => {
  await auth0Client.loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  });
};

const logout = () => {
  auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
};

// Initialize Auth0 when the page loads
window.onload = async () => {
  await configureAuth0();
};

// Game Variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    
    // Save score when game ends
    saveScore(level);
    
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function showHighScores() {
    document.getElementById('highScoresContainer').style.display = 'flex';
    fetchHighScores();
}

function hideHighScores() {
    document.getElementById('highScoresContainer').style.display = 'none';
}

async function fetchHighScores() {
    try {
        const user = await auth0Client.getUser();
        if (!user) {
            document.getElementById('highScores').innerHTML = 
                '<div class="no-scores">Please login to view your scores</div>';
            return;
        }

        const response = await fetch(`http://localhost:7000/api/scores/${user.sub}`);
        if (!response.ok) {
            throw new Error('Failed to fetch scores');
        }

        const scores = await response.json();
        displayHighScores(scores);
    } catch (error) {
        console.error('Error fetching scores:', error);
        document.getElementById('highScores').innerHTML = 
            '<div class="no-scores">Error loading scores. Please try again later.</div>';
    }
}

function displayHighScores(scores) {
    const highScoresDiv = document.getElementById('highScores');
    if (!highScoresDiv) return;

    if (scores.length === 0) {
        highScoresDiv.innerHTML = 
            '<div class="no-scores">No scores yet. Play the game to set some records!</div>';
        return;
    }

    let html = '<div class="scores-list">';
    scores.forEach((score, index) => {
        const date = new Date(score.date).toLocaleDateString();
        html += `
            <div class="score-item ${index === 0 ? 'top-score' : ''}">
                <span class="score-rank">#${index + 1}</span>
                <span class="score-level">Level ${score.score}</span>
                <span class="score-date">${date}</span>
            </div>
        `;
    });
    html += '</div>';
    
    highScoresDiv.innerHTML = html;
}

// Add event listeners when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Records button click handler
    document.getElementById('highScores').addEventListener('click', function(e) {
        e.preventDefault();
        showHighScores();
    });

    // Close button click handler
    document.getElementById('closeHighScores').addEventListener('click', function() {
        hideHighScores();
    });

    // Close on click outside
    document.getElementById('highScoresContainer').addEventListener('click', function(e) {
        if (e.target === this) {
            hideHighScores();
        }
    });
});

// Function to save score when game ends
async function saveScore(score) {
    try {
        const user = await auth0Client.getUser();
        if (!user) return;

        const response = await fetch('http://localhost:7000/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auth0Id: user.sub,
                score: score
            })
        });

        if (!response.ok) {
            throw new Error('Failed to save score');
        }

        const scores = await response.json();
        // Only update the displayed scores if the high scores container is visible
        if (document.getElementById('highScoresContainer').style.display === 'flex') {
            displayHighScores(scores);
        }
    } catch (error) {
        console.error('Error saving score:', error);
    }
}
