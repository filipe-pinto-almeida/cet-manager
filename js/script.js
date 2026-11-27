console.log("JavaScript da Agenda Pessoal carregado.");
const tituloData = document.getElementById("current-date");

if (tituloData) {
  const hoje = new Date();
  tituloData.textContent = hoje.toLocaleDateString("pt-PT");
}
const formulario = document.getElementById("event-form");
const atividades = [];
if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const titulo = document.getElementById("event-title").value;
    const data = document.getElementById("event-date").value;
    const hora = document.getElementById("event-time").value;
    const atividade = {
      titulo: titulo,
      data: data,
      hora: hora,
    };

    console.log(atividade);
    atividades.push(atividade);
    console.log("Total de atividades:", atividades.length);
  });

}
