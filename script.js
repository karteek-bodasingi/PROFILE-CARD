const theme = document.querySelector(':root');
const btns =  document.querySelectorAll('.btn');

btns. forEach(function(btn){

    btn.addEventListener("click",function(e){

        const  color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty("--theme-color","rebeccapurple");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color","skyblue");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color","orangered");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color","yellow");
        }
        else {
            theme.style.setProperty("--theme-color","green");
        }
    });
});