# what was wrong in the code
-- In the previous code , whenever we type anything in the input , it will delay and then run the function. the timer starts for every thing
you type and after the 500ms it would run one by one
but we want the function to execute when you stop typing for the 500ms.

#  How you fixed it
-- As it was mentioned to Cancel the previous timeout if a new event comes in within the delay and calls the function after 500ms of no new inputs.
clearTimeout(timer) I added this before setting a new timeout