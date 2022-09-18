 
const getData = () => {
    fetch(
    "data.json"
     )
      .then((response) => response.json())
      .then((datas) => datas.map((data) => createH1(data.id,data.name,data.email,data.address.city,data.company)));
  };
  
  getData();                                               
 
  const createH1 = (ele1,ele2,ele3,ele4 ) => {
    const tr = document.createElement("tr");


      const td1 = document.createElement("td");
      td1.textContent = ele1;
      tr.appendChild(td1);
      const td2 = document.createElement("td");
      td2.textContent = ele2;
      tr.appendChild(td2);
      const td3 = document.createElement("td");
      td3.textContent = ele3;
      tr.appendChild(td3);
      const td4 = document.createElement("td");
      td4.textContent = ele4;
      tr.appendChild(td4);

       // ***********************************
       const edit = document.createElement("td");
       const butedit = document.createElement("button");
       butedit.classList='edit-btn btn';
       butedit.textContent = 'edit';
       edit.appendChild(butedit)
      tr.appendChild(edit)
       const del = document.createElement("td");
       const butdelete = document.createElement("button");
       butdelete.classList='delete-btn btn';
       butdelete.textContent = 'delete';
       del.appendChild(butdelete)
    tr.appendChild(del)
      // **********************************
    document.querySelector("#box").appendChild(tr);
  
  };
//   ********************************************:
const maindiv = document.querySelector('.pop');
const addbtn = document.querySelector('.add-btn');
const save = document.querySelector('#save');
const close = document.querySelector('#close');
// ******************************************
addbtn.onclick =  function addnew(){
    if(maindiv.classList.contains('hide')){
      maindiv.classList.remove('hide');
    } }
// *****************************************************
close.onclick =  function clo(){
      maindiv.classList.add('hide');
    }
// ******************************************
save.onclick =  function s(){
  const inputid = document.querySelector('.id');
  const inputname = document.querySelector('.name');
  const inputmail = document.querySelector('.mail');
  const inputcompany = document.querySelector('.company');

 if(inputid.value === '' || inputname.value === '' || inputmail.value === '' || inputcompany.value === '' ){
    console.log('no value ');
    // notask.textContent = 'please write task'
    // notask.style.color =' #e91e63';
 

}else{
//    console.log('hi')
 
    createH1(inputid.value,inputname.value,inputmail.value,inputcompany.value);
    maindiv.classList.add('hide');
    

}
}
// delete btn
document.addEventListener('click',(e)=>{
  
    if(e.target.className=='delete-btn'){
      console.log('hi') 
}
});
