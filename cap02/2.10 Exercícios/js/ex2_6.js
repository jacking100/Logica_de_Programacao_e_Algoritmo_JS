const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const min = Math.ceil(tempo / 15)
    const VP = min * valor



    resp1.innerText = `Valor a Pagar R$: ${VP.toFixed(2)}`


    e.preventDefault()
})