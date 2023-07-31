/* Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto.
Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo.
Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.
*/

let votoCandidato = {
    candidato_X: 889,
    candidato_Y: 847,
    candidato_Z: 515,
    branco: 0,
    nulo: 0
}

while (true) {
   let escolhaDeCandidato = parseInt(prompt("Eleições 2023 - Simulador.\nVote no candidato que mais lhe representa!\n\nCandidato Xis da Lanchonete - Vote 55\nCandidato Ýpsilon da Gráfica - Vote 66\nCandidato Zeta do Gás - Vote 77\nPara votar em branco - Vote 0"))

   if (isNaN(escolhaDeCandidato)){
        alert('Voto inválido. Tente Novamente.')
        continue
    } else if(escolhaDeCandidato == 55){
        alert('Você votou no candidato Xis da Lanchonete!')
        votoCandidato.candidato_X++
    } else if(escolhaDeCandidato == 66){
        alert('Você votou no candidato Ýpsilon da Gráfica!')
        votoCandidato.candidato_Y++
    } else if(escolhaDeCandidato == 77){
        alert('Você votou no candidato Zeta do Gás!')
        votoCandidato.candidato_Z++
    } else if(escolhaDeCandidato == 0){
        alert('Você votou em branco.')
        votoCandidato.branco++
    } else{
        alert('Você votou nulo.')
        votoCandidato.nulo++
    }

        let maioriadeVotos = Math.max(votoCandidato.candidato_X,votoCandidato.candidato_Y,votoCandidato.candidato_Z,votoCandidato.branco,votoCandidato.nulo)
        let candidatoGanhador
        
        if (maioriadeVotos == votoCandidato.candidato_X){
        candidatoGanhador = "Candidato Xis da Lanchonete!"
        } else if (maioriadeVotos == votoCandidato.candidato_Y){
        candidatoGanhador = "Candidato Ýpsilon da Gráfica!"
        } else if (maioriadeVotos == votoCandidato.candidato_Z){
        candidatoGanhador = "Candidato Zeta do Gás!"
        } else if (maioriadeVotos == votoCandidato.branco){
        candidatoGanhador = "Votos em branco."
        } else{
        candidatoGanhador = "Votos nulos"
        }

    let continuarVoto = parseInt(prompt("Deseja encerrar a votação?\n1 - Sim\n2 - Não"))
    if (continuarVoto == 1){
            alert('Votações encerradas.')
            alert('Contabilizando votos...')
            alert('Computando resultados...')
            alert('Votação conluída!')
        alert(`Vencedor das Eleições 2023: ${candidatoGanhador}\n\nApuração dos votos:\n\nCandidato Xis da Lanchonete - ${votoCandidato.candidato_X}\nCandidato Ýpsilon da Gráfica - ${votoCandidato.candidato_Y}\nCandidato Zeta do Gás - ${votoCandidato.candidato_Z}\nVotos brancos - ${votoCandidato.branco}\nVotos nulos - ${votoCandidato.nulo}`)
        alert('Obrigada por votar!')
        break
    } else if (continuarVoto != 2) {
        alert('Opção inválida.')
    }
}