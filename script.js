 AOS.init();
  const nameText = "Hi, I'm Bharadwaj Bollapalli";
  const nameTarget = document.getElementById("typed-name");
  let i = 0;

  function typeWriter() {
    if (i < nameText.length) {
      nameTarget.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 70);
    }
  }

  window.addEventListener("load", () => {
    nameTarget.textContent = "";
    typeWriter();
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });