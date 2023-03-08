import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { generateNextDescription } from 'reducers/game'
import { NavButton, RestartButton } from './Buttons'

const ChooseDirectionWrapper = styled.div`
  // border: solid 2px red;
  display: grid;
  color: white;
  text-align: center;
  height: 230px;
  align-self: end;

  @media (min-width: 667px) {
    padding: 0 0 30px 0;
  }

  @media (min-width: 1025px) {
    height: 270px;
    padding: 0;
    height: 240px;
  }
`

const DirectionGrid = styled.div`
  display: grid;
  grid-template-areas: 
    ". north ."
    "west . east"
    ". south .";
  width: 150px;
  height: 150px;
  gap: 5px;
  justify-self: center;

  .north {
    grid-area: north;
  }
  .east {
    grid-area: east;
  }
  .south {
    grid-area: south;
  }
  .west {
    grid-area: west;
  }
`

const GameNavigation = ({ actions, coords }) => {
  const dispatch = useDispatch()

  const handleOnClick = (direction) => {
    dispatch(generateNextDescription(direction));
  }

  const availableMoves = {}
  // eslint-disable-next-line array-callback-return
  actions.map((action) => {
    availableMoves[action.direction] = action
  })

  const resetGame = () => {
    window.location.reload();
  }

  if (coords === '1,3') {
    return (
      <ChooseDirectionWrapper>
        🙂
        <RestartButton
          type="button"
          onClick={resetGame}>Play again
        </RestartButton>
      </ChooseDirectionWrapper>
    )
  }

  return (
    <ChooseDirectionWrapper>
      <p style={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'Gloock', textTransform: 'uppercase', letterSpacing: '2.6px' }}>Choose direction</p>
      <DirectionGrid>
        <div className="north">
          <DirectionButton direction="North" isAvailable={availableMoves.North} handleOnClick={handleOnClick} />
        </div>
        <div className="west">
          <DirectionButton direction="West" isAvailable={availableMoves.West} handleOnClick={handleOnClick} />
        </div>
        <div className="east">
          <DirectionButton direction="East" isAvailable={availableMoves.East} handleOnClick={handleOnClick} />
        </div>
        <div className="south">
          <DirectionButton direction="South" isAvailable={availableMoves.South} handleOnClick={handleOnClick} />
        </div>
      </DirectionGrid>
    </ChooseDirectionWrapper>
  )
}

const DirectionButton = ({ direction, isAvailable, handleOnClick }) => {
  if (isAvailable) {
    return (
      <NavButton
        type="button"
        title={`Go ${direction}`}
        onClick={() => handleOnClick(direction)}>
        {direction.charAt(0)}
      </NavButton>
    )
  }

  return (
    <NavButton
      disabled
      type="button"
      title="This move is not possible here">
      {direction.charAt(0)}
    </NavButton>
  )
}

export default GameNavigation