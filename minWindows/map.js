/*
 * @Author: your name
 * @Date: 2020-11-12 11:13:35
 * @LastEditTime: 2020-11-12 11:50:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-algo/minWindows/map.js
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
		console.log(Object.keys(this.map));
		return Object.keys(this.map).length;
	};
};

const a = new unordered_map();
const b = new unordered_map();
a.add('asd');
b.add('asd');
a.add('asd');
b.add('asd');

a.add('asd');

a.add('asd');
console.log(b.width());
