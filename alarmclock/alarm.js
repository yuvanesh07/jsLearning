
 const selectmenu = document.querySelectorAll("select");

 console.log(selectmenu);

for(i=12;i>=0;i--){
    i=i<10?"0"+i:i;
    option=`<option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
} 

for(i=59;i>=0;i--){
    i=i<10?"0"+i:i;
    option=`<option value="${i}">${i}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}  

for(i=2;i>0;i--){
   ampm= i==1?"AM":"PM";
    option=`<option value="${ampm}">${ampm}</option>`;
    selectmenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}   

setInterval(() =>{
let date=new Date();
h=date.getHours();
m=date.getMinutes();
s=date.getSeconds();
AMPM="AM";

if(h>=12){
    h=h-12;
    ampm="pm";

}
h = h ==0 ? h=12:h;

h = h<10 ?"0"+h :h;


console.log (`${h}:${m}:${s}`)



},1000);