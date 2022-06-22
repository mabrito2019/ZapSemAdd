function chamar() {
    let txtn = document.getElementById("txtn").value
    let filtro = /\d+/g;
    let numero = Number(txtn.match(filtro).join(''));
    console.log(`https://wa.me/55${numero}`)
   window.open(`https://wa.me/55${numero}`, '_blank')
}