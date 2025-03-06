
async function menu(){
    let menu = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    menu = res.menu.map((elem)=>{
        return `<li class = ${elem.id===1 || elem.id==="1" ? "border" : ""}>
                    <a href=${elem.href}>${elem.title}</a>
                </li>`
    })
    document.querySelector("#MenuFilimo>ul").insertAdjacentHTML("afterbegin",menu.join(" "))
}

async function menuBtns(){
    let menuBtns = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    menuBtns = res.menuBtns.map((elem)=>{
        return `
        
        <a href=${elem.href} class=${elem.id===1 || elem.id==="1" ? "buy" : "login"}>${elem.title}</a>
        
                `
    })
    document.querySelector("#Buylogin").insertAdjacentHTML("afterbegin",menuBtns.join(" "))
}

export {menu,menuBtns};