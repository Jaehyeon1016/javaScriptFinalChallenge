const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //중요하지 않은 string값을 저장하고 싶을 땐 보통 대문자
const USERNAME_KEY = "username"; //js는 string오타나도 오류 안뜸 그걸 방지하기 위해서

function onloginSubmit(event) {
  event.preventDefault(); //브라우저가 submit해서 새로고침되는걸 막아주고
  loginForm.classList.add(HIDDEN_CLASSNAME); //이름 입력하면 입력창 사라지고
  const username = loginInput.value; //입력한 값 저장하고
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //저장한 값 다른데에 저장하고
  greeting.classList.remove(HIDDEN_CLASSNAME); //그 곳의 hidden을 없애서 보이게 함
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //유저가 친 값이 저장되어 있는데 그걸 변수에 다시 넣음

if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onloginSubmit); // 만약 입력값이 없으면 클래스 hidden이 없어지고 입력창이 뜸
} else {
  paintGreetings(savedUsername);
}