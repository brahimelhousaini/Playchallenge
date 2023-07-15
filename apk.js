
  var gameArea = document.body;
  
  function createAsteroid() {
    var asteroid = document.createElement('div');
    asteroid.className = 'asteroid';
    asteroid.style.left = Math.random() * window.innerWidth + 'px';
    gameArea.appendChild(asteroid);
    
    moveAsteroid(asteroid);
  }
  
  function moveAsteroid(asteroid) {
    var position = 0;
    var gameInterval = setInterval(frame, 10);
    
    function frame() {
      if (position === window.innerHeight) {
        clearInterval(gameInterval);
        gameArea.removeChild(asteroid);
      } else {
        position++;
        asteroid.style.top = position + 'px';
        
        if (collisionDetection(asteroid, spaceship)) {
          handleCollision();
        }
      }
    }
  }
  
  function collisionDetection(asteroid, spaceship) {
    var asteroidRect = asteroid.getBoundingClientRect();
    var spaceshipRect = spaceship.getBoundingClientRect();
    
    return (
      asteroidRect.left < spaceshipRect.right &&
      asteroidRect.right > spaceshipRect.left &&
      asteroidRect.top < spaceshipRect.bottom &&
      asteroidRect.bottom > spaceshipRect.top
    );
  }
  
  function handleCollision() {
  }
  
  setInterval(createAsteroid, 800);




 
  
  var spaceshipImage = 'Travelboy.webp';
  var asteroidImage = 'Screenshot_2023-07-14_221742-removebg-preview.png';
  var laserImage = 'Screenshot_2023-07-14_230511-removebg-preview.png';

  var gameArea = document.body;
  var score = 0;
  var scoreElement = document.createElement('div');
  
  var spaceship = new Image();
  spaceship.src = spaceshipImage;
  spaceship.style.position = 'absolute';
  spaceship.style.width = '50px';
  spaceship.style.height = '50px';
  spaceship.style.transform = 'translate(-50%, -50%)';
  gameArea.appendChild(spaceship);
  
  scoreElement.textContent = 'نقاط: ' + score;
  gameArea.appendChild(scoreElement);
  
  document.addEventListener('mousemove', function(event) {
    spaceship.style.left = event.clientX + 'px';
    spaceship.style.top = event.clientY + 'px';
  });
  
  function createAsteroid() {
    var asteroid = new Image();
    asteroid.src = asteroidImage;
    asteroid.className = 'asteroid';
    asteroid.style.position = 'absolute';
    asteroid.style.width = '40px';
    asteroid.style.height = '40px';
    asteroid.style.left = Math.random() * window.innerWidth + 'px';
    gameArea.appendChild(asteroid);
    
    moveAsteroid(asteroid);
  }
  
  function moveAsteroid(asteroid) {
    var position = 0;
    var gameInterval = setInterval(frame, 1);
    
    function frame() {
      if (position === window.innerHeight) {
        clearInterval(gameInterval);
        gameArea.removeChild(asteroid);
      } else {
        position++;
        asteroid.style.top = position + 'px';
        
        if (collisionDetection(asteroid, spaceship)) {
          handleCollision();
        }
      }
    }
  }
  
  function collisionDetection(asteroid, spaceship) {
    var asteroidRect = asteroid.getBoundingClientRect();
    var spaceshipRect = spaceship.getBoundingClientRect();
    
    return (
      asteroidRect.left < spaceshipRect.right &&
      asteroidRect.right > spaceshipRect.left &&
      asteroidRect.top < spaceshipRect.bottom &&
      asteroidRect.bottom > spaceshipRect.top
    );
  }
  
  function handleCollision() {
    alert('Game Over! You hit the asteroid');
    resetGame();
  }
  
  function handleFire() {
    var laser = new Image();
    laser.src = laserImage;
    laser.className = 'laser';
    laser.style.position = 'absolute';
    laser.style.width = '20px';
    laser.style.height = '40px';
    laser.style.left = spaceship.style.left;
    laser.style.top = spaceship.style.top;
    gameArea.appendChild(laser);
    
    moveLaser(laser);
  }
  
  function moveLaser(laser) {
    var position = parseInt(laser.style.top);
    var gameInterval = setInterval(frame, 1);
    
    function frame() {
      if (position === 0) {
        clearInterval(gameInterval);
        gameArea.removeChild(laser);
      } else {
        position--;
        laser.style.top = position + 'px';
        
        var asteroids = document.getElementsByClassName('asteroid');
        for (var i = 0; i < asteroids.length; i++) {
          if (collisionDetection(laser, asteroids[i])) {
            gameArea.removeChild(laser);
            gameArea.removeChild(asteroids[i]);
            score++;
            scoreElement.textContent = 'نقاط: ' + score;
          }
        }
      }
    }
  }
  
  function resetGame() {
    score = 0;
    scoreElement.textContent = 'نقاط: ' + score;
    
    var asteroids = document.getElementsByClassName('asteroid');
    while (asteroids.length > 0) {
      asteroids[0].parentNode.removeChild(asteroids[0]);
    }
  }
  
  document.addEventListener('mousedown', function(event) {
    if (event.button === 0) {
      handleFire();
    }
  });
  
  setInterval(createAsteroid, 800);


  
  document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function() {
      var introElement = document.querySelector(".intro");
      introElement.classList.add("hidden");
    }, 500); 
  });