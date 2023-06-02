document.addEventListener('DOMContentLoaded', function(){

    // dropdown
    const dropDownBtn = document.querySelector('.drop__down-icone');
    const dropDownIcone = document.querySelector('.nav-icon');
    
    dropDownBtn.addEventListener('click', function(){

        dropDownIcone.classList.toggle('nav-icon--active');

    });
});