class Produto {
  constructor(
    private _produto: string,
    private _preco: number,
    private _quantidade: number
  ) {}

  get produto() {
    return this._produto;
  }

  get preco() {
    return this._preco;
  }

  get quantidade() {
    return this._quantidade;
  }

  set produto(produto: string) {
    if (produto === '') {
      throw new Error('Produto invalido');
    }
    this._produto = produto;
  }

  set preco(preco: number) {
    if (preco <= 0) {
      throw new Error('Preço invalido');
    }
    this._preco = preco;
  }

  set quantidade(quantidade: number) {
    if (quantidade <= 0) {
      throw new Error('Quantidade invalida');
    }
    this._quantidade = quantidade;
  }

  public CalculoDesconto() {
    if (this._quantidade <= 10) {
      return `O produto ${this._produto} de preço ${
        this._preco
      }, quantidade comprada
      de ${this._quantidade} não teve desconto e o valor pago foi de ${
        this._quantidade * this._preco
      } `;
    } else if (this._quantidade >= 11 && this._quantidade <= 20) {
      return `O produto ${this._produto} de preço ${
        this._preco
      }, quantidade comprada
      de ${this._quantidade} teve desconto de ${
        this._quantidade * this._preco * 0.1
      } o valor pago foi de ${
        this._quantidade * this._preco - this._quantidade * this._preco * 0.1
      } `;
    } else if (this._quantidade >= 21 && this._quantidade <= 50) {
      return `O produto ${this._produto} de preço ${
        this._preco
      }, quantidade comprada de ${this._quantidade} teve desconto de ${
        this._quantidade * this._preco * 0.2
      } o valor pago foi de ${
        this._quantidade * this._preco - this._quantidade * this._preco * 0.2
      } `;
    } else {
      return `O produto ${this._produto} de preço ${
        this._preco
      }, quantidade comprada
         de ${this._quantidade} teve desconto de ${
        this._quantidade * this._preco * 0.25
      } o valor pago foi de ${
        this._quantidade * this._preco - this._quantidade * this._preco * 0.25
      } `;
    }
  }
}

const produto = new Produto('Edgar', 15, 28);
console.log(produto);
console.log(produto.CalculoDesconto());

try {
  produto.preco = 0;
  console.log(produto);
} catch (error) {
  console.log(error.message);
}
