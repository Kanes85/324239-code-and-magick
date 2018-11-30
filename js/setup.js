'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorMantle = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEyas = ['black', 'red', 'blue', 'yellow', 'green'];

var generateWizard = function () {

  var randomName = firstName[Math.floor(Math.random() * firstName.length)];
  var randomSurname = surName[Math.floor(Math.random() * surName.length)];
  var wizardName = [randomName, randomSurname].join('\n');
  var coatColor = colorMantle[Math.floor(Math.random() * colorMantle.length)];
  var eyesColor = colorEyas[Math.floor(Math.random() * colorEyas.length)];


    var wizards = {
      name: wizardName,
      coat: coatColor,
      eyes: eyesColor
    };
    console.log(wizards);
};


//   for (var i = 0; i < 4; i++) {
//     generateWizard();
// };

var getDataWizard = function () {
  var data = [];
  for (var i = 0; i < 4; i++) {
  data.push(generateWizard());
  console.log(data);
  };
};
getDataWizard();

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;

  return wizardElement;
};


var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
setupSimilarList.appendChild(fragment);
