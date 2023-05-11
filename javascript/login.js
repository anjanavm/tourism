var em=document.getElementById("exampleInputEmail1");
var pswd=document.getElementById("exampleInputPassword1");
var e1=document.getElementById("error1");
var e2=document.getElementById("error2");

function verify(){
   

    if (em.value ==''){
        e1.innerText='This field cannot be Empty';
        e1.style.color='red';
        
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
    
    let r=/^([A-Z]+)([a-z]+)(?=.*[!#-_.& "])/
    if (r.test(pswd.value) && (pswd.value.length >= 8)){
       alert("crrct")
        
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

function validateForm(){
    var val=true;
    val &= verify();
    val &= validate();
  return val;
}



