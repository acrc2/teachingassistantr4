"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var aluno_1 = require("./aluno");
var AlunosComponent = /** @class */ (function () {
    function AlunosComponent(alunoService) {
        this.alunoService = alunoService;
        this.aluno = new aluno_1.Aluno();
        this.duplicado = false;
    }
    AlunosComponent.prototype.criarAluno = function (a) {
        var _this = this;
        console.log("im in it");
        this.alunoService.criar(a)
            .then(function (ab) {
            if (ab) {
                _this.alunos.push(ab);
                _this.aluno = new aluno_1.Aluno();
            }
            else {
                _this.duplicado = true;
            }
        })["catch"](function (erro) { return alert(erro); });
    };
    AlunosComponent.prototype.deletarAluno = function (a) {
        var _this = this;
        this.alunoService.deletar(a)
            .then(function (ab) {
            if (ab) {
                var cpf = a.cpf;
                for (var i = 0; i < _this.alunos.length; i++) {
                    if (_this.alunos[i].cpf == cpf) {
                        _this.alunos.splice(i, 1);
                    }
                }
            }
            else {
                //this.duplicado = true;
            }
        })["catch"](function (erro) { return alert(erro); });
    };
    AlunosComponent.prototype.onMove = function () {
        this.duplicado = false;
    };
    AlunosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alunoService.getAlunos()
            .then(function (as) { return _this.alunos = as; })["catch"](function (erro) { return alert(erro); });
    };
    AlunosComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './alunos.component.html',
            styleUrls: ['./alunos.component.css']
        })
    ], AlunosComponent);
    return AlunosComponent;
}());
exports.AlunosComponent = AlunosComponent;
