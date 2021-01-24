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

//function for adding a singel row
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


let dynamicProps1 = document.getElementsByClassName("addcolor1");
console.log(dynamicProps1);
for (const dynamicProp1 of dynamicProps1) {
    if(Number(dynamicProp1.innerText)>0 && Number(dynamicProp1.innerText)<30 ){
        dynamicProp1.classList.add("redColor");  
    }else if(Number(dynamicProp1.innerText)>30 && Number(dynamicProp1.innerText)<100 ){
        dynamicProp1.classList.add("orangeColor");  
    }else if(Number(dynamicProp1.innerText)>100 && Number(dynamicProp1.innerText)<180 ){
        dynamicProp1.classList.add("greenColor");  
    }

}
console.log(dynamicProps1);

let dynamicProps2 = document.getElementsByClassName("addcolor2");
for (const dynamicProp2 of dynamicProps2) {
    if(Number(dynamicProp2.innerText)>0 && Number(dynamicProp2.innerText)<20 ){
        dynamicProp2.classList.add("blueColor");  
    }else if(Number(dynamicProp2.innerText)>20 && Number(dynamicProp2.innerText)<40 ){
        dynamicProp2.classList.add("aquaColor");  
    }else{
        dynamicProp2.classList.add("perpulColor");  
    }

}
console.log(dynamicProps2);














//calculete the additional properties and put them inside all object
// for (const obj of mainarr) {
//     obj.totalTime = Math.round((obj.finishedAt-obj.startedAt)/3600000);
//     obj.tasksFinishedPrecent=Math.floor((obj.tasksFinished/obj.tasksGiven)*100) ;
    
// // }
// //creating the title of the colums
// document.write('<h1>destenations</h1>');
// document.write('<table>');
// document.write('<th> started At </th>');
// document.write('<th> Finished At </th>');
// document.write('<th> Tasks Given </th>');
// document.write('<th> Tasks Finishd </th>');
// document.write('<th> Topic </th>');
// document.write('<th> Total Time  </th>');
// document.write('<th> Tasks % </th>');

// //creating the body of the table
// for (const obj of mainarr) {
//     document.write("<tr>");
//     document.write("<td>" + obj.startedAt + "</td>");
//     document.write("<td>" + obj.finishedAt + "</td>");
//     document.write("<td>" + obj.tasksGiven + "</td>");
//     document.write("<td>" + obj.tasksFinished + "</td>");
//     document.write("<td>" + obj.topic + "</td>");
//     if(obj.totalTime>0 && obj.totalTime<30){
//         document.write('<td class= "colora">' + obj.totalTime + "</td>");
//     }else if(obj.totalTime>30 && obj.totalTime<100){
//         document.write('<td class= "colorb">' + obj.totalTime + "</td>");
//     }else{
//         document.write('<td class= "colorg">' + obj.totalTime + "</td>");
//     }
//     if(obj.tasksFinishedPrecent>0 && obj.tasksFinishedPrecent<20){
//         document.write('<td class= "color1">' + obj.tasksFinishedPrecent + "%</td>");
//     }else if(obj.tasksFinishedPrecent<40 && obj.tasksFinishedPrecent>20){
//         document.write('<td class= "color2">' + obj.tasksFinishedPrecent + "%</td>");
//     }else{
//         document.write('<td class= "color3">' + obj.tasksFinishedPrecent + "%</td>");
//     }
//     document.write("</tr>");

    
    
// }
// document.write('</table>');





