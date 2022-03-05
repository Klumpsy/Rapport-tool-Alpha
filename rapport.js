import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js"; 
import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js"
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js"; 

 //Information input fields
 const inputStudentName = document.querySelector("#input-student-name");
 const inputStudentGroup = document.querySelector("#input-student-group");
 const inputTeacher = document.querySelector("#input-teacher");

//Get/Set Personal targets 
 const personalNotes = document.querySelector("#personal-notes");
 const personalGoal = document.querySelector("#personal-goal");
 const personalPearl = document.querySelector("#personal-pearl");
 const personalSocialSkills = document.querySelector("#personal-social-skills");
 const personalIndependence = document.querySelector("#personal-independence");
 const personalWorkEthic = document.querySelector("#personal-work-ethic");

//Get/Set DIA scores rapport 1 and 2 
 const getDiaRekenen = document.querySelector("#d-r-input"); 
 const getDiaTekst = document.querySelector("#d-t-input"); 
 const getDiaSpelling = document.querySelector("#d-s-input"); 
 const getDiaWoordenschat = document.querySelector("#d-w-input");
 const getAvi = document.querySelector("#avi-input"); 
 const getDmt = document.querySelector("#dmt-input"); 

 const getDiaRekenen2 = document.querySelector("#d-r-inputR2"); 
 const getDiaTekst2 = document.querySelector("#d-t-inputR2"); 
 const getDiaSpelling2 = document.querySelector("#d-s-inputR2"); 
 const getDiaWoordenschat2 = document.querySelector("#d-w-inputR2");
 const getAvi2 = document.querySelector("#avi-inputR2"); 
 const getDmt2 = document.querySelector("#dmt-inputR2"); 

 //Get/set snappet scores
 const getRekenenSnappet = document.querySelector("#s-r-input");
 const getTaalSnappet = document.querySelector("#s-t-input");
 const getSpellingSnappet = document.querySelector("#s-s-input");

 const getRekenenSnappet2 = document.querySelector("#s-r-inputR2");
 const getTaalSnappet2 = document.querySelector("#s-t-inputR2");
 const getSpellingSnappet2 = document.querySelector("#s-s-inputR2");

 //Slider display values 
 const sliderDisplay = document.querySelectorAll(".range-display"); 

 //slider values 
 const rekenenSlider = document.querySelector("#range-rekenen");
 const taalSlider = document.querySelector("#range-taal");
 const spellingSlider = document.querySelector("#range-spelling");

 const rekenenSlider2 = document.querySelector("#range-rekenenR2");
 const taalSlider2 = document.querySelector("#range-taalR2");
 const spellingSlider2 = document.querySelector("#range-spellingR2");

//Get/Set Snappet Goals
 const behaaldeDoelenRekenen = document.querySelector("#doelen-rekenen-input"); 
 const doelenTotaalRekenen = document.querySelector("#doelen-rekenen-total"); 

 const behaaldeDoelenTaal = document.querySelector("#doelen-taal-input"); 
 const doelenTotaalTaal = document.querySelector("#doelen-taal-total"); 

 const behaaldeDoelenSpelling = document.querySelector("#doelen-spelling-input"); 
 const doelenTotaalSpelling = document.querySelector("#doelen-spelling-total");  


 const behaaldeDoelenRekenen2 = document.querySelector("#doelen-rekenen-inputR2"); 
 const doelenTotaalRekenen2 = document.querySelector("#doelen-rekenen-totalR2"); 

 const behaaldeDoelenTaal2 = document.querySelector("#doelen-taal-inputR2"); 
 const doelenTotaalTaal2 = document.querySelector("#doelen-taal-totalR2"); 

 const behaaldeDoelenSpelling2 = document.querySelector("#doelen-spelling-inputR2"); 
 const doelenTotaalSpelling2 = document.querySelector("#doelen-spelling-totalR2"); 
 
 //Get/Set personal message
 const inputPersonalmessage = document.querySelector("#personal-message");
 const displayPersonalMessage = document.querySelector("#personal-message-display");

 const inputPersonalmessage2 = document.querySelector("#personal-messageR2");
 const displayPersonalMessage2 = document.querySelector("#personal-message-displayR2");

//inject Personal information in header function 

const displayStudentName = document.querySelector("#display-student-name");
const displayStudentGroup = document.querySelector("#display-student-group");
const displayTeacher = document.querySelector("#display-teacher"); 
const displayYear = document.querySelector("#display-year"); 

const injectPersonalInformation = () => { 
    const inputYear = new Date;
    
    displayStudentName.innerHTML = inputStudentName.value; 
    displayStudentGroup.innerHTML = `GROEP ${inputStudentGroup.value}`; 
    displayTeacher.innerHTML = inputTeacher.value;
    displayYear.innerHTML = inputYear.getFullYear();
}

//inject personal-Targets 
const injectPersoanlTargets = () => { 

    const SetPersonalNotes = document.querySelector("#set-personal-notes");
    const SetPersonalGoal = document.querySelector("#set-personal-goal");
    const SetPersonalPearl = document.querySelector("#set-personal-pearl");
    const SetPersonalSocialSkills = document.querySelector("#set-personal-social-skills");
    const SetPersonalIndependence = document.querySelector("#set-personal-independence");
    const SetPersonalWorkEthic = document.querySelector("#set-personal-work-ethic");

    SetPersonalNotes.innerHTML = personalNotes.value; 
    SetPersonalGoal.innerHTML = personalGoal.value; 
    SetPersonalPearl.innerHTML = personalPearl.value; 
    SetPersonalSocialSkills.innerHTML = personalSocialSkills.value; 
    SetPersonalIndependence.innerHTML = personalIndependence.value; 
    SetPersonalWorkEthic.innerHTML = personalWorkEthic.value; 
}

