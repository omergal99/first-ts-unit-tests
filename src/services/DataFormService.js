const initialState = {
  reachedLevel: 1,
  currLevel: 1,
  levels: []
}

function getData() {
  return Promise.resolve(initialState)
}

function try1(){
  return Promise.resolve('aaaa');
}

export default {
  getData,
  try1
}