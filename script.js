document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Validação do Formulário de Contato
    const formulario = document.querySelector('#form-contato');
    
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.querySelector('#nome').value;
            const email = document.querySelector('#email').value;

            if (nome === "" || email === "") {
                alert("Por favor, preencha todos os campos obrigatórios.");
            } else {
                alert(`Obrigado, ${nome}! Recebemos seu interesse. Entraremos em contato em breve.`);
                formulario.reset();
            }
        });
    }

    // 2. Efeito de Header ao rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = "0.5rem 5%";
            header.style.backgroundColor = "rgba(26, 95, 122, 0.95)";
        } else {
            header.style.padding = "1rem 5%";
            header.style.backgroundColor = "#1a5f7a";
        }
    });
});