//inject DIA-scores function 
const injectDiaScores = () => { 

    const setDiaRekenen = document.querySelector("#rekenen-dia"); 
    const setDiaTekst = document.querySelector("#tekst-dia"); 
    const setDiaSpelling = document.querySelector("#spelling-dia");
    const setDiaWoordenschat = document.querySelector("#woordenschat-dia");
    const setAviDmt = document.querySelector("#avi-dmt"); 

    const setDiaRekenen2 = document.querySelector("#rekenen-diaR2"); 
    const setDiaTekst2 = document.querySelector("#tekst-diaR2"); 
    const setDiaSpelling2 = document.querySelector("#spelling-diaR2");
    const setDiaWoordenschat2 = document.querySelector("#woordenschat-diaR2");
    const setAviDmt2 = document.querySelector("#avi-dmt-R2"); 

    setDiaRekenen.innerHTML = getDiaRekenen.value; 
    setDiaTekst.innerHTML = getDiaTekst.value; 
    setDiaSpelling.innerHTML = getDiaSpelling.value; 
    setDiaWoordenschat.innerHTML = getDiaWoordenschat.value; 
    setAviDmt.innerHTML = `AVI: ${getAvi.value} DMT: ${getDmt.value}`; 

    setDiaRekenen2.innerHTML = getDiaRekenen2.value; 
    setDiaTekst2.innerHTML = getDiaTekst2.value; 
    setDiaSpelling2.innerHTML = getDiaSpelling2.value; 
    setDiaWoordenschat2.innerHTML = getDiaWoordenschat2.value;
    setAviDmt2.innerHTML = `AVI: ${getAvi2.value} DMT: ${getDmt2.value}`; 
};

//inject Snappet-scores function 
const injectSnappetScores = () => { 

    const displayRekenenSnappet = document.querySelector("#rekenen-snappet");
    const displayTaalSnappet = document.querySelector("#taal-snappet");
    const displaySpellingSnappet = document.querySelector("#spelling-snappet");

    const displayRekenenSnappet2 = document.querySelector("#rekenen-snappetR2");
    const displayTaalSnappet2 = document.querySelector("#taal-snappetR2");
    const displaySpellingSnappet2 = document.querySelector("#spelling-snappetR2");

    displayRekenenSnappet.innerHTML = getRekenenSnappet.value; 
    displayTaalSnappet.innerHTML = getTaalSnappet.value; 
    displaySpellingSnappet.innerHTML = getSpellingSnappet.value; 

    displayRekenenSnappet2.innerHTML = getRekenenSnappet2.value; 
    displayTaalSnappet2.innerHTML = getTaalSnappet2.value; 
    displaySpellingSnappet2.innerHTML = getSpellingSnappet2.value; 
}

//Inject Snappet Slider function 
    sliderDisplay[0].innerHTML = rekenenSlider.value; 
    sliderDisplay[3].innerHTML = rekenenSlider2.value;

    sliderDisplay[1].innerHTML = taalSlider.value; 
    sliderDisplay[4].innerHTML = taalSlider2.value;

    sliderDisplay[2].innerHTML = spellingSlider.value; 
    sliderDisplay[5].innerHTML = spellingSlider2.value; 

    rekenenSlider.oninput = function(){ 
        sliderDisplay[0].innerHTML = this.value; 
    };

    taalSlider.oninput = function(){ 
        sliderDisplay[1].innerHTML = this.value; 
    };

    spellingSlider.oninput = function(){ 
        sliderDisplay[2].innerHTML = this.value; 
    };

    rekenenSlider2.oninput = function(){ 
        sliderDisplay[3].innerHTML = this.value; 
    };

    taalSlider2.oninput = function(){ 
        sliderDisplay[4].innerHTML = this.value; 
    };

    spellingSlider2.oninput = function(){ 
        sliderDisplay[5].innerHTML = this.value; 
    };

const injectSnappetSlider = () => { 
    //Get/set snappet slider
    const sliderKnob = document.querySelectorAll(".slider-knob"); 

    sliderKnob[0].style.marginLeft = `${rekenenSlider.value * 2}px`;
    sliderKnob[2].style.marginLeft = `${taalSlider.value * 2}px`;
    sliderKnob[4].style.marginLeft = `${spellingSlider.value * 2}px`;

    sliderKnob[1].style.marginLeft = `${rekenenSlider2.value * 2}px`;
    sliderKnob[3].style.marginLeft = `${taalSlider2.value * 2}px`;
    sliderKnob[5].style.marginLeft = `${spellingSlider2.value * 2}px`;
}

