const TemperatureFrom = document.querySelector('#TemperatureFrom')
const TemperatureFromInput = document.querySelector("#TemperatureFromInput")
const result = document.querySelector(".result")
const convert = document.querySelector('.convert')

convert.addEventListener('click', () => {

    switch (TemperatureFrom.value) {
        case "Fahrenheit":
            const FahrenheitToCelsius = ((TemperatureFromInput.value - 32) * 5 / 9).toFixed(2)
           const FahrenheitToKelvin = ((parseInt(TemperatureFromInput.value) + 459.67) * 5 / 9).toFixed(2)
            result.innerHTML = `<span>${TemperatureFromInput.value} °F = ${FahrenheitToCelsius} °C </span> 
            <span>${TemperatureFromInput.value} °F = ${FahrenheitToKelvin} °K </span>
            `
            break;
        case "Celsius":
             const CelsiusToKelvin = parseInt(TemperatureFromInput.value) + 273.15
            const CelsiusToFahrenheit = (TemperatureFromInput.value * 9 / 5 + 32).toFixed(2)
            result.innerHTML = `<span>${TemperatureFromInput.value} °C = ${CelsiusToKelvin} °K </span> 
            <span>${TemperatureFromInput.value} °C = ${CelsiusToFahrenheit} °F </span>
            `
            break;
        case "Kelvin":
            const KelvinToCelsius = (TemperatureFromInput.value - 273.15).toFixed(2)
            const KelvinToFahrenheit = (TemperatureFromInput.value * 9 / 5 - 459.67).toFixed(2)
            result.innerHTML = `<span>${TemperatureFromInput.value} °K = ${KelvinToCelsius} °C </span> 
            <span>${TemperatureFromInput.value} °K = ${KelvinToFahrenheit} °F </span>
            `
    }
})
