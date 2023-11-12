let nivel = ""                                    //Declaração de Variáveis
let vitorias = 52
let derrotas = 1

let saldoVitorias = ranking(vitorias, derrotas)   //Chamada de Função

function ranking(vitorias, derrotas){             //Declaração de Função
	saldoRankeadas = vitorias - derrotas
 	return saldoRankeadas
}

while (saldoVitorias != 0){                       //Laço de Repetição
 
  if (saldoVitorias <= 10 ){                      //Estrutura de Decisão
		nivel = "Ferro"
  }
	else if (saldoVitorias >= 11 && vitorias <= 20){ 
		nivel = "Bronze"
  }
	else if (saldoVitorias >= 21 && vitorias <= 50){ 
		nivel = "Prata"
  }        
	else if (saldoVitorias >= 51 && vitorias <= 80){
		nivel = "Ouro"
  }
	else if (saldoVitorias >= 81 && vitorias <= 90){ 
		nivel = "Diamante"
  }
	else if (saldoVitorias >= 91 && vitorias <= 100){
		nivel = "Lendário"
        
  } else if (saldoVitorias >= 101) {
		nivel = "Imortal"
  }
    break
}

console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de " + nivel) //Saída
