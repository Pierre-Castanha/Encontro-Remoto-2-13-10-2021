let numeroAlunos = 6

let listaAlunos = ["Pierre", "Frederico", "Paulo", "Ricardo", "Amaro", "Erick"];

//for (let contador = 0; contador < numeroAlunos; contador++) {

    for (let contador = 0; contador < listaAlunos.length; contador++) {
        console.log(contador)

        if (contador == 0) {
            //    console.log("zero")
            //    console.log("O número é: " + contador + " Ele é Zero")
            console.log(`${contador}: Zero`);
            //  } else if(contador % 2 == 1) {
        } else if (contador % 2 != 0) {
            //    console.log("Ímpar")
            console.log("O número é: " + contador + " Ele é Ímpar")
        } else {
            //  console.log("Par")
            console.log("O número é: " + contador + " Ele é  Par")
        }
    }