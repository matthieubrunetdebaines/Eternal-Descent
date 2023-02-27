const menuHamburger = document.querySelector("#divSpanBurger")
        const navLinks = document.querySelector("#navbar")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile_menu')
        })