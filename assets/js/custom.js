const main = document.querySelector(".main");
const hamburger = document.querySelector(".hamburger");
const main_sidebar = document.querySelector(".main_sidebar");
const links_name = document.querySelectorAll(".sidebar_links li .links_name");
const gradient = document.querySelector(".main .main_gradient");
            


$(document).ready(function(){


    function responsiveMenu() {

        // mevcut ekran genişliğini alalım
        width = $(window).width();
    
        
        if(width<=1200){
            $(".main_sidebar").css("width","0");
            $("header .main_sidebar").removeClass("open");
            hamburger.addEventListener('click', ()=>{
                main_sidebar.classList.toggle("open-mobile");
                gradient.classList.toggle("show");
            });
        }
        else{
            $("header div").removeClass("open-mobile");
            $(".main_sidebar").css("width","250");
            hamburger.addEventListener('click', ()=>{

                main_sidebar.classList.toggle("open");
                main.classList.toggle("main-big");
                links_name.forEach(link => {
                    link.classList.toggle("fade");
                });
            });
        }

      }
    
      // sayfa açıldığı zaman fonksiyonu çalıştıralım.
      responsiveMenu();
      
      // ekran genişliği değiştiğinde fonksiyonu çalıştıralım.
      $(window).resize(responsiveMenu);

})



$(document).ready(function(){
    $('.account').click(function(){
        console.log("deneme");
        if($('.account-dropdown').css('visibility') == 'visible'){
            $('.account-dropdown').animate({
            maxHeight:'0',
            opacity:'0',
        },850,function(){
            $(this).css('visibility','hidden')
        })
        }else{
            $('.account-dropdown').css('visibility','visible').animate({
                maxHeight:'425px',
                opacity:'1',
            },850)
            if($('.notification-dropdown').css('visibility') == 'visible'){
                $('.notification-dropdown').css('visibility','hidden').animate({
                    maxHeight:'0',
                    opacity:'0',
                },850) 
            }
            else if($('.messages-dropdown').css('visibility') == 'visible'){
                $('.messages-dropdown').css('visibility','hidden').animate({
                    maxHeight:'0',
                    opacity:'0',
                },850) 
            }
        }
    })
})
$(document).ready(function(){
    $('.messages').click(function(){
        if($('.messages-dropdown').css('visibility') == 'visible'){
            $('.messages-dropdown').animate({
            maxHeight:'0',
            opacity:'0',
        },850,function(){
            $(this).css('visibility','hidden')
        })
        }else{
            $('.messages-dropdown').css('visibility','visible').animate({
                maxHeight:'755px',
                opacity:'1',
            },850)
            
            if($('.notification-dropdown').css('visibility') == 'visible'){
                $('.notification-dropdown').css('visibility','hidden').animate({
                    maxHeight:'0',
                    opacity:'0',
                },850) 
            }
            else if($('.account-dropdown').css('visibility') == 'visible'){
                $('.account-dropdown').css('visibility','hidden').animate({
                    maxHeight:'0',
                    opacity:'0',
                },850) 
            }
        }
    })
})
$(document).ready(function(){
    $('.notifications').click(function(){
        if($('.notification-dropdown').css('visibility') == 'visible'){
            
            $('.notification-dropdown').animate({
            maxHeight:'0',
            opacity:'0',
        },850,function(){
            $(this).css('visibility','hidden')
        })
        }else{

            $('.notification-dropdown').css('visibility','visible').animate({
                maxHeight:'655px',
                opacity:'1',
            },850)


            if($('.messages-dropdown').css('visibility') == 'visible'){
                $('.messages-dropdown').css('visibility','hidden').animate({
                    maxHeight:'0',
                    opacity:'0',
                },850) 
            }
            else if($('.account-dropdown').css('visibility') == 'visible'){
                $('.account-dropdown').css('visibility','hidden').animate({
                    maxHeight:'0',
                    opacity:'0',
                },850) 
            }
        }
    })
})

const play = document.querySelectorAll(".play");
const video = document.querySelectorAll(".video_player video");
const video_front = document.querySelectorAll(".video-front");

$('.play').click(function(){
    console.log("a");

    $('.video_player video').css("display","block");
    $('.video-front').css("display","none");
 });


