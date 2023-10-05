var mines = Array()
var game_over = false
var aux = 0
let qtd_mines = 7
let diff = 7

iniciaMines()

function iniciaMines() {
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
            if ((aux >= (25 - qtd_mines)|| aux >= diff) && game_over === false) {
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

console.log(mines)