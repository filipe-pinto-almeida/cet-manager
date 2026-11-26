console.log("JavaScript da Agenda Pessoal carregado.");
    const tituloData = document.getElementById("current-date");

if (tituloData) {
    const hoje = new Date();
    tituloData.textContent = hoje.toLocaleDateString("pt-PT");
}
