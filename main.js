let form = document.getElementById('form');
let fname = document.getElementById('first-name');
let lname = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let submit = document.querySelector('.btn');

/* let errorIcon = document.createElement('i');
errorIcon.innerHTML = ('<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>');
//console.log(fname.firstElementChild.placeholder);

fname.firstElementChild.type = "icon";
fname.firstElementChild.placeholder = errorIcon; */

//console.log(fname.firstElementChild.value);
let ok = 0;

submit.addEventListener('click',(e) => {

    // first name validitaion
    if(fname.firstElementChild.value === ''){
        fname.firstElementChild.classList.add("error");
        fname.lastElementChild.innerHTML = `First Name cannot be empty`;
    }
    if(fname.firstElementChild.classList.contains("error"))
        fname.firstElementChild.setAttribute("placeholder",'');
    if(fname.firstElementChild.value !== ''){
        fname.firstElementChild.classList.remove("error"),ok++,fname.lastElementChild.innerHTML = '';
    }


    // last name validiation
    if(lname.firstElementChild.value === ''){
        lname.firstElementChild.classList.add("error");
        lname.lastElementChild.innerHTML = `Last Name cannot be empty`;
    }
    if(lname.firstElementChild.classList.contains("error"))
        lname.firstElementChild.setAttribute("placeholder",'');
    if(lname.firstElementChild.value !== ''){
        lname.firstElementChild.classList.remove("error"),ok++,lname.lastElementChild.innerHTML = '';
    }


    // password validation
    if(password.firstElementChild.value === ''){
        password.firstElementChild.classList.add("error");
        password.lastElementChild.innerHTML = `Password cannot be empty`;
    }
    if(password.firstElementChild.classList.contains("error"))
    password.firstElementChild.setAttribute("placeholder",'');
    if(password.firstElementChild.value !== ''){
        password.firstElementChild.classList.remove("error"),ok++,password.lastElementChild.innerHTML = '';
    }

    if(!ValidateEmail(email.firstElementChild.value)){
        email.firstElementChild.classList.add("error");
        email.firstElementChild.value = "";
        email.lastElementChild.innerHTML = `Looks like this is not an email`;
    }
    else{
        email.firstElementChild.classList.remove("error"),ok++,email.lastElementChild.innerHTML = '';
    }
    if(email.firstElementChild.classList.contains("error"))
        email.firstElementChild.setAttribute("placeholder",'email@example/com');
    
    if(ok === 4){
        console.log("dsmv");
        email.firstElementChild.value = "";
        password.firstElementChild.value = "";
        fname.firstElementChild.value = "";
        lname.firstElementChild.value = "";
    }

}); 

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}



