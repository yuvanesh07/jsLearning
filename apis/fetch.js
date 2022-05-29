const apiurl="https://catfact.ninja/fact";

fetch(apiurl)
   .then(function (res){
    if(res.status===200) return res.json();
    else throw new Error("Something failed");
   })
   .then (function (data){
       console.log(data);
   });