function drawingCoreSimulation(executionQueueNames,executionQueueDurations){

    let initialGap=false;

    for(let i=0;i<p.length;i++){
        p[i].firstTimeToBeExecuted=true;
    }

    executionQueueNames=executionQueueNames.split(' ');
    executionQueueNames.pop();
    executionQueueDurations=executionQueueDurations.split(' ').map((one)=>{return Number(one)});
    executionQueueDurations.pop();
    
    let haha;
    console.log(p);
    if(p[0].startAt===0) {haha =0;}
    else {
        initialGap=true;
        haha=p[0].startAt-0;
        portionStyle=`opacity:0;font-size:11px;text-align:center;padding-top:25px;height:70px;width:${haha*2}rem;margin:0;position:absolute;top:50px;left:0;background-color:#cccccc;border:2px solid black;opacity:0;`;
        
        if(haha-0<10) fromToStyle="font-weight:400;font-size:10px;";
        else fromToStyle="font-weight:400;font-size:8px;";

        answerArea.innerHTML+=`
        <div class="portion" style=${portionStyle}>
            <span style="font-weight:800; color:black">Idle<br/><span style=${fromToStyle}>0 to ${haha}</span></span>
        </div>
        <br/>
        `;
    }
    for(let i=0;i<executionQueueNames.length;i++){

        if(i>0)haha+=executionQueueDurations[i-1];
        currentProcess=p.filter((pr)=>{return pr.name===executionQueueNames[i]})[0];
        
        if(currentProcess.firstTimeToBeExecuted) {
            if(haha!=currentProcess.startAt) {
                
                portionStyle=`opacity:0;font-size:11px;text-align:center;padding-top:25px;height:70px;width:${(currentProcess.startAt-haha)*2}rem;margin:0;position:absolute;top:50px;left:${haha*2}rem;background-color:#cccccc;border:2px solid black;opacity:0;`;
                
                if(currentProcess.startAt-(haha-executionQueueDurations[i-1])<10) fromToStyle="font-weight:400;font-size:10px;";
                else fromToStyle="font-weight:400;font-size:8px;";

                if(i==0&&!initialGap) {
                    answerArea.innerHTML+=`
                    <div class="portion" style=${portionStyle}>
                        <span style="font-weight:800; color:black">Idle<br/><span style=${fromToStyle}>${haha-executionQueueDurations[i-1]} to ${currentProcess.startAt}</span></span>
                    </div>
                    <br/>
                    `;
                }
                else {
                    answerArea.innerHTML+=`
                    <div class="portion hmhm" style=${portionStyle}>
                        <span style="font-weight:800; color:black">Idle<br/><span style=${fromToStyle}>${haha-executionQueueDurations[i-1]} to ${currentProcess.startAt}</span></span>
                    </div>
                    <br/>
                    `;
                }
                haha-=executionQueueDurations[i-1];
                haha=currentProcess.startAt;
            }
        }
            
            currentProcess.firstTimeToBeExecuted=false;
                for(let i=0;i<p.length;i++){
                    if(p[i].name===currentProcess.name){
                        p[i].firstTimeToBeExecuted=currentProcess.firstTimeToBeExecuted;
                    }
                }
        
            portionStyle=`text-align:center;font-size:12px;padding-top:20px;height:70px;width:${executionQueueDurations[i]*2}rem;margin:0;position:absolute;top:50px;left:${haha*2}rem;background-color:#${Math.floor(100000 + Math.random() * 900000)};opacity:0`;
            
            if((haha+executionQueueDurations[i])-haha<10) fromToStyle="font-weight:400;font-size:10px;";
            else fromToStyle="font-weight:400;font-size:8px;";

            if(i==0&&!initialGap) {
                answerArea.innerHTML+=`
                <div class="portion" style=${portionStyle}>
                    <span style="font-weight:800;color:white">${executionQueueNames[i]}<br/><span style=${fromToStyle}>${haha} to ${haha+executionQueueDurations[i]}</span></span>
                </div><br/>
            `;
            }
            else {
                answerArea.innerHTML+=`
                <div class="portion hmhm" style=${portionStyle}>
                    <span style="font-weight:800;color:white">${executionQueueNames[i]}<br/><span style=${fromToStyle}>${haha} to ${haha+executionQueueDurations[i]}</span></span>
                </div><br/>
            `;
            }
    }
}
