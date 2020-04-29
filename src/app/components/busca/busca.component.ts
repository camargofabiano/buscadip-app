import { Component, OnInit } from '@angular/core';
import { DiplomaService } from 'src/app/services/diploma.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  constructor(private diplomaService: DiplomaService) { }

  ngOnInit(): void {
    this.diplomaService.getDiplomaById('46456fsdf')
    .subscribe(x => console.log(x));
  }

}
