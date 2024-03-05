document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start").addEventListener("click", function() {
        getRandomInt();
        checkAccelerate();
        const carA=document.getElementById("carA").style;
        carA.transition=`left ${velocity1}s ${style}`;
        carA.position="relative";
        carA.left="100%";
        checkAccelerate();
        const carB=document.getElementById("carB").style;
        carB.transition=`left ${velocity2}s ${style}`;
        carB.position="relative";
        carB.left="100%";
        checkAccelerate();
        const carC=document.getElementById("carC").style;
        carC.transition=`left ${velocity3}s ${style}`;
        carC.position="relative";
        carC.left="100%";
        checkAccelerate();
        const carD=document.getElementById("carD").style;
        carD.transition=`left ${velocity4}s ${style}`;
        carD.position="relative";
        carD.left="100%";
    })

    document.getElementById("reset").addEventListener("click", function() {
        const carA1=document.getElementById("carA").style;
        carA1.transitionDuration="0s";
        carA1.left="0%";

        const carB1=document.getElementById("carB").style;
        carB1.transitionDuration="0s";
        carB1.left="0%";

        const carC1=document.getElementById("carC").style;
        carC1.transitionDuration="0s";
        carC1.left="0%";

        const carD1=document.getElementById("carD").style;
        carD1.transitionDuration="0s";
        carD1.left="0%";
    })

    let velocity1;
    let velocity2;
    let velocity3;
    let velocity4;
    let mini;
    let winner;

    function getRandomInt(min, max) {
        do{
            min = Math.ceil(10);
            max = Math.floor(20);
            velocity1 = (Math.floor(Math.random() * (max - min)) + min);
            velocity2 = (Math.floor(Math.random() * (max - min)) + min);
            velocity3 = (Math.floor(Math.random() * (max - min)) + min);
            velocity4 = (Math.floor(Math.random() * (max - min)) + min);
            console.log("car1: " + velocity1 + "s", "car2: " + velocity2 + "s", "car3: " + velocity3 + "s", "car4: " + velocity4 + "s");
        }
        while(velocity1 == velocity2 || velocity1 == velocity3 || velocity1 == velocity4 || velocity2 == velocity3 || velocity2 == velocity4 || velocity3 == velocity4);

        mini = Math.min(velocity1, velocity2, velocity3, velocity4);
        
        if(mini == velocity1){
            winner = "yellow old car";
        }
        else if(mini == velocity2){
            winner = "red new car";
        }
        else if(mini == velocity3){
            winner = "yellow new car";
        }
        else{
            winner = "blue new car";
        }
        console.log("Winner: " + winner);

        function WinnerInfo(){
            let winner_info = document.getElementById("winner");
            winner_info.innerText = `The winner is ${winner}!`;
                winnerDiv = document.querySelector(".reset");
                winnerDiv.addEventListener("click", e => {
                    if(e.target.classList.contains){
                        winner_info.remove();
                    }
                })
        }
        setTimeout(WinnerInfo, mini*1000);
    }
    
    let acc;
    function accelerate(){
        min = Math.ceil(1);
        max = Math.floor(5);
        acc = (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    let style;
    function checkAccelerate(){
       accelerate();
        if(acc === 1){
            style = "ease";
        }
        else if(acc === 2){
            style = "ease-in";
        }
        else if(acc === 3){
            style = "ease-in-out";
        }
        else if(acc === 4){
            style = "ease-out";
        }
        else if(acc === 5){
            style = "linear";
        }
        console.log("style: " + style);
    }
})