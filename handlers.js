function handleKeyUp(){
    numberOfProcesses.value = numberOfProcesses.value.replace(/\D/, "");
};

function handleSimulate(){
    simulate=true;
    answerArea.innerHTML=``;
    infoArea.innerHTML=``;
}

function handleNoSimulate(){
    simulate=false;
    answerArea.innerHTML=``;
    infoArea.innerHTML=``;
}

let hiddenFlag=true;

function handleChangeNames(){
    if(hiddenFlag){
        for(let i=1;i<=numberOfProcesses.value;i++){
            document.getElementById(`name${i}`).setAttribute('type', 'text');
        }
        hiddenFlag=false;
    } else {
        for(let i=1;i<=numberOfProcesses.value;i++){
            document.getElementById(`name${i}`).setAttribute('type', 'hidden');
        }
        hiddenFlag=true;
    }
    
}

function handleErrors(){
    for(let i=0;i<p.length;i++){
        if(p[i].burstTime<=0){
            invalidInputFlag=true;
        } else if(p[i].arrivalTime<0){
            invalidInputFlag=true;
        }
    };

    if(criteria.value==='RR'){
        try {
            quantum=Number(document.getElementById('quantum').value);
            warningArea.innerHTML=``;
        } catch (e) {
            invalidNoQuantum=true;
        }
        if(!quantum){invalidNoQuantum=true}
        else {invalidNoQuantum=false;}
    }
    if(invalidNoQuantum && invalidInputFlag){
        warningArea.innerHTML=`<h2>Please Enter Quantum value and Burst times to continue</h2>`;
        invalidNoQuantum=false;
        invalidInputFlag=false;
    } else if (invalidNoQuantum) {
        warningArea.innerHTML=`<h2>Please Enter Quantum value continue</h2>`;
        invalidNoQuantum=false;
    } else if (invalidInputFlag) {
        warningArea.innerHTML=`<h2>Please Enter Valid Burst/Arrival Times to continue</h2>`;
        invalidInputFlag=false;
    } else {
        warningArea.innerHTML=``;
    }
}

function changeSelectToFCFS(){
    criteria.selectedIndex = 0;
}

function changeSelectToSJF(){
    criteria.selectedIndex = 1;
}

function changeSelectToSJFpre(){
    criteria.selectedIndex = 2;
}

function changeSelectToPriority(){
    criteria.selectedIndex = 3;
}

function changeSelectToPrioritypre(){
    criteria.selectedIndex = 4;
}

function changeSelectToRR(){
    criteria.selectedIndex = 5;
}