//inject Snappet-goals function 
const injectSnappetGoalScores = () => { 
    
    const displayRekenenGoalsSnappet = document.querySelector("#rekenen-snappet-doelen");
    const displayTaalGoalsSnappet = document.querySelector("#taal-snappet-doelen");
    const displaySpellingGoalsSnappet = document.querySelector("#spelling-snappet-doelen");

    const displayRekenenGoalsSnappet2 = document.querySelector("#rekenen-snappet-doelenR2");
    const displayTaalGoalsSnappet2 = document.querySelector("#taal-snappet-doelenR2");
    const displaySpellingGoalsSnappet2 = document.querySelector("#spelling-snappet-doelenR2");

    displayRekenenGoalsSnappet.innerHTML = `${behaaldeDoelenRekenen.value}/${doelenTotaalRekenen.value}`;
    displayTaalGoalsSnappet.innerHTML = `${behaaldeDoelenTaal.value}/${doelenTotaalTaal.value}`;
    displaySpellingGoalsSnappet.innerHTML = `${behaaldeDoelenSpelling.value}/${doelenTotaalSpelling.value}`;

    displayRekenenGoalsSnappet2.innerHTML = `${behaaldeDoelenRekenen2.value}/${doelenTotaalRekenen2.value}`;
    displayTaalGoalsSnappet2.innerHTML = `${behaaldeDoelenTaal2.value}/${doelenTotaalTaal2.value}`;
    displaySpellingGoalsSnappet2.innerHTML = `${behaaldeDoelenSpelling2.value}/${doelenTotaalSpelling2.value}`;
}

//Add levelwerk/spreekbeurt/boekbespreking/werkstuk/projecten 

//Checkmark 
const createCheckMark = () => { 
    const checkmark = document.createElement("i"); 
        checkmark.classList.add("fas");
        checkmark.classList.add("fa-check-square");
        checkmark.classList.add("fa-2x")
    return checkmark
}

//Remove created item from list function 
const createRemoveButton = () => { 

    const trashCanItem = document.createElement("i"); 
    trashCanItem.classList.add("fas");
    trashCanItem.classList.add("fa-trash");
    trashCanItem.classList.add("fa-1x")

    trashCanItem.classList.add("removeItemButton"); 
    trashCanItem.addEventListener("click", removeThisItemFunction); 

    function removeThisItemFunction() { 
    this.parentElement.remove();  
}
    return trashCanItem;
}

//Remove children from parent function 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Levelwerk
const levelWorkContainer = document.querySelector("#level-work-div");
const addLevelWorkButton = document.querySelector("#add-level-work-button"); 

addLevelWorkButton.addEventListener("click", addLevelWork); 

function addLevelWork(){ 
    const levelWorkItem = document.createElement("DIV"); 
    const levelWorkItemInput = document.createElement("INPUT"); 

    levelWorkItem.classList.add("levelwork-item")
    levelWorkItemInput.classList.add("levelwerk-item-input"); 

    levelWorkItem.appendChild(createCheckMark()); 
    levelWorkItem.appendChild(levelWorkItemInput); 
    levelWorkItem.appendChild(createRemoveButton()); 
    levelWorkContainer.appendChild(levelWorkItem);
}

//Spreekbeurt 
const spreekbeurtContainer = document.querySelector("#spreekbeurt-div");
const addSpreekbeurtButton = document.querySelector("#add-spreekbeurt-button"); 

addSpreekbeurtButton.addEventListener("click", addSpreekbeurt); 

function addSpreekbeurt(){ 
    const spreekbeurtItem = document.createElement("DIV"); 
    const spreekbeurtItemInput = document.createElement("INPUT");
    const spreekbeurtSubject = document.createElement("p");

    spreekbeurtItem.classList.add("spreekbeurt-item")
    spreekbeurtItemInput.classList.add("spreekbeurt-item-input"); 

    spreekbeurtSubject.innerHTML = "Onderwerp: "

    spreekbeurtItem.appendChild(createCheckMark()); 
    spreekbeurtItem.appendChild(spreekbeurtSubject); 
    spreekbeurtItem.appendChild(spreekbeurtItemInput); 
    spreekbeurtItem.appendChild(createRemoveButton()); 
    spreekbeurtContainer.appendChild(spreekbeurtItem); 
}

//Boekbespreking
const boekbesprekingContainer = document.querySelector("#boekbespreking-div");
const addBoekbesprekingButton = document.querySelector("#add-boekbespreking-button"); 

addBoekbesprekingButton.addEventListener("click", addBoekbespreking);  

function addBoekbespreking(){ 
    const boekbesprekingItem = document.createElement("DIV"); 
    const boekbesprekingItemInput = document.createElement("INPUT");
    const boekbesprekingSubject = document.createElement("p");  
    
    boekbesprekingItem.classList.add("boekbespreking-item")
    boekbesprekingItemInput.classList.add("boekbespreking-item-input"); 

    boekbesprekingSubject.innerHTML = "Boek: "

    boekbesprekingItem.appendChild(createCheckMark()); 
    boekbesprekingItem.appendChild(boekbesprekingSubject); 
    boekbesprekingItem.appendChild(boekbesprekingItemInput);
    boekbesprekingItem.appendChild(createRemoveButton()); 
    boekbesprekingContainer.appendChild(boekbesprekingItem); 
}

//werkstukken 
const werkstukkenContainer = document.querySelector("#werkstuk-div");
const addWerkstukkenButton = document.querySelector("#add-werkstuk-button"); 

addWerkstukkenButton.addEventListener("click", addWerkstuk);  

