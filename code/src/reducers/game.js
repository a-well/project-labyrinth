import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    description: '',
    loading: false
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    }
  }
});

export default game;

export const generateDescription = () => {
  return (dispatch, getState) => {
    const start = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.username })
    };
    dispatch(game.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', start)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
      })
      .finally(() => dispatch(game.actions.setLoading(false)))
  };
};

export const generateNextDescription = (direction) => {
  return (dispatch, getState) => {
    const action = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.username,
        type: 'move',
        direction })
    };
    dispatch(game.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', action)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
      })
      .finally(() => dispatch(game.actions.setLoading(false)))
  };
};
