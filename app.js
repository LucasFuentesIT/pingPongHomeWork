// Para mas adelante reducir el codigo como ejercicio a su minima exprecion
let p1 = 0;
let p2 = 0;
let cont = 3;

const globalScore = document.querySelector("h1");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const select = document.querySelector("select")
let sp1 = document.querySelector("#sp1")
let sp2 = document.querySelector("#sp2")

function winCondition() {
    if (p1 == cont) {
        sp1.style.color = "green";
        sp2.style.color = "red";
        player1.disabled = true;
        player2.disabled = true;
    } else if (p2 == cont) {
        sp2.style.color = "green";
        sp1.style.color = "red";
        player2.disabled = true;
        player1.disabled = true;
    }
}
// clic en p1, agrega un punto 
player1.addEventListener("click", function () {
    p1++;
    console.log("click ")
    sp1.innerText = `${p1}`
    winCondition(cont)

})
// clic en p2, agrega un punto 
player2.addEventListener("click", function () {
    p2++;
    console.log("click")
    sp2.innerText = `${p2}`
    winCondition(cont)
})
// Resetea el tablero 
reset.addEventListener("click", function () {
    resetScore()

})
select.addEventListener("change", function () {
    const option = select.options[select.selectedIndex]
    const valueOption = option.value
    cont = valueOption
    resetScore()
})

function resetScore() {
    p1 = 0;
    p2 = 0;
    sp2.innerText = `${p2}`
    sp1.innerText = `${p1}`
    sp2.style.color = "black";
    sp1.style.color = "black";
    player2.disabled = false;
    player1.disabled = false;
}