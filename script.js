// Adiciona uma sombra ao header quando a página é rolada
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0'; // Header fica mais "fino"
    } else {
        header.style.padding = '1rem 0';
    }
});

// Manipulação do Formulário de Contato com feedback visual
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura os dados (apenas para exemplo)
    const name = this.querySelector('#name').value;
    const email = this.querySelector('#email').value;
    const btn = this.querySelector('button');
    
    // Feedback visual de envio
    btn.innerText = "Enviando...";
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Simula envio (2 segundos)
    setTimeout(() => {
        alert(`Obrigado pelo interesse, ${name}! Enviamos os detalhes das matrículas para o e-mail: ${email}.`);
        
        // Reseta o botão e o formulário
        btn.innerText = "Solicitar Informações";
        btn.style.opacity = '1';
        btn.disabled = false;
        this.reset();
    }, 2000);
});

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Desconto da altura do header fixed
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
