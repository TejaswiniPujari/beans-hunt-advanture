var modal = document.getElementById("modal");
var guidBtn = document.getElementById("guid-btn");
var main = document.getElementById('main');
var closeBtn = document.getElementById("close-btn");
var giftInfo = document.getElementById('gift-box');
var dice = document.getElementById('dice');
var inputValue = document.getElementById('input-value');
var gameBoard = document.getElementById('game-board');
var choiceCount = document.getElementById('choiceLeftText');

let choice = 100;

giftInfo.onclick = function () {
    modal.style.display = "block";
    main.style.opacity = 0.2;
    document.getElementById('body').classList.add('body');
    document.getElementById('guidline').style.display = 'none';
    document.getElementById('gift-info').style.display = 'block';
}

function diceRoll() {
    if (!inputValue.value) {
        alert('Please enter value');
        return;
    }
    if (inputValue.value>6 || inputValue.value<1 ) {
        alert('Enter value between 1 to 6');
        return;
    }
    gameBoard.src = "./img/game/start png.png";
    choice = choice - 1;
    dice.src = './img/game/Dice Forever.gif';
    const rndInt = Math.floor(Math.random() * 6) + 1;
    console.log(rndInt, inputValue.value)
    setTimeout(() => {
        if (inputValue.value == rndInt) {
            gameBoard.src = `./img/game/${rndInt}.gif`;
            dice.src = `./img/game/d${rndInt}.png`;
        }
        dice.src = './img/game/Dice-PNG.png';
        choiceCount.innerHTML = `Chance Left: ${choice}`
    }, 2000);
}

// show guidline on btn click
guidBtn.onclick = function () {
    modal.style.display = "block";
    main.style.opacity = 0.2;
    document.getElementById('body').classList.add('body');
    document.getElementById('guidline').style.display = 'block';
    document.getElementById('gift-info').style.display = 'none';
}

// close guidline on close btn click
closeBtn.onclick = function () {
    modal.style.display = "none";
    main.style.opacity = 1;
    document.getElementById('body').classList.remove('body');
}

// click outside of guidline box then guidline will close 
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const hourlyStarImg = {
    0: './img/1st-rank.png',
    1: './img/2nd-rank.png',
    2: './img/3rd-rank.png',
    3: './img/4th-rank.png',
    4: './img/5th-rank.png'
}

const rewardDescriptionByHourly = {
    0: '40% of the beans pot',
    1: '30% of the beans pot',
    2: '10% of the beans pot',
    3: '10% of the beans pot',
    4: '10% of the beans pot'
}

const rewardDescriptionByWeekly = {
    0: 'Kingpin Entrance x 9 days',
    1: 'Kingpin Entrance x 7 days',
    2: 'Kingpin Entrance x 5 days',
    3: 'Kingpin Entrance x 3 days',
    4: 'Kingpin Entrance x 3 days',
}

const rewardDescriptionByOverall = {
    0: 'Maharaja Premium Entrance 15 Days +Profile Frame 15 Days',
    1: 'Maharaja Premium Entrance 10 Days + Profile Frame 10 Days',
    2: 'Maharaja Premium Entrance 7 Days + Profile Frame 7 Days'
}

let reward = 'hourly';

let slideNumber = 0;
const dots = document.getElementsByClassName('dot');

function selectTalentTab() {
    document.getElementById('talent-tab').classList.remove('unselect-btn');
    document.getElementById('game-zone-tab').classList.add('unselect-btn');
    document.getElementById('talent-reward').style.display = 'block';
    document.getElementById('game-zone-reward').style.display = 'none';
    document.getElementById('talent-event-gift').style.display = 'block';
    document.getElementById('game-zone-event-gift').style.display = 'none';
    document.getElementById('game-box').style.display = 'none';
}

function selectGameZoneTab() {
    document.getElementById('talent-tab').classList.add('unselect-btn');
    document.getElementById('game-zone-tab').classList.remove('unselect-btn');
    document.getElementById('talent-reward').style.display = 'none';
    document.getElementById('game-zone-reward').style.display = 'block';
    document.getElementById('talent-event-gift').style.display = 'none';
    document.getElementById('game-zone-event-gift').style.display = 'block';
    document.getElementById('game-box').style.display = 'block';
}

