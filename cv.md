## **Viktor Tishchenko**

+7 904 325 84 51 · Telegram · WhatsApp · Omsk, Russian Federation · web22pro@yandex.ru

### Summary

Hello, I’m a Viktor, aspiring web developer based in Omsk. I have some experience in designing, building and customizing websites.

### Skills

- Languages: HTML, CSS, Javascript, React(s-s), Node(s-s);
- Web libs: Bootstrap, Materialize, Styled Components;
- Responsive design;
- Web Dev tools: webpack, gulp, npm;
- VCS: Git, Github;
- Graphic editors: Photoshop, Figma;
- Search engine optimization

### Code Example

```javascript
const openBtn = document.querySelectorAll("[data-open]");
const closeBtn = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openBtn) {
  el.addEventListener("click", function () {
    const modalName = this.dataset.open;
    document.getElementById(modalName).classList.add(isVisible);
  });
}

for (const el of closeBtn) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
```

### Education

- Faculty of Economics and Management, Omsk State Technical University, Russian Federation
  - September 2000 - July 2005

### Language competencies

- Russian: native language
- English: something in-between an B1 and a B2.
