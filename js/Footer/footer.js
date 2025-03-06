async function footer(){
    let footer = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    footer = res.footer.map((elem)=>{
        return `<div class="titlefooter">
            <div class="title">${elem.title}</div>
          </div>
          <div class="description">
            <div class="desc">${elem.DescOne}</div>
            <div class="desc">${elem.DescTwo}</div>
            <div class="desc">${elem.DescThree}</div>
          </div>
          <a href=${elem.href}>
            <div class="btnFooter">${elem.btn}</div>
          </a>`
    })
    document.querySelector("#footer").insertAdjacentHTML("afterbegin",footer.join(" "))
}


export default footer