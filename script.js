document.getElementById("fact-btn").addEventListener("click", () => {
    document.getElementById("fact-text").textContent = "Carregando...";

    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            document.getElementById("fact-text").textContent = data.fact;
            document.getElementById("cat-img").src = "https://cataas.com/cat?timestamp=" + new Date().getTime();
        })
        .catch(err => {
            console.error(err);
            document.getElementById("fact-text").textContent = "Erro ao carregar fato 😿";
        });
});
