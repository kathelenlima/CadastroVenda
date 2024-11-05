document.getElementById("form-matricula").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const dataVenda = document.getElementById("dataVenda").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const nomeAluno = document.getElementById("nomeAluno").value;
    const nomeVendedor = document.getElementById("nomeVendedor").value;
    const nomeCurso = document.getElementById("nomeCurso").value;

    const matricula = {
        dataVenda: dataVenda,
        valor: valor,
        nomeAluno: nomeAluno,
        nomeVendedor: nomeVendedor,
        nomeCurso: nomeCurso
    };

    fetch("http://localhost:8080/matriculas/adicionar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(matricula)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("mensagem").innerText = "Venda cadastrada com sucesso!";
        document.getElementById("form-matricula").reset();
    })
    .catch(error => {
        document.getElementById("mensagem").innerText = "Erro ao cadastrar venda.";
    });
});
