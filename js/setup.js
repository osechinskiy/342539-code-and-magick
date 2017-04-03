'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

function generedWizards(n) {
  var wizards = [];
  for (var i = 0; i < n; i++) {
    var nameRand = Math.floor(Math.random() * (wizardNames.length));
    var surnameRand = Math.floor(Math.random() * (wizardSurname.length));
    var coatColorRand = Math.floor(Math.random() * (wizardCoatColor.length));
    var eyesColorRand = Math.floor(Math.random() * (wizardEyesColor.length));
    wizards.push(
      {
        name: wizardNames[nameRand],
        surname: wizardSurname[surnameRand],
        coatColor: wizardCoatColor[coatColorRand],
        eyesColor: wizardEyesColor[eyesColorRand]
      }
    );
  }

  return wizards;
}

var wizards = generedWizards(4);
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

var similarListElement = document.querySelector('.setup-similar-list');
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
