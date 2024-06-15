function firstComeFirstServed(){
    let clock=0;
    let completed=0, currentProcesses, currentProcess;

for(let i=0;i<p.length;i++){
    p[i].completed=false;
}

    p[0].startAt=p[0].arrivalTime;
    p[0].finishAt=p[0].arrivalTime+p[0].burstTime;
    p[0].completed=true;
    clock=p[0].finishAt;
    completed++;

    while(1){
        if(completed>=p.length){break;}
        currentProcesses=p.filter((pr)=>{
            return pr.arrivalTime<=clock && pr.completed===false;
        });
        if(currentProcesses.length===0) {clock++; continue;}

        currentProcess=currentProcesses[0];
        for(let i=0;i<currentProcesses.length;i++){
            if (currentProcesses[i].arrivalTime<currentProcess.arrivalTime){
                currentProcess=currentProcesses[i];
            }
        }
        for(let i=0;i<currentProcesses.length;i++){
            if (currentProcesses[i].arrivalTime===currentProcess.arrivalTime&&currentProcesses[i].burstTime<currentProcess.burstTime){
                currentProcess=currentProcesses[i];
            }
        }
        currentProcess.startAt=clock;
        currentProcess.finishAt=clock+currentProcess.burstTime;
        currentProcess.completed=true;
        completed++;
        clock=currentProcess.finishAt;

        for(let i=0;i<p.length;i++){
            if (p[i].name===currentProcess.name){
                p[i]=currentProcess;
            }
        }
    }

    finalize(p);
};
