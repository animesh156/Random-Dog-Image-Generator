

let dogImageDiv=document.getElementById("dogImageDiv");
let loadBtn=document.getElementById("loadImage");

let loadDogImage=()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=>response.json())
    .then(json=>{

        dogImageDiv.innerHTML=`<img src='${json.message}' alt="" height=300 width 200>`
    });
}
