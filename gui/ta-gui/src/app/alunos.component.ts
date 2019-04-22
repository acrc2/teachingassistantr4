import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = new Aluno();
   alunos: Aluno[];
   duplicado: boolean = false;

   criarAluno(a: Aluno): void {
   this.alunoService.criar(a)
        .then(ab => {
           if (ab) {
               this.alunos.push(ab);
               this.aluno = new Aluno();
           } else {
              this.duplicado = true;
           }
        })
        .catch(erro => alert(erro));
   }

   deletarAluno(a: Aluno): void {
      this.alunoService.deletar(a)
      .then(ab => {
         if (ab) {
            var result: Aluno = this.alunos.find(k => k.cpf == a.cpf);
            this.alunos.splice(this.alunos.indexOf(result), 1);
         }
      })
      .catch(erro => alert(erro));
    }

   onMove(): void {
      this.duplicado = false;
   }

   ngOnInit(): void {
     this.alunoService.getAlunos()
         .then(as => this.alunos = as)
         .catch(erro => alert(erro));
   }

}
