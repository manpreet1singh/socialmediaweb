//sidebar
const menuItems=document.querySelectorAll('.menu-item');
//remove active class for all
//messages
const messagesNotification=document.querySelector('#messages-notification');
const messages=document.querySelector('.messages');
const message=messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');
//theme
const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
const colorPallete=document.querySelectorAll('.choose-color span');
const Bg1=document.querySelector(".bg-1");
const Bg2=document.querySelector(".bg-2");
const Bg3=document.querySelector(".bg-3");
const changeActiveItem=()=>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}
menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id!=='notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        }
        else{
            document.querySelector('.notifications-popup').style.display='block'
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })

})
const searchMessage=()=>{
    const val=messageSearch.value.toLowerCase();
    message.forEach(chat=>{
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }
        else{
            chat.style.display='none';
        }
    }
        )
}
//search 
messageSearch.addEventListener('keyup',searchMessage);
// messages
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none'
    },2000);


}
)
// theme/display
const openThemeModal=()=>{
    themeModal.style.display='grid';
}
const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    } 
}
themeModal.addEventListener('click',closeThemeModal);
theme.addEventListener('click',openThemeModal);
 
//fonts
const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
             root.style.setProperty('----sticky-top-left','5.4rem');
             root.style.setProperty('----sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
            
        }
        else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-right','-35rem');
        }
        document.querySelector('html').style.fontSize=fontSize;

    })
    
}  )

// color

const changeActiveColor =()=>{
    colorPallete.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })

}


colorPallete.forEach(color=>{
color.addEventListener('click',()=>{
    let primary;
    changeActiveColor();
    color.classList.toggle('active');
    
    if(color.classList.contains('color-1')){
        primaryHue=252;
    }
    else if(color.classList.contains('color-2')){
        primaryHue=52;
    }
    else if(color.classList.contains('color-3')){
        primaryHue=352;
    }
    else if(color.classList.contains('color-4')){
        primaryHue=152;
    }
    else if(color.classList.contains('color-5')){
        primaryHue=202;
    }
    root.style.setProperty('--primary-color-hue',primaryHue);
})

})


// bakcgroud
let lightcolorLightness;
let whitecolorLightness;
let darkcolorLightness;

const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightcolorLightness);
    root.style.setProperty('--white-color-lightness',whitecolorLightness);
    root.style.setProperty('--dark-color-lightness',darkcolorLightness);
}

Bg1.addEventListener('click',()=>{
 

    Bg1.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
   
    window.location.reload();

})






Bg2.addEventListener('click',()=>{
    darkcolorLightness='95%';
    whitecolorLightness='20%';
    lightcolorLightness='15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

})
Bg3.addEventListener('click',()=>{
    darkcolorLightness='95%';
    whitecolorLightness='10%';
    lightcolorLightness='0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

})