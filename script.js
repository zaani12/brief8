let Nom = document.getElementById('Nom');
let marque = document.getElementById('marque');
let ddp = document.getElementById('ddp');
let perPrice = document.getElementById('perPrice');
let type = document.getElementById('type');
let promo = document.getElementById('promo');
let btn1 = document.getElementById('btn1');
let btnMod = "submit"
let tmp;



// creat data
let dataproduct ;

if(localStorage.product != null){
    dataproduct = JSON.parse(localStorage.product);
}else{
    dataproduct = [];
}
btn1.onclick = function(event){
    event.preventDefault()
    details()

    let nweproduct = {
        Nom: Nom.value,
        marque: marque.value,
        ddp: ddp.value,
        perPrice: perPrice.value,
        type: type.value,
        promo: promo.value,
    }
    if(Nom.value !='' && marque.value != '' && ddp != '' && perPrice != '' && type.value !='' && Nom_verify(Nom) === true && (marque_verify(marque) === true)) {
    if(btnMod === "submit"){ dataproduct.push(nweproduct);
    }
    else{
        dataproduct [   tmp  ] = nweproduct;
        // btnMod = 'submit';
        // Submit.innerHTML = 'submit'
    }
    clearData()
  
    }
    showData();
    //  save in localstoreg
    localStorage.setItem("product" , JSON.stringify(dataproduct));
  
};
// clear all data
 function clearData(){
    Nom.value = "";
    marque.value = "";
    ddp.value = "";
    perPrice.value = "";
    type.value = "";
    promo.value = "";
 };
//  Raed Data
function showData(){

    let table = "";
    for(let i = 0; i < dataproduct.length; i ++){
    table += `<tr>
    <td>${i+1}</td>
    <td>${dataproduct[i].Nom}</td>
    <td>${dataproduct[i].marque}</td>
    <td>${dataproduct[i].ddp}</td>
    <td>${dataproduct[i].perPrice}</td>
    <td>${dataproduct[i].type}</td>
    <td>${dataproduct[i].promo}</td>
    <td><button onclick="updateData(${i})" id="update">update </button>
     <button onclick="delet()" id="delete">delete</button></td>
    </tr>`
}
    document.getElementById("tablebody").innerHTML = table;

};
// delete data 

function deleteData(i){

    dataproduct.splice(i,1)
    localStorage.product = JSON.stringify(dataproduct);
    showData();
}

// update Data
function updateData(i){
    Nom.value = dataproduct[i].Nom
    marque.value = dataproduct[i].marque
    ddp.value = dataproduct[i].ddp
    perPrice.value = dataproduct[i].perPrice
    type.value = dataproduct[i].type
    promo.value = dataproduct[i].promo
    btn1.innerHTML = "update";
    btnMod = "update";
    tmp = i ;
    scroll({
        top:0,
        behavior: sm
    });
};
showData();

// regexp  
function Nom_verify(Nom){
    return /(([aA-zZ])){3,30}$/.test(Nom.value);
  };
  function marque_verify(marque){
    return /[a-z]{3,30}$/.test(marque.value);}
    
    // function details() {
    //     let modal = `
    //     <span> Name  : ${this.name} <br> </span>
    //     <span> brand : ${this.brand} <br> </span>
    //     <span> Prix  : ${this.price} <br> </span>
    //     <span> production date : ${this.date} <br> </span>
    //     <span> Type : ${this.type} <br> </span>
    //     <span> On discount : ${this.discount} <br> </span>
    //     `
    //     ;
    //     document.getElementById("product_info").style.display = "block";
    //     document.getElementById("message").innerHTML = modal;
    //   }
    
    function details() {
        let modal = `
        <span> Name  : ${Nom.value} <br> </span>
        <span> brand : ${marque.value} <br> </span>
        <span> Prix  : ${perPrice.value} <br> </span>
        <span> production date : ${ddp.value} <br> </span>
        <span> Type : ${type.value} <br> </span>
        <span> On discount : ${promo.value} <br> </span>
        `
        ;
        document.getElementById("product_info").style.display = "block";
        document.getElementById("message").innerHTML = modal;
      };
     
      document.getElementById("delete").addEventListener("click", e=>{
        e.preventDefault()
        delet()
      })
      function delet(){
        document.getElementById("id01").style.display = "block";
      }
    //   modal_btn
    //   let btn_delet2 = document.getElementById('')