function addWerkstuk(){ 
    const werkstukItem = document.createElement("DIV"); 
    const werkstukItemInput = document.createElement("INPUT");
    const werkstukSubject = document.createElement("p");  
    
    werkstukItem.classList.add("werkstuk-item")
    werkstukItemInput.classList.add("werkstuk-item-input"); 

    werkstukSubject.innerHTML = "Werkstuk: "

    werkstukItem.appendChild(createCheckMark()); 
    werkstukItem.appendChild(werkstukSubject); 
    werkstukItem.appendChild(werkstukItemInput);
    werkstukItem.appendChild(createRemoveButton()); 
    werkstukkenContainer.appendChild(werkstukItem); 
}

//Projecten
const projectenContainer = document.querySelector("#project-div");
const addProjectenButton = document.querySelector("#add-project-button"); 

addProjectenButton.addEventListener("click", addProject);  

function addProject(){ 
    const projectItem = document.createElement("DIV"); 
    const projectItemInput = document.createElement("INPUT");
    const projectItemSubject = document.createElement("p");  
    
    projectItem.classList.add("project-item")
    projectItemInput.classList.add("project-item-input"); 

    projectItemSubject.innerHTML = "Project: "

    projectItem.appendChild(createCheckMark()); 
    projectItem.appendChild(projectItemSubject); 
    projectItem.appendChild(projectItemInput);
    projectItem.appendChild(createRemoveButton()); 
    projectenContainer.appendChild(projectItem); 
}

//Inject Levelwerk/Spreekbeurt/Boekbespreking/Werkstuk/Projecten 
const injectOverig = () => { 
    const rapportLevelwerkInjectContainer = document.querySelector("#rapport-levelwerk-container");
    const rapportSpreekbeurtInjectContainer = document.querySelector("#rapport-spreekbeurt-container");
    const rapportBoekbesprekingInjectContainer = document.querySelector("#rapport-boekbespreking-container");
    const rapportWerkstukInjectContainer = document.querySelector("#rapport-werkstuk-container");
    const rapportProjectInjectContainer = document.querySelector("#rapport-project-container");

    removeAllChildNodes(rapportLevelwerkInjectContainer);
    removeAllChildNodes(rapportSpreekbeurtInjectContainer);
    removeAllChildNodes(rapportBoekbesprekingInjectContainer);
    removeAllChildNodes(rapportWerkstukInjectContainer);
    removeAllChildNodes(rapportProjectInjectContainer);
    
    const levelwerk = document.querySelectorAll(".levelwerk-item-input");
    const spreekbeurten = document.querySelectorAll(".spreekbeurt-item-input");
    const boekbesprekingen = document.querySelectorAll(".boekbespreking-item-input");
    const werkstukken = document.querySelectorAll(".werkstuk-item-input");
    const projecten = document.querySelectorAll(".project-item-input");

    //Levelwerk 
    if(levelwerk.length > 0) { 
        for(let i = 0; i < levelwerk.length; i++) {
            const totalLevelwerk = document.createElement("DIV"); 
            totalLevelwerk.classList.add("spreekbeurt-rapport-display"); 
        
            const levelwerkTopic = document.createElement("p"); 
            levelwerkTopic.innerHTML = `Levelwerk ${[i + 1]}: ${levelwerk[i].value}`
                
            totalLevelwerk.appendChild(createCheckMark());
            totalLevelwerk.appendChild(levelwerkTopic);
                
            rapportLevelwerkInjectContainer.appendChild(totalLevelwerk); 
        } 
    }

    //Spreekbeurten
    if(spreekbeurten.length > 0) { 
        for(let i = 0; i < spreekbeurten.length; i++) {
            const totalSpreekbeurt = document.createElement("DIV"); 
            totalSpreekbeurt.classList.add("spreekbeurt-rapport-display"); 
        
            const spreekbeurtTopic = document.createElement("p"); 
            spreekbeurtTopic.innerHTML = `Onderwerp: ${spreekbeurten[i].value}`
                
            totalSpreekbeurt.appendChild(createCheckMark());
            totalSpreekbeurt.appendChild(spreekbeurtTopic);
                
            rapportSpreekbeurtInjectContainer.appendChild(totalSpreekbeurt); 
        } 
    }

    //Boekbesprekingen
    if(boekbesprekingen.length > 0) { 
        for(let i = 0; i < boekbesprekingen.length; i++) {
            const totalBoekbespreking = document.createElement("DIV"); 
            totalBoekbespreking.classList.add("spreekbeurt-rapport-display"); 
        
            const boekbesprekingtTopic = document.createElement("p"); 
            boekbesprekingtTopic.innerHTML = `Boek: ${boekbesprekingen[i].value}`
                
            totalBoekbespreking.appendChild(createCheckMark());
            totalBoekbespreking.appendChild(boekbesprekingtTopic);
                
            rapportBoekbesprekingInjectContainer.appendChild(totalBoekbespreking); 
        } 
    }

     //Werkstuk 
     if(werkstukken.length > 0) { 
        for(let i = 0; i < werkstukken.length; i++) {
            const totalWerkstukken = document.createElement("DIV"); 
            totalWerkstukken.classList.add("spreekbeurt-rapport-display"); 
        
            const werkstukTopic = document.createElement("p"); 
            werkstukTopic.innerHTML = `Onderwerp: ${werkstukken[i].value}`;
                
            totalWerkstukken.appendChild(createCheckMark());
            totalWerkstukken.appendChild(werkstukTopic);
                
            rapportWerkstukInjectContainer.appendChild(totalWerkstukken); 
        } 
    }

     //Projecten
     if(projecten.length > 0) { 
        for(let i = 0; i < projecten.length; i++) {
            const totalProjecten = document.createElement("DIV"); 
            totalProjecten.classList.add("spreekbeurt-rapport-display"); 
        
            const projectTopic = document.createElement("p"); 
            projectTopic.innerHTML = `Project ${[i + 1]}: ${projecten[i].value}`;
                
            totalProjecten.appendChild(createCheckMark());
            totalProjecten.appendChild(projectTopic);
                
            rapportProjectInjectContainer.appendChild(totalProjecten); 
        } 
    }
}

