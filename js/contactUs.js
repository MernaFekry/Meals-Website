

let emailRegEx = /^[a-z]{3}@[a-z]{3}.[a-z]{3}$/i;
let nameRegEx = /^[a-z]{10}$/i ;
let phoneRegEx = /^[0-9]{11}$/i ;



document.querySelector('#nameInput').addEventListener('input',function(e){
    let enteredName = e.target.value;
    // if(!(nameRegEx.test(enteredName.trim().toLowerCase())){

    // }
})




sidebarMenu ();

function sidebarMenu (){
    $('#closeIcon').click(function(){
    
        console.log("Clicked");
    })
    
    let sidebarWidth = $('.sidebar').innerWidth();
    var closeOpenIcon = `<i class="fa-sharp fa-solid fa-bars fa-2x " id="menuIcon"></i>`;
    
    $('.closeOpenIcon').html(closeOpenIcon);
    
    $('.closeOpenIcon').click(function(){
    
        if( $('.sidebar').css("left") == "0px" ){
            $('.sidebar').animate({left : sidebarWidth },1000);
            closeOpenIcon = `<i class="fa-solid fa-xmark fa-2x text-center" id="closeIcon"></i>`;
            $('.closeOpenIcon').html(closeOpenIcon);
        }
        else{
            $('.sidebar').animate({left : 0 },1000);
            closeOpenIcon = `<i class="fa-sharp fa-solid fa-bars fa-2x " id="menuIcon"></i>`;
            $('.closeOpenIcon').html(closeOpenIcon);
        }
    
    
    
        // $('.sidebar').animate({left : "200px" },1000);
        console.log("Clicked");
    })
}
