function mostrar(secao) {
    let secoes = document.querySelectorAll(".card");

    secoes.forEach(s => s.classList.add("hidden"));

    document.getElementById(secao).classList.remove("hidden");
}

function calcular() {
    let custo = Number(document.getElementById("custo").value);
    let receita = Number(document.getElementById("receita").value);

    let eficiencia = ((receita - custo) / custo) * 100;

    let resultado = document.getElementById("resultado");

    if (isNaN(eficiencia)) {
        resultado.innerHTML = "Insira valores válidos.";
        return;
    }

    resultado.innerHTML =
        "📈 Eficiência agrícola estimada: " + eficiencia.toFixed(2) + "%";
}
