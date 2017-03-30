'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = Math.max.apply(null, times);

  var histogramHeight = 140;
  var step = histogramHeight / max;
  var startX = 140;
  var cellwidth = 40;
  var startY = 270 + 10 - 40;
  var cellIndent = 50;
  for (var i = 0; i < times.length; i++) {
    var x = startX + cellIndent * i + cellwidth * i;
    var name = names[i];
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.filter = 'none';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, 1 )';
      ctx.filter = 'saturate(' + Math.random() + ')';
    }
    ctx.fillRect(x, startY - times[i] * step, cellwidth, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(times[i].toFixed(0), x, startY - 10 - times[i] * step);
    ctx.fillText(names[i], x, 270 + 10 - 20);

  }
};
