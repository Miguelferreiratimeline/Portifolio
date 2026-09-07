const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();

// CONTATOS
const phone = "5531991094042";
const discordUsername = "miguel.ferreira_timeline";

const whatsappLink = document.getElementById("whatsappLink");
const discordLink = document.getElementById("discordLink");
const discordName = document.getElementById("discordName");

// WhatsApp: abre uma conversa já com mensagem pronta.
const whatsappText = encodeURIComponent(
  "Olá Miguel! Vi seu portfólio e queria conversar sobre um projeto de edição."
);
whatsappLink.href = `https://wa.me/${phone}?text=${whatsappText}`;
whatsappLink.target = "_blank";
whatsappLink.rel = "noopener noreferrer";

// Discord: copia o usuário para a área de transferência.
discordName.textContent = discordUsername;

discordLink.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await navigator.clipboard.writeText(discordUsername);
    const original = discordLink.textContent;
    discordLink.textContent = "Usuário copiado!";
    setTimeout(() => discordLink.textContent = original, 1800);
  } catch {
    alert(`Meu Discord: ${discordUsername}`);
  }
});

// Para transformar um card de projeto em link:
// troque <article class="project ..."> por
// <a class="project ..." href="LINK_DO_VIDEO" target="_blank" rel="noopener">
// e troque </article> por </a>.


// PLAYER DOS PROJETOS — abre os vídeos dentro do portfólio
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const projectButtons = document.querySelectorAll(".project[data-video-id]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

function openVideoModal(videoId) {
  videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeVideoModal() {
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  videoFrame.src = "";
}

projectButtons.forEach(button => {
  button.addEventListener("click", () => openVideoModal(button.dataset.videoId));
});

closeModalButtons.forEach(button => {
  button.addEventListener("click", closeVideoModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.classList.contains("open")) {
    closeVideoModal();
  }
});
