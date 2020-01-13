
const addButton = document.querySelector('.addButton');
const list = [];
addButton.addEventListener('click', addList);

function addList () {
  const input = document.querySelector('.input');
  const text = input.value;

  if (text) {
    list.push(text);
    updateDOM();
  }
}

function removeList (index) {
  list.splice(index,1);
  updateDOM();
}

function editList (index) {
    list.splice(index,1,input.value);
  updateDOM();
}

function updateDOM () {
  const listDOM = document.querySelector('.container');

  listDOM.innerHTML = list.map((item, index)=>{
    return `
    <div class="item" index="${index}">
      <input  type="text" class="item-input" placeholder="${item}" disabled>
      <button class="editButton" id="button" onclick ="editList(${index})">Edit</button>
      <button class="removeButton" onclick="removeList(${index})">Remove</button>
    </div>
    `;
  });
}












// var botao = document.querySelectorAll('.addButton');
// var inputs = [];

// function addBotao(){
//     const testeInpu = document.querySelector('.input').value;
//      const item = document.querySelector('.item');
//      console.log(testeInpu);
     
     

// }

// botao.forEach((link)=> {
//   link.addEventListener('click', addBotao);
// });
