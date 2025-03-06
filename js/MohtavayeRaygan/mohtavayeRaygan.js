async function titleFree(){
    let titleFree = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    titleFree = res.titleFree.map((elem)=>{
        return `<div class="titleFree">${elem.title}</div>
`
    })
    document.querySelector("#titleFree").insertAdjacentHTML("afterbegin",titleFree.join(" "))
}


async function imgSwiper(){
    let imgSwiper = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    imgSwiper = res.imgFree.map((elem)=>{
        return `<div class="swiper-slide">
                    <a href=${elem.href} class="aForSwiper">
                      <img src=${elem.src}alt=${elem.alt}>
                    </a>
                    <div class="nameMovie">${elem.name}</div>
                </div>
`
    })
    document.querySelector("#imgSwiper").insertAdjacentHTML("afterbegin",imgSwiper.join(" "))
}





export {titleFree , imgSwiper}