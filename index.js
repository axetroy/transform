/**
 * Created by axetroy on 2017/4/4.
 */

function Transform(src) {
  this.src = src;
  this.dist = null;
  this.transforms = [];
}

const prototype = Transform.prototype;

prototype.constructor = Transform;

prototype.pipe = function(fn) {
  if (typeof fn !== 'function')
    throw new Error('Pipe argument must be function');
  this.transforms.push(fn);
  return this;
};

prototype.value = function() {
  const transforms = this.transforms.slice();
  let input = this.src;
  while (transforms.length) {
    const transform = transforms.shift();
    input = transform.call(this, input);
  }
  this.dist = input;
  return this.dist;
};

function transform(src) {
  return new Transform(src);
}

module.exports = transform;
