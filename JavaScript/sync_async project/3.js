const hex = '0123456789ABCDEF';

function generateColor(){
    let color="#";
    for (let i =0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId ;
function startChange(){
    function changeColorOnPage(){
        document.body.style.backgroundColor=generateColor();
    }
    if(!intervalId){
        intervalId = setInterval(changeColorOnPage,1000);
    }
};

function stopChange(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChange);
document.querySelector('#stop').addEventListener('click',stopChange);