$(document).ready(function() {

var stoneGame = {

    winNum: 0,
    counter: 0,
    wins:0,
    losses:0,
    stone1: 0,
    stone2: 0,
    stone3: 0,
    stone4: 0,

    newGame: function() {        
        this.winNum = Math.floor(Math.random() * 103) + 19;
        $("#winNum").html(this.winNum);
        console.log("the new winNum is: " + this.winNum);
        stoneGame.counter=0;

        stoneGame.stone1 = Math.floor(Math.random() * 12) + 1;
        stoneGame.stone2 = Math.floor(Math.random() * 12) + 1;
        stoneGame.stone3 = Math.floor(Math.random() * 12) + 1;
        stoneGame.stone4 = Math.floor(Math.random() * 12) + 1;

        console.log("stone 1: " + stoneGame.stone1);
        console.log("stone 2: " + stoneGame.stone2);
        console.log("stone 3: " + stoneGame.stone3);
        console.log("stone 4: " + stoneGame.stone4);

        $("#counter").html(stoneGame.counter);
        $("#wins").html(stoneGame.wins);
        $("#losses").html(stoneGame.losses);
    },

    Score: function(event){

        var gemPicked = event.target.id;
        stoneGame.counter += stoneGame[gemPicked];
        $("#counter").html(stoneGame.counter);
        

        if(stoneGame.counter === stoneGame.winNum){
            
            stoneGame.wins++;
            stoneGame.newGame();
            alert("You won!");
            
        }
        else if(stoneGame.counter > stoneGame.winNum){
            
            stoneGame.losses++;
            stoneGame.newGame();
            alert("You lost!")
            
        }

         
    },


};

stoneGame.newGame();

$('.gem').click(stoneGame.Score);

});
