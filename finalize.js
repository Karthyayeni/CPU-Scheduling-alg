function finalize(p=[],executionQueueNames='',executionQueueDurations=''){
    averageWaitingTime=0;
    averageTurnAroundtime=0;
    for(let i=0;i<numberOfProcesses.value;i++){
        p[i].turnAroundTime=p[i].finishAt-p[i].arrivalTime;
        p[i].waitingTime=p[i].turnAroundTime-p[i].burstTime;

        averageWaitingTime+=p[i].waitingTime;
        averageTurnAroundtime+=p[i].turnAroundTime;
    }

    averageWaitingTime=averageWaitingTime/numberOfProcesses.value;
    averageTurnAroundtime=averageTurnAroundtime/numberOfProcesses.value;
    if(executionQueueNames===''){
        p.sort(function(a, b){return a.startAt - b.startAt});
        for(let i=0;i<numberOfProcesses.value;i++){
            executionQueueNames+=p[i].name+' ';
        }
    }
    if(executionQueueDurations===''){
        p.sort(function(a, b){return a.startAt - b.startAt});
        for(let i=0;i<numberOfProcesses.value;i++){
            executionQueueDurations+=(p[i].burstTime).toString()+' ';
        }
    }
    console.log('P from finalize', p);
    console.log('from finalize', executionQueueNames);
    console.log('from finalize', executionQueueDurations);
    pInOrder=p;
    pInOrder.sort((a,b)=>{
        return a.startAt-b.startAt;
        });
    answerArea.innerHTML='<br/>';
    for(let i=0;i<numberOfProcesses.value;i++){
        answerArea.innerHTML+=`
        Process Name: ${pInOrder[i].name} ****
        Starts At: ${pInOrder[i].startAt} ****
        Finishes At: ${pInOrder[i].finishAt} ****
        Waiting Time: ${pInOrder[i].waitingTime} ****
        TurnAround Time: ${pInOrder[i].turnAroundTime}
        <br/><br/>
        `;
    }
    answerArea.innerHTML+=`
        Average Waiting Time : ${averageWaitingTime}
        <br/> Average Turnaround Time : ${averageTurnAroundtime}
        <br/> ${executionQueueNames}
        <br/> ${executionQueueDurations}
    `;

    draw(p,executionQueueNames,executionQueueDurations);
}
