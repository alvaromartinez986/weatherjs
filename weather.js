class Weather {

    constructor(city, state) {
        this.apiKey = 'a142d8d615ea501a31a9cd9355af33c9';
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}