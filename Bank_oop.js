class Conta {
  #saldo;
  constructor(){
    this.#saldo = 0;
  }
  depositar(deposito){
    if(deposito > 0){
    this.#saldo += deposito;
    console.log(`deposito concluído,
você depositou: ${deposito} Reais\n`)
    }
    else{
      console.log(`
*********************"******
depósito negado
****************************
você tentou depositar uma quantia menor que 0 Reais.
****************************\n`)
    }
  }
  sacar(saque){
    if(this.#saldo >= saque && saque > 0){
    this.#saldo -= saque;
    
  console.log(`você sacou: ${saque} Reais,
seu saldo ficou: ${this.#saldo} Reais.\n`)
  
    }else{
      console.log(`**********************
saque negado;
**********************
seu saldo é: ${this.#saldo} Reais,
saques permitidos de até o máximo de: ${this.#saldo} Reais.
você tentou sacar: ${saque} Reais.
**********************\n`)
    }
  }
  valor(){
    console.log(`seu saldo atualizado é: ${this.#saldo} Reais.\n`)
  }
}

/*testes abaixo até a última linha de codigo*/
const conta = new Conta();

conta.depositar(60);

conta.sacar(80);

