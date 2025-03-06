async function titleAccar(){
    let titleAccar = ""
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json")
    let res = await data.json()
    titleAccar = res.titleAccar.map((elem)=>{
        return `<div class="title">${elem.title}</div>
                <div class="desc">${elem.desc}</div>`
    })
    document.querySelector("#titleAccareon").insertAdjacentHTML("afterbegin",titleAccar.join(" "))
}


async function accar() {
    let accar = "";
    let data = await fetch("https://mobiiina-na.github.io/db.json/db.json");
    let res = await data.json();
    accar = res.accr.map((elem) => {
        return `<div class="accar">
                 <div class="titleAccar">${elem.titleAccar}</div>
                 <div class="descAccar">${elem.descAccar}</div>
                </div>`;
    });

    document.querySelector("#accardeon").insertAdjacentHTML("afterbegin", accar.join(" "));

}


    function paras (){
        let paras = document.querySelectorAll("#accardeon>.accar");
        paras.forEach((para)=>{
        para.addEventListener("click",function(){
            para.classList.toggle("active")            
        })
    })
    }
    
accar()

export {titleAccar ,  paras}