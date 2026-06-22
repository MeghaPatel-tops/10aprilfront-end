document.getElementById('regfrm').addEventListener('submit',function(e){
        e.preventDefault();
        
        let hobby = document.querySelectorAll('#hobby')
       console.log(hobby);
       
        let hbArray = [];
        count=0;
        hobby.forEach(element => {
             if(element.checked == true){
                 hbArray.push(element.value)
                count++;
             }
            
        });
        if(count==0){
            alert("please select your hobby")
        }
        hbArray = hbArray.join("-");
       
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let pwd = document.getElementById('pwd').value;
        let contact = document.getElementById('contact').value;
      
       

        if(username == ""){
            alert("Enter valid username");
            document.getElementById('username').focus();
            let p1=document.createElement('p');
            p1.style.color="red";
            p1.textContent="Enter valid Username";
            document.getElementById('uerror').appendChild(p1)
            return false;
        }
        //Password validation
        const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(pwd)){
            alert("Enter valid password")
        }
        //Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert("Enter valid email");
        }
        
          let user = {
            username:username,
            email:email,
            pwd:pwd,
            contact:contact,
            hobby:hbArray
        }
       

        if(localStorage.getItem('user')){
            let oldArray = JSON.parse(localStorage.getItem('user'));
            console.log(oldArray);
            oldArray.push(user);
            localStorage.setItem('user',JSON.stringify(oldArray));

        }
        else{
             let UserArray = [];
              UserArray.push(user)
               localStorage.setItem('user',JSON.stringify(UserArray));
        }
       
        window.location.href="userdata.html"
        
        
})

// document.getElementById('pwd').addEventListener('focus',(e)=>{
//     document.getElementById('pwderr').style.display="block"
    
// })
// document.getElementById('pwd').addEventListener('keyup',(e)=>{
//     document.getElementById('pwderr').style.display="block"
//     let val = e.target.value;
//     if(/^(?=.*[a-z])(?=.*[A-Z])/.test(val)){
//          document.getElementById('pwd-1').style.color="green"
//     }
//      if(/^(?=.*\d)/.test(val)){
//          document.getElementById('pwd-2').style.color="green"
//     }
//      if(/^(?=.*[@$!%*?&])/.test(val)){
//          document.getElementById('pwd-3').style.color="green"
//     }
//     if(/(?=.*[\W_]).{8,20}/.test(val)){
//          document.getElementById('pwd-4').style.color="green"
//     }
// })

    