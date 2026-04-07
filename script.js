// Manipulação do Formulário de Contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura os dados (apenas para exemplo)
    const email = this.querySelector('input[type="email"]').value;
    
    alert(`Obrigado pelo contato! Em breve enviaremos informações para: ${email}`);
    
    // Limpa o formulário
    this.reset();
});

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
