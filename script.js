let hours = 0;
let minutes = 0;
let seconds = 0;

let time = document.querySelector("#display");
let start = document.querySelector("#btn1");
let stop = document.querySelector("#btn2");
let reset = document.querySelector("#btn3");
let counts = null;

start.addEventListener("click",function()
{
     counts = setInterval(displayTime,1000);
});

stop.addEventListener("click",function()
{
    clearInterval(counts);
});

reset.addEventListener("click",function()
{
    clearInterval(counts); 
    time.innerHTML = `00 : 00 : 00`;
    seconds = 0;
    minutes = 0;
    hours = 0;
})

function displayTime()
{
    seconds = seconds + 1;
    if(seconds == 60)
    {
        seconds = 0;
        minutes++;
        if(minutes == 60)
        {
            minutes=0;
            hours++;
        }
    }
    h= hours<10 ? "0" + hours : hours;
    m= minutes<10 ? "0" + minutes : minutes;
    s= seconds<10 ? "0" +seconds : seconds;
    time.innerHTML = `${h} : ${m} : ${s}`;
}