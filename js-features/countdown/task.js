let t = document.getElementById("timer")

let interval = setInterval(() => {
    t.textContent = Number(t.textContent) - 1;
    if (t.textContent == 0) {
        alert("Вы победили в конкурсе")
        clearInterval(interval)
    };
}, 1000)