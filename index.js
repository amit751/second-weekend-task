const mainarr = [
    {
        startedAt:  new Date("2021-01-21:13:00"),
        finishedAt: new Date("2021-01-21:17:00"),
        tasksGiven: 89 ,
        tasksFinished: 15 ,
        topic: "HTML" ,
        

        
    } ,  
    {
        startedAt:  new Date("2021-01-2:13:00"),
        finishedAt: new Date("2021-01-21:17:00"),
        tasksGiven: 67 ,
        tasksFinished: 45 ,
        topic: "CSS" ,
    } ,  
    {
        startedAt:  new Date("2021-01-21:13:00"),
        finishedAt: new Date("2021-01-29:17:00"),
        tasksGiven: 99 ,
        tasksFinished: 45 ,
        topic: "LOOPS" ,
    
    } ,  
    {
        startedAt:  new Date("2021-01-21:10:00"),
        finishedAt: new Date("2021-01-21:17:00"),
        tasksGiven: 20 ,
        tasksFinished: 10 ,
        topic: "FUNCTIONS" ,
    
    } ,  
    {
        startedAt:  new Date("2021-01-21:11:00"),
        finishedAt: new Date("2021-01-21:17:00"),
        tasksGiven: 100 ,
        tasksFinished: 35 ,
        topic: "GITHUB" ,
    
    } ,  
    {
        startedAt:  new Date("2021-01-21:13:00"),
        finishedAt: new Date("2021-01-21:19:00"),
        tasksGiven: 89 ,
        tasksFinished: 4 ,
        topic: "JS" ,
    
    } ,  
    {
        startedAt:  new Date("2021-01-21:13:00"),
        finishedAt: new Date("2021-01-26:17:00"),
        tasksGiven: 10 ,
        tasksFinished: 1 ,
        topic: "ODIO" ,
    
    } ,  
    {
        startedAt:  new Date("2021-01-21:13:00"),
        finishedAt: new Date("2021-01-24:17:00"),
        tasksGiven: 8 ,
        tasksFinished: 4 ,
        topic: "ARREYS" ,
    } ,  
    {
        startedAt:  new Date("2021-01-21:13:00"),
        finishedAt: new Date("2021-01-21:20:00"),
        tasksGiven: 10 ,
        tasksFinished: 2 ,
        topic: "OBJECT" ,
    
    } 
];

const h1 = document.createElement("h1");
h1.innerText="buliding new table using dom manipulation :)";
document.body.append(h1);

const table = document.createElement("table");
let body = document.getElementsByTagName("body");
document.body.append(table);

//calculete the additional properties and put them inside all object
for (const obj of mainarr) {
    obj.totalTime = Math.round((obj.finishedAt-obj.startedAt)/3600000);
    obj.tasksFinishedPrecent=Math.floor((obj.tasksFinished/obj.tasksGiven)*100) ;
}    

//creating the tables head:
let tableRow = document.createElement("tr");
table.append(tableRow);
for (const prop in mainarr[0]) {
   let tableHead = document.createElement("th");
   tableHead.textContent = prop;
   tableRow.append(tableHead);
}

//function for adding a singel row + adding classes to properties i want to change their color.
function addrowes(object){
    let tableRow = document.createElement("tr");
    table.append(tableRow);
    let count = 0;
    for (const prop in object) {
        let tableSection = document.createElement("td");
        tableSection.textContent= object[prop];
        tableRow.append(tableSection);
        if(count===5){
            tableSection.className= "addcolor1";  
        }
        if (count === 6){
            tableSection.className= "addcolor2";
        }
        count++;

    }
}

//adding all rows
for(let i=0;i<mainarr.length;i++){
    addrowes(mainarr[i]); 
}

//collecting all td elements reffering to "total time" property
let dynamicProps1 = document.getElementsByClassName("addcolor1");
//conditions for  "total time" property
for (const dynamicProp1 of dynamicProps1) {
    if(Number(dynamicProp1.innerText)>0 && Number(dynamicProp1.innerText)<30 ){
        dynamicProp1.classList.add("redColor");  
    }else if(Number(dynamicProp1.innerText)>30 && Number(dynamicProp1.innerText)<100 ){
        dynamicProp1.classList.add("orangeColor");  
    }else if(Number(dynamicProp1.innerText)>100 && Number(dynamicProp1.innerText)<180 ){
        dynamicProp1.classList.add("greenColor");  
    }

}
const presentSing ="%";

//collecting all td elements reffering to "tasks precent" property
let dynamicProps2 = document.getElementsByClassName("addcolor2");
//conditions for  "tasks precent" property
for (const dynamicProp2 of dynamicProps2) {
    if(Number(dynamicProp2.innerText)>0 && Number(dynamicProp2.innerText)<20 ){
        dynamicProp2.classList.add("blueColor");  
    }else if(Number(dynamicProp2.innerText)>20 && Number(dynamicProp2.innerText)<40 ){
        dynamicProp2.classList.add("aquaColor");  
    }else{
        dynamicProp2.classList.add("perpulColor");  
    }

}
for (const td of dynamicProps2) {
    td.append(presentSing);
}
// dynamicProps2.forEach(element.append(presentSing));



















