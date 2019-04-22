"use strict";
exports.__esModule = true;
var aluno_1 = require("../../gui/ta-gui/src/app/aluno");
var CadastroDeAlunos = /** @class */ (function () {
    function CadastroDeAlunos() {
        this.alunos = [];
    }
    CadastroDeAlunos.prototype.criar = function (aluno) {
        var result = null;
        if (this.cpfNaoCadastrado(aluno.cpf) && this.gitNaoCadastrado(aluno.git)) {
            result = new aluno_1.Aluno();
            result.copyFrom(aluno);
            this.alunos.push(result);
        }
        return result;
    };
    CadastroDeAlunos.prototype.deletar = function (aluno) {
        var result = this.alunos.find(function (a) { return a.cpf == aluno.cpf; });
        if (result)
            this.alunos.splice(this.alunos.indexOf(result), 1);
        return result;
    };
    CadastroDeAlunos.prototype.gitNaoCadastrado = function (git) {
        return !this.alunos.find(function (a) { return a.git == git; });
    };
    CadastroDeAlunos.prototype.cpfNaoCadastrado = function (cpf) {
        return !this.alunos.find(function (a) { return a.cpf == cpf; });
    };
    CadastroDeAlunos.prototype.atualizar = function (aluno) {
        var result = this.alunos.find(function (a) { return a.cpf == aluno.cpf; });
        if (result)
            result.copyFrom(aluno);
        return result;
    };
    CadastroDeAlunos.prototype.getAlunos = function () {
        return this.alunos;
    };
    return CadastroDeAlunos;
}());
exports.CadastroDeAlunos = CadastroDeAlunos;
