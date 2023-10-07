let mines = Array()
let game_over = false
let aux = 0
let qtd_mines = 7
let diff = 4



iniciaMines()

function selecDificuldade() {
    let dificuldade = document.getElementById("dificuldade").value
    let dif
    switch (dificuldade) {
        case '1':
            dif = "Fácil"
            break
        case '2':
            dif = "Médio"
            break

        case '3':
            dif = "Difícil"
            break

        case '4':
            dif = "Muito Difícil"
            break

        case '5':
            dif = "Impossível"
            break
        default:
            dif = "Fácil"
    }
    localStorage.setItem("dificuldade", dif);
    document.getElementById('dif').innerText = dif
    document.location.reload(true)
}

function iniciaMines() {
    const dif = localStorage.getItem('dificuldade');
    dif == null ? dif = "Facil" :
        document.getElementById('dif').innerText = dif
    switch (dif) {
        case 'Fácil':
            qtd_mines = 7
            diff = 4
            break
        case 'Médio':
            qtd_mines = 7
            diff = 7
            break

        case 'Difícil':
            qtd_mines = 10
            diff = 10
            break

        case 'Muito Difícil':
            qtd_mines = 15
            diff = 10
            break

        case 'Impossível':
            qtd_mines = 24
            diff = 1
            break
    }
    for (var i = 0; i < 25; i++) {
        document.getElementById("c" + i).value = ' '
        if (i < qtd_mines) {
            mines[i] = 'X'
        } else {
            mines[i] = 'O'
        }
    }
    mines = shuffleArray(mines)
}

function mostraMines() {
    for (var i = 0; i < 25; i++) {
        if (mines[i] === 'X') {
            document.getElementById("c" + i).value = 'M'
            document.getElementById('c' + i).style.backgroundColor = '#ff0000'
        } else {
            document.getElementById("c" + i).value = 'v'
        }
    }
}

function mostraCelula(x) {
    if (!game_over) {
        document.getElementById('c' + x).disabled = true
        aux++
        if (mines[x] === 'X') {
            document.getElementById("c" + x).value = 'M'
            document.getElementById('c' + x).style.backgroundColor = '#ff0000'
            mostraMines()
            gameOver(0)
        } else {
            document.getElementById("c" + x).value = 'v'
            if ((aux >= (25 - qtd_mines) || aux >= diff) && game_over === false) {
                gameOver(1)
            }
        }
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function gameOver(x) {
    game_over = true
    desabilitaMines()
    document.getElementById("restart").style.opacity = 1
    switch (x) {
        case 0:
            document.getElementById("resultado").value = 'PERDEU'
            break
        case 1:
            document.getElementById("resultado").value = 'VITÓRIA'
            vencerMines()
            break
    }
}

function vencerMines() {
    for (var i = 0; i < 25; i++) {
        if (mines[i] === 'X') {
            document.getElementById('c' + i).style.backgroundColor = '#009933'
            document.getElementById('c' + i).value = 'O'
        }
    }
}

function desabilitaMines() {
    for (var i = 0; i < 25; i++) {
        document.getElementById('c' + i).disabled = true
        document.getElementById('c' + i).disabled = false
    }
}

function habilitaMines() {
    for (var i = 0; i < 25; i++) {
        document.getElementById('c' + i).disabled = true
    }
}