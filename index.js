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
// const tableRow = document.createElement("tr");
// const tableSection = document.createElement("td");
// table.append(tableRow);
// tableRow.append(tableSection);
// tableSection.innerText="djsfhgdf";




function addrowes(object){
    let tableRow = document.createElement("tr");
    table.append(tableRow);
    for (const prop in object) {
        let tableSection = document.createElement("td");
        tableSection.textContent= object[prop];
        tableRow.append(tableSection);

    }
}



for(let i=0;i<mainarr.length;i++){
    addrowes(mainarr[i]); 
}














// //calculete the additional properties and put them inside all object
// for (const obj of mainarr) {
//     obj.totalTime = Math.round((obj.finishedAt-obj.startedAt)/3600000);
//     obj.tasksFinishedPrecent=Math.floor((obj.tasksFinished/obj.tasksGiven)*100) ;
    
// }
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





