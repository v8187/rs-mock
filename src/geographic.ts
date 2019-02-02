import { randomItem } from '@v8187/rs-utils';

import countries from './jsons/countries.data';
import states from './jsons/states.data';
import cities from './jsons/cities.data';

export const country = (): string => {
    return randomItem(countries).name;
};

export const state = (options): string => {
    const countries = options.countries.map(country => country.code3 || country.id);
    const filtered = countries.length ? states.filter(state => countries.indexOf(state.country) !== -1) : states;
    return randomItem(filtered).name;
};

export const city = (options): string => {
    const countries = options.countries.map(country => country.code3 || country.id);
    const states = options.states.map(state => state.id);
    const filtered = (countries.length || states.length) ?
        cities.filter(city => {
            return countries.indexOf(city.country) !== -1 && states.indexOf(city.state) !== -1;
        }) : cities;

    return randomItem(filtered).name;
};

export const latLong = (options): string => {
    const countries = options.countries.map(country => country.code3 || country.id);
    const filtered = countries.length ? cities.filter(city => countries.indexOf(city.country) !== -1) : cities;
    const random = randomItem(filtered)
    return `${random.latitude}, ${random.longitude}`;
};