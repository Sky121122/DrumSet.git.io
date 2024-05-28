let crashEl = document.getElementById("crash");
let kickEl = document.getElementById("kick");
let snareEl = document.getElementById("snare");
let tomEl = document.getElementById("tom");
let starEl = document.getElementById("star");
let circuitEl = document.getElementById("circuit");

// ========= audio file ===== 
let crashPlay = document.getElementById("crashPlay");
let kickPlay = document.getElementById("kickPlay");
let snarePlay = document.getElementById("snarePlay");
let tomPlay = document.getElementById("tomPlay");
let starPlay = document.getElementById("starPlay");
let circuitPlay = document.getElementById("circuitPlay");

// =============== 
// ======= crash play ========== 
crashEl.addEventListener('click', function(){
    crashPlay.play();
})
// ======== kick play ======
kickEl.addEventListener('click',function(){
    kickPlay.play();
})
// ======== sanre play ========= 
snareEl.addEventListener('click', function(){
    snarePlay.play();
})
// ========= tom play ========= 
tomEl.addEventListener('click', function(){
    tomPlay.play();
})
// ======== star play ========== 
starEl.addEventListener('click', function(){
    starPlay.play();
})
// ========== circuit play ========== 
circuitEl.addEventListener('click', function(){
    circuitPlay.play();
})


// ============= beast mode ========== 
let containerEl = document.getElementById("container");
let headEl = document.getElementById("heading");
let beastConatinerEl = document.getElementById("beast-container");
let beastOnBtn = document.getElementById("beastOn");

// ========= audio file ===== 
let crashBeast = document.getElementById("crashBeast");
let kickBeast = document.getElementById("kickBeast");
let snareBeast = document.getElementById("snareBeast");
let tomBeast = document.getElementById("tomBeast");
let starBeast = document.getElementById("starBeast");
let circuitBeast = document.getElementById("circuitBeast");

// ======= beast button ======== 

let beastCrashEl = document.getElementById("beastCrash");
let beastKickEl = document.getElementById("beastKick");
let beastsnareEl = document.getElementById("beastSnare");
let beastTomEl = document.getElementById("beastTom");
let beastStarEl = document.getElementById("beastStar");
let beastCircuitEl = document.getElementById("beastCircuit"); 

// ========= beat buttun function ========= 
    beastCrashEl.addEventListener('click', function(){
        crashBeast.play();
    })
    beastKickEl.addEventListener('click', function(){
        kickBeast.play();
    })
    beastsnareEl.addEventListener('click', function(){
        snareBeast.play();
    })
    beastTomEl.addEventListener('click', function(){
        tomBeast.play();
    })
    beastStarEl.addEventListener('click', function(){
        starBeast.play();
    })
    beastCircuitEl.addEventListener('click', function(){
        circuitBeast.play();
    })



// ========= beast button click function ====== 
let beastBtn = document.getElementById("beast");
beastBtn.addEventListener('click', function(){

   
    headEl.innerHTML = "Beast Drum";
    containerEl.style.display="none";

    beastConatinerEl.style.display="block";
})

// ========= beast on button function ======== 
beastOnBtn.addEventListener('click', function(){

   
    headEl.innerHTML = "Drum Set";
    containerEl.style.display="block";

    beastConatinerEl.style.display="none";
})