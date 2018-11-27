'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var firstName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var colorMantle = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var colorEyas = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// var nameWizard = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + surName[Math.floor(Math.random() * surName.length)];

// var randomName = firstName[Math.floor(Math.random() * firstName.length)];
// var randomSurname = surName[Math.floor(Math.random() * surName.length)];

for (var i = 0; i < 4; i++) {
  var randomName = firstName[Math.floor(Math.random() * firstName.length)];
  var randomSurname = surName[Math.floor(Math.random() * surName.length)];
var wizardName = [randomName, randomSurname].join(' ');
var coatColor = colorMantle[Math.floor(Math.random() * colorMantle.length)];

var eyesColor = colorEyas[Math.floor(Math.random() * colorEyas.length)];

var wizards = [{
  nameWiz: wizardName,
  coat: coatColor,
  eyas: eyesColor
}];
console.log(wizards);
};

// var coatColor = colorMantle[Math.floor(Math.random() * colorMantle.length)];

// var eyesColor = colorEyas[Math.floor(Math.random() * colorEyas.length)];



// for (var i = 0; i < 4; i++) {
//   wizard[i] = [{
//     name: nameWizard,
//     coat: coatColor,
//     eyes: eyesColor
//   }];
//   console.log(wizard);
// };
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].nameWiz;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyas;
  setupSimilarList.appendChild(wizardElement);
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
// similarListElement.appendChild(fragment);

// var renderWizard = function (wizard) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);
//
//   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//
//   return wizardElement;
// }
//
// var fragment = document.createDocumentFragment();
// for (var i = 0; i < 4; i++) {
//   fragment.appendChild(renderWizard(wizards[i]));
// }
// similarListElement.appendChild(fragment);

// var renderWizard = function (wizard) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);
//
//   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//
//   return wizardElement;
// }
