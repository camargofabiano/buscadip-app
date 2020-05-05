import { Component, OnInit, Input } from '@angular/core';
import { Diploma } from 'src/app/models/diploma.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiplomaService } from 'src/app/services/diploma.service';
import { Helper } from 'src/app/utils/helper.util';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.css']
})
export class DiplomaComponent implements OnInit {

  @Input() diploma: Diploma;
  diplomaForm: FormGroup;
  url: string;
  hora = Date.now();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.diplomaForm = this.fb.group({
      diplomaId: [this.diploma.diplomaId],
      nome: [this.diploma.nome],
      cpf: [this.diploma.cpf],
      codEmecCurso: [this.diploma.codEmecCurso],
      codEmecIes: [this.diploma.codEmecIes],
      codExp: [this.diploma.codExp],
      codReg: [this.diploma.codReg],
      dataIngresso: [this.diploma.dataIngresso],
      dataConclusao: [this.diploma.dataConclusao],
      dataExpDiploma: [this.diploma.dataExpDiploma],
      dataRegDiploma: [this.diploma.dataRegDiploma],
      dataPubDiploma: [this.diploma.dataPubDiploma]
    });
    this.url = Helper.url + this.diploma.diplomaId;
  }

}