//retreive Levelwerk from database 
function getLevelwork() { 
    let levelworkValues = []; 
    for (let i = 0; i < levelWorkContainer.children.length; i ++) { 
        levelworkValues.push(levelWorkContainer.children[i].children[1].value)
    }
    return levelworkValues;
}

function setLevelwork(databaseLevelwork) { 

    removeAllChildNodes(levelWorkContainer); 

    databaseLevelwork.map(levelwork => { 
        const levelWorkItem = document.createElement("DIV"); 
        const levelWorkItemInput = document.createElement("INPUT"); 
        levelWorkItemInput.value = levelwork; 
        levelWorkItemInput.classList.add("levelwerk-item-input"); 

        levelWorkItem.appendChild(createCheckMark()); 
        levelWorkItem.appendChild(levelWorkItemInput); 
        levelWorkItem.appendChild(createRemoveButton()); 
        levelWorkContainer.appendChild(levelWorkItem); 
    })  
}

//retreive Spreekbeurten from database
function getSpreekbeurten() { 
    let spreekbeurtValues = []; 
    for (let i = 0; i < spreekbeurtContainer.children.length; i ++) { 
        spreekbeurtValues.push(spreekbeurtContainer.children[i].children[2].value)
    }
    return spreekbeurtValues;
}

function setSpreekbeurten(databaseSpreekbeurten) { 

    removeAllChildNodes(spreekbeurtContainer); 

    databaseSpreekbeurten.map(spreekbeurt => { 
        const spreekbeurtItem = document.createElement("DIV"); 
        const spreekbeurtItemInput = document.createElement("INPUT");
        spreekbeurtItemInput.value = spreekbeurt;
        const spreekbeurtSubject = document.createElement("p");
    
        spreekbeurtItem.classList.add("spreekbeurt-item")
        spreekbeurtItemInput.classList.add("spreekbeurt-item-input"); 
    
        spreekbeurtSubject.innerHTML = "Onderwerp: "
    
        spreekbeurtItem.appendChild(createCheckMark()); 
        spreekbeurtItem.appendChild(spreekbeurtSubject); 
        spreekbeurtItem.appendChild(spreekbeurtItemInput); 
        spreekbeurtItem.appendChild(createRemoveButton()); 
        spreekbeurtContainer.appendChild(spreekbeurtItem);  
    })  
}

//Retreive Boekbesprekingen from database 
function getBoekbesprekingen() { 
    let boekbesprekingValues = []; 
    for (let i = 0; i < boekbesprekingContainer.children.length; i ++) { 
        boekbesprekingValues.push(boekbesprekingContainer.children[i].children[2].value)
    }
    return boekbesprekingValues;
}

function setBoekbesprekingen(databaseBoekbesprekingen) { 

    removeAllChildNodes(boekbesprekingContainer); 

    databaseBoekbesprekingen.map(boekbespreking => { 
        const boekbesprekingItem = document.createElement("DIV"); 
        const boekbesprekingItemInput = document.createElement("INPUT");
        boekbesprekingItemInput.value = boekbespreking;
        const boekbesprekingSubject = document.createElement("p");  
        
        boekbesprekingItem.classList.add("boekbespreking-item")
        boekbesprekingItemInput.classList.add("boekbespreking-item-input"); 
    
        boekbesprekingSubject.innerHTML = "Boek: "
    
        boekbesprekingItem.appendChild(createCheckMark()); 
        boekbesprekingItem.appendChild(boekbesprekingSubject); 
        boekbesprekingItem.appendChild(boekbesprekingItemInput);
        boekbesprekingItem.appendChild(createRemoveButton()); 
        boekbesprekingContainer.appendChild(boekbesprekingItem); 
    })  
}

//Retreive Werkstukken from database 
function getWerkstukken() { 
    let werkstukValues = []; 
    for (let i = 0; i < werkstukkenContainer.children.length; i ++) { 
        werkstukValues.push(werkstukkenContainer.children[i].children[2].value)
    }
    return werkstukValues;
}

function setWerkstukken(databaseWerkstukken) { 

    removeAllChildNodes(werkstukkenContainer); 

    databaseWerkstukken.map(werkstuk => { 
        const werkstukItem = document.createElement("DIV"); 
        const werkstukItemInput = document.createElement("INPUT");
        werkstukItemInput.value = werkstuk;
        const werkstukItemSubject = document.createElement("p");  
    
        werkstukItem.classList.add("werkstuk-item")
        werkstukItemInput.classList.add("werkstuk-item-input"); 

        werkstukItemSubject.innerHTML = "Werkstuk: "

        werkstukItem.appendChild(createCheckMark()); 
        werkstukItem.appendChild(werkstukItemSubject); 
        werkstukItem.appendChild(werkstukItemInput);
        werkstukItem.appendChild(createRemoveButton()); 
        werkstukkenContainer.appendChild(werkstukItem);
    })  
}

