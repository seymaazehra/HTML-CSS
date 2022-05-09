 src="./confetti.js"
   
      const start =() =>{
        setTimeout(function(){
          confetti.start();
        });
      };
      
     
      function myFunction() {
        alert('Kisisel Web Sayfama hoşgeldiniz. Tamam butonuna basın!');
      }
      
      function function2(){
        var result =confirm('Emin misiniz?');
        if(result==true){
          document.querySelector("#git");
          window.location.href="https://www.gedik.edu.tr/"
          
          
        }
    }
      
    function startTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
      setTimeout(startTime, 1000);
    }
    
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  
      return i;
    }
    const d = new Date();
document.getElementById("demo").innerHTML = d;
