    function validaCPF(cpf){
        //Extrai apenas os números e coloca-os num array
        cpfArray = Array.from(cpf.replace(/(\.|\-)/g,""));
        
        //Checa se CPF < 11:
        if(cpfArray < 11){
            return false;
        }
        
        //Checando se todos os digitos são iguais
        else if(checaTdsDigitosIguais(cpfArray)){
            return false;
        } 
        
        //Validação dos dígitos verificadores
        else {
            if(validaDigito(1, cpfArray) && validaDigito(2, cpfArray)){
                return true;
            }
            else{
                return false;
            }
        }
    }
    
    //Retorna true se todos dígitos são iguais, senão false:
    function checaTdsDigitosIguais(cpfArray){
        for(var i = 1; i < 11; i++){
            if(cpfArray[i] != cpfArray[i-1]){
                return false;
            }
        }
        return true;
    }

    /*
    ARGUMENTOS:
    digito = indica o digito verificador a ser testado, só deve ser 1(primeiro DV) ou 2(segundo DV);
    cpfArray = o array criado a partir do cpf

    VARIÁVEIS:
    indiceDV = indice do valor da variável digito no cpfArray;
    qtdDigitos = se 9, os 9 primeiros digitos serão multiplicados por n.
               - importante lembrar que a contagem dos digitos começa em 0, por causa do cpfArray, 
                 então se qtdDigitos = 9, conta-se do índice 0 ate 8, excluindo-se 9
    n =  numero para fazer a multiplicação. é sempre decrementado 1 a cada nova iteração. 
         EX: se n = 10, então será 10, 9, 8, 7... 
    resto = resto da divisão por 11
    */
    function validaDigitoVerificador(digito, cpfArray){
        var soma = 0;
        var indiceDV, qtdDigitos, n, resto;
        
        if(digito == 1){
            indiceDV = 9;
            qtdDigitos = 9;
            n = 10
        } 
        else {
            indiceDV = 10;
            qtdDigitos = 10;
            n = 11;
        }
        for(var i = 0; i < qtdDigitos; i++){
            soma += parseInt(cpfArray[i]) * n;
            n--;
        }
        resto = (soma * 10) % 11;
        if(resto == 10){
            resto = 0;
        }
        if(resto == cpfArray[indiceDV]){
            return true;
        }
        else{
            return false;
        }
    }
