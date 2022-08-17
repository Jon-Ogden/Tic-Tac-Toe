# Tic-Tac-Toe Coding Challenge
Here is my submission for the coding Challenge. In the 4 hours I had I was able to get a functional game that meets most of the requirements you listed. 
There are a few bugs that I will detail below and what I believe would be a potential fix for them if I were given more time.

## Features I failed to include in the alloted time 
 - a button to play another round (although another round can be played simply by refreshing the page)
 - thanking the player and closing the program if they want to quit

 ## Bugs I found but failed to fix
 - if the player wins the game the computer can still take another turn (if there is another open space) which can lead to the player having an artificial loss.
 this is being caused by the way the computer turn is triggered and it continuing to run after a victor has been declared. One potential solution may be moving the code that controls the computer move to it's own function that is only called after a player turn has been made and if no victor has been declared.
 - the second but is most likely an extension of the first one where after a player victory and after the computer has taken another turn the player may take yet another piece and this can go on until the computer wins or unil a tie occurs (it should be noted that upon a computer victory the game freezes and is over as it should.) this Bug would be fixed by fixing the first bug I listed

 ### How to Run this game
 This is a standard single page react app so to run it all you need to do is clone down the repository and in your terminal cd into the repo and run $yarn start and you should be good to go. there are no other dependencies so as long as you have the means to run a react app you can run this game.

 # Thank you for your consideration and I hope to have the opportunity to work with you again!
 I did use the full 4 hours plus an extra 15 minutes to write this README file, but despite my short commings here I normally am able to work very quickly and efficiently.
 I also wish to add that 100% of this code is mine and I did not search anything online aside from a few syntax clarifications. 