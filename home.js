import { details } from "./details.js";
import { detailHome,getdata,getArea,geticredin,detal} from "./ui.js";

        document.querySelectorAll("a").forEach((link)=>{
            link.addEventListener("click",async ()=>{
                console.log("hello")
               let x= link.getAttribute("alt");
               console.log(x)
               document.querySelector(`.${x}`).classList.remove('d-none')
              //  let y=link.getAttribute("aria")
              //  console.log(y)
              //  let z= await api(`${y}`); 
            })
        })
       let  loading= document.querySelector(".loading")
    
        
      
  
    async function api() {
        loading.classList.remove('d-none');

      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const data = await response.json(); // Data is lowercase for convention
      console.log(data);
      detailHome(data.meals);
      loading.classList.add('d-none');
          $(".headInfo").on("click",(e)=>{
            $(".details").css("display","block")
            let x=$(".headInfo").attr('id');
                  detal(x);
                         
          })
          
          
    }

    api();
    getdata()
    geticredin();
    getArea();

  
     

      
     
  $(".icon2").on("click" ,()=>{
    $(".black").css("left","-15rem")
    $(".icon2").css("display","none")
    $(".icon1").css("display","block")
    $(".white").css("left","0")
  })
  $(".icon1").on("click" ,()=>{
    $(".black").css("left","0")
    $(".icon1").css("display","none")
    $(".icon2").css("display","block")
    $(".white").css("left","15rem")
  })