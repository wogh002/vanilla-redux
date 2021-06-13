import { createStore } from 'redux';


const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
const ADD = "ADD";
const MINUS = "minus";

//subscribe(함수); status에 변화가 생기면 함수를 호출한다.
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

