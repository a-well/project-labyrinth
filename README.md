# The Maze - A Browser Game

## Intro

This is a pair programming project [Petra Eriksson](https://github.com/petrasson) and I did together part of the [Technigo front end course](https://technigo.io/).

We were provided with the game API and tasked to build a responsive broswer game based on it using React and Redux.

We created the design, front end code. The game illustations were generated using NightCafe Stable Diffusion.

## API endpoints

https://labyrinth.technigo.io/start

https://labyrinth.technigo.io/action

## The problem

First we played around with the API using Postman. Once we figured out how it worked we decided on how we wanted the game to behave.

Then we broke the project down into subtasks. 

We created wireframes for the design in Figma, and then went on to generating the art with [NightCafe](https://creator.nightcafe.studio/) which we then edited. We finalised the design once we had the images ready, drawing inspiration from them.

The game was written using React and Redux, see [Technologies used](#technologies-used) below. We used styled components for styling, and Lottie for the loading animation.

Lastly, we deployed it to Netlify.

## Technologies used

- HTML
- CSS
- React
- Redux
- fetch
- styled components
- Lottie
- [ESLint](https://eslint.org/) for code formatting
- [Netlify](https://www.netlify.com/) for deployment

## View it live

https://play-the-maze.netlify.app/

## Running locally

```sh
cd code
npm i
npm run start
```

And go to `http://localhost:3000`
