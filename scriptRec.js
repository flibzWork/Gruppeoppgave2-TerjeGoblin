let pet = {
    name: "GoblinTerje",
    health: 100,
    hunger: 100,
    clean: 100
};

function setup() {
    updateStats ();
}

function feed() {
    pet.hunger += 50;
    updateStats();
}

function clean() {
    pet.clean += 50;    
    updateStats();
}

function updateStats(){
    document.getElementById("name").textContent = pet.name;
    document.getElementById("feed").textContent = pet.feed;
    document.getElementById("clean").textContent = pet.clean;
}


// knapp til å mate GoblinTerje


function feedGoblin() {
    //clearInterval
    //document.clearInterval('c')


    
}





// Knapp til å rydde opp etter Terje


function cleanUpAfterGoblin() {

}




// Knapp til å leke med Terje


function playWithGoblin() {

}





//timer til Terje
var countDownTime = new Time
var x = setInterval(function () {
            var timeleft = countDown - now;
        }








        //Terje dør
        function show() {
            var the_string = "";
            if (this.pet_health === 0) {
                the_string = this.pet_name + " is dead!";
            } else {
                the_string += "Name: " + this.pet_name;
                the_string += "Hunger: " + this.pet_name;
                the_string += "Health: " + this.pet_health;
                the_string += "Happiness: " + this.pet_happinesss;
            }
        }





        //Terje Sult


        //Terje Helse


        //Terje Søvn