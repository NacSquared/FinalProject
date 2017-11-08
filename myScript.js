var image = document.getElementById("redStopLight");

var greenCar = document.getElementById("greenCar");

var redCar = document.getElementById("redCar");

var number = Math.random();

number = number * 100;

function startRace()
{
    image.src = "Images/greenStopLight.png";

    for (var i = 0; i < 100; i++)
    {
        greenCar.style.marginLeft += number + 'px';
        
        redCar.style.marginLeft += number + 'px';
    }
}