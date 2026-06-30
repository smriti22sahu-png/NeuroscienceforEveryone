function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");

    if (current === "dark") {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}

// Apply saved theme on page load
(function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
})();