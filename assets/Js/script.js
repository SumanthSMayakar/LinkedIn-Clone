let profileMenu = document.getElementById('profileMenu')

function toggleMenu(){
    profileMenu.classList.toggle('open-menu');
}

let sideActivity = document.getElementById('sidebarActivity');
let moreLink = document.getElementById('showMoreLink');

function toggleActivity(){
    sideActivity.classList.toggle("open-activity");

    if(sideActivity.classList.contains('open-activity')){
        moreLink.innerHTML = "Show Less <b>-</b>";
    }else{
        moreLink.innerHTML = "Show More <b>+</b>";
    }
}