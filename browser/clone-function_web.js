(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
cloneFunction = require('../src/clone-function.js');

},{"../src/clone-function.js":2}],2:[function(require,module,exports){
/*
License gpl-3.0 http://www.gnu.org/licenses/gpl-3.0-standalone.html
*/
/*jslint
    evil: true,
    node: true
*/
'use strict';
/**
 * Clones non native JavaScript functions, or references native functions.
 * @author <a href="mailto:matthewkastor@gmail.com">Matthew Kastor</a>
 * @param {Function} func The function to clone.
 * @returns {Function} Returns a clone of the non native function, or a
 *  reference to the native function.
 */
function cloneFunction(func) {
    var out, str;
    try {
        str = func.toString();
        if (/\[native code\]/.test(str)) {
            out = func;
        } else {
            out = eval('(function(){return ' + str + '}());');
        }
    } catch (e) {
        throw new Error(e.message + '\r\n\r\n' + str);
    }
    return out;
}
module.exports = cloneFunction;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYnJvd3Nlck1haW4uanMiLCJzcmMvY2xvbmUtZnVuY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsb25lRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9zcmMvY2xvbmUtZnVuY3Rpb24uanMnKTtcclxuIiwiLypcclxuTGljZW5zZSBncGwtMy4wIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMy4wLXN0YW5kYWxvbmUuaHRtbFxyXG4qL1xyXG4vKmpzbGludFxyXG4gICAgZXZpbDogdHJ1ZSxcclxuICAgIG5vZGU6IHRydWVcclxuKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG4vKipcclxuICogQ2xvbmVzIG5vbiBuYXRpdmUgSmF2YVNjcmlwdCBmdW5jdGlvbnMsIG9yIHJlZmVyZW5jZXMgbmF0aXZlIGZ1bmN0aW9ucy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+TWF0dGhldyBLYXN0b3I8L2E+XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYSBjbG9uZSBvZiB0aGUgbm9uIG5hdGl2ZSBmdW5jdGlvbiwgb3IgYVxyXG4gKiAgcmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBjbG9uZUZ1bmN0aW9uKGZ1bmMpIHtcclxuICAgIHZhciBvdXQsIHN0cjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyID0gZnVuYy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICgvXFxbbmF0aXZlIGNvZGVcXF0vLnRlc3Qoc3RyKSkge1xyXG4gICAgICAgICAgICBvdXQgPSBmdW5jO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG91dCA9IGV2YWwoJyhmdW5jdGlvbigpe3JldHVybiAnICsgc3RyICsgJ30oKSk7Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UgKyAnXFxyXFxuXFxyXFxuJyArIHN0cik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gY2xvbmVGdW5jdGlvbjsiXX0=
