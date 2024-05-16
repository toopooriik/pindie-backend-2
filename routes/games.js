const gamesRouter = require('express').Router();

const {
    findAllGames, 
    createGames, 
    findGameById, 
    updateGame,
    deleteGame
} = require('../middlewares/games');
const {sendAllGames, 
    sendGameCreated, 
    sendGameById, 
    sendGameUpdated,
    sendGameDeleted
} = require('../controllers/games');


gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGames, sendGameCreated);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.put("/games/:id", findGameById, updateGame, sendGameUpdated);
gamesRouter.delete('/games/:id',deleteGame, sendGameDeleted)

module.exports = gamesRouter;