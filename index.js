// Offer
var offer=document.querySelector('.offer')
var closead =document.getElementById('closead')
var navbar=document.querySelector('.navbar')

closead.addEventListener('click',function(){
    offer.style.display='none'
    navbar.style.top='0px'
})

// Side Navbar
var sidenav =document.querySelector('.side__nav')
var navbarslide=document.querySelector('.navbar__slide')
var closenav=document.querySelector('.close__nav')


navbarslide.addEventListener('click', function(){
    sidenav.style.left="0%"

})
closenav.addEventListener('click',function(){
    sidenav.style.left="-60%"
})


// Slider
var leftarrow = document.querySelector(".left__arrow")
var rightarrow =document.querySelector(".right__arrow")
var slider= document.querySelector(".slider")
var margin=0

console.log(leftarrow)

rightarrow.addEventListener("click",

    function(){
        margin=margin+100
    
        if(margin>200)
        {
            margin=0
            slider.style.marginLeft=0;
        }
        else{
            slider.style.marginLeft="-"+margin+"vw";
        }
    }
    )

leftarrow.addEventListener("click",

function(){

    if(margin==0)
    {
       
        margin=200
        slider.style.marginLeft="-"+margin+"vw";
    }
    else{

        margin=margin-100
        slider.style.marginLeft="-"+margin+"vw";
    }   
}
)

