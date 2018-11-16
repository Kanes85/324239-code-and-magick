var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

// Скорость файерболов в зависимости от направления
var getFireballSpeed = function(left) {
  if (left) {
    return 5;
  }
  return 2;
};

// Пропорциональная высота мага
var getWizardHeight = function() {
  return 1.337 * wizardWidth;
}

// Расположение мага по горизонтали
var getWizardX = function(width) {
  return (width - wizardWidth) / 2;
}

// Расположение мага по вертикали
var getWizardY = function(height) {
  return (height - getWizardHeight()) * 2 / 3;
}
