const readline = require("readline-sync");
const playerName = readline.question("What is your name? ");
readline.question("Hi "+playerName+" welcome to AGGRESSION, Press Enter if you would like to unleash yours.");

const enemys = ["Boss", "Partner", "Teenagers", "Co-workers"];
let userHealth=50;

const trophys=["Patience", "Rest", "Cash", "Peace"];
var prize=[];

const options=["walk", "exit", "print"];

let retrieve=trophys[Math.floor(Math.random()*trophys.length)];

function Game(){
    const attackPower=Math.floor(Math.random()* (9+3-2)*2);
    const enemy=enemys[Math.floor(Math.random()*enemys.length)];
    const enemyPower=Math.floor(Math.random()*(9+3-2)*2);
    let enemysHealth=50;

    const index=readline.keyInSelect(options, "what will you do next?");

    switch(options[index]){
        case "exit": 
        return userHealth=0;
        break;
        case"print":
        console.log(playerName+"Health: "+userHealth+"Trophys: "+retrieve);
        break; 
        case"walk": 
        let key=Math.random();
        if(key<=.3){
            console.log("Walking.....");
        }else if(key>=.3){
            console.log(enemy+" showed up"); 
            while(enemysHealth>0&&userHealth>0){
                const user=readline.question("what would you like to do? enter 'r' to run, or 'a' to attack: ");
                switch(user){
                    case "r": 
                    const run=Math.random();
                    if(run<.5){
                      console.log("Before you can run away "+enemy+" attacks you with: "+enemyPower);
                    }else{
                        console.log("You ran away!!");
                        break;
                    }
                    case"a": 
                    enemysHealth-=attackPower;
                    console.log("You attacked "+enemy+" with "+attackPower+" attack power");

                    userHealth-=enemyPower;
                    console.log("Enemy just hit you with "+enemyPower+" attack power");

                    if(enemysHealth<=0){
                        console.log("You killed "+enemy+"."+enemy+" left this: "+retrieve);
                        let loot=Math.random();
                        if(loot<=.3){
                            prize.push(retrieve);
                        }else if(userHealth<=0){
                            console.log(enemy+" has defeated you! You are now dead!");
                        }
                    }
                }
            }
        }
    }
}
while (userHealth>0){
    Game();
}