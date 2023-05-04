import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../api-futbol/getapi.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-live-bets',
  templateUrl: './live-bets.page.html',
  styleUrls: ['./live-bets.page.scss'],
})
export class LiveBetsPage implements OnInit {
  code: any;
  liveBets: any;
  odds: any;

  constructor(private footballService: GetapiService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get("code")
    this.getLiveBets()
  }

  public getLiveBets() {
    this.footballService.get(`http://localhost:3000/betsByMatch/${this.code}`)
      .subscribe({
        next: (data: any) => {
          console.log(data)
          this.odds = data.response[0].odds;
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
