const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

// Coloque seu número com DDI +55 aqui.
// Exemplo: const phone = "5531999999999";
const phone = "";

const whatsappLink = document.getElementById("whatsappLink");

if (phone) {
  const text = encodeURIComponent("Olá Miguel! Vi seu portfólio e queria conversar sobre uma edição.");
  whatsappLink.href = `https://wa.me/${phone}?text=${text}`;
} else {
  whatsappLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Adicione seu número de WhatsApp no arquivo script.js para ativar este botão.");
  });
}

// Para transformar os cards em links:
// 1. No index.html, troque <article class="project ..."> por <a class="project ..." href="SEU_LINK" target="_blank">
// 2. Troque </article> por </a>
