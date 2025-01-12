import React, { useState, useEffect } from 'react';
import './styles.css';

const HomePage = () => {
  const buttonColours = ["red", "blue", "green", "yellow"];
  const [gamePattern, setGamePattern] = useState([]);
  const [userClickedPattern, setUserClickedPattern] = useState([]);
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const handleKeyPress = () => {
      if (!started) {
        setLevel(0);
        nextSequence();
        setStarted(true);
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [started]);

  const playSound = (name) => {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
  };

  const animatePress = (currentColor) => {
    const button = document.getElementById(currentColor);
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100);
  };

  const startOver = () => {
    setLevel(0);
    setGamePattern([]);
    setStarted(false);
  };

  const checkAnswer = (currentLevel, currentPattern) => {
    if (gamePattern[currentLevel] === currentPattern[currentLevel]) {
      if (currentPattern.length === gamePattern.length) {
        setTimeout(() => nextSequence(), 1000);
      }
    } else {
      playSound("wrong");
      document.body.classList.add("game-over");
      setTimeout(() => document.body.classList.remove("game-over"), 200);
      document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";
      startOver();
    }
  };

  const handleButtonClick = (color) => {
    const newUserPattern = [...userClickedPattern, color];
    setUserClickedPattern(newUserPattern);
    playSound(color);
    animatePress(color);
    checkAnswer(newUserPattern.length - 1, newUserPattern);
  };

  const nextSequence = () => {
    setUserClickedPattern([]);
    setLevel(prevLevel => prevLevel + 1);
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    setGamePattern(prev => [...prev, randomChosenColour]);

    const button = document.getElementById(randomChosenColour);
    button.style.opacity = "0";
    setTimeout(() => {
      button.style.opacity = "1";
    }, 100);
    playSound(randomChosenColour);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <h2>MemoRace</h2>
          </div>
          <div className="nav-menu">
            <ul>
              <li><a href="#" id="highScores">Records</a></li>
              <li><a href="#" id="login">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <h1 id="level-title">
        {!started ? "Press A Key to Start" : `Level ${level}`}
      </h1>

      <div className="container">
        <div className="row">
          <div 
            type="button" 
            id="green" 
            className="btn green"
            onClick={() => handleButtonClick("green")}
          />
          <div 
            type="button" 
            id="red" 
            className="btn red"
            onClick={() => handleButtonClick("red")}
          />
        </div>

        <div className="row">
          <div 
            type="button" 
            id="yellow" 
            className="btn yellow"
            onClick={() => handleButtonClick("yellow")}
          />
          <div 
            type="button" 
            id="blue" 
            className="btn blue"
            onClick={() => handleButtonClick("blue")}
          />
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <p>Follow Us</p>
            <div className="social-icons">
              <a className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;


