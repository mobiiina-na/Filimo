
async function popularTitle(){
    let popularTitle = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    popularTitle = res.popularTitle.map((elem)=>{
        return `<div class="title">${elem.title} </div>
`
    })
    document.querySelector("#titleBtn").insertAdjacentHTML("afterbegin",popularTitle.join(" "))

}


async function swichBtn(){
    let swichBtn = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    swichBtn = res.swichBtn.map((elem)=>{
        return `<div class="left">${elem.title}</div>`
    })
    document.querySelector("#swichBtn").insertAdjacentHTML("afterbegin",swichBtn.join(" "))

}


async function filmSeries(){
  let filmSeries = ""
  let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
  let res = await data.json()
  filmSeries = res.filmSeries.map((elem)=>{
      return `<div class="film">
              <img src=${elem.img} alt=${elem.alt}>
      </div>
`
  })
  document.querySelector("#filmSeries").insertAdjacentHTML("afterbegin",filmSeries.join(" "))

}


async function imageBackgroung(){
  let imageBackgroung = ""
  let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
  let res = await data.json()
  imageBackgroung = res.tasianDesc.map((elem)=>{
      return `<img src=${elem.srcBack} alt=${elem.alt}>
            <div class="chosenFilm">
              <div class="title">
                <div class="textTitle">
                  <div class="nameMovie">${elem.nameMovie}</div>
                  <div class="director">${elem.director}</div>
                  <div class="zhanr">
                    <div class="right">${elem.right}</div>
                    <div class="left">${elem.left}</div>
                  </div>
                  <div class="description">${elem.description}</div>
                </div>
              </div>
            </div>
`
  })
  document.querySelector("#imageBackgroung").insertAdjacentHTML("afterbegin",imageBackgroung.join(" "))

}












export {popularTitle , swichBtn , filmSeries ,imageBackgroung}