function setCurrentLeaderboard() {
    document.getElementById('current-leaderboard').classList.add('selected-btn');
    document.getElementById('previous-leaderboard').classList.remove('selected-btn');
}
function setPreviousLeaderboard() {
    document.getElementById('current-leaderboard').classList.remove('selected-btn');
    document.getElementById('previous-leaderboard').classList.add('selected-btn');
}
function selectHourly(bannerName) {
    document.getElementById(`hourly-${bannerName}`).classList.remove('unselect-btn');
    document.getElementById(`weekly-${bannerName}`).classList.add('unselect-btn');
    document.getElementById(`overall-${bannerName}`).classList.add('unselect-btn');
    if (bannerName === 'leaderboard')
        document.getElementById('leaderboard-tab').style.display = 'block';
    if (bannerName === 'reward') {
        reward = 'hourly';
        document.getElementById('reward-img').src = './img/rewards/Bean-pot.png';
        document.getElementById('reward-img').style.height = '30vw'
        document.getElementById('bean-pot-overall').style.display = 'none';
        document.getElementById('bean-pot').style.display = 'block';
        document.getElementById('reward-des').innerHTML = rewardDescriptionByHourly[slideNumber];
        dots[3].style.display = 'block';
        dots[4].style.display = 'block';
    }
}

function selectWeekly(bannerName) {
    document.getElementById(`hourly-${bannerName}`).classList.add('unselect-btn');
    document.getElementById(`weekly-${bannerName}`).classList.remove('unselect-btn');
    document.getElementById(`overall-${bannerName}`).classList.add('unselect-btn');
    if (bannerName === 'leaderboard')
        document.getElementById('leaderboard-tab').style.display = 'block';
    if (bannerName === 'reward') {
        reward = 'weekly';
        document.getElementById('reward-img').src = './img/rewards/kingspin.png';
        document.getElementById('reward-img').style.height = '18vw'
        document.getElementById('bean-pot-overall').style.display = 'none';
        document.getElementById('bean-pot').style.display = 'block';
        document.getElementById('reward-des').innerHTML = rewardDescriptionByWeekly[slideNumber];
        dots[3].style.display = 'block';
        dots[4].style.display = 'block';
    }
}

function selectOverall(bannerName) {
    document.getElementById(`hourly-${bannerName}`).classList.add('unselect-btn');
    document.getElementById(`weekly-${bannerName}`).classList.add('unselect-btn');
    document.getElementById(`overall-${bannerName}`).classList.remove('unselect-btn');
    if (bannerName === 'leaderboard')
        document.getElementById('leaderboard-tab').style.display = 'none';
    if (bannerName === 'reward') {
        reward = 'overall';
        document.getElementById('bean-pot-overall').style.display = 'block';
        document.getElementById('bean-pot').style.display = 'none';
        dots[slideNumber].classList.remove('active');
        slideNumber = 0;
        dots[3].style.display = 'none';
        dots[4].style.display = 'none';
        dots[slideNumber].classList.add('active');
        document.getElementById('reward-des').innerHTML = rewardDescriptionByOverall[slideNumber];
    }
}

function onLeftClick() {
    if (slideNumber > 0) {
        dots[slideNumber].classList.remove('active');
        slideNumber = slideNumber - 1;
        dots[slideNumber].classList.add('active');
        if (reward === 'hourly')
            document.getElementById('reward-des').innerHTML = rewardDescriptionByHourly[slideNumber];
        if (reward === 'weekly')
            document.getElementById('reward-des').innerHTML = rewardDescriptionByWeekly[slideNumber];
        if (reward === 'overall')
            document.getElementById('reward-des').innerHTML = rewardDescriptionByOverall[slideNumber];
        document.getElementById('reward-rank').src = hourlyStarImg[slideNumber];
    }
}

function onRightClick() {
    if (((reward === 'hourly' || reward === 'weekly') && slideNumber < 4) || (reward === 'overall' && slideNumber < 2)) {
        dots[slideNumber].classList.remove('active');
        slideNumber = slideNumber + 1;
        dots[slideNumber].classList.add('active');
        if (reward === 'hourly')
            document.getElementById('reward-des').innerHTML = rewardDescriptionByHourly[slideNumber];
        if (reward === 'weekly')
            document.getElementById('reward-des').innerHTML = rewardDescriptionByWeekly[slideNumber];
        if (reward === 'overall')
            document.getElementById('reward-des').innerHTML = rewardDescriptionByOverall[slideNumber];
    }
}
