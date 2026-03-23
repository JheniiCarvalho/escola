document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // --- 1. Menu Mobile (Abrir/Fechar) ---
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Muda o ícone de 'lista' para 'X' ao abrir (opcional)
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('ph-list');
            icon.classList.toggle('ph-x');
        });
    }

    // --- 2. Rolagem Suave (Smooth Scroll) ---
    // Faz com que os botões "Início", "Cursos", etc., deslizem até a seção
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Fecha o menu mobile ao clicar em um link
            navLinks.classList.remove('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Desconto da altura do header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. Efeito no Header ao Rolar ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "0.5rem 0";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        } else {
            header.style.padding = "1rem 0";
            header.style.backgroundColor = "#ffffff";
            header.style.boxShadow = "none";
        }
    });

    // --- 4. Simulação de Envio de Formulário ---
    const form = document.querySelector('.form-contato');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Aqui você capturaria os dados
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Enviando...";
            btn.disabled = true;

            // Simula um atraso de rede
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! O Colégio São Cristóvão entrará em contato em breve.');
                btn.innerText = originalText;
                btn.disabled = false;
                form.reset();
            }, 1500);
        });
    }
});
