const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressEl = document.querySelector(".progress-bar-front");

const StepsEl = document.querySelectorAll(".step");


let currenChecked = 1;

nextEl.addEventListener("click", ()=>{
     currenChecked++;
     if(currenChecked > StepsEl.length){
        currenChecked = StepsEl.length;
     }
   
     updateStepProgress();
});

prevEl.addEventListener("click", ()=>{
    currenChecked--;
    if(currenChecked < 1){
       currenChecked = 1;
    }
  
    updateStepProgress();
});



function updateStepProgress(){
    StepsEl.forEach((StepEl, idx) => {
        if(idx < currenChecked){
            StepEl.classList.add("checked");
           StepEl.innerHTML = `
           <i class="fa-solid fa-check"></i>
           <small>${idx === 0 ? "Start" : idx === StepsEl.length - 1 ? "Final" : "Step " + idx}</small>
           `;
        }else {
            StepEl.classList.remove("checked");
            StepEl.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
            `
            
        }
    });
    const checkedNumber = document.querySelectorAll(".checked");

    progressEl.style.width = ((checkedNumber - 1) / (StepsEl.length)) * 100 + "%";
};
