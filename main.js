const userInput = document.getElementById('userInput')
const searchBtn = document.getElementById('searchBtn')
const data = document.querySelector('.data')

async function getData() {
    let city = userInput.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f41b23c3dfe1b23b8e6b43aa7aae62ff&units=metric`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const weatherData = await response.json()
        console.log(weatherData);

        const cityNameAndMainTemp = document.createElement('p')
        cityNameAndMainTemp.classList.add('cityNameAndMainTemp')
        cityNameAndMainTemp.textContent = `${weatherData.name} | ${weatherData.main.temp}°C`
        data.appendChild(cityNameAndMainTemp)

        const weatherDescriptionContainer = document.createElement('div')
        weatherDescriptionContainer.classList.add('weatherDescriptionContainer')
        data.appendChild(weatherDescriptionContainer)

        const iconCode = weatherData.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
        const iconImg = document.createElement('img')
        iconImg.classList.add('icon')
        iconImg.src = iconUrl
        iconImg.alt = weatherData.weather[0].description
        weatherDescriptionContainer.appendChild(iconImg)

        const weatherDescription = document.createElement('p')
        weatherDescription.classList.add('weather-description')
        weatherDescription.textContent = weatherData.weather[0].description
        weatherDescriptionContainer.appendChild(weatherDescription)


        const otherTempData = document.createElement('div')
        otherTempData.classList.add('otherTempData')
        data.appendChild(otherTempData)

        const feelsLike = document.createElement('p')
        feelsLike.classList.add('feels-like')
        feelsLike.textContent = `feels like ${weatherData.main.feels_like}°C`
        otherTempData.appendChild(feelsLike)

        const minTempContainer = document.createElement('div')
        minTempContainer.classList.add('min-temp-container')
        otherTempData.appendChild(minTempContainer)

        const maxTempContainer = document.createElement('div')
        maxTempContainer.classList.add('max-temp-container')
        otherTempData.appendChild(maxTempContainer)

        const max = document.createElement('p')
        max.classList.add('temp')
        max.textContent = "max"
        maxTempContainer.appendChild(max)

        const min = document.createElement('p')
        min.classList.add('temp')
        min.textContent = "min"
        minTempContainer.appendChild(min)


        const minTemp = document.createElement('p')
        minTemp.classList.add('temp')
        minTemp.textContent = `${weatherData.main.temp_min}°C`
        minTempContainer.appendChild(minTemp)

        const maxTemp = document.createElement('p')
        maxTemp.classList.add('temp')
        maxTemp.textContent = `${weatherData.main.temp_max}°C`
        maxTempContainer.appendChild(maxTemp)



    } catch (error) {
        console.error(error.message)
    }

}

searchBtn.addEventListener('click', () => {
    if (userInput.value === '') {
        alert('please enter a location.')
    } else {
        getData()
    }
})