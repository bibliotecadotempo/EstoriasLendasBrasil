document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <nav class="menu">
    <div class="opcao"><a href="Index.html" target="_blank">Início</a></div>
    <div class="opcao"><a href="DecioGoncalves.html" target="_blank">Décio Gonçalves Ribeiro</a></div>
    <div class="opcao"><a href="JoseLanzellotti.html" target="_blank">José Lanzelotti</a></div>
    <div class="opcao"><a href="Arrelia.html" target="_blank">Waldemar Seyssel - "Arrelia"</a></div>
    <div class="opcao"><a href="Volumes.html" target="_blank">Volumes</a></div>
    <div class="opcao"><a href="Creditos.html" target="_blank">Créditos</a></div>
    </nav>
  `;

  document.getElementById("menu").innerHTML = menuHTML;
});