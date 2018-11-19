import React from 'react';
import ReactDOM from 'react-dom';
import GameService from './game/game-service';
import App from './app';
import './index.css'

const API_URL = 'http://localhost:9292/api/v1'
const gameService = new GameService(API_URL);

ReactDOM.render(
  <App gameService={gameService} />, document.getElementById('root'));
