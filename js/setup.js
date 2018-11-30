'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorMantle = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEyas = ['black', 'red', 'blue', 'yellow', 'green'];
var COUNT = 4;

var generateElement = function (property) {
  var element = property[Math.floor(Math.random() * property.length)];
  return element;
};

var generateWizard = function () {
  var randomName = generateElement(firstName);
  var randomSurname = generateElement(surName);
  var wizardName = [randomName, randomSurname].join('\n');
  var coatColor = generateElement(colorMantle);
  var eyesColor = generateElement(colorEyas);

  var wizard = {};
  wizard.name = wizardName;
  wizard.coat = coatColor;
  wizard.eyes = eyesColor;

  return wizard;
};

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// сюда лучше передавать wizard как параметр. Я не понимаю
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < COUNT; i++) {
  var wizard = generateWizard();
  fragment.appendChild(renderWizard());
}
setupSimilarList.appendChild(fragment);
