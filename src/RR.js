function RR(){
    let clock=p[0].arrivalTime;
    let completed=0;
    let temp;
    let flag;
    let executionQueueNames='';
    let executionQueueDurations='';

    for(let i=0;i<numberOfProcesses.value;i++){
        p[i].passedBurstTime=0;
        p[i].completed=false;
    }

    while(1){
        if (completed>=numberOfProcesses.value){
            break;
        }

        for(let i=0;i<numberOfProcesses.value;i++){

            if(!p[i].completed==true && p[i].arrivalTime<=clock){

                if(p[i].firstCycle){
                    p[i].startAt=clock;
                    p[i].firstCycle=false;
                }

                executionQueueNames+=p[i].name+' ';
                if(p[i].passedBurstTime+quantum<=p[i].burstTime) {
                    executionQueueDurations+=quantum.toString()+' ';
                    p[i].passedBurstTime+=quantum;
                    clock+=quantum;
                    if(p[i].passedBurstTime>=p[i].burstTime){
                        p[i].finishAt=clock;
                        p[i].completed=true;
                        completed++;
                    } 
                } else {
                    let temp=p[i].burstTime-p[i].passedBurstTime;
                    executionQueueDurations+=temp.toString()+' ';
                    p[i].passedBurstTime+=temp;
                    clock+=temp;
                    if(p[i].passedBurstTime>=p[i].burstTime){
                        p[i].finishAt=clock;
                        p[i].completed=true;
                        completed++;
                    } 
                } 
                    
                
            } else {
                counter=0;
                for(let j=i;counter<numberOfProcesses.value;counter++){
                    j=j%numberOfProcesses.value;
                    console.log('j is', j);
                    if(!p[j].completed==true && p[j].arrivalTime<=clock){
                        flag=j;
                        break;
                    }
                    j++;
                }
                if(flag>0){
                    i=flag-1;
                    flag=0;
                } else {
                    clock++;
                }
            }
        }

    }
    finalize(p,executionQueueNames,executionQueueDurations);
}
