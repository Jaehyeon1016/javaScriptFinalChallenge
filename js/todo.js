const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //const가 아니라 let으로 바꿔야 새로고침하기 전 값들을 기억해서 새로고침 한 뒤에도 가져올 수 있음

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringity는 어떤 js코드든 string으로 바꿔줌
}

function deleteToDo(event) {
  const li = event.target.parentElement;//버튼을 클릭했을 때 어떤게 클릭된건지 알기 위해서 event.target은 <button>을 찾아내고 parentElement가 li를 찾아내고 그 안을 보면 어떤 todo인지 알 수 있음
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //toDos에 있는 값들 중 x가 눌린 값의 id와 다른 애들만 true가 나오게 해서 filter에 안걸리게 하는거임 근데 li.id가 string이라 숫자로 바꿔줌
  
  saveToDos();//지워진 array를 다시 저장해야됨
}

function paintToDo(newToDo) {
  const li = document.createElement("li");//<li></li>을 만듬
  li.id = newToDo.id;
  const span = document.createElement("span"); //<span></span>을 만듬
  span.innerText = newToDo.text;//<span>newToDo</span> 이제 newtodo가 object임
  const button = document.createElement("button");//버튼 만들고
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);//span을 li안에 넣음
  li.appendChild(button);//버튼도 넣음
  toDoList.appendChild(li);//li를 span안에 넣음
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),//random한 숫자를 주는 코드인데 각 입력값에 고유번호를 부여하는거임
  }
  toDos.push(newToDoObj); //입력한 값 모두 array에 저장함
  paintToDo(newToDoObj);
  saveToDos();
  
}
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {//만약 localstorage에 저장된 값이 있으면
  const parsedToDos = JSON.parse(savedToDos);//그 값이 array모습을 한 string이면 그걸 다시 array로 바꿔줌
  toDos = parsedToDos;//여기서 새로고침 전 데이터들을 불러옴
  parsedToDos.forEach(paintToDo);//array의 각 아이템에 대해 function을 실행할 수 있게 해줌
  //parsedToDos.forEach((item) => console.log(item)); 위 코드랑 같은 역할
}
