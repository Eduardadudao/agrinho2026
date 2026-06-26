function responder(correto) {
    let resultado = document.getElementById("resultado");

    if (correto) {
        resultado.innerHTML = "✅ Correto! A tecnologia ajuda a reduzir desperdícios.";
        resultado.style.color = "#00ff88";
    } else {
        resultado.innerHTML = "❌ Errado. Pense em sustentabilidade!";
        resultado.style.color = "red";
    }
}

function calcular() {
    let custo = parseFloat(document.getElementById("custo").value);
    let receita = parseFloat(document.getElementById("receita").value);

    let lucro = receita - custo;

    document.getElementById("lucro").innerHTML =
        "💰 Lucro: R$ " + lucro.toFixed(2);
}
