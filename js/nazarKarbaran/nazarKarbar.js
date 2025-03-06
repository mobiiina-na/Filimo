async function titleKarbar(){
    let titleKarbar = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    titleKarbar = res.titleKarbar.map((elem)=>{
        return `<div class="titleKarbar" >${elem.title}</div>
`
    })
    document.querySelector("#titleKarbar").insertAdjacentHTML("afterbegin",titleKarbar.join(" "))
}


async function nazar(){
    let nazar = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    nazar = res.nazarKarbaran.map((elem)=>{
        return `<div class="swiper-wrapper">
                <div class="swiper-slide">${elem.nazar}</div>
                 <div class="swiper-slide">${elem.nazar}</div>
                 <div class="swiper-slide">${elem.nazar}</div>
                 <div class="swiper-slide">${elem.nazar}</div>
                 <div class="swiper-slide">${elem.nazar}</div>
                 <div class="swiper-slide">${elem.nazar}</div>
                 <div class="swiper-slide">${elem.nazar}</div>
                 <div class="swiper-slide">${elem.nazar}</div>
              </div>
            </div>`
    })
    document.querySelector("#nazar").insertAdjacentHTML("afterbegin",nazar.join(" "))
}


export {nazar , titleKarbar}
