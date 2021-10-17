///////////////////////////////////////////////////////
//    Inicio da Programação através do JavaScript    //
//          Sistema de Cadastro de Alunos            //
//            Aula On line - 13.10.2021              //
// Instrutores: Thiago Nascimento && Ordilei Sabella //
///////////////////////////////////////////////////////


//////////////////// R E Q U I S I T O S ///////////////////////////
//                                                                //
// 1. Saber o número de alunos totais;                            //
//                                                                //
// 2. Identificar se for, neutro, Par ou Ímpar o cadastro;        //
//                                                                //
// 3. Relacionar o campo da array, alunos e posição.              //
//                                                                //
////////////////////////////////////////////////////////////////////


let numeroAlunos = 10

let listaAlunos = ["Pierre", "Frederico", "Paulo", "Ricardo", "Amaro", "Erick", "Bernardo", "Antonio", "Artur", "Francisco"];


for (let contador = 0; contador < listaAlunos.length; contador++) {
    

    if (contador == 0) {
        console.log("o Primeiro campo da Matriz  é: " + `${contador}` + "  - Ele é um número NEUTRO  - " + "Aluno Matriculado: " + listaAlunos[contador] + "   - " + `${contador + 1}` + "º Aluno  Cadastrado no sistema!");

    } else if (contador % 2 == 1) {

        console.log("O campo da Matriz  é: " + `${contador}` + "  - Ele é um número ÍMPAR  -  " + "Aluno Matriculado: " + listaAlunos[contador] + "   - " + `${contador + 1}` + "º Aluno  Cadastrado no sistema!");

    } else {

        console.log("O campo da Matriz  é: " + `${contador}` + "  - Ele é um número PAR    - " + " Aluno Matriculado: " + listaAlunos[contador] + "    - " + `${contador + 1}` + "º Aluno  Cadastrado no sistema!");
    }
}
