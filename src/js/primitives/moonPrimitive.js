var svg = require('../svg')
	, style = require('style')

	, TWO_PI = Math.PI * 2
	, FILL_COLOUR = style.getDocumentStyle('.moon', 'fill') || '#afc1c9';

/**
 * Render
 * @param {DOMElement} element
 * @param {Object} options
 */
exports.render = function (element, options) {
	if (options.type == 'svg') {
		return renderSVG(element, options);
	} else {
		return renderCanvas(element, options);
	}
};

/**
 * Render svg version
 * @param {DOMElement} element
 * @param {Object} options
 * @returns {String}
 */
function renderSVG (element, options) {
	svg.appendChild(element, 'use', {
		'xlink:href': '#moon',
		x: '0',
		y: '0',
		width: '100',
		height: '100',
		transform: 'translate('
			+ options.x
			+ ','
			+ options.y
			+ ') scale('
			+ options.scale
			+ ')'
	});
}

/**
 * Render canvas version
 * @param {DOMElement} element
 * @param {Object} options
 */
function renderCanvas (element, options) {
	var ctx = element.getContext('2d');

	ctx.save();

	ctx.translate(options.x, options.y)
	ctx.scale(options.scale, options.scale);
	ctx.fillStyle = FILL_COLOUR;
	ctx.beginPath();
	ctx.moveTo(23,20);
	ctx.bezierCurveTo(23,12.322,25.887999999999998,5.321999999999999,30.631,0.015999999999998238);
	ctx.bezierCurveTo(30.421,0.012,30.212,0,30,0);
	ctx.bezierCurveTo(13.432,0,0,13.432,0,30);
	ctx.bezierCurveTo(0,46.568,13.432,60,30,60);
	ctx.bezierCurveTo(38.891,60,46.875,56.129,52.369,49.984);
	ctx.bezierCurveTo(36.093,49.646,23,36.356,23,20);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}