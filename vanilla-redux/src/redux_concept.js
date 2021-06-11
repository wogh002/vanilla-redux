import { createStore } from 'redux';


const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
const ADD = "ADD";
const MINUS = "minus";


//createStore(reducer(state,{action})) = state 보관장소
//reducer = state 데이터 수정.
//reducer 리턴하는 것은 전부 데이터(현재의 state)가 된다.
//getState() 리듀서에서 리턴 한 state.
//dispatch() action을 전달해준 후 reducer함수 실행한다 (리듀서의 두번쨰 인자)
//subscribe(함수); status에 변화가 생기면 함수를 호출한다.
//store 를 수정 할 수 있는 방법은 action을 사용하는 것.

const countModidfier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}

const countStore = createStore(countModidfier);

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

add.addEventListener('click', () => {
  countStore.dispatch({ type: ADD });
});
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));
;

