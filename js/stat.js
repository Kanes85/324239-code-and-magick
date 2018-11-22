'use strict';

var CLOUD_WIDTH = 420; //Ширина таблички
var CLOUD_HEIGHT = 270; //Высота таблички
var CLOUD_X = 100; //Положение таблички по горизонтали (координата X)
var CLOUD_Y = 10; //Положение таблички по вертикали (координата Y)
var GAP = 10; //Шаг
var TEXT_HEIGHT = 100; //Высота текстового поля с поздравленнием
var FONT_GAP = 20; //Шаг шрифта
var BAR_WIDTH = 40; //Ширина столбца
var BAR_HEIGHT = CLOUD_HEIGHT - TEXT_HEIGHT - (GAP * 2); //высота столбца
var GAP_BAR = 50;

// var NAMES = ['ВЫ', 'Кекс', 'Катя', 'Игорь']; //Массив имен игроков

// Отрисовка таблички
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Табличка с данными
var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2, FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_WIDTH / 2, FONT_GAP * 2);

  ctx.fillStyle = '#000000';
  ctx.fillText('Вы', CLOUD_X + GAP_BAR, 250);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(150, 90, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillStyle = '#000000';
  ctx.fillText('Кекс', 240, 250);
  ctx.fillStyle = 'rgba(0, 72, 255, 0.9)';
  ctx.fillRect(240, 90, BAR_WIDTH, 150);

  ctx.fillStyle = '#000000';
  ctx.fillText('Катя', 330, 250);
  ctx.fillStyle = 'rgba(55, 102, 221, 0.5)';
  ctx.fillRect(330, 90, BAR_WIDTH, 150);

  ctx.fillStyle = '#000000';
  ctx.fillText('Игорь', 420, 250);
  ctx.fillStyle = 'rgba(25, 61, 154, 0.7)';
  ctx.fillRect(420, 90, BAR_WIDTH, 150);
};
