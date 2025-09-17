const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promo2 = preco * 0.50
    const promo = (preco * 2) + promo2
   

    resp1.innerText = `${produto}  - Promoção Leve 3 por R$: ${promo.toFixed(2)}`
    resp2.innerText = `O 3° produto custa apenas R$: ${promo2.toFixed(2)}`

    e.preventDefault()
})