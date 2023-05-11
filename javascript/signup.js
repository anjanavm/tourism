var em=document.getElementById("exampleInputEmail1");
var pswd=document.getElementById("exampleInputPassword1");
var cp=document.getElementById("exampleInputPassword2");
var phone=document.getElementById("mobilenumber");
var e1=document.getElementById("error1");
var e2=document.getElementById("error2");
var e3=document.getElementById("error3");
var e4=document.getElementById("error4");

function verify(){
   

    if (em.value ==''){
        e1.innerText='This field cannot be Empty';
        e1.style.color='red';
        return true;
        
    }
    
    else if(em.value !=''){
        let regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.)([a-z]{2,3})?$/

        if (regex.test(em.value)){
             return true;

    }

        else{
            e1.innerText='Enter a valid mail ID' ;
            e1.style.color='red';
            return false;
    }
    }
} 

function validate(){
    
    let r=/^([A-Z]+)([a-z]+)(?=.*[!#-_.& "])$/
    
    if (r.test(pswd.value) && (pswd.value.length >= 8)){
       
        
        return true;
       
    }
    else{
            if(pswd.value==''){
                e2.innerText='This field cannot be Empty';
                e2.style.color='red';
    
        }
            else{

        
            e2.innerText='Incorrect password' ;
            e2.style.color='red';
            return false;
        }
}
}
function confirm(){
if (cp.value ==''){
    e3.innerText='Enter confirmation password'
    e3.style.color='red';
}
else if (pswd.value == cp.value){
        
        return true;
}
else{
   e3.innerText="Enter correct password";
   e3.style.color='red';
    return false;
}
}



function strength(){
    let strongr = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    let weakr=new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})) |((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))');
    
    if (strongr.test(pswd.value)){
        e2.innerText='Strong Password';
        e2.style.backgroundColor='green';
        e2.style.color='black';
        return true;

    }
   else if(weakr.test(pswd.value)){
        e2.innerText='Weak Password';
        e2.style.backgroundColor='orange';
        e2.style.color='black';
        return true;
   }
   else{
        e2.innerText='Poor Password';
        e2.style.backgroundColor='red';
        e2.style.color='black';
        return false;
   }
}


function number(){
   
let p= /^([0-9])|| ([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if ((p.test(phone)) && (phone.value.length == 10)){

          
            return true;
        }
else{
            e4.innerText="Check your mobile number";
            e4.style.color='red';
            return false;
        }

    }
    
   

    function validateForm(){
    var val=true;
    val &= verify();
    val &= validate();
    val &= confirm();
    val &=number();
    val &=strength();
 return val;
}