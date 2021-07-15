const images = document.querySelectorAll(".carousel");
      let i = 0;

      setInterval(function(){
        myFunctiongoForward()
        
        }, 2000);

        

      
      setInterval(myFunctiongoForward, 2000); 
      var myFunctiongoBack = function(){//works
        if(i != 0 ){
          images[i].style.display = 'none';
          images[i-1].style.display = 'block';
          i--;
        }
        else{
          images[i].style.display = 'none';
          images[images.length-1].style.display = 'block'; 
          i = images.length -1 ; //try it now!
        }
      }
        
    var myFunctiongoForward = function(){//fixed
      if(i != images.length-1){ 
        images[i].style.display = 'none';
        images[i+1].style.display = 'block';
        i++;
      }
      else{
        images[i].style.display = 'none';
        images[0].style.display = 'block';
        i = 0;
      }

      
    }

    document.addEventListener('keydown',logkey);
        function logkey(e){
          log.textContent += `${e.code}`;
        
          
          if(e.code === "ArrowRight"){
         
            myFunctiongoForward()
          }
          if(e.code === "ArrowLeft"){
          
            myFunctiongoBack()
          }
        }

