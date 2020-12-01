/*
 * @Author: your name
 * @Date: 2020-11-12 10:55:59
 * @LastEditTime: 2020-11-12 13:46:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-algo/minWindows/minWindow.js
 */

const unordered_map = function () {
	this.map = {};
	this.add = (key) => {
		const count = this.map[key] || 0;
		this.map[key] = count + 1;
		return key;
	};
	this.remove = (key) => {
		const count = this.map[key] || 0;
		if (count) {
			this.map[key] = count - 1;
		}
		return count - 1;
	};
	this.count = (key) => {
		return this.map[key] || 0;
	};
	this.width = () => {
		return Object.keys(this.map).length;
	};
};

var minWindow = (s, t) => {
	let left = 0,
		right = 0;
	const buket = [];
	const targets = [...t];
	const nows = [];
	const width = s.length;
	const target = new unordered_map();
	while (right < width) {
		right++;
		const char = s[right];
		if (t.includes(char)) {
			nows.push(char);
		}
		while (nows.length >= targets.length) {
			left++;
			nows.pop();
		}
	}
	return nows;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
