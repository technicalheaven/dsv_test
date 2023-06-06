import { BASE_URL, ROUTE } from "./config.js";

export default class StarwarApi{
    async getPeoples(){
       let response = await fetch(BASE_URL+ROUTE.PEOPLES);
       response = await response.json();
       return response;
    }

    async getFilms(){
       let response = await fetch(BASE_URL+ROUTE.FILMS);
       response = await response.json();
       return response;
    }

    async getSpecies(){
       let response = await fetch(BASE_URL+ROUTE.SPECIES);
       response = await response.json();
       return response;
    }

}