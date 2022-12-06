'use strict'

var gProjs = _createProjs()

function _createProjs() {
    const projs = [
        _createProj('minesweeper', 'Minesweeper', 'Be careful of the mines', 'Open all empty cells and tag mines without clicking a mine.', 'MineSweeper', '5-12-2022', ["Matrixes", "keyboard events"]),
        _createProj('pacman', 'Pacman', 'Eat them all!', 'Eat all food without hitting the ghosts.', 'git-pacman', '5-12-2022', ["Matrixes", "keyboard events"]),
        _createProj('guess-me', 'Guess Me', 'Do you know who i\'m thinking of?', 'Answer yes or no questions to help the genie know who you\'re thinking of.', 'git-guess-me', '5-12-2022', []),
        _createProj('book-shop', 'Book Shop', 'Choose your ideal book', 'View or update books of your choice.', 'git-book-shop', '5-12-2022', ["cards", "tables"]),
        _createProj('chess', 'Chess', 'Traditional chess game', 'Play chess as you know it.', 'git-chess', '5-12-2022', ["Matrixes"]),
        _createProj('ball-board', 'Ball Board', 'Collect those balls', 'Collect all balls appearing on the board', 'git-ball-board', '5-12-2022', ["Matrixes", "keyboard events"])
    ]
    return projs
}

function _createProj(id, name, title, desc, url, publishedAt, labels) {
    return {
        id,
        name,
        title,
        desc,
        url: `https://ofekabramovitch.github.io/${url}/`,
        publishedAt: Date.parse(new Date(publishedAt)),
        labels
    }
}

function getProjs() {
    return gProjs
}

function getProjById(id) {
    return gProjs.find(proj => proj.id === id)
}