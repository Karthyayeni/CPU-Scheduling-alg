class Process{
    constructor(name, burstTime=0, arrivalTime=0, priority=0, passedBurstTime=0, firstCycle=true, currentlyExecuting, completed=false, waitingNow=false, waitingTime=0, turnAroundTime=0, startAt, finishAt){
        this.name=name;
        this.burstTime=burstTime;
        this.arrivalTime=arrivalTime;
        this.completed=completed;
        this.waitingNow=waitingNow;
        this.waitingTime=waitingTime;
        this.turnAroundTime=turnAroundTime;
        this.startAt=startAt;
        this.finishAt=finishAt;
        this.priority=priority;
        this.firstCycle=firstCycle;
    }
}
