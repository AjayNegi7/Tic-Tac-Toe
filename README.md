# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. Players take turns marking the spaces in a 3×3 grid, and the first player to get three of their marks in a row (vertically, horizontally, or diagonally) wins the game.

## Features

- Two players can play against each other.
- Players can reset the game and start a new one.
- The game displays a message when a player wins.

## Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling the game interface.
- **JavaScript**: Game logic and interaction.

# File Structure

tic-tac-toe <br />
├── index.html----------------------------->                Main HTML file <br />
├── style.css------------------------------>             Styles for the game <br />
└── index.js------------------------------->                 Game logic

## How to Play

- Click on an empty box to place your mark (X or O).
- The game alternates between players, with one player using "X" and the other using "O".
- After each move, the game checks for a winner.
- If a player wins, a message will display announcing the winner.
- Use the **Reset** button to clear the board and start a new game while keeping the same player marks.
- Use the **New Game** button to start a fresh game, clearing all player marks and messages.

## Game Logic

- The game utilizes an array of winning patterns to determine a winner. The winning patterns include all possible rows, columns, and diagonals in the 3×3 grid.
- The `resetGame` function resets the game state by enabling all boxes, clearing their contents, and hiding any win messages.
- The `checkWinner` function evaluates the current state of the board after each move, checking against the winning patterns to see if a player has won the game.
- If a player achieves three marks in a row (horizontally, vertically, or diagonally), the game displays a message announcing the winner and disables further moves until the game is reset.

## Media Queries

The game is responsive and adjusts its layout based on screen size using media queries, ensuring it works well on mobile devices.

