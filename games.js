//defining constants
let music = new Audio('ting.mp3');
let turn = 'X';
let isgameover = false;

//function to change the turn
const changeTurn = () => {
    return turn == 'X' ? 'O' : 'X';
}

//function to write X and O inside the boxes on clicking
let maingame = document.getElementsByClassName('box');
Array.from(maingame).forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerHTML == "") {
            element.innerHTML = turn;
            turn = changeTurn();
            music.play();
            checkwin();
        }
        if (!isgameover) {
            document.getElementById('span1').innerHTML = turn;
        }
    });
});

//function to check the winning condition
const checkwin = () => {
    let win = [
        [0,1,2,0,-70,0],
        [3,4,5,0,0,0],
        [6,7,8,0,70,0],
        [0,3,6,-70,0,90],
        [1,4,7,0,0,90],
        [2,5,8,70,0,90],
        [0,4,8,0,0,45],
        [2,4,6,0,0,-45],
    ];
    win.forEach(e=>{
        if((maingame[e[0]].innerHTML==maingame[e[1]].innerHTML)&&(maingame[e[1]].innerHTML==maingame[e[2]].innerHTML)&&(maingame[e[0]].innerHTML!="")){
            document.getElementById('span2').innerHTML=maingame[e[0]].innerHTML+" Won";
            isgameover=true;
            document.getElementById('image').style.display='block';
            document.getElementsByClassName('gameinfo1')[0].style.display='none';
            document.getElementById('line').style.display='block';
            document.getElementById('line').style.transform=`translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
        }
    });
}

//reseting the game by event listening
let reset=document.getElementById('reset');
reset.addEventListener('click', ()=>{
    Array.from(maingame).forEach(element=>{
        element.innerHTML="";
    })
    document.getElementsByClassName('gameinfo1')[0].style.display='inline-block';
    document.getElementById('image').style.display='none';
    isgameover=false;
    document.getElementById('span2').innerHTML=""
    turn='X';
    document.getElementById('span1').innerHTML=turn;
    document.getElementById('line').style.display='none';
});







