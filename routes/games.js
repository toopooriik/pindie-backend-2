const gamesRouter = require('express').Router();

const {findAllGames, createGames, findGameById} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById} = require('../controllers/games');


gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGames, sendGameCreated);
gamesRouter.get('/games/:id', findGameById, sendGameById);

module.exports = gamesRouter;