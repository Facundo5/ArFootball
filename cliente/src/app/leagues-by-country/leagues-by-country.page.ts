import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetapiService } from '../api-futbol/getapi.service';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leagues-by-country',
  templateUrl: './leagues-by-country.page.html',
  styleUrls: ['./leagues-by-country.page.scss'],
})
export class LeaguesByCountryPage implements OnInit {

  code: any;
  leagues: any;

  constructor(private activatedRoute: ActivatedRoute, private footballService: GetapiService) { }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get("code")
    this.getLeaguesByCountry()
  }
  public getLeaguesByCountry() {
    this.footballService.get(`http://localhost:3000/leagues/${this.code}`)
      .subscribe({
        next: (data: any) => {
          this.leagues = data.response;
      }, error: (err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'ha ocurrido un error',
          text: 'El servidor no responde, vuelve a intentarlo nuevamente mas tarde'
        })
      },
        complete: () => console.log('completado')
      })
    }
}
