# Game-of-Life-Website [![Jekyll site CI](https://github.com/SimonNyvall/Game-of-Life-Website/actions/workflows/jekyll.yml/badge.svg)](https://github.com/SimonNyvall/Game-of-Life-Website/actions/workflows/jekyll.yml)

![giphy](https://user-images.githubusercontent.com/50596493/183426858-02dd13b0-b4a6-4370-97e4-6153c121a593.gif)

## Project Description
A project made with javascript, html and CSS to create the game 'game of life'. Have been using Linux the few past months and have never had an easy way to do graphics. So I thought I would tackle a web project to illustrate some graphics.
### Rules
The Game of Life rules are:
```
1.Any live cell with two or three live neighbours survives.
2.Any dead cell with three live neighbours becomes a live cell.
3.All other live cells die in the next generation. Similarly, all other dead cells stay dead.
```
I wrote the conditions in three if-statements. Where I have an array of billing to check if the cell is alive or dead, and calculate the cells neighbors around it. One cell can only have eight neighbors, so you check cells around the current one.
```
if [ CELL == DEAD && CELLS NEIGHBORS == 3 ]{
    NextGenerationOfCell = Alive;
}
```
```
else if [ CELL == ALIVE && (NEIGHBORS < 2 || NEIGHBORS > 3)]{
    NextGenerationOfCell = Dead;
}
```
```
else{
    NextGenerationOfCell = Alive;
}
```
NOTE: All of the check should be done before changing any state to alive or dead. Therefore have two arrays with the current generation and the next one.

# Install and Run the Project

Step one:
```
git clone https://github.com/SimonNyvall/Game-of-Life-Website.git
```
Step two:
```
Install Live Server by Ritwick Dey in the extensions tab in VS CODE
```
Step three:
```
Right-click on the html and select open with 'live server' 
```

# Credits
Special thanks to the The Coding Train for the project idea, link to his video below.    
[![here](https://www.youtube.com/watch?v=FWSR_7kZuYg&t=1802s)]
==> https://www.youtube.com/watch?v=FWSR_7kZuYg&t=1802s <==
