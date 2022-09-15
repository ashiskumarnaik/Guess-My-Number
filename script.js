'use strict';

const secret = () => Math.trunc(Math.random()*20)+1;
let secretNumber = secret();
let highScore = 0;


let score = Number(document.querySelector('.score').textContent);

// console.log (secretNumber);


// functionality of check button
document.querySelector('.check').addEventListener('click',  () => {
    const guess = Number (document.querySelector('.guess').value);
    // if no value is input
    if (!guess)
    {
        document.querySelector('.message').textContent= '⛔️ No number!';
    }
    else if (guess > secretNumber)
    {
        if (score > 0)
        {
            document.querySelector('.message').textContent = '📈 Too High!';
            document.querySelector('.score').textContent = --score;
            
        
        }
        else{
            document.querySelector('.message').textContent = '💥 You loose!';
            document.querySelector('.score').textContent = '0';
        }
        
    }
    else if (guess < secretNumber)
    {
        if (score > 0)
        {
            document.querySelector('.message').textContent = '📉 Too low!';
            document.querySelector('.score').textContent = --score;
            
        
        }
        else{
            document.querySelector('.message').textContent = '💥 You loose!';
            document.querySelector('.score').textContent = '0';
        }
    }
    else if (guess === secretNumber)
    {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🥳 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
});

// functionality for the again button

document.querySelector('.again').addEventListener('click', () => 
{
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = secret();
})