# Game-of-Life-Website [![Deno](https://github.com/SimonNyvall/Game-of-Life-Website/actions/workflows/deno.yml/badge.svg)](https://github.com/SimonNyvall/Game-of-Life-Website/actions/workflows/deno.yml)

![giphy](https://user-images.githubusercontent.com/50596493/183426858-02dd13b0-b4a6-4370-97e4-6153c121a593.gif)


## Project Description
A project made with javascript, html and css to create the game 'game of life'. Have been useing linux the few past months and have never had a easy way to do graphics. So I thought I would tackle a web project to illustrate some graphics.

### Rules
The Game of Life rules are:
```
1.Any live cell with two or three live neighbours survives.
2.Any dead cell with three live neighbours becomes a live cell.
3.All other live cells die in the next generation. Similarly, all other dead cells stay dead.
```
I wrote the condisions in three if-statments. Where I have a array of boolien to check if the cell is alive or dead, and calculate the cells neighbors around it. One cell can only have eight neighbors, so you check cells around the current one.
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
NOTE: All of the check shoud be done before changing any state to alive or dead. Therefore have two arrays with the current generation and the next one.

# Install and Run the Project
Below my profile put a link to my github pages, there you can test the project via the web. Or you can click here ==> www.fjierf <==

## Install
Step one:
```
git clone 
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
Speciall thanks to the The Coding Train for the project idea, lnik to his video below.
[![The-Coding-Train](https://img.youtube.com/vi/FWSR_7kZuYg&t=1647s/0.jpg)](https://www.youtube.com/watch?v=FWSR_7kZuYg&t=1647s)
