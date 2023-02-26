window.onload = function () {
    const sortBtn = document.getElementById("sort");
    sortBtn.addEventListener("click", function() {
        let nums = [];
        for (let i = 0; i < 10; i++) {
          let num = prompt(`Enter number ${i + 1}:`);
          nums.push(num);
        }
        const sorted_numbers=mergeSortTopDown(nums)
        alert("here's your sorted numbers:"+sorted_numbers)
      });

    
      const checkbtn =document.getElementById("check-button")
      const showresult=document.getElementById("result")
      checkbtn.addEventListener("click",function(){
        const userinput=document.getElementById("input")
        const pal=palindrome(userinput.value)
        if (pal){
            showresult.innerHTML="True it is palindrome"
        }
        else{
            showresult.innerHTML="No it's not a palindrome"
        }
      })
      
   
    const fullname = document.getElementById("fullname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");
    const submit = document.querySelector(".btn button");
  
    function passwordvalidation(password) {
      const exp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return exp.test(password);
    }
  
    function emailvalidation(email) {
      const exp = /^[^-\s@]+@[^-\s@]+\.[^-\s@]+$/;
      return exp.test(email);
    }
  
    submit.addEventListener("click", (e) => {
      if (!passwordvalidation(password.value)) {
        alert("password must contain: eight characters,one upper case letter,special characters");
        return;
      }
  
      if (!emailvalidation(email.value)) {
        alert("email should contain @,no dashes,dot after @");
        return;
      }
  
      const userdata = {
        Fullname: fullname.value,
        Username: username.value,
        Email: email.value,
        Password: password.value,
        Confirm: confirm.value,
      };
      console.log(userdata)
      window.location.href = "user.html";
    });

    function mergeSortTopDown(nums) {
        if(nums.length <= 1) {
            return nums
        }
    
        const middle = Math.floor(nums.length / 2);
        const left = nums.slice(0, middle);
        const right = nums.slice(middle);
    
        return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
    }
    
    function mergeTopDown(left, right) {
        const nums = [];
    
        while (left.length && right.length) {
            if(left[0]< right[0]) {
                nums.push(left.shift());
            } else {
                nums.push(right.shift());
            }
        }
    
        return nums.concat(left.slice()).concat(right.slice());
    }
    
      function palindrome(str){
      return palindrome_helper(str,0,str.length-1);
      }
    function palindrome_helper(str,start,end){
        if(start>=end) return true;
        if(str.charAt(start)!==str.charAt(end)) return false;
        return palindrome_helper(str,start+1,end-1)
    }




  
    document.addEventListener("DOMContentLoaded", function (event) {
      const image = document.getElementById("img");
      image.classList.add("animated-image");
    });

    


  
 
    
  };
 