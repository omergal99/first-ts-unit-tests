
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../store/actions';

import Counter from '../cmps/Counter';

function Home() {

  const dispatch = useDispatch();
  const levels = useSelector((state: any) => state.formStore.levels);

  useEffect(() => {
    dispatch(actions.loadFormData())
  });

  console.log(levels);

  return (
    <div>
      <h2>Home</h2>
      <Counter />
    </div>
  )
}

export default Home;