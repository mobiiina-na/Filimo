async function slider(){
    let slider = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    slider = res.sliders.map((elem)=>{
        return `<div class="swiper-slide">
                    <img src=${elem.src} alt=${elem.alt}>
                </div>`
    })
    document.querySelector("#Sliders").insertAdjacentHTML("afterbegin",slider.join(" "))
}


async function coverText(){
    let coverText = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    coverText = res.coverText.map((elem)=>{
        return `<div class= ${elem.id===1 || elem.id==="1" ? "withFilimo" :"control"}>${elem.title}</div>
`
    })
    document.querySelector("#coverText").insertAdjacentHTML("afterbegin",coverText.join(" "))
}


async function threeTiks(){
    let threeTiks = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    threeTiks = res.threeTiks.map((elem)=>{
        return `<div class="tik">${elem.title}</div> `
    })
    document.querySelector("#tiks").insertAdjacentHTML("afterbegin",threeTiks.join(" "))

}



async function watchDiscountBtn(){
    let watchDiscountBtn = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    watchDiscountBtn = res.watchDiscountBtn.map((elem)=>{
        return `<a href=${elem.href} class=${elem.id===1 || elem.id==="1" ? "watchBtn" :"discount"}>${elem.title}</a>
 `
    })
    document.querySelector("#watchbtn").insertAdjacentHTML("afterbegin",watchDiscountBtn.join(" "))

}



export  {slider,coverText,threeTiks,watchDiscountBtn}



