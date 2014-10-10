/*
Tsung-Han Yang
Section AN

This is a javascrpit for the web page fifteen.html, it generates algorithms
for the game fifteen which display in fifteen.html.
*/
window.onload = function(){

(function load(){
    var shuffle = document.getElementById("shufflebutton");
    
    //call function shufPuzzle upon clicking shuffle
    shuffle.onclick = shufPuzzle;
    
    //initialize neccessary var's
    var x = 0;
    var y = 0;
    var blankx = 300;
    var blanky = 300;
    var ready = false;
    var image = "url" + "("+ "\'http://cutestuff.co/wp-content/uploads/2012/08/cat_tongue_stuck_out.jpg\'" + ")"; 
    var puzzle = document.getElementById("puzzlearea");
    writeNum();
    positionRect(image);
    
    //this is a function which generates the puzzle pieces, from 1-15,
    //in order (without image background)
    function writeNum(){
        for(var i =1; i < 16; i++){     

            //creating a div in the middle of the "puzzlearea"
            var div = document.createElement("div");
            div.className = "square";
            div.onmouseover = check;
            div.onmouseout = function(){
                this.style.borderColor = "";
                this.style.color = "";
                this.style.cursor = "default";
                ready = false;
            };
            div.onmousedown = checkMove; 
            
            puzzle.appendChild(div);
            
            //creaing a "p" inside of the div per puzzle
            var para = document.createElement("p");
            
            //writing numbers on the puzzle
            para.appendChild(document.createTextNode(i)); 
            div.appendChild(para);  
        }
    }
    
    //this is a function which put split the image background
    //into 15 different pieces 
    function positionRect(image){
        var eachSq = document.querySelectorAll(".square"); 
        for(var i = 0; i < eachSq.length; i++){
            if(i!=0){
                if(i%4==0){
                    y = y + 100; 
                    x = 0; 
                }else{
                    x = x + 100;
                }
            }
        //creating an specific id for each puzzle piece and
        eachSq[i].id = x + "_" + y; 
        eachSq[i].style.left = x + "px"; 
        eachSq[i].style.top = y + "px";
        eachSq[i].style.backgroundImage = image;
        eachSq[i].style.backgroundPosition = -x + "px" + " " + -y + "px"; 
        }
    }

    //this function checks if a piece of puzzle is movable 
    function checkMove(){
        if(ready){
            move(this);
        }
    }
    
    //this function checks if the specified piece of the puzzle
    //has a blank next to it, aka movable. And change the style of
    //the piece of the puzzle if accordingly
    function check(){
        if((parseInt(this.style.left) == blankx && Math.abs(parseInt(this.style.top) - blanky) == 100) ||
          (parseInt(this.style.top) == blanky && Math.abs(parseInt(this.style.left) - blankx) == 100)){
            ready = true;
            this.style.borderColor = "red";
            this.style.color = "red";
            this.style.cursor = "pointer";
        }
    }
    
    //this function swaps the specified puzzle with a blank puzzle
    function move(current){
        var tempx = blankx;
        var tempy = blanky;
        blankx = parseInt(current.style.left);
        blanky = parseInt(current.style.top);
        current.style.left = tempx + "px";
        current.style.top = tempy + "px";
        current.id = tempx + "_" + tempy; 
    }
    
    //this function operates randomized shuffle algorithm for the purpose of the game
    function shufPuzzle(){
        var tempx = blankx;
        for(var i = 0; i< 1001; i++){
            //creats an empty array
            var neighbor = [];
            if(blankx != 0){ //if theres a puzzle piece left of the blank
                neighbor.push((blankx-100)+"_"+blanky);
            }
            if(blankx != 300){ //if theres a puzzle piece right of the blank
                neighbor.push((blankx+100)+"_"+blanky);
            }
            if(blanky != 0){ //if there's a puzzle above the blank
                neighbor.push(blankx+"_"+(blanky-100));
            }
            if(blanky != 300){ //if there's a puzzle below the blank
                neighbor.push(blankx+"_"+(blanky+100));
            }
            var random = parseInt(Math.random()* (neighbor.length));
            move(document.getElementById(neighbor[random]));
        }
    }
})();
};