function comprar(){
    const tipoIngresso = document.getElementById("tipo-ingresso");
    const quantidade = parseInt(document.getElementById("qtd").value);

   switch(tipoIngresso.value) {
        case "pista":
            compraPista(quantidade);
        break;
        case "inferior": 
            compraInferior(quantidade);
        break;
        case "superior": 
            compraSuperior(quantidade);
        break;
   }
}

function compraPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qtd > qtdPista) {
        console.log("Quantidade indisponivel!");
    } else {
        qtdPista -= qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        console.log("Compra executada com sucesso!");
    }   
}
function compraInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if(qtd > qtdInferior) {
        console.log("Quantidade indisponivel!");
    } else {
        qtdInferior -= qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        console.log("Compra executada com sucesso!");
    }   
}
function compraSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if(qtd > qtdSuperior) {
        console.log("Quantidade indisponivel!");
    } else {
        qtdSuperior -= qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        console.log("Compra executada com sucesso!"); 
    }   
}
