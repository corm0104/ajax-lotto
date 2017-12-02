document.addEventListener('DOMContentLoaded', init);
function init(){
    //when html and js finish loading run this script
    document.getElementById('btnSend').addEventListener('click', getNumbers)
    document.getElementById('btnBack').addEventListener('click', nav)
}
function nav(ev){
    let btn =ev.target;
    console.log(btn.id);
    switch(btn.id){
        case 'btnSend':
            document.getElementById('home').classList.remove('active');
            document.getElementById('list').classList.add('active');
            //getNumbers();
            break;
        case 'btnBack':
             document.getElementById('home').classList.add('active');
            document.getElementById('list').classList.remove('active');
            break;
                 }
}

function getNumbers(ev){
    let url = "http://localhost/mad9014-lotto/nums.php";
    
    let d = document.getElementById('digits');
    let m = document.getElementById('max');
    let dv = d.value;
    let mv = m.value;
    
    //if ststement
    
    nav(ev);
    
    let fd = new FormData();
    fd.append('digits', dv);
    fd.append('max', mv);
    
    let h = new Headers();
    let info ={
        method: 'POST',
        headers: h,
        body: fd
    };
    
fetch(url, info)
      .then(response => response.json())
      .then (data =>{
    if (data.code ==0){
    //code 0 means no errors
    let ul = document.querySelector('ul.num_list');
        ul.innerHTML = "";
        
      data.numbers.forEach ((num) => {
          let li = document.createElement('li');
          li.textContent = num;
          document.querySelector('ul.num_list').appendChild(li);
      });
    }else{
                            
                            }
                
})
}
      
 



