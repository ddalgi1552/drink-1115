let count= 0 /* 클릭 수를 카운트하기 위한 변수 */
let t= 0 /* 타이머를 올리기 위한 변수 */
let state = 1


/*timer*/
let interval = setInterval(function(){
    t++
    score.innerHTML=`<h2>${t}</h2>`
  if(t>=10){
    state=-1
    alert("아이구, 너무 느려요. 사실은 소주 마시고싶어서 그랬죠?")
    clearInterval(interval)
    reload()
    
  }

}, 1000)


/*sojuclick game*/
let soju= document.getElementById("soju")
let score= document.getElementById("score")
soju.addEventListener('click', Sojubreaking)
function Sojubreaking(){
  if(state==1){
    count ++;
    console.log(count);
    score.innerHTML=`<h2>${t}</h2>`
    if(count>=10 && count<20){
      console.log("10보다 많이 클릭함")
      document.getElementById("soju").src="./소주깨기3.png"
    }
    else if(count>20 && count<=30){
      console.log("20보다 많이 클릭함")
      document.getElementById("soju").src="./소주깨기3.png"
    }
    else if(count>30 && count<=40){
      console.log("30보다 많이 클릭함")
      document.getElementById("soju").src="./소주깨기2.png"
    }
    
    if(count==40){
      setTimeout(function(){
        document.getElementById("soju").src="./소주깨기1.png"
        clearInterval(interval)
        return
      }
      ,10)

      setTimeout(function(){
        alert("clear")
        next()}
      ,200)
    }



  }


}


  //nav bar button
  
  let backBtn = document.getElementById("backbtn")
  let homeBtn = document.getElementById("homebtn")
  let nextBtn = document.getElementById("nextbtn")
  
  
  function back(){
      location.href=('../4.day2/index.html');
  }
  
  function home(){
      location.href=('../2.메인페이지/index.html');
  }
  
  function next(){
      location.href=('../7.day5/index.html');
  }
  
  function reload(){
    location.href=('../5.day3/index.html');
}

  
