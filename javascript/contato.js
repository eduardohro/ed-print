// Fechar o modal ao clicar no botão "Fechar"
document.getElementById("fechar-modal").addEventListener("click", function () {
    const modal = document.getElementById("modal-confirmacao");
    modal.style.display = "none"; // Esconde o modal
});

// Fechar o modal ao clicar fora dele
window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal-confirmacao");
    if (event.target === modal) {
        modal.style.display = "none"; // Esconde o modal
    }
});

ScrollReveal().reveal('.fundo', {
    origin: 'left',
    duration: 1000,
    distance: '20%',
    delay: 250
});

ScrollReveal().reveal('.nome', {
    origin: 'right',
    duration: 1000,
    distance: '20%',
    delay: 250
});

ScrollReveal().reveal('.email', {
    origin: 'right',
    duration: 1000,
    distance: '20%',
    delay: 300
});
ScrollReveal().reveal('.telefone', {
    origin: 'right',
    duration: 1000,
    distance: '20%',
    delay: 350
});
ScrollReveal().reveal('.mensagem', {
    origin: 'right',
    duration: 1000,
    distance: '20%',
    delay: 400
});
ScrollReveal().reveal('.btn-enviar', {
    origin: 'right',
    duration: 1000,
    distance: '20%',
    delay: 450
});