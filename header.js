fetch("header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html

    const links = document.querySelectorAll(".nav-link")
    const currentPage = location.pathname.split("/").pop()
    
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active")
      }
    })
  });