import { Component } from '@angular/core';
import { GetapiService } from '../api-futbol/getapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  leagues: any[] | undefined;

  constructor(private footballService: GetapiService) {}

  ngOnInit() {
    this.getCountries();
  }

  public getCountries() {
    this.footballService.get('http://localhost:3000/getCountries')
      .subscribe({
        next: (data: any) => {
          this.leagues = data.response
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
