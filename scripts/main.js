window.onload = function(){
    document.getElementById('output').style.visibility = 'hidden';
    celsiusOnClick();
}

function farenheitOnClick() {
    console.log('Farenheit pressed.');
    document.getElementsByName('input')[0].placeholder = "Input a temperature in °F..";
    document.getElementById('celsiusInput').addEventListener('input', function (event) {
        document.getElementById('output').style.visibility = 'visible';

        let farenheit = parseInt(event.target.value);
        document.getElementById('farenheitOutput').innerHTML = "<h4>Farenheit: </h4>" + farenheit;
        document.getElementById('kelvinOutput').innerHTML = "<h4>Kelvin: </h4>" + ((farenheit + 459.67) * 5/9).toFixed(2);
        document.getElementById('celsiusOutput').innerHTML = "<h4>Celsius: </h4>" + ((farenheit -32) / 1.8).toFixed(2);

        if (isNaN(farenheit)) {
            document.getElementById('output').style.visibility = 'hidden';
        }
    });
};

function kelvinOnClick() {
    console.log('Kelvin pressed.');
    document.getElementsByName('input')[0].placeholder = "Input a temperature in K..";
    document.getElementById('celsiusInput').addEventListener('input', function (event) {
        document.getElementById('output').style.visibility = 'visible';

        let kelvin = parseInt(event.target.value);
        document.getElementById('farenheitOutput').innerHTML = "<h4>Farenheit: </h4>" + ((kelvin * 9/5) + 459.67).toFixed(2);
        document.getElementById('kelvinOutput').innerHTML = "<h4>Kelvin: </h4>" + kelvin;
        document.getElementById('celsiusOutput').innerHTML = "<h4>Celsius: </h4>" + (kelvin - 273.15).toFixed(2);

        if (isNaN(kelvin)) {
            document.getElementById('output').style.visibility = 'hidden';
        }
    });
};

function celsiusOnClick() {
    console.log('Celsius pressed.');
    document.getElementsByName('input')[0].placeholder = "Input a temperature in °C..";
    document.getElementById('celsiusInput').addEventListener('input', function (event) {
        document.getElementById('output').style.visibility = 'visible';

        let celsius = parseInt(event.target.value);
        document.getElementById('farenheitOutput').innerHTML = "<h4>Farenheit: </h4>" + (celsius * 1.8 + 32).toFixed(2);
        document.getElementById('kelvinOutput').innerHTML = "<h4>Kelvin: </h4>" + (celsius + 273.15).toFixed(2);
        document.getElementById('celsiusOutput').innerHTML = "<h4>Celsius: </h4>" + celsius;

        if (isNaN(celsius)) {
            document.getElementById('output').style.visibility = 'hidden';
        }
    });
};