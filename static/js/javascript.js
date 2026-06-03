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