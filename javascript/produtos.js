function filtrarCategoria(categoria) {
    const produtos = document.querySelectorAll('.produto__item');
    const titulo = document.getElementById('titulo-categoria');
  
    titulo.textContent = categoria === 'Todos' ? 'Todos os Produtos' : categoria;
  
    produtos.forEach(produto => {
      const categoriaProduto = produto.getAttribute('data-categoria');
      if (categoria === 'Todos' || categoriaProduto === categoria) {
        produto.style.display = 'block';
      } else {
        produto.style.display = 'none';
      }
  });
}

const scrollRevealOption03 = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};

ScrollReveal().reveal(".produtos__categorias", {
  ...scrollRevealOption03,
  interval: 300,
});

ScrollReveal().reveal("#titulo-categoria", {
  ...scrollRevealOption02,
  interval: 300,
});

ScrollReveal().reveal(".produto__item", {
  ...scrollRevealOption03,
  interval: 300,
  delay: 100
});
  