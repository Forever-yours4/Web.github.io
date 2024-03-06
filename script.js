/* console.log("hey");
let arr= [9999,4999.6, 10 ,55563366]
function getMK() {
    
arr.forEach(element => {
    if(element<999) {
  
    console.log( element  );
        
    }
    else if (element>999 , element<1000000){
        console.log(element +'K');
    }
 else if (element>999999){
     console.log(element+'M');
 }
})  */
function card(title, cname, views, duration, thumbnail, months) {
    

    let viewStr
    if(views<1000){
        viewStr= views;
    }
    else if(views<1000000, views>1000){
        viewStr=views/1000 +'k';
    }
    else if(views>1000000) {
        
    }{
        viewStr=views/1000000+ 'M'
    }
    
  let html =  `<div class="container"><div class="card"><img src="${thumbnail }"alt="" class="img"></div> 
        <div class="ab" class="card"><h3>${title}</h3></div>
        <div class="card" class="box"><div class="list">${cname} . ${viewStr}views. ${months} months ago   
            </div>
   
   <div class="stick">${duration}</div>
    <\div>`

document.querySelector(".container "). innerHTML=document.querySelector(".container "). innerHTML + html
 
}
 document.getElementById("btn").addEventListener("click", card())
 card("hello","ot7", 56667 ,"21.06","content://com.android.providers.downloads.documents/document/1770", 6); 
 card("BTS my love","ot7 forever we", 566688888887 ,"61.90","content://com.android.providers.downloads.documents/document/1770", 9); 
 
