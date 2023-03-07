import React from 'react'
import styled from 'styled-components/macro'

const StyledMazeLogo = styled.img`
 margin-top: 120px;
 width: 200px;
 margin-bottom: 5px;
`

const MazeLogo = () => {
  return (
    <StyledMazeLogo src="./assets/images/maze_icon.svg" alt="The Maze" />
  )
}

export default MazeLogo