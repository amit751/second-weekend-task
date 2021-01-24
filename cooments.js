//why not working?

// let tabelHead= "";
// for( const prop in mainarr[0] ){
    
//     tabelHead +=  "<th>" +prop + "</th>";
// }
// let namesOfRow = [ "" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ];
// let rowHtml= [ "" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,""  ];



// for( let i = 0 ; i<mainarr.length ; i++){
//     for(prop in mainarr[i]){
//         namesOfRow[i] += "<td>" + mainarr[i][prop] + "</td>";
//     }

// }nn




// for(let j = 0 ; j<rowHtml.length ; j++){
//     rowHtml[j] = "<tr>" +namesOfRow[j] + "</tr>";
// }



// let tabel = rowHtml[0] + rowHtml[1] + rowHtml[2] + rowHtml[3] + rowHtml[4] + rowHtml[5] + rowHtml[6] + rowHtml[7] + rowHtml[8] ; 
// console.log(tabelHead);
// console.log(tabel);
// document.write(`<tabel border = "1"><tr>` );
// document.write(tabelHead );
// document.write( `</tr>` );









// // document.write(tabel);
// // document.write( `</tabel>`);

// // document.write("<tabel><tr>" +tabelHead + "</tr>" +tabel + "</tabel>");



// // document.write(`<table id="tabel1" class="tabel">
// // <caption >week1</caption>
// // <tr>
// //     <th>maine sitec</th>
// //     <th>equipment</th>
// //     <th>more info</th>
// // </tr>`)



// // document.write(`<tr>
// // <td>gaudi</td>
// // <td>money,camera,sunglasses</td>
// // <td><a target=_blank href="https://en.wikipedia.org/wiki/Park_G%C3%BCell">gaudi</a></td>
// // </tr>
// // <tr>
// // <td>sagrda la familya</td>
// // <td>water,money,warm clothes</td>
// // <td><a target=_blank href="https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia">sagrada-barcelona</a></td>
// // </tr>`);





// // document.write(`<tr>
// // <td>city market</td>
// // <td>water,money,toilet paper</td>
// // <td><a target=_blank href="https://www.lametayel.co.il/pois/qxy8x">market</a></td>
// // </tr>

// // </table>`);
// document.write(`<tabel><tr>`);
// for(prop in mainarr[0]){
//     document.write(`<th>${prop} </th>`);
// }
// for(let i=0 ; i<mainarr.length ; i++){
//     for( prop in arr[i]){
//         document.write(`<td>${mainarr[i][prop]}`)
//     }
// }
// document.write(`</tr><tabel>`);

// let typel= 43
// document.write(`<h1>gfkjdh kfdgjh dfgkjh` + typel + `<h1>`);


// for (const obj of mainarr) {
//     obj.totalTime = (obj.finishedAt-obj.startedAt)/3600000;
//     obj.tasksFinishedPrecent=Math.floor((obj.tasksFinished/obj.tasksGiven)*100) +"%";
    
// }

// document.write('<table>');
// document.write('<th> Topic </th>');
// document.write('<th> Startd At </th>');
// document.write('<th> Finished At </th>');
// document.write('<th> Total Time </th>');
// document.write('<th> Tasks Given </th>');
// document.write('<th> Tasks Finishd </th>');
// document.write('<th> Tasks % </th>');

// let count=0;
// for (const obj of mainarr) {
//     document.write("<tr>");
//     document.write("<td>" + obj.startedAt + "</td>");
//     document.write("<td>" + obj.finishedAt + "</td>");
//     document.write("<td>" + obj.tasksGiven + "</td>");
//     document.write("<td>" + obj.tasksFinished + "</td>");
//     document.write("<td>" + obj.topic + "</td>");
//     document.write("<td>"  +obj.totalTime +  "</td>");
//     document.write("<td>" + obj.tasksFinishedPrecent + "</td>");
//     document.write("</tr>");

    
    



// if(obj.totalTime>6){
//     document.write('<td class= "colora">' + obj.tasksFinishedPrecent + "</td>");
// }else if(obj.totalTime<5){
//     document.write('<td class= "colorb">' + obj.tasksFinishedPrecent + "</td>");
// }else{
//     document.write('<td class= "colorg">' + obj.tasksFinishedPrecent + "</td>");
// }
const myObj=
{
    startedAt:  new Date("2021-01-21:13:00"),
    finishedAt: new Date("2021-01-21:17:00"),
    tasksGiven: 89 ,
    tasksFinished: 15 ,
    topic: "HTML" ,
    totalTime: (this.tasksGiven-this.tasksFinished) ,
    tasksFinishedPrecent: Math.round((this.finishedAt-this.startedAt)/3600000)
    

    
} ;