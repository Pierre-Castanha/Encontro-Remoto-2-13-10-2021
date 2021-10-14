let numeroAlunos = 10

let listaAlunos = ["Pierre", "Frederico", "Paulo", "Ricardo", "Amaro", "Erick", "Bernardo", "Antonio", "Artur", "Francisco"];


for (let contador = 0; contador < listaAlunos.length; contador++) {
    console.log(contador)

    if (contador == 0) {
        console.log("o Primeiro campo da Matriz  é: " + `${contador}` + "  - Ele é um número NEUTRO  - " + "Aluno Matriculado:  " + listaAlunos[contador] + "   - " + `${contador + 1}` + "º Aluno  Cadastrado no sistema!");

    } else if (contador % 2 == 1) {

        console.log("o Primeiro campo da Matriz  é: " + `${contador}` + "  - Ele é um número ÍMPAR  -  " + "Aluno Matriculado:  " + listaAlunos[contador] + "   - " + `${contador + 1}` + "º Aluno  Cadastrado no sistema!");

    } else {

        console.log("o Primeiro campo da Matriz  é: " + `${contador}` + "  - Ele é um número PAR    - " + " Aluno Matriculado:  " + listaAlunos[contador] + "    - " + `${contador + 1}` + "º Aluno  Cadastrado no sistema!");
    }
}