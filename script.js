document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    { name: "Website bán hàng", link: "#" },
    { name: "Ứng dụng Todo List", link: "#" },
    { name: "Portfolio này", link: "#" }
  ];

  const container = document.getElementById("projects");

  projects.forEach(p => {
    const item = document.createElement("p");
    item.innerHTML = `<a href="${p.link}" target="_blank">${p.name}</a>`;
    container.appendChild(item);
  });
});

