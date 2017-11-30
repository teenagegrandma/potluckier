// Action type
const SET_TIMER = 'SET_TIMER';

export const setTimer = (timerObj) => ({ type: SET_TIMER, timer: timerObj })

// Initital State
const timer = {
  time: 0,
  fromAi: false
}

//Reducer
export default function(state = timer, action) {
  if (action.type === SET_TIMER) return action.timer;
  else return state;
}