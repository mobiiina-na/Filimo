async function  cinamaTitle(){
    let cinamaTitle = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    cinamaTitle = res.cinamaTitle.map((elem)=>{
        return `<div class="cinamaTitle">${elem.title}</div>
`
    })
    document.querySelector("#cinamaTitle").insertAdjacentHTML("afterbegin",cinamaTitle.join(" "))
}


async function  cinamaDesc(){
    let cinamaDesc = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    cinamaDesc = res.cinamaDesc.map((elem)=>{
        return `<div class="desc">${elem.title}</div>
`
    })
    document.querySelector("#cinamaDesc").insertAdjacentHTML("afterbegin",cinamaDesc.join(" "))
}



async function  film(){
    let film = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    film = res.film.map((elem)=>{
        return `<div class="films">
                <div class="film">
                <a href=${elem.href} class="imgCinama">
                  <img src=${elem.src} alt=${elem.alt}>
                </a>
                <div class="textCinama">
                  <a href=${elem.href}>
                    <div class="name">${elem.name}</div>
                  </a> 
                  <div class="director">${elem.director}</div>
                  <div class="desc">
                    <div class="divDesc">${elem.divDescOne}</div>
                    <div class="divDesc">${elem.divDescTwo}</div>
                  </div>
                  <a href=${elem.href} class="btnCinama">
                    <div class="btn">${elem.btnCinama}</div>
                  </a>
                </div>
                <div class="ekran">
                  <div class="ekranAnline">${elem.ekran}</div>
                </div>
              </div>
              </div>
              </div>`
    })
    document.querySelector("#filmAnline").insertAdjacentHTML("afterbegin",film.join(" "))
}

export {cinamaDesc , cinamaTitle , film}