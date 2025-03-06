async function watchWithAllDevices(){
    let watchWithAllDevices = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    watchWithAllDevices = res.watchWithAllDevices.map((elem)=>{
        return `<img src=${elem.src} alt=${elem.alt}>
`
    })
    document.querySelector("#multiImages").insertAdjacentHTML("afterbegin",watchWithAllDevices.join(" "))

}

async function titleDesc(){
    let titleDesc = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    titleDesc = res.titleDiveces.map((elem)=>{
        return `<div class="title">${elem.title}</div>
              <div class="description">${elem.description}</div>`
    })
    document.querySelector("#titleDesc").insertAdjacentHTML("afterbegin",titleDesc.join(" "))

}


async function devices(){
    let devices = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    devices = res.devices.map((elem)=>{
        return `<div class="name">${elem.name}</div>
              <div class="model">${elem.model}</div>`
    })
    document.querySelector("#nameDevices").insertAdjacentHTML("afterbegin",devices.join(" "))

}

async function btnDevice(){
    let btnDevice = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    btnDevice = res.btnDevices.map((elem)=>{
        return `<a href="#" class= "btnDevice">${elem.text}</a>
          `
    })

    document.querySelector("#btn").insertAdjacentHTML("afterbegin",btnDevice.join(" "))
}


export {watchWithAllDevices , titleDesc , devices , btnDevice}