//Retreive Projects from database 
function getProjects() { 
    let projectValues = []; 
    for (let i = 0; i < projectenContainer.children.length; i ++) { 
        projectValues.push(projectenContainer.children[i].children[2].value)
    }
    console.log(projectValues)
    return projectValues
}

function setProjects(databaseProjects) { 

    removeAllChildNodes(projectenContainer); 

    databaseProjects.map(project => { 
        const projectItem = document.createElement("DIV"); 
        const projectItemInput = document.createElement("INPUT");
        projectItemInput.value = project;
        const projectItemSubject = document.createElement("p");  
    
        projectItem.classList.add("project-item")
        projectItemInput.classList.add("project-item-input"); 

        projectItemSubject.innerHTML = "Project: "

        projectItem.appendChild(createCheckMark()); 
        projectItem.appendChild(projectItemSubject); 
        projectItem.appendChild(projectItemInput);
        projectItem.appendChild(createRemoveButton()); 
        projectenContainer.appendChild(projectItem);
    })  
}

//inject personal message function 
function injectPersonalMessage() {
    displayPersonalMessage.innerHTML = inputPersonalmessage.value;

    displayPersonalMessage2.innerHTML = inputPersonalmessage2.value;
}

//inject next year class function 
const nextYearInput = document.querySelector("#next-year-input"); 
const nextYearDisplay = document.querySelector("#next-year-display"); 
const injectNextyearClass = () => { 
    
    nextYearDisplay.innerHTML = nextYearInput.value; 
}

//Button functionality 
const completeRapportButton = document.querySelector("#add-student-name");

//inject input into HTML
completeRapportButton.addEventListener("click", () => { 
    injectPersonalInformation(); 
    injectPersoanlTargets(); 
    injectDiaScores(); 
    injectSnappetScores(); 
    injectSnappetGoalScores(); 
    injectSnappetSlider(); 
    injectOverig(); 
    injectPersonalMessage(); 
    injectNextyearClass(); 
});

//Delete all input fields
const deleteButton = document.querySelector("#clear-button");

deleteButton.addEventListener("click", () => { 
    let inputFields = document.getElementsByTagName("input");
    let textFields = document.getElementsByTagName("textarea");

    removeAllChildNodes(projectenContainer);
    removeAllChildNodes(levelWorkContainer);
    removeAllChildNodes(boekbesprekingContainer);
    removeAllChildNodes(werkstukkenContainer);
    removeAllChildNodes(spreekbeurtContainer);
    
    for(let i = 0; i < inputFields.length; i++) { 
        inputFields[i].value = ""
    }

    for(let i = 0; i < textFields.length; i++) { 
        textFields[i].value = ""
    }

    for (let i = 0; i < sliderDisplay.length; i++) { 
        sliderDisplay[i].innerHTML = 50; 
    }
})

