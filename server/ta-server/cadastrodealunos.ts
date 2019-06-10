import { Aluno } from '../../gui/ta-gui/src/app/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno {
    var result = null;
    
    
      if (this.cpfNaoCadastrado(aluno.cpf) && this.gitNaoCadastrado(aluno.git)) {
        result = new Aluno();
        result.copyFrom(aluno);
        this.alunos.push(result);
      }
    
    return result;
  }

  deletar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) this.alunos.splice(this.alunos.indexOf(result), 1);
    return result;
  }

  gitNaoCadastrado(git: string): boolean{
    return !this.alunos.find(a=> a.git == git);
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.alunos.find(a => a.cpf == cpf);
  }

  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }
}
