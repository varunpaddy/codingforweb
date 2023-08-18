// DO NOT EDIT THIS JS FILE!

//get the popup elements:
const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const popupCover = document.getElementById("popupCover");



// show & hide popups:
function showPopup() {
    popup.style.display = "block";
    popupCover.style.display = "block";
    openPopup.setAttribute("onClick", "hidePopup()");
    localStorage.removeItem("D5E1closed");
}

function hidePopup() {
    popup.style.display = "none";
    popupCover.style.display = "none";
    openPopup.setAttribute("onClick", "showPopup()");   
    localStorage.setItem("D5E1closed", "Y");
}

function loadPopupState() {
    if (localStorage.getItem("D5E1closed")) { hidePopup(); }
}