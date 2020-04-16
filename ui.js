class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feeksLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        console.log(weather);
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${Math.round(weather.main.temp - 273.15)}°`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
        this.feeksLike.textContent = `Feels like: ${Math.round(weather.main.feels_like - 273.15)}°`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`;
    }
}