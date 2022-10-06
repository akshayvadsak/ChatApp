import { string } from "prop-types";
import { Services } from "./Services";
export class Country {
  Name: string = "";
  Code: string = "";
}

export class Geography {
  static async GetCountryList(): Promise<Country[]> {
    let countries: Country[] = [];
    let err = null;
    let url =
      "https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json";
    await Services.Fetch<Country[]>(url)
      .then((result) => {
        countries = result;
      })
      .catch((error) => {
        err = error;
      });
    if (err) {
      return Promise.reject(err);
    } else {
      return Promise.resolve(countries);
    }
  }

  static async GetCountryListNamesOnly(): Promise<string[]> {
    let countries: Country[] = [];
    let err = null;

    await this.GetCountryList()
      .then((result) => {
        countries = result;
      })
      .catch((error) => {
        err = error;
      });

    let stringList: string[] = [];
    countries.forEach((value) => {
      stringList.push(value.Name);
    });

    if (err) {
      return Promise.reject(err);
    } else {
      return Promise.resolve(stringList);
    }
  }
}
