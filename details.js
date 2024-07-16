import {detailHome} from "./ui.js";

let form=document.querySelector(".Name");
 export async function details(dat){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dat}`)
    const theData =await response.json();
    console.log(theData)
     detailinfo(theData);
 $(".two h1").on("click",()=>{
    $(".details").css("display","none")
})
 
 details();
}
function displaysearc(list){
    let contiar=``;       
    for(let i=0; i < list.length; i++){
        const category = list[i];
    contiar +=`<div class="headInfo" id='${category.idMeal}'>
        <img  src="${category.strMealThumb}" alt="">
<div class="prag"><h2  class="heait">${category.strMeal}</h2>
</div></div>`
     
    }
    document.querySelector(".searchInfo").innerHTML=contiar;
}

async function search(val){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    const theData =await response.json();
    displaysearc(theData.meals);

}
form.addEventListener('keyup', function (e){
        // search(value);
search(e.target.value)
    
})