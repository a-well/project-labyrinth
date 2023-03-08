import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import GameNavigation from './GameNavigation'
import Map from './Map'
import GameImage from './GameImage.js'

const DescriptionWrapper = styled.div`
  color: white;
  // border: solid 2px hotpink;
  width: 95%;
  display: grid;
  justify-self: center;
  align-self: self-end;
  line-height:0.9em;

  @media (min-width: 667px) {
    width: 80%;
    line-height:1.1em;
  }

  @media (min-width: 1025px) {
    width: 370px;
    height: 700px;
    margin-left: 125px;
    justify-self: left;
    align-self: center;
    line-height:1.2em;
  }

  .description::first-letter {
  font-family: "Gloock";
  initial-letter: 2;
  font-size: 200%; //backup
  border: 1px solid gray;
  font-size: 200%;
  line-height: 1;
  float: left;
  margin-right: 5px;
  padding: 3px;
}
`

const DescriptionText = styled.div`
  display: grid;
  // border: solid 2px green;
  color: white;
  font-size: 15.5px;
  line-height: 1.2;
  align-self: end;
  padding: 10px 0 5px 0;
  font-family: "Average Sans";

  @media (min-width: 667px) {
    padding: 25px 0 0 0;
    font-size: 16px;
  }

  @media (min-width: 1025px) {
    line-height: 1.3;
    font-size: 17px;
  }
`

const Game = () => {
  const description = useSelector((store) => store.game.description)

  return (
    <GameImage coordinates={description.coordinates}>
      <Map coordinates={description.coordinates} />
      <DescriptionWrapper>
        <DescriptionText>
          <p className="description" style={{ margin: '5px', initialLetter: '3' }}>{description.description}</p>

          <p style={{ margin: '5px 0 0 0', textAlign: 'center', fontSize: '25px', color: 'gray' }}>✧</p>
          <p style={{ fontStyle: 'italic', margin: '10px', textAlign: 'center' }}>What will you do next?</p>
          {description.actions.map((action) => (
            <p key={action.direction} style={{ margin: '5px' }}>
              <span style={{ fontWeight: 'bold', letterSpacing: '0.9px', fontSize: '1.05em' }}>Move {action.direction}</span> ⎯ {action.description}
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

