async function  imgKartoon(){
    let imgKartoon = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    imgKartoon = res.imgKartoon.map((elem)=>{
        return `<img src=${elem.src} alt=${elem.alt}>
`
    })
    document.querySelector("#imageKartoon").insertAdjacentHTML("afterbegin",imgKartoon.join(" "))
}


async function  textKartoon(){
    let textKartoon = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    textKartoon = res.textKartoon.map((elem)=>{
        return `<div class="titleKartoon">${elem.title}</div>
            <div class="descriptionKartoon">${elem.desc}</div>`
    })
    document.querySelector("#textKartoon").insertAdjacentHTML("afterbegin",textKartoon.join(" "))
}


async function  btnKartoon(){
    let btnKartoon = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    btnKartoon = res.btnKartoon.map((elem)=>{
        return `<a href=${elem.href} class="btn">${elem.title}</a>
`
    })
    document.querySelector("#btnKartoon").insertAdjacentHTML("afterbegin",btnKartoon.join(" "))
}


export {imgKartoon , btnKartoon , textKartoon}


