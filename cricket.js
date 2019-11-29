//variable declaration

var scores, activePlayer, dice, gamePlaying, FirstToss, wicket, change, batnow;

//var myMusic = new sound("theme.mp3");
//myMusic.play();
init()

document.querySelector('.btn-toss').addEventListener('click',function(){
    if(FirstToss)
    {
        var toss = Math.floor(Math.random() * 2);

    //2. Display the result
    var tossDOM = document.querySelector('.dice');
    tossDOM.style.display = 'block';
    if(toss === 0)
    {
        tossDOM.src = 'toss-0.jpg';
        activePlayer = 0;
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        //document.querySelector('.dice').style.display = 'none';
        batnow = true;
     }
    else
    {
        tossDOM.src = 'toss-1.jpg';
        activePlayer = 1;
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        batnow = true;
    
    }
    FirstToss = false;

    }
});


document.querySelector('.btn-bat').addEventListener('click', function() {

    if(gamePlaying){
        if(batnow)
        {
            if(scores[0] > scores[1] && wicket[1]===10)
            {
                checkWinner(0);
            }
            else if(scores[0] < scores[1] && wicket[0] === 10)
            {
                checkWinner(1);
            }
            if(wicket[activePlayer] != 10){
                //1. Random Number
                var bat = Math.floor(Math.random() * 7) + 1;
    
                //2. Display the result
                var batDOM = document.querySelector('.dice');
                batDOM.style.display = 'block';
                batDOM.src = bat +'.jpeg';
    
                //3. Update the round score
                if(bat === 7)
                {   
                    wicket[activePlayer] += 1;
                }
                else
                {
                    //Add Score
                    scores[activePlayer] = scores[activePlayer] + bat;
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] + "-" + wicket[activePlayer];
                }   
           
       } 
       else
       {
           
           if(change)
           {
                change = false;
                document.querySelector('#name-' + activePlayer).textContent = "Target";
                //Change Player
                NextPlayer();
           }
       
    
       }
    }

}

        

});

document.querySelector('.btn-new').addEventListener('click', init);

function NextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}



function checkWinner(activePlayer)
{
    document.querySelector('#name-' + activePlayer).textContent = "WINNER";
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    gamePlaying = false;
}



function init(){
    scores = [0,0];
    activePlayer = 0;
    gamePlaying = true;
    FirstToss = true;
    change = true;
    wicket = [0,0];
    dice = 0;
    batnow = false;


    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}
/*
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
*/
