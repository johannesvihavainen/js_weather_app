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

        const cityName = document.createElement('p')
        cityName.classList.add('city')
        cityName.textContent = weatherData.name
        data.appendChild(cityName)

        const temp = document.createElement('p')
        temp.classList.add('temp')
        temp.textContent = weatherData.main.temp
        data.appendChild(temp)

        const feelsLike = document.createElement('p')
        feelsLike.classList.add('temp')
        feelsLike.textContent = `feels like ${weatherData.main.feels_like}`
        data.appendChild(feelsLike)

        const minTempContainer = document.createElement('div')
        minTempContainer.classList.add('min-temp-container')
        data.appendChild(minTempContainer)

        const min = document.createElement('p')
        min.classList.add('temp')
        min.textContent = "min"
        minTempContainer.appendChild(min)

        const maxTempContainer = document.createElement('div')
        maxTempContainer.classList.add('max-temp-container')
        data.appendChild(maxTempContainer)

        const max = document.createElement('p')
        max.classList.add('temp')
        max.textContent = "max"
        maxTempContainer.appendChild(max)


        const minTemp = document.createElement('p')
        minTemp.classList.add('temp')
        minTemp.textContent = weatherData.main.temp_min
        minTempContainer.appendChild(minTemp)

        const maxTemp = document.createElement('p')
        maxTemp.classList.add('temp')
        maxTemp.textContent = weatherData.main.temp_max
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