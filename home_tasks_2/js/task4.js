const childAge = parseInt(prompt("Введіть вік дитини (до 6 років)", "5"));
const schoolAge = 7;
const higherEducationEnterAge = 16;
const higherEducationFinishAge = 21;
const enterSchool = schoolAge - childAge;
const enterHigherEducation = higherEducationEnterAge - childAge;
const finishHigherEducation = higherEducationFinishAge - childAge;
document.write(
  `Через ${enterSchool} років дитина закінчить відвідувати садочок і піде у школу. 
  Через ${enterHigherEducation} рокiв закiнчить школу i пiде у вищий навчальний заклад. 
  Через ${finishHigherEducation} рокiв закiнчить навчання у вищому навчальному закладi.`
);
