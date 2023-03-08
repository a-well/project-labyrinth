import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import GameNavigation from './GameNavigation'
import Map from './Map'
import GameImage from './GameImage.js'

const DescriptionWrapper = styled.div`
  color: white;
  // border: solid 2px hotpink;
  width: 92%;
  display: grid;
  justify-self: center;
  align-self: self-end;
  line-height:0.9em;

  @media (min-width: 667px) {
    width: 80%;
    line-height:1.1em;
  }

  @media (min-width: 1025px) {
    width: 350px;
    height: 700px;
    margin-left: 125px;
    justify-self: left;
    align-self: center;
    line-height:1.2em;
  }
`

const DescriptionText = styled.div`
  display: grid;
  // border: solid 2px green;
  color: white;
  font-size: 15px;
  line-height: 1.2;
  align-self: end;
  padding: 20px 0 0 0;
  font-family: "Average Sans";

  @media (min-width: 667px) {
    padding: 25px 0 0 0;
    font-size: 16px;
  }

  @media (min-width: 1025px) {
    font-size: 16.5px;
  }
`

const Game = () => {
  const description = useSelector((store) => store.game.description)

  return (
    <GameImage coordinates={description.coordinates}>
      <Map coordinates={description.coordinates} />
      <DescriptionWrapper>
        <DescriptionText>
          <p>{description.description}</p>
          <p style={{ fontStyle: 'italic' }}>What will you do next?</p>
          {description.actions.map((action) => (
            <p key={action.direction}>
              Go {action.direction}: {action.description}
            </p>
          ))}
        </DescriptionText>
        <GameNavigation
          coords={description.coordinates}
          actions={description.actions} />
      </DescriptionWrapper>
    </GameImage>
  )
}
export default Game

