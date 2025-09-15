const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {

    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const promo = Math.floor(2 * preco)

    resp1.innerText =`Promoção de ${medicamento}` 
    resp2.innerText =`Leve 2 por R$: ${promo}`

    e.preventDefault()
} )
