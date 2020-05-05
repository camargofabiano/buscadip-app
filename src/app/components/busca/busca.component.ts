import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DiplomaService } from 'src/app/services/diploma.service';
import { Diploma } from 'src/app/models/diploma.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  diploma: Diploma;
  searchSuccess = false;
  busca = '';
  mensagem = '';

  @ViewChild('search') searchElement: ElementRef;

  constructor(
    private snackBar: MatSnackBar,
    private diplomaService: DiplomaService) { }

  ngOnInit(): void {
  }

  searchDiploma(id: string) {
    if (id) {

      this.diplomaService.getDiplomaById(id)
        .subscribe(x => {
          if (x) {
            this.diploma = x;
            this.searchSuccess = true;
            this.mensagem = '';
            this.busca = '';
          } else {
            this.searchSuccess = false;
            this.mensagem = 'Diploma não encontrado em nossa base.';
          }
        }, e => console.log(e));
    }
  }

  buscaOutro() {
    this.searchSuccess = false;
    this.diploma = null;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
