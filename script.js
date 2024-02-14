// constant for buttons
const feedBtn = document.querySelector("#action-feed");
const cleanBtn = document.querySelector("#action-clean");
const playBtn = document.querySelector("#action-play");

//constant for main bars
const hungerHp = document.querySelector("#hunger-hp")
const cleanHp = document.querySelector("#clean-hp")
const playHp = document.querySelector("#play-hp")

// game settings
let maxHunger = 100
let maxClean = 100
let maxPlay = 100

// game speed
let day = 20

// GoblinTerje
function GoblinTerje(){
this.hunger = maxHunger
this.clean = maxClean
this.play = maxPlay
}


// Abilities 
GoblinTerje.prototype.actionFeed = function () {
    this.hunger += 40 / (day * 2)
    console.log('actionFeed')
};

GoblinTerje.prototype.actionClean = function () {
    this.clean += 20 / (day * 2)
}

GoblinTerje.prototype.actionPlay = function () {
    this.play += 35 / (day * 2)
}

GoblinTerje.prototype.tick = function () {
    this.hunger -= 3;
    this.clean -= 1;
    this.play--;
};

let gbt = new GoblinTerje
let hungerHpCount;
let cleanHpCount;
let playHpCount;



//controllers
feedBtn.addEventListener("click", function () {
    gbt.actionFeed();
});

playBtn.addEventListener("click", function () {
    gbt.actionPlay();
});

cleanBtn.addEventListener("click", function () {
    gbt.actionClean();
});







// Start game
// core();



// main function of GoblinTerje
function core() {
console.log('run')
    //console.log(gbt)
    hungerHpCount = (gbt.hunger / maxHunger * 100).toFixed(2);
    cleanHpCount = (gbt.clean / maxClean * 100).toFixed(2);
    playHpCount = (gbt.play / maxPlay * 100).toFixed(2);
    checkIfDead()
}
let coreUpdate = setInterval(core(), 1000);

const image = document.getElementById('terjeAlive-image');
function checkIfDead(){

    //Death ability
    if ((playHpCount <= 0) || (cleanHpCount <= 0) || (hungerHpCount <= 0)) {
        playHpCount = 0;
        cleanHpCount = 0;
        hungerHpCount = 0;
        clearInterval(coreUpdate);
        //alertlGoblin =('Your score: ' + score + '\n (bilde) ');
        image.src = 'img/TerjeTrollEyesClosed.png';
        console.log('asd')
    }
}
    

//Max health percentage (real)
if (gbt.hunger >= (maxHunger + (maxHunger / 100 * 20))) {
    gbt.hunger = maxHunger + (maxHunger / 100 * 20);
}

if (gbt.clean >= (maxClean + (maxClean / 100 * 20))) {
    gbt.clean = maxClean + (maxClean / 100 * 20);
}

if (gbt.play >= (maxPlay + (maxPlay / 100 * 20))) {
    gbt.play = maxPlay + (maxPlay / 100 * 20);
}

//Max health percentage (for player)
if ((gbt.hunger / maxHunger * 100) > 100) {
    hungerHpCount = 100
}

if ((gbt.clean / maxClean * 100) > 100) {
    cleanHpCount = 100
}

if ((gbt.play / maxPlay * 100) > 100) {
    playHpCount = 100
}

// Show HP on screen
hungerHp.innerHTML = hungerHpCount;
cleanHp.innerHTML = cleanHpCount;
playHp.innerHTML = playHpCount;

// remove hp every tick
gbt.tick(); 












































