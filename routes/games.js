const gamesRouter = require('express').Router();

const {
    findAllGames, 
    createGames, 
    findGameById, 
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsGameExists
} = require('../middlewares/games');
const {sendAllGames, 
    sendGameCreated, 
    sendGameById, 
    sendGameUpdated,
    sendGameDeleted
} = require('../controllers/games');


gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, checkEmptyFields, checkIsGameExists, createGames, sendGameCreated);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.put("/games/:id", findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendGameUpdated);
gamesRouter.delete('/games/:id',deleteGame, sendGameDeleted)

module.exports = gamesRouter;