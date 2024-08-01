function init() {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    paragraph.addEventListener("", event => {
        paragraph.innerHTML = 'Shuttle is on the ground!'
    })
    button.addEventListener("click", event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    missionAbort.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = 'red'
    });
    missionAbort.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = ''
    });
    missionAbort.addEventListener("click", event => {
        window.confirm('Are you sure you want to abort the Mission?');
    if (!confirm){
        
    }else{
        paragraph.innerHTML = 'Mission Aborted! Space shittle will return home.'

    }
    });

   

}

window.addEventListener("load", init);
