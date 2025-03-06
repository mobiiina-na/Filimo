async function titleDescTv(){
    let titleDescTv = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    titleDescTv = res.titleDescTv.map((elem)=>{
        return `<div class="title">${elem.title}</div>
              <div class="description">${elem.description}</div>`
    })
    document.querySelector("#titleTv").insertAdjacentHTML("afterbegin",titleDescTv.join(" "))
}


async function modelTv(){
    let modelTv = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    modelTv = res.modelTv.map((elem)=>{
        return `<div class="titleTv">${elem.nameTv}</div>
              <div class="model">${elem.model}</div>`
    })
    document.querySelector("#modelTv").insertAdjacentHTML("afterbegin",modelTv.join(" "))
}

async function btnTv(){
    let btnTv = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    btnTv = res.btnTv.map((elem)=>{
        return `<a href=${elem.href} class="btnTv">${elem.btnTvText} </a>
`
    })
    document.querySelector("#btnTv").insertAdjacentHTML("afterbegin",btnTv.join(" "))
}


async function imgTv(){
    let imgTv = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    imgTv = res.imgTv.map((elem)=>{
        return ` <img src=${elem.src} alt=${elem.alt}>
`
    })
    document.querySelector("#imgTv").insertAdjacentHTML("afterbegin",imgTv.join(" "))
}


export  {modelTv , titleDescTv , btnTv, imgTv}