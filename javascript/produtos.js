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
  