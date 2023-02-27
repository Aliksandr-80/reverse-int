module.exports = function reverse (n) {
  	let rez = "";
	n = Math.abs(n);
	num_s = String(n);
	l_num = num_s.length;
	for (i = 0; i < l_num; i++) {
		rez = num_s[i] + rez;
	};
	rez = Number(rez);
	return rez;
}
