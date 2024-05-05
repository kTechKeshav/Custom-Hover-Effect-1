let p = prompt("Enter your First Name : ");
            if(p === ''){
                  document.getElementById("Effect").innerHTML = "⭐";
            }else{
                  document.getElementById("Effect").innerHTML = p;
            }

const mainpage = document.querySelector("#main");
const crsr = document.querySelector("#cursor");

mainpage.addEventListener("mousemove", (dets)=>{
      crsr.style.left = dets.x + "px"
      crsr.style.top = dets.y + "px"
      crsr.style.width = dets.y + "px"
})

document.addEventListener("touchmove", (event) => {
      const touch = event.touches[0];
      crsr.style.left = touch.clientX + -80+ "px";
      crsr.style.top = touch.clientY + -120 + "px";
      // crsr.style.width = touch.clientY  + -touch.clientX + "px"; // Assuming this is intentional
      crsr.style.width = "160px";
      crsr.style.transition = "all .1s linear";
  });

