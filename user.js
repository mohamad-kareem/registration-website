window.onload = function () {
  let showip=document.getElementById("input6")
    let getip=document.getElementById("check-button6")
    getip.addEventListener("click",function(){
      fetch("https://api.ipify.org")
    .then((res)=>res.text())
    .then((ip)=>{
      showip.value=ip;
    })
    })

    const evenipbtn=document.getElementById("check-button7")
    const showtheevenresult=document.getElementById("result6")
    evenipbtn.addEventListener("click",function(){
      const extractednum=extractonlynums(showip.value)
    const evenresult=sumevennums(extractednum)
    showtheevenresult.innerHTML= " "+"The sum of even numbers is :"+" "+evenresult

    })

    
    function extractonlynums(onlynums){
      let num=[]
      let temporary=""
      for(let i=0;i<onlynums.length;i++){
        if(onlynums[i]!="."){
          temporary+=onlynums[i];
        }
        else{
          num.push(parseInt(temporary));
          temporary="";
        }
      }
      num.push(parseInt(temporary))
      return num

    }

    function sumevennums(extractednum){
      let sum=0;
      for(let i=0;i<extractednum.length;i++){
        if(extractednum[i]%2===0){
          sum+=extractednum[i];
        }
      }
      return sum
    }






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


      const showresult3=document.getElementById("result3")
      const checkbtnbirthday=document.getElementById("check-button3")
      const birthdate=document.getElementById("input3")
      checkbtnbirthday.addEventListener("click",function(){
        const checkresult=isPrime(Number(birthdate.value));
        if(checkresult){
          showresult3.innerHTML="congrats your birthday is prime"
        }
        else{
          showresult3.innerHTML="Nahh your birthday is not prime"
        }
      })


      function isPrime(num) {
        if (num<=1){
          return false;
        }
          for(var i=2; i<=Math.sqrt(num); i++) {
              if(num % i == 0) {
                  return false;
              }
          }
          return true;
      }




      const showresult4=document.getElementById("result4")
      const checkbtnreverse=document.getElementById("check-button4")
      const stringtoreverse=document.getElementById("input4")
      checkbtnreverse.addEventListener("click",function(){
        reversedresult=reverseString(stringtoreverse.value);
        showresult4.innerHTML=(reversedresult)
      })
        function reverseString(str) {

        var chars = str.split('');
        
        var reversedChars = chars.reverse();
        var reversedStr = reversedChars.join('');
        return reversedStr;
      }




      const showresult5=document.getElementById("result5")
      const checkbtnpig=document.getElementById("check-button5")
      const stringtopig=document.getElementById("input5")
      checkbtnpig.addEventListener("click",function(){
        pigresult=piglatin(stringtopig.value);
        showresult5.innerHTML=(pigresult)
      })
 
     //this code was taken from a youtube channel but i understand the code
      function piglatin(string){
        const vowels = ['a', 'e', 'i', 'o', 'u'];
         let consonants = '';
         let i = 0;
         while (!vowels.includes(string[i]) && i < string.length) {
        consonants += string[i];
        i++;
              }
       let newStr = string.slice(i) + consonants;
        newStr += 'ay';
       return newStr;
      }

  

    

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


  let confirmationbtn =document.getElementById("check-button8")
  let pos=document.getElementById("loc")
  confirmationbtn.addEventListener("click",function(){
      navigator.geolocation.getCurrentPosition(currentpostion)
  })


   function currentpostion(position){
    const latitude=position.coords.latitude;
    const logitude=position.coords.logitude;
    pos.innerHTML="latitude :"+ latitude+"---"+"logitude :"+logitude;

   }


   document.addEventListener("DOMContentLoaded", function() {
    const veiw = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          alert("this section will show your current location");
          veiw.unobserve(entry.target);
        }
      }
    });
    const alertsection = document.getElementById("alert-location");
    veiw.observe(alertsection);
  });

   let to_the_top=document.getElementById("top")
   to_the_top.addEventListener("click",function(){
    window.scrollTo({top:0,behavior:"smooth"});
   })







    document.addEventListener("DOMContentLoaded", function (event) {
      const image = document.getElementById("img");
      image.classList.add("animated-image");
    });
    
  };
 