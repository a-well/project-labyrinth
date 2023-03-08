import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import game, { generateDescription } from 'reducers/game'
import styled from 'styled-components/macro'
import { StartButton } from './Buttons'
import MazeLogo from './MazeLogo'
import Wrapper from './Wrapper'

function makeid(length) {
  // make username unique by adding random characters at the end
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const UserNameInputContainer = styled.div`
  justify-content: center;
  display: grid;
`

const UserNameInputBackground = styled.div`
  background-image: linear-gradient(#AA9CC2, #18141E);
`

const UserNameInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUser(userNameInputValue + makeid(16)));
    dispatch(generateDescription());
  }

  return (
    <UserNameInputBackground>
      <Wrapper>
        <MazeLogo />
        <p style={{ fontFamily: 'Cinzel', fontSize: '55px', textTransform: 'uppercase' }}>The Maze</p>
        <UserNameInputContainer>
          <form onSubmit={(event) => onFormSubmit(event)} style={{ textAlign: 'center' }}>
            <label htmlFor="user-input">
              <p style={{ textAlign: 'left', marginBottom: '13px', paddingLeft: '2px', color: 'white', letterSpacing: '1px' }}>Player name</p>
              <input
                id="user-input"
                type="text"
                value={userNameInputValue}
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                // autoFocus
                onChange={(event) => setUserNameInputValue(event.target.value)}
                style={{ padding: '5px', width: '200px', marginBottom: '17px', opacity: '0.8', fontFamily: 'inherit', fontSize: 'inherit' }} />
            </label><br />
            <StartButton type="submit" style={{ width: '100%', marginTop: '10px' }}>Start</StartButton>
          </form>
        </UserNameInputContainer>
      </Wrapper>
    </UserNameInputBackground>
  )
}

export default UserNameInput
