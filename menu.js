document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <nav class="menu">
      <div class="opcao"><a href="*">Volumes</a></div>
      <div class="opcao"><a href="DGR.html" target="_blank">Décio Gonçalves Ribeiro</a></div>
      <div class="opcao"><a href="JoseLanzellotti.html" target="_blank">José Lanzelotti</a></div>
      <div class="opcao"><a href="*">Waldemar Seyssel - "Arrelia"</a></div>
    </nav>
  `;

  document.getElementById("menu").innerHTML = menuHTML;
});