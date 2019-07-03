export default class SWApiService {
    _apiBase = 'https://swapi.co/api';
    _imapgeBase = 'https://starwars-visualguide.com/assets/img';

    getSWData = async (url) => {
        const resp = await fetch(this._apiBase + url);
        if (!resp.ok) throw new Error(`Bad request ${url}, receiver ${resp.status}`);
        return await resp.json();
    };

    getAllPeople = async () => {
        const resp = await this.getSWData('/people');
        return resp.results.map(SWApiService._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getSWData('/people/' + id);
        return SWApiService._transformPerson(person);
    };
    getPersonImage = ({id}) => `${this._imapgeBase}/characters/${id}.jpg`;


    getAllPlanets = async () => {
        const resp = await this.getSWData('/planets');
        return resp.results.map(SWApiService._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getSWData('/planets/' + id);
        return SWApiService._transformPlanet(planet);
    };
    getPlanetImage = ({id}) => `${this._imapgeBase}/planets/${id}.jpg`;
    getAllStarShips = async () => {
        const resp = await this.getSWData('/starships');
        return resp.results.map(SWApiService._transformStarship);

    };

    getStarShip = async (id) => {
        const starShip = this.getSWData('/starships/' + id);
        return SWApiService._transformStarship(starShip);
    };
    getStarShipImage = ({id}) => `${this._imapgeBase}/starships/${id}.jpg`;

    static _extractId(item) {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    static _transformPlanet(planet) {
        return {
            id: SWApiService._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    static _transformStarship(starship) {
        return {
            id: SWApiService._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    static _transformPerson = (person) => {
        return {
            id: SWApiService._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}
