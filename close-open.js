var submitform = document.getElementById('clickbutton');

var selectbut = document.getElementById('select-options');


submitform.addEventListener('click', selectFunction);

function selectFunction(){

    if(selectbut.value == 'open' || selectbut.value == 'closed'){
        
        document.querySelector('.output-html').innerHTML += '<h1>We are ' + selectbut.value+ '</h1>'
    }
    else{
        alert('Please select dropdown values')
    }

 
}