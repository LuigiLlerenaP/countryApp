import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/res-country.interfaces';

export class CountryMapper {
  //static RestCountry => country
  static mapRestCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flagPng: restCountry.flags.png,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Name',
      capital: Array.isArray(restCountry.capital)
        ? restCountry.capital.join(', ')
        : '',
      population: restCountry.population,
    };
  }
  // static RestCountry[] => country []
  static mapRestCountries(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(CountryMapper.mapRestCountry);
  }
}
