import styled from 'styled-components/macro'

const StartButton = styled.button`
  background-color:#e2dae8;
  border-radius:6px;
  border:1px solid #8b7bb4;
  cursor:pointer;
  color:black;
  font-size:20px;
  font-weight:bold;
  padding: 2px 2px;
  text-decoration:none;
  display: inline-block;
  font-family: "Catamaran";
  letter-spacing: 1.5px;
  text-transform: uppercase;

  :hover {
    background-color:#8b7bb4;
  }

  :active {
    position:relative;
    top:1px;
  }
`

const NavButton = styled.button`
  background: linear-gradient(to bottom, #e2dae8 5%, #8b7bb4 100%);
  background-color: #e2dae8;
  border-radius: 6px;
  border: 1px solid #8b7bb4;
  cursor: pointer;
  color: #524182;
  font-size: 21px;
  font-weight: bold;
  width: 45px;
  height: 45px;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-family: "Gloock";

  :hover {
    background: linear-gradient(to bottom, #8b7bb4 5%, #e2dae8 100%);
    background-color: #8b7bb4;
  }

  :active {
    position: relative;
    top: 1px;
  }

  :disabled {
    background: linear-gradient(to bottom, #a39ca8 5%, #dbdbdb 100%);
    background-color: #a39ca8;
    cursor: auto;
    color: #9b93b3;
  }
`

const RestartButton = styled.button`
  background: linear-gradient(to bottom, #e2dae8 5%, #8b7bb4 100%);
  background-color: #e2dae8;
  border-radius: 6px;
  border: 1px solid #8b7bb4;
  cursor: pointer;
  color: black;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: bold;
  padding: 4px 12px;
  text-decoration: none;
  margin-top: 30px;
  display: inline-block;
  height: 50px;
  width: 150px;
  justify-self: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: "Average Sans";

  :hover {
    background:linear-gradient(to bottom, #8b7bb4 5%, #e2dae8 100%);
    background-color:#8b7bb4;
  }

  :active {
    position: relative;
    top: 1px;
  }
`

export { NavButton, StartButton, RestartButton }