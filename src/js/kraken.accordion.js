class Accordion {
  constructor(node) {
    this.node = node;
  }

  accordion() {
    const a = document.querySelectorAll(this.node);
    a.forEach((entry) => {
      const btn = entry.querySelector(".js-reveal__trigger");
      btn.innerHTML = `<button>${btn.innerHTML}</button>`;
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const target = entry.querySelector(".js-reveal__target");
        btn.setAttribute("aria-expanded", !expanded);
        btn.classList.toggle("is-open");
        entry.classList.toggle("is-open");
        target.toggleAttribute("hidden");
        target.animate(
          [{ transition: "opacity", opacity: "0" }, { opacity: "100" }],
          {
            duration: 250,
            easing: "linear",
            iterations: 1,
          },
        );
      });
    });
  }
}

const accordions = new Accordion(".widget-accordion");
accordions.accordion();
