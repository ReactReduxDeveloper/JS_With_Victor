const handler = (e) => {

    console.log(e.currentTarget.id)
}
const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

sm.onclick = handler
md.onclick = handler
bg.onclick = handler
const link = document.getElementById("a")
link.onclick = handler()
/*
sm.addEventListener("click", handler)
sm.removeEventListener("click", handler)*/
