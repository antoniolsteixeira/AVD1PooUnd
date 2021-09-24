class Funcionarios {
  constructor(
    private _nome: string,
    private _salarioHora: number,
    private _diasTrabalhados: number,
    private _totalFaltasAno: number
  ) {}

  get nome() {
    return this._nome;
  }

  get salarioHora() {
    return this._salarioHora;
  }

  get totalFaltasAno() {
    return this._totalFaltasAno;
  }

  get diasTrabalhados() {
    return this._diasTrabalhados;
  }

  set nome(nome: string) {
    if (nome === '') {
      throw new Error('Nome invalido');
    }
    this._nome = nome;
  }

  set salarioHora(salarioHora: number) {
    if (salarioHora <= 0) {
      throw new Error('Salario hora invalido');
    }
    this._salarioHora = salarioHora;
  }

  set totalFaltasAno(totalFaltasAno: number) {
    if (totalFaltasAno <= 0) {
      throw new Error('Total de faltas invalido');
    }
    this._totalFaltasAno = totalFaltasAno;
  }

  set diasTrabalhados(diasTrabalhados: number) {
    if (diasTrabalhados <= 0) {
      throw new Error('Dias de trabalho invalidos');
    }
    this._diasTrabalhados = diasTrabalhados;
  }

  public CalculoSalarioBruto() {
    return this._salarioHora * this._diasTrabalhados;
  }

  public CalculoPLR() {
    if (this.totalFaltasAno === 0) {
      return this.CalculoSalarioBruto();
    } else if (this.totalFaltasAno === 1) {
      return this.CalculoSalarioBruto() * 0.94;
    } else if (this.totalFaltasAno === 2) {
      return this.CalculoSalarioBruto() * 0.92;
    } else if (this.totalFaltasAno === 3) {
      return this.CalculoSalarioBruto() * 0.9;
    } else if (this.totalFaltasAno === 4) {
      return this.CalculoSalarioBruto() * 0.88;
    } else {
      return 0;
    }
  }

  public CalculoDesconto() {
    return this.CalculoSalarioBruto() * 0.05;
  }

  public CalculoSalarioLiquido() {
    return (
      this.CalculoSalarioBruto() - this.CalculoDesconto() + this.CalculoPLR()
    );
  }
}

const funcionario = new Funcionarios('Antonio', 150, 30, 1);
console.log(`O funcionário de nome ${
  funcionario.nome
} tem o salário bruto de ${funcionario.CalculoSalarioBruto()}, teve ${
  funcionario.totalFaltasAno
} ${funcionario.totalFaltasAno === 1 ? 'falta' : 'faltas'} e sua PLR foi
de ${funcionario.CalculoPLR()}`);

console.log(
  `O funcionário de nome ${
    funcionario.nome
  } tem o salário bruto de ${funcionario.CalculoSalarioBruto()}, o desconto de ${
    funcionario.CalculoDesconto()
  }, a PLR de ${funcionario.CalculoPLR()} e o salário líquido de ${
    funcionario.CalculoSalarioLiquido()
  }`
);
