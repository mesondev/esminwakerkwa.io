function showTab(tabId, element){

    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");
    element.classList.add("active");
}

// Mobile menu toggle and behaviour
document.addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if(menuBtn && navMenu){
        menuBtn.addEventListener('click', function(e){
            e.stopPropagation();
            navMenu.classList.toggle('open');
        });

        // close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', function(){
                navMenu.classList.remove('open');
            });
        });

        // close when clicking outside
        document.addEventListener('click', function(e){
            if(navMenu.classList.contains('open')){
                if(!navMenu.contains(e.target) && !menuBtn.contains(e.target)){
                    navMenu.classList.remove('open');
                }
            }
        });
    }

    // Smooth internal link scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e){
            const href = this.getAttribute('href');
            if(href && href.length > 1){
                e.preventDefault();
                const target = document.querySelector(href);
                if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
            }
        });
    });
});