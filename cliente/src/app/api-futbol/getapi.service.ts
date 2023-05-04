import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  private API_KEY = '770194e62c70e049c326a8cc2ad9c89f';

  constructor(private http: HttpClient) { }

  getTopScorers() {
    const url = `https://v3.football.api-sports.io/players/topscorers?season=2018&league=61`;


    return axios.get(url, {
      headers: {
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': 'https://v3.football.api-sports.io'

      }
    });
  }
  public get(url: string  | any){
    return this.http.get(url);
  }
}