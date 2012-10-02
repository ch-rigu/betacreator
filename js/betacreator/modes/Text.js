/**
 *  Copyright 2012 Alma Madsen
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
goog.provide('bc.mode.Text');

goog.require('bc.Mode');

/**
 * @param {bc.model.Canvas} canvas
 * @param {number} id
 *
 * @constructor
 * @extends {bc.Mode}
 */
bc.mode.Text = function(canvas, id) {
	bc.Mode.call(this, canvas, id);
};
goog.inherits(bc.mode.Text, bc.Mode);

/**
 * @inheritDoc
 */
bc.mode.Text.prototype.mouseDown = function(point) {
	this.canvas.runAction(new bc.model.Action(bc.model.ActionType.CreateText, {
		text: 'hello\nworld',
		x: point.x,
		y: point.y
	}));
};

/**
 * @inheritDoc
 */
bc.mode.Text.prototype.getCursor = function() {
	return 'text';
};