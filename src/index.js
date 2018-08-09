import _ from 'lodash';
import j from 'jquery';
import printMe from './print.js';

function component() {
  var element = j('<div></div>');
  var btn = document.createElement('button');

  element.html(_.join(['Hello','webpack'], ' '))
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());