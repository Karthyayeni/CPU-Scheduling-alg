function draw(p=[],executionQueueNames,executionQueueDurations){
    let portionStyle;
    let fromToStyle;
    let currentProcess;

    answerArea.innerHTML=``;
    infoArea.innerHTML=``;

    for(let i=0;i<p.length;i++){
        infoArea.innerHTML+=`<h3 style="border:2px solid black;display:inline-block;padding:3px;">${p[i].name}</h3> <b>Waiting time:</b> ${p[i].waitingTime}, <b>Turnaround time:</b> ${p[i].turnAroundTime} </br>`;
    }
    infoArea.innerHTML+=`<b>Average waiting time:</b> ${averageWaitingTime}</br><b>Average turnaround time:</b> ${averageTurnAroundtime} </br>`;

    let portions=document.getElementsByClassName('portion');
    
    if(simulate){
        drawingCoreSimulation(executionQueueNames,executionQueueDurations);
        let i=0;
        submitButton.disabled=true;
        let dancer=setInterval(()=>{
                portions[i].style.animation="showMeSimulation 1s ease-in-out forwards";
                i++;
                if(i>=portions.length){
                    clearInterval(dancer);
                }
        },1000);

        let simulationTime=1000*(portions.length+1);

        setTimeout(()=>{
            submitButton.disabled=false;
        },simulationTime);

    } else {
        drawingCoreNoSimulation(executionQueueNames,executionQueueDurations);
        for(let i=0;i<portions.length;i++){
            portions[i].style.animation="showMe 1s forwards";
        }
    }

    infoArea.style.animation="showMe 1s forwards";

}