//FireBase config 
const firebaseConfig = {

    apiKey: "Secret",
    authDomain: "Secret",
    projectId: "Secret",
    storageBucket:"Secret",
    messagingSenderId: "Secret",
    appId: "Secret",
    measurementId: "Secret",
    databaseURL:"Secret"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 

//Save student data to database 
const saveButton = document.querySelector("#save-current-rapport")
saveButton.addEventListener("click", saveDatabaseData)

//Get student data from database 
const retreiveButton = document.querySelector("#retreive-student-name")
retreiveButton.addEventListener("click", retreiveDataFromDatabase); 

//Database functions 
//Save data to database with Name as ID ticker 
function saveDatabaseData(){ 
    if(inputStudentName.value === "") { 
        alert("Vul eerst een naam in!")
    }else { 
        if(confirm("Wil je dit rapport opslaan en hiermee een eventueel vorig rapport overschrijven?")) { 
            set(ref(database, "Rapporten/"+ inputStudentName.value),{ 
                studentName: inputStudentName.value,
                studentGroup: inputStudentGroup.value,
                inputTeacher: inputTeacher.value, 
        
                personalNotes: personalNotes.value,
                personalGoal: personalGoal.value, 
                personalPearl: personalPearl.value, 
                personalSocialSkills: personalSocialSkills.value, 
                personalIndependence: personalIndependence.value, 
                personalWorkEthic: personalWorkEthic.value, 
        
                diaRekenen: getDiaRekenen.value, 
                diaRekenen2: getDiaRekenen2.value, 
                diaTekst: getDiaTekst.value, 
                diaTekst2: getDiaTekst2.value,
                diaSpelling: getDiaSpelling.value, 
                diaSpelling2: getDiaSpelling2.value, 
                diaWoordenschat: getDiaWoordenschat.value, 
                diaWoordenschat2: getDiaWoordenschat2.value, 
                avi: getAvi.value, 
                avi2: getAvi2.value, 
                dmt: getDmt.value,
                dmt2: getDmt2.value,
        
                rekenenSnappet: getRekenenSnappet.value,
                rekenenSnappet2: getRekenenSnappet2.value,  
                taalSnappet: getTaalSnappet.value, 
                taalSnappet2: getTaalSnappet2.value, 
                spellingSnappet: getSpellingSnappet.value,
                spellingSnappet2: getSpellingSnappet2.value, 
        
                sliderDisplay: [
                    rekenenSlider.value, 
                    rekenenSlider2.value,
                    taalSlider.value,
                    taalSlider2.value, 
                    spellingSlider.value,
                    spellingSlider2.value
                ], 
        
                behaaldeDoelenRekenen: behaaldeDoelenRekenen.value,
                behaaldeDoelenRekenen2: behaaldeDoelenRekenen2.value,  
                doelenTotaalRekenen: doelenTotaalRekenen.value,
                doelenTotaalRekenen2: doelenTotaalRekenen2.value, 
        
                behaaldeDoelenTaal: behaaldeDoelenTaal.value, 
                behaaldeDoelenTaal2: behaaldeDoelenTaal2.value, 
                doelenTotaalTaal: doelenTotaalTaal.value,
                doelenTotaalTaal2: doelenTotaalTaal2.value, 
        
                behaaldeDoelenSpelling: behaaldeDoelenSpelling.value,
                behaaldeDoelenSpelling2: behaaldeDoelenSpelling2.value, 
                doelenTotaalSpelling: doelenTotaalSpelling.value,
                doelenTotaalSpelling2: doelenTotaalSpelling2.value,
    
                levelwork: getLevelwork(),
                spreekbeurten: getSpreekbeurten(),
                projecten: getProjects(), 
                werkstukken: getWerkstukken(),
                boekbesprekingen: getBoekbesprekingen(), 
    
                personalmessage: inputPersonalmessage.value,
                personalmessage2: inputPersonalmessage2.value,
    
                nextGroup: nextYearInput.value
            })
            .then(() => { 
                console.log("Data stored succesfully");
                alert("Rapport is opgeslagen!");
            }) 
            .catch((error) => { 
                console.log("Storage failed cause: " + error);
                alert("Rapport is niet opgeslagen, reden:" + error);
            })
        } else { 
            return; 
        }
    }
}

//Selecting data from database and display it into Tool 
function retreiveDataFromDatabase() { 
    const databaseRef = ref(database); 
    get(child(databaseRef,"Rapporten/"+ inputStudentName.value)).then((student) => { 
        if(student.exists()) { 

            removeAllChildNodes(projectenContainer);
            removeAllChildNodes(levelWorkContainer);
            removeAllChildNodes(boekbesprekingContainer);
            removeAllChildNodes(werkstukkenContainer);
            removeAllChildNodes(spreekbeurtContainer);
            
            //Retreive peronal data 
            inputStudentName.value = student.val().studentName;
            inputStudentGroup.value = student.val().studentGroup;
            inputTeacher.value = student.val().inputTeacher;

            //Retreive Personal 
            personalNotes.value = student.val().personalNotes;
            personalGoal.value = student.val().personalGoal; 
            personalPearl.value = student.val().personalPearl;
            personalSocialSkills.value = student.val().personalSocialSkills; 
            personalIndependence.value = student.val().personalIndependence; 
            personalWorkEthic.value = student.val().personalWorkEthic; 

            //Retreive Cijfer
            getDiaRekenen.value = student.val().diaRekenen; 
            getDiaRekenen2.value = student.val().diaRekenen2; 
            //Retreive Tekst 
            getDiaTekst.value = student.val().diaTekst;
            getDiaTekst2.value = student.val().diaTekst2;
            //Retreive Spelling
            getDiaSpelling.value = student.val().diaSpelling;
            getDiaSpelling2.value = student.val().diaSpelling2;
            //Retreive Woordenschat
            getDiaWoordenschat.value = student.val().diaWoordenschat;
            getDiaWoordenschat2.value = student.val().diaWoordenschat2;
            //Retreive Avi/DMT
            getAvi.value = student.val().avi
            getAvi2.value = student.val().avi2
            getDmt.value = student.val().dmt
            getDmt2.value = student.val().dmt2
            //Retreive Rekenen Snappet 
            getRekenenSnappet.value = student.val().rekenenSnappet;
            getRekenenSnappet2.value = student.val().rekenenSnappet2;
            //Retreive Taal Snappet
            getTaalSnappet.value = student.val().taalSnappet;
            getTaalSnappet2.value = student.val().taalSnappet2;
            //Retreive Spelling Snappet
            getSpellingSnappet.value = student.val().spellingSnappet;
            getSpellingSnappet2.value = student.val().spellingSnappet2;

            rekenenSlider.value = Number(student.val().sliderDisplay[0]);
            sliderDisplay[0].innerHTML = Number(student.val().sliderDisplay[0]);
            taalSlider.value = Number(student.val().sliderDisplay[2]);
            sliderDisplay[1].innerHTML = Number(student.val().sliderDisplay[2]);
            spellingSlider.value = Number(student.val().sliderDisplay[4]);
            sliderDisplay[2].innerHTML = Number(student.val().sliderDisplay[4]);

            rekenenSlider2.value = Number(student.val().sliderDisplay[1]);
            sliderDisplay[3].innerHTML = Number(student.val().sliderDisplay[1]);
            taalSlider2.value = Number(student.val().sliderDisplay[3]);
            sliderDisplay[4].innerHTML = Number(student.val().sliderDisplay[3]);
            spellingSlider2.value = Number(student.val().sliderDisplay[5]);
            sliderDisplay[5].innerHTML = Number(student.val().sliderDisplay[5]);

            //Retreive snappet doelen 
            behaaldeDoelenRekenen.value = student.val().behaaldeDoelenRekenen;
            behaaldeDoelenRekenen2.value = student.val().behaaldeDoelenRekenen2;

            doelenTotaalRekenen.value = student.val().doelenTotaalRekenen;
            doelenTotaalRekenen2.value = student.val().doelenTotaalRekenen2;

            behaaldeDoelenTaal.value = student.val().behaaldeDoelenTaal;
            behaaldeDoelenTaal2.value = student.val().behaaldeDoelenTaal2;

            doelenTotaalTaal.value = student.val().doelenTotaalTaal;
            doelenTotaalTaal2.value = student.val().doelenTotaalTaal2;

            behaaldeDoelenSpelling.value = student.val().behaaldeDoelenSpelling;
            behaaldeDoelenSpelling2.value = student.val().behaaldeDoelenSpelling2;

            doelenTotaalSpelling.value = student.val().doelenTotaalSpelling;
            doelenTotaalSpelling2.value = student.val().doelenTotaalSpelling2;

            //Retreive levelwerk/Spreekbeurt/Boekbespreking/Werkstuk/Projecten
            student.val().levelwork === undefined ? "" : setLevelwork(student.val().levelwork) ;
            student.val().spreekbeurten === undefined ? "" : setSpreekbeurten(student.val().spreekbeurten);
            student.val().boekbesprekingen === undefined ? "" : setBoekbesprekingen(student.val().boekbesprekingen);
            student.val().werkstukken === undefined ? "" : setWerkstukken(student.val().werkstukken);
            student.val().projecten === undefined ? "" : setProjects(student.val().projecten);
            
            //Retreive personal message
            inputPersonalmessage.value = student.val().personalmessage;
            inputPersonalmessage2.value = student.val().personalmessage2;

            //Retreive next year 
            nextYearInput.value = student.val().nextGroup; 
        } else { 
            inputStudentName.value = ""
            alert("Die leerling bestaat niet!")
        }
    }).catch(error => 
        (console.log(error)))
};

const downloadRapport = document.querySelector("#download-rapport");

downloadRapport.addEventListener("click", () => { 
    const element = document.querySelector("#rapport"); 

    let opt = {
        margin: [0,0,0,0],
        filename: `Rapport_${displayStudentName.innerHTML}.pdf`,
        image: {type: "jpeg", quality: 1}, 
        html2canvas: { scale: 2, y: 0,  scrollY: 0},
        pagebreak: {avoid: ".page"},
        jsPDF: {unit: "mm", format: "a4", orientation: 'portrait'},
        
    };

    html2pdf().set(opt).from(element).save(); 
});

//Rapport login 
//User Login Authentication
let authenticate = getAuth(); 
const loginButton = document.querySelector("#login-button"); 
const logoutButton = document.querySelector("#logout-button"); 
const loginForm = document.querySelector("#login-container"); 
const rapportForm = document.querySelector(".rapport-wrapper"); 
let loggedName = document.querySelector("#logged-user");
let emailInput = document.querySelector("#email-input");
let passwordInput = document.querySelector("#wachtwoord-input");
const sessionStorageProfile = window.sessionStorage; 


loginButton.addEventListener("click", () => { 
        let email = document.querySelector("#email-input").value;
        let password = document.querySelector("#wachtwoord-input").value;

        signInWithEmailAndPassword(authenticate, email, password)
        .then((userCredential) => { 
        const user = userCredential.user; 

        sessionStorageProfile.setItem('userEmail', user.email); 
        sessionStorageProfile.setItem('buttonStyle', 'block'); 

        loggedName.innerHTML = sessionStorageProfile.getItem('userEmail'); 
        logoutButton.style.display = sessionStorageProfile.getItem('buttonStyle'); 

        const date = new Date();
        update(ref(database, "users/" + user.uid), {
        last_login: date,
        })
        
        .catch((error) => { 
        const errorCode = error.code; 
        const errorMessage = error.message; 
        console.log(errorCode + ": " + errorMessage);
        })
    }); 
});

logoutButton.addEventListener("click", () => { 
    signOut(authenticate).then(() => { 
        alert("Je bent nu uitgelogd")
        logoutButton.style.display = "none"; 
        loggedName.innerHTML = " "
        emailInput.value = "";
        passwordInput.value = "";
        sessionStorage.clear(); 
    })
    .catch((error) => { 
        const errorCode = error.code; 
        const errorMessage = error.message; 
        console.log(errorCode + ": " + errorMessage);
    })
})

    
const user = authenticate.currentUser; 
onAuthStateChanged(authenticate, (user) => {
    if (user) {
      loginForm.style.display = "none"; 
      document.body.style.backgroundSize = "0%";
      rapportForm.style.display = "flex"; 
      // ...
    } else {
      loginForm.style.display = "flex"; 
      document.body.style.backgroundSize = "contain";
      rapportForm.style.display = "none"; 
    }
  });


window.onload = function() {
    loggedName.innerHTML = sessionStorageProfile.getItem('userEmail'); 
    logoutButton.style.display = sessionStorageProfile.getItem('buttonStyle');
}



window.onunload = function() { 
    signOut(authenticate).then(() => { 
        logoutButton.style.display = "none"; 
        loggedName.innerHTML = " "
        emailInput.value = "";
        passwordInput.value = "";
        sessionStorage.clear(); 
    })
}



