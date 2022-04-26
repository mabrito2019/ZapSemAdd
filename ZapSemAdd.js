function chamar() {
    var txtn = document.getElementById("txtn").value

    var numero = Number(txtn)
    console.log(`https://wa.me/55${numero}`)
    window.open(`https://wa.me/55${numero}`, '_blank')
}