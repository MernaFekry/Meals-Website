

var allCategories = [];
var HTMLCategories = [];

var categoryMeals = [];
var HTMLCategoryMeals = [];

getCategoryAPI();

async function getCategoryAPI(){
    var response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    allCategories = await response.json();
    console.log(allCategories);
    // displayAreas();
    displayCategories();
}

async function getCategoryMealAPI(clickedmeal){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickedmeal}`);
    categoryMeals = await response.json();
}


function displayCategoryMeals(){

    $('.categoryItem').click(function(e){

        // let clickedMeal = e.target;
        let clickedMeal = $(this).children().children(0).html();
        console.log(clickedMeal);
        categoryMeals = getCategoryMealAPI(clickedMeal);
        setTimeout(() => {
            console.log(categoryMeals);
            for(let i=0 ; i<categoryMeals.meals.length; i++){

                let categoryMeal = "";
                categoryMeal = `<div class="col-sm-6  col-lg-3">
                        <div class="categoryItem ">
                            <img class="rounded-start rounded-end" src="${categoryMeals.meals[i].strMealThumb}" alt="Food Image">

                            <div class="categoryHover d-flex align-items-center ps-2 text-black">
                            <h2>${categoryMeals.meals[i].strMeal}</h2>
                            </div>
                        </div>
                    </div>`;

                    
                    HTMLCategoryMeals.push(categoryMeal);
                    
                // console.log(categoryMeals.meals[i]);
            }
            $('#categoryRow').html(HTMLCategoryMeals);

        }, 1000);




        // $('#categoryRow').html();
    })

    // console.log(categoryMeals); 

    


    // let categoryMeal = "";

    // categoryMeal = `<div class="col-sm-6  col-lg-3">
    //                     <div class="categoryItem ">
    //                         <img class="rounded-start rounded-end" src="images/main/1525876468.jpg" alt="Food Image">

    //                         <div class="categoryHover d-flex align-items-center ps-2 text-black">
    //                         <h2>Corba</h2>
    //                         </div>
    //                     </div>
    //                 </div>`;


}


function displayCategories(){
    // console.log("From display");


    let category = "";
    for(let i=0 ; i<allCategories.categories.length ; i++){
        
        let description = allCategories.categories[i].strCategoryDescription;
        if(description.length>130) description=description.slice(0,121);

        category = `<div class="col-md-6 col-lg-3">
        <div class="categoryItem" id="categoryItem">
            <img src="${allCategories.categories[i].strCategoryThumb}" alt="Category Image">

            <div class="categoryHover d-flex flex-column justify-content-center text-center p-3">
                <h2>${allCategories.categories[i].strCategory}</h2>
                <p>${description} <span> ${allCategories.categories[i].idCategory} </span></p>
            </div>


        </div>
    </div>`;

    HTMLCategories.push(category);

        // console.log(allCategories.categories[i].strCategory);
    }

    $('#categoryRow').html(HTMLCategories);
    

    // $('.categoryItem').hover(function(){
        // if($('.categoryHover').innerheight == 0){
        //     $(this).animate({'transform' : 'translateY(0)'});
        // }
        // else {
        //     $(this).css({'transform' : 'translateY(100%)'});
            // $(this).slideDown(1000);
        // }
        // $('.categoryHover').slideToggle();
    // })


    // $('.categoryItem').hover(function(){
    //     if($('.categoryHover').innerwidth()==0){
    //         $(this).slideUp();
    //     }
    //     }
        // console.log("Hover");
        // $('.categoryHover').slideToggle();
    // })
    // console.log(HTMLCategories);

displayCategoryMeals();
}

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
            // $('#categoryRow').animate({left : "500px" },1000);
        }
    
    
    
        // $('.sidebar').animate({left : "200px" },1000);
        console.log("Clicked");
    })
}



// function




