I have built this simple app while following the Udemy React course https://www.udemy.com/course/react-the-complete-guide-incl-redux/
I have checked the course code and then reproduced the logic myself to practice React.

The app allows to enter a goal in a input text field and to render it on a list. 
When clicking on a single goal this is removed from the UI. This feature is achieved by creating an array (filter method) containing all the goals except the one which id matches the one we have clicked on. 
The form has also validation implemented: when we press on the submit button, and the input field is left empty, the UI is re-rendered with different colors.

