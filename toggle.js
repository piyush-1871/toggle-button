var toggled=false;
function toggle(){
    toggled = !toggled;
    if(toggled==false){
        $('.toggle-slider').css({
            backgroundColor:"black",
            left:"0rem",
        })
        $('body').css({
            backgroundColor:"lightgray"
        })
        $('.text').css({
            color:"black"
        })
        $('.toggle-container').css({
            backgroundColor:"white",
            border:"2px solid black"
        }) 
        $('.text').text("Light Mode") ;


    }else if(toggled == true){
        $('.toggle-slider').css({
            backgroundColor:"white",
            left:"4rem",
        })
        $('body').css({
            backgroundColor:"black"
        })
        $('.text').css({
            color:"white",
        })
        $('.toggle-container').css({
            backgroundColor:"black",
            border:"2px solid white"
        })
        $('.text').text("Dark Mode") ;
    }
    // console.log(count);
    
}

$('.toggle-slider').on('click',toggle);

