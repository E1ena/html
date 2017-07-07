(function (global){
    'use strict';

    document.getElementById('requestForm__button').onclick= function () {
        var form = document.getElementById('reqF');    
        var elems = form.elements;         
        ValidMail(elems.email.value, elems.email.parentNode);
        ValidName(elems.fio.value, elems.fio.parentNode);
        ValidCountry(elems.country.value, elems.country.parentNode);
        ValidCheckbox(elems.checkbx.checked, elems.checkbx.parentNode);
    }

    function ValidMail(value, parentNode) {
        resetError(parentNode, true);
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        var valid = re.test(value);
        if (!valid) { 
            showError(parentNode, 'Enter correct E-Mail', true );
        };
    };
    function ValidName(value, parentNode) {
        resetError(parentNode, true);
        var re = /[a-zA-Zа-яА-Я]+/i;
        var valid = re.test(value);
        if (!valid) { 
            showError(parentNode, 'Enter correct Name', true );
        };
    };
    function ValidCountry(value, parentNode) {
        resetError(parentNode, true);
        if (value=='Select your country') { 
            showError(parentNode, 'Choose country', true );
        };
    };
    function ValidCheckbox(value, parentNode) {
        resetError(parentNode);
        if (!value) { 
            showError(parentNode, 'You must check it' );
        } else resetError(parentNode);
    };

    function showError(container, errorMessage, border) {
        container.className = 'error col-xs-12 col-sm-12 col-12 col-lg-12';
        var msgElem = document.createElement('div');
        msgElem.className = 'error-message';
        msgElem.innerHTML = errorMessage;      
        container.appendChild(msgElem);
        if (border) container.childNodes[1].style.border = '0.2rem solid #bb4444';    
    };

    function resetError(container, border) {
        container.className = '';
        console.log (container)
        if (container.lastChild.className == 'error-message') {
            container.style.border = 'none';             
            container.removeChild(container.lastChild);
            if (border) container.childNodes[1].style.border = '0.2rem solid #4488bb'; 
        };
    };


}(window));