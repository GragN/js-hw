let c = document.getElementById("cookie")
let t = document.getElementById("clicker__counter")

c.onclick = () => {
    t.textContent = Number(t.textContent) + 1
    if (Number(t.textContent) % 2 == 0){
        c.width -= 20
        c.height -= 20
    } else {
        c.width += 20
        c.height += 20
    }
}