
let bannersList = [];

function createNewBanner(elementID, redirectLink, bannerImg, isOnLoad = false){
    let container = document.getElementById(elementID);
    let img = document.createElement("img");
    img.src = bannerImg;
    img.onclick = function(){window.location.href = redirectLink;}
    container.appendChild(img);

    if(!isOnLoad) 
        bannersList.push({bannerImg: bannerImg, redirectLink: redirectLink});
    
    resetAllFields();
}

function resetAllFields(){
    document.getElementById('redirectLink').value = '';
    document.getElementById('bannerImg').value = '';
}

function handleSave(){
    localStorage.setItem('banners-data', JSON.stringify(bannersList));
}

function handleClear(){ //change name
    let msg = 'Are you sure you want to clear all images?'
    if (confirm(msg) == true) {
        document.getElementById('banners-list').innerHTML = "";
        localStorage.removeItem('banners-data');
        bannersList.length = 0; 
    }
}

function onLoad(){
    let savedData = JSON.parse(localStorage.getItem('banners-data'))
    if(savedData){
        if (savedData.length != 0){
            bannersList = savedData; //intialize bannersList to the saved localStorage
            savedData.forEach(banner => {
                createNewBanner('banners-list', banner.redirectLink, banner.bannerImg, true);
            });
        }
    }
}
