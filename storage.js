class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Cali';
        this.defatulState = 'CO;'
    }

    getLocationData() {

        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
            this.defatulState = this.defatulState;
        } else {
            this.city = localStorage.getItem('city');
            this.state = localStorage.getItem('state');
        }

        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}