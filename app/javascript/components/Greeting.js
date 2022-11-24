import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();

  const greeting = useSelector((state) => state.data);

  useState(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
};

export default Greeting;