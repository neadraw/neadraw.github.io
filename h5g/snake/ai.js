var util = {
	x: function(p) {
		return p % 24;
	},
	y: function(p) {
		return (p - x(p)) / 24;
	},
	snkx: function() {
		return x(snk[0]);
	},
	snky: function() {
		return y(snk[0]);
	},
};
function ai() {
	ai1()
}
function ai1() {
	if (util.snky() == 0) {
		if (dir == 2) {
			set(3);
		} else if (dir == 3) {
			set(4);
		} else if (dir == 1 || dir == 4) {
			set(4);
		}
	} else if (util.snky() == 23) {
		if (dir == 4) {
			set(3);
		} else if (dir == 3) {
			set(2);
		} else if (dir == 1 || dir == 4) {
			set(2);
		}
	} else {
		if (dir != 2 && dir != 4) set(2);
	}
}
function ai2() {
	if (rdm(4) == 0) set(rdm(4) + 1);
}
