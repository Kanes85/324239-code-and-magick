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
var WIDTH_SCORE = 30;

// Отрисовка таблички
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// Табличка с данными
var renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2, FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_WIDTH / 2, FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  var players = [
    {name: 'Вы', color: 'rgb(255, 0, 0, 1)'},
    {name: 'Кекс', color: 'rgba(0, 72, 255, 0.9)'},
    {name: 'Катя', color: 'rgba(55, 102, 221, 0.5)'},
    {name: 'Алеся', color: 'rgba(25, 61, 154, 0.7)'}
  ];

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000000';

    ctx.fillText(Math.floor(times[i]), BAR_HEIGHT + (BAR_WIDTH + GAP_BAR) * i,  BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime + TEXT_HEIGHT - WIDTH_SCORE);

    ctx.fillText(players[i].name, BAR_HEIGHT + (BAR_WIDTH + GAP_BAR) * i, TEXT_HEIGHT + BAR_HEIGHT);

    ctx.fillStyle = players[i].color;

    ctx.fillRect(BAR_HEIGHT + (BAR_WIDTH + GAP_BAR) * i,  BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime + TEXT_HEIGHT - GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
