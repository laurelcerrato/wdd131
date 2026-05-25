document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
let windspeed = 11;
let temperature = 10;


document.getElementById("windspeed").innerHTML = `<b>Wind Speed:</b> ${windspeed} mph`;
document.getElementById("temp").innerHTML = `<b>Temperature:</b> ${temperature}°C`;

function calculateWindChill(temp, speed) {
    let calc = (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
    return calc;
}

let windChill = 0;

if (temperature <= 10 && windspeed > 4.8) {
    windChill = calculateWindChill(temperature, windspeed);
}



document.getElementById("wcfactor").innerHTML = `<b>Wind Chill:</b> ${windChill}°C`;