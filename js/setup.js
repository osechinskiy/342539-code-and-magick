'use strict';

var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

function generateRandInd(set) {
  var randInt = Math.floor(Math.random() * (set.length));
  return set[randInt];
}

function generedWizards(n) {
  var wizards = [];
  for (var i = 0; i < n; i++) {
    wizards.push(
      {
        name: generateRandInd(wizardNames),
        surname: generateRandInd(wizardSurname),
        coatColor: generateRandInd(wizardCoatColor),
        eyesColor: generateRandInd(wizardEyesColor)
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

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var setupUserNname = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('.wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var fireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = generateRandInd(wizardCoatColor);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = generateRandInd(wizardEyesColor);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = generateRandInd(fireball);
});

var onModalWindowOpen = function () {
  setup.classList.remove('hidden');
};

var onModalWindowClose = function () {
  setup.classList.add('hidden');
};

var onModalWindowEscPress = function (evt) {
  if (evt.keyCode === 27) {
    onModalWindowClose();
  }
};

setupOpen.addEventListener('click', function () {
  onModalWindowOpen();
  document.addEventListener('keydown', onModalWindowEscPress);
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    onModalWindowOpen();
  }
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});


setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    onModalWindowClose();
  }
});

setupUserNname.removeEventListener('keydown', onModalWindowEscPress);


setupSubmit.addEventListener('click', function () {
  if (setupSubmit.valid) {
    onModalWindowClose();
  }
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (setupSubmit.valid & evt.keyCode === 13) {
    onModalWindowClose();
  }
});
