
let  loading= document.querySelector(".loading")

export function detailHome(list){
        let contiar=``;       
        for(let i=0; i < list.length; i++){
            const category = list[i];
        contiar +=`<div class="headInfo" id='${category.idMeal}'>
            <img  src="${category.strMealThumb}" alt="">
    <div class="prag"><h2  class="heait">${category.strMeal}</h2>
    </div></div>`
         
        }
        document.querySelector(".headin").innerHTML=contiar;
    }
   export async function  getdata(){
    loading.classList.remove('d-none');
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await response.json(); 
        loading.classList.add('d-none');
        console.log(data);
        displaycategories(data.categories);
    }

export function displaycategories(list){
        let categori=``;
        for(let i=0; i < list.length; i++){
            const category = list[i];
        categori +=`<div class="Infocat" id=''>
        <img  src="${category.strCategoryThumb}" alt="${category.strCategory}">
<div class="prag"><h2 class="heait">${category.strCategory}</h2>
    <p>${category.strCategoryDescription}</p></div></div>`
        
    }
    document.querySelector(".catinfo").innerHTML=categori;

}


export async function  getArea(){
    loading.classList.remove('d-none');

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const data = await response.json(); // Data is lowercase for convention
    loading.classList.add('d-none');
    console.log(data);
    Area(data.meals);
}

 function Area(list){
    let Area=``;
    for(let i=0; i < list.length; i++){
        const category = list[i];
    Area +=` <div class="Area">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
    <div class="prage"><h2 class="heait">${category.strArea}</h2>
    </div>
    </div>`
    
}
document.querySelector(".AllArea").innerHTML=Area;

}
export async function  geticredin(){
    loading.classList.remove('d-none');

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const data = await response.json(); // Data is lowercase for convention
    loading.classList.add('d-none');
    console.log(data);
    gredin(data.meals);
}

function gredin(list){
    let gred=``;
    for(let i=0; i < list.length; i++){
        const category = list[i];
    gred +=`    <div class="Area">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
    <div class="prage"><h2 class="heait">${category.strIngredient}</h2>
        <p>${category.strDescription}</p>
    </div>
    </div> `
    
}
document.querySelector(".ingredient").innerHTML=gred;

}

export async function  detal(cat){
    loading.classList.remove('d-none');

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cat}`);
    const data = await response.json(); // Data is lowercase for convention
    loading.classList.add('d-none');
    console.log(data);
    detailinfo(data.meals);
    $(".tw2").on("click",()=>{
        $(".details").css("display","none")

    })
}

  
// }
 function detailinfo(list){
    console.log(list);
    let cont=``;       
    for(let i=0; i < list.length; i++){
            const category = list[i];
        cont =` <div class="infodetail">
        <div class="first">
            <img src="${category.strMealThumb}" alt="">
            <h2>${category.strMeal}</h2>
        </div>
        <div class="two">
            <h1 class="tw2">x</h1>
            <h2>Instructions</h2>
            <p>${category.strInstructions}</p>
        <p>Area : ${category.strArea}<br>
            Category : ${category.strTags}<br>
            Recipes :</p>
            <div class="ineer">
        <p></p>
                 </div>
                 <p>tags:</p>
                 <button type="button" href="${category.strYoutube}" class="btn btn-danger">youtube</button>
                 <button type="button" class="btn btn-success">Source</button>
        </div>
    </div>`
            document.querySelector(".details").innerHTML=cont;
    }}
    
