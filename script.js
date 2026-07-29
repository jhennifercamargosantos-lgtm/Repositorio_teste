document.addEventListener("DOMContentLoaded", function () {
  // 1. Configurar os botões de gosto
  const likeButtons = document.querySelectorAll(".btn-like");

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const countSpan = this.querySelector(".like-count");
      let currentLikes = parseInt(countSpan.textContent, 10);

      // Incrementa a contagem
      currentLikes++;
      countSpan.textContent = currentLikes;

      // Altera o estilo do botão para assinalar a interação
      this.style.backgroundColor = "var(--primary-color)";
      this.style.color = "#ffffff";
    });
  });

  // 2. Configurar o filtro de pesquisa em tempo real
  const searchInput = document.getElementById("searchInput");
  const postsContainer = document.getElementById("postsContainer");
  const posts = postsContainer.getElementsByClassName("post-card");

  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();

    Array.from(posts).forEach((post) => {
      const title = post.querySelector(".post-title").textContent.toLowerCase();
      const body = post.querySelector(".post-body").textContent.toLowerCase();

      if (title.includes(filter) || body.includes(filter)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
});