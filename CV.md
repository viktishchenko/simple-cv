## **Viktor Tishchenko**

+7 904 325 84 51 · Telegram · Omsk, Russian Federation · web22pro@gmail.com

### Summary

Hello, I’m a Viktor, aspiring web developer based in Omsk. I have some experience in designing, building and customizing websites. Currently studying «JavaScript/Front-end» at RS School.

### Skills

- Languages: HTML, CSS, Javascript (basics);
- Web libs: Bootstrap, jQuery, Materialize;
- Responsive design;
- Web Dev tools: Gulp, npm;
- VCS: Git, Github;
- DB: MongoDB Atlas (basic set of queries);
- Graphic editors: Photoshop, Figma, GWD;
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
- English: not a A1, but something in-between this and a B1.
