import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../api-futbol/getapi.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-live-matches',
  templateUrl: './live-matches.page.html',
  styleUrls: ['./live-matches.page.scss'],
})
export class LiveMatchesPage implements OnInit {

  matches: any[] | undefined;

  constructor(private footballService: GetapiService) { }

  ngOnInit() {
    this.getLiveMatches()
  }
  public getLiveMatches() {
    this.footballService.get('http://localhost:3000/getLiveMatches')
      .subscribe({
        next: (data: any) => {
          this.matches = data.response;
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
