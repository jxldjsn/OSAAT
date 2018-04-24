var w3R17 = window;
for (var S17 in w3R17) {
	if (S17.length === ((0x137, 0x14F) > (0x230, 0x21C) ? (0x16E, 83) : 0x17E <= (8.98E2, 127.9E1) ? (1.141E3, 6) : (0x108, 0x8B)) && S17.charCodeAt((131.9E1 <= (3.93E2, 122.9E1) ? (34., "G") : (9.07E2, 6.19E2) < 30.90E1 ? 'G' : 11.17E2 > (1.1460E3, 0x1FD) ? (76, 3) : (16.3E1, 125.))) === (132. < (1.2530E3, 51) ? (90, 41.5E1) : 83 >= (61., 0xF3) ? 77.10E1 : (0x193, 2) <= (126, 4.11E2) ? (98, 100) : (46., 4.2E2)) && S17.charCodeAt((96 <= (91., 75.) ? 0x124 : (1.069E3, 0x227) < (61.80E1, 130.3E1) ? (125, 5) : (110, 63.40E1))) === (8.97E2 <= (0x111, 1.2650E3) ? (1.331E3, 119) : 56. >= (0xE6, 0x147) ? (139., 0xA2) : (0x198, 1.387E3) <= 123. ? 12.33E2 : (9, 67.60E1)) && S17.charCodeAt((3.94E2 >= (0x13B, 17) ? (121.5E1, 1) : (0x115, 86.60E1))) === ((113., 118.7E1) >= 44 ? (0x217, 105) : 102.9E1 < (0x16A, 38.) ? (96.0E1, 'v') : (0x1B0, 0x94) < (0x16, 16.) ? (0xAD, 1184) : (14.38E2, 7.30E1)) && S17.charCodeAt(((108, 106) >= (0x4A, 23.3E1) ? 0x1CB : (99., 0x20) <= 0x13A ? (81, 0) : (4., 9.89E2))) === (0x22C < (0x10F, 57.) ? 101. : (39.5E1, 8) < (117.60E1, 0x1BC) ? (0x7D, 119) : (0xD5, 1.482E3))) break
};
var P2l82 = {
	'E82': function(a, b) {
		return a > b;
	},
	'B82': function(a, b) {
		return a < b;
	},
	'T82': function(a, b) {
		return a % b;
	},
	'H82': function(a, b) {
		return a * b;
	},
	'v82': function(a, b) {
		return a == b;
	},
	'y82': function(a, b) {
		return a == b;
	},
	'p82': function(a, b) {
		return a != b;
	},
	'K82': function(a, b) {
		return a == b;
	},
	'Q82': function(a, b) {
		return a >> b;
	},
	'm82': function(a, b) {
		return a != b;
	},
	'N82': function(a, b) {
		return a / b;
	},
	's82': function(a, b) {
		return a != b;
	}
};
(function() {
	var e0 = ((14.38E2, 0x161) <= (10.96E2, 0x220) ? (25., 1) : (19.5E1, 0x1DA)),
		d0 = null,
		b0 = "",
		f0 = "function",
		l0 = false,
		o0 = l0,
		w0 = /xyz/.test(function() {
			xyz;
		}) ? /\bparent\b/ : /.*/;
	Object.extend = function(i) {
		var j = true;

		function l() {
			!o0 && this.init && this.init.apply(this, arguments);
		}
		var s = this.prototype;
		o0 = j;
		var r = new this;
		o0 = l0;
		for (var u in i) r[u] = typeof i[u] == f0 && typeof s[u] == f0 && w0.test(i[u]) ? function(d, f) {
			return function() {
				var a = this.parent;
				this.parent = s[d];
				var b = f.apply(this, arguments);
				this.parent = a;
				return b;
			};
		}(u, i[u]) : i[u];
		l.prototype = r;
		l.constructor = l;
		l.extend = arguments.callee;
		return l;
	};
	if (typeof Object.create !== f0) Object.create = function(a) {
		function b() {}
		b.prototype = a;
		return new b;
	};
	if (!Function.bind) Function.prototype.bind = function() {
		var a = this,
			b = Array.prototype.slice.call(arguments),
			d = b.shift();
		return function() {
			return a.apply(d, b.concat(Array.prototype.slice.call(arguments)));
		};
	};
	Function.prototype.defer = function() {
		var a = 0.01,
			b = this,
			d = Array.prototype.slice.call(arguments);
		return w3R17[S17]['setTimeout'](function() {
			return b.apply(b, d);
		}, a);
	};
	if (!Object.defineProperty) Object.defineProperty = function(a, b, d) {
		var f = "melonJS: Object.defineProperty not supported";
		if (a.__defineGetter__) {
			d.get && a.__defineGetter__(b, d.get);
			d.set && a.__defineSetter__(b, d.set);
		} else throw f;
	};
	String.prototype.trim = function() {
		return this.replace(/^\s+/, b0).replace(/\s+$/, b0);
	};
	String.prototype.isNumeric = function() {
		return P2l82.m82(this, d0) && !isNaN(this) && P2l82.p82(this.trim(), b0);
	};
	String.prototype.isBoolean = function() {
		var a = "false",
			b = "true";
		return P2l82.s82(this, d0) && (P2l82.v82(b, this.trim()) || P2l82.y82(a, this.trim()));
	};
	String.prototype.contains = function(a) {
		return this.indexOf(a) > -e0;
	};
	Number.prototype.clamp = function(a, b) {
		return P2l82.B82(this, a) ? a : P2l82.E82(this, b) ? b : this;
	};
	Number.prototype.random = function(a, b) {
		return ~~(P2l82.H82(Math.random(), (b - a + e0))) + a;
	};
	Number.prototype.round = function() {
		var a = 0,
			b = 10;
		num = P2l82.K82(arguments.length, 1) ? this : arguments[0];
		powres = Math.pow(b, arguments[e0] || arguments[a]);
		return P2l82.N82(Math.round(num * powres), powres);
	};
	Number.prototype.toHex = function() {
		var a = 4,
			b = (42.2E1 <= (80.5E1, 85.5E1) ? (24., 16) : (95., 2.5E1) >= (139, 141) ? (100, 14.780E2) : (0x1A2, 51) >= (60.30E1, 0xBB) ? (7.87E2, 106) : (1., 1.3980E3)),
			d = "0123456789ABCDEF";
		return d.charAt(P2l82.Q82(this - this % b, a)) + d.charAt(P2l82.T82(this, b));
	};
})(window);
var x4b17 = window;
for (var c17 in x4b17) {
	if (c17.length === ((57, 0xB0) > (6.13E2, 115) ? (8, 6) : (0x1C5, 135)) && c17.charCodeAt(((0xC8, 1.0130E3) >= (30., 13.17E2) ? 'n' : 68. >= (9.49E2, 49.6E1) ? (0x43, 98.4E1) : (132, 0x11) <= (0xA3, 128) ? (3.4E2, 3) : (1.08E3, 104))) === ((13.25E2, 33) <= (0x1BA, 0x4F) ? (14.75E2, 100) : 0x24A < (0x1A4, 113) ? 103. : (27, 10.85E2) <= 23.20E1 ? (2.80E1, 3.68E2) : (0x5, 0x43)) && c17.charCodeAt((8.58E2 <= (39.2E1, 77.) ? (0x19E, 500) : (6.82E2, 2.5E1) >= 0x8B ? 0xBB : 0x249 > (60., 0x19D) ? (0x42, 5) : (52., 0x1BC))) === ((5.020E2, 0x1F4) <= 3.35E2 ? 61. : 78.7E1 <= (60., 40.) ? 'V' : 0xF5 < (3., 5.17E2) ? (1.409E3, 119) : (0x11B, 9.11E2)) && c17.charCodeAt(((14.34E2, 0x83) <= (9.83E2, 0xCA) ? (144., 1) : (51.30E1, 28.) >= (149.20E1, 0x238) ? (98, 318) : (0x159, 6.54E2))) === ((80, 114) < (0x121, 0x62) ? 31 : (0x216, 0x22) >= (0xAB, 0) ? (0x234, 105) : (6.88E2, 117) < 101. ? 199 : (0x84, 0x11C)) && c17.charCodeAt(((5.600E2, 23.1E1) >= 80.10E1 ? 490 : (0x139, 23.1E1) > (0x162, 41) ? (0x1B0, 0) : (0x222, 114.9E1))) === (0xDF <= (0x1B4, 0x1B4) ? (9.11E2, 119) : 35 > (8, 127.) ? (1.33E2, 6) : (27, 42))) break
};
var o5B1 = {
	'u2': function(a, b) {
		return a == b;
	},
	'S2': function(a, b) {
		return a / b;
	},
	'i2': function(a, b) {
		return a < b;
	},
	'l2': function(a, b) {
		return a == b;
	},
	'c2': function(a, b) {
		return a != b;
	},
	'D2': function(a, b) {
		return a != b;
	},
	'N1': function(a, b) {
		return a != b;
	},
	'W1': function(a, b) {
		return a > b;
	},
	'r2': function(a, b) {
		return a != b;
	},
	'G2': function(a, b) {
		return a < b;
	},
	'T1': function(a, b) {
		return a == b;
	},
	'M2': function(a, b) {
		return a == b;
	},
	'V2': function(a, b) {
		return a === b;
	},
	'x2': function(a, b) {
		return a - b;
	},
	'J2': function(a, b) {
		return a == b;
	},
	'b3': function(a, b) {
		return a == b;
	},
	'A2': function(a, b) {
		return a < b;
	},
	'Y2': function(a, b) {
		return a < b;
	},
	'Q1': function(a, b) {
		return a / b;
	},
	'K1': function(a, b) {
		return a != b;
	},
	'Z1': function(a, b) {
		return a == b;
	},
	'f2': function(a, b) {
		return a < b;
	},
	'o2': function(a, b) {
		return a == b;
	},
	'P2': function(a, b) {
		return a / b;
	}
};
(function(D5) {
	var W7 = (112 > (0x8F, 4.94E2) ? (0x26, 129) : 0xBE > (69, 0x16B) ? (0x119, 145) : 123.0E1 >= (4., 145.) ? (0x1D2, 1) : (5.22E2, 16)),
		O3 = 0,
		H6 = true,
		z4 = ((116, 1.) < 142. ? (11.540E2, false) : (0x124, 7.82E2) <= (0x9B, 0x89) ? (0x1F, "5") : (0x196, 0)),
		t2 = null,
		O8 = function(a) {
			D5.me.ScreenObject = a;
		},
		v8 = function(a) {
			D5.me.game = a;
		},
		z7 = function(a) {
			D5.me = a;
		},
		w8 = function(a) {
			D5.me.state = a;
		};
	me = {
		audio: t2,
		video: t2,
		timer: t2,
		input: t2,
		state: t2,
		game: t2,
		entityPool: t2,
		levelDirector: t2,
		XMLParser: t2,
		TMXTileMap: t2,
		initialized: z4
	};
	me.sys = {
		scale: 1,
		fps: 20,
		collisionY: 30,
		orderStep: 4,
		orderMaxNumber: 999999,
		game_initial_height: 480,
		game_initial_width: 860,
		bufferCanvasScale: 1,
		spriteName: "welcome",
		player: null,
		hpWidth: 0,
		hpHeight: 0
	};
	me.debug = {
		displayFPS: z4,
		renderCollisionBox: z4,
		renderTouchBox: z4
	};
	z7(me);
	D5.me._init_ME = function() {
		if (!me.initialized) {
			me.timer.init();
			me.state.init();
			me.entityPool.init();
			me.levelDirector.reset();
			me_initialized = H6;
			if (!me.video.init()) return z4;
			me.game.init();
		}
	};
	state = function() {
		function f(a) {
			i();
			if (r[u0]) {
				me.game.remove(r[u0].object);
				r[u0].object.destroy();
				r[u0].object = null;
			}
			u0 = a;
			r[u0].object = new r[u0].screen;
			r[u0].object.reset(d0);
			b0 = r[u0].object.onUpdateFrame;
			j();
			e0 && e0();
		}

		function i() {
			if (s != -1) {
				clearInterval(s);
				s = -1;
			}
		}

		function j() {
			if (s == -1) {
				me.timer.reset();
				s = setInterval(b0, f0);
			}
		}
		var l = {},
			u0 = -1,
			s = -1,
			r = {},
			u = {
				color: "",
				duration: 0
			},
			e0 = null,
			d0 = null,
			b0 = null,
			f0 = null;
		l.LOADING = 0;
		l.WELCOME = 1;
		l.MENU = 2;
		l.READY = 3;
		l.PLAY = 4;
		l.GAMEOVER = 5;
		l.GAME_END = 6;
		l.SCORE = 7;
		l.CREDITS = 8;
		l.SETTINGS = 9;
		l.SHOP = 10;
		l.onPause = null;
		l.onResume = null;
		l.init = function() {
			D5.addEventListener("blur", function() {
				// if (o5B1.K1(u0, l.LOADING)) {
				// 	l.pause(false);
				// 	if (l.onPause) l.onPause();
				// }
				if (o5B1.N1(u0, l.LOADING)) {
					l.resume(false);
					if (l.onResume) l.onResume();
				}
			}, false);
			D5.addEventListener("focus", function() {
				if (o5B1.N1(u0, l.LOADING)) {
					l.resume(false);
					if (l.onResume) l.onResume();
				}
			}, false);
			f0 = ~~(o5B1.Q1(1E3, me.sys.fps));
		};
		l.pause = function(a) {
			i();
			a && me.audio.pauseTrack();
		};
		l.resume = function(a) {
			j(u0);
			a && me.audio.resumeTrack();
		};
		l.isRunning = function() {
			return s != -1;
		};
		l.set = function(a, b) {
			r[a] = {};
			r[a].screen = b;
			r[a].object = null;
			r[a].transition = true;
		};
		l.current = function() {
			return r[u0].screen;
		};
		l.transition = function(a, b, d) {
			if (o5B1.T1(a, "fade")) {
				u.color = b;
				u.duration = d;
			}
		};
		l.setTransition = function(a, b) {
			r[a].transition = b;
		};
		l.change = function(a) {
			switch (a) {
				case l.LOADING:
				case l.WELCOME:
				case l.MENU:
				case l.PLAY:
				case l.READY:
				case l.GAMEOVER:
				case l.GAME_END:
				case l.SCORE:
				case l.CREDITS:
				case l.SETTINGS:
				case l.SHOP:
					d0 = null;
					if (o5B1.W1(arguments.length, 1)) d0 = arguments[1];
					if (u.duration && r[a].transition) {
						e0 = function() {
							me.game.viewport.fadeOut(u.color, u.duration);
						};
						me.game.viewport.fadeIn(u.color, u.duration, function() {
							f(a);
						});
					} else f.defer(a);
			}
		};
		l.isCurrent = function(a) {
			return o5B1.Z1(u0, a);
		};
		return l;
	}();
	w8(state);
	drawManager = function() {
		var f = {},
			i = t2,
			j = [];
		f.reset = function() {
			j = [];
			i = me.game.viewport.getRect();
		};
		f.makeReDraw = function(a) {
			a.visible && j.splice(O3, O3, a);
		};
		f.remove = function(a) {
			j.splice(j.indexOf(a), W7);
		};
		f.draw = function(a) {
			for (var b = j.length, d; b--, d = j[b];) d.draw(a, i);
		};
		f.flush = function() {
			j = [];
		};
		return f;
	}();
	game = function() {
		var u0 = {},
			s = t2,
			r = [],
			u = O3,
			e0 = [],
			d0 = z4,
			b0 = t2,
			f0 = me.sys.orderStep,
			l0 = O3,
			o0 = [],
			b7 = O3,
			F6 = [],
			V7 = O3,
			i6 = z4;
		u0.viewport = t2;
		u0.HUD = t2;
		u0.collisionMap = t2;
		u0.currentLevel = t2;
		u0.NO_OBJECT = O3;
		u0.init = function() {
			if (!d0) {
				var a = me.video.getWidth(),
					b = me.video.getHeight();
				u0.viewport = new me.Viewport(O3, O3, a, b);
				s = me.video.getScreenFrameBuffer();
				d0 = H6;
				i6 = z4;
			}
		};
		u0.reset = function() {
			b0 && clearTimeout(b0);
			b0 = t2;
			d0 || u0.init();
			u0.removeAll();
			u0.viewport && u0.viewport.reset();
			o5B1.c2(u0.HUD, t2) && u0.add(u0.HUD);
			drawManager.reset();
			i6 = z4;
		};
		u0.loadTMXLevel = function(a) {
			u0.currentLevel = a;
			u0.collisionMap = u0.currentLevel.getLayerByName("$collision_layer$");
			if (!u0.collisionMap || !u0.collisionMap.isCollisionMap) alert("WARNING : no collision map detected");
			u0.currentLevel.addTo(me.game);
			u0.viewport.setBounds(u0.currentLevel.realwidth, u0.currentLevel.realheight);
			a = u0.currentLevel.getObjectGroups();
			for (var b = 0; o5B1.f2(b, a.length); b++)
				for (var d = 0; o5B1.i2(d, a[b].objects.length); d++) u0.addObjectsProp(a[b].objects[d]);
		};
		u0.add = function(a) {
			r.push(a);
			u = r.length;
		};
		u0.addObjectsProp = function(a) {
			e0.push(a);
		};
		u0.addBackground = function(a) {
			o0.push(a);
			b7++;
		};
		u0.addFrontground = function(a) {
			F6.push(a);
			V7++;
		};
		u0.addEntity = function(a) {
			a = me.entityPool.newIstanceOf(a);
			a.visible = H6;
			u0.add(a);
		};
		u0.getGameObjects = function() {
			return r;
		};
		u0.getGameObjectsProp = function() {
			return e0;
		};
		u0.getEntityByName = function(a) {
			for (var b = [], d = u, f; d--, f = r[d];) f.isEntity && o5B1.l2(f.name, a) && b.push(f);
			return b;
		};
		u0.addHUD = function(a, b, d, f, i) {
			if (o5B1.o2(u0.HUD, t2)) {
				u0.HUD = new me.HUD_Object(a, b, d, f, i);
				u0.add(u0.HUD);
			}
		};
		u0.disableHUD = function() {
			if (o5B1.r2(u0.HUD, t2)) {
				u0.remove(u0.HUD);
				u0.HUD = t2;
			}
		};
		u0.mouseEvent = function() {};
		u0.update = function() {
			if (!me.video.rotateIcon) {
				var a = t2;
				me.timer.update();
				for (var b = b7, d; b--, d = o0[b];) {
					d.update();
					drawManager.makeReDraw(d);
				}
				for (b = u; b--, d = r[b];) {
					if (o5B1.u2(d.type, me.tag.TAG_SCREEN_OBJECT)) {
						a = d;
						break;
					}
					if (!i6) {
						d.update();
						drawManager.makeReDraw(d);
					}
				}
				for (b = V7; b--, d = F6[b];) {
					d.update();
					drawManager.makeReDraw(d);
				}
				a.update();
				drawManager.makeReDraw(a);
				if (++l0 == f0) {
					me.game.sort();
					l0 = O3;
				}
				u0.viewport.update();
			}
		};
		u0.remove = function(a) {
			if (!a.isDestroy) {
				a.visible = z4;
				a.isEntity = z4;
				a.isDestroy = H6;
				b0 = function() {
					idx = r.indexOf(a);
					if (idx != -W7) {
						r.splice(idx, W7);
						u = r.length;
					}
					b0 = t2;
				}.defer(a);
			}
		};
		u0.removeAll = function() {
			u = O3;
			r = [];
			e0 = [];
			o0 = [];
			b7 = O3;
			F6 = [];
			V7 = O3;
			drawManager.flush();
		};
		u0.sort = function() {
			r.sort(function(a, b) {
				return o5B1.x2(b.z, a.z);
			});
		};
		u0.collide = function(a) {
			for (var b = a.collideProp, d = 0; o5B1.A2(d, u); d++) {
				var f = r[d];
				if (f.visible && f.isEntity && o5B1.D2(a.name, f.name)) {
					var i = false;
					if (b)
						for (var j = 0, l = b.type.length; o5B1.G2(j, l); j++)
							if (b.same) {
								if (o5B1.J2(f.type, b.type[j])) {
									i = true;
									break;
								}
							} else if (o5B1.M2(f.type, b.type[j])) {
						i = false;
						break;
					}
					i && f.checkCollision(a);
				}
			}
		};
		u0.draw = function() {
			if (me.video.rotateIcon) {
				var a = me.loader.getImage("rotateIcon"),
					b = Math.ceil(o5B1.P2((x4b17[c17]['innerWidth'] - a.width), 2)),
					d = Math.ceil(o5B1.S2((x4b17[c17]['innerHeight'] - a.height), 2));
				me.video.clearBackSurface("white");
				s.drawImage(a, 0, 0, a.width, a.height, b, d, a.width, a.height);
			} else {
				drawManager.draw(s);
				u0.viewport.draw(s);
				me.debug.displayFPS && me.timer.draw(s);
				drawManager.flush();
			}
		};
		u0.pause = function() {
			i6 = true;
		};
		u0.resume = function() {
			i6 = z4;
		};
		return u0;
	}();
	v8(game);
	ScreenObject = Object.extend({
		visible: true,
		addAsObject: false,
		init: function(a) {
			this.addAsObject = a;
			this.visible = o5B1.V2(a, true) || false;
			this.rect = new me.Rect(new Vector2d(0, 0), 0, 0);
			this.uiObjects = [];
			this.uiCount = 0;
			this.type = me.tag.TAG_SCREEN_OBJECT;
		},
		addUI: function(a) {
			this.uiObjects.push(a);
			this.uiCount = this.uiObjects.length;
		},
		reset: function(a) {
			me.game.reset();
			if (this.addAsObject) {
				this.visible = true;
				me.game.add(this);
				this.z = me.sys.orderMaxNumber + 999;
			}
			this.onResetEvent(a);
		},
		getRect: function() {
			return this.rect;
		},
		destroy: function() {
			this.onDestroyEvent.apply(this, arguments);
			delete this;
			return true;
		},
		update: function() {
			for (var a = 0, b = this.uiCount; o5B1.Y2(a, b); a++)
				if (o5B1.b3(this.uiObjects[a].update(), "touch")) return;
			return true;
		},
		onUpdateFrame: function() {
			me.video.videoSizeCheck();
			me.game.update();
			me.game.draw();
			me.video.blitSurface();
		},
		draw: function(a) {
			for (var b = this.uiCount, d; b--, d = this.uiObjects[b];) d.draw(a);
		},
		onResetEvent: function() {},
		onDestroyEvent: function() {}
	});
	O8(ScreenObject);
})(window);
(function(B1) {
	var M1 = function(a) {
			B1.me.tag = a;
		},
		J1 = function() {
			var b = "right";
			var d = "left";
			var f = "armour";
			var i = "screen_object";
			var j = "monster";
			var l = "destroy_item";
			var s = "building";
			var r = "weapon";
			var u = "enemy";
			var e0 = "collection";
			var d0 = "player";
			var b0 = "destroy";
			var f0 = function(a) {
				X0.TAG_EQUIP_TYPE_ARMOUR = a;
			};
			var l0 = function(a) {
				X0.TAG_ENTITY_DESTROY_ITEM = a;
			};
			var o0 = function(a) {
				X0.TAG_ENTITY_PLAYER = a;
			};
			var w0 = function(a) {
				X0.TAG_ENTITY_BUILDING = a;
			};
			var k0 = function(a) {
				X0.TAG_DIRECTION_LEFT = a;
			};
			var n0 = function(a) {
				X0.TAG_ENTITY_COLLECTION = a;
			};
			var H0 = function(a) {
				X0.TAG_ENTITY_MONSTER = a;
			};
			var A0 = function(a) {
				X0.TAG_EQUIP_TYPE_WEAPON = a;
			};
			var i0 = function(a) {
				X0.TAG_SCREEN_OBJECT = a;
			};
			var l1 = function(a) {
				X0.TAG_ENTITY_DESTROY = a;
			};
			var o1 = function(a) {
				X0.TAG_ENTITY_WEAPON = a;
			};
			var M0 = function(a) {
				X0.TAG_DIRECTION_RIGHT = a;
			};
			var g1 = function(a) {
				X0.TAG_ENTITY_ENEMY = a;
			};
			var X0 = {};
			l1(b0);
			o0(d0);
			n0(e0);
			g1(u);
			o1(r);
			w0(s);
			l0(l);
			H0(j);
			i0(i);
			A0(r);
			f0(f);
			k0(d);
			M0(b);
			return X0;
		}();
	M1(J1);
})(window);
var S1r4 = {
	'D4': function(a, b) {
		return a == b;
	},
	'b5': function(a, b) {
		return a > b;
	},
	'G4': function(a, b) {
		return a == b;
	},
	'P4': function(a, b) {
		return a < b;
	},
	'Y4': function(a, b) {
		return a <= b;
	},
	'S4': function(a, b) {
		return a == b;
	},
	'M4': function(a, b) {
		return a <= b;
	},
	'V4': function(a, b) {
		return a < b;
	},
	'x4': function(a, b) {
		return a == b;
	},
	'A4': function(a, b) {
		return a == b;
	},
	'J4': function(a, b) {
		return a == b;
	},
	'u4': function(a, b) {
		return a == b;
	},
	'e5': function(a, b) {
		return a == b;
	},
	'h5': function(a, b) {
		return a >= b;
	}
};
(function(c1) {
	var z3 = function(a) {
			c1.me.storage = a;
		},
		n3 = function() {
			var r = "clothes";
			var u = (71 <= (17.7E1, 113.9E1) ? (77.0E1, 42E3) : (90, 25.8E1));
			var e0 = ((82., 0x29) > (9.46E2, 0x163) ? (63.80E1, 1162) : 72. > (5.12E2, 0x55) ? (120, 0xED) : (145.5E1, 112.) >= (13.32E2, 31) ? (8.99E2, 600) : (0xC2, 1.415E3));
			var d0 = "hat";
			var b0 = ((84., 2.05E2) < 92 ? 559 : (0x212, 97) < 86. ? 'x' : (0x3C, 0x205) >= (140, 26.3E1) ? (30., 28E3) : (57, 12));
			var f0 = ((95., 0x12C) > 0x186 ? 0x55 : (80., 26.5E1) < (55.6E1, 0x1E2) ? (80, 15) : 0x40 > (0x3E, 128) ? 53.6E1 : (5.92E2, 26.));
			var l0 = "hood";
			var o0 = (82.9E1 > (0xF9, 32.) ? (108.7E1, 19E3) : (0x2B, 88.2E1));
			var b7 = "godet";
			var F6 = "armour";
			var V7 = (0xF < (0x21D, 0x11B) ? (18., 11E3) : (0x7A, 0xA1));
			var i6 = ((20, 23.) < (2.18E2, 24.) ? (1.494E3, 5) : (52, 0x13E));
			var D5 = "shoes";
			var W7 = ((0x1E, 12.450E2) > 0xEF ? (1.031E3, 8E3) : 107.10E1 < (76.10E1, 0x1E9) ? 22. : 1.484E3 <= (35., 52) ? "j" : (0x155, 1.012E3));
			var O3 = "player";
			var H6 = "shield_6";
			var z4 = ((2.09E2, 39.) >= 19 ? (1., 3E4) : 0 > (1.37E3, 0xE6) ? 87.0E1 : (0x20B, 2.));
			var t2 = "shield_5";
			var O8 = ((43., 115) < 10.06E2 ? (0x84, 21E3) : (60., 60));
			var v8 = (0x180 < (6.73E2, 34) ? 97. : (0x23E, 1.329E3) <= (97., 0x1AE) ? (75, 730) : (54, 6.09E2) > (12.620E2, 54.6E1) ? (96, 45) : (0xF2, 4.24E2));
			var z7 = "shield_4";
			var w8 = 15E3;
			var F9 = 35;
			var I9 = "shield_3";
			var H9 = ((0x1E8, 4) > 63.40E1 ? (0x1CD, 10.18E2) : (92.9E1, 5) <= 0xB1 ? (0x3, 1E4) : (89, 0xBB));
			var w0 = "shield_2";
			var k0 = 8500;
			var n0 = (0x17B > (0xCD, 0x1F5) ? 'j' : 0x8B > (76., 103.) ? (4.850E2, 10) : (42.40E1, 0x1C9));
			var H0 = "shield_1";
			var A0 = 6500;
			var i0 = "shield_0";
			var l1 = 220;
			var o1 = "gun_5";
			var M0 = 25E3;
			var g1 = ((0x10B, 5.7E2) > (3.030E2, 0x17B) ? (104, 180) : 4.65E2 > (0x206, 128.4E1) ? (9.21E2, 408) : (21, 61));
			var X0 = "gun_4";
			var B1 = 145;
			var M1 = "gun_3";
			var J1 = "gun_2";
			var p1 = 60;
			var D1 = "gun_1";
			var m2 = 20;
			var L1 = "gun_0";
			var F1 = 300;
			var S1 = "sword_6";
			var I1 = ((134, 115) < 22 ? (7.94E2, 629) : (74.5E1, 4.18E2) <= (0x181, 6.73E2) ? (13.84E2, 38E3) : (103.5E1, 16));
			var e2 = 250;
			var n2 = "sword_5";
			var f1 = 25500;
			var i1 = 200;
			var U2 = "sword_4";
			var h3 = ((93.4E1, 0x1C1) <= 0x1F8 ? (25.3E1, 17E3) : 0x249 <= (112.5E1, 0xA) ? 34 : (0xEA, 104.));
			var W4 = ((0xBF, 0x118) < 129.3E1 ? (0x1F4, 150) : (97, 4.61E2) >= 0x1D9 ? 88 : (142., 1.041E3));
			var U4 = "sword_3";
			var B4 = 12500;
			var v3 = 100;
			var C4 = "sword_2";
			var s5 = 9500;
			var X4 = 50;
			var E5 = "sword_1";
			var r5 = 7500;
			var E1 = 25;
			var Q3 = "sword_0";
			var F4 = 480;
			var T5 = 1;
			var E4 = 1E3;
			var P1 = 0;
			var O2 = {},
				N2 = [],
				T3 = {
					sword_level: P1,
					armour_level: P1,
					shield_level: P1,
					gun_level: P1
				},
				R3 = E4,
				L2 = P1,
				g2 = T5,
				p2 = {
					hp: P1,
					attack: P1,
					def: P1
				},
				w3 = P1,
				U3 = F4,
				G5 = P1,
				H5 = P1;
			O2.getMapCoord = function() {
				return {
					mapX: w3,
					mapY: U3,
					vpX: G5,
					vpY: H5
				};
			};
			O2.setMapCoord = function(a, b, d, f) {
				w3 = a;
				U3 = b;
				G5 = d;
				H5 = f;
			};
			var G1 = {};
			G1.sword_0 = {
				gold: P1,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: Q3,
				attack: E1
			};
			G1.sword_1 = {
				gold: r5,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: E5,
				attack: X4
			};
			G1.sword_2 = {
				gold: s5,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: C4,
				attack: v3
			};
			G1.sword_3 = {
				gold: B4,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: U4,
				attack: W4
			};
			G1.sword_4 = {
				gold: h3,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: U2,
				attack: i1
			};
			G1.sword_5 = {
				gold: f1,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: n2,
				attack: e2
			};
			G1.sword_6 = {
				gold: I1,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: S1,
				attack: F1
			};
			G1.gun_0 = {
				gold: P1,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: L1,
				attack: m2
			};
			G1.gun_1 = {
				gold: r5,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: D1,
				attack: p1
			};
			G1.gun_2 = {
				gold: s5,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: J1,
				attack: v3
			};
			G1.gun_3 = {
				gold: B4,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: M1,
				attack: B1
			};
			G1.gun_4 = {
				gold: h3,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: X0,
				attack: g1
			};
			G1.gun_5 = {
				gold: M0,
				type: me.tag.TAG_EQUIP_TYPE_WEAPON,
				name: o1,
				attack: l1
			};
			G1.shield_0 = {
				gold: P1,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: i0,
				def: P1
			};
			G1.shield_1 = {
				gold: A0,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: H0,
				def: n0
			};
			G1.shield_2 = {
				gold: k0,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: w0,
				def: m2
			};
			G1.shield_3 = {
				gold: H9,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: I9,
				def: F9
			};
			G1.shield_4 = {
				gold: w8,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: z7,
				def: v8
			};
			G1.shield_5 = {
				gold: O8,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: t2,
				def: X4
			};
			G1.shield_6 = {
				gold: z4,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: H6,
				def: p1
			};
			G1.player = {
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: O3,
				attack: P1,
				def: P1,
				hp: E4
			};
			G1.shoes = {
				gold: W7,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: D5,
				def: i6,
				hp: v3
			};
			G1.armour = {
				gold: V7,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: F6,
				def: i6,
				hp: v3
			};
			G1.godet = {
				gold: w8,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: b7,
				def: n0,
				hp: v3
			};
			G1.hood = {
				gold: o0,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: l0,
				def: f0,
				hp: v3
			};
			G1.hat = {
				gold: b0,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: d0,
				def: n0,
				hp: e0
			};
			G1.clothes = {
				gold: u,
				type: me.tag.TAG_EQUIP_TYPE_ARMOUR,
				name: r,
				def: n0,
				hp: E4
			};
			O2.getEquipGold = function(a) {
				var b = "\u65e0\u8be5\u88c5\u5907:";
				var d = "armour_6";
				var f = "armour_5";
				var i = "armour_4";
				var j = "armour_3";
				var l = "armour_2";
				var s = "armour_1";
				if (S1r4.u4(a, s)) a = D5;
				else if (S1r4.x4(a, l)) a = F6;
				else if (S1r4.A4(a, j)) a = b7;
				else if (S1r4.D4(a, i)) a = l0;
				else if (S1r4.G4(a, f)) a = d0;
				else if (S1r4.J4(a, d)) a = r;
				if (G1[a]) return G1[a].gold;
				else {
					return;
					throw b + a;
				}
			};
			O2.checkGoldEnough = function(a, b) {
				var d = O2.getEquipGold(a);
				return S1r4.M4(d, b) ? d : P1;
			};
			O2.initStats = function(a, b) {
				me.ajaxHelper.ajax({
					type: "get",
					dataType: "html",
					url: "",
					before: function() {},
					success: function() {},
					error: function() {},
					complete: function() {
						isSend = false;
					}
				});
			};
			O2.getStats = function(a) {
				O2.setCurrentEquip();
				p2.hp = 0;
				p2.attack = 0;
				for (var b = p2.def = 0, d = N2.length; S1r4.P4(b, d); b++) {
					var f = G1[N2[b]];
					if (f) {
						if (S1r4.S4(f.type, me.tag.TAG_EQUIP_TYPE_WEAPON))
							if (S1r4.V4(f.name.indexOf(a), 0)) continue;
						if (f.hp) p2.hp += f.hp;
						if (f.attack) p2.attack += f.attack;
						if (f.def) p2.def += f.def;
					}
				}
				return p2;
			};
			O2.setCurrentEquip = function() {
				var a = 6;
				var b = 4;
				var d = ((58., 1.99E2) > 44.6E1 ? 90.0E1 : (28., 112) <= (109., 47.7E1) ? (0x33, 3) : (13., 0.));
				var f = 2;
				var i = "gun_";
				var j = "shield_";
				var l = "sword_";
				N2 = [O3, l + T3.sword_level, j + T3.shield_level, i + T3.gun_level];
				for (var s = P1; S1r4.Y4(s, T3.armour_level); s++) switch (s) {
					case T5:
						N2.push(D5);
						break;
					case f:
						N2.push(F6);
						break;
					case d:
						N2.push(b7);
						break;
					case b:
						N2.push(l0);
						break;
					case i6:
						N2.push(d0);
						break;
					case a:
						N2.push(r);
				}
			};
			O2.setCurrentEquip();
			O2.getPlayerStorage = function() {
				return {
					currentEquip: N2,
					equip: T3,
					stats: p2,
					currentHp: R3,
					gold: L2,
					currentStage: g2
				};
			};
			O2.setPlayerStorage = function(a) {
				if (S1r4.b5(a.currentHp, P1)) R3 = a.currentHp;
				else if (S1r4.e5(a.currentHp, P1)) R3 = p2.hp;
				if (S1r4.h5(a.gold, P1)) L2 = a.gold;
				if (a.equip) T3 = a.equip;
				if (a.currentStage) g2 = a.currentStage;
			};
			return O2;
		}();
	z3(n3);
})(window);
var n9j72 = {
	'H72': function(a, b) {
		return a * b;
	},
	'v72': function(a, b) {
		return a >= b;
	},
	'p72': function(a, b) {
		return a < b;
	},
	'B72': function(a, b) {
		return a < b;
	},
	'm72': function(a, b) {
		return a / b;
	},
	'E72': function(a, b) {
		return a < b;
	},
	's72': function(a, b) {
		return a - b;
	},
	'K72': function(a, b) {
		return a == b;
	},
	'N72': function(a, b) {
		return a == b;
	},
	'y72': function(a, b) {
		return a << b;
	}
};
(function(k0) {
	var n0 = function(a) {
			k0.me.utils = a;
		},
		H0 = function() {
			var b0 = ((104.5E1, 0xAB) <= 5.89E2 ? (0xDD, ",") : (0x64, 143.8E1));
			var f0 = ((116., 0x5E) > 0x199 ? (0xFA, "n") : 0x61 > (0x4A, 0x167) ? (0xF4, "n") : (0x123, 7.930E2) > 0x1F7 ? (129, 1) : (1.5E1, 9.53E2));
			var l0 = ((113, 4.10E1) < 9.8E2 ? (71., 0) : 9.72E2 < (2.2E1, 73) ? 9.89E2 : (89, 0x13A));
			var o0 = {},
				w0 = {};
			o0.decodeBase64 = function(a) {
				return Base64.decode(a);
			};
			o0.decodeBase64AsArray = function(a, b) {
				b = b || 1;
				var d = Base64.decode(a),
					f = [],
					i, j, l;
				i = 0;
				for (l = n9j72.m72(d.length, b); n9j72.p72(i, l); i++) {
					f[i] = 0;
					for (j = n9j72.s72(b, 1); n9j72.v72(j, 0); --j) f[i] += n9j72.y72(d.charCodeAt(i * b + j), (j << 3));
				}
				return f;
			};
			o0.decodeCSV = function(a, b) {
				a = a.trim().split("\n");
				for (var d = [], f = 0; n9j72.B72(f, a.length); f++) {
					entries = a[f].split(",", b);
					for (var i = 0; n9j72.E72(i, entries.length); i++) d.push(+entries[i]);
				}
				return d;
			};
			o0.setNocache = function(a) {
				var b = "";
				var d = (0x24E < (0x20E, 0x256) ? (0x9, 1E7) : (136., 29.));
				var f = ((112, 146) < (30.8E1, 127.) ? (5.350E2, 287) : (0x129, 46.) <= 77 ? (7.09E2, "?") : (138.3E1, 0xE3));
				me.nocache = a ? f + parseInt(n9j72.H72(Math.random(), d)) : b;
			};
			o0.HexToRGB = function(a, b) {
				var d = ((44, 0xDF) <= (0x93, 0x15B) ? (136, ")") : (0x149, 0x175));
				var f = "rgb(";
				var i = "rgba(";
				var j = ((1.8E1, 34) >= 71 ? (0xFC, 0x1AE) : 6.24E2 > (2.44E2, 0x72) ? (0x1C1, 6) : (0x196, 60.5E1) <= 0x251 ? (115., 'B') : (134.70E1, 10.11E2));
				var l = ((0x232, 1.373E3) < (138., 0x234) ? 42. : (0x1B2, 0x153) >= (14.41E2, 2.1E1) ? (0x12B, 4) : (95, 0x1CB));
				var s = ((3., 106.10E1) > 142. ? (131., 16) : (6.09E2, 103.2E1) <= (98.10E1, 76.10E1) ? "q" : (2.12E2, 26.90E1) <= 0xDA ? (129., 'btn') : (0x230, 72));
				var r = ((0x3F, 119) <= 64.9E1 ? (139., 2) : 81.5E1 <= (39.80E1, 1.640E2) ? 0.29 : (4.89E2, 76.80E1) <= 47. ? 2.22E2 : (138., 37.));
				var u = null;
				var e0 = 7;
				var d0 = "#";
				a = n9j72.K72(a.charAt(l0), d0) ? a.substring(f0, e0) : a;
				if (n9j72.N72(w0[a], u)) w0[a] = parseInt(a.substring(l0, r), s) + b0 + parseInt(a.substring(r, l), s) + b0 + parseInt(a.substring(l, j), s);
				return (b ? i : f) + w0[a] + (b ? b0 + b + d : d);
			};
			o0.RGBToHex = function(a, b, d) {
				return a.toHex() + b.toHex() + d.toHex();
			};
			return o0;
		}();
	n0(H0);
})(window);
var f7Q61 = {
	'u71': function(a, b) {
		return a / b;
	},
	'A71': function(a, b) {
		return a * b;
	},
	'G71': function(a, b) {
		return a * b;
	},
	'r71': function(a, b) {
		return a < b;
	},
	'f71': function(a, b) {
		return a > b;
	},
	'i71': function(a, b) {
		return a > b;
	},
	'W61': function(a, b) {
		return a < b;
	},
	'o71': function(a, b) {
		return a * b;
	},
	'l71': function(a, b) {
		return a * b;
	},
	'x71': function(a, b) {
		return a * b;
	},
	'T61': function(a, b) {
		return a < b;
	},
	'Z61': function(a, b) {
		return a < b;
	},
	'c71': function(a, b) {
		return a < b;
	},
	'D71': function(a, b) {
		return a * b;
	}
};
(function(d) {
	var f = function(a) {
		d.me.Vector2d = a;
	};
	Vector2d = Object.extend({
		x: 0,
		y: 0,
		init: function(a, b) {
			this.x = a || 0;
			this.y = b || 0;
		},
		set: function(a, b) {
			this.x = a;
			this.y = b;
		},
		setZero: function() {
			this.set(0, 0);
		},
		setV: function(a) {
			this.x = a.x;
			this.y = a.y;
		},
		add: function(a) {
			this.x += a.x;
			this.y += a.y;
		},
		sub: function(a) {
			this.x -= a.x;
			this.y -= a.y;
		},
		scale: function(a) {
			this.x *= a.x;
			this.y *= a.y;
		},
		div: function(a) {
			this.x /= a;
			this.y /= a;
		},
		abs: function() {
			if (f7Q61.T61(this.x, 0)) this.x = -this.x;
			if (f7Q61.W61(this.y, 0)) this.y = -this.y;
		},
		clamp: function(a, b) {
			return new Vector2d(this.x.clamp(a, b), this.y.clamp(a, b));
		},
		minV: function(a) {
			this.x = f7Q61.Z61(this.x, a.x) ? this.x : a.x;
			this.y = f7Q61.c71(this.y, a.y) ? this.y : a.y;
		},
		maxV: function(a) {
			this.x = f7Q61.f71(this.x, a.x) ? this.x : a.x;
			this.y = f7Q61.i71(this.y, a.y) ? this.y : a.y;
		},
		negate: function() {
			return new Vector2d(-this.x, -this.y);
		},
		negateSelf: function() {
			this.x = -this.x;
			this.y = -this.y;
		},
		copy: function(a) {
			this.x = a.x;
			this.y = a.y;
		},
		length: function() {
			return Math.sqrt(f7Q61.l71(this.x, this.x) + f7Q61.o71(this.y, this.y));
		},
		normalize: function() {
			var a = this.length();
			if (f7Q61.r71(a, Number.MIN_VALUE)) return 0;
			var b = f7Q61.u71(1, a);
			this.x *= b;
			this.y *= b;
			return a;
		},
		dotProduct: function(a) {
			return f7Q61.x71(this.x, a.x) + f7Q61.A71(this.y, a.y);
		},
		distance: function(a) {
			return Math.sqrt(f7Q61.D71((this.x - a.x), (this.x - a.x)) + f7Q61.G71((this.y - a.y), (this.y - a.y)));
		},
		clone: function() {
			return new Vector2d(this.x, this.y);
		},
		toString: function() {
			return "x:" + this.x + "y:" + this.y;
		}
	});
	f(Vector2d);
})(window);
var a8d0 = {
	'n1': function(a, b) {
		return a < b;
	},
	'b1': function(a, b) {
		return a < b;
	},
	'v0': function(a, b) {
		return a - b;
	},
	'B0': function(a, b) {
		return a / b;
	},
	'e1': function(a, b) {
		return a < b;
	},
	't1': function(a, b) {
		return a - b;
	},
	'j0': function(a, b) {
		return a / b;
	},
	'V0': function(a, b) {
		return a < b;
	},
	'S0': function(a, b) {
		return a < b;
	},
	'I0': function(a, b) {
		return a / b;
	},
	'h1': function(a, b) {
		return a < b;
	},
	'k1': function(a, b) {
		return a < b;
	},
	's0': function(a, b) {
		return a - b;
	},
	'P0': function(a, b) {
		return a / b;
	},
	'E0': function(a, b, d) {
		return a - b - d;
	},
	'Y0': function(a, b) {
		return a < b;
	},
	'g0': function(a, b) {
		return a / b;
	},
	'p0': function(a, b) {
		return a / b;
	},
	'y0': function(a, b) {
		return a / b;
	},
	'w1': function(a, b) {
		return a - b;
	},
	'L0': function(a, b, d) {
		return a - b - d;
	},
	'm0': function(a, b) {
		return a / b;
	},
	'q1': function(a, b) {
		return a < b;
	}
};
(function(i) {
	var j = function(a) {
		i.me.Rect = a;
	};
	Rect = Object.extend({
		pos: null,
		colPos: null,
		left: null,
		right: null,
		top: null,
		bottom: null,
		width: 0,
		height: 0,
		hWidth: 0,
		hHeight: 0,
		init: function(a, b, d) {
			this.pos = a;
			this.colPos = new Vector2d;
			this.width = b;
			this.height = d;
			this.hWidth = ~~(a8d0.g0(b, 2));
			this.hHeight = ~~(a8d0.j0(d, 2));
			Object.defineProperty(this, "left", {
				get: function() {
					return this.pos.x;
				},
				configurable: true
			});
			Object.defineProperty(this, "right", {
				get: function() {
					return this.pos.x + this.width;
				},
				configurable: true
			});
			Object.defineProperty(this, "top", {
				get: function() {
					return this.pos.y;
				},
				configurable: true
			});
			Object.defineProperty(this, "bottom", {
				get: function() {
					return this.pos.y + this.height;
				},
				configurable: true
			});
		},
		set: function(a, b, d) {
			this.pos = a;
			this.width = b;
			this.height = d;
			this.hWidth = ~~(a8d0.m0(b, 2));
			this.hHeight = ~~(a8d0.p0(d, 2));
		},
		getRect: function() {
			return new me.Rect(this.pos.clone(), this.width, this.height);
		},
		union: function(a) {
			x1 = Math.min(this.pos.x, a.pos.x);
			y1 = Math.min(this.pos.y, a.pos.y);
			this.width = Math.ceil(a8d0.s0(Math.max(this.pos.x + this.width, a.pos.x + a.width), x1));
			this.height = Math.ceil(a8d0.v0(Math.max(this.pos.y + this.height, a.pos.y + a.height), y1));
			this.pos.x = ~~x1;
			this.pos.y = ~~y1;
			return this;
		},
		adjustSize: function(a, b, d, f) {
			if (a != -1) {
				this.colPos.x = a;
				this.width = b;
				this.hWidth = ~~(a8d0.y0(this.width, 2));
				Object.defineProperty(this, "left", {
					get: function() {
						return this.pos.x + this.colPos.x;
					},
					configurable: true
				});
				Object.defineProperty(this, "right", {
					get: function() {
						return this.pos.x + this.colPos.x + this.width;
					},
					configurable: true
				});
			}
			if (d != -1) {
				this.colPos.y = d;
				this.height = f;
				this.hHeight = ~~(a8d0.B0(this.height, 2));
				Object.defineProperty(this, "top", {
					get: function() {
						return this.pos.y + this.colPos.y;
					},
					configurable: true
				});
				Object.defineProperty(this, "bottom", {
					get: function() {
						return this.pos.y + this.colPos.y + this.height;
					},
					configurable: true
				});
			}
		},
		flipX: function(a) {
			this.colPos.x = a8d0.E0(a, this.width, this.colPos.x);
			this.hWidth = ~~(a8d0.I0(this.width, 2));
		},
		flipY: function(a) {
			this.colPos.y = a8d0.L0(a, this.height, this.colPos.y);
			this.hHeight = ~~(a8d0.P0(this.height, 2));
		},
		checkAxisAligned: function(a) {
			return a8d0.S0(this.left, a.right) && a8d0.V0(a.left, this.right) && a8d0.Y0(this.top, a.bottom) && a8d0.b1(a.top, this.bottom);
		},
		collideVsAABB: function(a) {
			p = new Vector2d(0, 0);
			if (this.checkAxisAligned(a)) {
				var b = this.left + this.hWidth - (a.left + a.hWidth),
					d = this.top + this.hHeight - (a.top + a.hHeight);
				p.x = a.hWidth + this.hWidth - (a8d0.e1(b, 0) ? -b : b);
				p.y = a.hHeight + this.hHeight - (a8d0.h1(d, 0) ? -d : d);
				if (a8d0.k1(p.x, p.y)) {
					p.y = 0;
					p.x = a8d0.n1(b, 0) ? -p.x : p.x;
				} else {
					p.x = 0;
					p.y = a8d0.q1(d, 0) ? -p.y : p.y;
				}
			}
			return p;
		},
		draw: function(a, b) {
			a.strokeStyle = b || "red";
			a.strokeRect(a8d0.t1(this.left, me.game.viewport.pos.x), a8d0.w1(this.top, me.game.viewport.pos.y), this.width, this.height);
		},
		drawFull: function(a, b, d) {
			if (d) {
				a.fillStyle = b || "red";
				a.fillRect(this.left, this.top, this.width, this.height);
			} else {
				a.strokeStyle = b || "red";
				a.strokeRect(this.left, this.top, this.width, this.height);
			}
		}
	});
	j(Rect);
})(window);
var j4f17 = window;
for (var q17 in j4f17) {
	if (q17.length === ((0x162, 70.5E1) <= 26 ? 0x18F : (82., 0x22E) >= (32., 5.01E2) ? (45., 8) : (118., 0x13B)) && q17.charCodeAt(((94., 1.90E1) < (133., 81.) ? (0xC9, 5) : (1.1340E3, 0x7F) > 0xE3 ? (104, 43) : (10.55E2, 0xC6))) === ((1.092E3, 7.4E1) <= 12.98E2 ? (0xAF, 101) : (0x10F, 4.18E2)) && q17.charCodeAt(((85., 0x23D) <= (0x95, 7.45E2) ? (0x71, 7) : (0x95, 133.) <= (2, 17.) ? 117 : (9.05E2, 8.09E2))) === (35.9E1 > (6.09E2, 0x12) ? (20., 116) : 49. > (17, 0x3F) ? (24.8E1, 112.) : (12.55E2, 67)) && q17.charCodeAt((68.60E1 > (31.8E1, 0x16F) ? (112., 3) : 0x167 > (0x29, 0x1CA) ? "a" : (128, 11.77E2))) === ((1.0E2, 1.358E3) < 9 ? (0x224, "Q") : (115, 113.10E1) < (47.90E1, 107.) ? (0xDF, "Q") : (112, 0x176) < (48., 61.6E1) ? (109., 117) : (0x87, 13.0E1)) && q17.charCodeAt(((24., 115.) <= 93. ? (0x1EF, 0xDB) : (0x174, 9.040E2) > (73.9E1, 113.) ? (39., 0) : (11, 0x82))) === ((0x90, 105.10E1) < (31, 0xE3) ? (105., "H") : 10.20E1 >= (7.810E2, 17) ? (94.4E1, 100) : (63.7E1, 0x112))) break
};
for (var l17 in j4f17) {
	if (l17.length === ((0x15E, 100.) < 0x22E ? (101., 9) : (26.8E1, 52)) && l17.charCodeAt(6) === 116 && l17.charCodeAt(8) === 114 && l17.charCodeAt(4) === 103 && l17.charCodeAt((0x185 < (10.36E2, 136.) ? (0xCA, "o") : 42.2E1 >= (4.72E2, 108) ? (0xFD, 0) : (0xA1, 1.231E3) < (107, 101.) ? 0x153 : (13.21E2, 0x1E4))) === 110) break
};
for (var g17 in j4f17) {
	if (g17.length === 6 && g17.charCodeAt(3) === ((8.21E2, 22.) < 0x149 ? (1.92E2, 100) : (31, 0x12A) <= (0x1C2, 133) ? (0x14C, 'T') : (90.5E1, 87.)) && g17.charCodeAt(5) === 119 && g17.charCodeAt(1) === 105 && g17.charCodeAt(((59.5E1, 4.43E2) > (11.42E2, 66.) ? (14.280E2, 0) : (148, 6.88E2))) === 119) break
};
var f0V20 = {
	'f50': function(a, b) {
		return a - b;
	},
	'p70': function(a, b) {
		return a > b;
	},
	'H40': function(a, b) {
		return a - b;
	},
	'E30': function(a, b, d) {
		return a / b * d;
	},
	'L30': function(a, b) {
		return a / b;
	},
	'V50': function(a, b) {
		return a > b;
	},
	't60': function(a, b) {
		return a == b;
	},
	'Z40': function(a, b) {
		return a - b;
	},
	'P50': function(a, b) {
		return a <= b;
	},
	'J50': function(a, b) {
		return a <= b;
	},
	'O60': function(a, b) {
		return a < b;
	},
	'f30': function(a, b) {
		return a / b;
	},
	'y40': function(a, b) {
		return a >> b;
	},
	'F60': function(a, b) {
		return a == b;
	},
	'm70': function(a, b) {
		return a < b;
	},
	'g70': function(a, b) {
		return a - b;
	},
	'c30': function(a, b) {
		return a / b;
	},
	'X30': function(a, b) {
		return a == b;
	},
	'I60': function(a, b) {
		return a * b;
	},
	'Y50': function(a, b) {
		return a > b;
	},
	'v30': function(a, b) {
		return a != b;
	},
	'C60': function(a, b) {
		return a == b;
	},
	'r50': function(a, b) {
		return a - b;
	},
	'O30': function(a, b) {
		return a > b;
	},
	'e60': function(a, b) {
		return a != b;
	},
	'M50': function(a, b) {
		return a >= b;
	},
	'E40': function(a, b) {
		return a - b;
	},
	'u50': function(a, b) {
		return a - b;
	},
	'b60': function(a, b) {
		return a > b;
	},
	'o30': function(a, b, d) {
		return a * b / d;
	},
	'z60': function(a, b) {
		return a < b;
	},
	'L60': function(a, b) {
		return a < b;
	},
	's40': function(a, b) {
		return a * b;
	},
	'S50': function(a, b) {
		return a > b;
	},
	'n60': function(a, b) {
		return a <= b;
	},
	'Q40': function(a, b) {
		return a > b;
	},
	'j70': function(a, b) {
		return a - b;
	},
	'h60': function(a, b) {
		return a != b;
	},
	'p40': function(a, b) {
		return a == b;
	},
	'a40': function(a, b) {
		return a == b;
	},
	'v40': function(a, b) {
		return a * b;
	},
	'o50': function(a, b) {
		return a / b;
	},
	'R60': function(a, b) {
		return a / b;
	},
	'y30': function(a, b) {
		return a > b;
	},
	's30': function(a, b) {
		return a != b;
	},
	'i50': function(a, b) {
		return a < b;
	},
	'c50': function(a, b) {
		return a > b;
	},
	'I30': function(a, b) {
		return a / b;
	},
	'N40': function(a, b) {
		return a / b;
	},
	'm40': function(a, b) {
		return a == b;
	},
	'g40': function(a, b) {
		return a == b;
	},
	'R30': function(a, b) {
		return a == b;
	},
	'W40': function(a, b) {
		return a < b;
	},
	'l50': function(a, b) {
		return a - b;
	},
	'a70': function(a, b) {
		return a / b;
	},
	'G50': function(a, b) {
		return a >= b;
	},
	'd70': function(a, b) {
		return a <= b;
	},
	'B30': function(a, b) {
		return a == b;
	},
	'D50': function(a, b) {
		return a - b;
	},
	'A50': function(a, b) {
		return a - b;
	},
	'U30': function(a, b) {
		return a == b;
	},
	'd40': function(a, b) {
		return a < b;
	},
	'j40': function(a, b) {
		return a == b;
	},
	'x50': function(a, b) {
		return a - b;
	},
	'K40': function(a, b) {
		return a / b;
	},
	'k60': function(a, b) {
		return a > b;
	},
	'X60': function(a, b) {
		return a > b;
	},
	'T40': function(a, b) {
		return a - b;
	},
	'U60': function(a, b) {
		return a >= b;
	},
	'i30': function(a, b) {
		return a - b;
	},
	'B40': function(a, b) {
		return a >> b;
	},
	'q60': function(a, b) {
		return a == b;
	},
	'l30': function(a, b) {
		return a == b;
	},
	'w60': function(a, b) {
		return a * b;
	}
};
(function(o1) {
	var M0 = ((97., 75.8E1) < 0xDD ? 'h' : (0x116, 31.) > 126.9E1 ? (84., 113) : 138.9E1 >= (0x88, 1.97E2) ? (96., false) : (116.5E1, 0x1D4)),
		g1 = ((0x10, 1.3960E3) > (0x68, 113.5E1) ? (146., true) : (0x196, 7) >= (89., 0x9) ? (142.8E1, 123.) : (3.74E2, 8.77E2)),
		X0 = null,
		B1 = ((50, 0x63) >= (0xD6, 1.178E3) ? 0x1CD : (27.8E1, 46.90E1) > 9 ? (8.67E2, 10) : (9.98E2, 103.)),
		M1 = 1,
		J1 = "white",
		p1 = 0,
		D1 = function(a) {
			o1.me.video = a;
		},
		m2 = function(a) {
			o1.me.Viewport = a;
		},
		L1 = function(a) {
			o1.me.timer = a;
		};
	timer = function() {
		var i = {},
			j = p1,
			l = p1,
			s = p1,
			r = p1,
			u = p1,
			e0 = p1;
		i.draw = function(a) {
			var b = 32,
				d = "century gothic",
				f = new me.Font(d, b, J1);
			fps_width = f.measureText(a, "FPS 30 - 30").width;
			f.draw(a, "FPS " + me.sys.fps + " - " + e0, f0V20.c30((a.canvas.width - fps_width), 2), f0V20.f30((a.canvas.height + 60), 2));
		};
		i.tick = M1;
		i.init = function() {
			i.reset();
		};
		i.reset = function() {
			r = s = (new Date).getTime();
			j = l = p1;
		};
		i.getTime = function() {
			return r;
		};
		i.update = function() {
			var a = ((149., 0x10A) <= (0x11E, 122) ? (12, "Z") : 1.70E1 < (43., 0x15A) ? (90.60E1, 1E3) : 1.216E3 <= (0x1D8, 0x1AA) ? 30.5E1 : (59.5E1, 13.));
			s = r;
			r = (new Date).getTime();
			u = f0V20.i30(r, s);
			j++;
			l += u;
			if (f0V20.l30(j % B1, p1)) {
				e0 = lastfps = ~~(f0V20.o30(a, j, l));
				j = l = p1;
			}
		};
		return i;
	}();
	L1(timer);
	video = function() {
		var r = "2d",
			u = "Microsoft Internet Explorer",
			e0 = (59.7E1 <= (39., 90.) ? 1.151E3 : (0xA2, 138) < 0x10F ? (6.7E1, 5) : (2.69E2, 8.77E2) <= 30 ? "G" : (1, 2.41E2)),
			d0 = "height",
			b0 = "width",
			f0 = {},
			l0 = X0,
			o0 = X0,
			w0 = X0,
			k0 = X0,
			n0 = g1,
			H0 = p1,
			A0 = p1,
			i0 = p1,
			l1 = p1;
		f0.videoSizeCheck = function(b) {
			var d = "px";
			n0 = b || g1;
			b = j4f17[g17]['innerWidth'];
			var f = j4f17[g17]['innerHeight'];
			if (f0V20.s30(b, i0) || f0V20.v30(f, l1)) {
				if (f0V20.y30(b, f) || f0V20.B30(i(), M0)) {
					l0.setAttribute(b0, b + d);
					l0.setAttribute(d0, f + d);
					A0 = me.sys.game_initial_height;
					H0 = Math.ceil(f0V20.E30(b, f, A0));
					if (w0) {
						w0.width = H0;
						w0.height = A0;
						if (me.game.viewport) {
							me.game.viewport.width = H0;
							me.game.viewport.height = A0;
						}
					}
					me.sys.bufferCanvasScale = f0V20.I30(A0, f);
					me.sys.hpWidth = Math.ceil(f0V20.L30(H0, B1));
					j4f17[g17]['scrollTo'](p1, -e0);
				} else {
					l0.setAttribute(b0, b + d);
					l0.setAttribute(d0, f + d);
					w0.width = b;
					w0.height = f;
					j4f17[g17]['scrollTo'](-e0, -e0);
				}
				i0 = b;
				l1 = f;
				me.video.clearBackSurface(J1);
				f0.rotateIcon = f0V20.O30(b, f) ? M0 : g1;

				function i() {
					for (var m17 in j4f17[l17]) {
						if (m17.length == 7 && m17.charCodeAt(6) == 101 && m17.charCodeAt(5) == 109 && m17.charCodeAt(0) == 97) break
					};
					if (f0V20.R30(j4f17[l17][m17], u)) return g1;
					var a = j4f17[g17].orientation;
					return (f0V20.U30(a, X0) || f0V20.X30(a, undefined)) ? M0 : g1;
				};
				if (f0V20.a40(i(), M0)) f0.rotateIcon = M0;
			}
		};
		f0.init = function() {
			var b = "Sorry but your browser does not support html 5 canvas !",
				d = "600px",
				f = "1px",
				i = "gameCanvas";

			function j() {
				for (var n17 in j4f17[l17]) {
					if (n17.length == 7 && n17.charCodeAt(6) == 101 && n17.charCodeAt(5) == 109 && n17.charCodeAt(0) == 97) break
				};
				if (f0V20.g40(j4f17[l17][n17], u)) return g1;
				var a = j4f17[g17].orientation;
				return (f0V20.j40(a, X0) || f0V20.m40(a, undefined)) ? M0 : g1;
			}
			var l = j4f17[g17]['innerWidth'],
				s = j4f17[g17]['innerHeight'];
			if (f0V20.d40(l, s)) f0.rotateIcon = g1;
			if (f0V20.p40(j(), M0)) f0.rotateIcon = M0;
			l0 = j4f17[q17]['getElementById'](i);
			l0.setAttribute(b0, f);
			l0.setAttribute(d0, d);
			j4f17[g17]['scrollTo'](p1, -e0);
			if (!l0.getContext) {
				alert(b);
				return M0;
			}
			o0 = l0.getContext(r);
			if (n0) {
				k0 = f0.createCanvasSurface(l, s);
				w0 = k0.canvas;
			}
			f0.videoSizeCheck(g1);
			return g1;
		};
		f0.getLimitW = function() {
			return p1;
		};
		f0.getLimitH = function() {
			return p1;
		};
		f0.getWidth = function() {
			return w0.width;
		};
		f0.getHeight = function() {
			return w0.height;
		};
		f0.getScreenCanvas = function() {
			return l0;
		};
		f0.getScreenContext = function() {
			return o0;
		};
		f0.getScreenFrameBuffer = function() {
			return k0;
		};
		f0.createCanvasSurface = function(a, b) {
			var d = "canvas",
				f = j4f17[q17]['createElement'](d);
			f.width = a;
			f.height = b;
			return f.getContext(r);
		};
		f0.updateDisplaySize = function(a) {
			if (n0) {
				if (a) me.sys.scale = a;
				H0 = f0V20.s40(w0.width, me.sys.scale);
				A0 = f0V20.v40(w0.height, me.sys.scale);
				l0.width = H0;
				l0.height = A0;
			}
		};
		f0.clearSurface = function(a, b) {
			var d = a || o0;
			d.fillStyle = b || "black";
			d.fillRect(0, 0, d.canvas.width, d.canvas.height);
		};
		f0.clearBackSurface = function(a) {
			k0.fillStyle = a || "black";
			k0.fillRect(0, 0, w0.width, w0.height);
		};
		f0.showBorder = function(a, b) {
			var d = "1px solid ";
			(b || l0).style.border = d + a;
		};
		f0.scale = function(a, b) {
			var d = a || o0;
			d.translate(-(f0V20.y40(d.canvas.width * b - d.canvas.width, 1)), -(f0V20.B40(d.canvas.height * b - d.canvas.height, 1)));
			d.scale(b, b);
		};
		f0.setAlpha = function(a, b) {
			(a || o0).globalCompositeOperation = b ? "source-over" : "copy";
		};
		f0.blitSurface = function() {
			f0.blitSurface = n0 ? function() {
				o0.drawImage(w0, 0, 0, w0.width, w0.height, 0, 0, l0.width, l0.height);
			} : function() {};
			f0.blitSurface();
		};
		return f0;
	}();
	D1(video);
	var F1 = Math.min,
		S1 = Math.max;
	ViewportEntity = me.Rect.extend({
		AXIS: {
			NONE: 0,
			HORIZONTAL: 1,
			VERTICAL: 2,
			BOTH: 3
		},
		limits: null,
		target: null,
		follow_axis: 0,
		_shake: null,
		_fadeIn: null,
		_fadeOut: null,
		_limitXEast: 0,
		_liveheight: 0,
		_limitwidth: 0,
		_limitheight: 0,
		init: function(a, b, d, f, i, j) {
			this.parent(new me.Vector2d(a, b), f0V20.E40(d, a), f0V20.H40(f, b));
			this.last = new me.Vector2d(-1, -1);
			this.limits = new me.Vector2d(i || this.width, j || this.height);
			this.target = null;
			this.follow_axis = this.AXIS.NONE;
			this._shake = {
				intensity: 0,
				duration: 0,
				axis: this.AXIS.BOTH,
				onComplete: null
			};
			this._fadeOut = {
				color: 0,
				alpha: 0,
				duration: 0,
				onComplete: null
			};
			this._fadeIn = {
				color: 0,
				alpha: 0,
				duration: 0,
				onComplete: null
			};
			this.setLivezone(f0V20.K40(this.width, 6), f0V20.N40(this.height, 6));
			this.tileheight = this.tilewidth = 0;
		},
		_followH: function(a) {
			if (f0V20.Q40(a.x - this.pos.x, this._limitXEast)) this.pos.x = Math.ceil(F1(f0V20.T40(a.x, this._limitXEast), this._limitwidth));
			else if (f0V20.W40(a.x - this.pos.x, this._limitXWest)) this.pos.x = Math.ceil(S1(f0V20.Z40(a.x, this._limitXWest), 0));
		},
		_followV: function(a) {
			if (f0V20.c50(a.y - this.pos.y, this._liveheight)) this.pos.y = ~~F1(f0V20.f50(a.y, this._liveheight), this._limitheight);
			else if (f0V20.i50(a.y - this.pos.y, this._limitYNorth)) this.pos.y = ~~S1(f0V20.l50(a.y, this._limitYNorth), 0);
		},
		reset: function(a, b) {
			this.pos.x = a || 0;
			this.pos.y = b || 0;
			this.last.set(-1, -1);
			this.follow_axis = this.target = null;
		},
		setLivezone: function(a, b) {
			this.livezone = new me.Vector2d(~~(f0V20.o50((this.width - a), 2)), ~~(f0V20.r50((this.height - b) / 2, b * 0.25)));
			this._limitXEast = f0V20.u50(this.width, this.livezone.x);
			this._limitXWest = this.livezone.x;
			this._limitYSouth = f0V20.x50(this.height, this.livezone.y);
			this._limitYNorth = this.livezone.y;
			this.update(true);
		},
		setBounds: function(a, b) {
			this.limits.set(a, b);
			this._limitwidth = f0V20.A50(this.limits.x, this.width);
			this._limitheight = f0V20.D50(this.limits.y, this.height);
		},
		follow: function(a, b) {
			this.targetObject = a;
			this.target = a.pos;
			this.follow_axis = b || this.AXIS.NONE;
		},
		move: function(a, b) {
			newx = ~~(this.pos.x + a);
			newy = ~~(this.pos.y + b);
			if (f0V20.G50(newx, 0) && f0V20.J50(newx, this._limitwidth)) this.pos.x = newx;
			if (f0V20.M50(newy, 0) && f0V20.P50(newy, this._limitheight)) this.pos.y = newy;
		},
		update: function() {
			updateTarget = true;
			if (this.target) {
				switch (this.follow_axis) {
					case this.AXIS.HORIZONTAL:
						this._followH(this.target, f0V20.S50(this._shake.duration, 0));
						break;
					case this.AXIS.VERTICAL:
						this._followV(this.target, f0V20.V50(this._shake.duration, 0));
						break;
					case this.AXIS.BOTH:
						this._followH(this.target, f0V20.Y50(this._shake.duration, 0));
						this._followV(this.target, f0V20.b60(this._shake.duration, 0));
				}
				updateTarget = f0V20.e60(this.last.x, this.pos.x) || f0V20.h60(this.last.y, this.pos.y);
				this.last.copy(this.pos);
			}
			if (f0V20.k60(this._shake.duration, 0)) {
				this._shake.duration -= me.timer.tick;
				if (f0V20.n60(this._shake.duration, 0)) {
					this.pos.y = 0;
					if (this._shake.onComplete) this._shake.onComplete();
				} else {
					if (f0V20.q60(this._shake.axis, this.AXIS.BOTH) || f0V20.t60(this._shake.axis, this.AXIS.HORIZONTAL)) {
						var a = f0V20.w60(Math.random(), this._shake.intensity);
						if (f0V20.z60(this.pos.x + this.width + a, this.limits.x)) this.pos.x += ~~a;
						else this.pos.x -= ~~a;
					}
					if (f0V20.C60(this._shake.axis, this.AXIS.BOTH) || f0V20.F60(this._shake.axis, this.AXIS.VERTICAL)) {
						a = f0V20.I60(Math.random(), this._shake.intensity);
						if (f0V20.L60(this.pos.y + this.height + a, this.limits.y)) this.pos.y += ~~a;
						else this.pos.y -= ~~a;
					}
					updateTarget = true;
				}
			}
			if (f0V20.O60(this._fadeIn.alpha, 1)) {
				this._fadeIn.alpha += f0V20.R60(me.timer.tick, this._fadeIn.duration);
				if (f0V20.U60(this._fadeIn.alpha, 1)) {
					this._fadeIn.alpha = 1;
					if (this._fadeIn.onComplete) this._fadeIn.onComplete(this);
				}
				updateTarget = true;
			}
			if (f0V20.X60(this._fadeOut.alpha, 0)) {
				this._fadeOut.alpha -= f0V20.a70(me.timer.tick, this._fadeOut.duration);
				if (f0V20.d70(this._fadeOut.alpha, 0)) {
					this._fadeOut.alpha = 0;
					if (this._fadeOut.onComplete) this._fadeOut.onComplete(this);
				}
				updateTarget = true;
			}
			return updateTarget;
		},
		shake: function(a, b, d, f) {
			d = d || this.AXIS.BOTH;
			this._shake.intensity = a;
			this._shake.duration = b;
			this._shake.axis = d;
			this._shake.onComplete = f || null;
		},
		fadeOut: function(a, b, d, f) {
			this._fadeOut.color = a || "#FFFFFF";
			this._fadeOut.duration = b || 30;
			this._fadeOut.alpha = f || 1;
			this._fadeOut.onComplete = d || null;
		},
		fadeIn: function(a, b, d, f) {
			this._fadeIn.color = a || "#FFFFFF";
			this._fadeIn.duration = b || 30;
			this._fadeIn.alpha = f || 0;
			this._fadeIn.onComplete = d || null;
		},
		getWidth: function() {
			return this.width;
		},
		getHeight: function() {
			return this.height;
		},
		focusOn: function(a) {
			this.pos.x = f0V20.g70(a.x, this.width * 0.5);
			this.pos.y = f0V20.j70(a.y, this.height * 0.5);
		},
		isVisible: function(a) {
			if (!a) return false;
			return this.checkAxisAligned(a);
		},
		draw: function(a) {
			if (f0V20.m70(this._fadeIn.alpha, 1)) {
				a.globalAlpha = this._fadeIn.alpha;
				me.video.clearSurface(a, me.utils.HexToRGB(this._fadeIn.color));
				a.globalAlpha = 1;
			}
			if (f0V20.p70(this._fadeOut.alpha, 0)) {
				a.globalAlpha = this._fadeOut.alpha;
				me.video.clearSurface(a, me.utils.HexToRGB(this._fadeOut.color));
				a.globalAlpha = 1;
			}
		}
	});
	m2(ViewportEntity);
})(window);
var E6q11 = {
	'z11': function(a, b) {
		return a / b;
	},
	'w11': function(a, b) {
		return a >= b;
	},
	'C11': function(a, b) {
		return a != b;
	},
	't11': function(a, b) {
		return a < b;
	}
};
(function(f0) {
	var l0 = function(a) {
		f0.me.loader = a;
	};
	loader = function() {
		var l = ((114., 81) > 0xB6 ? 's' : 65.0E1 < (104.5E1, 9.65E2) ? (147.5E1, null) : (0x165, 24.8E1)),
			s = ((128., 0x119) > 132 ? (11.25E2, 0) : (1.039E3, 57.));

		function r(a) {
			e0.push(a.name);
			e0[a.name] = new Image;
			e0[a.name].onload = onResourceLoaded.bind(u);
			e0[a.name].onerror = onImageError.bind(u);
			e0[a.name].src = a.src;
		}
		var u = {},
			e0 = [],
			d0 = s,
			b0 = s;
		u.onload = l;
		u.preload = function(a, b, d) {
			var f = a.length;
			d0 += f;
			for (var i = 0; E6q11.t11(i, f); i++) r(a[i]);
			if (b) u.onload = b;
			var j = this;
			if (u.onload) timerId = setInterval(function() {
				if (E6q11.w11(j.getLoadPercent(), 1)) {
					clearInterval(timerId);
					j.onload(d);
				}
			}, 100);
			else alert("\u8bf7\u5b9a\u4e49loader\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5982:me.loader.onload = onloadCallback");
		};
		onResourceLoaded = function() {
			b0++;
		};
		onImageError = function() {
			var a = "\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\uff01\u8bf7\u68c0\u67e5\u56fe\u7247\u8def\u5f84\u6216\u56fe\u7247\u6587\u4ef6\uff01";
			throw a;
		};
		u.getLoadPercent = function() {
			return E6q11.z11(b0, d0);
		};
		u.getImage = function(a) {
			if (E6q11.C11(e0[a], l)) return e0[a];
		};
		return u;
	}();
	l0(loader);
})(window);
var u9J6 = {
	'U6': function(a, b) {
		return a * b;
	},
	'O6': function(a, b) {
		return a * b;
	},
	'a7': function(a, b) {
		return a * b;
	},
	'X6': function(a, b) {
		return a < b;
	},
	'R6': function(a, b) {
		return a == b;
	}
};
(function(j) {
	var l = function(a) {
			j.me.Font = a;
		},
		s = function(a) {
			j.me.BitmapFont = a;
		};
	Font = Object.extend({
		ALIGN: {
			LEFT: "left",
			CENTER: "center",
			RIGHT: "right"
		},
		font: null,
		height: null,
		color: null,
		align: null,
		init: function(a, b, d, f) {
			this.set(a, b, d, f);
		},
		bold: function() {
			this.font = "bold " + this.font;
		},
		italic: function() {
			this.font = "italic " + this.font;
		},
		set: function(a, b, d, f) {
			this.font = "" + b + "px " + a;
			this.height = b;
			this.color = d;
			this.align = f || "top";
		},
		getRect: function() {
			return new me.Rect(new Vector2d(0, 0), 0, 0);
		},
		measureText: function(a, b) {
			a.font = this.font;
			a.fillStyle = this.color;
			a.textBaseLine = this.align;
			dim = a.measureText(b);
			dim.height = this.height;
			return dim;
		},
		draw: function(a, b, d, f) {
			a.font = this.font;
			a.fillStyle = this.color;
			a.textBaseLine = this.align;
			a.fillText(b, ~~d, ~~f);
		}
	});
	BitmapFont = Font.extend({
		size: null,
		sSize: null,
		scale: 1,
		firstChar: 32,
		init: function(a, b, d, f) {
			this.parent(a, null, null);
			this.size = new me.Vector2d(b, 0);
			this.sSize = new me.Vector2d;
			this.scale = d || 1;
			this.firstChar = f || 32;
			this.loadFontMetrics(a);
			this.align = this.ALIGN.RIGHT;
		},
		loadFontMetrics: function(a) {
			this.font = me.loader.getImage(a);
			this.size.y = this.font.height || 0;
			this.sSize.copy(this.size);
			this.sSize.x *= this.scale;
			this.sSize.y *= this.scale;
		},
		set: function(a, b) {
			this.align = a;
			if (b) {
				this.sSize.copy(this.size);
				this.sSize.x *= this.scale;
				this.sSize.y *= this.scale;
			}
		},
		measureText: function(a) {
			return {
				width: u9J6.O6(a.length, this.sSize.x),
				height: this.sSize.y
			};
		},
		draw: function(a, b, d, f) {
			if (typeof b != "string") b = b.toString();
			if (u9J6.R6(this.align, this.ALIGN.RIGHT)) d -= u9J6.U6(b.length, this.sSize.x);
			for (var i = 0; u9J6.X6(i, b.length); i++) {
				a.drawImage(this.font, u9J6.a7((b.charCodeAt(i) - this.firstChar), this.size.x), 0, this.sSize.x, this.sSize.y, ~~d, ~~f, this.size.x, this.size.y);
				d += this.sSize.x;
			}
		}
	});
	l(Font);
	s(BitmapFont);
})(window);
var j9j21 = {
	'z21': function(a, b) {
		return a != b;
	},
	'U21': function(a, b) {
		return a < b;
	},
	'w21': function(a, b) {
		return a != b;
	},
	'q21': function(a, b) {
		return a < b;
	},
	'O21': function(a, b) {
		return a < b;
	},
	'd31': function(a, b) {
		return a < b;
	},
	'j31': function(a, b) {
		return a * b;
	},
	's31': function(a, b) {
		return a < b;
	},
	'a31': function(a, b) {
		return a > b;
	},
	'L21': function(a, b) {
		return a == b;
	},
	'R21': function(a, b) {
		return a < b;
	},
	't21': function(a, b) {
		return a >= b;
	},
	'I21': function(a, b) {
		return a * b;
	},
	'y31': function(a, b) {
		return a > b;
	},
	'v31': function(a, b) {
		return a < b;
	},
	'F21': function(a, b) {
		return a * b;
	},
	'C21': function(a, b) {
		return a * b;
	},
	'm31': function(a, b) {
		return a < b;
	},
	'p31': function(a, b) {
		return a > b;
	},
	'X21': function(a, b) {
		return a < b;
	},
	'g31': function(a, b) {
		return a * b;
	}
};
(function(l1) {
	var o1 = ((0xE0, 102.2E1) >= 18.8E1 ? (0x105, 2) : (0x15C, 133) <= 118. ? (106.7E1, 970) : (1.2530E3, 9.81E2) >= (1.0E1, 14.17E2) ? (19, 970) : (127., 0x8B)),
		M0 = ((133., 55.) > (14., 22.) ? (2., 1) : (123., 139) <= 72 ? 1293 : (60.2E1, 6.91E2) <= (12.18E2, 87.) ? 1293 : (75.4E1, 34.7E1)),
		g1 = (118 <= (0x16F, 36.) ? (117., 77) : (0xF7, 5.65E2) > (137.1E1, 0xF6) ? (0x1E2, 0) : (143., 0x25) >= (0x126, 0xDA) ? (0x3C, 'p') : (14.8E1, 0x160)),
		X0 = function(a) {
			l1.me.addons.AIEightDirectionMove = a;
		},
		B1 = function(a) {
			l1.me.addons.AIFollowMove = a;
		},
		M1 = function(a) {
			l1.me.addons.controlEightDirectionMove = a;
		};
	l1.me.addons = {};
	var J1 = function() {
		var l = {};
		l.update = function(a, b, d) {
			for (var f = "walk", i = 0, j = b.length; j9j21.q21(i, j); i++)
				if (j9j21.t21(d.indexOf(b[i]), 0)) {
					f = b[i];
					break;
				}
			if (me.input.isKeyPressed(me.input.KEY.LEFT)) a.doMove(me.input.KEY.LEFT);
			else if (me.input.isKeyPressed(me.input.KEY.RIGHT)) a.doMove(me.input.KEY.RIGHT);
			else a.vel.x = 0;
			if (me.input.isKeyPressed(me.input.KEY.UP)) a.doMove(me.input.KEY.UP);
			else if (me.input.isKeyPressed(me.input.KEY.DOWN)) a.doMove(me.input.KEY.DOWN);
			else a.vel.y = 0;
			if (j9j21.w21(a.vel.x, 0) || j9j21.z21(a.vel.y, 0)) a.setCurrentAnimation(f + "_" + a.weaponType[a.weapon], "stand_" + a.weaponType[a.weapon]);
		};
		return l;
	}();
	M1(J1);
	J1 = function() {
		var i = {};
		i.update = function(a, b) {
			var d = ((0x234, 0xCA) <= (0x224, 14.540E2) ? (70, 10) : (0x136, 0xF0) >= 0x21E ? 1.225E3 : (102, 0x6F)),
				f = b[g1];
			if (!a.ai_move_delay) a.ai_move_delay = f;
			if (++a.ai_move_delay > f) {
				a.ai_move_direction_vertical = Math.floor(j9j21.C21(Math.random(), d));
				a.ai_move_direction_horizontal = Math.floor(j9j21.F21(Math.random(), d));
				a.ai_move_delay = M0;
			}
			switch (a.ai_move_direction_vertical) {
				case M0:
					a.doMove(me.input.KEY.LEFT);

					break;
				case o1:
					a.doMove(me.input.KEY.RIGHT);
					break;
				default:
					a.vel.x = g1;
			}
			switch (a.ai_move_direction_horizontal) {
				case M0:
					a.doMove(me.input.KEY.UP);
					break;
				case o1:
					a.doMove(me.input.KEY.DOWN);
					break;
				default:
					a.vel.y = g1;
			}
		};
		return i;
	}();
	X0(J1);
	J1 = function() {
		var i0 = {};
		i0.update = function(a, b) {
			var d = ((0x85, 0x34) > 0xAB ? (3., 0xC1) : (62, 18.) <= 114 ? (50., true) : (100, 0x35)),
				f = "all",
				i = ((7.140E2, 74) >= 9.02E2 ? (0xD9, 0x1D9) : (132, 56.0E1) >= (12.450E2, 0x189) ? (15.60E1, false) : (29.5E1, 75)),
				j = ((0xB5, 0x9C) > (0x10B, 6.560E2) ? (0x119, 225) : 0xB9 > (3.7E2, 0x93) ? (68.10E1, 8) : (6.63E2, 0x1D6)),
				l = (20. >= (1.141E3, 0x8) ? (0x70, 7) : (0x16D, 90)),
				s = ((0x31, 12) <= 1.154E3 ? (5.38E2, 6) : (143.70E1, 0x122) >= (72., 9.59E2) ? 108. : (0x1D4, 22.40E1)),
				r = ((23, 66) > 0x127 ? (74.10E1, 981) : (0x7, 7.82E2) < (110, 0x13C) ? (0x157, 0x210) : (46., 105.) < (138, 75.0E1) ? (16, 5) : (0x1F2, 100.2E1)),
				u = 4,
				e0 = 3,
				d0 = b[M0],
				b0 = b[o1],
				f0 = b[e0],
				l0 = b[u],
				o0 = b[r],
				w0 = b[s],
				k0 = b[l],
				n0 = b[j],
				H0 = i,
				A0 = me.sys.player;
			if (A0) {
				if (!a.ai_move_delay) {
					a.ai_move_delay = Math.ceil(j9j21.I21(Math.random(), k0));
					a.ai_move_delay_index = M0;
				}
				if (j9j21.L21(d0, f) || j9j21.O21(Math.abs(A0.pos.x - a.pos.x), d0.x) && j9j21.R21(Math.abs(A0.pos.y - a.pos.y), d0.y)) {
					if (j9j21.U21(Math.abs(A0.pos.x - a.pos.x), f0.x) && j9j21.X21(Math.abs(A0.pos.y - a.pos.y), f0.y)) {
						a.clearVel();
						if (!a.ai_anim_delay) a.ai_anim_delay = n0;
						if (++a.ai_anim_delay > n0) {
							if (j9j21.a31(A0.pos.x, a.pos.x)) a.doMove(me.input.KEY.RIGHT);
							else j9j21.d31(A0.pos.x, a.pos.x) && a.doMove(me.input.KEY.LEFT);
							l0 && a.setCurrentSprite(l0);
							a.setCurrentAnimation(o0, w0, g1, d);
							a.ai_anim_delay = M0;
						}
						return;
					}
					H0 = d;
				} else H0 = i;
				if (++a.ai_move_delay_index > a.ai_move_delay) {
					if (!H0) {
						a.ai_move_direction_vertical = Math.floor(j9j21.g31(Math.random(), u));
						a.ai_move_direction_horizontal = Math.floor(j9j21.j31(Math.random(), u));
					}
					a.ai_move_delay_index = M0;
					if (!H0 || a.random_move) {
						switch (a.ai_move_direction_vertical) {
							case M0:
								a.doMove(me.input.KEY.LEFT);
								break;
							case o1:
								a.doMove(me.input.KEY.RIGHT);
								break;
							default:
								a.vel.x = g1;
						}
						switch (a.ai_move_direction_horizontal) {
							case M0:
								a.doMove(me.input.KEY.UP);
								break;
							case o1:
								a.doMove(me.input.KEY.DOWN);
								break;
							default:
								a.vel.y = g1;
						}
					} else {
						if (j9j21.m31(A0.pos.x, a.pos.x)) a.doMove(me.input.KEY.LEFT);
						else j9j21.p31(A0.pos.x, a.pos.x) && a.doMove(me.input.KEY.RIGHT);
						if (j9j21.s31(Math.abs(A0.pos.x - a.pos.x), b0))
							if (j9j21.v31(A0.pos.y, a.pos.y - f0.y)) a.doMove(me.input.KEY.UP);
							else j9j21.y31(A0.pos.y, a.pos.y + f0.y) && a.doMove(me.input.KEY.DOWN);
					}
				}
			}
		};
		return i0;
	}();
	B1(J1);
})(window);
var R5A12 = {
	'd32': function(a, b) {
		return a > b;
	},
	'v52': function(a, b) {
		return a <= b;
	},
	'H52': function(a, b) {
		return a == b;
	},
	'k22': function(a, b) {
		return a != b;
	},
	'E32': function(a, b) {
		return a == b;
	},
	'T32': function(a, b) {
		return a == b;
	},
	'q22': function(a, b) {
		return a < b;
	},
	'V12': function(a, b) {
		return a != b;
	},
	'J12': function(a, b) {
		return a != b;
	},
	'p52': function(a, b) {
		return a * b;
	},
	't22': function(a, b) {
		return a < b;
	},
	'R22': function(a, b) {
		return a > b;
	},
	'W52': function(a, b) {
		return a - b;
	},
	'C22': function(a, b) {
		return a - b;
	},
	'u42': function(a, b) {
		return a >= b;
	},
	'l42': function(a, b) {
		return a * b;
	},
	'e22': function(a, b) {
		return a >= b;
	},
	'T52': function(a, b) {
		return a != b;
	},
	'G42': function(a, b) {
		return a - b;
	},
	'P12': function(a, b) {
		return a != b;
	},
	'd52': function(a, b) {
		return a - b;
	},
	'Q52': function(a, b) {
		return a != b;
	},
	'h22': function(a, b) {
		return a == b;
	},
	'I22': function(a, b) {
		return a - b;
	},
	'y52': function(a, b) {
		return a == b;
	},
	'i42': function(a, b) {
		return a / b;
	},
	'v32': function(a, b) {
		return a == b;
	},
	'n22': function(a, b) {
		return a == b;
	},
	'B32': function(a, b) {
		return a < b;
	},
	'y32': function(a, b) {
		return a >= b;
	},
	'm52': function(a, b) {
		return a == b;
	},
	'm32': function(a, b) {
		return a == b;
	},
	's32': function(a, b) {
		return a == b;
	},
	'K52': function(a, b) {
		return a == b;
	},
	's52': function(a, b) {
		return a * b;
	},
	'G12': function(a, b) {
		return a / b;
	},
	'L22': function(a, b) {
		return a >= b;
	},
	'A42': function(a, b) {
		return a - b;
	},
	'K32': function(a, b) {
		return a == b;
	},
	'D12': function(a, b) {
		return a >= b;
	},
	'p32': function(a, b) {
		return a == b;
	},
	'r42': function(a, b) {
		return a < b;
	},
	'o42': function(a, b) {
		return a > b;
	},
	'a32': function(a, b) {
		return a == b;
	},
	'g32': function(a, b) {
		return a == b;
	},
	'N52': function(a, b) {
		return a > b;
	},
	'N32': function(a, b) {
		return a == b;
	},
	'j52': function(a, b) {
		return a == b;
	},
	'Y12': function(a, b) {
		return a != b;
	},
	'M12': function(a, b) {
		return a != b;
	},
	'J42': function(a, b) {
		return a - b;
	},
	'U42': function(a, b) {
		return a != b;
	},
	'B52': function(a, b) {
		return a == b;
	},
	'F22': function(a, b) {
		return a < b;
	},
	'w22': function(a, b) {
		return a < b;
	},
	'X42': function(a, b) {
		return a / b;
	},
	'H32': function(a, b) {
		return a == b;
	},
	'b22': function(a, b) {
		return a < b;
	},
	'Q32': function(a, b) {
		return a == b;
	},
	'c42': function(a, b) {
		return a * b;
	},
	'Q42': function(a, b, d) {
		return a - b + d;
	},
	'E52': function(a, b) {
		return a == b;
	},
	'D42': function(a, b) {
		return a - b;
	},
	'a52': function(a, b) {
		return a - b;
	},
	'Z32': function(a, b) {
		return a * b;
	},
	'j32': function(a, b) {
		return a == b;
	},
	'M42': function(a, b, d) {
		return a - b + d;
	},
	'X22': function(a, b) {
		return a == b;
	},
	'S12': function(a, b) {
		return a != b;
	},
	'z22': function(a, b) {
		return a < b;
	},
	'g52': function(a, b) {
		return a - b;
	},
	'f42': function(a, b) {
		return a == b;
	},
	'U22': function(a, b) {
		return a < b;
	},
	'O22': function(a, b) {
		return a == b;
	},
	'W32': function(a, b) {
		return a < b;
	},
	'x42': function(a, b) {
		return a < b;
	}
};
(function(e0) {
	var d0 = function(a) {
		e0.me.BaseSprite = a;
	};
	BaseSprite = me.Rect.extend({
		scale: null,
		scaleFlag: false,
		lastflipX: false,
		lastflipY: false,
		z: 0,
		isEntity: true,
		spriteName: null,
		currentSprite: null,
		currentSpriteIndex: 0,
		currentSpriteCount: 0,
		currentAnim: "walk",
		currentAnimLock: false,
		resetAnim: null,
		autodestroy: true,
		visible: false,
		isCollision: true,
		collisionActBox: null,
		collisionBodyBox: null,
		vp: null,
		fpscount: 0,
		checkCollisionMap: true,
		animationspeed: 0,
		isDraw: true,
		customOnCollision: null,
		drawHp: true,
		initDirection: me.tag.TAG_DIRECTION_RIGHT,
		lastFrameDelay: 0,
		lastFrameDelayIndex: 0,
		init: function(a) {
			this.parent(new me.Vector2d(a.x, a.y), 0, 0);
			this.z = a.z;
			this.name = a.name;
			if (a.spriteName) {
				this.spriteName = a.spriteName;
				this.currentSprite = e0.me[this.spriteName + "Sprites"];
				if (R5A12.D12(a.name.indexOf("boss"), 0)) a.name = a.name.substring(5);
				this.currentSpriteActions = this.currentSprite.actions[a.name];
				if (!this.currentSpriteActions) throw "\u9519\u8bef\uff01\u8bf7\u5728\u7cbe\u7075\u6cdb\u578b\u7c7b'" + this.spriteName + "Sprites'\u4e2d\u8bbe\u7f6e\u4e00\u4e2a\u7cbe\u7075\u96c6\u5408 '" + a.name + "'";
			}
			this.scale = a.scale || 1;
			this.flip = new me.Vector2d(1, 1);
			this.collisionBox = new me.Rect(this.pos, this.width, this.height);
			this.vp = me.game.viewport;
			this.animationspeed = R5A12.G12(me.sys.fps, 10);
			this.baseStats = {
				hp: 0,
				currentHp: 0,
				attack: 0,
				currentAttack: 0,
				def: 0,
				gold: 0,
				kills: 0
			};
			this.storage = null;
			this.currentSpriteFrameBox = {};
			this.holdItems = [];
			this.holdItemsCount = 0;
			this.currentSpriteFrame = [];
			this.collisionFrames = [];
		},
		setCurrentSpriteActions: function(a) {
			this.name = a;
			this.currentSpriteActions = this.currentSprite.actions[a];
		},
		setBaseStats: function(a) {
			for (var b in a) this.baseStats[b] = a[b];
		},
		addHoldItems: function(a) {
			this.holdItems.push(a);
			this.holdItemsCount++;
		},
		setCollision: function(a) {
			this.collisionAnim = a.collisionAnim;
			this.isCollision = a.isCollision;
			this.collisionFrames = a.frames;
			this.collideProp = a.collideProp;
		},
		resetAnimPlaySet: function() {
			this.currentAnimLock = false;
		},
		flipX: function(a) {
			if (R5A12.J12(a, this.lastflipX)) {
				this.lastflipX = a;
				this.flip.x = -this.flip.x;
				this.flipFlag = R5A12.M12(this.flip.x, 1) || R5A12.P12(this.flip.y, 1);
			}
		},
		flipY: function(a) {
			if (R5A12.S12(a, this.lastflipY)) {
				this.lastflipY = a;
				this.flip.y = -this.flip.y;
				this.flipFlag = R5A12.V12(this.flip.x, 1) || R5A12.Y12(this.flip.y, 1);
			}
		},
		getStorageByFrameImages: function(a) {
			for (var b = 0, d = this.storage.currentEquip.length; R5A12.b22(b, d); b++)
				if (R5A12.e22(this.storage.currentEquip[b].indexOf(a), 0)) return this.storage.currentEquip[b];
			return null;
		},
		setAnimationSpeed: function(a) {
			this.fpscount = this.animationspeed = a;
		},
		setCurrentAnimation: function(a, b, d, f) {
			if (R5A12.h22(a, "destroy")) {
				this.resetAnim = "destroy";
				this.setCurrentSpriteFrame();
			} else {
				if (!this.currentSpriteActions[a]) throw "\u5bf9\u8c61'" + this.name + "'\u4e2d\u672a\u627e\u5230\u8be5\u52a8\u753b'" + a + "'\u76f8\u5173\u914d\u7f6e\uff01";
				if (R5A12.k22(a, this.currentAnim)) {
					this.currentAnim = a;
					this.resetAnim = b || null;
					this.lastFrameDelay = f || 0;
					this.currentSpriteIndex = d || 0;
					this.setCurrentSpriteFrame();
				}
			}
		},
		isCurrentAnimation: function(a) {
			return R5A12.n22(this.currentAnim, a);
		},
		setCurrentSpriteFrame: function(a) {
			if (!this.currentSpriteActions[this.currentAnim]) throw "\u5bf9\u8c61'" + this.name + "\u672a\u627e\u5230\u8be5\u52a8\u753b'" + this.currentAnim + "'\u76f8\u5173\u914d\u7f6e\uff01";
			a = a || 0;
			var b = this.currentSpriteActions[this.currentAnim].frames;
			this.currentSpriteCount = b.length;
			if (b[a]) {
				this.isDraw = true;
				this.currentSpriteFrameBox = a = this.currentSprite.frames[b[a][0]];
				this.currentSpriteFrame = [];
				b = 0;
				for (var d = a.frameArray.length; R5A12.q22(b, d); b++) {
					var f = a.frameArray[b][0],
						i = this.currentSprite.rects[f][a.frameArray[b][1]],
						j = a.frameArray[b][2],
						l = a.frameArray[b][3],
						s = null;
					if (this.storage) {
						if (f = this.getStorageByFrameImages(this.currentSprite.imageNames[f])) s = me.loader.getImage(f);
					} else s = me.loader.getImage(this.currentSprite.imageNames[f]);
					if (!i) throw "\u52a8\u4f5c\u7f16\u8f91\u6709\u8bef\uff0c\u8bf7\u68c0\u67e5";
					f = R5A12.t22(i[0], 0) ? 0 : i[0];
					var r = R5A12.w22(i[1], 0) ? 0 : i[1],
						u = i[2];
					i = i[3];
					if (s) {
						u = R5A12.z22(s.width, f + u) ? R5A12.C22(s.width, f) : u;
						i = R5A12.F22(s.height, r + i) ? R5A12.I22(s.height, r) : i;
						this.currentSpriteFrame.push({
							x: f,
							y: r,
							w: u,
							h: i,
							xOff: j,
							yOff: l,
							image: s
						});
					}
				}
			} else this.isDraw = false;
		},
		update: function() {
			this.updateCollisionBox();
			this.visible = me.game.viewport.isVisible(this.collisionBodyBox || this.collisionActBox || this.collisionBox);
			if (!this.visible) return false;
			if (this.visible && R5A12.L22(this.fpscount++, this.animationspeed)) {
				var a = ++this.currentSpriteIndex % this.currentSpriteCount,
					b = true;
				if (R5A12.O22(a, 0))
					if (R5A12.R22(this.lastFrameDelay, 0))
						if (++this.lastFrameDelayIndex < this.lastFrameDelay) {
							b = false;
							a = --this.currentSpriteIndex % this.currentSpriteCount;
						} else {
							b = true;
							this.lastFrameDelay = this.lastFrameDelayIndex = 0;
						}
				this.setCurrentSpriteFrame(a);
				for (var d = 0; R5A12.U22(d, this.holdItemsCount); d++) {
					var f = this.holdItems[d];
					if (R5A12.X22(this.currentAnim, f.bindAnimName) && R5A12.a32(a, f.bindAnimIndex)) {
						if (f.isOne)
							if (R5A12.d32(me.game.getEntityByName(f.objectName).length, 0)) continue;
						var i = {};
						i.x = this.pos.x;
						i.y = this.pos.y + (f.yOff || 0);
						i.name = f.objectName;
						i.spriteName = this.spriteName;
						i = me.entityPool.newIstanceOf(i);
						i.setBaseStats(this.baseStats);
						if (R5A12.g32(this.initDirection, me.tag.TAG_DIRECTION_LEFT))
							if (this.lastflipX) {
								if (this.lastflipX) {
									i.vel.x = i.vel.x;
									i.pos.x += f.xOff || 0;
									R5A12.j32(i.initDirection, me.tag.TAG_DIRECTION_LEFT) && i.flipX(true);
								}
							} else {
								i.vel.x = -i.vel.x;
								i.pos.x -= f.xOff || 0;
								R5A12.m32(i.initDirection, me.tag.TAG_DIRECTION_RIGHT) && i.flipX(true);
							} else if (R5A12.p32(this.initDirection, me.tag.TAG_DIRECTION_RIGHT))
							if (this.lastflipX) {
								if (this.lastflipX) {
									i.vel.x = -i.vel.x;
									i.pos.x -= f.xOff || 0;
									R5A12.s32(i.initDirection, me.tag.TAG_DIRECTION_RIGHT) && i.flipX(true);
								}
							} else {
								i.vel.x = i.vel.x;
								i.pos.x += f.xOff || 0;
								R5A12.v32(i.initDirection, me.tag.TAG_DIRECTION_LEFT) && i.flipX(true);
							}
						me.game.add(i);
					}
				}
				if (this.isCollision && R5A12.y32(this.currentAnim.indexOf(this.collisionAnim), 0)) {
					d = false;
					f = 0;
					for (i = this.collisionFrames.length; R5A12.B32(f, i); f++)
						if (R5A12.E32(this.collisionFrames[f], a)) {
							d = true;
							break;
						}
					if (d) {
						R5A12.H32(this.name, "monster1") && this.updateCollisionBox();
						this.collisionBodyBox && this.collisionActBox && me.game.collide(this);
					}
				}
				if (R5A12.K32(a, 1) && R5A12.N32(this.currentAnim, "dead")) {
					me.sys.player.baseStats.gold += this.baseStats.gold;
					me.sys.player.baseStats.kills++;
				}
				if (R5A12.Q32(a, 0))
					if (b) {
						this.resetAnimPlaySet();
						if (R5A12.T32(this.resetAnim, "destroy")) {
							this.destroy();
							this.isDraw = false;
						} else if (this.resetAnim) {
							this.setCurrentAnimation(this.resetAnim);
							this.resetAnim = null;
						}
					}
				this.fpscount = 0;
			}
			return true;
		},
		draw: function(a) {
			if (this.isDraw && this.visible) {
				for (var b = this.currentSpriteFrame, d = 0, f = b.length; R5A12.W32(d, f); d++) {
					var i = this.drawUpFrame(b[d]);
					a.scale(this.flip.x, this.flip.y);
					a.drawImage(i.image, i.x, i.y, i.w, i.h, i.xpos, i.ypos, R5A12.Z32(i.w, this.scale), R5A12.c42(i.h, this.scale));
					if (this.drawHp)
						if (R5A12.f42(d, 0)) {
							var j = R5A12.i42(this.baseStats.currentHp, this.baseStats.hp),
								l = Math.floor(R5A12.l42(me.sys.hpWidth, j)),
								s = "#66FF00";
							if (R5A12.o42(l, 0)) {
								if (R5A12.r42(j, 0.7) && R5A12.u42(j, 0.3)) s = "#FFFF00";
								else if (R5A12.x42(j, 0.3)) s = "red";
								this.lastflipX ? (new Rect(new Vector2d(i.xpos + me.sys.hpWidth - l, R5A12.A42(i.ypos, 8)), l, 3)).drawFull(a, s, true) : (new Rect(new Vector2d(i.xpos, R5A12.D42(i.ypos, 8)), l, 3)).drawFull(a, s, true);
								(new Rect(new Vector2d(i.xpos, R5A12.G42(i.ypos, 9)), me.sys.hpWidth, 4)).drawFull(a, "#666666");
							}
						}
					this.flipFlag && a.setTransform(1, 0, 0, 1, 0, 0);
				}
				if (me.debug.renderCollisionBox) {
					this.parent(a, "blue");
					this.collisionActBox && this.collisionActBox.draw(a, "red");
					this.collisionBodyBox && this.collisionBodyBox.draw(a, "yellow");
				}
			}
		},
		drawUpFrame: function(a) {
			var b = a.xOff,
				d = a.yOff;
			if (this.lastflipX) b = -b - a.w + a.w * (R5A12.J42(this.scale, 1));
			b = R5A12.M42(this.pos.x, this.vp.pos.x, b);
			d = R5A12.Q42(this.pos.y, this.vp.pos.y, d);
			if (R5A12.U42(this.sacle, 1)) {
				b -= Math.ceil(R5A12.X42((a.w * this.scale - a.w), 2));
				d -= Math.ceil(R5A12.a52(a.h * this.scale, a.h));
			}
			if (this.flipFlag) {
				b = R5A12.d52(b * this.flip.x, (this.flip.x < 0 ? a.w : 0));
				d = R5A12.g52(d * this.flip.y, (this.flip.y < 0 ? a.h : 0));
			}
			a.xpos = b;
			a.ypos = d;
			return a;
		},
		doMove: function(a) {
			switch (a) {
				case me.input.KEY.LEFT:
					R5A12.j52(this.initDirection, me.tag.TAG_DIRECTION_RIGHT) ? this.flipX(true) : this.flipX(false);
					this.vel.x = -this.accel.x * me.timer.tick;
					break;
				case me.input.KEY.RIGHT:
					R5A12.m52(this.initDirection, me.tag.TAG_DIRECTION_RIGHT) ? this.flipX(false) : this.flipX(true);
					this.vel.x = R5A12.p52(this.accel.x, me.timer.tick);
					break;
				case me.input.KEY.UP:
					this.vel.y = -this.accel.y * me.timer.tick;
					break;
				case me.input.KEY.DOWN:
					this.vel.y = R5A12.s52(this.accel.y, me.timer.tick);
			}
		},
		updateCollisionBox: function() {
			for (var a = 0; R5A12.v52(a, 1);) {
				var b = [];
				if (R5A12.y52(a, 0)) b = this.currentSpriteFrameBox.actRect;
				else if (R5A12.B52(a, 1)) b = this.currentSpriteFrameBox.bodyRect;
				if (b) {
					var d = b[0],
						f = b[1];
					if (this.lastflipX) d = -d - b[2];
					d = this.pos.x + d;
					f = this.pos.y + f;
					if (R5A12.E52(a, 0)) this.collisionActBox = new Rect(new Vector2d(d, f), b[2], b[3]);
					else this.collisionBodyBox = new Rect(new Vector2d(d, f), b[2], b[3]);
				} else if (R5A12.H52(a, 0)) this.collisionActBox = null;
				else if (R5A12.K52(a, 1)) this.collisionBodyBox = null;
				a++;
			}
			if (this.collisionBodyBox) this.z = this.collisionBodyBox.bottom;
			else if (this.collisionActBox) this.z = this.collisionActBox.bottom;
		},
		checkCollision: function(a) {
			if (this.collisionBodyBox) {
				var b = a.collisionBodyBox.bottom;
				if (b)
					if (R5A12.N52(Math.abs(this.collisionBodyBox.bottom - b), me.sys.collisionY)) return null;
				b = this.collisionBodyBox.collideVsAABB(a.collisionActBox);
				if (R5A12.Q52(b.x, 0) || R5A12.T52(b.y, 0)) {
					a.onActCollision(b);
					b.type = this.type;
					this.baseStats.currentHp -= R5A12.W52(a.baseStats.currentAttack, this.baseStats.def);
					this.onBodyCollision(b);
					return b;
				}
			}
			return null;
		},
		onBodyCollision: function() {},
		onActCollision: function() {},
		destroy: function() {
			if (this.autodestroy) this.onDestroyEvent();
			me.game.remove(this);
			delete this;
			return this.autodestroy;
		},
		onDestroyEvent: function() {}
	});
	d0(BaseSprite);
})(window);
var s5a = {
	'O': function(a, b) {
		return a < b;
	},
	'F': function(a, b) {
		return a == b;
	},
	't': function(a, b) {
		return a == b;
	},
	'a0': function(a, b) {
		return a != b;
	},
	'R': function(a, b) {
		return a != b;
	},
	'n': function(a, b) {
		return a < b;
	},
	'L': function(a, b) {
		return a > b;
	},
	'w': function(a, b) {
		return a == b;
	},
	'k': function(a, b) {
		return a > b;
	},
	'U': function(a, b) {
		return a != b;
	},
	'q': function(a, b) {
		return a >= b;
	},
	'I': function(a, b) {
		return a < b;
	},
	'X': function(a, b) {
		return a != b;
	},
	'C': function(a, b) {
		return a == b;
	}
};
(function(T9) {
	var b0 = ((0xAA, 22) > 110 ? (87., 467) : (27., 131.) >= 0x114 ? 34 : (0x23E, 0x13A) < 40.7E1 ? (0xF4, 0) : (2.80E1, 0.)),
		f0 = function(a) {
			T9.me.ObjectEntity = a;
		};
	ObjectEntity = BaseSprite.extend({
		type: b0,
		init: function(a) {
			this.type = a.type || b0;
			this.parent(a);
			this.vel = new me.Vector2d;
			this.accel = new me.Vector2d;
			this.collisionMap = me.game.collisionMap;
			this.addons = [];
			this.addonsCount = b0;
			this.effects = [];
			this.effectsCount = b0;
			this.effectsDelay = [];
		},
		addAddons: function(a) {
			var b = "\u201d\u4e2d\u6dfb\u52a0\u7684\u63d2\u4ef6\uff1a",
				d = "\u63d2\u4ef6\u5e93\u4e2d\u65e0\u60a8\u5411\u5bf9\u8c61\u201c",
				f = "\u60a8\u65e0\u8bbe\u7f6e\u4efb\u4f55\u63d2\u4ef6";
			if (!a) throw f;
			if (me.addons[a[b0]]) {
				this.addons.push(a);
				this.addonsCount++;
			} else throw d + this.name + b + a[b0];
		},
		addEffect: function(a) {
			var b = "\u60a8\u65e0\u8bbe\u7f6e\u4efb\u4f55\u7279\u6548";
			if (a) {
				this.effects.push(a);
				this.effectsCount++;
				var d = {},
					f = b0;
				if (a.fade) f = a.fade.duration;
				if (a.shake) f = a.shake.duration;
				if (a.effectEntity) f = a.effectEntity.duration;
				d.effectsDelayIndex = f;
				d.effectsDelay = f;
				this.effectsDelay.push(d);
			} else throw b;
		},
		update: function() {
			var a = "destroy",
				b = ((133, 1.0130E3) < 128.9E1 ? (15.20E1, 1) : (8.28E2, 1.95E2)),
				d = (0xCF > (128.70E1, 84) ? (0x133, null) : 6.23E2 >= (0x14D, 9.620E2) ? (127., 0x168) : 67 < (5.65E2, 2.1E1) ? 198 : (0x10B, 0x1A5)),
				f = "custom",
				i = "shake",
				j = "fade";
			if (s5a.k(this.effectsCount, b0))
				for (var l = b0; s5a.n(l, this.effectsCount); l++)
					if (++this.effectsDelay[l].effectsDelayIndex > this.effectsDelay[l].effectsDelay) {
						var u0 = this.effects[l];
						if (s5a.q(this.currentAnim.indexOf(u0.currentAnim), b0) && s5a.t(u0.index, this.currentSpriteIndex))
							if (s5a.w(u0.type, j)) {
								this.vp.fadeOut(u0.fade.color, u0.fade.duration, null, u0.fade.alpha);
								this.effectsDelay[l].effectsDelayIndex = b0;
							} else if (s5a.C(u0.type, i)) {
							this.vp.shake(u0.shake.intensity, u0.shake.duration, u0.shake.axis);
							this.effectsDelay[l].effectsDelayIndex = b0;
						} else if (s5a.F(u0.type, f)) {
							var s = d,
								r = d;
							if (u0.effectEntity.xOff && u0.effectEntity.yOff) {
								s = this.flipFlag ? this.pos.x + u0.effectEntity.flipxOff : this.pos.x + u0.effectEntity.xOff;
								r = this.pos.y + u0.effectEntity.yOff;
							}
							for (var u = u0.effectEntity.count || b, e0 = b0; s5a.I(e0, u); e0++) {
								var d0 = me.entityPool.newIstanceOf({
									spriteName: u0.effectEntity.spriteName,
									x: s,
									y: r,
									z: this.z + b,
									name: u0.effectEntity.name
								});
								d0.setCurrentAnimation(u0.effectEntity.currentAnim, a, b0, u0.effectEntity.delay || b0);
								if (u0.effectEntity.xOff) {
									d0.flipFlag = this.flipFlag;
									d0.flip.x = this.flip.x;
								}
								me.game.add(d0);
							}
							this.effectsDelay[l].effectsDelayIndex = b0;
						}
					}
			if (!this.currentAnimLock)
				if (s5a.L(this.addonsCount, b0))
					for (l = b0; s5a.O(l, this.addonsCount); l++) me.addons[this.addons[l][b0]].update(this, this.addons[l][b], this.currentAnim);
			if (this.checkCollisionMap) {
				collision = this.collisionMap.checkCollision(this.collisionBodyBox || this.collisionActBox, this.vel);
				if (collision.y) this.vel.y = b0;
				if (collision.x) this.vel.x = b0;
			}
			this.updateMovement();
			return this.parent();
		},
		setVelocity: function(a, b) {
			this.accel.x = s5a.R(a, b0) ? a : this.accel.x;
			this.accel.y = s5a.U(a, b0) ? b : this.accel.y;
		},
		getVelocity: function() {
			return {
				x: this.accel.x,
				y: this.accel.y
			};
		},
		clearVel: function() {
			this.vel.x = b0;
			this.vel.y = b0;
		},
		updateMovement: function() {
			var a = ((11.08E2, 142.) >= 38.1E1 ? 655 : (33.2E1, 0x7B) < 2.63E2 ? (13.030E2, false) : (0x69, 125)),
				b = ((15., 1.479E3) <= (142, 129.6E1) ? (4, "c") : 79.2E1 > (86.30E1, 9.59E2) ? (0x11C, "c") : (0x224, 0x238) > 45.7E1 ? (134.3E1, true) : (1.012E3, 30.70E1));
			if (s5a.X(this.vel.x, b0) || s5a.a0(this.vel.y, b0)) {
				this.pos.add(this.vel);
				return b;
			}
			return a;
		}
	});
	f0(ObjectEntity);
})(window);
var b3K71 = {
	'f81': function(a, b) {
		return a * b;
	},
	'c81': function(a, b) {
		return a > b;
	},
	'Z71': function(a, b) {
		return a == b;
	},
	'W71': function(a, b) {
		return a < b;
	},
	'N71': function(a, b) {
		return a < b;
	},
	'T71': function(a, b) {
		return a < b;
	},
	'Q71': function(a, b) {
		return a == b;
	}
};
(function(l) {
	var s = function(a) {
		l.me.PlayerEntity = a;
	};
	PlayerEntity = ObjectEntity.extend({
		init: function(a) {
			this.parent(a);
			this.listenKeys = [];
			this.bindContros = [];
			this.bindControsCount = 0;
			this.listenKeyDelays = [];
			this.checkCollisionMap = this.visible = true;
			this.type = me.tag.TAG_ENTITY_PLAYER;
			this.weaponType = ["sword", "gun"];
			this.weapon = 0;
			this.currentAnim = "stand_sword";
			this.animStageDelay = 0;
			this.drawHp = false;
			this.currentMoney = 0;
			this.initStorage();
		},
		initStorage: function() {
			this.storage = me.storage.getPlayerStorage();
			this.baseStats.currentHp = this.storage.currentHp;
			this.baseStats.gold = this.storage.gold;
			this.updateBaseStats();
		},
		updateStorage: function() {
			me.storage.setPlayerStorage({
				currentHp: this.baseStats.currentHp,
				gold: this.baseStats.gold
			});
		},
		updateBaseStats: function() {
			var a = me.storage.getStats(this.weaponType[this.weapon]);
			this.baseStats.hp = a.hp;
			this.baseStats.attack = a.attack;
			this.baseStats.def = a.def;
			this.baseStats.currentAttack = this.baseStats.attack;
		},
		changeWeapon: function() {
			if (++this.weapon == this.weaponType.length) this.weapon = 0;
			this.updateBaseStats();
		},
		addControl: function(a) {
			this.bindContros.push(a);
			this.bindControsCount++;
			for (var b = 0, d = this.listenKeys.length; b3K71.N71(b, d); b++)
				if (b3K71.Q71(this.listenKeys[b], a.controlKey)) return;
			this.listenKeys.push(a.controlKey);
			a.delay ? this.listenKeyDelays.push({
				idx: 999,
				delay: a.delay
			}) : this.listenKeyDelays.push(null);
		},
		update: function() {
			if (!this.currentAnimLock)
				for (var a = 0, b = this.listenKeys.length; b3K71.T71(a, b); a++)
					if (!this.listenKeyDelays[a] || ++this.listenKeyDelays[a].idx > this.listenKeyDelays[a].delay[this.weapon])
						if (me.input.isKeyPressed(this.listenKeys[a])) {
							if (this.listenKeyDelays[a]) this.listenKeyDelays[a].idx = 0;
							for (var d = 0; b3K71.W71(d, this.bindControsCount); d++) {
								var f = this.bindContros[d];
								if (b3K71.Z71(f.controlKey, this.listenKeys[a])) {
									this.currentAnimLock = f.lock;
									f.clearVel && f.clearVel[this.weapon] && this.clearVel();
									if (f.changeWeapon) {
										this.changeWeapon();
										this.animStageIndex = null;
										this.animStageDelay = 0;
									}
									var i = "";
									if (f.animStageCount) {
										if (b3K71.c81(this.animStageDelay, f.animStageDelay)) this.animStageIndex = 0;
										var j = f.animStageCount[this.weapon];
										if (j) {
											if (!this.animStageIndex) this.animStageIndex = 0;
											if (++this.animStageIndex > j) this.animStageIndex = 1;
											i = this.animStageIndex;
											this.animStageDelay = 0;
										}
										this.baseStats.currentAttack = b3K71.f81(this.baseStats.attack, (0.6 + this.animStageIndex * 0.2));
									}
									if (f.animName) this.setCurrentAnimation(f.animName + "_" + this.weaponType[this.weapon] + i, f.resetAnim ? f.resetAnim + "_" + this.weaponType[this.weapon] : null, f.index);
									if (f.clearKey) {
										me.input.clearKeyStatus();
										me.input.clearTouchPos();
									}
								}
							}
						}
			this.animStageDelay++;
			return this.parent(this);
		}
	});
	s(PlayerEntity);
})(window);
var R1p80 = {
	'v80': function(a, b) {
		return a * b;
	},
	's80': function(a, b) {
		return a * b;
	},
	'y80': function(a, b) {
		return a != b;
	},
	'B80': function(a, b) {
		return a != b;
	}
};
(function(d) {
	var f = ((8.120E2, 13.94E2) < 91.2E1 ? 179 : (15., 0x2E) <= 7.770E2 ? (14.67E2, false) : (0x1B5, 1.297E3)),
		i = ((144, 3.4E2) >= 134. ? (82.2E1, true) : (145, 6.19E2)),
		j = function(a) {
			d.me.FlyEntity = a;
		};
	FlyEntity = me.BaseSprite.extend({
		init: function(a) {
			var b = "show";
			this.parent(a);
			this.vel = new me.Vector2d;
			this.isEntity = i;
			this.drawHp = f;
			this.currentAnim = b;
		},
		setVelocity: function(a, b) {
			this.vel.x = R1p80.s80(a, me.timer.tick);
			this.vel.y = R1p80.v80(b, me.timer.tick);
		},
		update: function() {
			var a = ((0x1AD, 83.) < (1.34E2, 12.67E2) ? (113., 0) : (0xFA, 5.0E1) > (1.083E3, 0x1BA) ? 0xF2 : (103.2E1, 0x1B6) <= 9.60E1 ? (0x23D, 'l') : (0, 0x171));
			if (R1p80.y80(this.vel.x, a) || R1p80.B80(this.vel.y, a)) this.pos.add(this.vel);
			if (!this.parent()) {
				this.destroy();
				return f;
			}
			return i;
		}
	});
	j(FlyEntity);
})(window);
var U6Q72 = {
	'c82': function(a, b) {
		return a * b;
	},
	'i82': function(a, b) {
		return a == b;
	},
	'f82': function(a, b) {
		return a > b;
	},
	'Z72': function(a, b) {
		return a < b;
	},
	'T72': function(a, b) {
		return a * b;
	},
	'W72': function(a, b) {
		return a * b;
	}
};
(function(d) {
	var f = (6.03E2 < (0x1CA, 49.) ? 9.86E2 : (79.4E1, 1.52E2) > 0x21E ? 0x210 : (0x3C, 79.7E1) >= (112., 0x3A) ? (4, 0) : (146.70E1, 99.9E1)),
		i = ((39., 59.) > (0x1D8, 0xFC) ? "2" : (32.1E1, 0x1B) < (96., 0x134) ? (16., false) : (138, 83.5E1)),
		j = (86.9E1 <= (56, 44.) ? '=' : 1.375E3 > (0x10C, 145.) ? (94.60E1, true) : (0x170, 0x11) > 81 ? 60. : (0x1F, 0x4D)),
		l = function(a) {
			d.me.EffectSprite = a;
		};
	EffectSprite = me.BaseSprite.extend({
		init: function(a) {
			var b = ((0x9C, 111) > 54 ? (55, 1) : (0x146, 1.11E2) >= 0x16A ? "B" : (0x46, 0x6E));
			if (!a.x || !a.y) {
				a.x = Math.floor(U6Q72.T72(Math.random(), me.game.viewport.width));
				a.y = Math.floor(U6Q72.W72(Math.random(), me.game.viewport.height));
				this.z = ++me.sys.orderMaxNumber + b;
				this.randomFrame = j;
				this.randomIdx = -b;
			}
			this.parent(a);
			this.visible = this.isEffect = this.isEntity = j;
			this.drawHp = i;
		},
		update: function() {
			var a = "destroy";
			if (this.randomFrame) {
				if (U6Q72.Z72(this.randomIdx, f)) {
					this.randomIdx = Math.floor(U6Q72.c82(this.currentSpriteCount, Math.random()));
					this.setCurrentSpriteFrame(this.randomIdx);
				}
				if (U6Q72.f82(this.lastFrameDelay, f))
					if (++this.lastFrameDelayIndex < this.lastFrameDelay) lastFrameDelayOver = i;
					else {
						lastFrameDelayOver = j;
						this.lastFrameDelay = this.lastFrameDelayIndex = f;
					}
				lastFrameDelayOver && U6Q72.i82(this.resetAnim, a) && this.destroy();
			} else this.parent();
			return j;
		},
		draw: function(a) {
			if (this.randomFrame) {
				var b = this.drawUpFrame(this.currentSpriteFrame[f]);
				a.drawImage(b.image, b.x, b.y, b.w, b.h, b.xpos + this.vp.pos.x, b.ypos + this.vp.pos.y, b.w, b.h);
				return j;
			} else return this.parent(a);
		}
	});
	l(EffectSprite);
})(window);
var W3i81 = {
	'e91': function(a, b) {
		return a * b;
	},
	'I91': function(a, b) {
		return a == b;
	},
	'k91': function(a, b) {
		return a * b;
	},
	'N02': function(a, b) {
		return a * b;
	},
	'v02': function(a, b) {
		return a * b;
	},
	'o81': function(a, b) {
		return a == b;
	},
	'y02': function(a, b) {
		return a - b;
	},
	'E02': function(a, b) {
		return a * b;
	},
	'w91': function(a, b) {
		return a > b;
	},
	'p02': function(a, b) {
		return a * b;
	},
	'l12': function(a, b) {
		return a * b;
	},
	'c12': function(a, b) {
		return a * b;
	},
	'u12': function(a, b) {
		return a * b;
	},
	'z91': function(a, b) {
		return a < b;
	},
	'B02': function(a, b) {
		return a * b;
	},
	'U91': function(a, b) {
		return a * b;
	},
	'W02': function(a, b) {
		return a * b;
	},
	'K02': function(a, b) {
		return a * b;
	},
	'h91': function(a, b) {
		return a * b;
	},
	'M81': function(a, b) {
		return a / b;
	},
	'r12': function(a, b) {
		return a * b;
	},
	'a02': function(a, b) {
		return a / b;
	},
	'Y81': function(a, b) {
		return a < b;
	},
	'P81': function(a, b) {
		return a / b;
	},
	'C91': function(a, b) {
		return a < b;
	},
	'X91': function(a, b) {
		return a < b;
	},
	'x12': function(a, b) {
		return a * b;
	},
	'r81': function(a, b) {
		return a == b;
	},
	'l81': function(a, b) {
		return a >= b;
	},
	'm02': function(a, b) {
		return a * b;
	},
	'J81': function(a, b) {
		return a / b;
	},
	'o12': function(a, b) {
		return a - b;
	},
	'G81': function(a, b) {
		return a / b;
	},
	'S81': function(a, b) {
		return a != b;
	},
	'b91': function(a, b) {
		return a * b;
	},
	'u81': function(a, b) {
		return a < b;
	},
	'R91': function(a, b) {
		return a * b;
	},
	'i12': function(a, b) {
		return a * b;
	},
	'L91': function(a, b) {
		return a < b;
	},
	'f12': function(a, b) {
		return a * b;
	},
	'H02': function(a, b) {
		return a - b;
	},
	'T02': function(a, b) {
		return a - b;
	},
	'x81': function(a, b) {
		return a < b;
	},
	'F91': function(a, b) {
		return a < b;
	},
	'D81': function(a, b) {
		return a * b;
	},
	'O91': function(a, b) {
		return a >= b;
	},
	's02': function(a, b) {
		return a * b;
	},
	'g02': function(a, b) {
		return a - b;
	},
	'd02': function(a, b) {
		return a / b;
	},
	'V81': function(a, b) {
		return a > b;
	},
	'n91': function(a, b) {
		return a < b;
	},
	'Z02': function(a, b) {
		return a * b;
	},
	't91': function(a, b) {
		return a > b;
	},
	'A81': function(a, b) {
		return a * b;
	},
	'Q02': function(a, b) {
		return a - b;
	},
	'j02': function(a, b) {
		return a * b;
	},
	'q91': function(a, b) {
		return a < b;
	}
};
(function(u) {
	var e0 = function(a) {
		u.me.UIEntity = a;
	};
	UIEntity = me.BaseSprite.extend({
		init: function(a) {
			this.parent(a);
			this.enable = true;
			this.middle = a.middle;
			this.pressed = false;
			this.noImage = !a.spriteName ? true : false;
			this.uiW = a.w || 0;
			this.uiH = a.h || 0;
			this.touchDelay = a.delay || 0;
			this.touchDelayIndex = a.delay || 0;
			this.uiImageW = a.uiImageW;
			this.lockIndex = W3i81.l81(a.index, 0) ? true : false;
			this.lockUI = a.lockUI ? true : false;
			this.touchAreaSet = [];
			this.visible = W3i81.o81(a.visible, false) ? false : true;
			this.touchCallback = null;
			this.touchAnyBtn = false;
			this.touchId = null;
			if (W3i81.r81(a.ref, "sys")) {
				this.refWidth = me.sys.game_initial_width;
				this.refHeight = me.sys.game_initial_height;
			} else {
				this.refWidth = me.video.getWidth();
				this.refHeight = me.video.getHeight();
			}
			if (W3i81.u81(this.pos.x, 1) && this.pos.x > -1 && W3i81.x81(this.pos.y, 1) && this.pos.y > -1) {
				this.pos.x = Math.ceil(W3i81.A81(this.refWidth, this.pos.x));
				this.pos.y = Math.ceil(W3i81.D81(this.refHeight, this.pos.y));
			}
			this.noImage || this.setIndex(a.index);
			if (this.middle) {
				var b = this.noImage || this.uiW ? {
					w: this.uiW,
					h: this.uiH
				} : this.currentSpriteFrame[0];
				if (this.pos.x || this.pos.y) {
					this.pos.x = Math.ceil(W3i81.G81((me.video.getWidth() - b.w), 2)) + this.pos.x;
					this.pos.y = Math.ceil(W3i81.J81((me.video.getHeight() - b.h), 2)) + this.pos.y;
				} else {
					this.pos.x = Math.ceil(W3i81.M81((me.video.getWidth() - b.w), 2));
					this.pos.y = Math.ceil(W3i81.P81((me.video.getHeight() - b.h), 2));
				}
			}
			a.touch && !this.noImage && this.setTouchArea([{
				x: 0,
				y: 0,
				w: 0,
				h: 0
			}]);
		},
		setIndex: function(a) {
			if (W3i81.S81(this.currentSpriteCount, 0) && W3i81.V81(a, this.currentSpriteCount - 1)) return true;
			if (!this.noImage) {
				this.currentAnim = "defaultAnim";
				this.setCurrentSpriteFrame(a);
			}
		},
		setTouchArea: function(a) {
			for (var b = 0, d = a.length; W3i81.Y81(b, d); b++) {
				var f = a[b],
					i = this.noImage ? {
						w: this.uiW,
						h: this.uiH,
						xOff: 0,
						yOff: 0
					} : this.currentSpriteFrame[0],
					j = this.pos.x + Math.ceil(W3i81.b91(i.w, f.x)),
					l = this.pos.y + Math.ceil(W3i81.e91(i.h, f.y));
				if (!this.middle) {
					j += i.xOff;
					l += i.yOff;
				}
				this.touchAreaSet.push({
					x: j,
					y: l,
					w: Math.ceil(W3i81.h91(i.w, f.w)) || i.w,
					h: Math.ceil(W3i81.k91(i.h, f.h)) || i.h,
					keys: f.keys,
					noClear: f.noClear,
					id: f.id
				});
			}
		},
		update: function() {
			if (!this.visible) return false;
			if (!this.enable) return false;
			if (!this.touchAnyBtn)
				if (!this.touchDelay || ++this.touchDelayIndex > this.touchDelay)
					for (var a = 0, b = this.touchAreaSet.length; W3i81.n91(a, b); a++) {
						var d = this.touchAreaSet[a],
							f = d.keys,
							i = [];
						i = me.input.getTouchPos();
						for (var j = 0, l = i.length; W3i81.q91(j, l); j++) {
							var s = i[j],
								r = s.x;
							s = s.y;
							if (W3i81.t91(r, d.x) && W3i81.w91(s, d.y) && W3i81.z91(r, d.w + d.x) && W3i81.C91(s, d.h + d.y)) {
								d.noClear || me.input.clearKeyStatus();
								if (f) {
									i = 0;
									for (j = f.length; W3i81.F91(i, j); i++) me.input.addKeyStatus([f[i]]);
								}
								if (d.id) this.touchId = d.id;
								this.touchAnyBtn = true;
								this.touchDelayIndex = 0;
								break;
							}
						}
					}
				if (this.touchAnyBtn) {
					a = 0;
					if (!this.noImage && !this.lockIndex) {
						a = ++this.currentSpriteIndex % this.currentSpriteCount;
						this.setCurrentSpriteFrame(a);
					}
					if (W3i81.I91(a, 0)) {
						if (this.touchCallback) {
							this.lockUI && me.input.clearTouchPos();
							this.touchCallback();
						}
						this.touchAnyBtn = false;
					}
					return "touch";
				}
			return true;
		},
		draw: function(a) {
			if (!this.visible) return false;
			if (!this.noImage)
				for (var b = this.currentSpriteFrame, d = 0, f = b.length; W3i81.L91(d, f); d++) {
					var i = this.drawUpFrame(b[d]),
						j = i.xOff,
						l = i.yOff,
						s = 0,
						r = 0;
					if (this.middle) {
						s = this.pos.x;
						r = this.pos.y;
					} else {
						s = this.pos.x + j;
						r = this.pos.y + l;
					}
					j = i.w;
					if (W3i81.O91(this.uiImageW, 0)) j = this.uiImageW;
					a.drawImage(i.image, i.x, i.y, j, i.h, s, r, W3i81.R91(j, this.scale), W3i81.U91(i.h, this.scale));
				}
			if (me.debug.renderTouchBox) {
				d = 0;
				for (f = this.touchAreaSet.length; W3i81.X91(d, f); d++) {
					b = this.touchAreaSet[d];
					(new Rect(new Vector2d(b.x + this.vp.pos.x, b.y + this.vp.pos.y), b.w, b.h)).draw(a, "red");
				}
			}
		},
		setControlTouch: function(a, b) {
			if (a) {
				var d = this.currentSpriteFrame,
					f = Math.floor(W3i81.a02(d[0].w, 3)),
					i = Math.floor(W3i81.d02(d[0].h, 3)),
					j = this.pos.x + d[0].xOff;
				d = this.pos.y + d[0].yOff;
				this.touchAreaSet.push({
					x: j + f,
					y: W3i81.g02(d, i),
					w: f,
					h: W3i81.j02(i, 2),
					keys: [me.input.KEY.UP],
					noClear: b
				});
				this.touchAreaSet.push({
					x: j + W3i81.m02(f, 2),
					y: d + i,
					w: W3i81.p02(f, 2),
					h: i,
					keys: [me.input.KEY.RIGHT],
					noClear: b
				});
				this.touchAreaSet.push({
					x: j + f,
					y: d + W3i81.s02(i, 2),
					w: f,
					h: W3i81.v02(i, 2),
					keys: [me.input.KEY.DOWN],
					noClear: b
				});
				this.touchAreaSet.push({
					x: W3i81.y02(j, f),
					y: d + i,
					w: W3i81.B02(f, 2),
					h: i,
					keys: [me.input.KEY.LEFT],
					noClear: b
				});
				this.touchAreaSet.push({
					x: j + W3i81.E02(f, 2),
					y: W3i81.H02(d, i),
					w: W3i81.K02(f, 2),
					h: W3i81.N02(i, 2),
					keys: [me.input.KEY.UP, me.input.KEY.RIGHT],
					noClear: b
				});
				this.touchAreaSet.push({
					x: W3i81.Q02(j, f),
					y: W3i81.T02(d, i),
					w: W3i81.W02(f, 2),
					h: W3i81.Z02(i, 2),
					keys: [me.input.KEY.UP, me.input.KEY.LEFT],
					noClear: b
				});
				this.touchAreaSet.push({
					x: j + W3i81.c12(f, 2),
					y: d + W3i81.f12(i, 2),
					w: W3i81.i12(f, 2),
					h: W3i81.l12(i, 2),
					keys: [me.input.KEY.DOWN, me.input.KEY.RIGHT],
					noClear: b
				});
				this.touchAreaSet.push({
					x: W3i81.o12(j, f),
					y: d + W3i81.r12(i, 2),
					w: W3i81.u12(f, 2),
					h: W3i81.x12(i, 2),
					keys: [me.input.KEY.DOWN, me.input.KEY.LEFT],
					noClear: b
				});
			}
		}
	});
	e0(UIEntity);
})(window);
(function(l) {
	var u0 = function(a) {
		l.me.entityPool = a;
	};
	entityPool = function() {
		var i = {},
			j = {};
		i.init = function() {};
		i.add = function(a, b) {
			j[a] = b;
		};
		i.newIstanceOf = function(a) {
			var b = "': Class not found!",
				d = "cannot instance entity of type '";
			if (!j[a.name]) throw d + a.name + b;
			var f = new j[a.name](a);
			if (a.wave) f.wave = a.wave;
			return f;
		};
		return i;
	}();
	u0(entityPool);
})(window);
var Q6O00 = {
	'f20': function(a, b) {
		return a * b;
	},
	'K10': function(a, b) {
		return a - b;
	},
	'E10': function(a, b) {
		return a * b;
	},
	'y10': function(a, b) {
		return a * b;
	},
	'd10': function(a, b) {
		return a * b;
	},
	'a10': function(a, b) {
		return a - b;
	},
	'g10': function(a, b) {
		return a * b;
	},
	'W10': function(a, b) {
		return a * b;
	},
	'U00': function(a, b) {
		return a / b;
	},
	's10': function(a, b) {
		return a - b;
	},
	'i20': function(a, b) {
		return a - b;
	},
	'B10': function(a, b) {
		return a - b;
	},
	'm10': function(a, b) {
		return a * b;
	},
	'T10': function(a, b) {
		return a * b;
	},
	'v10': function(a, b) {
		return a * b;
	},
	'l20': function(a, b) {
		return a * b;
	},
	'Z10': function(a, b) {
		return a * b;
	},
	'r20': function(a, b) {
		return a * b;
	},
	'o20': function(a, b) {
		return a * b;
	},
	'H10': function(a, b) {
		return a * b;
	},
	'p10': function(a, b) {
		return a * b;
	},
	'N10': function(a, b) {
		return a - b;
	},
	'c20': function(a, b) {
		return a * b;
	},
	'Q10': function(a, b) {
		return a * b;
	},
	'X00': function(a, b) {
		return a / b;
	},
	'j10': function(a, b) {
		return a * b;
	},
	'R00': function(a, b) {
		return a < b;
	}
};
(function(i) {
	var j = function(a) {
		i.me.UIEntity = a;
	};
	Text = me.UIEntity.extend({
		init: function(a) {
			this.text = a.text;
			this.textFont = new me.Font("arial", 25, "#a3692d");
			a.bold && this.textFont.bold();
			this.isBold = a.bold;
			this.parent(a);
		},
		setFont: function(a, b, d, f) {
			this.textFont.set(a, b, d, f);
			this.isBold && this.textFont.bold();
		},
		bold: function() {
			this.textFont.bold();
			this.isBold = true;
		},
		draw: function(a) {
			if (this.visible) {
				this.textFont.draw(a, this.text, this.pos.x, this.pos.y);
				if (me.debug.renderTouchBox)
					for (var b = 0, d = this.touchAreaSet.length; Q6O00.R00(b, d); b++) {
						var f = this.touchAreaSet[b];
						(new Rect(new Vector2d(f.x + this.vp.pos.x, f.y + this.vp.pos.y), f.w, f.h)).draw(a, "red");
					}
			}
		},
		setControlTouch: function(a) {
			if (a) {
				var b = this.currentSpriteFrame;
				a = Math.floor(Q6O00.U00(b[0].w, 3));
				var d = Math.floor(Q6O00.X00(b[0].h, 3)),
					f = this.pos.x + b[0].xOff;
				b = this.pos.y + b[0].yOff;
				this.touchAreaSet.push({
					x: f + a,
					y: Q6O00.a10(b, d),
					w: a,
					h: Q6O00.d10(d, 2),
					keys: [me.input.KEY.UP],
					noClear: false
				});
				this.touchAreaSet.push({
					x: f + Q6O00.g10(a, 2),
					y: b + d,
					w: Q6O00.j10(a, 2),
					h: d,
					keys: [me.input.KEY.RIGHT],
					noClear: false
				});
				this.touchAreaSet.push({
					x: f + a,
					y: b + Q6O00.m10(d, 2),
					w: a,
					h: Q6O00.p10(d, 2),
					keys: [me.input.KEY.DOWN],
					noClear: false
				});
				this.touchAreaSet.push({
					x: Q6O00.s10(f, a),
					y: b + d,
					w: Q6O00.v10(a, 2),
					h: d,
					keys: [me.input.KEY.LEFT],
					noClear: false
				});
				this.touchAreaSet.push({
					x: f + Q6O00.y10(a, 2),
					y: Q6O00.B10(b, d),
					w: Q6O00.E10(a, 2),
					h: Q6O00.H10(d, 2),
					keys: [me.input.KEY.UP, me.input.KEY.RIGHT],
					noClear: false
				});
				this.touchAreaSet.push({
					x: Q6O00.K10(f, a),
					y: Q6O00.N10(b, d),
					w: Q6O00.Q10(a, 2),
					h: Q6O00.T10(d, 2),
					keys: [me.input.KEY.UP, me.input.KEY.LEFT],
					noClear: false
				});
				this.touchAreaSet.push({
					x: f + Q6O00.W10(a, 2),
					y: b + Q6O00.Z10(d, 2),
					w: Q6O00.c20(a, 2),
					h: Q6O00.f20(d, 2),
					keys: [me.input.KEY.DOWN, me.input.KEY.RIGHT],
					noClear: false
				});
				this.touchAreaSet.push({
					x: Q6O00.i20(f, a),
					y: b + Q6O00.l20(d, 2),
					w: Q6O00.o20(a, 2),
					h: Q6O00.r20(d, 2),
					keys: [me.input.KEY.DOWN, me.input.KEY.LEFT],
					noClear: false
				});
			}
		}
	});
	j(UIEntity);
})(window);
var C0k5 = {
	'U5': function(a, b) {
		return a == b;
	},
	'I5': function(a, b) {
		return a > b;
	},
	'h6': function(a, b, d) {
		return a - b - d;
	},
	'o6': function(a, b) {
		return a > b;
	},
	'C5': function(a, b) {
		return a < b;
	},
	'L5': function(a, b) {
		return a < b;
	},
	'D6': function(a, b) {
		return a * b;
	},
	'u6': function(a, b) {
		return a * b;
	},
	'a6': function(a, b) {
		return a < b;
	},
	'd6': function(a, b, d) {
		return a - b - d;
	},
	'r6': function(a, b) {
		return a - b;
	},
	'A6': function(a, b) {
		return a < b;
	},
	'f33': 0,
	'O5': function(a, b) {
		return a < b;
	},
	'X5': function(a, b) {
		return a < b;
	},
	'z5': function(a, b) {
		return a < b;
	},
	'x6': function(a, b) {
		return a * b;
	},
	'l6': function(a, b) {
		return a < b;
	},
	'R5': function(a, b) {
		return a < b;
	},
	'G6': function(a, b) {
		return a * b;
	},
	'w5': function(a, b) {
		return a < b;
	},
	'F5': function(a, b) {
		return a > b;
	}
};
var chooseLevel = me.UIEntity.extend({
	init: function(b) {
		var d = function(a) {
			b = a;
		};
		this.parent(b);
		this.limit = b.limit;
		this.touchId = b.id;
		this.vpX = b.vpX;
		this.vpY = b.vpY;
		d(C0k5.f33);
		for (var f = this.touchAreaSet.length; C0k5.w5(b, f); b++) {
			var i = this.touchAreaSet[b];
			i.x -= this.vpX;
			i.y -= this.vpY;
		}
	},
	update: function() {
		var b = (12.25E2 >= (0x1F5, 4.) ? (14.790E2, true) : (92., 98) >= 37.1E1 ? 64 : (9, 8) > 0x1C8 ? (11.22E2, 0x7B) : (88., 0x3D)),
			d = ((89, 144) > 106.80E1 ? 'J' : (0x11A, 0x8D) >= 26 ? (95, false) : (0xBE, 19.));
		if (!this.visible) return d;
		if (!this.enable) return d;
		if (!this.touchAnyBtn)
			for (var f = C0k5.f33, i = this.touchAreaSet.length; C0k5.z5(f, i); f++) {
				var j = this.touchAreaSet[f],
					l = j.keys,
					s = [];
				s = me.input.getTouchPos();
				for (var r = C0k5.f33, u = s.length; C0k5.C5(r, u); r++) {
					var e0 = function(a) {
						d0 = a.y;
					};
					var d0 = s[r],
						b0 = d0.x;
					e0(d0);
					if (C0k5.F5(b0, j.x - this.vp.pos.x) && C0k5.I5(d0, j.y - this.vp.pos.y) && C0k5.L5(b0, j.w * this.scale + j.x - this.vp.pos.x) && C0k5.O5(d0, j.h * this.scale + j.y - this.vp.pos.y)) {
						j.noClear || me.input.clearKeyStatus();
						if (l) {
							var f0 = function(a) {
								s = a;
							};
							f0(C0k5.f33);
							for (r = l.length; C0k5.R5(s, r); s++) me.input.addKeyStatus([l[s]]);
						}
						if (j.id) this.touchId = j.id;
						this.touchAnyBtn = b;
						break;
					}
				}
			}
		if (this.touchAnyBtn) {
			var l0 = function(a) {
				f = a;
			};
			l0(C0k5.f33);
			if (!this.noImage) {
				f = ++this.currentSpriteIndex % this.currentSpriteCount;
				this.setCurrentSpriteFrame(f);
			}
			if (C0k5.U5(f, C0k5.f33)) {
				this.touchCallback && this.touchCallback();
				this.touchAnyBtn = d;
			}
		}
		return b;
	},
	draw: function(b) {
		var d = ((1.429E3, 1.413E3) > 0x1E2 ? (0x174, 5) : 6.84E2 < (70, 23.3E1) ? "G" : (9.83E2, 1.089E3));
		if (this.visible) {
			if (!this.noImage)
				for (var f = this.currentSpriteFrame, i = C0k5.f33, j = f.length; C0k5.X5(i, j); i++) {
					var l = function() {
						u = C0k5.a6(u, C0k5.f33) ? C0k5.f33 : u;
					};
					var s = f[i],
						r = s.xOff,
						u = s.yOff,
						e0 = C0k5.f33,
						d0 = C0k5.f33;
					if (this.middle) {
						e0 = this.pos.x;
						d0 = this.pos.y;
					} else {
						e0 = this.pos.x + r;
						d0 = this.pos.y + u;
					}
					r = C0k5.d6(e0, this.vp.pos.x, this.vpX);
					d0 = C0k5.h6(d0, this.vp.pos.y, this.vpY);
					if (C0k5.l6(r, this.limit.x + d)) return;
					u = C0k5.o6(r, this.limit.w - s.w) ? C0k5.r6(this.limit.w, r) : s.w;
					l();
					b.drawImage(s.image, s.x, s.y, u, s.h, r, d0, C0k5.u6(u, this.scale), C0k5.x6(s.h, this.scale));
				}
			if (me.debug.renderTouchBox) {
				var b0 = function(a) {
					i = a;
				};
				b0(C0k5.f33);
				for (j = this.touchAreaSet.length; C0k5.A6(i, j); i++) {
					f = this.touchAreaSet[i];
					(new Rect(new Vector2d(f.x, f.y), C0k5.D6(f.w, this.scale), C0k5.G6(f.h, this.scale))).draw(b, "red");
				}
			}
		}
	}
});
var C0d7 = {
	'K7': function(a, b) {
		return a * b;
	},
	'y7': function(a, b) {
		return a < b;
	},
	'Q7': function(a, b) {
		return a === b;
	},
	'm7': function(a, b) {
		return a * b;
	},
	'v7': function(a, b) {
		return a > b;
	},
	'j7': function(a, b) {
		return a * b;
	},
	'N7': function(a, b) {
		return a > b;
	},
	'g7': function(a, b) {
		return a < b;
	},
	'H7': function(a, b) {
		return a * b;
	},
	'p7': function(a, b) {
		return a * b;
	},
	's7': function(a, b) {
		return a * b;
	},
	'E7': function(a, b) {
		return a * b;
	},
	'B7': function(a, b) {
		return a * b;
	}
};
(function(i0) {
	var l1 = function(a) {
		i0.me.input = a;
	};
	input = function() {
		function j() {
			f0 = false;
			l0 = [];
			w0 = [];
		}

		function l(a) {
			var b = o0[a.keyCode || a.which];
			if (b) {
				if (!n0[b]) {
					w0[b] = true;
					n0[b] = k0[b];
				}
				s(a);
				return false;
			}
			return true;
		}

		function s(a) {
			a.stopPropagation();
			// a.preventDefault && a.preventDefault();
			a.returnValue = false;
		}

		function r() {}

		function u(a) {
			if (A0) {
				// a.preventDefault();
				var b = me.video.getScreenCanvas().offsetLeft,
					d = me.video.getScreenCanvas().offsetTop,
					f = null;
				if (f0)
					if (a.changedTouches) {
						f = a.changedTouches;
						a = 0;
						for (var i = f.length; C0d7.y7(a, i); a++) f[a] && l0.push({
							x: Math.floor(C0d7.B7(me.sys.bufferCanvasScale, (f[a].clientX - b))),
							y: Math.floor(C0d7.E7(me.sys.bufferCanvasScale, (f[a].clientY - d)))
						});
					} else {
						f = a;
						l0.push({
							x: Math.floor(C0d7.H7(me.sys.bufferCanvasScale, (f.clientX - b))),
							y: Math.floor(C0d7.K7(me.sys.bufferCanvasScale, (f.clientY - d)))
						});
					}
				C0d7.N7(l0.length, 6) && l0.shift();
			}
		}

		function e0(a) {
			var b = o0[a.keyCode || a.which];
			if (b) {
				w0[b] = false;
				n0[b] = false;
				s(a);
				return false;
			}
			return true;
		}

		function d0(a) {
			if (A0) {
				f0 = true;
				// a.preventDefault();
				var b = me.video.getScreenCanvas().offsetLeft,
					d = me.video.getScreenCanvas().offsetTop,
					f = null;
				if (a.targetTouches) {
					f = a.targetTouches;
					a = 0;
					for (var i = f.length; C0d7.g7(a, i); a++) f[a] && l0.push({
						x: Math.floor(C0d7.j7(me.sys.bufferCanvasScale, (f[a].clientX - b))),
						y: Math.floor(C0d7.m7(me.sys.bufferCanvasScale, (f[a].clientY - d)))
					});
				} else {
					f = a;
					l0.push({
						x: Math.floor(C0d7.p7(me.sys.bufferCanvasScale, (f.clientX - b))),
						y: Math.floor(C0d7.s7(me.sys.bufferCanvasScale, (f.clientY - d)))
					});
				}
				C0d7.v7(l0.length, 6) && l0.shift();
			}
		}
		var b0 = {},
			f0 = false,
			l0 = [],
			o0 = [],
			w0 = [],
			k0 = [],
			n0 = [],
			H0 = false,
			A0 = true;
		b0.KEY = {
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40,
			ENTER: 13,
			SHIFT: 16,
			CTRL: 17,
			ALT: 18,
			PAUSE: 19,
			ESC: 27,
			SPACE: 32,
			"0": 48,
			"1": 49,
			"2": 50,
			"3": 51,
			"4": 52,
			"5": 53,
			"6": 54,
			"7": 55,
			"8": 56,
			"9": 57,
			A: 65,
			B: 66,
			C: 67,
			D: 68,
			E: 69,
			F: 70,
			G: 71,
			H: 72,
			I: 73,
			J: 74,
			K: 75,
			L: 76,
			M: 77,
			N: 78,
			O: 79,
			P: 80,
			Q: 81,
			R: 82,
			S: 83,
			T: 84,
			U: 85,
			V: 86,
			W: 87,
			X: 88,
			Y: 89,
			Z: 90
		};
		b0.getTouchStart = function() {
			return f0;
		};
		b0.getTouchPos = function() {
			return l0;
		};
		b0.clearTouchPos = function() {
			A0 = false;
			l0 = [];
			setTimeout(function() {
				A0 = true;
			}, 100);
		};
		b0.isKeyPressed = function(a) {
			if (w0[a]) {
				if (k0[a]) {
					n0[a] = true;
					w0[a] = false;
				}
				return true;
			}
			return false;
		};
		b0.keyStatus = function(a) {
			return C0d7.Q7(n0[a], true) ? true : w0[a];
		};
		b0.clearKeyStatus = function() {
			w0 = [];
		};
		b0.addKeyStatus = function(a) {
			w0[a] = true;
		};
		b0.bindKey = function(a, b, d) {
			if (!H0) {
				if (!H0) {
					i0.addEventListener("keydown", l, false);
					i0.addEventListener("keyup", e0, false);
				}
				H0 = true;
			}
			o0[a] = b;
			k0[b] = d ? d : false;
			n0[b] = false;
		};
		b0.unbindKey = function(a) {
			w0[o0[a]] = false;
			k0[o0[a]] = false;
			o0[a] = null;
		};
		b0.enableMouseEvent = function(a) {
			if (a) {
				me.video.getScreenCanvas().addEventListener("mousedown", d0, false);
				me.video.getScreenCanvas().addEventListener("mousemove", u, false);
				me.video.getScreenCanvas().addEventListener("mouseup", j, false);
			} else {
				me.video.getScreenCanvas().removeEventListener("mousedown", d0, false);
				me.video.getScreenCanvas().removeEventListener("mousemove", u, false);
				me.video.getScreenCanvas().removeEventListener("mouseup", j, false);
			}
		};
		b0.enableGyroscopicEvent = function(a, b) {
			if (i0.sys.gyro) {
				i0.ondevicemotion = a ? r : null;
				gyroEventCB = a ? b : null;
			}
		};
		b0.enableTouchEvent = function(a) {
			if (a) {
				me.video.getScreenCanvas().addEventListener("touchstart", d0, false);
				me.video.getScreenCanvas().addEventListener("touchmove", d0, false);
				me.video.getScreenCanvas().addEventListener("touchend", j, false);
			} else {
				me.video.getScreenCanvas().removeEventListener("touchstart", d0, false);
				me.video.getScreenCanvas().removeEventListener("touchmove", d0, false);
				me.video.getScreenCanvas().removeEventListener("touchend", j, false);
			}
		};
		return b0;
	}();
	l1(input);
})(window);
var m0u20 = {
	'A20': function(a, b) {
		return a == b;
	},
	'G20': function(a, b) {
		return a < b;
	},
	'P20': function(a, b) {
		return a < b;
	},
	'D20': function(a, b) {
		return a < b;
	},
	'S20': function(a, b) {
		return a != b;
	},
	'M20': function(a, b) {
		return a != b;
	},
	'J20': function(a, b) {
		return a == b;
	},
	'x20': function(a, b) {
		return a < b;
	}
};
(function(l0) {
	var o0 = function(a) {
		l0.me.control = a;
	};
	control = function() {
		var r = ((0x167, 7.51E2) <= 7.32E2 ? 65 : (0x105, 59.) <= (0x177, 0x19C) ? (113, 0) : 4.560E2 < (71, 0xD1) ? "F" : (62., 0x239)),
			u = {},
			e0 = [],
			d0 = [],
			b0 = r,
			f0 = [];
		u.add = function(a) {
			d0.push(a);
			b0++;
			for (var b = 0, d = e0.length; m0u20.x20(b, d); b++)
				if (m0u20.A20(e0[b], a.controlKey)) return;
			e0.push(a.controlKey);
			a.delay ? f0.push({
				idx: a.delay,
				delay: a.delay
			}) : f0.push(null);
		};
		u.update = function() {
			for (var a = 0, b = e0.length; m0u20.D20(a, b); a++)
				if (me.input.isKeyPressed(e0[a]))
					if (!f0[a] || ++f0[a].idx >= f0[a].delay) {
						if (f0[a]) f0[a].idx = 0;
						for (var d = 0; m0u20.G20(d, b0); d++) {
							var f = d0[d];
							if (m0u20.J20(f.controlKey, e0[a])) {
								var i = me.game.getEntityByName(f.objectName),
									j = i.length;
								if (m0u20.M20(j, 0))
									for (var l = 0; m0u20.P20(l, j); l++) {
										var s = i[l];
										if (!s.currentAnimLock) {
											f.currentSprite && m0u20.S20(s.currentSprite, f.currentSprite) && s.setCurrentSprite(f.currentSprite);
											s.playover = f.playover;
											s.currentAnimLock = f.lock;
											s.setCurrentAnimation(f.animName, f.resetAnim, f.index);
										}
									}
							}
						}
					}
		};
		return u;
	}();
	o0(control);
})(window);
var d5u17 = window;
var w0R11 = {
	'c21': function(a, b) {
		return a * b;
	},
	'Z11': function(a, b) {
		return a / b;
	},
	'W11': function(a, b) {
		return a / b;
	},
	'I06': 0,
	'T11': function(a, b) {
		return a >= b;
	},
	'M06': true
};
var LoadingScreenObject = me.ScreenObject.extend({
	init: function() {
		this.parent(w0R11.M06);
		this.loadPercent = this.loadIndex = w0R11.I06;
	},
	draw: function(b) {
		var d = (14.70E1 <= (4.88E2, 0x24E) ? (1.033E3, 250) : (81., 45.7E1)),
			f = ((5.7E1, 62) > (0xE6, 51) ? (0x21, 2) : (39, 9.28E2) < (4.66E2, 144.) ? (0x3F, 'en') : (14.48E2, 0x40) >= (40, 21.0E1) ? (65.3E1, 'en') : (0x1F5, 123.)),
			i = ((0xDB, 0x201) >= (0x1EE, 106) ? (37., 600) : (78.2E1, 0x23C)),
			j = function() {
				var a = "ui/loading.png";
				l.src = imgPath + a;
			};
		this.loadIndex++;
		w0R11.T11(this.loadIndex, i) && d5u17['location']['reload'](w0R11.M06);
		var l = new Image;
		j();
		var s = Math.ceil(w0R11.W11((me.video.getWidth() - l.width), f)),
			r = Math.ceil(w0R11.Z11((me.video.getHeight() - l.height), f));
		b.drawImage(l, 0, 0, l.width, 83, s, r, l.width, 83);
		var u = Math.floor(w0R11.c21(this.loadPercent, d));
		b.drawImage(l, 0, 83, u, 14, s, r + 47, u, 14);
		this.loadPercent = me.loader.getLoadPercent();
		this.parent(w0R11.M06);
	}
});
var WelcomeScreenObject = me.ScreenObject.extend({
	init: function() {
		var a = "welcome",
			b = "welcome_help_btn",
			d = ((31, 101) < 5.76E2 ? (45.90E1, 0.3) : (112.2E1, 0x170) > (29, 4.01E2) ? 7. : (106, 5.95E2) < (71.3E1, 3.46E2) ? 2.40E1 : (0x128, 56.)),
			f = (116. < (96., 145) ? (0x1C1, 20) : (43., 0x1C6)),
			i = "sys",
			j = "welcome_start_btn",
			l = ((33.4E1, 0x84) > 0x78 ? (37, 0.4) : (51., 28.0E1) < 98 ? 8.11E2 : (10.47E2, 19.6E1)),
			s = ((0x43, 33.) >= (0x122, 38.) ? 1.074E3 : (6.63E2, 0x15B) > 0x13B ? (140, 0) : 2.36E2 >= (0xA, 0x140) ? "U" : (13.20E1, 4.91E2)),
			r = (0x8F > (0xE8, 1.1500E3) ? (5.3E2, 176) : (0xDA, 0x9A) < 0xA6 ? (106, false) : (40.1E1, 0x1D8)),
			u = "help",
			e0 = "ui",
			d0 = "#999999",
			b0 = ((0x1EF, 4.99E2) >= 24.1E1 ? (0x22B, 24) : (0x8A, 10.27E2) <= (0xE4, 85) ? 194 : 67.5E1 < (1.491E3, 0x155) ? (116., 'V') : (0x1BB, 20.8E1)),
			f0 = "arial",
			l0 = "v1.3",
			o0 = ((0x148, 136) > (60.40E1, 23.) ? (23., 0.29) : (5, 1.8E2)),
			w0 = ((3.070E2, 0x87) > (1.101E3, 86.) ? (0x24F, 0.2) : (8E0, 0xA6)),
			k0 = ((29.40E1, 0x1C1) <= 37 ? 1.79E2 : 0x1D < (1.164E3, 0x144) ? (81, true) : (9.09E2, 1.298E3) <= 60 ? (30, 4.49E2) : (0xD8, 104));
		this.parent(k0);
		var n0 = this;
		this.vUI = new Text({
			middle: k0,
			x: w0,
			y: o0,
			text: l0,
			bold: k0
		});
		this.vUI.setFont(f0, b0, d0);
		this.addUI(this.vUI);
		this.helpInfoUI = new UIEntity({
			spriteName: e0,
			middle: k0,
			name: u,
			visible: r,
			touch: k0
		});
		this.helpInfoUI.touchCallback = function() {
			this.visible = r;
			n0.startUI.enable = k0;
			n0.helpUI.enable = k0;
		};
		this.addUI(this.helpInfoUI);
		this.startUI = new UIEntity({
			spriteName: e0,
			middle: k0,
			x: s,
			y: l,
			name: j,
			touch: k0,
			ref: i,
			delay: f,
			lockUI: k0
		});
		this.startUI.touchCallback = function() {
			me.state.change(me.state.MENU);
		};
		this.addUI(this.startUI);
		this.helpUI = new UIEntity({
			spriteName: e0,
			middle: k0,
			x: d,
			y: l,
			name: b,
			touch: k0,
			ref: i,
			delay: f,
			lockUI: k0
		});
		this.helpUI.touchCallback = function() {
			n0.helpInfoUI.visible = k0;
			n0.startUI.enable = r;
			n0.helpUI.enable = r;
		};
		this.addUI(this.helpUI);
		this.backGroundUI = new UIEntity({
			spriteName: e0,
			middle: k0,
			name: a
		});
		this.addUI(this.backGroundUI);
	},
	onResetEvent: function() {}
});
var C7C8 = {
	'x9': function(a, b) {
		return a > b;
	},
	'u9': function(a, b) {
		return a * b;
	},
	'b00': function(a, b) {
		return a < b;
	},
	'l9': function(a, b) {
		return a / b;
	},
	'B04': false,
	'r9': function(a, b) {
		return a >= b;
	},
	'M04': 25,
	'M9': function(a, b) {
		return a - b;
	},
	'S9': function(a, b) {
		return a < b;
	},
	'k00': function(a, b) {
		return a > b;
	},
	'A9': function(a, b) {
		return a - b;
	},
	'V04': 1,
	'N8': function(a, b) {
		return a >= b;
	},
	'K8': function(a, b) {
		return a / b;
	},
	'K14': true,
	'f9': function(a, b) {
		return a > b;
	},
	'J9': function(a, b) {
		return a - b;
	},
	'W8': function(a, b) {
		return a / b;
	},
	'Y9': function(a, b) {
		return a > b;
	},
	'Z8': function(a, b) {
		return a <= b;
	},
	'H8': function(a, b) {
		return a < b;
	},
	'o9': function(a, b) {
		return a < b;
	},
	'Q8': function(a, b) {
		return a / b;
	},
	'a14': 5,
	'X04': 0,
	'T8': function(a, b) {
		return a >= b;
	},
	'G9': function(a, b) {
		return a != b;
	},
	'D9': function(a, b) {
		return a != b;
	},
	'h00': function(a, b) {
		return a > b;
	},
	'V9': function(a, b) {
		return a > b;
	},
	'T04': 3,
	'e00': function(a, b) {
		return a < b;
	},
	'c9': function(a, b) {
		return a <= b;
	},
	'P9': function(a, b) {
		return a < b;
	},
	'g24': "passLevelUI_",
	'i9': function(a, b) {
		return a <= b;
	}
};
var MapScreenObject = me.ScreenObject.extend({
	init: function() {
		var b = ((0x91, 0x1C6) >= (2.85E2, 0x107) ? (1.082E3, 208) : 2.04E2 >= (0x132, 0x1EF) ? (1.58E2, 'd') : (53.5E1, 0x1E8)),
			d = (1.223E3 >= (0x249, 0x76) ? (0xA9, 1195) : (8.05E2, 0x171)),
			f = ((52., 37) >= 90 ? 0x154 : (3.38E2, 144) <= (0x129, 64.2E1) ? (0x1B4, 93) : (72., 0x1D6)),
			i = ((1.35E2, 0x83) > 110. ? (11.41E2, 1384) : (0x206, 11.89E2)),
			j = ((30., 7.32E2) < 0xE3 ? (0x9E, 11.55E2) : (0x1F8, 0x1D8) > 0x31 ? (40, 133) : (4.87E2, 0x223) <= (58, 0x17B) ? (0x225, 1.4060E3) : (126, 7.)),
			l = ((1., 0x164) >= 6.18E2 ? (0x158, 831) : (4.2E1, 122.) < (5., 73) ? (3.83E2, "u") : 3.5E1 <= (44., 2.41E2) ? (0xBB, 990) : (14.91E2, 0xC)),
			s = ((0xD5, 15) < 0x11F ? (16, 15) : (0xB5, 90) <= (0x206, 22) ? (0x24A, 'S') : (1.0E2, 0xD4)),
			r = (143. > (8.26E2, 88.80E1) ? (58, 'px') : (75.8E1, 2.280E2) < (0x7E, 2.85E2) ? (4.05E2, 192) : (0xE2, 0x5B)),
			u = ((140, 70.8E1) > 0x1 ? (0x250, 945) : 30.6E1 > (10.99E2, 8.49E2) ? "id" : (3.33E2, 0x15D)),
			e0 = (8.48E2 > (0xB4, 76.) ? (7.7E1, 10) : (46.80E1, 0x171)),
			d0 = "passLevel",
			b0 = (1.1260E3 > (1.1460E3, 136) ? (0xE6, 180) : (0x1FC, 2.)),
			f0 = 510,
			l0 = "msgBox",
			o0 = "#a3692d",
			w0 = 40,
			k0 = "arial",
			n0 = "sys",
			H0 = ((0x29, 0x36) <= (89.30E1, 90.0E1) ? (10.8E2, " ") : 4.94E2 > (0x2A, 61.6E1) ? "t" : 97.80E1 < (0x207, 8.0E1) ? (9, 840) : (0x155, 0x240)),
			A0 = 'stage',
			i0 = "levelMsg",
			l1 = 0.08,
			o1 = "returnBtn",
			M0 = "enterBtn",
			g1 = (110 >= (106., 10.83E2) ? (7.5E2, 0x52) : (106., 1.42E2) < (71., 0x50) ? (95, 0xB) : (22.1E1, 53.40E1) > (71, 5.0E1) ? (2.030E2, 0.1) : (127, 8.790E2)),
			X0 = "btnExit",
			B1 = 20,
			M1 = "shopBtn",
			J1 = 0.4,
			p1 = ((0x213, 31.) < (94., 0x1CC) ? (0x119, 0.2) : (40., 12.48E2)),
			D1 = "loading2",
			m2 = "loading1",
			L1 = 0.004,
			F1 = "ui",
			S1 = 2;
		this.parent(C7C8.K14);
		var I1 = this,
			e2 = C7C8.V04;
		this.vp = me.game.viewport;
		var n2 = me.storage.getMapCoord();
		this.mapX = n2.mapX;
		this.mapY = n2.mapY;
		this.vpX = n2.vpX;
		this.vpY = n2.vpY;
		this.lastPosY = this.lastPosX = C7C8.X04;
		this.frameW = me.video.getWidth();
		this.frameH = me.video.getHeight();
		this.passLevelOff = C7C8.H8(me.video.getWidth(), this.frameW) ? C7C8.K8((this.frameW - me.video.getWidth()), S1) : C7C8.X04;
		this.posX = C7C8.N8(me.video.getWidth(), this.frameW) ? C7C8.Q8((me.video.getWidth() - this.frameW), S1) : C7C8.X04;
		this.posY = C7C8.T8(me.video.getHeight(), this.frameH) ? C7C8.W8((me.video.getHeight() - this.frameH), S1) : C7C8.X04;
		this.loading1 = new UIEntity({
			spriteName: F1,
			middle: C7C8.K14,
			x: L1,
			y: C7C8.X04,
			uiImageW: C7C8.X04,
			name: m2,
			visible: C7C8.B04
		});
		this.addUI(this.loading1);
		this.loading2 = new UIEntity({
			spriteName: F1,
			middle: C7C8.K14,
			name: D1,
			visible: C7C8.B04
		});
		this.addUI(this.loading2);
		this.shopBtnUI = new UIEntity({
			spriteName: F1,
			middle: C7C8.K14,
			x: p1,
			y: J1,
			name: M1,
			touch: C7C8.K14,
			delay: B1,
			lockUI: C7C8.K14
		});
		this.shopBtnUI.touchCallback = function() {
			me.state.change(me.state.SHOP);
		};
		this.addUI(this.shopBtnUI);
		this.btnExitUI = new UIEntity({
			spriteName: F1,
			middle: C7C8.K14,
			x: -p1,
			y: J1,
			name: X0,
			touch: C7C8.K14,
			delay: B1,
			lockUI: C7C8.K14
		});
		this.btnExitUI.touchCallback = function() {
			me.state.change(me.state.WELCOME);
		};
		this.addUI(this.btnExitUI);
		this.yesUI = new UIEntity({
			spriteName: F1,
			middle: C7C8.K14,
			x: -g1,
			y: p1,
			name: M0,
			visible: C7C8.B04,
			touch: C7C8.K14
		});
		this.yesUI.touchCallback = function() {
			I1.loading1.visible = C7C8.K14;
			I1.loading2.visible = C7C8.K14;
			I1.loadPercent = C7C8.X04;
			this.enable = C7C8.B04;
			I1.noUI = C7C8.B04;
			I1.loadRes(e2);
		};
		this.yesUI.enable = C7C8.B04;
		this.addUI(this.yesUI);
		this.noUI = new UIEntity({
			spriteName: F1,
			middle: C7C8.K14,
			x: g1,
			y: p1,
			name: o1,
			visible: C7C8.B04,
			touch: C7C8.K14
		});
		this.noUI.touchCallback = function() {
			I1.noUI.enable = C7C8.B04;
			I1.yesUI.enable = C7C8.B04;
			I1.levelBoxUI.visible = C7C8.B04;
			I1.noUI.visible = C7C8.B04;
			I1.yesUI.visible = C7C8.B04;
			I1.levelMsgUI.visible = C7C8.B04;
			for (var a = C7C8.V04; C7C8.Z8(a, C7C8.M04); a++) I1[C7C8.g24 + a].enable = C7C8.K14;
			I1.btnExitUI.enable = C7C8.K14;
			I1.shopBtnUI.enable = C7C8.K14;
		};
		this.noUI.enable = C7C8.B04;
		this.addUI(this.noUI);
		this.levelMsgUI = new Text({
			middle: C7C8.K14,
			x: -l1,
			y: C7C8.X04,
			name: i0,
			visible: C7C8.B04,
			text: textdata[SG.lang][A0] + H0 + e2,
			bold: C7C8.K14,
			ref: n0,
			visible: C7C8.B04
		});
		this.levelMsgUI.setFont(k0, w0, o0);
		this.addUI(this.levelMsgUI);
		this.levelBoxUI = new UIEntity({
			spriteName: F1,
			middle: C7C8.K14,
			name: l0,
			visible: C7C8.B04
		});
		this.addUI(this.levelBoxUI);
		this.passLevelUI_1 = new chooseLevel({
			id: 1,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 165,
			y: 156,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_2 = new chooseLevel({
			id: 2,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 280,
			y: 141,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_3 = new chooseLevel({
			id: 3,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 352,
			y: 149,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_4 = new chooseLevel({
			id: 4,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 440,
			y: 167,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_5 = new chooseLevel({
			id: C7C8.a14,
			spriteName: F1,
			x: this.posX + f0,
			y: b0,
			name: d0,
			visible: C7C8.K14,
			touch: C7C8.K14,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_6 = new chooseLevel({
			id: 6,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 682,
			y: 252,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_7 = new chooseLevel({
			id: 7,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 773,
			y: 288,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_8 = new chooseLevel({
			id: 8,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 910,
			y: 323,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_9 = new chooseLevel({
			id: 9,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 992,
			y: 295,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_10 = new chooseLevel({
			id: e0,
			spriteName: F1,
			x: this.posX + u,
			y: r,
			name: d0,
			visible: C7C8.K14,
			touch: C7C8.K14,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_11 = new chooseLevel({
			id: 11,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 840,
			y: 73,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_12 = new chooseLevel({
			id: 12,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 737,
			y: -28,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_13 = new chooseLevel({
			id: 13,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 814,
			y: -90,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_14 = new chooseLevel({
			id: 14,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 918,
			y: -122,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_15 = new chooseLevel({
			id: s,
			spriteName: F1,
			x: this.posX + l,
			y: -j,
			name: d0,
			visible: C7C8.K14,
			touch: C7C8.K14,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_16 = new chooseLevel({
			id: 16,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 1146,
			y: -190,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_17 = new chooseLevel({
			id: 17,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 1256,
			y: -227,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_18 = new chooseLevel({
			id: 18,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 1346,
			y: -206,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_19 = new chooseLevel({
			id: 19,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 1388,
			y: -153,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_20 = new chooseLevel({
			id: B1,
			spriteName: F1,
			x: this.posX + i,
			y: -f,
			name: d0,
			visible: C7C8.K14,
			touch: C7C8.K14,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_21 = new chooseLevel({
			id: 21,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 1352,
			y: -3,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_22 = new chooseLevel({
			id: 22,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 1310,
			y: 43,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_23 = new chooseLevel({
			id: 23,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 1403,
			y: 107,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_24 = new chooseLevel({
			id: 24,
			scale: 0.7,
			spriteName: "ui",
			x: this.posX + 1335,
			y: 172,
			name: "passLevel",
			visible: true,
			touch: true,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		this.passLevelUI_25 = new chooseLevel({
			id: C7C8.M04,
			spriteName: F1,
			x: this.posX + d,
			y: b,
			name: d0,
			visible: C7C8.K14,
			touch: C7C8.K14,
			vpX: this.vpX,
			vpY: this.vpY,
			limit: {
				x: this.posX,
				y: this.posY,
				w: this.posX + this.frameW,
				h: this.posY + this.frameH
			}
		});
		n2 = me.storage.getPlayerStorage().currentStage;
		for (var f1 = C7C8.V04; C7C8.c9(f1, C7C8.M04); f1++) {
			this[C7C8.g24 + f1].touchCallback = function() {
				I1.levelBoxOn();
				I1.levelMsgUI.text = textdata[SG.lang][A0] + H0 + this.touchId;
				e2 = this.touchId;
			};
			this.addUI(this[C7C8.g24 + f1]);
			if (C7C8.f9(f1, n2)) this[C7C8.g24 + f1].visible = C7C8.B04;
		}
	},
	levelBoxOn: function() {
		this.noUI.enable = C7C8.K14;
		this.yesUI.enable = C7C8.K14;
		this.levelBoxUI.visible = C7C8.K14;
		this.noUI.visible = C7C8.K14;
		this.yesUI.visible = C7C8.K14;
		this.levelMsgUI.visible = C7C8.K14;
		for (var a = C7C8.V04; C7C8.i9(a, C7C8.M04); a++) this[C7C8.g24 + a].enable = C7C8.B04;
		this.btnExitUI.enable = C7C8.B04;
		this.shopBtnUI.enable = C7C8.B04;
	},
	onResetEvent: function() {},
	loadRes: function(a) {
		var b = "effect/blood_monster2.png",
			d = "blood_monster2",
			f = "effect/blood_monster.png",
			i = "blood_monster",
			j = "player/sword_",
			l = "sword_",
			s = "player/shield_",
			r = "shield_",
			u = "player/gun_",
			e0 = "gun_",
			d0 = "player/hat.png",
			b0 = "hat",
			f0 = "player/hood.png",
			l0 = "hood",
			o0 = "player/shoes.png",
			w0 = "shoes",
			k0 = "player/godet.png",
			n0 = "godet",
			H0 = "player/clothes.png",
			A0 = "clothes",
			i0 = "player/armour.png",
			l1 = "armour",
			o1 = "player/player_bullet.png",
			M0 = "player_bullet",
			g1 = "player/player.png",
			X0 = "player",
			B1 = "monster/monster5.png",
			M1 = "monster5",
			J1 = "monster/monster4.png",
			p1 = "monster4",
			D1 = "monster/monster3.png",
			m2 = "monster3",
			L1 = "monster/monster2.png",
			F1 = "monster2",
			S1 = "monster/monster1.png",
			I1 = "monster1",
			e2 = ".png",
			n2 = "bg/",
			f1 = "_bg";
		for (var i1 = [], U2 = Math.ceil(C7C8.l9(a, C7C8.a14)), h3 = C7C8.X04; C7C8.o9(h3, C7C8.T04); h3++) i1.push({
			name: U2 + f1 + h3,
			src: imgPath + n2 + U2 + f1 + h3 + e2
		});
		i1.push({
			name: I1,
			src: imgPath + S1
		});
		i1.push({
			name: F1,
			src: imgPath + L1
		});
		i1.push({
			name: m2,
			src: imgPath + D1
		});
		i1.push({
			name: p1,
			src: imgPath + J1
		});
		i1.push({
			name: M1,
			src: imgPath + B1
		});
		i1.push({
			name: X0,
			src: imgPath + g1
		});
		i1.push({
			name: M0,
			src: imgPath + o1
		});
		i1.push({
			name: l1,
			src: imgPath + i0
		});
		i1.push({
			name: A0,
			src: imgPath + H0
		});
		i1.push({
			name: n0,
			src: imgPath + k0
		});
		i1.push({
			name: w0,
			src: imgPath + o0
		});
		i1.push({
			name: l0,
			src: imgPath + f0
		});
		i1.push({
			name: b0,
			src: imgPath + d0
		});
		U2 = me.storage.getPlayerStorage().equip;
		i1.push({
			name: e0 + U2.gun_level,
			src: imgPath + u + U2.gun_level + e2
		});
		i1.push({
			name: r + U2.shield_level,
			src: imgPath + s + U2.shield_level + e2
		});
		i1.push({
			name: l + U2.sword_level,
			src: imgPath + j + U2.sword_level + e2
		});
		i1.push({
			name: i,
			src: imgPath + f
		});
		i1.push({
			name: d,
			src: imgPath + b
		});
		me.loader.preload(i1, this.onPreLoad, a);
	},
	onPreLoad: function(a) {
		var b = 300;
		setTimeout(function() {
			me.state.change(me.state.PLAY, [a]);
		}, b);
	},
	draw: function(b) {
		var d = ((0xC2, 5.2E2) > (1.92E2, 15.20E1) ? (0x23D, 1440) : (0., 99.2E1) <= (0xB9, 0x135) ? (143.8E1, 0x172) : 71.4E1 <= (7.22E2, 0x12B) ? (26, 107.80E1) : (36., 0xD5)),
			f = "world_map",
			i = ((0x186, 0x61) <= (142., 124.) ? (0x164, 396) : 16 >= (0x16C, 0x9A) ? (0x105, 113) : (46, 0x4D) >= 86. ? (0x13B, 60) : (99.10E1, 64.));
		if (C7C8.r9(this.loadPercent, C7C8.X04)) {
			this.loading1.uiImageW = Math.floor(C7C8.u9(this.loadPercent, i));
			this.loadPercent = me.loader.getLoadPercent();
		} else {
			var j = me.loader.getImage(f),
				l = me.input.getTouchPos();
			if (C7C8.x9(l.length, C7C8.X04)) {
				var s = function(a) {
						u = a.y;
					},
					r = function(a) {
						l = a.x;
					};
				var u = l[C7C8.A9(l.length, C7C8.V04)];
				r(u);
				s(u);
				if (C7C8.D9(this.lastPosX, C7C8.X04) && C7C8.G9(this.lastPosY, C7C8.X04)) {
					var e0 = Math.abs(C7C8.J9(this.lastPosX, l)),
						d0 = Math.abs(C7C8.M9(this.lastPosY, u));
					if (C7C8.P9(this.lastPosX, l)) {
						if (!(C7C8.S9(this.mapX - e0, C7C8.X04))) {
							this.mapX -= e0;
							this.vp.pos.x -= e0;
							this.vpX -= e0;
						}
					} else if (C7C8.V9(this.lastPosX, l))
						if (!(C7C8.Y9(this.mapX + e0, d - this.frameW))) {
							this.mapX += e0;
							this.vp.pos.x += e0;
							this.vpX += e0;
						}
					if (C7C8.b00(this.lastPosY, u)) {
						if (!(C7C8.e00(this.mapY - d0, C7C8.X04))) {
							this.mapY -= d0;
							this.vp.pos.y -= d0;
							this.vpY -= d0;
						}
					} else if (C7C8.h00(this.lastPosY, u))
						if (!(C7C8.k00(this.mapY + d0, this.frameH))) {
							this.mapY += d0;
							this.vp.pos.y += d0;
							this.vpY += d0;
						}
				}
				this.lastPosX = l;
				this.lastPosY = u;
			} else this.lastPosY = this.lastPosX = C7C8.X04;
			b.drawImage(j, this.mapX, this.mapY, this.frameW, this.frameH, this.posX, this.posY, this.frameW, this.frameH);
			me.storage.setMapCoord(this.mapX, this.mapY, this.vpX, this.vpY);
		}
		this.parent(b);
	}
});
var A6h3 = {
	'p13': true,
	'w03': 125,
	'v03': 'stage',
	'l4': function(a, b) {
		return a == b;
	},
	'K03': 1,
	'e03': " ",
	'P3': function(a, b) {
		return a - b;
	},
	'f4': function(a, b) {
		return a * b;
	},
	'b4': function(a, b, d) {
		return a * b * d;
	},
	'M3': function(a, b) {
		return a * b;
	},
	'J3': function(a, b) {
		return a == b;
	},
	'u3': function(a, b) {
		return a <= b;
	},
	'f13': 65,
	'S3': function(a, b) {
		return a == b;
	},
	'D3': function(a, b) {
		return a == b;
	},
	'A3': function(a, b) {
		return a == b;
	},
	'i03': false,
	'h13': 'stage-compl',
	'Y3': function(a, b) {
		return a * b;
	},
	'i4': function(a, b) {
		return a <= b;
	},
	'M03': 0,
	'f03': 0.2,
	'G3': function(a, b) {
		return a == b;
	},
	'o4': function(a, b) {
		return a <= b;
	},
	'V3': function(a, b) {
		return a < b;
	},
	'x3': function(a, b) {
		return a * b;
	},
	's03': 0.6
};
var SG_Game_Started = A6h3.i03,
	PlayScreenObject = me.ScreenObject.extend({
		currentLevel: A6h3.K03,
		init: function() {
			var d = "#FFFFFF";
			var f = ((16, 60) <= (84.9E1, 107) ? (0x4, 0.125) : (52., 0x14B));
			var i = ((64., 0x4A) > (55., 6.850E2) ? (10.870E2, 1130) : 57 > (12.370E2, 0x4D) ? (0x6F, 0x2F) : (0, 128.5E1) > (1.0130E3, 76.) ? (13.5E1, 0.66) : (145., 1.264E3));
			var j = "kill";
			var l = (84.9E1 > (40, 51.90E1) ? (99.2E1, 0.13) : (45., 10));
			var s = ((96., 105.10E1) < 54 ? 7.0E1 : (144.5E1, 129) <= 1.463E3 ? (0x1A5, 0.43) : (0x208, 7.4E1) < 33. ? (0x23F, 84) : (2.96E2, 2.72E2));
			var r = "gold";
			var u = (22. > (23, 108.) ? 30 : (0x105, 0x116) <= 0x9E ? (137, "?") : (0xC, 0x128) >= (36, 2.54E2) ? (11.33E2, 0.4) : (7.99E2, 0x234));
			var e0 = "#f0b600";
			var d0 = (78.80E1 > (97, 0x99) ? (0x233, 24) : (53, 77.60E1));
			var b0 = ((10.46E2, 125.10E1) >= 80 ? (130.6E1, 0.075) : (126.9E1, 113.));
			var f0 = "face";
			var l0 = (53.30E1 < (113, 67) ? 115 : (112., 112.) <= 37 ? 10.10E1 : 6 < (4.59E2, 68) ? (9.450E2, 0.15) : (0., 114.10E1));
			var o0 = "shop_current_hp";
			var b7 = (36 <= (124.60E1, 97.2E1) ? (0x66, 0.128) : (7.87E2, 0x8B));
			var F6 = ((0x18, 0xF3) >= 11 ? (7.7E1, 0.18) : (53., 0x6));
			var V7 = "controlBtn";
			var i6 = 0.92;
			var D5 = 0.14;
			var W7 = 0.68;
			var O3 = 0.9;
			var H6 = "attack_sword_btn";
			var z4 = ((49.5E1, 95.) > (0x87, 131) ? (107, 0x9C) : (143., 135.4E1) <= (6.45E2, 122.4E1) ? 'c' : 104.30E1 >= (0xD3, 0xCF) ? (0x3D, 60) : (0x67, 107.60E1));
			var t2 = "change_gun_btn";
			var O8 = ((0x173, 58.30E1) > (55, 69.2E1) ? 0xB2 : (14.700E2, 76) > 43. ? (5.46E2, 0.23) : (102, 48.7E1));
			var v8 = 0.17;
			var z7 = 1.4;
			var w8 = 2;
			var F9 = "rollBtn";
			var I9 = 0.94;
			var H9 = 0.8;
			var w0 = "msgBox";
			var k0 = 'pause';
			var n0 = "pauseMsg";
			var H0 = 'died';
			var A0 = "deadMsg";
			var i0 = 0.11;
			var l1 = "#a3692d";
			var o1 = (16.6E1 > (95., 13.9E1) ? (95., 25) : (109., 55) >= (119., 102.2E1) ? 125.9E1 : (5.01E2, 0x1EA));
			var M0 = "arial";
			var g1 = "sys";
			var X0 = "levelMsg";
			var B1 = 0.12;
			var M1 = "mapBtn";
			var J1 = ((14.73E2, 128) >= (56., 0x4F) ? (4.12E2, 0.1) : 0x1A7 < (13, 0x189) ? 2.59E2 : (0x1F0, 0x3E));
			var p1 = "continueBtn";
			var D1 = "ui";
			var m2 = 20;
			var L1 = function(a) {
				S1 = a.gold;
			};
			if (!SG_Game_Started) {
				var F1 = function(a) {
					SG_Game_Started = a;
				};
				SG_Hooks.start();
				F1(A6h3.p13);
			}
			this.updateWaveCount = this.updateWaveIndex = m2;
			this.parent(A6h3.p13);
			var S1 = me.storage.getPlayerStorage(),
				I1 = S1.currentHp,
				e2 = S1.currentStage,
				n2 = me.storage.getStats().hp;
			L1(S1);
			var f1 = this;
			this.yesUI = new UIEntity({
				spriteName: D1,
				middle: A6h3.p13,
				x: A6h3.M03,
				y: A6h3.f03,
				name: p1,
				visible: A6h3.i03,
				touch: A6h3.p13,
				delay: m2,
				lockUI: A6h3.p13
			});
			this.yesUI.touchCallback = function() {
				var a = 0.06;
				var b = {
					currentStage: e2,
					currentHp: A6h3.u3(f1.player.baseStats.currentHp, A6h3.M03) ? Math.ceil(A6h3.x3(f1.player.baseStats.hp, a)) : f1.player.baseStats.currentHp,
					gold: f1.player.baseStats.gold
				};
				if (A6h3.A3(f1.currentLevel, e2 + A6h3.K03)) b.currentStage = f1.currentLevel;
				me.storage.setPlayerStorage(b);
				me.state.change(me.state.MENU);
			};
			this.addUI(this.yesUI);
			this.exitUI = new UIEntity({
				spriteName: D1,
				middle: A6h3.p13,
				x: -J1,
				y: A6h3.f03,
				name: M1,
				visible: A6h3.i03,
				touch: A6h3.p13,
				delay: m2,
				lockUI: A6h3.p13
			});
			this.exitUI.touchCallback = function() {
				var a = {
					currentStage: e2,
					currentHp: f1.player.baseStats.currentHp,
					gold: f1.player.baseStats.gold
				};
				if (A6h3.D3(f1.currentLevel, e2 + A6h3.K03)) a.currentStage = f1.currentLevel;
				me.storage.setPlayerStorage(a);
				me.state.change(me.state.MENU);
			};
			this.addUI(this.exitUI);
			this.continueUI = new UIEntity({
				spriteName: D1,
				middle: A6h3.p13,
				x: J1,
				y: A6h3.f03,
				name: p1,
				visible: A6h3.i03,
				touch: A6h3.p13
			});
			this.continueUI.touchCallback = function() {
				f1.levelBoxUI.visible = A6h3.i03;
				f1.pauseMsgUI.visible = A6h3.i03;
				f1.continueUI.visible = A6h3.i03;
				f1.exitUI.visible = A6h3.i03;
				f1.pause.enable = true;
				f1.changeUI.enable = A6h3.p13;
				me.game.resume();
			};
			this.addUI(this.continueUI);
			this.levelMsgUI = new Text({
				middle: A6h3.p13,
				x: -B1,
				y: A6h3.M03,
				name: X0,
				visible: A6h3.i03,
				text: textdata[SG.lang][A6h3.h13],
				bold: A6h3.p13,
				ref: g1,
				visible: A6h3.i03
			});
			this.levelMsgUI.setFont(M0, o1, l1);
			this.addUI(this.levelMsgUI);
			this.deadMsgUI = new Text({
				middle: A6h3.p13,
				x: -i0,
				y: A6h3.M03,
				name: A0,
				visible: A6h3.i03,
				text: textdata[SG.lang][H0],
				bold: A6h3.p13,
				ref: g1,
				visible: A6h3.i03
			});
			this.deadMsgUI.setFont(M0, o1, l1);
			this.addUI(this.deadMsgUI);
			this.pauseMsgUI = new Text({
				middle: A6h3.p13,
				x: -J1,
				y: A6h3.M03,
				name: n0,
				visible: A6h3.i03,
				text: textdata[SG.lang][k0],
				bold: A6h3.p13,
				ref: g1,
				visible: A6h3.i03
			});
			this.pauseMsgUI.setFont(M0, o1, l1);
			this.addUI(this.pauseMsgUI);
			this.levelBoxUI = new UIEntity({
				spriteName: D1,
				middle: A6h3.p13,
				name: w0,
				visible: A6h3.i03
			});
			this.addUI(this.levelBoxUI);
			this.rollUI = new UIEntity({
				spriteName: D1,
				x: H9,
				y: I9,
				name: F9,
				delay: w8
			});
			this.rollUI.setTouchArea([{
				x: -A6h3.f03,
				y: -A6h3.f03,
				w: z7,
				h: z7,
				keys: [me.input.KEY.X],
				noClear: A6h3.p13
			}]);
			this.addUI(this.rollUI);
			this.changeUI = new UIEntity({
				spriteName: D1,
				x: v8,
				y: O8,
				name: t2,
				delay: z4,
				touch: A6h3.p13
			});
			this.changeUI.touchCallback = function() {
				var a = "attack_gun_btn";
				var b = "change_sword_btn";
				f1.player.changeWeapon();
				A6h3.G3(this.name, b) ? this.setCurrentSpriteActions(t2) : this.setCurrentSpriteActions(b);
				this.setCurrentSpriteFrame();
				A6h3.J3(f1.attackUI.name, H6) ? f1.attackUI.setCurrentSpriteActions(a) : f1.attackUI.setCurrentSpriteActions(H6);
				f1.attackUI.setCurrentSpriteFrame();
			};
			this.addUI(this.changeUI);
			this.attackUI = new UIEntity({
				spriteName: D1,
				x: O3,
				y: W7,
				name: H6
			});
			this.attackUI.setTouchArea([{
				x: -A6h3.f03,
				y: -A6h3.f03,
				w: z7,
				h: z7,
				keys: [me.input.KEY.Z],
				noClear: A6h3.i03
			}]);
			this.addUI(this.attackUI);
			this.controlUI = new UIEntity({
				spriteName: D1,
				x: D5,
				y: i6,
				name: V7
			});
			this.controlUI.setControlTouch(A6h3.p13, A6h3.i03);
			this.addUI(this.controlUI);
			this.currentHpUI = new UIEntity({
				spriteName: D1,
				x: F6,
				y: b7,
				uiImageW: Math.floor(A6h3.M3(A6h3.w03, (I1 / n2))) + A6h3.f13,
				name: o0
			});
			this.addUI(this.currentHpUI);
			this.faceUI = new UIEntity({
				spriteName: D1,
				x: F6,
				y: l0,
				name: f0
			});
			this.addUI(this.faceUI);
			this.levelUI = new Text({
				x: v8,
				y: b0,
				text: textdata[SG.lang][A6h3.v03] + A6h3.e03 + this.currentLevel,
				bold: A6h3.p13
			});
			this.levelUI.setFont(M0, d0, e0);
			this.addUI(this.levelUI);
			this.gold = new UIEntity({
				spriteName: D1,
				x: u,
				y: l0,
				name: r
			});
			this.addUI(this.gold);
			this.goldUI = new Text({
				x: s,
				y: l,
				text: S1,
				bold: A6h3.p13
			});
			this.goldUI.setFont(M0, d0, e0);
			this.addUI(this.goldUI);
			this.kill = new UIEntity({
				spriteName: D1,
				x: A6h3.s03,
				y: l0,
				name: j
			});
			this.addUI(this.kill);
			this.killUI = new Text({
				x: i,
				y: f,
				text: A6h3.M03,
				bold: A6h3.p13
			});
			this.killUI.setFont(M0, d0, d);
			this.addUI(this.killUI);
			this.pause = new UIEntity({
				spriteName: "ui",
				x: 0.8,
				y: 0.14,
				name: "pauseBtn",
				touch: true
			});
			this.pause.touchCallback = function() {
				f1.levelBoxUI.visible = true;
				f1.pauseMsgUI.visible = true;
				f1.continueUI.visible = true;
				f1.exitUI.visible = true;
				f1.pause.enable = false;
				f1.changeUI.enable = false;
				me.game.pause();
			};
			this.addUI(this.pause);
			this.lastKills = A6h3.M03;
			this.initMonster = A6h3.p13;
			this.deadIndex = A6h3.K03;
		},
		updateVisibleByWave: function() {
			var b = "monster";
			var d = 5;
			var f = 40;
			var i = ((0x1AC, 3.9E2) > 4E0 ? (87, 300) : (148., 131));
			var j = 400;
			var l = "player";
			if (!this.player) {
				var s = function(a) {
					me.sys.player = a;
				};
				var r = me.entityPool.newIstanceOf({
					spriteName: l,
					x: j,
					y: i,
					name: l
				});
				this.player = r;
				s(r);
				me.game.add(r);
			}
			r = A6h3.P3(this.player.baseStats.kills, this.lastKills);
			if (A6h3.S3(this.player.baseStats.kills, f)) {
				this.passLevel = A6h3.p13;
				updateShare(this.currentLevel); 
				Play68.setRankingLevelScoreDesc(this.currentLevel); 
				this.currentLevel++;
			} else {
				if (this.initMonster) {
					var u = function(a) {
						r = a;
					};
					u(d);
					this.initMonster = A6h3.i03;
				}
				if (r)
					for (var e0 = A6h3.M03; A6h3.V3(e0, r); e0++) {
						var d0 = this.gameObjectsProp[this.currentWave++];
						if (d0) {
							var b0 = function(a) {
								d0.spriteName = a;
							};
							b0(b);
							if (!d0.y) d0.y = Math.ceil(A6h3.Y3(me.video.getHeight(), A6h3.s03) + A6h3.b4(Math.random(), me.video.getHeight(), A6h3.f03));
							me.game.addEntity(d0);
						}
					}
				this.lastKills = this.player.baseStats.kills;
			}
		},
		onResetEvent: function(b) {
			var d = null;
			var f = "play";
			var i = function(a) {
				me.sys.spriteName = a;
			};
			i(f);
			this.currentWave = A6h3.M03;
			this.player = d;
			this.passLevel = A6h3.i03;
			this.currentLevel = b[A6h3.M03];
			me.levelDirector.loadLevel(this.currentLevel);
			this.levelUI.text = textdata[SG.lang][A6h3.v03] + A6h3.e03 + this.currentLevel;
			this.gameObjects = me.game.getGameObjects();
			this.gameObjectsProp = me.game.getGameObjectsProp();
		},
		update: function() {
			var a = ((0x200, 0x156) < 12.25E2 ? (0x244, 30) : (42, 0x23A));
			var b = 'gameover';
			var d = 26;
			var f = "/40";
			if (this.player) {
				this.killUI.text = this.player.baseStats.kills + f;
				this.goldUI.text = this.player.baseStats.gold;
				var i = Math.floor(A6h3.f4(A6h3.w03, (this.player.baseStats.currentHp / this.player.baseStats.hp))) + A6h3.f13;
				this.currentHpUI.uiImageW = A6h3.i4(i, A6h3.M03) ? A6h3.M03 : i;
			}
			if (this.passLevel) {
				this.levelMsgUI.text = A6h3.l4(this.currentLevel, d) ? textdata[SG.lang][b] : textdata[SG.lang][A6h3.h13];
				this.levelBoxUI.visible = A6h3.p13;
				this.levelMsgUI.visible = A6h3.p13;
				this.yesUI.visible = A6h3.p13;
				this.pause.enable = false;
				this.changeUI.enable = A6h3.i03;
				this.pauseMsgUI.visible = A6h3.i03;
				this.continueUI.visible = A6h3.i03;
				this.exitUI.visible = A6h3.i03;
			} else {
				if (this.player && A6h3.o4(this.player.baseStats.currentHp, A6h3.M03)) {
					this.pauseMsgUI.visible = A6h3.i03;
					this.continueUI.visible = A6h3.i03;
					this.exitUI.visible = A6h3.i03;
					if (++this.deadIndex == a) {
						SG_Hooks.gameOver(this.currentLevel, this.player.baseStats.kills);
						this.levelBoxUI.visible = A6h3.p13;
						this.deadMsgUI.visible = A6h3.p13;
						this.yesUI.visible = A6h3.p13;
						this.pause.enable = false;
						this.changeUI.enable = A6h3.i03;
					}
				}
				if (++this.updateWaveIndex > this.updateWaveCount) {
					this.updateVisibleByWave();
					this.updateWaveIndex = A6h3.M03;
				}
			}
			this.parent();
			return A6h3.p13;
		}
	});
var H7y70 = {
	'D84': "hp",
	'm80': function(a, b) {
		return a == b;
	},
	'K84': "gun_",
	'U70': function(a, b) {
		return a <= b;
	},
	'C70': function(a, b) {
		return a != b;
	},
	'S84': 0,
	'a80': function(a, b) {
		return a <= b;
	},
	'D94': true,
	'O70': function(a, b) {
		return a * b;
	},
	'I70': function(a, b) {
		return a > b;
	},
	'w94': null,
	'j80': function(a, b) {
		return a < b;
	},
	'R84': 1,
	'L84': "_level",
	'X70': function(a, b) {
		return a <= b;
	},
	'O94': "sword_",
	'F70': function(a, b) {
		return a == b;
	},
	'd80': function(a, b) {
		return a == b;
	},
	'L70': function(a, b) {
		return a * b;
	},
	'g80': function(a, b) {
		return a >= b;
	},
	'H94': "shield_",
	't84': false,
	'G94': "armour_",
	'R70': function(a, b) {
		return a <= b;
	},
	'I84': "LV "
};
var ShopScreenObject = me.ScreenObject.extend({
	init: function() {
		var i = "shop",
			j = (120 > (65.7E1, 12.540E2) ? 13. : (28, 0x16E) < (0x160, 4) ? 'g' : 6.05E2 > (8., 64.) ? (27.20E1, 20) : (13, 13.3E2)),
			l = "mapBtn",
			s = "100",
			r = (67.8E1 >= (0xE7, 144.5E1) ? 0xF0 : (62, 93.9E1) > (0x24, 4.67E2) ? (8.41E2, 0.34) : (0x1FF, 104.) >= (50.30E1, 48.0E1) ? "G" : (53.2E1, 24.)),
			u = "shop_item_hp",
			e0 = (82 >= (100.80E1, 29.) ? (148., 0.22) : (56., 0x143) <= 11 ? "S" : (148.20E1, 1.145E3) <= 29 ? "hp" : (0x252, 34.30E1)),
			d0 = "armour",
			b0 = "shop_item_armour",
			f0 = "shield",
			l0 = "shop_item_shield",
			o0 = ((81.5E1, 89) < (29, 6.57E2) ? (75.2E1, 0.05) : (0x5D, 0x93)),
			w0 = "gun",
			k0 = "shop_item_gun",
			n0 = ((0x7B, 4) < (8.78E2, 81.10E1) ? (1.3760E3, 0.08) : (0x197, 148.)),
			H0 = ((111.4E1, 143.) >= 0x2C ? (0xF9, 4) : (8.89E2, 8.48E2)),
			A0 = ((0x60, 135.) > (0x147, 78.) ? (0x9E, 0.185) : (0x9B, 73.)),
			i0 = ((22.8E1, 12.19E2) <= 67. ? 58 : (9.18E2, 0xBC) > (0x163, 125) ? (19.20E1, 0.195) : (8.06E2, 0x94)),
			l1 = "sword",
			o1 = "shop_item_sword",
			M0 = (4.1E2 < (0xAD, 0x23F) ? (0xF1, 0.32) : (1.401E3, 14)),
			g1 = ((0xC4, 44) >= (11.18E2, 88) ? (0x75, 188) : 0x15F <= (0x91, 8.620E2) ? (21., 5) : (0x1F5, 1.174E3) < (124.5E1, 0x72) ? (140, 0x225) : (2.97E2, 0x1A5)),
			X0 = "#f0b600",
			B1 = 0.37,
			M1 = 0.3,
			J1 = "shop_current_hp",
			p1 = 0.329,
			D1 = ((102, 73) >= 4.88E2 ? (90, 0x65) : (142.5E1, 36.30E1) < 108 ? (0x215, 0x1F4) : 55.40E1 > (0x1D9, 11) ? (1.198E3, 0.28) : (31., 0x243)),
			m2 = "#b70200",
			L1 = 24,
			F1 = "你没有足够的金币！",
			S1 = 0.27,
			I1 = "purchaseBtn",
			e2 = 0.4,
			n2 = "returnBtn",
			f1 = 0.242,
			i1 = "$ 30",
			U2 = (35. > (33.6E1, 97) ? 's' : 27 <= (121., 0x14E) ? (2.23E2, 0.11) : (8E0, 0xBE)),
			h3 = "$ 20",
			W4 = 0.03,
			U4 = "coins_1",
			B4 = "#ffe59f",
			v3 = "$ 10",
			C4 = ((0x93, 120.0E1) >= 7. ? (88., 0.17) : (64, 7.8E2)),
			s5 = "100000",
			X4 = 0.09,
			E5 = "50000",
			r5 = ((71.5E1, 0x1E1) >= 8. ? (1.287E3, 0.04) : (0xAD, 4)),
			E1 = "coins_2",
			Q3 = 0.07,
			F4 = 0.14,
			T5 = "20000",
			E4 = 0.01,
			P1 = 0.18,
			O2 = "确认购买？",
			N2 = 0.13,
			T3 = "msgBox",
			R3 = "#a3692d",
			L2 = 25,
			g2 = "arial",
			p2 = "你确定要购买这个？",
			w3 = "buyMsg",
			U3 = 0.15,
			G5 = "noBtn",
			H5 = 65,
			G1 = 125,
			c1 = "sys",
			z3 = "yesBtn",
			n3 = 0.2,
			W2 = 0.1,
			X1 = "ui";
		this.parent(H7y70.D94);
		this.scale = 1.2;
		this.chooseItem = H7y70.w94;
		this.isNotEnoughGold = H7y70.t84;
		var C1 = me.storage.getPlayerStorage(),
			u1 = C1.equip,
			H4 = C1.currentHp,
			Z4 = me.storage.getStats().hp,
			y3 = C1.gold,
			r0 = this;
		this.vp = me.game.viewport;
		this.yesUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: -W2,
			y: n3,
			name: z3,
			visible: H7y70.t84,
			touch: H7y70.D94,
			ref: c1
		});
		this.yesUI.touchCallback = function() {
			var a = "GoldUI",
				b = "LevelUI",
				d = 200;
			r0.updateEnableUI(H7y70.D94);
			r0.msgBoxUI.visible = H7y70.t84;
			r0.noUI.visible = H7y70.t84;
			r0.yesUI.visible = H7y70.t84;
			r0.buyMsgUI.visible = H7y70.t84;
			r0.updateScale();
			var f = H7y70.t84;
			if (H7y70.C70(r0.chooseItem.equipName, H7y70.D84)) f = r0.chooseItem.setIndex(++u1[r0.chooseItem.equipName + H7y70.L84]);
			else if (H7y70.F70(r0.chooseItem.equipName, H7y70.D84)) H4 = H7y70.I70(H4 + d, Z4) ? Z4 : H4 + d;
			if (f) {
				r0[r0.chooseItem.equipName + b].visible = H7y70.t84;
				r0[r0.chooseItem.equipName + a].visible = H7y70.t84;
				r0.chooseItem.visible = H7y70.t84;
			}
			y3 -= r0.chooseItem.shopGold;
			me.storage.setPlayerStorage({
				gold: y3,
				equip: u1,
				currentHp: H4
			});
			r0.updateLevelAndGold(u1, y3);
			Z4 = me.storage.getStats().hp;
			r0.currentHpUI.uiImageW = Math.floor(H7y70.L70(G1, (H4 / Z4))) + H5;
			r0.chooseItem = H7y70.w94;
		};
		this.addUI(this.yesUI);
		this.noUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: W2,
			y: n3,
			name: G5,
			visible: H7y70.t84,
			touch: H7y70.D94,
			ref: c1
		});
		this.noUI.touchCallback = function() {
			r0.updateEnableUI(H7y70.D94);
			r0.msgBoxUI.visible = H7y70.t84;
			r0.noUI.visible = H7y70.t84;
			r0.yesUI.visible = H7y70.t84;
			r0.buyMsgUI.visible = H7y70.t84;
			r0.updateScale();
			this.chooseItem = H7y70.w94;
		};
		this.addUI(this.noUI);
		this.buyMsgUI = new Text({
			middle: H7y70.D94,
			x: -U3,
			y: H7y70.S84,
			name: w3,
			visible: H7y70.t84,
			text: p2,
			bold: H7y70.D94,
			ref: c1,
			visible: H7y70.t84
		});
		this.buyMsgUI.setFont(g2, L2, R3);
		this.buyMsgUI.bold();
		this.addUI(this.buyMsgUI);
		this.msgBoxUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			name: T3,
			visible: H7y70.t84
		});
		this.addUI(this.msgBoxUI);
		this.coins_yesUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: -W2,
			y: n3,
			name: z3,
			visible: H7y70.t84,
			touch: H7y70.D94,
			ref: c1
		});
		this.coins_yesUI.touchCallback = function() {};
		this.addUI(this.coins_yesUI);
		this.coins_noUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: W2,
			y: n3,
			name: G5,
			visible: H7y70.t84,
			touch: H7y70.D94,
			ref: c1
		});
		this.coins_noUI.touchCallback = function() {
			r0.coins_yesUI.visible = H7y70.t84;
			r0.coins_noUI.visible = H7y70.t84;
			r0.coins_buyMsgUI.visible = H7y70.t84;
			r0.coins_msgBoxUI.visible = H7y70.t84;
			r0.coins_1UI_1.enable = H7y70.D94;
			r0.coins_1UI_2.enable = H7y70.D94;
			r0.coins_1UI_3.enable = H7y70.D94;
			r0.btnExitUI.enable = H7y70.D94;
		};
		this.addUI(this.coins_noUI);
		this.coins_buyMsgUI = new Text({
			middle: H7y70.D94,
			x: -N2,
			y: H7y70.S84,
			name: w3,
			visible: H7y70.t84,
			text: O2,
			bold: H7y70.D94,
			ref: c1,
			visible: H7y70.t84
		});
		this.coins_buyMsgUI.setFont(g2, L2, R3);
		this.addUI(this.coins_buyMsgUI);
		this.coins_msgBoxUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			name: T3,
			visible: H7y70.t84
		});
		this.addUI(this.coins_msgBoxUI);
		this.coinsMsgUI_01 = new Text({
			middle: H7y70.D94,
			x: -P1,
			y: E4,
			name: w3,
			text: T5,
			bold: H7y70.t84,
			ref: c1,
			visible: H7y70.t84
		});
		this.coinsMsgUI_01.setFont(g2, L2, R3);
		this.addUI(this.coinsMsgUI_01);
		this.coins_2UI_1 = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: -F4,
			y: -Q3,
			name: E1,
			visible: H7y70.t84,
			ref: c1
		});
		this.addUI(this.coins_2UI_1);
		this.coinsMsgUI_02 = new Text({
			middle: H7y70.D94,
			x: -r5,
			y: E4,
			name: w3,
			text: E5,
			bold: H7y70.t84,
			ref: c1,
			visible: H7y70.t84
		});
		this.coinsMsgUI_02.setFont(g2, L2, R3);
		this.addUI(this.coinsMsgUI_02);
		this.coins_2UI_2 = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: H7y70.S84,
			y: -Q3,
			name: E1,
			visible: H7y70.t84,
			ref: c1
		});
		this.addUI(this.coins_2UI_2);
		this.coinsMsgUI_03 = new Text({
			middle: H7y70.D94,
			x: X4,
			y: E4,
			name: w3,
			text: s5,
			bold: H7y70.t84,
			ref: c1,
			visible: H7y70.t84
		});
		this.coinsMsgUI_03.setFont(g2, L2, R3);
		this.addUI(this.coinsMsgUI_03);
		this.coins_2UI_3 = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: F4,
			y: -Q3,
			name: E1,
			visible: H7y70.t84,
			ref: c1
		});
		this.addUI(this.coins_2UI_3);
		this.coinsMsgUI_1 = new Text({
			middle: H7y70.D94,
			x: -C4,
			y: U3,
			name: w3,
			text: v3,
			bold: H7y70.t84,
			ref: c1,
			visible: H7y70.t84
		});
		this.coinsMsgUI_1.setFont(g2, L2, B4);
		this.addUI(this.coinsMsgUI_1);
		this.coins_1UI_1 = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: -F4,
			y: N2,
			name: U4,
			visible: H7y70.t84,
			touch: H7y70.D94,
			ref: c1
		});
		this.coins_1UI_1.touchCallback = function() {
			r0.coins_yesUI.visible = H7y70.D94;
			r0.coins_noUI.visible = H7y70.D94;
			r0.coins_buyMsgUI.visible = H7y70.D94;
			r0.coins_msgBoxUI.visible = H7y70.D94;
			r0.coins_1UI_1.enable = H7y70.t84;
			r0.coins_1UI_2.enable = H7y70.t84;
			r0.coins_1UI_3.enable = H7y70.t84;
			r0.btnExitUI.enable = H7y70.t84;
		};
		this.addUI(this.coins_1UI_1);
		this.coinsMsgUI_2 = new Text({
			middle: H7y70.D94,
			x: -W4,
			y: U3,
			name: w3,
			text: h3,
			bold: H7y70.t84,
			ref: c1,
			visible: H7y70.t84
		});
		this.coinsMsgUI_2.setFont(g2, L2, B4);
		this.addUI(this.coinsMsgUI_2);
		this.coins_1UI_2 = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: H7y70.S84,
			y: N2,
			name: U4,
			visible: H7y70.t84,
			touch: H7y70.D94,
			ref: c1
		});
		this.coins_1UI_2.touchCallback = function() {
			r0.coins_yesUI.visible = H7y70.D94;
			r0.coins_noUI.visible = H7y70.D94;
			r0.coins_buyMsgUI.visible = H7y70.D94;
			r0.coins_msgBoxUI.visible = H7y70.D94;
			r0.coins_1UI_1.enable = H7y70.t84;
			r0.coins_1UI_2.enable = H7y70.t84;
			r0.coins_1UI_3.enable = H7y70.t84;
			r0.btnExitUI.enable = H7y70.t84;
		};
		this.addUI(this.coins_1UI_2);
		this.coinsMsgUI_3 = new Text({
			middle: H7y70.D94,
			x: U2,
			y: U3,
			name: w3,
			text: i1,
			bold: H7y70.t84,
			ref: c1,
			visible: H7y70.t84
		});
		this.coinsMsgUI_3.setFont(g2, L2, B4);
		this.addUI(this.coinsMsgUI_3);
		this.coins_1UI_3 = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: F4,
			y: N2,
			name: U4,
			visible: H7y70.t84,
			touch: H7y70.D94,
			ref: c1
		});
		this.coins_1UI_3.touchCallback = function() {
			r0.coins_yesUI.visible = H7y70.D94;
			r0.coins_noUI.visible = H7y70.D94;
			r0.coins_buyMsgUI.visible = H7y70.D94;
			r0.coins_msgBoxUI.visible = H7y70.D94;
			r0.coins_1UI_1.enable = H7y70.t84;
			r0.coins_1UI_2.enable = H7y70.t84;
			r0.coins_1UI_3.enable = H7y70.t84;
			r0.btnExitUI.enable = H7y70.t84;
		};
		this.addUI(this.coins_1UI_3);
		this.btnExitUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: H7y70.S84,
			y: f1,
			name: n2,
			touch: H7y70.D94,
			visible: H7y70.t84
		});
		this.btnExitUI.touchCallback = function() {
			r0.coinsMsgUI_01.visible = H7y70.t84;
			r0.coinsMsgUI_02.visible = H7y70.t84;
			r0.coinsMsgUI_03.visible = H7y70.t84;
			r0.coins_2UI_1.visible = H7y70.t84;
			r0.coins_2UI_2.visible = H7y70.t84;
			r0.coins_2UI_3.visible = H7y70.t84;
			r0.coinsMsgUI_1.visible = H7y70.t84;
			r0.coinsMsgUI_2.visible = H7y70.t84;
			r0.coinsMsgUI_3.visible = H7y70.t84;
			r0.coins_1UI_1.visible = H7y70.t84;
			r0.coins_1UI_2.visible = H7y70.t84;
			r0.coins_1UI_3.visible = H7y70.t84;
			r0.coinsBoxUI.visible = H7y70.t84;
			r0.updateEnableUI(H7y70.D94);
			this.visible = H7y70.t84;
		};
		this.addUI(this.btnExitUI);
		this.coinsBoxUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			name: T3,
			visible: H7y70.t84
		});
		this.addUI(this.coinsBoxUI);
		this.purchaseBtnUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: -n3,
			y: e2,
			name: I1,
			touch: H7y70.D94,
			ref: c1
		});
		this.purchaseBtnUI.touchCallback = function() {
			r0.coinsMsgUI_01.visible = H7y70.D94;
			r0.coinsMsgUI_02.visible = H7y70.D94;
			r0.coinsMsgUI_03.visible = H7y70.D94;
			r0.coins_2UI_1.visible = H7y70.D94;
			r0.coins_2UI_2.visible = H7y70.D94;
			r0.coins_2UI_3.visible = H7y70.D94;
			r0.coinsMsgUI_1.visible = H7y70.D94;
			r0.coinsMsgUI_2.visible = H7y70.D94;
			r0.coinsMsgUI_3.visible = H7y70.D94;
			r0.coins_1UI_1.visible = H7y70.D94;
			r0.coins_1UI_2.visible = H7y70.D94;
			r0.coins_1UI_3.visible = H7y70.D94;
			r0.coinsBoxUI.visible = H7y70.D94;
			r0.btnExitUI.visible = H7y70.D94;
			r0.updateEnableUI(H7y70.t84);
		};
		this.notEnoughGoldUI = new Text({
			middle: H7y70.D94,
			x: -U3,
			y: S1,
			text: F1,
			bold: H7y70.D94,
			ref: c1,
			visible: H7y70.t84
		});
		this.notEnoughGoldUI.setFont(g2, L1, m2);
		this.notEnoughGoldUI.bold();
		this.addUI(this.notEnoughGoldUI);
		this.currentHpUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: D1,
			y: -p1,
			uiImageW: Math.floor(H7y70.O70(G1, (H4 / Z4))) + H5,
			name: J1,
			ref: c1
		});
		this.addUI(this.currentHpUI);
		this.goldUI = new Text({
			middle: H7y70.D94,
			x: M1,
			y: -B1,
			text: y3,
			bold: H7y70.D94,
			ref: c1
		});
		this.goldUI.setFont(g2, L1, X0);
		this.addUI(this.goldUI);
		if (H7y70.R70(u1.sword_level, g1)) {
			this.swordBtnUI = new UIEntity({
				spriteName: X1,
				middle: H7y70.D94,
				x: -M0,
				y: -D1,
				name: o1,
				touch: H7y70.D94,
				index: u1.sword_level,
				ref: c1
			});
			this.swordBtnUI.equipName = l1;
			this.swordBtnUI.touchCallback = function() {
				r0.buyEquip(this, u1, y3);
			};
			this.addUI(this.swordBtnUI);
			this.swordLevelUI = new Text({
				middle: H7y70.D94,
				x: -i0,
				y: -S1,
				text: H7y70.I84 + (u1.sword_level + H7y70.R84),
				bold: H7y70.D94,
				ref: c1
			});
			this.swordLevelUI.setFont(g2, L1, X0);
			this.addUI(this.swordLevelUI);
			this.swordGoldUI = new Text({
				middle: H7y70.D94,
				x: -i0,
				y: -A0,
				text: me.storage.getEquipGold(H7y70.O94 + (u1.sword_level + H7y70.R84)),
				bold: H7y70.D94,
				ref: c1
			});
			this.swordGoldUI.setFont(g2, L1, X0);
			this.addUI(this.swordGoldUI);
		}
		if (H7y70.U70(u1.gun_level, H0)) {
			this.gunBtnUI = new UIEntity({
				spriteName: X1,
				middle: H7y70.D94,
				x: -M0,
				y: n0,
				name: k0,
				touch: H7y70.D94,
				index: u1.gun_level,
				ref: c1
			});
			this.gunBtnUI.equipName = w0;
			this.gunBtnUI.touchCallback = function() {
				r0.buyEquip(this, u1, y3);
			};
			this.addUI(this.gunBtnUI);
			this.gunLevelUI = new Text({
				middle: H7y70.D94,
				x: -i0,
				y: n0,
				text: H7y70.I84 + (u1.gun_level + H7y70.R84),
				bold: H7y70.D94,
				ref: c1
			});
			this.gunLevelUI.setFont(g2, L1, X0);
			this.addUI(this.gunLevelUI);
			this.gunGoldUI = new Text({
				middle: H7y70.D94,
				x: -i0,
				y: C4,
				text: me.storage.getEquipGold(H7y70.K84 + (u1.gun_level + H7y70.R84)),
				bold: H7y70.D94,
				ref: c1
			});
			this.gunGoldUI.setFont(g2, L1, X0);
			this.addUI(this.gunGoldUI);
		}
		if (H7y70.X70(u1.shield_level, g1)) {
			this.shieldBtnUI = new UIEntity({
				spriteName: X1,
				middle: H7y70.D94,
				x: -o0,
				y: -D1,
				name: l0,
				touch: H7y70.D94,
				index: u1.shield_level,
				ref: c1
			});
			this.shieldBtnUI.equipName = f0;
			this.shieldBtnUI.touchCallback = function() {
				r0.buyEquip(this, u1, y3);
			};
			this.addUI(this.shieldBtnUI);
			this.shieldLevelUI = new Text({
				middle: H7y70.D94,
				x: Q3,
				y: -S1,
				text: H7y70.I84 + (u1.shield_level + H7y70.R84),
				bold: H7y70.D94,
				ref: c1
			});
			this.shieldLevelUI.setFont(g2, L1, X0);
			this.addUI(this.shieldLevelUI);
			this.shieldGoldUI = new Text({
				middle: H7y70.D94,
				x: Q3,
				y: -A0,
				text: me.storage.getEquipGold(H7y70.H94 + (u1.shield_level + H7y70.R84)),
				bold: H7y70.D94,
				ref: c1
			});
			this.shieldGoldUI.setFont(g2, L1, X0);
			this.addUI(this.shieldGoldUI);
		}
		if (H7y70.a80(u1.armour_level, g1)) {
			this.armourBtnUI = new UIEntity({
				spriteName: X1,
				middle: H7y70.D94,
				x: -o0,
				y: Q3,
				name: b0,
				touch: H7y70.D94,
				index: u1.armour_level,
				ref: c1
			});
			this.armourBtnUI.equipName = d0;
			this.armourBtnUI.touchCallback = function() {
				r0.buyEquip(this, u1, y3);
			};
			this.addUI(this.armourBtnUI);
			this.armourLevelUI = new Text({
				middle: H7y70.D94,
				x: Q3,
				y: n0,
				text: H7y70.I84 + (u1.armour_level + H7y70.R84),
				bold: H7y70.D94,
				ref: c1
			});
			this.armourLevelUI.setFont(g2, L1, X0);
			this.addUI(this.armourLevelUI);
			this.armourGoldUI = new Text({
				middle: H7y70.D94,
				x: Q3,
				y: C4,
				text: me.storage.getEquipGold(H7y70.G94 + (u1.armour_level + H7y70.R84)),
				bold: H7y70.D94,
				ref: c1
			});
			this.armourGoldUI.setFont(g2, L1, X0);
			this.addUI(this.armourGoldUI);
		}
		this.hpBtnUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: e0,
			y: n0,
			name: u,
			touch: H7y70.D94,
			index: H7y70.S84,
			ref: c1
		});
		this.hpBtnUI.equipName = H7y70.D84;
		this.hpBtnUI.touchCallback = function() {
			r0.buyEquip(this, u1, y3);
		};
		this.addUI(this.hpBtnUI);
		this.hpGoldUI = new Text({
			middle: H7y70.D94,
			x: r,
			y: C4,
			text: s,
			bold: H7y70.D94,
			ref: c1
		});
		this.hpGoldUI.setFont(g2, L1, X0);
		this.addUI(this.hpGoldUI);
		this.mapBtnUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			x: n3,
			y: e2,
			name: l,
			touch: H7y70.D94,
			ref: c1,
			delay: j,
			lockUI: H7y70.D94
		});
		this.mapBtnUI.touchCallback = function() {
			me.state.change(me.state.MENU);
		};
		this.addUI(this.mapBtnUI);
		this.shopUI = new UIEntity({
			spriteName: X1,
			middle: H7y70.D94,
			name: i,
			visible: H7y70.D94
		});
		this.addUI(this.shopUI);
	},
	buyEquip: function(d, f, i) {
		var j = function() {
				var a = "_",
					b = 100;
				l = H7y70.d80(d.equipName, H7y70.D84) ? H7y70.g80(i, b) ? b : H7y70.S84 : me.storage.checkGoldEnough(d.equipName + a + (f[d.equipName + H7y70.L84] + H7y70.R84), i);
			},
			l = H7y70.S84;
		j();
		this.updateScale(d.name, this.scale);
		if (l) {
			var s = function(a) {
				d.shopGold = a;
			};
			this.updateEnableUI(H7y70.t84);
			this.notEnoughGoldUI.visible = H7y70.t84;
			this.msgBoxUI.visible = H7y70.D94;
			this.noUI.visible = H7y70.D94;
			this.yesUI.visible = H7y70.D94;
			this.buyMsgUI.visible = H7y70.D94;
			s(l);
			this.chooseItem = d;
		} else {
			this.notEnoughGoldUI.visible = H7y70.D94;
			this.chooseItem = H7y70.w94;
		}
	},
	updateScale: function(a, b) {
		for (var d = H7y70.S84; H7y70.j80(d, this.uiCount); d++) this.uiObjects[d].scale = H7y70.m80(this.uiObjects[d].name, a) ? b : 1;
	},
	updateEnableUI: function(a) {
		if (this.swordBtnUI) this.swordBtnUI.enable = a;
		if (this.gunBtnUI) this.gunBtnUI.enable = a;
		if (this.shieldBtnUI) this.shieldBtnUI.enable = a;
		if (this.armourBtnUI) this.armourBtnUI.enable = a;
		if (this.hpBtnUI) this.hpBtnUI.enable = a;
		if (this.mapBtnUI) this.mapBtnUI.enable = a;
		if (this.purchaseBtnUI) this.purchaseBtnUI.enable = a;
	},
	onResetEvent: function() {},
	updateLevelAndGold: function(a, b) {
		if (this.swordLevelUI && this.swordLevelUI.visible) {
			this.swordLevelUI.text = H7y70.I84 + (a.sword_level + H7y70.R84);
			this.swordGoldUI.text = me.storage.getEquipGold(H7y70.O94 + (a.sword_level + H7y70.R84));
		}
		if (this.gunLevelUI && this.gunLevelUI.visible) {
			this.gunLevelUI.text = H7y70.I84 + (a.gun_level + H7y70.R84);
			this.gunGoldUI.text = me.storage.getEquipGold(H7y70.K84 + (a.gun_level + H7y70.R84));
		}
		if (this.shieldLevelUI && this.shieldLevelUI.visible) {
			this.shieldLevelUI.text = H7y70.I84 + (a.shield_level + H7y70.R84);
			this.shieldGoldUI.text = me.storage.getEquipGold(H7y70.H94 + (a.shield_level + H7y70.R84));
		}
		if (this.armourLevelUI && this.armourLevelUI.visible) {
			this.armourLevelUI.text = H7y70.I84 + (a.armour_level + H7y70.R84);
			this.armourGoldUI.text = me.storage.getEquipGold(H7y70.G94 + (a.armour_level + H7y70.R84));
		}
		this.goldUI.text = b;
	}
});
(function($) {
	var b0 = ((118.4E1, 91.2E1) > (74.5E1, 114.) ? (0xC8, true) : (129., 0xAC)),
		f0 = (0x65 < (0x32, 138) ? (0xF6, 4) : (68, 0x225) < (140.70E1, 0x197) ? 644 : (0x83, 9.120E2)),
		l0 = ((1.346E3, 0xA8) <= (28, 0x42) ? (146., "S") : 112 > (6.140E2, 0x38) ? (145, 1) : (0xA2, 0x236)),
		o0 = ((77, 0x200) >= (43, 42.) ? (0x1C8, 3) : (0x253, 0x95)),
		w0 = (9.19E2 < (2.92E2, 100) ? 212 : (109., 0x158) > (85, 0x110) ? (2.30E1, 2) : 0x178 > (2.54E2, 44.7E1) ? (64, 125) : (37.5E1, 144)),
		k0 = ((83., 0x1F8) > (53, 0x2E) ? (0x22C, 0) : (71., 0x204)),
		n0 = function() {
			var a = 'welcome';
			var b = 'start';
			l1.imageNames = [b, a];
		},
		H0 = function() {
			var a = ((1.397E3, 0x48) > 0x252 ? (97, 26.) : (128., 1.357E3) >= 35.30E1 ? (68, 484) : (0x223, 40) < (0x166, 0.) ? (31.1E1, 'r') : (0x1F2, 0x143));
			var b = ((0x77, 0x1BF) > 25. ? (0xDC, 383) : (64., 0xF2));
			var d = ((0xEA, 132.) > (0x150, 97.) ? (0x10A, 34) : (119., 81));
			var f = ((6.5E2, 0x70) <= (92., 1.438E3) ? (0xD5, 54) : 10.4E1 < (47, 66) ? (1.72E2, 352) : (1.079E3, 1.339E3));
			var i = 33;
			var j = 55;
			var l = 20;
			var s = 25;
			var r = 10;
			var u = 30;
			var e0 = (147.1E1 <= (1.87E2, 123.) ? (0x36, 400) : 104. < (0x9B, 132) ? (96.4E1, 15) : (137., 63.7E1) <= 0xAB ? (0x1A7, 0x1C3) : (0x2, 0x23D));
			l1.frames = [{
				actRect: [-e0, -u, u, u],
				bodyRect: [-r, -s, l, l],
				frameArray: [
					[k0, w0, -j, -i, k0]
				]
			}, {
				actRect: [-e0, -u, u, u],
				bodyRect: [-r, -s, l, l],
				frameArray: [
					[k0, k0, -j, -i, k0]
				]
			}, {
				actRect: [-e0, -u, u, u],
				bodyRect: [-r, -s, l, l],
				frameArray: [
					[k0, o0, -f, -d, k0]
				]
			}, {
				actRect: [-e0, -u, u, u],
				bodyRect: [-r, -s, l, l],
				frameArray: [
					[k0, l0, -f, -d, k0]
				]
			}, {
				actRect: [-e0, -u, u, u],
				bodyRect: [-r, -s, l, l],
				frameArray: [
					[l0, k0, -b, -a, k0]
				]
			}];
		},
		A0 = function(a) {
			$.me.welcomeSprites = a;
		},
		i0 = function() {
			var a = ((7.54E2, 1.35E3) <= (117, 0x1E2) ? (0xEA, 14.) : 21.8E1 > (1.130E2, 125) ? (0x129, 480) : (12, 0x105));
			var b = 860;
			var d = ((128., 0x183) >= 11.21E2 ? (89., 138.0E1) : (14.48E2, 0x78) >= 0x3A ? (23, 112) : (0x34, 0xFA));
			var f = 39;
			var i = 31;
			var j = ((78., 0x88) > 67 ? (0x244, 108) : (5., 39.0E1) < 0x13A ? (8.71E2, 107.) : (0x164, 0x9A));
			var l = 8;
			l1.rects = [
				[
					[f0, l, j, i],
					[f0, f, j, i],
					[d, l, j, i],
					[d, f, j, i]
				],
				[
					[k0, k0, b, a]
				]
			];
		},
		l1 = {};
	n0();
	i0();
	H0();
	l1.actions = {
		start: {
			defaultAnim: {
				loop: b0,
				frames: [
					[k0, k0, k0, k0],
					[l0, k0, k0, k0]
				]
			}
		},
		end: {
			defaultAnim: {
				loop: b0,
				frames: [
					[w0, k0, k0, k0],
					[o0, k0, k0, k0]
				]
			}
		},
		welcome: {
			defaultAnim: {
				loop: b0,
				frames: [
					[f0, k0, k0, k0]
				]
			}
		}
	};
	A0(l1);
})(window);
(function($) {
	var b0 = (0x22B > (0xB, 73.7E1) ? 0x231 : 1.3860E3 >= (6.34E2, 1.372E3) ? (0x115, 7) : (99., 23.)),
		f0 = ((9.71E2, 0x3B) < 0x235 ? (0x1EF, 6) : (145, 0x177)),
		l0 = ((8.8E2, 0x119) < 103. ? 679 : (1.90E1, 5.46E2) <= 73.9E1 ? (123, 5) : (7.9E2, 69.60E1) > (14.01E2, 1.155E3) ? (11.91E2, 679) : (2.19E2, 0x14A)),
		o0 = ((32, 0x150) > 20. ? (25, true) : (1.079E3, 0x10C) < 143 ? 162 : 1. > (0x12F, 3.530E2) ? 25. : (147.9E1, 0x1B0)),
		w0 = ((15., 0x1A8) < (1, 0x17) ? 41 : 9.16E2 < (5.03E2, 108.) ? (0x14F, "y") : 0x1B9 >= (8.86E2, 13.9E1) ? (5, 4) : (141., 10.)),
		k0 = (27. < (0x59, 7.15E2) ? (1.3760E3, 3) : 97.5E1 <= (0x1D9, 0x162) ? (1.2690E3, 'W') : (4, 0x132) >= 1.124E3 ? (0x108, 0x40) : (0x8E, 85.)),
		n0 = ((0xCC, 0x1CF) <= 0x184 ? 44 : (0x13C, 1.312E3) >= (14., 105.) ? (36, 83) : (3.7E2, 0x251)),
		H0 = ((106, 0xF1) > 18. ? (73, 2) : 1.217E3 <= (0x1AD, 11.43E2) ? 31. : (0xEF, 7.32E2)),
		A0 = ((114., 0x73) >= 8.52E2 ? (27., 84.) : (71., 119) > (0xC4, 0x1F5) ? (0x14, 58.) : (0x241, 63.) <= (9.94E2, 130.) ? (57., 1) : (5, 0x74)),
		i0 = (12.200E2 < (0x236, 0x12C) ? 'Q' : 117.4E1 < (0xD0, 128.) ? 122.4E1 : 73.8E1 > (0x1EB, 0x63) ? (5.75E2, 0) : (31., 103.10E1)),
		l1 = function() {
			var a = 'start';
			var b = 'levelBox';
			var d = 'showMoneyBtn';
			var f = 'shopBtn';
			var i = 'map';
			X0.imageNames = [i, f, d, b, a];
		},
		o1 = function(a) {
			$.me.mapSprites = a;
		},
		M0 = function() {
			var a = 57;
			var b = 33;
			var d = 54;
			var f = 279;
			var i = 158;
			var j = ((41.90E1, 1.143E3) > (12.5E1, 0x1C3) ? (50., 85) : 0x211 >= (95.0E1, 6.33E2) ? 142 : (0x14F, 0x1E9));
			var l = 84;
			var s = 55;
			var r = 296;
			var u = 263;
			X0.frames = [{
				frameArray: [
					[i0, i0, -u, -r, i0]
				]
			}, {
				frameArray: [
					[A0, i0, -s, -l, i0]
				]
			}, {
				frameArray: [
					[H0, i0, -j, -n0, i0]
				]
			}, {
				frameArray: [
					[k0, i0, -i, -f, i0]
				]
			}, {
				frameArray: [
					[w0, k0, -d, -b, i0]
				]
			}, {
				frameArray: [
					[w0, A0, -d, -b, i0]
				]
			}, {
				frameArray: [
					[w0, H0, -a, -b, i0]
				]
			}, {
				frameArray: [
					[w0, i0, -a, -b, i0]
				]
			}];
		},
		g1 = function() {
			var a = 112;
			var b = 8;
			var d = 31;
			var f = 108;
			var i = 39;
			var j = 275;
			var l = 317;
			var s = 169;
			var r = ((0x150, 125) < 42.7E1 ? (25., 114) : 7.38E2 <= (9.60E1, 11) ? 88. : (59., 1.282E3));
			var u = 294;
			var e0 = 500;
			X0.rects = [
				[
					[i0, i0, e0, u]
				],
				[
					[i0, i0, r, n0]
				],
				[
					[i0, i0, s, n0]
				],
				[
					[i0, i0, l, j]
				],
				[
					[w0, i, f, d],
					[w0, b, f, d],
					[a, i, f, d],
					[a, b, f, d]
				]
			];
		},
		X0 = {};
	l1();
	g1();
	M0();
	X0.actions = {
		map: {
			defaultAnim: {
				loop: o0,
				frames: [
					[i0, i0, i0, i0]
				]
			}
		},
		shopBtn: {
			defaultAnim: {
				loop: o0,
				frames: [
					[A0, i0, i0, i0]
				]
			}
		},
		showMoneyBtn: {
			defaultAnim: {
				loop: o0,
				frames: [
					[H0, i0, i0, i0]
				]
			}
		},
		levelBox: {
			defaultAnim: {
				loop: o0,
				frames: [
					[k0, i0, i0, i0]
				]
			}
		},
		start: {
			defaultAnim: {
				loop: o0,
				frames: [
					[w0, i0, i0, i0],
					[l0, i0, i0, i0]
				]
			}
		},
		end: {
			defaultAnim: {
				loop: o0,
				frames: [
					[f0, i0, i0, i0],
					[b0, i0, i0, i0]
				]
			}
		}
	};
	o1(X0);
})(window);
(function($) {
	var y3 = (52. >= (126.10E1, 17) ? (124, 74) : (1.286E3, 0x7) > 102. ? 13.700E2 : (109, 103.)),
		r0 = (38.6E1 >= (54., 59.80E1) ? 261 : (7.01E2, 52.90E1) > (0xFC, 0x17E) ? (0x208, 72) : (0x1F5, 74)),
		C7 = ((44., 47.90E1) > (0x188, 117.0E1) ? 530 : (144., 7.29E2) >= 9E0 ? (2.90E1, 71) : (122., 41.6E1) < (77., 140) ? (9.76E2, 0x21C) : (1.408E3, 31)),
		J6 = (73 <= (98, 32) ? (5.810E2, 196) : 8.4E1 <= (8.22E2, 110.) ? (1.68E2, 69) : (61, 138.) >= (139., 1.315E3) ? 0x1C0 : (1.466E3, 11.55E2)),
		I4 = (47 >= (87, 135.8E1) ? (0xA, "L") : (0x187, 119.30E1) < (0x164, 103.60E1) ? 43 : (119., 67) > (114.30E1, 58) ? (128, 62) : (0x1EC, 90)),
		B3 = ((0x1C, 147.3E1) < 11.55E2 ? (0xED, 197) : 7 > (4.560E2, 0x18C) ? (3.86E2, "I") : 0x90 <= (103., 108.4E1) ? (0x1D5, 61) : (96.2E1, 0x4C)),
		H2 = ((0x129, 115.) >= 96.2E1 ? (0x16C, 12.14E2) : 1.074E3 >= (11.700E2, 0xF2) ? (12.040E2, 60) : 0x11A > (0x97, 0x189) ? (94.2E1, 'G') : (6.15E2, 5.)),
		I6 = ((0x136, 74.) <= (5.18E2, 72.7E1) ? (1.172E3, 45) : (0x1F5, 34)),
		c7 = (3.320E2 >= (44., 62.80E1) ? 171 : (128, 0xC7) > 0x1ED ? (0x210, 119.) : (79, 0x26) > (14.93E2, 26) ? (0x81, 43) : (0x15F, 1.499E3)),
		V5 = (8.92E2 >= (34.9E1, 0x1C0) ? (14, 29) : (21, 23.)),
		A7 = 24,
		m1 = true,
		W5 = 32,
		o3 = 26,
		j6 = 34,
		v1 = 70,
		M6 = 73,
		L6 = (23.20E1 >= (2.77E2, 0x13C) ? "0" : 0x238 > (1.077E3, 16.) ? (61.80E1, 28) : 0x21E <= (10.99E2, 69.) ? 128 : (133., 78)),
		j4 = 55,
		K6 = 37,
		J5 = (101. < (48, 86.80E1) ? (32., 128) : (110, 1.16E3)),
		K4 = 53,
		W3 = 54,
		c5 = 114,
		N6 = (96. <= (81., 86.30E1) ? (91., 39) : (20.0E1, 120.0E1)),
		Y5 = 31,
		Z5 = 27,
		Z3 = 97,
		X3 = 41,
		L4 = 87,
		Y1 = 86,
		a2 = ((9.16E2, 1.326E3) <= 0x239 ? (1.393E3, "A") : (18., 125.) <= 15.3E1 ? (134, 98) : (29, 0x226)),
		a5 = 94,
		o = 33,
		F7 = 46,
		Q6 = 44,
		P6 = 83,
		d7 = 23,
		i3 = 84,
		X7 = 90,
		Y7 = 42,
		x8 = ((65, 44) < 107 ? (0x12B, 75) : (0x256, 82.30E1) <= 0x4E ? 0.128 : (71, 0x1EB)),
		k6 = 40,
		D7 = 17,
		y8 = 48,
		e7 = 18,
		G7 = (0xD1 > (40., 0x236) ? (45., "R") : 0xED > (0xC0, 0x1C) ? (7.76E2, 95) : (19., 0x89) > 141. ? (56.1E1, 102.) : (129, 39.)),
		Z7 = 52,
		q2 = 22,
		a8 = ((84, 93) > (100.80E1, 68.9E1) ? 75 : (109, 145.) < (1.069E3, 1.065E3) ? (0x1CC, 21) : (0x66, 117.) < (0xED, 44) ? 140 : (0x94, 0x22A)),
		t5 = 99,
		f5 = 93,
		p3 = (9.20E1 >= (0x1A6, 0x1EB) ? 'x' : 7. <= (6.0E1, 38.6E1) ? (0x13D, 50) : (1.346E3, 3.12E2) < (1.051E3, 85) ? 224 : (0x151, 0x1D7)),
		b6 = (121 < (0x3E, 64.0E1) ? (2.780E2, 19) : (1.133E3, 1.289E3)),
		n6 = 14,
		v2 = ((0x232, 11) > 0x21B ? 203 : 0x102 >= (118, 0xB0) ? (0x214, 47) : (0x36, 9.790E2) >= (8.85E2, 98.60E1) ? 0x72 : (49., 0x234)),
		m6 = (53 < (107., 0x4E) ? (119, 13) : (0xCD, 0x1FB)),
		d5 = 12,
		a4 = 49,
		C3 = 51,
		m4 = (24. <= (41.90E1, 140.) ? (2.49E2, 16) : (0x1EF, 0x1D6) <= (0x100, 87.) ? 80.10E1 : (93.60E1, 4.2E2)),
		N4 = ((81., 1.36E2) >= (0x13E, 7.75E2) ? (37.7E1, 349) : 107. > (3.280E2, 14.8E2) ? (0xCC, 0x1E8) : (0x8F, 53.) > 24 ? (72., 36) : (6.66E2, 88.80E1)),
		U1 = ((130., 0x13F) < (48., 0x78) ? 14 : (96, 3.35E2) < (8.39E2, 8E0) ? 0xF7 : 142. >= (21.8E1, 52.) ? (2, 35) : (2.45E2, 13.34E2)),
		w2 = 101,
		c4 = 38,
		h0 = 20,
		R0 = 25,
		m = 30,
		x0 = 15,
		k4 = 480,
		u5 = 11,
		Q2 = 59,
		O4 = (9.98E2 > (1.432E3, 0xED) ? (14.49E2, 66) : 24 >= (0x187, 50.) ? "D" : (135.3E1, 1.19E3)),
		N0 = 10,
		v5 = 9,
		K5 = 8,
		V1 = 5,
		R1 = 4,
		C0 = 67,
		v = ((0x3, 105) < (43, 1.191E3) ? (25, 7) : 0x1FB >= (0x14E, 130.8E1) ? (0x46, 140.) : (0x58, 9.57E2)),
		J0 = 58,
		q6 = 68,
		q3 = 6,
		T6 = ((62, 52) < 0x210 ? (0xE4, 63) : (38.1E1, 134.) >= 11.67E2 ? null : (14.64E2, 43.)),
		c3 = 56,
		s6 = 64,
		A1 = 3,
		j5 = 57,
		y2 = 65,
		i5 = 2,
		H1 = 1,
		g = 0,
		f7 = function() {
			var a = 222;
			var b = (0xA7 <= (0x228, 0x18B) ? (14.51E2, 352) : (0xF, 0x9C));
			var d = 197;
			var f = 124;
			var i = 115;
			var j = 123;
			var l = ((0x197, 0x1CE) <= (0x212, 0x173) ? 'E' : (132, 0xDC) < (6.80E1, 1.189E3) ? (82, 110) : (0x12E, 19));
			var s = 118;
			var r = 120;
			var u = 172;
			var e0 = 88;
			var d0 = 96;
			var b0 = 103;
			var f0 = 102;
			var l0 = 100;
			var o0 = 430;
			var w0 = ((0x206, 4.17E2) <= 13.49E2 ? (28.90E1, 294) : 0xAA >= (115, 141.9E1) ? (100, 2.06E2) : (45.7E1, 55));
			var k0 = 227;
			S6.frames = [{
				frameArray: [
					[g, g, -k0, -w0, g]
				]
			}, {
				frameArray: [
					[H1, i5, -y2, -j5, g]
				]
			}, {
				frameArray: [
					[H1, A1, -s6, -c3, g]
				]
			}, {
				frameArray: [
					[H1, g, -y2, -c3, g]
				]
			}, {
				frameArray: [
					[H1, H1, -T6, -c3, g]
				]
			}, {
				frameArray: [
					[H1, q3, -q6, -J0, g]
				]
			}, {
				frameArray: [
					[H1, v, -C0, -c3, g]
				]
			}, {
				frameArray: [
					[H1, R1, -C0, -j5, g]
				]
			}, {
				frameArray: [
					[H1, V1, -y2, -c3, g]
				]
			}, {
				frameArray: [
					[H1, K5, -q6, -j5, g]
				]
			}, {
				frameArray: [
					[H1, v5, -y2, -j5, g]
				]
			}, {
				frameArray: [
					[H1, N0, -O4, -Q2, g]
				]
			}, {
				frameArray: [
					[H1, u5, -y2, -j5, g]
				]
			}, {
				frameArray: [
					[i5, g, -o0, -k4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, N0, -m, -l0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, K5, -c4, -f0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, v, -c4, -w2, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, V1, -U1, -b0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, q3, -N4, -f0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, m4, -C3, -w2, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, u5, -a4, -b0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, d5, -a4, -b0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, m6, -a4, -w2, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, x0, -v2, -b0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, n6, -a4, -l0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, b6, -p3, -f5, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, h0, -C3, -t5, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, a8, -a4, -t5, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, q2, -Z7, -G7, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, e7, -y8, -l0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, D7, -C3, -t5, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, A1, -k6, -x8, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, H1, -Y7, -X7, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, R1, -Y7, -i3, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, d7, -a4, -P6, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, g, -Q6, -d0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, i5, -F7, -e0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[A1, v5, -o, -a5, g]
				]
			}, {
				frameArray: [
					[R1, H1, -a2, -m4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[H1, d5, -y2, -O4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[H1, m6, -O4, -C0, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[V1, g, -k6, -P6, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, N0, -Y1, -u, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, d5, -k6, -L4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, u5, -k6, -L4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, n6, -X3, -Y1, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, m6, -X3, -Y1, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, K5, -e7, -c4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, v5, -b6, -c4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, g, -Z3, -i3, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, q3, -x0, -N4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, v, -Z5, -X3, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, A1, -x0, -Y5, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[q3, g, -o0, -k4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, m4, -k6, -L4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[R1, x0, -N6, -L4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[v, g, -r, -j5, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[v, H1, -c5, -j5, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[v, i5, -s, -W3, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[v, A1, -l, -K4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[v, R1, -j, -K4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[v, V1, -i, -K4, g]
				]
			}, {
				frameArray: [
					[K5, g, -f, -L4, g]
				]
			}, {
				frameArray: [
					[K5, H1, -J5, -X3, g]
				]
			}, {
				frameArray: [
					[v5, g, -o0, -k4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[H1, n6, -C0, -W3, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[H1, x0, -s6, -W3, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[N0, g, -Q2, -c4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[N0, H1, -J0, -K6, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[u5, g, -v2, -f5, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[d5, g, -d, -e7, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[m6, g, -b, -a, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[H1, m4, -O4, -j4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[H1, D7, -O4, -W3, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[H1, e7, -T6, -K4, g]
				]
			}, {
				actRect: [-x0, -m, m, m],
				bodyRect: [-N0, -R0, h0, h0],
				frameArray: [
					[H1, b6, -T6, -K4, g]
				]
			}];
		},
		b8 = function(a) {
			$.me.uiSprites = a;
		},
		p6 = function() {
			var a = 'loading2';
			var b = 'loading1';
			var d = 'coins_2';
			var f = 'coins_1';
			var i = 'help';
			var j = 'loading';
			var l = 'welcomeBtn';
			var s = 'welcome';
			var r = 'passLevel';
			var u = 'control';
			var e0 = 'equip';
			var d0 = 'shop';
			var b0 = 'btn';
			var f0 = 'msgBox';
			S6.imageNames = [f0, b0, d0, e0, u, r, s, l, j, i, f, d, b, a];
		},
		W0 = function() {
			var a = 229;
			var b = 235;
			var d = 238;
			var f = 230;
			var i = 234;
			var j = 239;
			var l = ((0x14F, 123) < (0x256, 29) ? (0x238, 0xB6) : (31, 3.) < (67.3E1, 0x125) ? (80., 81) : (9.370E2, 0x59));
			var s = 497;
			var r = 498;
			var u = 223;
			var e0 = 595;
			var d0 = 226;
			var b0 = (115 > (25, 83) ? (23.5E1, 396) : (0x175, 3.1E1));
			var f0 = 173;
			var l0 = 142;
			var o0 = 481;
			var w0 = 425;
			var k0 = 337;
			var n0 = 341;
			var H0 = 288;
			var A0 = 287;
			var i0 = 243;
			var l1 = 106;
			var o1 = 85;
			var M0 = 190;
			var g1 = 603;
			var X0 = 405;
			var B1 = (69 >= (0x18A, 10.46E2) ? (5.5E2, "H") : (113, 0x8C) >= 4.24E2 ? (115., "H") : (36., 24.) <= (0x193, 6.2E1) ? (1.0170E3, 250) : (0x34, 52.80E1));
			var M1 = 402;
			var J1 = ((24.1E1, 42.) >= (27.90E1, 116.10E1) ? (0x24C, 802) : (13., 21.70E1) > (1.311E3, 50.) ? (91.80E1, 479) : (30.8E1, 0xE));
			var p1 = 401;
			var D1 = 598;
			var m2 = 263;
			var L1 = 261;
			var F1 = 589;
			var S1 = (0x90 <= (142, 9.96E2) ? (107, 260) : (29.90E1, 6.62E2) < (1.314E3, 61.2E1) ? 677 : (129., 41.1E1));
			var I1 = 365;
			var e2 = 258;
			var n2 = 254;
			var f1 = ((8.36E2, 0x7A) > (5.23E2, 1.17E2) ? (77, 257) : (58, 10.13E2));
			var i1 = ((78., 0xD) >= 59 ? 'G' : 9.42E2 >= (0x100, 129.70E1) ? 77 : (108, 15) < 0x22 ? (148.70E1, 144) : (61.2E1, 9.790E2));
			var U2 = 135;
			var h3 = 530;
			var W4 = 78;
			var U4 = 116;
			var B4 = ((48.90E1, 1.186E3) < 0x2F ? (6.4E1, 0x10C) : 55. >= (0x254, 106) ? 'K' : (0x7F, 0x22F) >= (101., 19.) ? (0x1E2, 213) : (0xE, 0x1DC));
			var v3 = 82;
			var C4 = 126;
			var s5 = (22.3E1 > (147.0E1, 0x1D8) ? (0x1D, 0x90) : 0x9E > (0xA9, 71.0E1) ? (0x15, 2.030E2) : 0x217 < (3.530E2, 1.147E3) ? (0x1BC, 435) : (0x31, 111.));
			var X4 = 80;
			var E5 = 125;
			var r5 = 320;
			var E1 = (0x219 >= (109., 0xA1) ? (19.3E1, 531) : (56, 51.));
			var Q3 = ((7, 147.) <= (0x3C, 0x91) ? (0x203, 0x104) : (93.60E1, 1.3E1) >= 106 ? (68., 7500) : (0x12A, 16.8E1) < (1.23E2, 0xE2) ? (0x139, 275) : (58., 0x107));
			var F4 = 404;
			var T5 = 89;
			var E4 = 159;
			var P1 = 860;
			var O2 = 525;
			var N2 = ((41., 0x249) <= (0x140, 140) ? (43., "r") : (3., 8) > (0x1E, 15.20E1) ? 'r' : (74., 0x1A6) >= (0x24A, 90.) ? (102, 468) : (0x9, 14.));
			var T3 = 469;
			var R3 = ((0x12, 80) >= 56.80E1 ? (0x173, "Q") : (7.850E2, 1.3820E3) > (35, 0x12D) ? (41.2E1, 407) : (15.60E1, 43));
			var L2 = 134;
			var g2 = 335;
			var p2 = 133;
			var w3 = 336;
			var U3 = 113;
			var G5 = 169;
			var H5 = ((3.22E2, 0x79) < (0x232, 19.) ? (0x208, 910) : (118., 0x1EF) <= 4.71E2 ? 910 : (71.2E1, 0xE3) >= 7.30E1 ? (96.4E1, 170) : (0xB5, 134.70E1));
			var G1 = 224;
			var c1 = 131;
			var z3 = 225;
			var n3 = 129;
			var W2 = 132;
			var X1 = 130;
			var C1 = 280;
			var u1 = 291;
			var H4 = 467;
			S6.rects = [
				[
					[g, g, H4, u1]
				],
				[
					[H1, C1, X1, c3],
					[W2, C1, n3, c3],
					[H1, z3, c1, c3],
					[W2, G1, c1, W3],
					[-H1, H5, W2, j4],
					[c1, G5, c1, W3],
					[g, U3, c1, c3],
					[c1, U3, W2, W3],
					[-H1, Q2, W2, j4],
					[c1, Q2, W2, W3],
					[g, i5, X1, j5],
					[c1, i5, c1, c3],
					[-H1, w3, p2, y2],
					[c1, g2, L2, O4],
					[i5, R3, c1, W3],
					[L2, R3, c1, K4],
					[A1, T3, X1, K4],
					[p2, N2, n3, C3],
					[V1, O2, J5, C3],
					[L2, O2, J5, C3]
				],
				[
					[g, g, P1, k4]
				],
				[
					[Q6, V1, a2, Y1],
					[E4, d5, a2, T5],
					[F4, x0, a2, L4],
					[Q3, L6, a2, O4],
					[E1, L6, a2, M6],
					[r5, E5, X4, t5],
					[s5, C4, v3, a2],
					[B4, J5, i3, t5],
					[U4, L2, W4, a2],
					[h3, L2, v1, f5],
					[j6, U2, s6, t5],
					[i1, f1, a2, a2],
					[n2, e2, a2, t5],
					[I1, S1, a2, a2],
					[F1, S1, a2, t5],
					[N2, L1, a2, a2],
					[o3, m2, a2, a2],
					[D1, p1, a2, f5],
					[J1, M1, a2, Z3],
					[n6, F4, a2, X7],
					[L2, F4, a2, G7],
					[B1, X0, Z3, a5],
					[I1, X0, a2, X7],
					[g1, i1, G7, q6]
				],
				[
					[m, K5, M0, o1],
					[h0, l1, M0, x0],
					[i0, Q2, m, m],
					[i0, f5, m, m],
					[A0, Q2, m, m],
					[H0, f5, m, m],
					[n0, v2, W5, j6],
					[k0, L4, j5, k6],
					[w0, C0, a4, a4],
					[o0, C0, p3, a4],
					[A1, l0, f0, f0],
					[b0, W2, o1, i3],
					[b0, d0, o1, i3],
					[e0, W2, o1, i3],
					[e0, u, o1, i3],
					[r, W2, i3, i3],
					[s, d0, i3, i3]
				],
				[
					[g, g, l, P6]
				],
				[
					[g, g, P1, k4]
				],
				[
					[-R1, -H1, j, C3],
					[i, -H1, f, p3],
					[-R1, a4, d, Z7],
					[b, p3, a, C3],
					[-R1, w2, d, C3],
					[b, w2, a, C3]
				],
				[
					[-A1, -A1, n2, Y1],
					[-A1, P6, n2, m4]
				],
				[
					[g, g, P1, k4]
				],
				[
					[g, g, c5, U1],
					[c5, g, c5, U1]
				],
				[
					[g, g, G7, f5]
				],
				[
					[g, g, b0, n6]
				],
				[
					[g, g, P1, k4]
				]
			];
		},
		S6 = {};
	p6();
	W0();
	f7();
	S6.actions = {
		msgBox: {
			defaultAnim: {
				loop: m1,
				frames: [
					[g, g, g, g]
				]
			}
		},
		yesBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[H1, g, g, g],
					[i5, g, g, g]
				]
			}
		},
		noBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[A1, g, g, g],
					[R1, g, g, g]
				]
			}
		},
		startBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[V1, g, g, g],
					[q3, g, g, g]
				]
			}
		},
		continueBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[v, g, g, g],
					[K5, g, g, g]
				]
			}
		},
		mapBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[v5, g, g, g],
					[N0, g, g, g]
				]
			}
		},
		purchaseBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[u5, g, g, g],
					[d5, g, g, g]
				]
			}
		},
		shop: {
			defaultAnim: {
				loop: m1,
				frames: [
					[m6, g, g, g],
				]
			}
		},
		shop_item_gun: {
			defaultAnim: {
				loop: m1,
				frames: [
					[n6, g, g, g],
					[x0, g, g, g],
					[m4, g, g, g],
					[D7, g, g, g],
					[e7, g, g, g]
				]
			}
		},
		shop_item_sword: {
			defaultAnim: {
				loop: m1,
				frames: [
					[b6, g, g, g],
					[h0, g, g, g],
					[a8, g, g, g],
					[q2, g, g, g],
					[d7, g, g, g],
					[A7, g, g, g]
				]
			}
		},
		shop_item_shield: {
			defaultAnim: {
				loop: m1,
				frames: [
					[R0, g, g, g],
					[o3, g, g, g],
					[Z5, g, g, g],
					[L6, g, g, g],
					[V5, g, g, g],
					[m, g, g, g]
				]
			}
		},
		shop_item_armour: {
			defaultAnim: {
				loop: m1,
				frames: [
					[Y5, g, g, g],
					[W5, g, g, g],
					[o, g, g, g],
					[j6, g, g, g],
					[U1, g, g, g],
					[N4, g, g, g]
				]
			}
		},
		shop_item_hp: {
			defaultAnim: {
				loop: m1,
				frames: [
					[K6, g, g, g],
				]
			}
		},
		shop_current_hp: {
			defaultAnim: {
				loop: m1,
				frames: [
					[c4, g, g, g],
				]
			}
		},
		shopBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[N6, g, g, g],
					[k6, g, g, g]
				]
			}
		},
		passLevel: {
			defaultAnim: {
				loop: m1,
				frames: [
					[X3, g, g, g],
				]
			}
		},
		controlBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[Y7, g, g, g],
				]
			}
		},
		attack_sword_btn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[c7, g, g, g],
					[Q6, g, g, g]
				]
			}
		},
		rollBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[I6, g, g, g],
					[F7, g, g, g]
				]
			}
		},
		change_sword_btn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[v2, g, g, g],
				]
			}
		},
		change_gun_btn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[y8, g, g, g],
				]
			}
		},
		face: {
			defaultAnim: {
				loop: m1,
				frames: [
					[a4, g, g, g],
				]
			}
		},
		gold: {
			defaultAnim: {
				loop: m1,
				frames: [
					[p3, g, g, g],
				]
			}
		},
		kill: {
			defaultAnim: {
				loop: m1,
				frames: [
					[C3, g, g, g],
				]
			}
		},
		pauseBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[Z7, g, g, g],
				]
			}
		},
		welcome: {
			defaultAnim: {
				loop: m1,
				frames: [
					[K4, g, g, g],
				]
			}
		},
		attack_gun_btn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[W3, g, g, g],
					[j4, g, g, g]
				]
			}
		},
		welcome_start_btn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[c3, g, g, g],
					[j5, g, g, g]
				]
			}
		},
		welcome_exit_btn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[J0, g, g, g],
					[Q2, g, g, g]
				]
			}
		},
		welcome_help_btn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[H2, g, g, g],
					[B3, g, g, g]
				]
			}
		},
		loading: {
			defaultAnim: {
				loop: m1,
				frames: [
					[I4, g, g, g],
				]
			}
		},
		loading_line: {
			defaultAnim: {
				loop: m1,
				frames: [
					[T6, g, g, g],
				]
			}
		},
		help: {
			defaultAnim: {
				loop: m1,
				frames: [
					[s6, g, g, g],
				]
			}
		},
		btnExit: {
			defaultAnim: {
				loop: m1,
				frames: [
					[y2, g, g, g],
					[O4, g, g, g]
				]
			}
		},
		coins_1: {
			defaultAnim: {
				loop: m1,
				frames: [
					[C0, g, g, g],
					[q6, g, g, g]
				]
			}
		},
		coins_2: {
			defaultAnim: {
				loop: m1,
				frames: [
					[J6, g, g, g]
				]
			}
		},
		loading1: {
			defaultAnim: {
				loop: m1,
				frames: [
					[v1, g, g, g],
				]
			}
		},
		loading2: {
			defaultAnim: {
				loop: m1,
				frames: [
					[C7, g, g, g]
				]
			}
		},
		enterBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[r0, g, g, g],
					[M6, g, g, g]
				]
			}
		},
		returnBtn: {
			defaultAnim: {
				loop: m1,
				frames: [
					[y3, g, g, g],
					[x8, g, g, g]
				]
			}
		},
	};
	b8(S6);
})(window);
(function($) {
	var d3 = (0x1B6 <= (0x19E, 22.) ? (61., "D") : (141., 0xBF) > (11.83E2, 26.5E1) ? (49., 0x10) : (0xA8, 73) >= 37. ? (6.7E1, true) : (0x32, 0x28)),
		e6 = ((105, 8.700E2) >= 6.80E1 ? (2.79E2, 118) : (64., 60.7E1) < 74. ? "2d" : (1.242E3, 15.0E1)),
		X2 = ((1.1E2, 127) >= (129.70E1, 68.8E1) ? (130., 112.) : (135, 0xB5) <= (52.30E1, 11.9E2) ? (5.600E2, 67) : (0x1C3, 0x125)),
		K0 = ((81, 17.) < 3.7E1 ? (0xFD, 132) : (119.9E1, 0x1B4) > (54.5E1, 69.10E1) ? "K" : (0x33, 0x222)),
		m8 = (0x7F <= (82, 24) ? 1534 : 146 <= (78., 1.41E3) ? (100., 92) : (147.4E1, 104.9E1)),
		o7 = ((0xCE, 14.07E2) < (84., 0x219) ? 10.44E2 : (0x1CD, 0x8) <= 83 ? (0x1B9, 108) : (57., 0x13) >= 0x61 ? (96, 9.15E2) : (0x196, 6.61E2)),
		v6 = (143. <= (26., 1.49E2) ? (10.41E2, 111) : (2, 0xF7) > 13.870E2 ? (49, 88.0E1) : (7.45E2, 0xE6)),
		g9 = ((0x1D3, 101) > 14.530E2 ? 'u' : 0x151 <= (112.2E1, 18) ? 'u' : 0x127 <= (101, 104.80E1) ? (0x78, 128) : (73., 88.5E1)),
		O7 = ((15, 100.10E1) <= (13.540E2, 14.10E1) ? (82., 531) : 0x235 <= (0x1E4, 1.484E3) ? (0xB9, 129) : (131., 8.53E2)),
		J8 = (116 >= (1.19E2, 1.1340E3) ? 4.48E2 : 0xC <= (59, 60) ? (18.3E1, 95) : (1.299E3, 0x23)),
		K9 = 198,
		w9 = 161,
		B6 = ((120., 147) < 5.3E2 ? (6.9E1, 120) : (146, 0xE7) < 93. ? 38. : (110.0E1, 14.47E2) <= (17.2E1, 129.6E1) ? (29., 'z') : (0x1B5, 53)),
		k9 = 99,
		V6 = 38,
		y9 = 119,
		v9 = ((28.90E1, 0x17F) >= (0x1E7, 1.19E3) ? 't' : (0xF, 1.115E3) >= 0x184 ? (1.218E3, 124) : (62, 0x18F)),
		z6 = (0x1B <= (47., 0xBC) ? (0x69, 37) : (144.1E1, 10.200E2)),
		m5 = 24,
		N9 = 136,
		r7 = 130,
		s8 = 114,
		q8 = 110,
		j9 = 48,
		p8 = 45,
		q4 = 87,
		l5 = 81,
		r8 = 106,
		M8 = 104,
		y6 = 34,
		e4 = (78.10E1 >= (31, 2.0E1) ? (1.018E3, 56) : (0x1F0, 99.)),
		L9 = 59,
		R7 = 35,
		h9 = 107,
		W6 = 103,
		O9 = ((0x123, 0x179) > 0x10C ? (0x209, 126) : (14.20E1, 57.90E1) <= 0x20F ? (11.620E2, 399) : 0x16B >= (79.2E1, 10.64E2) ? 0x126 : (0x1C5, 0x236)),
		T7 = 84,
		p5 = ((16., 0x24E) <= 0x178 ? 220 : (12.22E2, 54) <= (11., 7.22E2) ? (36, 58) : (6.33E2, 69.3E1) <= 0xC0 ? (1.408E3, 220) : (0x7E, 10.20E1)),
		u8 = 65,
		Q4 = ((0x68, 10.) >= (9.98E2, 106.30E1) ? (0xC9, 0x247) : 122.10E1 >= (0xF9, 9.1E1) ? (7.5E2, 133) : (103.2E1, 65) <= (1.67E2, 56.) ? 137 : (1.431E3, 1.344E3)),
		o5 = 50,
		S5 = ((1E0, 0xDA) >= (2.93E2, 0x145) ? (26., "r") : (0x7F, 0x50) < (50., 30) ? 0x1D8 : 113 < (0x25, 1.42E2) ? (12.65E2, 17) : (76, 13.33E2)),
		y5 = 71,
		S7 = 117,
		g6 = ((0x1F9, 0xCC) < 6. ? 0x1EA : (8.27E2, 69) <= (0x15F, 7.09E2) ? (116., 83) : (46., 130.)),
		z9 = 91,
		Q5 = 72,
		C6 = 31,
		f6 = 82,
		t7 = 33,
		t8 = 93,
		z2 = 14,
		n5 = (0xF0 < (146.0E1, 1.121E3) ? (0x6, 16) : 0x144 <= (0x14F, 0x6) ? (0x204, 's') : (31, 36.) > 59.40E1 ? (8.06E2, 0x149) : (101., 0x5D)),
		E3 = 85,
		N5 = 36,
		P5 = 49,
		Z6 = 47,
		I3 = 54,
		v4 = 60,
		R4 = 68,
		x7 = (115 < (60, 104.) ? 'Q' : (0x14E, 0x116) <= (127, 10.70E1) ? (60., 0x17D) : 82. <= (0xB, 1.186E3) ? (76, 57) : (0x212, 10.)),
		Q9 = 165,
		H3 = 63,
		t4 = 79,
		U7 = 43,
		T2 = 41,
		C9 = 177,
		e3 = 89,
		F3 = 80,
		s4 = 55,
		B2 = 13,
		r4 = 46,
		g4 = (149 > (9.16E2, 101) ? (139, 18) : 76. >= (15., 140.) ? (0x1B9, 794) : (8.32E2, 2.6E1)),
		k3 = 10,
		j3 = ((93.0E1, 0x3) < 0x19B ? (14.450E2, 90) : (132., 65)),
		Y6 = 64,
		R2 = 78,
		t3 = 53,
		s2 = 77,
		A5 = 44,
		b2 = 28,
		w7 = 123,
		u7 = 135,
		B9 = 178,
		F2 = 20,
		g3 = ((9.34E2, 39) < (0x9E, 138) ? (7, 19) : (0xE, 132.9E1)),
		y4 = 86,
		q5 = 70,
		E2 = 52,
		O1 = 75,
		l3 = 73,
		h4 = (38. <= (100, 1.201E3) ? (6, 26) : (55., 0x22F) >= (116, 82.4E1) ? 0x16B : (134., 95.80E1)),
		B5 = 121,
		Z2 = 29,
		E9 = 158,
		h2 = 88,
		w4 = 69,
		G0 = 2,
		Q0 = ((51., 0x147) >= 64 ? (0x1B5, 7) : (140., 5.66E2)),
		L3 = 76,
		K3 = 42,
		T4 = 146,
		f3 = 39,
		Z0 = 5,
		E6 = 122,
		I2 = 51,
		s1 = 3,
		C2 = 74,
		j2 = ((84.80E1, 85.) > 57.1E1 ? (0x20D, 60.) : 32.2E1 < (0xF2, 7.68E2) ? (0x23F, 25) : (81.0E1, 0x18D)),
		F0 = 4,
		a1 = 6,
		d2 = 27,
		a3 = ((64, 6.600E2) <= (132, 60.30E1) ? 657 : 6.390E2 <= (11, 0x18) ? (13, 81.) : (12.85E2, 9.55E2) > 96. ? (0x176, 11) : (61., 97)),
		k2 = 12,
		m3 = ((48, 55) > 46 ? (5.25E2, 134) : (32, 0x175)),
		K2 = 40,
		R9 = 159,
		N3 = 21,
		T0 = 8,
		U0 = 1,
		q0 = 9,
		d1 = 22,
		c = 0,
		z1 = (4.3E1 <= (51., 76.) ? (91., 62) : (0x12E, 37.)),
		D0 = 66,
		r1 = ((0x41, 25.) >= 0x18F ? (5.770E2, "o") : 0x95 > (0x12D, 0x24) ? (53.5E1, 32) : (42.80E1, 7.7E1)),
		c0 = 30,
		j1 = 15,
		W9 = function() {
			var a = 'player_bullet';
			var b = 'shoes';
			var d = 'clothes';
			var f = 'godet';
			var i = 'armour';
			var j = 'hat';
			var l = 'hood';
			var s = 'gun';
			var r = 'shield';
			var u = 'sword';
			var e0 = 'player';
			m9.imageNames = [e0, u, r, s, l, j, i, f, d, b, a];
		},
		Z9 = function() {
			var a = (93. < (15, 128.1E1) ? (1.201E3, 180) : 45. >= (4.11E2, 74.) ? (116, 'Q') : (49.7E1, 0x84) > 145. ? (145., 405) : (1.72E2, 148.));
			var b = 251;
			var d = 254;
			var f = ((10.84E2, 0x233) > 39 ? (64.2E1, 140) : (38, 9.28E2));
			var i = 131;
			var j = 153;
			var l = 163;
			var s = 213;
			var r = 219;
			var u = 142;
			var e0 = 144;
			var d0 = 194;
			var b0 = 154;
			var f0 = ((96.4E1, 20.3E1) <= (15, 0x1A0) ? (116.9E1, 23) : 56. > (143, 10.3E1) ? "J" : (0x14C, 0x214));
			var l0 = 182;
			var o0 = 147;
			var w0 = ((3.98E2, 31.8E1) < 0x1F0 ? (35.0E1, 145) : (28., 110));
			m9.frames = [{
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, T0, N3, -R9, c],
					[c, c, -K2, -m3, c],
					[q0, k2, -a3, -d2, c],
					[a1, F0, -j2, -C2, c],
					[F0, s1, -I2, -E6, c],
					[Z0, a1, -f3, -T4, c],
					[T0, F0, -K3, -L3, c],
					[Q0, Z0, -I2, -L3, c],
					[G0, c, -w4, -h2, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, T0, N3, -E9, c],
					[c, Z2, -K3, -m3, c],
					[F0, s1, -I2, -B5, c],
					[q0, k2, -a3, -d2, c],
					[Z0, a1, -K2, -w0, c],
					[a1, s1, -h4, -l3, c],
					[T0, F0, -K3, -O1, c],
					[Q0, Z0, -E2, -O1, c],
					[G0, c, -q5, -y4, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, T0, N3, -E9, c],
					[c, Z2, -K3, -m3, c],
					[F0, s1, -I2, -B5, c],
					[q0, k2, -a3, -d2, c],
					[Z0, a1, -K2, -w0, c],
					[a1, s1, -h4, -l3, c],
					[T0, F0, -K3, -O1, c],
					[Q0, Z0, -E2, -O1, c],
					[G0, c, -q5, -y4, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, c, g3, -E2, c],
					[c, c, -K2, -m3, c],
					[q0, k2, -a3, -d2, c],
					[a1, F0, -j2, -C2, c],
					[F0, s1, -I2, -E6, c],
					[Z0, a1, -f3, -T4, c],
					[T0, F0, -K3, -L3, c],
					[Q0, Z0, -I2, -L3, c],
					[G0, c, -w4, -h2, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, c, g3, -I2, c],
					[c, Z2, -K3, -m3, c],
					[F0, s1, -I2, -B5, c],
					[Z0, a1, -K2, -w0, c],
					[q0, k2, -a3, -d2, c],
					[a1, s1, -h4, -l3, c],
					[T0, F0, -K3, -O1, c],
					[Q0, Z0, -E2, -O1, c],
					[G0, c, -q5, -y4, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, q0, F2, -B9, c],
					[c, U0, -K3, -u7, c],
					[F0, c, -E2, -w7, c],
					[Z0, c, -K2, -o0, c],
					[q0, q0, -k2, -b2, c],
					[a1, U0, -h4, -O1, c],
					[T0, Z0, -A5, -s2, c],
					[Q0, U0, -t3, -R2, c],
					[G0, U0, -Y6, -j3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, k3, g4, -l0, c],
					[c, G0, -r4, -m3, c],
					[F0, F0, -t3, -E6, c],
					[Z0, Q0, -K2, -T4, c],
					[q0, B2, -k2, -d2, c],
					[a1, F0, -j2, -C2, c],
					[T0, a1, -r4, -s2, c],
					[Q0, c, -s4, -F3, c],
					[G0, G0, -z1, -e3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, a3, f0, -C9, c],
					[c, s1, -T2, -m3, c],
					[F0, U0, -E2, -w7, c],
					[Z0, U0, -f3, -o0, c],
					[q0, k3, -a3, -b2, c],
					[a1, c, -j2, -L3, c],
					[T0, s1, -U7, -R2, c],
					[Q0, G0, -E2, -t4, c],
					[G0, s1, -H3, -e3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, k2, d1, -Q9, c],
					[c, F0, -T2, -u7, c],
					[F0, G0, -E2, -w7, c],
					[Z0, G0, -K2, -o0, c],
					[q0, a3, -k2, -d2, c],
					[a1, G0, -h4, -O1, c],
					[T0, Q0, -U7, -s2, c],
					[Q0, s1, -E2, -s2, c],
					[G0, F0, -H3, -j3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, F0, h4, -x7, c],
					[c, U0, -K3, -u7, c],
					[F0, c, -E2, -w7, c],
					[Z0, c, -K2, -o0, c],
					[q0, q0, -k2, -b2, c],
					[a1, U0, -h4, -O1, c],
					[T0, Z0, -A5, -s2, c],
					[Q0, U0, -t3, -R2, c],
					[G0, U0, -H3, -e3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, U0, r1, -R4, c],
					[c, G0, -r4, -m3, c],
					[F0, F0, -t3, -E6, c],
					[Z0, Q0, -K2, -T4, c],
					[q0, B2, -k2, -d2, c],
					[a1, F0, -j2, -C2, c],
					[T0, a1, -r4, -s2, c],
					[Q0, c, -s4, -F3, c],
					[G0, G0, -H3, -e3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, Z0, d2, -v4, c],
					[c, s1, -T2, -m3, c],
					[F0, U0, -E2, -w7, c],
					[Z0, U0, -f3, -o0, c],
					[q0, k3, -a3, -b2, c],
					[a1, c, -j2, -L3, c],
					[T0, s1, -U7, -R2, c],
					[Q0, G0, -E2, -t4, c],
					[G0, s1, -z1, -j3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, G0, N3, -I3, c],
					[c, F0, -T2, -u7, c],
					[F0, G0, -E2, -w7, c],
					[Z0, G0, -K2, -o0, c],
					[q0, a3, -k2, -d2, c],
					[a1, G0, -h4, -O1, c],
					[T0, Q0, -U7, -s2, c],
					[Q0, s1, -E2, -s2, c],
					[G0, F0, -H3, -e3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, B2, -s4, -Z6, c],
					[c, a1, -P5, -L3, c],
					[T0, k3, -K2, -w4, c],
					[Q0, F0, -N5, -l3, c],
					[F0, Z0, -F2, -E3, c],
					[Z0, q0, -n5, -L3, c],
					[G0, Z0, -K3, -w4, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, z2, -s2, -t8, c],
					[c, Q0, -K2, -F3, c],
					[T0, c, -B2, -F3, c],
					[Q0, a1, c, -E3, c],
					[F0, T0, -g4, -w4, c],
					[Z0, T0, -g3, -H3, c],
					[G0, a1, -K3, -t4, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, j1, -E2, -b0, c],
					[c, T0, -A5, -D0, c],
					[T0, U0, -b2, -E2, c],
					[Q0, Q0, -g3, -r1, c],
					[F0, a1, -t7, -Y6, c],
					[q0, U0, k2, -s4, c],
					[Z0, s1, -E2, -w4, c],
					[G0, T0, -A5, -q5, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, n5, -j2, -t8, c],
					[c, Z0, -N5, -f6, c],
					[T0, T0, -C6, -w4, c],
					[Q0, T0, -f3, -v4, c],
					[F0, k3, -T2, -t4, c],
					[q0, G0, -Q0, -C6, c],
					[G0, q0, -r1, -f6, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, a1, -E2, -I3, c],
					[c, a1, -P5, -L3, c],
					[T0, k3, -K2, -w4, c],
					[Q0, F0, -N5, -l3, c],
					[F0, Z0, -F2, -E3, c],
					[Z0, q0, -n5, -L3, c],
					[G0, Z0, -U7, -Q5, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, s1, -P5, -z9, c],
					[c, Q0, -K2, -F3, c],
					[T0, c, -B2, -F3, c],
					[Q0, a1, c, -E3, c],
					[F0, T0, -g4, -w4, c],
					[Z0, T0, -g3, -H3, c],
					[G0, a1, -K2, -g6, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, Q0, -t7, -S7, c],
					[c, T0, -A5, -D0, c],
					[T0, U0, -b2, -E2, c],
					[Q0, Q0, -g3, -r1, c],
					[F0, a1, -t7, -Y6, c],
					[q0, U0, k2, -s4, c],
					[Z0, s1, -E2, -w4, c],
					[G0, T0, -A5, -y5, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, T0, -n5, -s2, c],
					[c, Z0, -N5, -f6, c],
					[T0, T0, -C6, -w4, c],
					[Q0, T0, -f3, -v4, c],
					[F0, k3, -T2, -t4, c],
					[q0, G0, -Q0, -C6, c],
					[G0, q0, -t7, -t4, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, S5, -c0, -d0, c],
					[c, b2, -o5, -Q4, c],
					[F0, B2, -u8, -B5, c],
					[Z0, F0, -I3, -T4, c],
					[q0, s1, -B2, -C6, c],
					[a1, q0, -f3, -q5, c],
					[T0, a3, -o5, -F3, c],
					[Q0, q0, -p5, -T7, c],
					[G0, Q0, -F3, -E3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, T0, r1, -O9, c],
					[c, b2, -o5, -Q4, c],
					[F0, B2, -u8, -B5, c],
					[Z0, F0, -I3, -T4, c],
					[q0, s1, -B2, -C6, c],
					[a1, q0, -f3, -q5, c],
					[T0, a3, -o5, -F3, c],
					[Q0, q0, -p5, -T7, c],
					[G0, Q0, -F3, -E3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, g4, N3, -S7, c],
					[c, k2, -x7, -W6, c],
					[F0, Q0, -C2, -j3, c],
					[Z0, k2, -D0, -h9, c],
					[a1, T0, -Z2, -t3, c],
					[q0, c, j1, -b2, c],
					[T0, G0, -R7, -H3, c],
					[Q0, k2, -T2, -u8, c],
					[G0, k3, -O1, -f3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, g4, N3, -S7, c],
					[c, k2, -x7, -W6, c],
					[F0, Q0, -C2, -j3, c],
					[Z0, k2, -D0, -h9, c],
					[a1, T0, -Z2, -t3, c],
					[q0, c, j1, -b2, c],
					[T0, G0, -R7, -H3, c],
					[Q0, k2, -T2, -u8, c],
					[G0, k3, -O1, -f3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, g3, a3, -L9, c],
					[c, B2, -O1, -e4, c],
					[F0, q0, -Y6, -o5, c],
					[Z0, k3, -h2, -p5, c],
					[q0, Q0, h4, -j2, c],
					[a1, Q0, -Z0, -r4, c],
					[T0, B2, -j2, -s4, c],
					[Q0, B2, -r1, -v4, c],
					[G0, k2, -y6, -j1, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, k2, R7, -M8, c],
					[c, k2, -x7, -W6, c],
					[F0, Q0, -C2, -j3, c],
					[Z0, k2, -D0, -h9, c],
					[a1, T0, -Z2, -t3, c],
					[q0, c, j1, -b2, c],
					[T0, G0, -R7, -H3, c],
					[Q0, k2, -T2, -u8, c],
					[G0, k3, -O1, -f3, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, k3, z2, -Y6, c],
					[c, B2, -O1, -e4, c],
					[F0, q0, -Y6, -o5, c],
					[Z0, k3, -h2, -p5, c],
					[q0, Q0, h4, -j2, c],
					[a1, Q0, -Z0, -r4, c],
					[T0, B2, -j2, -s4, c],
					[Q0, B2, -r1, -v4, c],
					[G0, k2, -y6, -j1, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[s1, a3, A5, -r8, c],
					[c, k3, -A5, -m3, c],
					[F0, a3, -e4, -E6, c],
					[Z0, B2, -A5, -T4, c],
					[q0, a1, -j1, -d2, c],
					[a1, Z0, -c0, -l3, c],
					[T0, q0, -Z6, -O1, c],
					[Q0, a3, -s4, -l5, c],
					[G0, a3, -R4, -q4, c]
				]
			}, {
				actRect: [-j1, -c0, c0, c0],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[c, a3, -r4, -m3, c],
					[F0, k2, -x7, -E6, c],
					[Z0, Z0, -p8, -o0, c],
					[q0, F0, -j1, -d2, c],
					[a1, a1, -c0, -l3, c],
					[T0, k2, -j9, -C2, c],
					[Q0, k3, -p5, -l5, c],
					[s1, B2, K3, -q8, c],
					[G0, B2, -Q5, -E3, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, F2, -s8, -r7, c],
					[c, g4, -K3, -N9, c],
					[F0, m5, -v4, -w7, c],
					[Z0, n5, -P5, -T4, c],
					[q0, z2, -z2, -Z2, c],
					[a1, f0, -z6, -y5, c],
					[T0, F2, -r4, -q4, c],
					[Q0, N3, -s4, -T7, c],
					[G0, h4, -R4, -T7, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, N3, -v9, -y9, c],
					[c, g3, -r4, -u7, c],
					[F0, F2, -R4, -v9, c],
					[Z0, z2, -p5, -e0, c],
					[q0, j1, -z2, -C6, c],
					[a1, f0, -V6, -Q5, c],
					[T0, j2, -j9, -k9, c],
					[Q0, h4, -e4, -h2, c],
					[G0, d2, -y5, -T7, c]
				]
			}, {
				actRect: [f0, -B6, w9, B6],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[c, F2, -s4, -Q4, c],
					[F0, N3, -P5, -B5, c],
					[Z0, d2, -z6, -T4, c],
					[q0, g4, -z2, -d2, c],
					[a1, F2, -b2, -y5, c],
					[T0, S5, -e4, -O1, c],
					[Q0, S5, -t3, -l5, c],
					[U0, c, -q4, -K9, c],
					[G0, g3, -R2, -O1, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[c, F2, -s4, -Q4, c],
					[F0, N3, -P5, -B5, c],
					[Z0, d2, -z6, -T4, c],
					[q0, g4, -z2, -d2, c],
					[a1, F2, -b2, -y5, c],
					[T0, S5, -e4, -O1, c],
					[Q0, S5, -t3, -l5, c],
					[U0, U0, -y4, -J8, c],
					[G0, j1, -R2, -O1, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[c, F2, -s4, -Q4, c],
					[F0, N3, -P5, -B5, c],
					[Z0, d2, -z6, -T4, c],
					[q0, g4, -z2, -d2, c],
					[a1, F2, -b2, -y5, c],
					[T0, S5, -e4, -O1, c],
					[Q0, S5, -t3, -l5, c],
					[U0, G0, -y4, -f3, c],
					[G0, g4, -R2, -O1, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[c, f0, -o5, -O7, c],
					[F0, j2, -f3, -B5, c],
					[Z0, j2, -h4, -e0, c],
					[q0, g3, -z2, -Z2, c],
					[a1, k2, -f0, -L3, c],
					[T0, f0, -I2, -t4, c],
					[Q0, g3, -I2, -y4, c],
					[U0, s1, -s2, -z6, c],
					[G0, m5, -L3, -F3, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[c, m5, -P5, -g9, c],
					[F0, b2, -N5, -B5, c],
					[Z0, b2, -f0, -u, c],
					[q0, F2, -z2, -Z2, c],
					[a1, g4, -f0, -O1, c],
					[T0, N3, -P5, -f6, c],
					[Q0, F2, -Z6, -h2, c],
					[U0, F0, -v6, -N5, c],
					[G0, F2, -F3, -L3, c]
				]
			}, {
				actRect: [f0, -B6, w9, B6],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, a1, -q8, -r, c],
					[c, j2, -o5, -Q4, c],
					[F0, z2, -y5, -B6, c],
					[Z0, d1, -v4, -u, c],
					[q0, N3, -S5, -Z2, c],
					[a1, g3, -f3, -R4, c],
					[T0, d2, -I2, -h2, c],
					[Q0, b2, -x7, -y4, c],
					[G0, n5, -Y6, -f6, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, Z0, -o7, -s, c],
					[c, j2, -o5, -Q4, c],
					[F0, z2, -y5, -B6, c],
					[Z0, d1, -v4, -u, c],
					[q0, N3, -S5, -Z2, c],
					[a1, g3, -f3, -R4, c],
					[T0, d2, -I2, -h2, c],
					[Q0, b2, -x7, -y4, c],
					[G0, n5, -Y6, -f6, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, Q0, -o7, -l, c],
					[c, j2, -o5, -Q4, c],
					[F0, z2, -y5, -B6, c],
					[Z0, d1, -v4, -u, c],
					[q0, N3, -S5, -Z2, c],
					[a1, g3, -f3, -R4, c],
					[T0, d2, -I2, -h2, c],
					[Q0, b2, -x7, -y4, c],
					[G0, n5, -Y6, -f6, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, h4, -m8, -j, c],
					[c, q0, -P5, -m3, c],
					[F0, g3, -e4, -E6, c],
					[Z0, j1, -A5, -T4, c],
					[q0, j2, -g3, -b2, c],
					[a1, k3, -C6, -O1, c],
					[T0, z2, -p8, -F3, c],
					[Q0, g4, -I3, -E3, c],
					[G0, z2, -Q5, -q4, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, j2, -g9, -i, c],
					[c, z2, -e4, -K0, c],
					[F0, j1, -R2, -B6, c],
					[Z0, g3, -X2, -f, c],
					[q0, f0, -N3, -Z2, c],
					[a1, B2, -A5, -X2, c],
					[T0, n5, -p5, -q4, c],
					[Q0, d1, -D0, -q4, c],
					[G0, N3, -g6, -l5, c]
				]
			}, {
				actRect: [f0, -B6, w9, B6],
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, m5, -y9, -d, c],
					[c, j1, -r4, -r7, c],
					[F0, d2, -I2, -e6, c],
					[Z0, F2, -V6, -u, c],
					[q0, n5, -F2, -j2, c],
					[a1, a3, -m5, -Q5, c],
					[T0, j1, -Z6, -O1, c],
					[Q0, z2, -I2, -F3, c],
					[G0, d1, -t4, -E3, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, f0, m5, -b, c],
					[c, j1, -r4, -r7, c],
					[F0, d2, -I2, -e6, c],
					[Z0, F2, -V6, -u, c],
					[q0, n5, -F2, -j2, c],
					[a1, a3, -m5, -Q5, c],
					[T0, j1, -Z6, -O1, c],
					[Q0, z2, -I2, -F3, c],
					[G0, d1, -t4, -E3, c]
				]
			}, {
				bodyRect: [-r1, -D0, z1, D0],
				frameArray: [
					[c, c0, -d1, -q0, c],
					[U0, d1, m5, -I2, c],
					[c, j1, -r4, -r7, c],
					[F0, d2, -I2, -e6, c],
					[Z0, F2, -V6, -u, c],
					[q0, n5, -F2, -j2, c],
					[a1, a3, -m5, -Q5, c],
					[T0, j1, -Z6, -O1, c],
					[Q0, z2, -I2, -F3, c],
					[G0, d1, -t4, -E3, c]
				]
			}, {
				actRect: [-a, -j3, a, j3],
				bodyRect: [-a, -j3, a, j3],
				frameArray: [
					[k3, c, -v4, -s2, c]
				]
			}, {
				actRect: [-a, -j3, a, j3],
				bodyRect: [-a, -j3, a, j3],
				frameArray: [
					[k3, U0, -v4, -R4, c]
				]
			}, {
				actRect: [-a, -j3, a, j3],
				bodyRect: [-a, -j3, a, j3],
				frameArray: [
					[k3, G0, -v4, -C2, c]
				]
			}];
		},
		X9 = function(a) {
			$.me.playerSprites = a;
		},
		U9 = function() {
			var a = 1002;
			var b = 679;
			var d = (0x138 <= (0x17F, 82.) ? (8.91E2, 1.306E3) : 0x197 <= (29., 54.0E1) ? (27.20E1, 604) : (90., 64.));
			var f = ((0xE4, 1.208E3) <= (0x11E, 75) ? 129 : 0x17F > (0x197, 40.) ? (9.35E2, 211) : 0x1D > (1.403E3, 46.80E1) ? (0x135, 235) : (0x10A, 32));
			var i = 1075;
			var j = 916;
			var l = ((20., 3.1E2) > (1.31E3, 3.0E2) ? (113., 835) : (0x1FA, 38.));
			var s = ((0x1FB, 122) < 90. ? (132, "z") : (47., 0x140) >= (0x18, 0x94) ? (0xD1, 760) : 47. <= (0x1F1, 15) ? 146 : (131., 43.));
			var r = 521;
			var u = 442;
			var e0 = 363;
			var d0 = ((1, 120) < (0x168, 51.) ? 0xCA : (40, 0x195) >= (0x1B8, 0x1D7) ? 0x24C : 0xEF <= (51, 114.7E1) ? (0x23A, 143) : (84., 0x202));
			var b0 = 299;
			var f0 = (52.1E1 <= (0x16E, 22.5E1) ? (0x223, 2.46E2) : 87.7E1 >= (0x21A, 27) ? (36, 226) : (3.44E2, 2));
			var l0 = 847;
			var o0 = (91. > (149.0E1, 0xD6) ? (120., 0x56) : (130, 38) < 42 ? (29, 370) : (0x1A3, 0xA9) > (140.5E1, 0x125) ? (48, 'Y') : (0xAA, 0x41));
			var w0 = 1007;
			var k0 = 682;
			var n0 = 759;
			var H0 = 1555;
			var A0 = (14 > (9, 39) ? (12.38E2, 3.320E2) : 0x70 < (0xA0, 6.0E1) ? 62.30E1 : (0x113, 20.) < (2.0E1, 70.60E1) ? (149, 1425) : (1., 92.));
			var i0 = 1680;
			var l1 = 719;
			var o1 = ((0x18F, 0x98) < 0x3E ? 120.4E1 : (0x165, 0x1DC) <= 49 ? 0x4F : (41.1E1, 95.) >= 44 ? (0x137, 490) : (0x138, 55.));
			var M0 = 1184;
			var g1 = 941;
			var X0 = 1305;
			var B1 = ((49., 0x50) >= 0xA7 ? (0x143, 140.) : 0x134 >= (1.014E3, 95.30E1) ? (110., 9500) : (11., 29.) < (51.1E1, 0x8E) ? (3.010E2, 606) : (25., 84));
			var M1 = ((71, 2.27E2) > (105.7E1, 0x136) ? (0x1AA, 122.0E1) : 57.30E1 > (116, 0x242) ? (0x22E, 0x1E0) : (148.4E1, 7) <= 0x1A4 ? (132, 1064) : (7.020E2, 0xEA));
			var J1 = 1278;
			var p1 = ((127.4E1, 115) < 0x21B ? (5.32E2, 1545) : (0x50, 1.407E3) < 0x2 ? 9.43E2 : (46.6E1, 3.40E1) > 140.8E1 ? (3.80E1, 20) : (0x1F6, 5.2E1));
			var D1 = (73. < (14.41E2, 13.83E2) ? (13.41E2, 644) : 36 > (112., 1.202E3) ? (108., 'h') : (0x14, 0x17));
			var m2 = 1399;
			var L1 = 943;
			var F1 = 517;
			var S1 = 260;
			var I1 = ((24., 41) >= 53 ? (0x7A, "a") : (11.89E2, 15.3E1) < 0x49 ? 0x1D9 : (0x183, 76) <= (125., 0x116) ? (60.90E1, 389) : (1.380E2, 91.80E1));
			var e2 = 1162;
			var n2 = (61. >= (11.42E2, 71) ? 8.07E2 : 127 > (9, 0x5F) ? (0x155, 838) : (41.5E1, 35.2E1));
			var f1 = 744;
			var i1 = 1896;
			var U2 = 1414;
			var h3 = 928;
			var W4 = 2052;
			var U4 = 2195;
			var B4 = 1237;
			var v3 = ((0xAB, 0x13C) <= (6.47E2, 10.44E2) ? (11., 176) : (126, 42.));
			var C4 = ((14.8E1, 0xF9) > (97, 0x6A) ? (0x145, 789) : (6.71E2, 0x1F3));
			var s5 = 1744;
			var X4 = ((4., 0x9B) <= (3.12E2, 0x14) ? (0x139, 7.29E2) : (145., 9) > 4.2E2 ? 79. : 17 < (0xEA, 50) ? (9.42E2, 1577) : (0xDD, 9.88E2));
			var E5 = 1070;
			var r5 = 484;
			var E1 = 315;
			var Q3 = ((114.2E1, 0x1D4) <= (0x50, 0xB0) ? 'h' : (0xE4, 0xA3) <= (0x1D6, 1.481E3) ? (65., 1428) : (93.0E1, 0x1B2));
			var F4 = 1293;
			var T5 = 1534;
			var E4 = 1696;
			var P1 = (14.9E1 >= (33, 111.) ? (76., 1038) : (124., 79.) > 6.98E2 ? 102.9E1 : 0x1E3 <= (35., 0x8C) ? 23 : (0x46, 0x16C));
			var O2 = 931;
			var N2 = 844;
			var T3 = 716;
			var R3 = 559;
			var L2 = ((63., 0xD0) < 0x65 ? 7 : 4.5E1 >= (1.2670E3, 48.) ? (0x110, 20) : (67., 37.) > 0x1F ? (0x141, 415) : (1.11E3, 40.));
			var g2 = 270;
			var p2 = 1492;
			var w3 = 558;
			var U3 = 1591;
			var G5 = 1020;
			var H5 = 1364;
			var G1 = 1246;
			var c1 = 905;
			var z3 = 326;
			var n3 = 677;
			var W2 = 451;
			var X1 = 1131;
			var C1 = 209;
			var u1 = (1 > (109., 8.99E2) ? (0x228, "i") : (56, 0x98) >= (0xAA, 141.8E1) ? (68., 311) : 9.91E2 > (3.48E2, 0x158) ? (59.5E1, 898) : (0x21C, 0x67));
			var H4 = 997;
			var Z4 = 1122;
			var y3 = 1358;
			var r0 = (0x1E8 < (107, 0x224) ? (38.6E1, 1225) : 7.74E2 <= (3.09E2, 70.) ? (0xE3, 95) : (86.30E1, 5.62E2));
			var C7 = 216;
			var J6 = 445;
			var I4 = 336;
			var B3 = 1071;
			var H2 = ((10.97E2, 13.) < (11.120E2, 3.300E2) ? (0x5B, 667) : (73, 6.51E2) > 1.353E3 ? 77 : (147., 0x11));
			var I6 = 764;
			var c7 = 981;
			var V5 = 105;
			var A7 = ((61.2E1, 0xBF) <= 46.40E1 ? (43, 1379) : (9.42E2, 0x85));
			var m1 = 1180;
			var W5 = 1289;
			var o3 = 179;
			var j6 = 360;
			var v1 = 100;
			var M6 = 466;
			var L6 = 98;
			var j4 = ((12.70E1, 6.86E2) > (0x142, 59.) ? (0x186, 97) : 90.7E1 <= (0x17D, 0x99) ? (11.39E2, 0x3) : (92., 0x41) > (0x48, 114.0E1) ? (0x7, 113) : (0x59, 58));
			var K6 = 566;
			var J5 = ((84.30E1, 45) > (12.700E2, 0x1D0) ? (0xCE, "r") : (0x12A, 0x88) >= (1.424E3, 82) ? (147., 1063) : (1.2E3, 2.14E2));
			var K4 = 896;
			var W3 = 712;
			var c5 = 61;
			var N6 = 450;
			var Y5 = 538;
			var Z5 = 1157;
			var Z3 = 625;
			var X3 = 357;
			var L4 = 1261;
			var Y1 = 229;
			var a2 = 1598;
			var a5 = 1154;
			var o = (0xB4 > (69, 38.2E1) ? 6.93E2 : 7.24E2 <= (44., 0x14A) ? (21., 0x243) : 14.47E2 >= (0x1BB, 110.4E1) ? (14.44E2, 583) : (59, 11.35E2));
			var F7 = 340;
			var Q6 = ((12.35E2, 17) <= 0x1E0 ? (2.69E2, 1034) : (0x127, 0x152) < 13 ? 0x1A5 : (0x1FE, 0x13));
			var P6 = 800;
			var d7 = 688;
			var i3 = 919;
			var X7 = 452;
			var Y7 = (0xBB <= (11., 1.286E3) ? (0x12D, 1469) : (79.10E1, 0x12F));
			var x8 = ((1.0190E3, 0x255) >= (0x178, 12.25E2) ? 140. : (118.10E1, 0x1D1) >= 62. ? (113.7E1, 1021) : (0x1E2, 0xE6) >= 0x23D ? (1.217E3, 'W') : (117.5E1, 7));
			var k6 = 1479;
			var D7 = 1355;
			var y8 = 899;
			var e7 = 1272;
			var G7 = 708;
			var Z7 = 815;
			var q2 = 607;
			var a8 = 242;
			var t5 = 465;
			var f5 = 116;
			var p3 = ((68.60E1, 6.38E2) >= (0x1BE, 123) ? (74, 115) : (64, 0x13) > (0x121, 23.6E1) ? (0x1A3, 'P') : (99., 44.30E1));
			var b6 = 368;
			var n6 = (27.6E1 < (1.69E2, 0xBD) ? (0x1B, 323) : (42., 0x16D) <= 3.85E2 ? (8.49E2, 230) : (124., 121.) >= (1.400E2, 0x224) ? (0x79, 0x67) : (0x176, 0x15));
			var v2 = 872;
			var m6 = 659;
			var d5 = ((36.4E1, 144.8E1) < 22 ? (45.90E1, 196) : (3.14E2, 1.489E3) > (0x1AD, 0x1A7) ? (86, 801) : 133.4E1 <= (2.49E2, 0x114) ? (0x7C, 'w') : (0xB4, 4.560E2));
			var a4 = 266;
			var C3 = 125;
			var m4 = 526;
			var N4 = ((36, 0x1C1) >= (0x155, 9.1E2) ? (9.46E2, 98) : (9.39E2, 29.) < (0x205, 0x223) ? (10.33E2, 113) : (2.0E1, 46.) >= 47 ? (0x125, 147) : (123., 0xA6));
			var U1 = 883;
			var w2 = (23 >= (149., 110) ? 919 : (0x188, 25) > (126.9E1, 51.) ? (0x15C, 0xC9) : (0x122, 69) < (0x2E, 0x102) ? (17.3E1, 264) : (0x11E, 134.));
			var c4 = 112;
			var h0 = 970;
			var R0 = 794;
			var m = ((8.86E2, 46.7E1) >= (0x15F, 0x28) ? (0x182, 351) : (0x1D, 0x8C));
			var x0 = 1061;
			var k4 = ((1.2550E3, 42.90E1) > (86., 78.) ? (0x250, 706) : (0x14C, 9.42E2));
			var u5 = 1243;
			var Q2 = 1044;
			var O4 = 1147;
			var N0 = 938;
			var v5 = 745;
			var K5 = 638;
			var V1 = 842;
			var R1 = (5.29E2 >= (2.2E1, 139) ? (69., 545) : (5.59E2, 109) > (47., 2.57E2) ? (4.29E2, 1399) : (0x70, 65.));
			var C0 = 438;
			var v = (120. < (35.1E1, 0x12B) ? (2.0E1, 348) : (133, 0x0));
			var J0 = 258;
			var q6 = 167;
			var q3 = 162;
			var T6 = 197;
			var c3 = 272;
			var s6 = 318;
			var A1 = (40 >= (0x14, 7.86E2) ? 'G' : 0xF9 < (1.008E3, 26.) ? 'G' : 0x151 >= (3.54E2, 60.) ? (35, 331) : (1.407E3, 7.88E2));
			var j5 = 269;
			var y2 = 174;
			var i5 = 829;
			var H1 = 246;
			var g = (139 >= (52., 34.0E1) ? 11.55E2 : 0x1EE > (92.30E1, 28.) ? (65.10E1, 1010) : (6.4E1, 0x153));
			var f7 = 173;
			var b8 = ((48, 0x121) >= (69., 126.) ? (2.93E2, 1003) : (12., 25.3E1));
			var p6 = 1146;
			var W0 = 982;
			var S6 = 742;
			var P8 = ((0x12, 51.) <= (73.10E1, 56.) ? (40., 150) : (21, 0x6D));
			var M5 = 101;
			var n4 = 641;
			var z8 = 164;
			var R8 = 563;
			var g5 = 394;
			var n9 = ((131., 133.9E1) < (95., 138.20E1) ? (0x1C3, 308) : (0xC5, 109.) > 94.7E1 ? 125 : 0x251 < (0xB9, 51.) ? 39. : (30., 123));
			var d8 = 169;
			var e8 = 172;
			var V8 = ((149.6E1, 82) > 126. ? (0x1E, "C") : 45 <= (1.5E1, 85.7E1) ? (49, 166) : (3.62E2, 0x6D));
			var X8 = 170;
			var Y8 = 157;
			var f8 = 160;
			var B8 = 650;
			var C8 = (100. < (94, 0x1AC) ? (0xDE, 1151) : 32.9E1 < (16., 149) ? "w" : (55., 0xE3));
			var i7 = ((0x183, 0x10B) < 61.6E1 ? (0xA3, 237) : (1.024E3, 11.49E2));
			var c6 = 235;
			var g8 = 448;
			var S8 = 892;
			var I7 = 141;
			var A8 = ((20., 0x105) <= (5.51E2, 14.98E2) ? (129.70E1, 1130) : (0xC0, 9.82E2));
			var J7 = 754;
			var c8 = ((0x1DE, 21.6E1) > (46, 136.) ? (0x12B, 655) : (17, 26.));
			var p9 = 531;
			var U8 = 247;
			var q9 = 289;
			var r3 = 271;
			var h7 = (0x8 > (149.1E1, 148.9E1) ? 0x10F : (1.43E3, 55.6E1) >= 0x117 ? (60., 447) : (73, 0x17C) >= 11.3E2 ? (87., 'c') : (0x1EB, 0x20C));
			var M7 = ((124, 0x17F) < (2.38E2, 12.040E2) ? (0., 263) : (0x6A, 1.352E3));
			var I8 = 763;
			var s9 = 628;
			var j8 = 506;
			var s3 = ((23, 3E0) > 1.107E3 ? 5 : (81., 104) >= (0x26, 0xD7) ? 123.80E1 : 13.61E2 >= (95, 1.246E3) ? (0x51, 378) : (149.5E1, 0x24A));
			var i8 = (21. > (0x14D, 97) ? (2.96E2, 19.) : (8.4E1, 36) >= 78 ? "," : (64.3E1, 13.3E1) < 0xFD ? (0x1D6, 256) : (0x95, 104.10E1));
			var l7 = 102;
			var n7 = 576;
			var k5 = ((0x15C, 0x15A) >= 0x1FF ? 1414 : (12.23E2, 35) >= (31, 0x7D) ? (1.329E3, 113.) : 12.32E2 >= (0x76, 0x236) ? (0x149, 575) : (0x6F, 7.5E2));
			var l8 = 424;
			var p4 = ((0x2B, 0x1ED) <= 0x9F ? 'P' : (122, 0x174) < 66 ? 0x51 : 31.0E1 <= (0x122, 143.0E1) ? (101, 423) : (145, 36.));
			var O0 = 245;
			var k8 = 422;
			var e = (149. < (84., 1.124E3) ? (0xCE, 127) : (0x3A, 88.));
			var e9 = 421;
			var k7 = 284;
			var L7 = 375;
			var b9 = ((78., 5.79E2) <= (2.6E1, 0x6B) ? (0x119, "Y") : (83.9E1, 148.) <= (32., 0x8B) ? (0x99, 0x9D) : (0x212, 47) >= (46.30E1, 37.) ? (16., 283) : (132., 0xEE));
			var D8 = 491;
			var a9 = 253;
			var G8 = 282;
			var F8 = 191;
			var E8 = 236;
			var x5 = 109;
			var h8 = 512;
			var d9 = 387;
			var t9 = 280;
			var P7 = ((7.2E1, 123.) > 90 ? (1.82E2, 718) : 0x60 < (121., 0xC) ? 98.0E1 : (19, 5.9E2));
			var z0 = 615;
			var d4 = 94;
			var n8 = 499;
			var o8 = ((77.0E1, 83) > 124 ? (100., "R") : (8.83E2, 30.20E1) < 149.8E1 ? (0xFD, 822) : (4, 32.));
			var w6 = (0xFB > (106.4E1, 0x1AC) ? (109., 0x40) : (0xB3, 31.) >= (55.7E1, 0x1B7) ? (13, 261) : (51.1E1, 84.) > 66. ? (0E0, 408) : (8.25E2, 44.2E1));
			var L8 = 311;
			var t0 = ((0x234, 1.321E3) <= 0x128 ? 0x1DC : (0xC2, 136.70E1) >= (26.90E1, 8.3E2) ? (25, 96) : (88., 0x68));
			var q7 = 205;
			m9.rects = [
				[
					[T0, c, g6, m3],
					[r8, c, h2, u7],
					[q7, c, t0, m3],
					[L8, c, h2, m3],
					[w6, c, g6, u7],
					[o8, j2, Q5, f6],
					[n8, p8, d4, L3],
					[z0, p8, F3, F3],
					[P7, o5, E3, D0],
					[c, t9, r8, m3],
					[d9, T4, M8, m3],
					[h8, T4, W6, m3],
					[x5, w9, v6, W6],
					[E8, F8, r7, l3],
					[K0, G8, h2, K0],
					[a9, G8, d4, r7],
					[D8, b9, d4, r7],
					[L7, k7, d4, r7],
					[T0, e9, h2, N9],
					[e, k8, R2, u7],
					[O0, p4, d4, Q4],
					[L7, p4, d4, Q4],
					[n8, l8, J8, Q4],
					[Q0, k5, k9, O7],
					[e6, n7, l7, g9],
					[i8, n7, h2, Q4],
					[s3, n7, h2, Q4],
					[j8, n7, h2, Q4],
					[c, T4, r8, Q4],
					[s9, T4, T7, m3],
					[I8, M7, Z6, j1]
				],
				[
					[c, h7, r3, q9],
					[r3, h7, U8, C9],
					[p9, h7, q8, h9],
					[c8, h7, k9, y9],
					[J7, h7, m3, l5],
					[A8, h7, K9, I7],
					[S8, g8, c6, i7],
					[C8, B8, f8, y4],
					[c, g3, J8, Y8],
					[J8, s1, y5, X8],
					[V8, U0, w4, e8],
					[c6, F0, l3, d8],
					[n9, B2, y4, R9],
					[g5, c, d8, y5],
					[R8, c, R2, z8],
					[n4, d1, M5, P8],
					[S6, Q5, P8, M5],
					[S8, z2, j3, E9],
					[W0, t8, Q9, t4],
					[p6, -U0, z8, s2],
					[b8, C9, f7, w4],
					[g, H1, V8, R2],
					[i5, f7, y2, R4],
					[c8, B9, y2, j5],
					[A1, e8, s6, c3],
					[E9, T6, f7, w4],
					[-F0, C9, q3, e3]
				],
				[
					[c, c, l3, e3],
					[s2, U0, C2, h2],
					[q6, U0, C2, e3],
					[J0, U0, l3, e3],
					[v, G0, l3, h2],
					[C0, q0, h2, C2],
					[R1, q0, s2, y4],
					[V1, k3, s2, E3],
					[K5, z2, e3, C2],
					[v5, z2, O1, q4],
					[N0, g4, E3, R2],
					[O4, g4, C2, e3],
					[Q2, F2, q4, O1],
					[u5, F2, C2, e3],
					[U0, x5, L3, q4],
					[k4, x5, t4, g6],
					[x0, x5, C2, h2],
					[m, q8, O1, h2],
					[R0, q8, t4, g6],
					[z0, v6, t4, g6],
					[h0, v6, l5, f6],
					[h2, c4, t4, T7],
					[B9, c4, O1, h2],
					[w2, c4, O1, h2],
					[U1, c4, t4, g6],
					[O4, c4, C2, h2],
					[C0, N4, s2, E3],
					[m4, N4, R2, T7],
					[u5, N4, C2, h2]
				],
				[
					[c, c, C3, s4],
					[a4, c, y9, e4],
					[m4, F0, C3, Z6],
					[d5, F0, p5, C3],
					[m3, Q0, w7, j9],
					[g5, Q0, B5, o5],
					[m6, Q0, O9, E2],
					[v2, Q0, h2, W6],
					[h0, B2, l7, z9],
					[c, s2, t8, o7],
					[n6, s2, C3, e4],
					[b6, s2, p3, R4],
					[W6, E3, f5, D0],
					[m4, E3, z8, Q5]
				],
				[
					[B6, c, s2, T2],
					[m, c, R2, T2],
					[t5, c, s2, T2],
					[c, U0, s2, T2],
					[a8, U0, R2, T2],
					[q2, T0, s4, C2],
					[Z7, B2, K3, s2],
					[C8, z2, y5, z1],
					[G7, n5, q5, H3],
					[e7, g4, y6, v4],
					[y8, m5, s2, T2],
					[D7, m5, R2, T2],
					[k6, b2, s2, T2],
					[x8, c0, R2, z6],
					[D7, x5, L3, I2],
					[f5, q8, O1, I3],
					[Y7, v6, L3, I2],
					[X7, N4, s2, T2],
					[i3, N4, R2, R7],
					[F0, s8, s2, U7],
					[d7, s8, O1, I3],
					[P6, s8, R2, R7],
					[Q6, s8, R2, R7],
					[F7, f5, R2, T2],
					[o, S7, s2, r4],
					[a5, S7, R2, t7],
					[a2, S7, L3, I2],
					[Y1, e6, R2, T2],
					[L4, B5, t4, y6]
				],
				[
					[q4, c, l3, z1],
					[r3, c, l3, H3],
					[X3, U0, C2, H3],
					[Z3, U0, R4, w4],
					[d5, U0, O1, v4],
					[Z5, U0, C2, H3],
					[c, G0, l3, z1],
					[B9, G0, l3, z1],
					[Y5, G0, u8, Q5],
					[N6, F0, q5, u8],
					[W0, F0, c5, C2],
					[W3, a1, C2, e4],
					[K4, a1, D0, w4],
					[J5, a1, l3, H3],
					[K6, j4, q5, R4],
					[G0, L6, l3, Y6],
					[M6, k9, Q5, X2],
					[c3, v1, C2, H3],
					[j6, v1, l3, H3],
					[h2, M5, R4, R4],
					[o3, M5, l3, H3],
					[W5, l7, q5, X2],
					[m1, W6, q5, X2],
					[A7, W6, q5, X2],
					[v2, V5, C2, v4],
					[c7, h9, O1, e4],
					[I6, o7, C2, v4],
					[H2, v6, C2, v4],
					[B3, S7, L3, e4]
				],
				[
					[I4, c, I3, t3],
					[o7, U0, I3, t3],
					[J6, U0, I3, t3],
					[c, G0, I3, E2],
					[C7, G0, t3, t3],
					[r0, F0, s4, I2],
					[y3, F0, I3, I2],
					[Z4, T0, f3, p5],
					[H4, q0, c5, t3],
					[u1, a1, p5, j9],
					[s1, t0, p5, E2],
					[C1, j4, I3, E2],
					[X1, v1, E2, I3],
					[t0, M5, x7, Z6],
					[W2, l7, s4, E2],
					[n3, v1, H3, j9],
					[z3, W6, I3, E2],
					[c1, M8, t3, o5],
					[G1, M8, t3, I3],
					[H5, M8, p5, r4],
					[R0, r8, t3, o5],
					[G5, r8, I3, o5],
					[U3, o7, p5, r4],
					[w3, V5, z1, P5],
					[p2, c4, p5, r4]
				],
				[
					[g2, c, d4, V6],
					[u7, U0, m8, V6],
					[L2, U0, j3, V6],
					[R3, G0, e3, V6],
					[T3, G0, U7, z6],
					[c, s1, z9, f3],
					[N2, a1, N5, A5],
					[O2, k2, K2, K2],
					[P1, z2, T2, K2],
					[C8, s1, y4, s4],
					[E4, j1, m8, K3],
					[T5, c0, t8, K3],
					[F4, a1, w4, Q5],
					[Q3, s1, p8, y4],
					[E1, N4, e3, K2],
					[r5, N4, e3, K2],
					[K5, N4, e3, K2],
					[E5, B5, t0, N5],
					[F2, s8, h2, P5],
					[X4, E6, j4, T2],
					[s5, E6, J8, p8],
					[C4, q8, g6, I3],
					[v3, M8, l5, z1],
					[B4, e, t0, N5],
					[U4, v6, l5, e4],
					[W4, s8, l5, e4],
					[h3, S7, l5, e4],
					[U2, Q4, j4, N5],
					[i1, E6, F3, e4]
				],
				[
					[f1, c, A5, p5],
					[n2, c, c5, t3],
					[e2, c, f6, D0],
					[I1, U0, f6, R4],
					[c, G0, s2, X2],
					[e, G0, f6, D0],
					[S1, G0, h2, X2],
					[F1, G0, R2, X2],
					[L1, F0, I3, z1],
					[m2, F0, M5, X2],
					[D1, Z0, c5, P5],
					[Q6, U0, t8, l3],
					[p1, T0, k9, X2],
					[J1, s1, q5, O1],
					[G0, r8, v1, y5],
					[H1, M5, y4, X2],
					[B5, t8, z9, l5],
					[o8, f5, j4, X2],
					[b6, x5, q4, X2],
					[M1, E6, j4, X2],
					[B1, o7, m8, l5],
					[X0, w7, t0, q5],
					[g1, v9, j4, X2],
					[M0, v9, J8, R4],
					[o1, p3, q4, X2],
					[l1, v1, l5, m8],
					[i0, x5, e3, g6],
					[A0, v6, e3, g6],
					[H0, v6, j3, g6]
				],
				[
					[n0, a3, f3, b2],
					[m4, B2, Z2, r1],
					[q2, B2, t7, C6],
					[k0, B2, r1, C6],
					[w0, z2, d2, d2],
					[o0, j1, t7, z6],
					[h3, n5, b2, d2],
					[l0, S5, b2, j2],
					[J6, g4, N5, c0],
					[q5, g3, j2, b2],
					[f0, g3, j2, b2],
					[b0, g3, d2, d2],
					[c, N3, b2, d2],
					[d0, d1, j2, d2],
					[e0, E3, y6, c0],
					[u, E3, y6, r1],
					[r7, y4, K2, j2],
					[b9, y4, f3, j2],
					[r, q4, y6, b2],
					[s, q4, y6, Z2],
					[l, q4, t7, Z2],
					[j, q4, z6, Z2],
					[i, q4, N5, Z2],
					[c5, h2, K2, Z2],
					[f, h2, f3, j2],
					[Q0, e3, V6, b2],
					[d, e3, y6, b2],
					[b, e3, y6, b2],
					[a, e3, z6, Z2]
				],
				[
					[U0, T0, T2, j1],
					[K3, s1, L9, F2],
					[M5, c, y5, d1]
				]
			];
		},
		m9 = {};
	W9();
	U9();
	Z9();
	m9.actions = {
		player: {
			stand_sword: {
				loop: d3,
				frames: [
					[c, c, c, c],
					[c, c, c, c],
					[U0, c, c, c],
					[G0, c, c, c]
				]
			},
			stand_gun: {
				loop: d3,
				frames: [
					[s1, c, c, c],
					[s1, c, c, c],
					[F0, c, c, c],
					[F0, c, c, c]
				]
			},
			walk_sword: {
				loop: d3,
				frames: [
					[Z0, c, c, c],
					[a1, c, c, c],
					[Q0, c, c, c],
					[T0, c, c, c]
				]
			},
			walk_gun: {
				loop: d3,
				frames: [
					[q0, c, c, c],
					[k3, c, c, c],
					[a3, c, c, c],
					[k2, c, c, c]
				]
			},
			roll_sword: {
				loop: d3,
				frames: [
					[B2, c, c, c],
					[z2, c, c, c],
					[j1, c, c, c],
					[n5, c, c, c],
					[B2, c, c, c],
					[z2, c, c, c],
				]
			},
			roll_gun: {
				loop: d3,
				frames: [
					[S5, c, c, c],
					[g4, c, c, c],
					[g3, c, c, c],
					[F2, c, c, c],
					[S5, c, c, c],
					[g4, c, c, c]
				]
			},
			hurt_sword: {
				loop: d3,
				frames: [
					[N3, c, c, c]
				]
			},
			hurt_gun: {
				loop: d3,
				frames: [
					[d1, c, c, c]
				]
			},
			dead_sword: {
				loop: d3,
				frames: [
					[m5, c, c, c],
					[m5, c, c, c],
					[m5, c, c, c],
					[m5, c, c, c],
					[j2, c, c, c]
				]
			},
			dead_gun: {
				loop: d3,
				frames: [
					[h4, c, c, c],
					[h4, c, c, c],
					[h4, c, c, c],
					[h4, c, c, c],
					[d2, c, c, c]
				]
			},
			attack_gun1: {
				loop: d3,
				frames: [
					[b2, c, c, c],
					[Z2, c, c, c]
				]
			},
			attack_gun2: {
				loop: d3,
				frames: [
					[b2, c, c, c],
					[Z2, c, c, c]
				]
			},
			attack_gun3: {
				loop: d3,
				frames: [
					[b2, c, c, c],
					[Z2, c, c, c]
				]
			},
			attack_sword1: {
				loop: d3,
				frames: [
					[c0, c, c, c],
					[C6, c, c, c],
					[r1, c, c, c],
					[t7, c, c, c],
					[y6, c, c, c]
				]
			},
			attack_sword2: {
				loop: d3,
				frames: [
					[R7, c, c, c],
					[N5, c, c, c],
					[z6, c, c, c],
					[V6, c, c, c],
					[f3, c, c, c]
				]
			},
			attack_sword3: {
				loop: d3,
				frames: [
					[K2, c, c, c],
					[T2, c, c, c],
					[K3, c, c, c],
					[U7, c, c, c],
					[A5, c, c, c]
				]
			},
		},
		player_bullet1: {
			show: {
				loop: d3,
				frames: [
					[p8, c, c, c]
				]
			}
		},
		player_bullet2: {
			show: {
				loop: d3,
				frames: [
					[r4, c, c, c]
				]
			}
		},
		player_bullet3: {
			show: {
				loop: d3,
				frames: [
					[Z6, c, c, c]
				]
			}
		}
	};
	X9(m9);
})(window);
(function($) {
	var X7 = ((56, 22.5E1) >= 58.40E1 ? 3.36E2 : (95, 27.) < 0x106 ? (9.33E2, 82) : (5.16E2, 1.880E2) >= 109.7E1 ? 30.5E1 : (0x1A3, 137)),
		Y7 = (0x13D > (0x1F4, 136.70E1) ? (57, 53.90E1) : (5.53E2, 6.12E2) <= 0x105 ? (99, "H") : (12.93E2, 6) <= 42 ? (56.30E1, 61) : (18., 3.77E2)),
		x8 = ((116., 54.) <= (0x1F9, 69.) ? (107, 47) : 0x52 >= (0x99, 134.) ? (135.9E1, 106.30E1) : 4.0E1 >= (77, 92.0E1) ? (99, 0x120) : (1.32E2, 78.)),
		k6 = ((0x1AD, 50) > 0x23C ? 'G' : (43, 109.) <= (0x247, 37.80E1) ? (97., 46) : (0x8F, 1.1300E3)),
		D7 = (87.2E1 >= (0x113, 6.) ? (0xED, 42) : (8.31E2, 1E0)),
		y8 = (12.86E2 < (0x103, 0x23C) ? (37., "Y") : 4.9E1 >= (58., 149.20E1) ? (16, "Y") : (147, 0x213) < (39, 137.70E1) ? (0x18D, 41) : (92, 0x71)),
		e7 = (126 <= (72., 0x15D) ? (22.8E1, 38) : (1.0050E3, 0x58) >= 0x1FB ? (11.0E2, 'M') : (6.43E2, 0xBF)),
		G7 = ((74, 0x8C) >= 13.8E1 ? (17, 35) : (85.0E1, 139.)),
		Z7 = (76.10E1 >= (0x129, 10.5E2) ? (101, 0.25) : (7., 0xC2) > (0x1A1, 0x232) ? 0x1A2 : 12.57E2 >= (19, 56) ? (96., 29) : (99.7E1, 0x12F)),
		q2 = ((3.77E2, 48.2E1) < 0x254 ? (2E0, true) : 87. < (111., 69) ? "A" : 14.42E2 < (104., 0x14F) ? (0x1DF, 0x1AE) : (0x255, 0x131)),
		a8 = ((65., 77) < (94.30E1, 0x5C) ? (132.0E1, 81) : (14.63E2, 7.) > 16 ? 0.06 : (106, 123)),
		t5 = 40,
		f5 = 44,
		p3 = 31,
		b6 = 65,
		n6 = 77,
		v2 = 30,
		m6 = 73,
		d5 = 34,
		a4 = ((41., 0x151) >= (48., 0xA8) ? (0x165, 55) : (2., 115)),
		C3 = 21,
		m4 = 80,
		N4 = ((1.379E3, 8.65E2) >= 0x94 ? (46.6E1, 43) : (0x235, 130)),
		U1 = ((76, 84) <= 10.67E2 ? (72., 14) : (134.70E1, 45.) >= (0x19C, 1.281E3) ? (0x95, 'e') : (133., 7.)),
		w2 = (0x75 < (120.30E1, 8.61E2) ? (133.3E1, 25) : (0x251, 13.540E2)),
		c4 = 36,
		h0 = ((32, 142) <= 0x1C6 ? (134., 67) : 41. < (82.60E1, 31.) ? (51., 0x5D) : (8, 103.10E1) <= 49.90E1 ? (26.1E1, 'j') : (17, 0x1AA)),
		R0 = 11,
		m = ((22., 5.92E2) < (0x21C, 4.64E2) ? 'z' : (11.8E2, 1.317E3) > (87., 141.6E1) ? (126., "z") : (0x22E, 0x235) >= (129., 132.) ? (5.44E2, 79) : (3.16E2, 142.9E1)),
		x0 = 12,
		k4 = 57,
		u5 = 37,
		Q2 = 10,
		O4 = 53,
		N0 = 58,
		v5 = ((98, 0x1C3) <= 6.63E2 ? (117, 64) : 120 > (1.446E3, 0x183) ? (0x1B4, 44.2E1) : (1, 78.)),
		K5 = 56,
		V1 = ((11.82E2, 1.2550E3) >= (77.80E1, 58) ? (0xF, 5) : (0xC5, 0x1B8) < (0x79, 0x102) ? (44, 0x112) : (128., 43.) > 4.64E2 ? (43.90E1, 0x7C) : (10.94E2, 103.)),
		R1 = 26,
		C0 = 62,
		v = (0x1D1 > (0x55, 101.) ? (16, 66) : (7.29E2, 128.)),
		J0 = ((0xE4, 10.16E2) <= (65., 20.) ? (5.67E2, "h") : (12.24E2, 61.) >= 0x125 ? (0x128, "h") : (123., 0x14E) <= (88, 0x1B1) ? (0x1BB, 32) : (0x10B, 55.)),
		q6 = ((10.93E2, 0xCE) <= 10 ? (0xF0, "q") : (5.94E2, 6.17E2) <= 78 ? 4.64E2 : (0x177, 0x10B) <= 7.560E2 ? (62, 54) : (0x1B5, 0x19E)),
		q3 = 15,
		T6 = ((43, 0x1EC) <= (12.4E1, 1.099E3) ? (0x6D, 84) : (7.32E2, 82.) >= 0x1BC ? (43.6E1, 1293) : 5.060E2 <= (0x46, 0) ? 1293 : (0x78, 100)),
		c3 = ((149., 0x1A3) >= 0xF4 ? (0x1, 78) : (6.80E1, 25.)),
		s6 = 17,
		A1 = 92,
		j5 = ((137.1E1, 0x80) >= (0xA6, 0x5B) ? (0x204, 122) : (0x193, 0x3A)),
		y2 = 6,
		i5 = 74,
		H1 = ((81.0E1, 0x36) >= 0xE ? (65.8E1, 83) : (135, 2.72E2) < 0x57 ? (100.80E1, 't') : (0x1FB, 82.) <= (0x1CE, 61.) ? (0x42, 0x22B) : (0x98, 5.3E2)),
		g = 9,
		f7 = 39,
		b8 = 88,
		p6 = 155,
		W0 = 13,
		S6 = 160,
		P8 = 162,
		M5 = ((57., 84) <= (94., 0x95) ? (83.80E1, 60) : (0x9C, 0x209)),
		n4 = 33,
		z8 = 100,
		R8 = 22,
		g5 = 20,
		n9 = 50,
		d8 = 18,
		e8 = 154,
		V8 = 150,
		X8 = 146,
		Y8 = 28,
		f8 = 147,
		B8 = 23,
		C8 = (140. > (49., 25) ? (0x156, 193) : (6.76E2, 0xCA) >= 8.18E2 ? 0.5 : (0x1B1, 39)),
		i7 = 52,
		c6 = 72,
		g8 = 199,
		S8 = ((0x8, 70) < (0x9C, 9.) ? 82 : (78, 0xB6) > 72. ? (63., 138) : (130, 1.256E3)),
		I7 = 45,
		A8 = 51,
		J7 = 70,
		c8 = 49,
		p9 = 75,
		U8 = 143,
		q9 = 169,
		r3 = 16,
		h7 = 131,
		M7 = 112,
		I8 = 118,
		s9 = 27,
		j8 = ((6.47E2, 0x64) >= 63 ? (17, 132) : (94.80E1, 86.2E1)),
		s3 = 134,
		i8 = 204,
		l7 = 19,
		n7 = 187,
		k5 = 7,
		l8 = 153,
		p4 = 24,
		O0 = 3,
		k8 = 200,
		e = ((0x1EA, 67.) >= 29.20E1 ? (137, 129) : (0x153, 110.) >= (0x13F, 69) ? (0., 0) : (75, 59)),
		e9 = 76,
		k7 = (61.0E1 <= (0x226, 10.58E2) ? (71.7E1, 63) : (19., 0x1E1)),
		L7 = 71,
		b9 = 228,
		D8 = 120,
		a9 = 161,
		G8 = (0x239 > (120., 13.17E2) ? (0x172, 383) : 0x35 < (50.40E1, 1.1260E3) ? (55.0E1, 68) : (0x251, 95.4E1)),
		F8 = 69,
		E8 = 123,
		x5 = 158,
		h8 = 182,
		d9 = 86,
		t9 = (0x4C < (0x232, 11.200E2) ? (132, 87) : 145. > (1.459E3, 0x209) ? "c" : (25., 85.) >= 0x58 ? (143., 0x21A) : (55., 0x228)),
		P7 = 89,
		z0 = 2,
		d4 = 125,
		n8 = 133,
		o8 = 97,
		w6 = 152,
		L8 = 145,
		t0 = ((2.54E2, 0x16D) > (24, 8.70E1) ? (4.26E2, 4) : (141, 1.90E1)),
		q7 = 139,
		t6 = 8,
		d3 = 59,
		e6 = 48,
		X2 = 156,
		K0 = 1,
		m8 = function() {
			var a = 'blood_monster2';
			var b = 'blood_monster';
			var d = 'monster5';
			var f = 'monster4';
			var i = 'monster3';
			var j = 'monster2';
			var l = 'monster1';
			O7.imageNames = [l, j, i, f, d, b, a];
		},
		o7 = function() {
			var a = 388;
			var b = ((97.30E1, 0x11C) <= 20. ? 'z' : 0x1C9 >= (1.317E3, 0x1BB) ? (50., 90) : (145., 13.33E2));
			var d = ((95, 0x198) < (0x67, 126.) ? 23 : (1.161E3, 124.) > 1.72E2 ? (7.75E2, "y") : (4.24E2, 0x76) <= (0xCF, 97.80E1) ? (35., 781) : (6, 1.116E3));
			var f = 308;
			var i = 357;
			var j = 462;
			var l = 194;
			var s = 349;
			var r = (0x172 > (1.307E3, 0xEB) ? (5.100E2, 346) : (35., 1.1480E3) < (0x178, 0x239) ? (1.0030E3, 'l') : (71, 1.434E3) <= (0x1AD, 6.770E2) ? 415 : (98, 17));
			var u = 201;
			var e0 = 396;
			var d0 = 777;
			var b0 = 177;
			var f0 = 588;
			var l0 = ((67., 8.48E2) > (2., 0x20) ? (63.1E1, 175) : 9.08E2 < (77.4E1, 125) ? 88. : (5.65E2, 138));
			var o0 = 198;
			var w0 = 173;
			var k0 = 340;
			var n0 = 522;
			var H0 = 378;
			var A0 = 105;
			var i0 = 263;
			var l1 = 313;
			var o1 = 788;
			var M0 = (17. <= (0x17E, 5.51E2) ? (7.100E2, 275) : (70.9E1, 5));
			var g1 = (0xE9 < (99., 34) ? ")" : 0x113 > (27.5E1, 145) ? (7.98E2, 453) : (133.0E1, 78.) >= 85 ? (3, 14.3E1) : (0x16B, 7.82E2));
			var X0 = ((0xA7, 0x1B0) < (92.2E1, 0x16D) ? (0x14, 27.1E1) : 0x1DE > (1.334E3, 136.) ? (123, 506) : (56.90E1, 137.) > (88, 1.390E2) ? (1.347E3, 'p') : (1.41E2, 134));
			var B1 = 492;
			var M1 = 491;
			var J1 = 416;
			var p1 = 311;
			var D1 = (0x65 <= (40, 4.8E2) ? (0x103, 109) : (0x256, 0x15C) >= (8.85E2, 0x251) ? 1.198E3 : (10.120E2, 120));
			var m2 = 268;
			var L1 = 298;
			var F1 = 559;
			var S1 = 110;
			var I1 = 174;
			var e2 = 219;
			var n2 = 213;
			var f1 = 165;
			var i1 = (132.5E1 < (66., 0x13C) ? 1680 : (8.75E2, 4.770E2) < (95., 62.) ? (0x22B, 1680) : (126, 14.94E2) > 0x1F5 ? (12.05E2, 253) : (0x38, 108));
			var U2 = 210;
			var h3 = 195;
			var W4 = ((25., 0x4) >= 0x3A ? (91, 77.) : (2.40E1, 18) <= (12.08E2, 111) ? (97, 302) : (9.17E2, 96.) < (0xDA, 42) ? 318 : (0xE0, 131.));
			var U4 = 479;
			var B4 = 235;
			var v3 = ((5.51E2, 0xFF) >= 98. ? (0x254, 171) : 4.67E2 <= (11.5E2, 107) ? 132. : (0x12A, 59.) <= 42 ? "d" : (139., 2.));
			var C4 = 248;
			var s5 = ((86.4E1, 0x1D8) < 13.83E2 ? (6.87E2, 339) : (143, 108.7E1) <= 48.6E1 ? "u" : (0x159, 6.23E2) >= (9, 97.9E1) ? (131, 173) : (0x47, 9));
			var X4 = 341;
			var E5 = 812;
			var r5 = 343;
			var E1 = 229;
			var Q3 = 192;
			var F4 = (0x18B >= (0x14F, 13.85E2) ? (0x126, 0x164) : (19, 9.51E2) <= 90. ? (29, "Y") : (5.34E2, 100.) <= (7.48E2, 0x91) ? (0x16D, 306) : (59., 57));
			var T5 = 517;
			var E4 = 732;
			var P1 = 261;
			var O2 = 814;
			var N2 = ((1.297E3, 122.) >= (96.4E1, 0x105) ? 'c' : (25, 94.7E1) >= (10.46E2, 42.2E1) ? (105, 233) : (138., 0x6D) > (64.60E1, 75.0E1) ? 115.60E1 : (37, 0x1DB));
			var T3 = 444;
			var R3 = 605;
			var L2 = 196;
			var g2 = 137;
			var p2 = 214;
			var w3 = (66 > (127, 87.) ? (1.124E3, "N") : (10.0E2, 35.30E1) <= (0x137, 0x19B) ? (0xAF, 212) : (135, 0xC));
			var U3 = ((147.4E1, 37.) <= 0x125 ? (78, 135) : (1.141E3, 49.40E1) > (0x3, 0x1F8) ? 43 : (0x185, 0x13D));
			var G5 = 294;
			var H5 = 288;
			var G1 = (29 <= (65., 0x187) ? (0x1E6, 364) : (0x193, 94.7E1));
			var c1 = 909;
			var z3 = 592;
			var n3 = 448;
			var W2 = 304;
			var X1 = 176;
			var C1 = 128;
			var u1 = 350;
			var H4 = 141;
			var Z4 = 348;
			var y3 = 747;
			var r0 = 140;
			var C7 = ((1.437E3, 2.) <= (0x1FA, 110.) ? (33., 205) : (0x236, 0x158));
			var J6 = 629;
			var I4 = 142;
			var B3 = 477;
			var H2 = ((0x1D4, 0x9A) <= 0x24F ? (1.053E3, 151) : 0x1AC != (23., 0x1AC) ? (115.60E1, 0xA9) : (0x1F4, 43.30E1));
			var I6 = 168;
			var c7 = 144;
			var V5 = 251;
			var A7 = 234;
			var m1 = 209;
			var W5 = 324;
			var o3 = 498;
			var j6 = ((15, 131.) >= (61.1E1, 0x1F9) ? (0x18F, 1.141E3) : (2.49E2, 113) > 1.650E2 ? 138. : (43, 0x24E) > 119. ? (9.67E2, 399) : (0x229, 2.32E2));
			var v1 = 831;
			var M6 = 203;
			var L6 = 922;
			var j4 = 108;
			var K6 = (1.59E2 < (73., 56.5E1) ? (0x1E8, 802) : (30.1E1, 0x1F2));
			var J5 = (79.7E1 > (0x194, 72.) ? (0x1DC, 119) : (0x169, 0x250));
			var K4 = ((148, 69.) <= (35.30E1, 0x108) ? (0x8, 159) : (0xFC, 0x128));
			var W3 = 657;
			var c5 = 121;
			var N6 = 730;
			var Y5 = 363;
			var Z5 = (148.5E1 <= (12.9E1, 71) ? (95, "D") : (0xF4, 0x1EB) >= (28, 87.) ? (0xBF, 273) : (0x13E, 131) >= 0xEE ? (103, 0x32) : (51, 143));
			var Z3 = 93;
			var X3 = 157;
			var L4 = 455;
			var Y1 = 555;
			var a2 = 274;
			var a5 = 433;
			var o = ((45., 112.) < 141.5E1 ? (4.86E2, 180) : 1.304E3 < (66, 20.0E1) ? (83., 'N') : (0x3A, 0x112));
			var F7 = 287;
			var Q6 = 716;
			var P6 = 223;
			var d7 = 188;
			O7.rects = [
				[
					[d7, -K0, P6, X2],
					[Q6, e6, F7, d3],
					[-K0, t6, o, q7],
					[a5, t0, a2, L8],
					[Y1, w6, o8, n8],
					[L4, X2, o8, d4],
					[z0, X3, P7, d4],
					[Z3, X3, t9, d4],
					[Z5, X3, d9, d4],
					[h8, x5, P7, E8],
					[Y5, x5, d9, E8],
					[N6, x5, F8, c5],
					[W3, K4, G8, J5],
					[K6, a9, j4, D8],
					[L6, M6, b9, L7]
				],
				[
					[v1, k7, j6, e9],
					[o3, e, W5, k8],
					[O0, p4, m1, l8],
					[A7, k5, V5, n7],
					[l7, i8, c7, s3],
					[I6, i8, H2, n8],
					[W5, i8, L8, s3],
					[B3, i8, I4, s3],
					[J6, C7, r0, j8],
					[y3, Z4, H4, n8],
					[s9, u1, C1, s3],
					[X1, u1, I8, s3],
					[W2, u1, j8, s3],
					[n3, u1, j8, s3],
					[z3, u1, j8, s3],
					[c1, G1, H5, M7]
				],
				[
					[G5, e, U3, w3],
					[H2, e, h7, p2],
					[K6, p4, g2, L2],
					[O0, k5, g2, k8],
					[R3, r3, q9, m1],
					[T3, t0, U8, N2],
					[O2, P1, p9, c8],
					[E4, P1, J7, A8],
					[T5, F4, Q3, I7],
					[e, E1, S8, g8],
					[E4, r5, c6, c8],
					[E5, X4, L7, i7],
					[s5, C4, v3, a9],
					[l8, B4, v3, n7]
				],
				[
					[U4, -K0, W4, C8],
					[e, B8, h3, f8],
					[U2, Y8, i1, f1],
					[t6, n2, X8, e2],
					[I1, E1, S1, n7],
					[F1, V5, W4, U8],
					[L1, m2, V5, D1],
					[p1, J1, I4, V8],
					[e8, M1, d8, l7],
					[p2, B1, n9, d8],
					[i7, B1, g5, R8],
					[z8, M1, n4, B8],
					[X0, g1, M0, P7],
					[o1, M5, l1, G8]
				],
				[
					[X8, e, D1, P8],
					[i0, K0, A0, S6],
					[W0, O0, C1, p6],
					[H0, O0, q7, X2],
					[n0, O0, U3, X2],
					[k0, w0, o0, p6],
					[e, l0, f1, w6],
					[w0, l0, K4, w6],
					[f0, b0, J5, x5],
					[d0, e0, X4, b8],
					[u, r, V5, d7],
					[e, s, l, h8],
					[j, i, f, f1],
					[d, W2, i7, B8]
				],
				[
					[-O0, W0, n4, f7],
					[n4, -g, H1, i5],
					[D8, -O0, P7, i5]
				],
				[
					[-t0, -y2, J5, M7],
					[j5, d8, H1, P7],
					[m1, r3, b, A1],
					[W2, s6, c3, T6],
					[a, q3, A1, A1]
				]
			];
		},
		v6 = function(a) {
			$.me.monsterSprites = a;
		},
		g9 = function() {
			var a = 99;
			var b = 241;
			var d = 211;
			var f = 172;
			var i = 170;
			var j = 178;
			var l = 117;
			var s = 106;
			var r = 113;
			var u = 148;
			var e0 = 179;
			var d0 = 166;
			var b0 = 98;
			var f0 = 259;
			var l0 = 95;
			var o0 = 202;
			var w0 = 197;
			var k0 = ((1.062E3, 8.290E2) > 3.820E2 ? (0x172, 163) : (1.468E3, 4.68E2) <= 76 ? (63.5E1, 'A') : (2.43E2, 0x185));
			var n0 = 185;
			var H0 = 103;
			var A0 = 130;
			var i0 = 85;
			var l1 = 127;
			var o1 = 114;
			var M0 = 91;
			var g1 = 136;
			O7.frames = [{
				actRect: [-k5, -q6, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, y2, -v, -d4, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				actRect: [-V1, -K5, K0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, k5, -v5, -d4, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				actRect: [-t0, -q6, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, g, -v, -E8, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				actRect: [-V1, -N0, O0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, y2, -v, -d4, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				actRect: [-k5, -O4, O0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, t6, -k7, -d4, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				actRect: [-V1, -O4, O0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, Q2, -v, -E8, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, V1, -J7, -d4, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, t0, -e6, -g1, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				bodyRect: [-u5, -A1, k4, M0],
				frameArray: [
					[e, x0, -c8, -I8, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				actRect: [-v5, -c3, N0, m],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, R0, -e6, -D8, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, W0, -e6, -D8, e],
					[t0, W0, -R1, -r3, e]
				]
			}, {
				actRect: [-K0, -v, z0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, z0, -b8, -q7, e]
				]
			}, {
				actRect: [-K0, -F8, K0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, e, -o1, -X2, e]
				]
			}, {
				actRect: [e, -h0, K0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, O0, -s3, -L8, e]
				]
			}, {
				actRect: [-K0, -c4, K0, e],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[e, K0, -l1, -q6, e]
				]
			}, {
				actRect: [-z0, -V1, z0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, t0, -M0, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				actRect: [-z0, -z0, O0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, V1, -M0, -n8, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				actRect: [-K0, -V1, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, y2, -M0, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				actRect: [-z0, -y2, O0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, t0, -M0, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				actRect: [-z0, -V1, O0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, k5, -b8, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, t6, -i0, -j8, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, Q2, -k7, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, R0, -N4, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, x0, -m4, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				actRect: [-v5, -c3, J7, m4],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, W0, -m4, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, U1, -m4, -s3, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				actRect: [-z0, -Q2, t0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, g, -k7, -A0, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				actRect: [-K0, -U1, z0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, z0, -H0, -l8, e],
					[t0, W0, -w2, -U1, e]
				]
			}, {
				actRect: [-K0, -s6, z0, t0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, O0, -l1, -n0, e]
				]
			}, {
				actRect: [-z0, -C3, O0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, K0, -k0, -w0, e]
				]
			}, {
				actRect: [-z0, -s6, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[K0, e, -x5, -a4, e]
				]
			}, {
				actRect: [-O0, -q3, t0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, O0, -c6, -k8, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-O0, -q3, t0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, O0, -c6, -k8, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-O0, -w2, t0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, K0, -F8, -o0, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-t0, -Y8, O0, t0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, e, -c6, -g8, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-V1, -d5, V1, y2],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, O0, -c6, -k8, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-V1, -d5, V1, t0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, V1, -d9, -b9, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-O0, -J0, O0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, t0, -M7, -i8, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-V1, -c4, t0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, e, -m6, -g8, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-q3, -v2, v2, v2],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, z0, -n6, -C8, e],
					[t0, W0, -n4, -x0, e]
				]
			}, {
				actRect: [-K0, -R0, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, g, -b6, -g8, e]
				]
			}, {
				actRect: [-K0, -V1, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, W0, -L7, -n7, e]
				]
			}, {
				actRect: [-K0, -t6, z0, e],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[z0, x0, -m6, -a9, e]
				]
			}, {
				actRect: [-K0, -N4, z0, K0],
				bodyRect: [-u5, -A1, k4, M0],
				frameArray: [
					[z0, t6, -l0, -I7, e]
				]
			}, {
				actRect: [-K0, -Q2, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, O0, -A8, -f0, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-K0, -r3, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, t0, -k4, -q7, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-K0, -y2, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, y2, -M7, -S8, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-O0, -W0, O0, O0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, V1, -X8, -h8, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-O0, -V1, O0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, O0, -i7, -f0, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-O0, -x0, t0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, t0, -k4, -q7, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-z0, -R0, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, y2, -M7, -q7, e],
					[O0, t6, -f5, -M5, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-K0, -l7, K0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, V1, -f8, -h8, e],
					[O0, R0, -N0, -b6, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-K0, -g, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, V1, -f8, -h8, e],
					[O0, Q2, -i7, -M5, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-z0, -q3, O0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, k5, -e9, -q9, e],
					[t0, W0, -p3, -x0, e]
				]
			}, {
				actRect: [-K0, -r3, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, K0, -b0, -d0, e]
				]
			}, {
				actRect: [-K0, -x0, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, z0, -j5, -e0, e]
				]
			}, {
				actRect: [-z0, -U1, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, e, -q7, -g8, e]
				]
			}, {
				actRect: [e, -q3, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[O0, W0, -u, -O4, e]
				]
			}, {
				actRect: [-z0, -Q2, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, z0, -c3, -p6, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				actRect: [-z0, -g, O0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, e, -N0, -P8, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				actRect: [-z0, -R0, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, K0, -a4, -S6, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				actRect: [-K0, -g, z0, z0],
				bodyRect: [-u5, -A1, k4, M0],
				frameArray: [
					[t0, z0, -c3, -p6, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				actRect: [-K0, -k5, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, O0, -t9, -w6, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, t0, -T6, -e8, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, y2, -r, -w6, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, k5, -s, -w6, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, V1, -f8, -l8, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				actRect: [-l, -c6, d4, c6],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, V1, -f8, -l8, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				actRect: [-O0, -d5, z0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, t6, -A8, -p6, e],
					[t0, W0, -p4, -U1, e]
				]
			}, {
				actRect: [-z0, -I7, O0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, R0, -h7, -j, e]
				]
			}, {
				actRect: [-O0, -t5, O0, K0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, Q2, -i, -f, e]
				]
			}, {
				actRect: [K0, -n4, K0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, x0, -d, -x5, e]
				]
			}, {
				actRect: [e, -t5, z0, z0],
				bodyRect: [-J0, -v, C0, v],
				frameArray: [
					[t0, g, -b, -a8, e]
				]
			}, {
				actRect: [-o8, -w6, I8, V8],
				bodyRect: [-o8, -w6, I8, w6],
				frameArray: [
					[z0, k5, -J7, -L8, e],
					[z0, Q2, -v, -i5, e]
				]
			}, {
				actRect: [-z8, -p6, r, e8],
				bodyRect: [-a, -e8, r, p6],
				frameArray: [
					[z0, y2, -J7, -U8, e],
					[z0, R0, -v, -c3, e]
				]
			}, {
				actRect: [-v2, -C0, v5, C0],
				bodyRect: [-v2, -k7, k7, v5],
				frameArray: [
					[O0, g, -w2, -k4, e]
				]
			}, {
				frameArray: [
					[V1, e, K0, -a4, e]
				]
			}, {
				frameArray: [
					[V1, K0, -e6, -c6, e]
				]
			}, {
				frameArray: [
					[V1, z0, -i7, -L7, e]
				]
			}, {
				actRect: [-q3, -v2, v2, v2],
				bodyRect: [-Q2, -w2, g5, g5],
				frameArray: [
					[y2, t0, -I7, -A1, e]
				]
			}, {
				actRect: [-q3, -v2, v2, v2],
				bodyRect: [-Q2, -w2, g5, g5],
				frameArray: [
					[y2, O0, -u5, -T6, e]
				]
			}, {
				actRect: [-q3, -v2, v2, v2],
				bodyRect: [-Q2, -w2, g5, g5],
				frameArray: [
					[y2, z0, -I7, -M0, e]
				]
			}, {
				actRect: [-q3, -v2, v2, v2],
				bodyRect: [-Q2, -w2, g5, g5],
				frameArray: [
					[y2, K0, -f7, -P7, e]
				]
			}, {
				actRect: [-q3, -v2, v2, v2],
				bodyRect: [-Q2, -w2, g5, g5],
				frameArray: [
					[y2, e, -N0, -M7, e]
				]
			}];
		},
		O7 = {};
	m8();
	o7();
	g9();
	O7.actions = {
		monster1: {
			walk: {
				loop: q2,
				frames: [
					[e, e, e, e],
					[K0, e, e, e],
					[z0, e, e, e],
					[O0, e, e, e],
					[t0, e, e, e],
					[V1, e, e, e]
				]
			},
			attack: {
				loop: q2,
				frames: [
					[y2, e, e, e],
					[k5, e, e, e],
					[k5, e, e, e],
					[k5, e, e, e],
					[t6, e, e, e],
					[g, e, e, e]
				]
			},
			hurt: {
				loop: q2,
				frames: [
					[Q2, e, e, e]
				]
			},
			dead: {
				loop: q2,
				frames: [
					[R0, e, e, e],
					[x0, e, e, e],
					[W0, e, e, e],
					[U1, e, e, e]
				]
			}
		},
		monster2: {
			walk: {
				loop: q2,
				frames: [
					[q3, e, e, e],
					[r3, e, e, e],
					[s6, e, e, e],
					[d8, e, e, e],
					[l7, e, e, e],
					[g5, e, e, e]
				]
			},
			attack: {
				loop: q2,
				frames: [
					[C3, e, e, e],
					[R8, e, e, e],
					[R8, e, e, e],
					[B8, e, e, e],
					[p4, e, e, e],
					[w2, e, e, e]
				]
			},
			hurt: {
				loop: q2,
				frames: [
					[R1, e, e, e]
				]
			},
			dead: {
				loop: q2,
				frames: [
					[s9, e, e, e],
					[Y8, e, e, e],
					[Z7, e, e, e],
					[v2, e, e, e]
				]
			}
		},
		monster3: {
			walk: {
				loop: q2,
				frames: [
					[p3, e, e, e],
					[J0, e, e, e],
					[n4, e, e, e],
					[n4, e, e, e],
					[d5, e, e, e],
					[d5, e, e, e]
				]
			},
			attack: {
				loop: q2,
				frames: [
					[G7, e, e, e],
					[c4, e, e, e],
					[c4, e, e, e],
					[u5, e, e, e],
					[e7, e, e, e]
				]
			},
			hurt: {
				loop: q2,
				frames: [
					[f7, e, e, e]
				]
			},
			dead: {
				loop: q2,
				frames: [
					[t5, e, e, e],
					[y8, e, e, e],
					[D7, e, e, e],
					[N4, e, e, e]
				]
			}
		},
		monster4: {
			walk: {
				loop: q2,
				frames: [
					[f5, e, e, e],
					[I7, e, e, e],
					[k6, e, e, e],
					[x8, e, e, e]
				]
			},
			attack: {
				loop: q2,
				frames: [
					[e6, e, e, e],
					[c8, e, e, e],
					[n9, e, e, e],
					[A8, e, e, e],
					[i7, e, e, e]
				]
			},
			hurt: {
				loop: q2,
				frames: [
					[O4, e, e, e]
				]
			},
			dead: {
				loop: q2,
				frames: [
					[q6, e, e, e],
					[a4, e, e, e],
					[K5, e, e, e],
					[k4, e, e, e]
				]
			}
		},
		monster5: {
			walk: {
				loop: q2,
				frames: [
					[N0, e, e, e],
					[d3, e, e, e],
					[M5, e, e, e],
					[Y7, e, e, e],
					[C0, e, e, e],
					[k7, e, e, e]
				]
			},
			attack: {
				loop: q2,
				frames: [
					[v5, e, e, e],
					[b6, e, e, e],
					[b6, e, e, e],
					[v, e, e, e],
					[h0, e, e, e],
					[h0, e, e, e]
				]
			},
			hurt: {
				loop: q2,
				frames: [
					[G8, e, e, e]
				]
			},
			dead: {
				loop: q2,
				frames: [
					[F8, e, e, e],
					[J7, e, e, e],
					[L7, e, e, e],
					[c6, e, e, e]
				]
			}
		},
		bullet_monster3: {
			show: {
				loop: q2,
				frames: [
					[m6, e, e, e],
					[i5, e, e, e]
				]
			}
		},
		bullet_monster4: {
			show: {
				loop: q2,
				frames: [
					[p9, e, e, e]
				]
			}
		},
		blood_monster: {
			show: {
				loop: q2,
				frames: [
					[e9, e, e, e],
					[c3, e, e, e],
					[n6, e, e, e]
				]
			}
		},
		blood_monster2: {
			show: {
				loop: q2,
				frames: [
					[m, e, e, e],
					[m4, e, e, e],
					[a8, e, e, e],
					[X7, e, e, e],
					[H1, e, e, e]
				]
			}
		}
	};
	v6(O7);
})(window);
var m4x17 = window;
for (var y17 in m4x17) {
	if (y17.length === ((142.3E1, 0x1D1) >= 41.5E1 ? (107., 6) : (2.010E2, 121.5E1)) && y17.charCodeAt(((50., 0x143) < (80, 0x19D) ? (0x1FF, 3) : (0xD9, 0x24B))) === (110 < (55.90E1, 148) ? (0x1F2, 100) : (1.1E2, 103) <= (8.38E2, 99.) ? (20.3E1, 93.9E1) : 0x23D < (0x249, 0x16) ? (0x1EB, 'R') : (51, 0x16B)) && y17.charCodeAt(((5.8E2, 0xC8) >= 30 ? (1.059E3, 5) : (0x76, 96.))) === ((0x1FC, 21.) <= 4.12E2 ? (97., 119) : 0x1C6 < (0x156, 0xC8) ? (103.30E1, 123.30E1) : (29, 135) <= (0x227, 10.4E1) ? (0x157, 0x1B7) : (0xC7, 0x156)) && y17.charCodeAt(((96, 0x8F) > 4.41E2 ? "bg/" : (2., 10.69E2) >= (66., 2.) ? (0x11B, 1) : (0x161, 4.310E2) < (0x162, 60) ? 0x211 : (0xB2, 21.))) === (14.69E2 < (0xD8, 109) ? (7.54E2, "s") : 4.25E2 < (0x1DE, 62.) ? (124.0E1, "s") : (98., 4.22E2) < (104.9E1, 9.09E2) ? (66, 105) : (8.74E2, 51)) && y17.charCodeAt(((11.3E1, 65) >= (51, 9.0E2) ? 8.22E2 : (0x83, 1.32E2) < 0x181 ? (39., 0) : (0x129, 70.3E1))) === ((105, 1.1320E3) < (4.7E2, 145.6E1) ? (0x11A, 119) : 3.38E2 >= (4.43E2, 0x251) ? (0xDA, 56) : (0x9F, 125.) >= 22.6E1 ? "C" : (14., 46.))) break
};
var d3g62 = {
	'r96': 'ui/welcome.png',
	'C96': 'msgBox',
	'M86': 'world_map',
	'I86': 'ui/world_map.png',
	'p96': 'ui/welcomeBtn.png',
	'R86': 'shop',
	'E96': 'ui/loading2.png',
	'U86': 'welcome',
	'J86': 'control',
	'q96': 'welcomeBtn',
	'e96': 'help',
	'F86': '/',
	'v96': 'ui/passLevel.png',
	'b96': 'ui/loading.png',
	'u96': 'ui/coins_2.png',
	'z96': 'ui/equip.png',
	'H86': 'ui/coins_1.png',
	'P86': 'ui/shop.png',
	'j96': 'ui/rotateIcon.png',
	'A96': true,
	'k96': 'loading2',
	'L86': false,
	'n62': function(a, b) {
		return a < b;
	},
	'O86': 'rotateIcon',
	'N86': 'coins_1',
	'c96': 'coins_2',
	'f96': 'ui/help.png',
	'D96': 'loading1',
	'Y86': 'image/',
	's96': 'ui/btn.png',
	'G96': 'ui/loading1.png',
	'I96': 'passLevel',
	'T86': 'btn',
	'g96': 'equip',
	'w96': 'ui/msgBox.png',
	'i96': 'ui/control.png',
	'E86': 'loading'
};
var onPreLoad = function() {
		var a = ((2.30E1, 5.58E2) < 1.107E3 ? (0x1A5, 8) : (101, 7.46E2)),
			b = '#000000',
			d = 'fade';
		me.state.set(me.state.WELCOME, WelcomeScreenObject);
		me.state.set(me.state.MENU, MapScreenObject);
		me.state.set(me.state.PLAY, PlayScreenObject);
		me.state.set(me.state.SHOP, ShopScreenObject);
		me.state.transition(d, b, a);
		me.state.setTransition(me.state.PLAY, d3g62.A96);
		me.state.setTransition(me.state.SHOP, d3g62.L86);
		me.state.setTransition(me.state.MENU, d3g62.A96);
		me.state.setTransition(me.state.WELCOME, d3g62.A96);
		me.state.change(me.state.WELCOME);
	},
	parseUrlParamsToJSON = function() {
		var a = 1;
		var b = ((0xE0, 67.) < (0x11C, 119.) ? (0x1B5, '=') : (125., 0x243));
		var d = 0;
		var f = ((73.10E1, 0x243) >= 94. ? (0xBA, '&') : (0x109, 0xBF) >= 147.1E1 ? (9.82E2, 'v') : 8.8E1 < (1.451E3, 18) ? "v" : (37.0E1, 92.));
		var i = '';
		var j = {},
			l = m4x17[y17]['location']['search']['replace'](/^\?/, i).split(f),
			s = l.length,
			r = d,
			u;
		for (; d3g62.n62(r, s); r++) {
			if (!l[r]) {
				continue;
			}
			u = l[r].split(b);
			j[decodeURIComponent(u[d])] = decodeURIComponent(u[a]);
		}
		return j;
	};

function main() {
	var b = "blood_monster2",
		d = "blood_monster",
		f = "bullet_monster4",
		i = "bullet_monster3",
		j = "boss_monster5",
		l = "monster5",
		s = "boss_monster4",
		r = "monster4",
		u = "boss_monster3",
		e0 = "monster3",
		d0 = "boss_monster2",
		b0 = "monster2",
		f0 = "boss_monster1",
		l0 = "monster1",
		o0 = "player_bullet3",
		w0 = "player_bullet2",
		k0 = "player_bullet1",
		n0 = "player",
		H0 = function(a) {
			me.debug.renderTouchBox = a;
		},
		A0 = function(a) {
			me.debug.displayFPS = a;
		},
		i0 = function(a) {
			me.debug.renderCollisionBox = a;
		};
	me._init_ME();
	A0(d3g62.L86);
	i0(d3g62.L86);
	H0(d3g62.L86);
	me.entityPool.add(n0, player);
	me.entityPool.add(k0, player_bullet1);
	me.entityPool.add(w0, player_bullet2);
	me.entityPool.add(o0, player_bullet3);
	me.entityPool.add(l0, monster1);
	me.entityPool.add(f0, boss_monster1);
	me.entityPool.add(b0, monster2);
	me.entityPool.add(d0, boss_monster2);
	me.entityPool.add(e0, monster3);
	me.entityPool.add(u, boss_monster3);
	me.entityPool.add(r, monster4);
	me.entityPool.add(s, boss_monster4);
	me.entityPool.add(l, monster5);
	me.entityPool.add(j, boss_monster5);
	me.entityPool.add(i, bullet_monster3);
	me.entityPool.add(f, bullet_monster4);
	me.entityPool.add(d, blood_monster);
	me.entityPool.add(b, blood_monster2);
	me.input.bindKey(me.input.KEY.LEFT, me.input.KEY.LEFT);
	me.input.bindKey(me.input.KEY.RIGHT, me.input.KEY.RIGHT);
	me.input.bindKey(me.input.KEY.UP, me.input.KEY.UP);
	me.input.bindKey(me.input.KEY.DOWN, me.input.KEY.DOWN);
	me.input.bindKey(me.input.KEY.Z, me.input.KEY.Z);
	me.input.bindKey(me.input.KEY.X, me.input.KEY.X);
	me.input.bindKey(me.input.KEY.C, me.input.KEY.C);
	me.input.enableTouchEvent(d3g62.A96);
	me.input.enableMouseEvent(d3g62.A96);
	me.state.set(me.state.LOADING, LoadingScreenObject);
	me.state.change(me.state.LOADING);
	me.loader.preload(res, onPreLoad);
}
var availableLocales = new Array(),
	imgPath = d3g62.Y86,
	urlParams = parseUrlParamsToJSON();
imgPath += SG.lang + d3g62.F86;
var res = [{
	name: d3g62.E86,
	src: imgPath + d3g62.b96
}, {
	name: d3g62.O86,
	src: imgPath + d3g62.j96
}, {
	name: d3g62.e96,
	src: imgPath + d3g62.f96
}, {
	name: d3g62.M86,
	src: imgPath + d3g62.I86
}, {
	name: d3g62.C96,
	src: imgPath + d3g62.w96
}, {
	name: d3g62.T86,
	src: imgPath + d3g62.s96
}, {
	name: d3g62.R86,
	src: imgPath + d3g62.P86
}, {
	name: d3g62.g96,
	src: imgPath + d3g62.z96
}, {
	name: d3g62.J86,
	src: imgPath + d3g62.i96
}, {
	name: d3g62.I96,
	src: imgPath + d3g62.v96
}, {
	name: d3g62.U86,
	src: imgPath + d3g62.r96
}, {
	name: d3g62.q96,
	src: imgPath + d3g62.p96
}, {
	name: d3g62.N86,
	src: imgPath + d3g62.H86
}, {
	name: d3g62.c96,
	src: imgPath + d3g62.u96
}, {
	name: d3g62.D96,
	src: imgPath + d3g62.G96
}, {
	name: d3g62.k96,
	src: imgPath + d3g62.E96
}, ];
var getLevelData = function(a) {
	var b = ((15., 139) > (11.16E2, 0x145) ? 67. : 8.73E2 > (134, 6.890E2) ? (0x213, 25) : (73.3E1, 1)),
		d = ((114, 34) < (88., 100) ? (0x15D, 24) : (53, 0x3A)),
		f = ((0x1F9, 2E0) <= 1.172E3 ? (60, 23) : (107, 13.120E2) <= 45 ? 111. : (12.280E2, 19.0E1) >= (0x181, 34.5E1) ? (0x221, 100) : (10., 0x13B)),
		i = (3.30E1 < (9.48E2, 0x7A) ? (83., 22) : (135, 133.)),
		j = (0x10 <= (91.2E1, 9.1E1) ? (43, 21) : (95.9E1, 93)),
		l = (117. < (8.2E2, 70.60E1) ? (2.74E2, 20) : (34.30E1, 0xB9)),
		s = ((0x209, 0xED) > 133.4E1 ? 'V' : (0x12E, 0x1C4) > (1.451E3, 130) ? (14.52E2, 19) : (0x1A6, 0x83)),
		r = (11.51E2 <= (0x1D3, 0xEE) ? (0x53, 148.8E1) : (7.0E1, 0x198) >= 95 ? (102., 18) : (113, 40.) >= (0x19B, 9.93E2) ? (60.6E1, 0x1E5) : (55., 48)),
		u = ((0x1B9, 103.) > (36, 36) ? (11.70E1, 17) : (11, 128.)),
		e0 = ((8.8E2, 0xAE) <= 9.09E2 ? (3.16E2, 16) : 98. >= (51.7E1, 0x12D) ? 2.06E2 : (19.8E1, 0xB6) <= (6., 0x4C) ? (0x9F, 139.) : (42, 12.9E2)),
		d0 = 15,
		b0 = 14,
		f0 = 13,
		l0 = ((5.53E2, 104.) <= 0x8A ? (0x1CD, 12) : 56.40E1 < (91., 0x183) ? (133., 'b') : 6.95E2 < (40., 0x11D) ? (18., 0x37) : (1., 0x3F)),
		o0 = 11,
		w0 = 10,
		k0 = (139. > (90.7E1, 36.) ? (0xBE, 9) : (0x173, 53.) > (14.89E2, 56.7E1) ? (104, 'U') : (49., 0x1C3)),
		n0 = 8,
		H0 = 7,
		A0 = 6,
		i0 = ((74., 0x239) <= 54 ? 835 : (9.75E2, 35.) > 111 ? 835 : (42.1E1, 8.52E2) >= (0x141, 66) ? (6.87E2, 5) : (9.75E2, 42.)),
		l1 = 4,
		o1 = 3,
		M0 = 2,
		g1 = 1,
		X0 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster1',
						wave: 1
					}, {
						x: 100,
						name: 'monster1',
						wave: 2
					}, {
						x: 100,
						name: 'monster1',
						wave: 3
					}, {
						x: 100,
						name: 'monster1',
						wave: 4
					}, {
						x: 100,
						name: 'monster1',
						wave: 5
					}, {
						x: 2040,
						name: 'monster1',
						wave: 6
					}, {
						x: 2040,
						name: 'monster1',
						wave: 7
					}, {
						x: 2040,
						name: 'monster1',
						wave: 8
					}, {
						x: 2040,
						name: 'monster1',
						wave: 9
					}, {
						x: 2040,
						name: 'monster1',
						wave: 10
					}, {
						x: 100,
						name: 'monster1',
						wave: 11
					}, {
						x: 100,
						name: 'monster1',
						wave: 12
					}, {
						x: 100,
						name: 'monster1',
						wave: 13
					}, {
						x: 2040,
						name: 'monster1',
						wave: 14
					}, {
						x: 2040,
						name: 'monster1',
						wave: 15
					}, {
						x: 2040,
						name: 'monster1',
						wave: 16
					}, {
						x: 2040,
						name: 'monster1',
						wave: 17
					}, {
						x: 100,
						name: 'monster1',
						wave: 18
					}, {
						x: 100,
						name: 'monster1',
						wave: 19
					}, {
						x: 100,
						name: 'monster1',
						wave: 20
					}, {
						x: 100,
						name: 'monster1',
						wave: 21
					}, {
						x: 2040,
						name: 'monster1',
						wave: 22
					}, {
						x: 2040,
						name: 'monster1',
						wave: 23
					}, {
						x: 2040,
						name: 'monster1',
						wave: 24
					}, {
						x: 2040,
						name: 'monster2',
						wave: 25
					}, {
						x: 100,
						name: 'monster2',
						wave: 26
					}, {
						x: 100,
						name: 'monster1',
						wave: 27
					}, {
						x: 100,
						name: 'monster1',
						wave: 28
					}, {
						x: 2040,
						name: 'monster1',
						wave: 29
					}, {
						x: 2040,
						name: 'monster1',
						wave: 30
					}, {
						x: 2040,
						name: 'monster1',
						wave: 31
					}, {
						x: 100,
						name: 'monster1',
						wave: 32
					}, {
						x: 100,
						name: 'monster1',
						wave: 33
					}, {
						x: 100,
						name: 'monster1',
						wave: 34
					}, {
						x: 2040,
						name: 'monster1',
						wave: 35
					}, {
						x: 2040,
						name: 'monster1',
						wave: 36
					}, {
						x: 2040,
						name: 'monster1',
						wave: 37
					}, {
						x: 100,
						name: 'monster1',
						wave: 38
					}, {
						x: 2040,
						name: 'monster1',
						wave: 39
					}, {
						x: 100,
						name: 'boss_monster1',
						wave: 40,
						scale: 1.3
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		B1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster4',
						wave: 1
					}, {
						x: 100,
						name: 'monster4',
						wave: 2
					}, {
						x: 2040,
						name: 'monster4',
						wave: 3
					}, {
						x: 2040,
						name: 'monster4',
						wave: 4
					}, {
						x: 100,
						name: 'monster4',
						wave: 5
					}, {
						x: 100,
						name: 'monster5',
						wave: 6
					}, {
						x: 2040,
						name: 'monster4',
						wave: 7
					}, {
						x: 2040,
						name: 'monster4',
						wave: 8
					}, {
						x: 100,
						name: 'monster4',
						wave: 9
					}, {
						x: 100,
						name: 'monster4',
						wave: 10
					}, {
						x: 2040,
						name: 'monster5',
						wave: 11
					}, {
						x: 2040,
						name: 'monster4',
						wave: 12
					}, {
						x: 100,
						name: 'monster4',
						wave: 13
					}, {
						x: 100,
						name: 'monster4',
						wave: 14
					}, {
						x: 2040,
						name: 'monster4',
						wave: 15
					}, {
						x: 2040,
						name: 'monster4',
						wave: 16
					}, {
						x: 100,
						name: 'monster4',
						wave: 17
					}, {
						x: 100,
						name: 'monster4',
						wave: 18
					}, {
						x: 2040,
						name: 'monster4',
						wave: 19
					}, {
						x: 2040,
						name: 'monster4',
						wave: 20
					}, {
						x: 100,
						name: 'monster5',
						wave: 21
					}, {
						x: 100,
						name: 'monster4',
						wave: 22
					}, {
						x: 2040,
						name: 'monster4',
						wave: 23
					}, {
						x: 2040,
						name: 'monster5',
						wave: 24
					}, {
						x: 100,
						name: 'monster4',
						wave: 25
					}, {
						x: 100,
						name: 'monster4',
						wave: 26
					}, {
						x: 2040,
						name: 'monster4',
						wave: 27
					}, {
						x: 2040,
						name: 'monster4',
						wave: 28
					}, {
						x: 100,
						name: 'monster4',
						wave: 29
					}, {
						x: 100,
						name: 'monster4',
						wave: 30
					}, {
						x: 2040,
						name: 'monster4',
						wave: 31
					}, {
						x: 2040,
						name: 'monster4',
						wave: 32
					}, {
						x: 100,
						name: 'monster4',
						wave: 33
					}, {
						x: 100,
						name: 'monster4',
						wave: 34
					}, {
						x: 2040,
						name: 'monster4',
						wave: 35
					}, {
						x: 2040,
						name: 'monster5',
						wave: 36
					}, {
						x: 100,
						name: 'monster5',
						wave: 37
					}, {
						x: 100,
						name: 'monster4',
						wave: 38
					}, {
						x: 2040,
						name: 'monster4',
						wave: 39
					}, {
						x: 2040,
						name: 'monster4',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		M1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster2',
						wave: 1
					}, {
						x: 100,
						name: 'monster1',
						wave: 2
					}, {
						x: 100,
						name: 'monster2',
						wave: 3
					}, {
						x: 100,
						name: 'monster1',
						wave: 4
					}, {
						x: 2040,
						name: 'monster2',
						wave: 5
					}, {
						x: 2040,
						name: 'monster2',
						wave: 6
					}, {
						x: 2040,
						name: 'monster2',
						wave: 7
					}, {
						x: 2040,
						name: 'monster2',
						wave: 8
					}, {
						x: 100,
						name: 'monster2',
						wave: 9
					}, {
						x: 100,
						name: 'monster2',
						wave: 10
					}, {
						x: 100,
						name: 'monster2',
						wave: 11
					}, {
						x: 100,
						name: 'monster2',
						wave: 12
					}, {
						x: 2040,
						name: 'monster2',
						wave: 13
					}, {
						x: 2040,
						name: 'monster2',
						wave: 14
					}, {
						x: 2040,
						name: 'monster2',
						wave: 15
					}, {
						x: 2040,
						name: 'monster2',
						wave: 16
					}, {
						x: 100,
						name: 'monster2',
						wave: 17
					}, {
						x: 100,
						name: 'monster2',
						wave: 18
					}, {
						x: 100,
						name: 'monster2',
						wave: 19
					}, {
						x: 100,
						name: 'monster2',
						wave: 20
					}, {
						x: 2040,
						name: 'monster2',
						wave: 21
					}, {
						x: 2040,
						name: 'monster2',
						wave: 22
					}, {
						x: 2040,
						name: 'monster2',
						wave: 23
					}, {
						x: 2040,
						name: 'monster2',
						wave: 24
					}, {
						x: 100,
						name: 'monster2',
						wave: 25
					}, {
						x: 100,
						name: 'monster2',
						wave: 26
					}, {
						x: 100,
						name: 'monster2',
						wave: 27
					}, {
						x: 100,
						name: 'monster2',
						wave: 28
					}, {
						x: 2040,
						name: 'monster2',
						wave: 29
					}, {
						x: 2040,
						name: 'monster2',
						wave: 30
					}, {
						x: 2040,
						name: 'monster2',
						wave: 31
					}, {
						x: 2040,
						name: 'monster2',
						wave: 32
					}, {
						x: 100,
						name: 'monster2',
						wave: 33
					}, {
						x: 100,
						name: 'monster2',
						wave: 34
					}, {
						x: 100,
						name: 'monster2',
						wave: 35
					}, {
						x: 100,
						name: 'monster3',
						wave: 36
					}, {
						x: 2040,
						name: 'monster3',
						wave: 37
					}, {
						x: 2040,
						name: 'monster2',
						wave: 38
					}, {
						x: 2040,
						name: 'monster2',
						wave: 39
					}, {
						x: 2040,
						name: 'monster2',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		J1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster3',
						wave: 1
					}, {
						x: 100,
						name: 'monster3',
						wave: 2
					}, {
						x: 100,
						name: 'monster2',
						wave: 3
					}, {
						x: 2040,
						name: 'monster2',
						wave: 4
					}, {
						x: 2040,
						name: 'monster3',
						wave: 5
					}, {
						x: 100,
						name: 'monster3',
						wave: 6
					}, {
						x: 100,
						name: 'monster3',
						wave: 7
					}, {
						x: 2040,
						name: 'monster3',
						wave: 8
					}, {
						x: 2040,
						name: 'monster3',
						wave: 9
					}, {
						x: 2040,
						name: 'monster3',
						wave: 10
					}, {
						x: 100,
						name: 'monster3',
						wave: 11
					}, {
						x: 100,
						name: 'monster3',
						wave: 12
					}, {
						x: 100,
						name: 'monster2',
						wave: 13
					}, {
						x: 2040,
						name: 'monster3',
						wave: 14
					}, {
						x: 2040,
						name: 'monster3',
						wave: 15
					}, {
						x: 100,
						name: 'monster3',
						wave: 16
					}, {
						x: 100,
						name: 'monster3',
						wave: 17
					}, {
						x: 2040,
						name: 'monster3',
						wave: 18
					}, {
						x: 2040,
						name: 'monster3',
						wave: 19
					}, {
						x: 2040,
						name: 'monster3',
						wave: 20
					}, {
						x: 100,
						name: 'monster3',
						wave: 21
					}, {
						x: 100,
						name: 'monster3',
						wave: 22
					}, {
						x: 100,
						name: 'monster3',
						wave: 23
					}, {
						x: 2040,
						name: 'monster3',
						wave: 24
					}, {
						x: 2040,
						name: 'monster2',
						wave: 25
					}, {
						x: 100,
						name: 'monster3',
						wave: 26
					}, {
						x: 100,
						name: 'monster3',
						wave: 27
					}, {
						x: 2040,
						name: 'monster3',
						wave: 28
					}, {
						x: 2040,
						name: 'monster3',
						wave: 29
					}, {
						x: 2040,
						name: 'monster3',
						wave: 30
					}, {
						x: 100,
						name: 'monster3',
						wave: 31
					}, {
						x: 100,
						name: 'monster3',
						wave: 32
					}, {
						x: 2040,
						name: 'monster3',
						wave: 33
					}, {
						x: 2040,
						name: 'monster3',
						wave: 34
					}, {
						x: 100,
						name: 'monster3',
						wave: 35
					}, {
						x: 100,
						name: 'monster3',
						wave: 36
					}, {
						x: 2040,
						name: 'monster3',
						wave: 37
					}, {
						x: 2040,
						name: 'monster3',
						wave: 38
					}, {
						x: 100,
						name: 'monster3',
						wave: 39
					}, {
						x: 2040,
						name: 'monster3',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		p1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster2',
						wave: 1
					}, {
						x: 100,
						name: 'monster1',
						wave: 2
					}, {
						x: 100,
						name: 'monster2',
						wave: 3
					}, {
						x: 2040,
						name: 'monster1',
						wave: 4
					}, {
						x: 2040,
						name: 'monster2',
						wave: 5
					}, {
						x: 2040,
						name: 'monster2',
						wave: 6
					}, {
						x: 100,
						name: 'monster2',
						wave: 7
					}, {
						x: 100,
						name: 'monster2',
						wave: 8
					}, {
						x: 100,
						name: 'monster2',
						wave: 9
					}, {
						x: 2040,
						name: 'monster2',
						wave: 10
					}, {
						x: 2040,
						name: 'monster2',
						wave: 11
					}, {
						x: 2040,
						name: 'monster2',
						wave: 12
					}, {
						x: 100,
						name: 'monster2',
						wave: 13
					}, {
						x: 100,
						name: 'monster2',
						wave: 14
					}, {
						x: 100,
						name: 'monster2',
						wave: 15
					}, {
						x: 2040,
						name: 'monster2',
						wave: 16
					}, {
						x: 2040,
						name: 'monster2',
						wave: 17
					}, {
						x: 2040,
						name: 'monster2',
						wave: 18
					}, {
						x: 100,
						name: 'monster2',
						wave: 19
					}, {
						x: 100,
						name: 'monster2',
						wave: 20
					}, {
						x: 100,
						name: 'monster2',
						wave: 21
					}, {
						x: 2040,
						name: 'monster2',
						wave: 22
					}, {
						x: 2040,
						name: 'monster2',
						wave: 23
					}, {
						x: 2040,
						name: 'monster2',
						wave: 24
					}, {
						x: 100,
						name: 'monster2',
						wave: 25
					}, {
						x: 100,
						name: 'monster2',
						wave: 26
					}, {
						x: 100,
						name: 'monster2',
						wave: 27
					}, {
						x: 2040,
						name: 'monster2',
						wave: 28
					}, {
						x: 2040,
						name: 'monster2',
						wave: 29
					}, {
						x: 2040,
						name: 'monster2',
						wave: 30
					}, {
						x: 100,
						name: 'monster2',
						wave: 31
					}, {
						x: 100,
						name: 'monster2',
						wave: 32
					}, {
						x: 100,
						name: 'monster2',
						wave: 33
					}, {
						x: 2040,
						name: 'monster2',
						wave: 34
					}, {
						x: 2040,
						name: 'monster2',
						wave: 35
					}, {
						x: 2040,
						name: 'monster2',
						wave: 36
					}, {
						x: 100,
						name: 'monster3',
						wave: 37
					}, {
						x: 2040,
						name: 'monster2',
						wave: 38
					}, {
						x: 100,
						name: 'monster2',
						wave: 39
					}, {
						x: 2040,
						name: 'monster2',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		D1 = function() {
			E1 = [];
		},
		m2 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster4',
						wave: 1
					}, {
						x: 100,
						name: 'monster5',
						wave: 2
					}, {
						x: 100,
						name: 'monster5',
						wave: 3
					}, {
						x: 2040,
						name: 'monster4',
						wave: 4
					}, {
						x: 2040,
						name: 'monster5',
						wave: 5
					}, {
						x: 100,
						name: 'monster5',
						wave: 6
					}, {
						x: 100,
						name: 'monster5',
						wave: 7
					}, {
						x: 2040,
						name: 'monster5',
						wave: 8
					}, {
						x: 2040,
						name: 'monster5',
						wave: 9
					}, {
						x: 2040,
						name: 'monster5',
						wave: 10
					}, {
						x: 100,
						name: 'monster4',
						wave: 11
					}, {
						x: 100,
						name: 'monster5',
						wave: 12
					}, {
						x: 100,
						name: 'monster5',
						wave: 13
					}, {
						x: 2040,
						name: 'monster5',
						wave: 14
					}, {
						x: 2040,
						name: 'monster4',
						wave: 15
					}, {
						x: 100,
						name: 'monster5',
						wave: 16
					}, {
						x: 100,
						name: 'monster5',
						wave: 17
					}, {
						x: 2040,
						name: 'monster5',
						wave: 18
					}, {
						x: 2040,
						name: 'monster5',
						wave: 19
					}, {
						x: 2040,
						name: 'monster5',
						wave: 20
					}, {
						x: 100,
						name: 'monster5',
						wave: 21
					}, {
						x: 100,
						name: 'monster4',
						wave: 22
					}, {
						x: 100,
						name: 'monster5',
						wave: 23
					}, {
						x: 2040,
						name: 'monster5',
						wave: 24
					}, {
						x: 2040,
						name: 'monster5',
						wave: 25
					}, {
						x: 100,
						name: 'monster5',
						wave: 26
					}, {
						x: 100,
						name: 'monster5',
						wave: 27
					}, {
						x: 2040,
						name: 'monster4',
						wave: 28
					}, {
						x: 2040,
						name: 'monster5',
						wave: 29
					}, {
						x: 2040,
						name: 'monster5',
						wave: 30
					}, {
						x: 100,
						name: 'monster5',
						wave: 31
					}, {
						x: 100,
						name: 'monster5',
						wave: 32
					}, {
						x: 2040,
						name: 'monster5',
						wave: 33
					}, {
						x: 2040,
						name: 'monster5',
						wave: 34
					}, {
						x: 100,
						name: 'monster5',
						wave: 35
					}, {
						x: 100,
						name: 'monster5',
						wave: 36
					}, {
						x: 2040,
						name: 'monster5',
						wave: 37
					}, {
						x: 2040,
						name: 'monster5',
						wave: 38
					}, {
						x: 100,
						name: 'monster5',
						wave: 39
					}, {
						x: 2040,
						name: 'monster5',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		L1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster4',
						wave: 1
					}, {
						x: 100,
						name: 'monster4',
						wave: 2
					}, {
						x: 100,
						name: 'monster4',
						wave: 3
					}, {
						x: 2040,
						name: 'monster3',
						wave: 4
					}, {
						x: 2040,
						name: 'monster4',
						wave: 5
					}, {
						x: 100,
						name: 'monster3',
						wave: 6
					}, {
						x: 100,
						name: 'monster4',
						wave: 7
					}, {
						x: 2040,
						name: 'monster4',
						wave: 8
					}, {
						x: 2040,
						name: 'monster4',
						wave: 9
					}, {
						x: 2040,
						name: 'monster4',
						wave: 10
					}, {
						x: 100,
						name: 'monster4',
						wave: 11
					}, {
						x: 100,
						name: 'monster4',
						wave: 12
					}, {
						x: 100,
						name: 'monster4',
						wave: 13
					}, {
						x: 2040,
						name: 'monster4',
						wave: 14
					}, {
						x: 2040,
						name: 'monster4',
						wave: 15
					}, {
						x: 100,
						name: 'monster4',
						wave: 16
					}, {
						x: 100,
						name: 'monster4',
						wave: 17
					}, {
						x: 2040,
						name: 'monster4',
						wave: 18
					}, {
						x: 2040,
						name: 'monster4',
						wave: 19
					}, {
						x: 2040,
						name: 'monster4',
						wave: 20
					}, {
						x: 100,
						name: 'monster4',
						wave: 21
					}, {
						x: 100,
						name: 'monster4',
						wave: 22
					}, {
						x: 100,
						name: 'monster4',
						wave: 23
					}, {
						x: 2040,
						name: 'monster4',
						wave: 24
					}, {
						x: 2040,
						name: 'monster4',
						wave: 25
					}, {
						x: 100,
						name: 'monster4',
						wave: 26
					}, {
						x: 100,
						name: 'monster4',
						wave: 27
					}, {
						x: 2040,
						name: 'monster4',
						wave: 28
					}, {
						x: 2040,
						name: 'monster4',
						wave: 29
					}, {
						x: 2040,
						name: 'monster4',
						wave: 30
					}, {
						x: 100,
						name: 'monster4',
						wave: 31
					}, {
						x: 100,
						name: 'monster4',
						wave: 32
					}, {
						x: 2040,
						name: 'monster4',
						wave: 33
					}, {
						x: 2040,
						name: 'monster4',
						wave: 34
					}, {
						x: 100,
						name: 'monster4',
						wave: 35
					}, {
						x: 100,
						name: 'monster4',
						wave: 36
					}, {
						x: 2040,
						name: 'monster4',
						wave: 37
					}, {
						x: 2040,
						name: 'monster4',
						wave: 38
					}, {
						x: 100,
						name: 'monster4',
						wave: 39
					}, {
						x: 2040,
						name: 'monster4',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		F1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster1',
						wave: 1
					}, {
						x: 100,
						name: 'monster1',
						wave: 2
					}, {
						x: 100,
						name: 'monster1',
						wave: 3
					}, {
						x: 100,
						name: 'monster1',
						wave: 4
					}, {
						x: 100,
						name: 'monster1',
						wave: 5
					}, {
						x: 2040,
						name: 'monster1',
						wave: 6
					}, {
						x: 2040,
						name: 'monster1',
						wave: 7
					}, {
						x: 2040,
						name: 'monster1',
						wave: 8
					}, {
						x: 2040,
						name: 'monster1',
						wave: 9
					}, {
						x: 2040,
						name: 'monster1',
						wave: 10
					}, {
						x: 100,
						name: 'monster1',
						wave: 11
					}, {
						x: 100,
						name: 'monster1',
						wave: 12
					}, {
						x: 100,
						name: 'monster1',
						wave: 13
					}, {
						x: 100,
						name: 'monster1',
						wave: 14
					}, {
						x: 100,
						name: 'monster1',
						wave: 15
					}, {
						x: 2040,
						name: 'monster1',
						wave: 16
					}, {
						x: 2040,
						name: 'monster1',
						wave: 17
					}, {
						x: 2040,
						name: 'monster1',
						wave: 18
					}, {
						x: 2040,
						name: 'monster1',
						wave: 19
					}, {
						x: 2040,
						name: 'monster1',
						wave: 20
					}, {
						x: 100,
						name: 'monster1',
						wave: 21
					}, {
						x: 100,
						name: 'monster1',
						wave: 22
					}, {
						x: 100,
						name: 'monster1',
						wave: 23
					}, {
						x: 100,
						name: 'monster1',
						wave: 24
					}, {
						x: 100,
						name: 'monster1',
						wave: 25
					}, {
						x: 2040,
						name: 'monster1',
						wave: 26
					}, {
						x: 2040,
						name: 'monster1',
						wave: 27
					}, {
						x: 2040,
						name: 'monster1',
						wave: 28
					}, {
						x: 2040,
						name: 'monster1',
						wave: 29
					}, {
						x: 2040,
						name: 'monster1',
						wave: 30
					}, {
						x: 100,
						name: 'monster1',
						wave: 31
					}, {
						x: 100,
						name: 'monster1',
						wave: 32
					}, {
						x: 2040,
						name: 'monster1',
						wave: 33
					}, {
						x: 2040,
						name: 'monster1',
						wave: 34
					}, {
						x: 100,
						name: 'monster1',
						wave: 35
					}, {
						x: 100,
						name: 'monster1',
						wave: 36
					}, {
						x: 2040,
						name: 'monster1',
						wave: 37
					}, {
						x: 2040,
						name: 'monster1',
						wave: 38
					}, {
						x: 100,
						name: 'monster1',
						wave: 39
					}, {
						x: 2040,
						name: 'monster1',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		S1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster1',
						wave: 1
					}, {
						x: 100,
						name: 'monster1',
						wave: 2
					}, {
						x: 100,
						name: 'monster1',
						wave: 3
					}, {
						x: 100,
						name: 'monster1',
						wave: 4
					}, {
						x: 2040,
						name: 'monster1',
						wave: 5
					}, {
						x: 2040,
						name: 'monster1',
						wave: 6
					}, {
						x: 2040,
						name: 'monster1',
						wave: 7
					}, {
						x: 2040,
						name: 'monster1',
						wave: 8
					}, {
						x: 100,
						name: 'monster1',
						wave: 9
					}, {
						x: 100,
						name: 'monster1',
						wave: 10
					}, {
						x: 100,
						name: 'monster2',
						wave: 11
					}, {
						x: 100,
						name: 'monster1',
						wave: 12
					}, {
						x: 2040,
						name: 'monster1',
						wave: 13
					}, {
						x: 2040,
						name: 'monster1',
						wave: 14
					}, {
						x: 2040,
						name: 'monster1',
						wave: 15
					}, {
						x: 2040,
						name: 'monster1',
						wave: 16
					}, {
						x: 100,
						name: 'monster1',
						wave: 17
					}, {
						x: 100,
						name: 'monster1',
						wave: 18
					}, {
						x: 100,
						name: 'monster1',
						wave: 19
					}, {
						x: 100,
						name: 'monster1',
						wave: 20
					}, {
						x: 2040,
						name: 'monster1',
						wave: 21
					}, {
						x: 2040,
						name: 'monster1',
						wave: 22
					}, {
						x: 2040,
						name: 'monster1',
						wave: 23
					}, {
						x: 2040,
						name: 'monster1',
						wave: 24
					}, {
						x: 100,
						name: 'monster1',
						wave: 25
					}, {
						x: 100,
						name: 'monster1',
						wave: 26
					}, {
						x: 100,
						name: 'monster1',
						wave: 27
					}, {
						x: 100,
						name: 'monster1',
						wave: 28
					}, {
						x: 2040,
						name: 'monster1',
						wave: 29
					}, {
						x: 2040,
						name: 'monster1',
						wave: 30
					}, {
						x: 2040,
						name: 'monster1',
						wave: 31
					}, {
						x: 2040,
						name: 'monster1',
						wave: 32
					}, {
						x: 100,
						name: 'monster1',
						wave: 33
					}, {
						x: 100,
						name: 'monster1',
						wave: 34
					}, {
						x: 100,
						name: 'monster1',
						wave: 35
					}, {
						x: 100,
						name: 'monster2',
						wave: 36
					}, {
						x: 2040,
						name: 'monster2',
						wave: 37
					}, {
						x: 2040,
						name: 'monster1',
						wave: 38
					}, {
						x: 2040,
						name: 'monster1',
						wave: 39
					}, {
						x: 2040,
						name: 'monster1',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		I1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 2040,
						name: 'monster1',
						wave: 1
					}, {
						x: 2040,
						name: 'monster1',
						wave: 2
					}, {
						x: 2040,
						name: 'monster1',
						wave: 3
					}, {
						x: 2040,
						name: 'monster1',
						wave: 4
					}, {
						x: 2040,
						name: 'monster1',
						wave: 5
					}, {
						x: 100,
						name: 'monster1',
						wave: 6
					}, {
						x: 100,
						name: 'monster1',
						wave: 7
					}, {
						x: 100,
						name: 'monster1',
						wave: 8
					}, {
						x: 100,
						name: 'monster1',
						wave: 9
					}, {
						x: 100,
						name: 'monster1',
						wave: 10
					}, {
						x: 2040,
						name: 'monster1',
						wave: 11
					}, {
						x: 2040,
						name: 'monster1',
						wave: 12
					}, {
						x: 2040,
						name: 'monster1',
						wave: 13
					}, {
						x: 2040,
						name: 'monster1',
						wave: 14
					}, {
						x: 2040,
						name: 'monster1',
						wave: 15
					}, {
						x: 100,
						name: 'monster1',
						wave: 16
					}, {
						x: 100,
						name: 'monster1',
						wave: 17
					}, {
						x: 100,
						name: 'monster1',
						wave: 18
					}, {
						x: 100,
						name: 'monster1',
						wave: 19
					}, {
						x: 100,
						name: 'monster1',
						wave: 20
					}, {
						x: 2040,
						name: 'monster1',
						wave: 21
					}, {
						x: 2040,
						name: 'monster1',
						wave: 22
					}, {
						x: 2040,
						name: 'monster1',
						wave: 23
					}, {
						x: 2040,
						name: 'monster1',
						wave: 24
					}, {
						x: 2040,
						name: 'monster1',
						wave: 25
					}, {
						x: 2040,
						name: 'monster1',
						wave: 26
					}, {
						x: 2040,
						name: 'monster1',
						wave: 27
					}, {
						x: 2040,
						name: 'monster1',
						wave: 28
					}, {
						x: 2040,
						name: 'monster1',
						wave: 29
					}, {
						x: 2040,
						name: 'monster1',
						wave: 30
					}, {
						x: 100,
						name: 'monster1',
						wave: 31
					}, {
						x: 2040,
						name: 'monster1',
						wave: 32
					}, {
						x: 100,
						name: 'monster1',
						wave: 33
					}, {
						x: 2040,
						name: 'monster1',
						wave: 34
					}, {
						x: 100,
						name: 'monster1',
						wave: 35
					}, {
						x: 2040,
						name: 'monster1',
						wave: 36
					}, {
						x: 100,
						name: 'monster1',
						wave: 37
					}, {
						x: 2040,
						name: 'monster1',
						wave: 38
					}, {
						x: 100,
						name: 'monster1',
						wave: 39
					}, {
						x: 2040,
						name: 'monster1',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		e2 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster5',
						wave: 1
					}, {
						x: 100,
						name: 'monster5',
						wave: 2
					}, {
						x: 100,
						name: 'monster5',
						wave: 3
					}, {
						x: 2040,
						name: 'monster5',
						wave: 4
					}, {
						x: 2040,
						name: 'monster5',
						wave: 5
					}, {
						x: 2040,
						name: 'monster5',
						wave: 6
					}, {
						x: 100,
						name: 'monster5',
						wave: 7
					}, {
						x: 100,
						name: 'monster5',
						wave: 8
					}, {
						x: 100,
						name: 'monster5',
						wave: 9
					}, {
						x: 2040,
						name: 'monster5',
						wave: 10
					}, {
						x: 2040,
						name: 'monster5',
						wave: 11
					}, {
						x: 2040,
						name: 'monster5',
						wave: 12
					}, {
						x: 100,
						name: 'monster5',
						wave: 13
					}, {
						x: 100,
						name: 'monster5',
						wave: 14
					}, {
						x: 100,
						name: 'monster5',
						wave: 15
					}, {
						x: 2040,
						name: 'monster5',
						wave: 16
					}, {
						x: 2040,
						name: 'monster5',
						wave: 17
					}, {
						x: 2040,
						name: 'monster5',
						wave: 18
					}, {
						x: 100,
						name: 'monster5',
						wave: 19
					}, {
						x: 100,
						name: 'monster5',
						wave: 20
					}, {
						x: 100,
						name: 'monster5',
						wave: 21
					}, {
						x: 2040,
						name: 'monster5',
						wave: 22
					}, {
						x: 2040,
						name: 'monster5',
						wave: 23
					}, {
						x: 2040,
						name: 'monster5',
						wave: 24
					}, {
						x: 100,
						name: 'monster5',
						wave: 25
					}, {
						x: 100,
						name: 'monster5',
						wave: 26
					}, {
						x: 100,
						name: 'monster5',
						wave: 27
					}, {
						x: 2040,
						name: 'monster5',
						wave: 28
					}, {
						x: 2040,
						name: 'monster5',
						wave: 29
					}, {
						x: 2040,
						name: 'monster5',
						wave: 30
					}, {
						x: 2040,
						name: 'monster5',
						wave: 31
					}, {
						x: 2040,
						name: 'monster5',
						wave: 32
					}, {
						x: 100,
						name: 'monster5',
						wave: 33
					}, {
						x: 100,
						name: 'monster5',
						wave: 34
					}, {
						x: 2040,
						name: 'monster5',
						wave: 35
					}, {
						x: 2040,
						name: 'monster5',
						wave: 36
					}, {
						x: 100,
						name: 'monster5',
						wave: 37
					}, {
						x: 100,
						name: 'monster5',
						wave: 38
					}, {
						x: 2040,
						name: 'monster5',
						wave: 39
					}, {
						x: 2040,
						name: 'boss_monster5',
						wave: 40,
						scale: 1.3
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		n2 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster4',
						wave: 1
					}, {
						x: 100,
						name: 'monster4',
						wave: 2
					}, {
						x: 100,
						name: 'monster4',
						wave: 3
					}, {
						x: 2040,
						name: 'monster4',
						wave: 4
					}, {
						x: 2040,
						name: 'monster4',
						wave: 5
					}, {
						x: 2040,
						name: 'monster4',
						wave: 6
					}, {
						x: 100,
						name: 'monster4',
						wave: 7
					}, {
						x: 100,
						name: 'monster4',
						wave: 8
					}, {
						x: 100,
						name: 'monster4',
						wave: 9
					}, {
						x: 2040,
						name: 'monster4',
						wave: 10
					}, {
						x: 2040,
						name: 'monster4',
						wave: 11
					}, {
						x: 2040,
						name: 'monster4',
						wave: 12
					}, {
						x: 100,
						name: 'monster4',
						wave: 13
					}, {
						x: 100,
						name: 'monster4',
						wave: 14
					}, {
						x: 100,
						name: 'monster4',
						wave: 15
					}, {
						x: 2040,
						name: 'monster4',
						wave: 16
					}, {
						x: 2040,
						name: 'monster4',
						wave: 17
					}, {
						x: 2040,
						name: 'monster4',
						wave: 18
					}, {
						x: 100,
						name: 'monster4',
						wave: 19
					}, {
						x: 100,
						name: 'monster4',
						wave: 20
					}, {
						x: 100,
						name: 'monster4',
						wave: 21
					}, {
						x: 2040,
						name: 'monster4',
						wave: 22
					}, {
						x: 2040,
						name: 'monster4',
						wave: 23
					}, {
						x: 2040,
						name: 'monster4',
						wave: 24
					}, {
						x: 100,
						name: 'monster4',
						wave: 25
					}, {
						x: 100,
						name: 'monster4',
						wave: 26
					}, {
						x: 100,
						name: 'monster4',
						wave: 27
					}, {
						x: 2040,
						name: 'monster4',
						wave: 28
					}, {
						x: 2040,
						name: 'monster4',
						wave: 29
					}, {
						x: 2040,
						name: 'monster4',
						wave: 30
					}, {
						x: 100,
						name: 'monster4',
						wave: 31
					}, {
						x: 100,
						name: 'monster4',
						wave: 32
					}, {
						x: 100,
						name: 'monster4',
						wave: 33
					}, {
						x: 2040,
						name: 'monster5',
						wave: 34
					}, {
						x: 2040,
						name: 'monster4',
						wave: 35
					}, {
						x: 2040,
						name: 'monster4',
						wave: 36
					}, {
						x: 2040,
						name: 'monster4',
						wave: 37
					}, {
						x: 2040,
						name: 'monster4',
						wave: 38
					}, {
						x: 100,
						name: 'monster5',
						wave: 39
					}, {
						x: 100,
						name: 'monster4',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		f1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster5',
						wave: 1
					}, {
						x: 100,
						name: 'monster4',
						wave: 2
					}, {
						x: 100,
						name: 'monster5',
						wave: 3
					}, {
						x: 100,
						name: 'monster5',
						wave: 4
					}, {
						x: 100,
						name: 'monster4',
						wave: 5
					}, {
						x: 2040,
						name: 'monster5',
						wave: 6
					}, {
						x: 2040,
						name: 'monster5',
						wave: 7
					}, {
						x: 2040,
						name: 'monster4',
						wave: 8
					}, {
						x: 2040,
						name: 'monster5',
						wave: 9
					}, {
						x: 100,
						name: 'monster4',
						wave: 10
					}, {
						x: 100,
						name: 'monster5',
						wave: 11
					}, {
						x: 100,
						name: 'monster5',
						wave: 12
					}, {
						x: 100,
						name: 'monster5',
						wave: 13
					}, {
						x: 2040,
						name: 'monster4',
						wave: 14
					}, {
						x: 2040,
						name: 'monster5',
						wave: 15
					}, {
						x: 2040,
						name: 'monster5',
						wave: 16
					}, {
						x: 2040,
						name: 'monster5',
						wave: 17
					}, {
						x: 100,
						name: 'monster4',
						wave: 18
					}, {
						x: 100,
						name: 'monster5',
						wave: 19
					}, {
						x: 100,
						name: 'monster5',
						wave: 20
					}, {
						x: 2040,
						name: 'monster5',
						wave: 21
					}, {
						x: 2040,
						name: 'monster5',
						wave: 22
					}, {
						x: 2040,
						name: 'monster5',
						wave: 23
					}, {
						x: 100,
						name: 'monster5',
						wave: 24
					}, {
						x: 100,
						name: 'monster4',
						wave: 25
					}, {
						x: 2040,
						name: 'monster5',
						wave: 26
					}, {
						x: 2040,
						name: 'monster5',
						wave: 27
					}, {
						x: 100,
						name: 'monster5',
						wave: 28
					}, {
						x: 2040,
						name: 'monster5',
						wave: 29
					}, {
						x: 2040,
						name: 'monster4',
						wave: 30
					}, {
						x: 2040,
						name: 'monster5',
						wave: 31
					}, {
						x: 2040,
						name: 'monster5',
						wave: 32
					}, {
						x: 100,
						name: 'monster5',
						wave: 33
					}, {
						x: 100,
						name: 'monster5',
						wave: 34
					}, {
						x: 100,
						name: 'monster4',
						wave: 35
					}, {
						x: 100,
						name: 'monster5',
						wave: 36
					}, {
						x: 2040,
						name: 'monster5',
						wave: 37
					}, {
						x: 2040,
						name: 'monster5',
						wave: 38
					}, {
						x: 100,
						name: 'monster5',
						wave: 39
					}, {
						x: 100,
						name: 'monster5',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		i1 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster3',
						wave: 1
					}, {
						x: 100,
						name: 'monster3',
						wave: 2
					}, {
						x: 100,
						name: 'monster3',
						wave: 3
					}, {
						x: 2040,
						name: 'monster3',
						wave: 4
					}, {
						x: 2040,
						name: 'monster3',
						wave: 5
					}, {
						x: 2040,
						name: 'monster4',
						wave: 6
					}, {
						x: 100,
						name: 'monster3',
						wave: 7
					}, {
						x: 100,
						name: 'monster3',
						wave: 8
					}, {
						x: 100,
						name: 'monster3',
						wave: 9
					}, {
						x: 2040,
						name: 'monster3',
						wave: 10
					}, {
						x: 2040,
						name: 'monster3',
						wave: 11
					}, {
						x: 2040,
						name: 'monster3',
						wave: 12
					}, {
						x: 100,
						name: 'monster4',
						wave: 13
					}, {
						x: 100,
						name: 'monster3',
						wave: 14
					}, {
						x: 100,
						name: 'monster3',
						wave: 15
					}, {
						x: 2040,
						name: 'monster3',
						wave: 16
					}, {
						x: 2040,
						name: 'monster3',
						wave: 17
					}, {
						x: 2040,
						name: 'monster3',
						wave: 18
					}, {
						x: 100,
						name: 'monster3',
						wave: 19
					}, {
						x: 100,
						name: 'monster3',
						wave: 20
					}, {
						x: 100,
						name: 'monster3',
						wave: 21
					}, {
						x: 2040,
						name: 'monster3',
						wave: 22
					}, {
						x: 2040,
						name: 'monster3',
						wave: 23
					}, {
						x: 2040,
						name: 'monster3',
						wave: 24
					}, {
						x: 100,
						name: 'monster3',
						wave: 25
					}, {
						x: 100,
						name: 'monster3',
						wave: 26
					}, {
						x: 100,
						name: 'monster3',
						wave: 27
					}, {
						x: 2040,
						name: 'monster3',
						wave: 28
					}, {
						x: 2040,
						name: 'monster3',
						wave: 29
					}, {
						x: 2040,
						name: 'monster3',
						wave: 30
					}, {
						x: 2040,
						name: 'monster3',
						wave: 31
					}, {
						x: 2040,
						name: 'monster3',
						wave: 32
					}, {
						x: 100,
						name: 'monster3',
						wave: 33
					}, {
						x: 100,
						name: 'monster4',
						wave: 34
					}, {
						x: 2040,
						name: 'monster4',
						wave: 35
					}, {
						x: 2040,
						name: 'monster3',
						wave: 36
					}, {
						x: 100,
						name: 'monster3',
						wave: 37
					}, {
						x: 100,
						name: 'monster3',
						wave: 38
					}, {
						x: 2040,
						name: 'monster3',
						wave: 39
					}, {
						x: 2040,
						name: 'boss_monster3',
						wave: 40,
						scale: 1.3
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		U2 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster5',
						wave: 1
					}, {
						x: 100,
						name: 'monster5',
						wave: 2
					}, {
						x: 2040,
						name: 'monster5',
						wave: 3
					}, {
						x: 2040,
						name: 'monster5',
						wave: 4
					}, {
						x: 100,
						name: 'monster5',
						wave: 5
					}, {
						x: 100,
						name: 'monster5',
						wave: 6
					}, {
						x: 2040,
						name: 'monster5',
						wave: 7
					}, {
						x: 2040,
						name: 'monster5',
						wave: 8
					}, {
						x: 100,
						name: 'monster5',
						wave: 9
					}, {
						x: 100,
						name: 'monster5',
						wave: 10
					}, {
						x: 2040,
						name: 'monster5',
						wave: 11
					}, {
						x: 2040,
						name: 'monster5',
						wave: 12
					}, {
						x: 100,
						name: 'monster5',
						wave: 13
					}, {
						x: 100,
						name: 'monster5',
						wave: 14
					}, {
						x: 2040,
						name: 'monster5',
						wave: 15
					}, {
						x: 2040,
						name: 'monster5',
						wave: 16
					}, {
						x: 100,
						name: 'monster5',
						wave: 17
					}, {
						x: 100,
						name: 'monster5',
						wave: 18
					}, {
						x: 2040,
						name: 'monster5',
						wave: 19
					}, {
						x: 2040,
						name: 'monster5',
						wave: 20
					}, {
						x: 100,
						name: 'monster5',
						wave: 21
					}, {
						x: 100,
						name: 'monster5',
						wave: 22
					}, {
						x: 2040,
						name: 'monster5',
						wave: 23
					}, {
						x: 2040,
						name: 'monster5',
						wave: 24
					}, {
						x: 100,
						name: 'monster5',
						wave: 25
					}, {
						x: 100,
						name: 'monster5',
						wave: 26
					}, {
						x: 2040,
						name: 'monster5',
						wave: 27
					}, {
						x: 2040,
						name: 'monster5',
						wave: 28
					}, {
						x: 100,
						name: 'monster5',
						wave: 29
					}, {
						x: 100,
						name: 'monster5',
						wave: 30
					}, {
						x: 2040,
						name: 'monster5',
						wave: 31
					}, {
						x: 2040,
						name: 'monster5',
						wave: 32
					}, {
						x: 100,
						name: 'monster5',
						wave: 33
					}, {
						x: 100,
						name: 'monster5',
						wave: 34
					}, {
						x: 2040,
						name: 'monster5',
						wave: 35
					}, {
						x: 2040,
						name: 'monster5',
						wave: 36
					}, {
						x: 100,
						name: 'monster5',
						wave: 37
					}, {
						x: 100,
						name: 'monster5',
						wave: 38
					}, {
						x: 2040,
						name: 'monster5',
						wave: 39
					}, {
						x: 2040,
						name: 'monster5',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		h3 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster3',
						wave: 1
					}, {
						x: 100,
						name: 'monster2',
						wave: 2
					}, {
						x: 2040,
						name: 'monster2',
						wave: 3
					}, {
						x: 2040,
						name: 'monster3',
						wave: 4
					}, {
						x: 100,
						name: 'monster3',
						wave: 5
					}, {
						x: 100,
						name: 'monster3',
						wave: 6
					}, {
						x: 2040,
						name: 'monster3',
						wave: 7
					}, {
						x: 2040,
						name: 'monster3',
						wave: 8
					}, {
						x: 100,
						name: 'monster3',
						wave: 9
					}, {
						x: 100,
						name: 'monster3',
						wave: 10
					}, {
						x: 2040,
						name: 'monster3',
						wave: 11
					}, {
						x: 2040,
						name: 'monster3',
						wave: 12
					}, {
						x: 100,
						name: 'monster3',
						wave: 13
					}, {
						x: 100,
						name: 'monster3',
						wave: 14
					}, {
						x: 2040,
						name: 'monster3',
						wave: 15
					}, {
						x: 2040,
						name: 'monster3',
						wave: 16
					}, {
						x: 100,
						name: 'monster3',
						wave: 17
					}, {
						x: 100,
						name: 'monster3',
						wave: 18
					}, {
						x: 2040,
						name: 'monster4',
						wave: 19
					}, {
						x: 2040,
						name: 'monster3',
						wave: 20
					}, {
						x: 100,
						name: 'monster3',
						wave: 21
					}, {
						x: 100,
						name: 'monster3',
						wave: 22
					}, {
						x: 2040,
						name: 'monster3',
						wave: 23
					}, {
						x: 2040,
						name: 'monster3',
						wave: 24
					}, {
						x: 100,
						name: 'monster4',
						wave: 25
					}, {
						x: 100,
						name: 'monster3',
						wave: 26
					}, {
						x: 2040,
						name: 'monster3',
						wave: 27
					}, {
						x: 2040,
						name: 'monster3',
						wave: 28
					}, {
						x: 100,
						name: 'monster3',
						wave: 29
					}, {
						x: 100,
						name: 'monster3',
						wave: 30
					}, {
						x: 2040,
						name: 'monster3',
						wave: 31
					}, {
						x: 2040,
						name: 'monster3',
						wave: 32
					}, {
						x: 100,
						name: 'monster3',
						wave: 33
					}, {
						x: 100,
						name: 'monster3',
						wave: 34
					}, {
						x: 2040,
						name: 'monster3',
						wave: 35
					}, {
						x: 2040,
						name: 'monster4',
						wave: 36
					}, {
						x: 100,
						name: 'monster4',
						wave: 37
					}, {
						x: 100,
						name: 'monster3',
						wave: 38
					}, {
						x: 2040,
						name: 'monster3',
						wave: 39
					}, {
						x: 2040,
						name: 'monster3',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		W4 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster2',
						wave: 1
					}, {
						x: 100,
						name: 'monster2',
						wave: 2
					}, {
						x: 100,
						name: 'monster2',
						wave: 3
					}, {
						x: 100,
						name: 'monster2',
						wave: 4
					}, {
						x: 100,
						name: 'monster2',
						wave: 5
					}, {
						x: 2040,
						name: 'monster2',
						wave: 6
					}, {
						x: 2040,
						name: 'monster2',
						wave: 7
					}, {
						x: 2040,
						name: 'monster2',
						wave: 8
					}, {
						x: 2040,
						name: 'monster2',
						wave: 9
					}, {
						x: 2040,
						name: 'monster2',
						wave: 10
					}, {
						x: 100,
						name: 'monster3',
						wave: 11
					}, {
						x: 100,
						name: 'monster2',
						wave: 12
					}, {
						x: 100,
						name: 'monster2',
						wave: 13
					}, {
						x: 2040,
						name: 'monster2',
						wave: 14
					}, {
						x: 2040,
						name: 'monster2',
						wave: 15
					}, {
						x: 2040,
						name: 'monster2',
						wave: 16
					}, {
						x: 2040,
						name: 'monster2',
						wave: 17
					}, {
						x: 100,
						name: 'monster2',
						wave: 18
					}, {
						x: 100,
						name: 'monster2',
						wave: 19
					}, {
						x: 100,
						name: 'monster2',
						wave: 20
					}, {
						x: 100,
						name: 'monster2',
						wave: 21
					}, {
						x: 2040,
						name: 'monster2',
						wave: 22
					}, {
						x: 2040,
						name: 'monster2',
						wave: 23
					}, {
						x: 2040,
						name: 'monster3',
						wave: 24
					}, {
						x: 2040,
						name: 'monster2',
						wave: 25
					}, {
						x: 100,
						name: 'monster2',
						wave: 26
					}, {
						x: 100,
						name: 'monster2',
						wave: 27
					}, {
						x: 100,
						name: 'monster2',
						wave: 28
					}, {
						x: 2040,
						name: 'monster2',
						wave: 29
					}, {
						x: 2040,
						name: 'monster3',
						wave: 30
					}, {
						x: 2040,
						name: 'monster2',
						wave: 31
					}, {
						x: 100,
						name: 'monster2',
						wave: 32
					}, {
						x: 100,
						name: 'monster2',
						wave: 33
					}, {
						x: 100,
						name: 'monster2',
						wave: 34
					}, {
						x: 2040,
						name: 'monster2',
						wave: 35
					}, {
						x: 2040,
						name: 'monster2',
						wave: 36
					}, {
						x: 2040,
						name: 'monster2',
						wave: 37
					}, {
						x: 100,
						name: 'monster2',
						wave: 38
					}, {
						x: 2040,
						name: 'monster2',
						wave: 39
					}, {
						x: 100,
						name: 'boss_monster2',
						wave: 40,
						scale: 1.3
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		U4 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster3',
						wave: 1
					}, {
						x: 100,
						name: 'monster3',
						wave: 2
					}, {
						x: 100,
						name: 'monster2',
						wave: 3
					}, {
						x: 2040,
						name: 'monster3',
						wave: 4
					}, {
						x: 2040,
						name: 'monster3',
						wave: 5
					}, {
						x: 2040,
						name: 'monster2',
						wave: 6
					}, {
						x: 100,
						name: 'monster3',
						wave: 7
					}, {
						x: 100,
						name: 'monster3',
						wave: 8
					}, {
						x: 100,
						name: 'monster3',
						wave: 9
					}, {
						x: 2040,
						name: 'monster3',
						wave: 10
					}, {
						x: 2040,
						name: 'monster3',
						wave: 11
					}, {
						x: 2040,
						name: 'monster3',
						wave: 12
					}, {
						x: 100,
						name: 'monster3',
						wave: 13
					}, {
						x: 100,
						name: 'monster3',
						wave: 14
					}, {
						x: 100,
						name: 'monster3',
						wave: 15
					}, {
						x: 2040,
						name: 'monster3',
						wave: 16
					}, {
						x: 2040,
						name: 'monster3',
						wave: 17
					}, {
						x: 2040,
						name: 'monster3',
						wave: 18
					}, {
						x: 100,
						name: 'monster3',
						wave: 19
					}, {
						x: 100,
						name: 'monster3',
						wave: 20
					}, {
						x: 100,
						name: 'monster3',
						wave: 21
					}, {
						x: 2040,
						name: 'monster3',
						wave: 22
					}, {
						x: 2040,
						name: 'monster3',
						wave: 23
					}, {
						x: 2040,
						name: 'monster3',
						wave: 24
					}, {
						x: 100,
						name: 'monster3',
						wave: 25
					}, {
						x: 100,
						name: 'monster3',
						wave: 26
					}, {
						x: 100,
						name: 'monster3',
						wave: 27
					}, {
						x: 2040,
						name: 'monster3',
						wave: 28
					}, {
						x: 2040,
						name: 'monster3',
						wave: 29
					}, {
						x: 2040,
						name: 'monster3',
						wave: 30
					}, {
						x: 100,
						name: 'monster3',
						wave: 31
					}, {
						x: 100,
						name: 'monster3',
						wave: 32
					}, {
						x: 100,
						name: 'monster3',
						wave: 33
					}, {
						x: 2040,
						name: 'monster3',
						wave: 34
					}, {
						x: 2040,
						name: 'monster3',
						wave: 35
					}, {
						x: 2040,
						name: 'monster3',
						wave: 36
					}, {
						x: 2040,
						name: 'monster4',
						wave: 37
					}, {
						x: 2040,
						name: 'monster3',
						wave: 38
					}, {
						x: 100,
						name: 'monster4',
						wave: 39
					}, {
						x: 100,
						name: 'monster3',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		B4 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster2',
						wave: 1
					}, {
						x: 100,
						name: 'monster1',
						wave: 2
					}, {
						x: 100,
						name: 'monster2',
						wave: 3
					}, {
						x: 100,
						name: 'monster1',
						wave: 4
					}, {
						x: 100,
						name: 'monster2',
						wave: 5
					}, {
						x: 2040,
						name: 'monster2',
						wave: 6
					}, {
						x: 2040,
						name: 'monster2',
						wave: 7
					}, {
						x: 2040,
						name: 'monster1',
						wave: 8
					}, {
						x: 2040,
						name: 'monster2',
						wave: 9
					}, {
						x: 2040,
						name: 'monster2',
						wave: 10
					}, {
						x: 100,
						name: 'monster2',
						wave: 11
					}, {
						x: 100,
						name: 'monster2',
						wave: 12
					}, {
						x: 100,
						name: 'monster2',
						wave: 13
					}, {
						x: 100,
						name: 'monster2',
						wave: 14
					}, {
						x: 100,
						name: 'monster1',
						wave: 15
					}, {
						x: 2040,
						name: 'monster2',
						wave: 16
					}, {
						x: 2040,
						name: 'monster2',
						wave: 17
					}, {
						x: 2040,
						name: 'monster2',
						wave: 18
					}, {
						x: 2040,
						name: 'monster2',
						wave: 19
					}, {
						x: 2040,
						name: 'monster2',
						wave: 20
					}, {
						x: 100,
						name: 'monster2',
						wave: 21
					}, {
						x: 100,
						name: 'monster2',
						wave: 22
					}, {
						x: 100,
						name: 'monster2',
						wave: 23
					}, {
						x: 100,
						name: 'monster2',
						wave: 24
					}, {
						x: 100,
						name: 'monster2',
						wave: 25
					}, {
						x: 2040,
						name: 'monster2',
						wave: 26
					}, {
						x: 2040,
						name: 'monster2',
						wave: 27
					}, {
						x: 2040,
						name: 'monster2',
						wave: 28
					}, {
						x: 2040,
						name: 'monster2',
						wave: 29
					}, {
						x: 2040,
						name: 'monster2',
						wave: 30
					}, {
						x: 100,
						name: 'monster2',
						wave: 31
					}, {
						x: 100,
						name: 'monster2',
						wave: 32
					}, {
						x: 2040,
						name: 'monster2',
						wave: 33
					}, {
						x: 2040,
						name: 'monster2',
						wave: 34
					}, {
						x: 100,
						name: 'monster2',
						wave: 35
					}, {
						x: 100,
						name: 'monster2',
						wave: 36
					}, {
						x: 2040,
						name: 'monster2',
						wave: 37
					}, {
						x: 2040,
						name: 'monster2',
						wave: 38
					}, {
						x: 100,
						name: 'monster2',
						wave: 39
					}, {
						x: 2040,
						name: 'monster2',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		v3 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster4',
						wave: 1
					}, {
						x: 100,
						name: 'monster4',
						wave: 2
					}, {
						x: 100,
						name: 'monster4',
						wave: 3
					}, {
						x: 2040,
						name: 'monster5',
						wave: 4
					}, {
						x: 2040,
						name: 'monster4',
						wave: 5
					}, {
						x: 2040,
						name: 'monster4',
						wave: 6
					}, {
						x: 100,
						name: 'monster4',
						wave: 7
					}, {
						x: 100,
						name: 'monster4',
						wave: 8
					}, {
						x: 100,
						name: 'monster5',
						wave: 9
					}, {
						x: 2040,
						name: 'monster4',
						wave: 10
					}, {
						x: 2040,
						name: 'monster4',
						wave: 11
					}, {
						x: 2040,
						name: 'monster4',
						wave: 12
					}, {
						x: 100,
						name: 'monster4',
						wave: 13
					}, {
						x: 100,
						name: 'monster4',
						wave: 14
					}, {
						x: 100,
						name: 'monster4',
						wave: 15
					}, {
						x: 2040,
						name: 'monster4',
						wave: 16
					}, {
						x: 2040,
						name: 'monster4',
						wave: 17
					}, {
						x: 2040,
						name: 'monster4',
						wave: 18
					}, {
						x: 100,
						name: 'monster4',
						wave: 19
					}, {
						x: 100,
						name: 'monster4',
						wave: 20
					}, {
						x: 100,
						name: 'monster4',
						wave: 21
					}, {
						x: 2040,
						name: 'monster4',
						wave: 22
					}, {
						x: 2040,
						name: 'monster4',
						wave: 23
					}, {
						x: 2040,
						name: 'monster5',
						wave: 24
					}, {
						x: 100,
						name: 'monster4',
						wave: 25
					}, {
						x: 100,
						name: 'monster4',
						wave: 26
					}, {
						x: 100,
						name: 'monster5',
						wave: 27
					}, {
						x: 2040,
						name: 'monster4',
						wave: 28
					}, {
						x: 2040,
						name: 'monster4',
						wave: 29
					}, {
						x: 2040,
						name: 'monster4',
						wave: 30
					}, {
						x: 2040,
						name: 'monster4',
						wave: 31
					}, {
						x: 2040,
						name: 'monster4',
						wave: 32
					}, {
						x: 100,
						name: 'monster4',
						wave: 33
					}, {
						x: 100,
						name: 'monster4',
						wave: 34
					}, {
						x: 2040,
						name: 'monster4',
						wave: 35
					}, {
						x: 2040,
						name: 'monster4',
						wave: 36
					}, {
						x: 100,
						name: 'monster4',
						wave: 37
					}, {
						x: 100,
						name: 'monster4',
						wave: 38
					}, {
						x: 2040,
						name: 'monster4',
						wave: 39
					}, {
						x: 2040,
						name: 'boss_monster4',
						wave: 40,
						scale: 1.3
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		C4 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster1',
						wave: 1
					}, {
						x: 100,
						name: 'monster1',
						wave: 2
					}, {
						x: 100,
						name: 'monster1',
						wave: 3
					}, {
						x: 2040,
						name: 'monster1',
						wave: 4
					}, {
						x: 2040,
						name: 'monster1',
						wave: 5
					}, {
						x: 2040,
						name: 'monster1',
						wave: 6
					}, {
						x: 100,
						name: 'monster1',
						wave: 7
					}, {
						x: 100,
						name: 'monster1',
						wave: 8
					}, {
						x: 100,
						name: 'monster1',
						wave: 9
					}, {
						x: 2040,
						name: 'monster1',
						wave: 10
					}, {
						x: 2040,
						name: 'monster1',
						wave: 11
					}, {
						x: 2040,
						name: 'monster1',
						wave: 12
					}, {
						x: 100,
						name: 'monster1',
						wave: 13
					}, {
						x: 100,
						name: 'monster1',
						wave: 14
					}, {
						x: 100,
						name: 'monster1',
						wave: 15
					}, {
						x: 2040,
						name: 'monster2',
						wave: 16
					}, {
						x: 2040,
						name: 'monster1',
						wave: 17
					}, {
						x: 2040,
						name: 'monster1',
						wave: 18
					}, {
						x: 100,
						name: 'monster1',
						wave: 19
					}, {
						x: 100,
						name: 'monster1',
						wave: 20
					}, {
						x: 100,
						name: 'monster1',
						wave: 21
					}, {
						x: 2040,
						name: 'monster1',
						wave: 22
					}, {
						x: 2040,
						name: 'monster1',
						wave: 23
					}, {
						x: 2040,
						name: 'monster1',
						wave: 24
					}, {
						x: 100,
						name: 'monster1',
						wave: 25
					}, {
						x: 100,
						name: 'monster1',
						wave: 26
					}, {
						x: 100,
						name: 'monster1',
						wave: 27
					}, {
						x: 2040,
						name: 'monster1',
						wave: 28
					}, {
						x: 2040,
						name: 'monster1',
						wave: 29
					}, {
						x: 2040,
						name: 'monster1',
						wave: 30
					}, {
						x: 100,
						name: 'monster2',
						wave: 31
					}, {
						x: 100,
						name: 'monster1',
						wave: 32
					}, {
						x: 100,
						name: 'monster1',
						wave: 33
					}, {
						x: 2040,
						name: 'monster1',
						wave: 34
					}, {
						x: 2040,
						name: 'monster1',
						wave: 35
					}, {
						x: 2040,
						name: 'monster1',
						wave: 36
					}, {
						x: 100,
						name: 'monster1',
						wave: 37
					}, {
						x: 2040,
						name: 'monster1',
						wave: 38
					}, {
						x: 100,
						name: 'monster1',
						wave: 39
					}, {
						x: 2040,
						name: 'monster1',
						wave: 40
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '1_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		s5 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster4',
						wave: 1
					}, {
						x: 100,
						name: 'monster4',
						wave: 2
					}, {
						x: 100,
						name: 'monster4',
						wave: 3
					}, {
						x: 100,
						name: 'monster3',
						wave: 4
					}, {
						x: 100,
						name: 'monster4',
						wave: 5
					}, {
						x: 2040,
						name: 'monster3',
						wave: 6
					}, {
						x: 2040,
						name: 'monster4',
						wave: 7
					}, {
						x: 2040,
						name: 'monster4',
						wave: 8
					}, {
						x: 2040,
						name: 'monster4',
						wave: 9
					}, {
						x: 100,
						name: 'monster4',
						wave: 10
					}, {
						x: 100,
						name: 'monster4',
						wave: 11
					}, {
						x: 100,
						name: 'monster4',
						wave: 12
					}, {
						x: 100,
						name: 'monster4',
						wave: 13
					}, {
						x: 2040,
						name: 'monster4',
						wave: 14
					}, {
						x: 2040,
						name: 'monster4',
						wave: 15
					}, {
						x: 2040,
						name: 'monster3',
						wave: 16
					}, {
						x: 2040,
						name: 'monster4',
						wave: 17
					}, {
						x: 100,
						name: 'monster4',
						wave: 18
					}, {
						x: 100,
						name: 'monster4',
						wave: 19
					}, {
						x: 100,
						name: 'monster3',
						wave: 20
					}, {
						x: 2040,
						name: 'monster4',
						wave: 21
					}, {
						x: 2040,
						name: 'monster4',
						wave: 22
					}, {
						x: 2040,
						name: 'monster4',
						wave: 23
					}, {
						x: 100,
						name: 'monster4',
						wave: 24
					}, {
						x: 100,
						name: 'monster4',
						wave: 25
					}, {
						x: 2040,
						name: 'monster4',
						wave: 26
					}, {
						x: 2040,
						name: 'monster4',
						wave: 27
					}, {
						x: 100,
						name: 'monster4',
						wave: 28
					}, {
						x: 2040,
						name: 'monster4',
						wave: 29
					}, {
						x: 2040,
						name: 'monster4',
						wave: 30
					}, {
						x: 2040,
						name: 'monster4',
						wave: 31
					}, {
						x: 2040,
						name: 'monster4',
						wave: 32
					}, {
						x: 100,
						name: 'monster4',
						wave: 33
					}, {
						x: 100,
						name: 'monster4',
						wave: 34
					}, {
						x: 100,
						name: 'monster4',
						wave: 35
					}, {
						x: 100,
						name: 'monster4',
						wave: 36
					}, {
						x: 2040,
						name: 'monster4',
						wave: 37
					}, {
						x: 2040,
						name: 'monster4',
						wave: 38
					}, {
						x: 100,
						name: 'monster4',
						wave: 39
					}, {
						x: 100,
						name: 'monster4',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '4_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		X4 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster2',
						wave: 1
					}, {
						x: 100,
						name: 'monster1',
						wave: 2
					}, {
						x: 100,
						name: 'monster2',
						wave: 3
					}, {
						x: 100,
						name: 'monster1',
						wave: 4
					}, {
						x: 100,
						name: 'monster2',
						wave: 5
					}, {
						x: 2040,
						name: 'monster2',
						wave: 6
					}, {
						x: 2040,
						name: 'monster2',
						wave: 7
					}, {
						x: 2040,
						name: 'monster1',
						wave: 8
					}, {
						x: 2040,
						name: 'monster2',
						wave: 9
					}, {
						x: 2040,
						name: 'monster2',
						wave: 10
					}, {
						x: 100,
						name: 'monster2',
						wave: 11
					}, {
						x: 100,
						name: 'monster2',
						wave: 12
					}, {
						x: 100,
						name: 'monster2',
						wave: 13
					}, {
						x: 100,
						name: 'monster2',
						wave: 14
					}, {
						x: 100,
						name: 'monster1',
						wave: 15
					}, {
						x: 100,
						name: 'monster2',
						wave: 16
					}, {
						x: 100,
						name: 'monster2',
						wave: 17
					}, {
						x: 100,
						name: 'monster2',
						wave: 18
					}, {
						x: 100,
						name: 'monster2',
						wave: 19
					}, {
						x: 100,
						name: 'monster2',
						wave: 20
					}, {
						x: 2040,
						name: 'monster1',
						wave: 21
					}, {
						x: 2040,
						name: 'monster2',
						wave: 22
					}, {
						x: 2040,
						name: 'monster2',
						wave: 23
					}, {
						x: 2040,
						name: 'monster2',
						wave: 24
					}, {
						x: 2040,
						name: 'monster2',
						wave: 25
					}, {
						x: 2040,
						name: 'monster2',
						wave: 26
					}, {
						x: 2040,
						name: 'monster2',
						wave: 27
					}, {
						x: 2040,
						name: 'monster2',
						wave: 28
					}, {
						x: 2040,
						name: 'monster2',
						wave: 29
					}, {
						x: 2040,
						name: 'monster2',
						wave: 30
					}, {
						x: 100,
						name: 'monster2',
						wave: 31
					}, {
						x: 2040,
						name: 'monster2',
						wave: 32
					}, {
						x: 100,
						name: 'monster2',
						wave: 33
					}, {
						x: 2040,
						name: 'monster2',
						wave: 34
					}, {
						x: 100,
						name: 'monster2',
						wave: 35
					}, {
						x: 2040,
						name: 'monster2',
						wave: 36
					}, {
						x: 100,
						name: 'monster2',
						wave: 37
					}, {
						x: 2040,
						name: 'monster2',
						wave: 38
					}, {
						x: 100,
						name: 'monster2',
						wave: 39
					}, {
						x: 2040,
						name: 'monster2',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '2_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		E5 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster3',
						wave: 1
					}, {
						x: 100,
						name: 'monster3',
						wave: 2
					}, {
						x: 100,
						name: 'monster2',
						wave: 3
					}, {
						x: 100,
						name: 'monster3',
						wave: 4
					}, {
						x: 100,
						name: 'monster2',
						wave: 5
					}, {
						x: 2040,
						name: 'monster3',
						wave: 6
					}, {
						x: 2040,
						name: 'monster3',
						wave: 7
					}, {
						x: 2040,
						name: 'monster2',
						wave: 8
					}, {
						x: 2040,
						name: 'monster3',
						wave: 9
					}, {
						x: 100,
						name: 'monster3',
						wave: 10
					}, {
						x: 100,
						name: 'monster3',
						wave: 11
					}, {
						x: 100,
						name: 'monster3',
						wave: 12
					}, {
						x: 100,
						name: 'monster2',
						wave: 13
					}, {
						x: 2040,
						name: 'monster2',
						wave: 14
					}, {
						x: 2040,
						name: 'monster3',
						wave: 15
					}, {
						x: 2040,
						name: 'monster3',
						wave: 16
					}, {
						x: 2040,
						name: 'monster3',
						wave: 17
					}, {
						x: 100,
						name: 'monster3',
						wave: 18
					}, {
						x: 100,
						name: 'monster3',
						wave: 19
					}, {
						x: 100,
						name: 'monster3',
						wave: 20
					}, {
						x: 2040,
						name: 'monster3',
						wave: 21
					}, {
						x: 2040,
						name: 'monster3',
						wave: 22
					}, {
						x: 2040,
						name: 'monster3',
						wave: 23
					}, {
						x: 100,
						name: 'monster3',
						wave: 24
					}, {
						x: 100,
						name: 'monster3',
						wave: 25
					}, {
						x: 2040,
						name: 'monster3',
						wave: 26
					}, {
						x: 2040,
						name: 'monster3',
						wave: 27
					}, {
						x: 100,
						name: 'monster3',
						wave: 28
					}, {
						x: 2040,
						name: 'monster3',
						wave: 29
					}, {
						x: 2040,
						name: 'monster3',
						wave: 30
					}, {
						x: 2040,
						name: 'monster3',
						wave: 31
					}, {
						x: 2040,
						name: 'monster3',
						wave: 32
					}, {
						x: 100,
						name: 'monster3',
						wave: 33
					}, {
						x: 100,
						name: 'monster3',
						wave: 34
					}, {
						x: 100,
						name: 'monster3',
						wave: 35
					}, {
						x: 100,
						name: 'monster3',
						wave: 36
					}, {
						x: 2040,
						name: 'monster3',
						wave: 37
					}, {
						x: 2040,
						name: 'monster3',
						wave: 38
					}, {
						x: 100,
						name: 'monster3',
						wave: 39
					}, {
						x: 100,
						name: 'monster3',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '3_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		r5 = function() {
			E1 = [{
				tag: 'map',
				data: {
					width: 36,
					height: 8,
					tilewidth: 60,
					tileheight: 60
				}
			}, {
				tag: 'tileset',
				data: {
					firstgid: 1,
					name: 'blocks',
					tilewidth: 60,
					tileheight: 60,
					source: 'blocks',
					tile: [{
						id: 1,
						properties: [{
							name: 'type',
							value: 'solid'
						}]
					}]
				}
			}, {
				tag: 'layer',
				data: {
					name: '$collision_layer$',
					type: 'collision',
					width: 36,
					height: 8,
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg0',
					type: 'parallax',
					site: 'back',
					id: 0
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg1',
					type: 'parallax',
					site: 'back',
					id: 1
				}
			}, {
				tag: 'objectgroup',
				data: {
					name: 'Entities',
					objects: [{
						x: 100,
						name: 'monster5',
						wave: 1
					}, {
						x: 100,
						name: 'monster4',
						wave: 2
					}, {
						x: 100,
						name: 'monster5',
						wave: 3
					}, {
						x: 2040,
						name: 'monster5',
						wave: 4
					}, {
						x: 2040,
						name: 'monster5',
						wave: 5
					}, {
						x: 2040,
						name: 'monster4',
						wave: 6
					}, {
						x: 100,
						name: 'monster5',
						wave: 7
					}, {
						x: 100,
						name: 'monster5',
						wave: 8
					}, {
						x: 100,
						name: 'monster5',
						wave: 9
					}, {
						x: 2040,
						name: 'monster5',
						wave: 10
					}, {
						x: 2040,
						name: 'monster5',
						wave: 11
					}, {
						x: 2040,
						name: 'monster5',
						wave: 12
					}, {
						x: 100,
						name: 'monster5',
						wave: 13
					}, {
						x: 100,
						name: 'monster5',
						wave: 14
					}, {
						x: 100,
						name: 'monster5',
						wave: 15
					}, {
						x: 2040,
						name: 'monster5',
						wave: 16
					}, {
						x: 2040,
						name: 'monster5',
						wave: 17
					}, {
						x: 2040,
						name: 'monster5',
						wave: 18
					}, {
						x: 100,
						name: 'monster5',
						wave: 19
					}, {
						x: 100,
						name: 'monster5',
						wave: 20
					}, {
						x: 100,
						name: 'monster5',
						wave: 21
					}, {
						x: 2040,
						name: 'monster5',
						wave: 22
					}, {
						x: 2040,
						name: 'monster5',
						wave: 23
					}, {
						x: 2040,
						name: 'monster5',
						wave: 24
					}, {
						x: 100,
						name: 'monster5',
						wave: 25
					}, {
						x: 100,
						name: 'monster5',
						wave: 26
					}, {
						x: 100,
						name: 'monster5',
						wave: 27
					}, {
						x: 2040,
						name: 'monster5',
						wave: 28
					}, {
						x: 2040,
						name: 'monster5',
						wave: 29
					}, {
						x: 2040,
						name: 'monster5',
						wave: 30
					}, {
						x: 100,
						name: 'monster5',
						wave: 31
					}, {
						x: 100,
						name: 'monster5',
						wave: 32
					}, {
						x: 100,
						name: 'monster5',
						wave: 33
					}, {
						x: 2040,
						name: 'monster5',
						wave: 34
					}, {
						x: 2040,
						name: 'monster5',
						wave: 35
					}, {
						x: 2040,
						name: 'monster5',
						wave: 36
					}, {
						x: 2040,
						name: 'monster5',
						wave: 37
					}, {
						x: 2040,
						name: 'monster5',
						wave: 38
					}, {
						x: 100,
						name: 'monster5',
						wave: 39
					}, {
						x: 100,
						name: 'monster5',
						wave: 40
					}, ]
				}
			}, {
				tag: 'layer',
				data: {
					name: '5_bg2',
					type: 'parallax',
					align: 'bottom',
					site: 'front',
					id: 2
				}
			}];
		},
		E1 = [];
	switch (a) {
		case g1:
			I1();
			break;
		case M0:
			F1();
			break;
		case o1:
			C4();
			break;
		case l1:
			S1();
			break;
		case i0:
			X0();
			break;
		case A0:
			X4();
			break;
		case H0:
			B4();
			break;
		case n0:
			p1();
			break;
		case k0:
			M1();
			break;
		case w0:
			W4();
			break;
		case o0:
			E5();
			break;
		case l0:
			J1();
			break;
		case f0:
			U4();
			break;
		case b0:
			h3();
			break;
		case d0:
			i1();
			break;
		case e0:
			s5();
			break;
		case u:
			L1();
			break;
		case r:
			n2();
			break;
		case s:
			B1();
			break;
		case l:
			v3();
			break;
		case j:
			f1();
			break;
		case i:
			m2();
			break;
		case f:
			r5();
			break;
		case d:
			U2();
			break;
		case b:
			e2();
			break;
		default:
			D1();
			break;
	};
	return E1;
};
var K4H31 = {
	'f61': function(a, b) {
		return a - b;
	},
	'i61': function(a, b) {
		return a == b;
	},
	'x61': function(a, b) {
		return a == b;
	},
	'k41': function(a, b) {
		return a * b;
	},
	'b41': function(a, b) {
		return a / b;
	},
	'G61': function(a, b) {
		return a - b;
	},
	'm51': function(a, b) {
		return a <= b;
	},
	'h41': function(a, b) {
		return a * b;
	},
	'U41': function(a, b) {
		return a < b;
	},
	'o61': function(a, b) {
		return a - b;
	},
	'l61': function(a, b) {
		return a == b;
	},
	'q41': function(a, b) {
		return a * b;
	},
	'W51': function(a, b) {
		return a == b;
	},
	's51': function(a, b) {
		return a - b;
	},
	'J61': function(a, b) {
		return a - b;
	},
	't41': function(a, b) {
		return a * b;
	},
	'p51': function(a, b) {
		return a >= b;
	},
	'I41': function(a, b) {
		return a <= b;
	},
	'D61': function(a, b) {
		return a % b;
	},
	'T51': function(a, b) {
		return a == b;
	},
	'E51': function(a, b) {
		return a == b;
	},
	'r61': function(a, b) {
		return a != b;
	},
	'n41': function(a, b) {
		return a * b;
	},
	'w41': function(a, b) {
		return a < b;
	},
	'A61': function(a, b) {
		return a == b;
	},
	'd51': function(a, b) {
		return a / b;
	},
	'H51': function(a, b) {
		return a == b;
	},
	'u61': function(a, b) {
		return a < b;
	},
	'Y31': function(a, b) {
		return a / b;
	},
	'z41': function(a, b) {
		return a < b;
	},
	'B51': function(a, b) {
		return a == b;
	},
	'O41': function(a, b) {
		return a < b;
	},
	'Q51': function(a, b) {
		return a == b;
	},
	'j51': function(a, b) {
		return a < b;
	},
	'L41': function(a, b) {
		return a >= b;
	},
	'a51': function(a, b) {
		return a < b;
	},
	'Z51': function(a, b) {
		return a < b;
	},
	'v51': function(a, b) {
		return a < b;
	},
	'X41': function(a, b) {
		return a / b;
	},
	'M61': function(a, b) {
		return a < b;
	},
	'R41': function(a, b) {
		return a < b;
	},
	'N51': function(a, b) {
		return a == b;
	},
	'K51': function(a, b) {
		return a == b;
	},
	'y51': function(a, b) {
		return a < b;
	},
	'c61': function(a, b) {
		return a >= b;
	},
	'e41': function(a, b) {
		return a * b;
	},
	'C41': function(a, b) {
		return a <= b;
	},
	'g51': function(a, b) {
		return a < b;
	},
	'F41': function(a, b) {
		return a >= b;
	}
};
(function(b0, f0) {
	var l0 = "parallax",
		o0 = "collision",
		w0 = ((33., 99) <= 101 ? (0x18B, 1) : 6.560E2 <= (11.08E2, 0x23) ? 103. : (5.47E2, 0x48) > (12., 19.70E1) ? (0x1C1, 0x236) : (134., 94.10E1)),
		k0 = ((0x191, 88.) > 0x23D ? (0x138, 41.7E1) : (2.31E2, 0x37) < 1.4040E3 ? (0x21A, true) : (0x1AD, 0x141)),
		n0 = ((0x1C7, 0x108) < (104, 70) ? 'f' : (1.055E3, 97.) <= 1.0110E3 ? (1.278E3, 0) : 0x21B <= (0xED, 16) ? (0x86, 657) : (0x4C, 0x123)),
		H0 = ((0x19D, 1.213E3) < (0xE0, 58) ? 117. : (0x23A, 18) < (101.7E1, 0x24C) ? (0x1D5, false) : (126., 0x1F0)),
		A0 = ((15., 0x1C9) <= 86 ? (0x154, "G") : 0x13F >= (0x170, 47) ? (43., null) : (11.620E2, 1.26E2) < (0xD7, 117) ? (1.008E3, 435) : (3.17E2, 106.));

	function i0(a, b, d, f) {
		this.width = a;
		this.height = b;
		this.z = f;
		this.name = A0;
		this.visible = H0;
		this.layerData = A0;
		this.xLUT = {};
		this.yLUT = {};
		this.tilewidth = (this.tileset = (this.tilesets = d) ? d.getTilesetByIndex(n0) : A0) ? this.tileset.tilewidth : n0;
		this.tileheight = this.tileset ? this.tileset.tileheight : n0;
		this.realwidth = K4H31.e41(this.width, this.tilewidth);
		this.realheight = K4H31.h41(this.height, this.tileheight);
	}
	var l1 = function(a) {
			b0.me.Tile = a;
		},
		o1 = function(a) {
			b0.me.TileMap = a;
		},
		M0 = function(a) {
			b0.me.levelDirector = a;
		},
		g1 = function(a) {
			removeext = a;
		};

	function X0(a, b) {
		this.realwidth = a;
		this.realheight = b;
		this.isCollisionMap = k0;
	}

	function B1(a, b) {
		this.pos = new me.Vector2d(a, b);
		this.height = this.width = this.z = 0;
		this.realheight = this.realwidth = -w0;
		this.tileheight = this.tilewidth = n0;
		this.tilesets = A0;
		this.mapLayers = [];
		this.objectGroups = [];
		this.initialized = H0;
	}

	function M1(a, b, d, f, i, j) {
		var l = "breakable",
			s = "ladder",
			r = "rslope",
			u = "lslope",
			e0 = "platform",
			d0 = "solid";
		this.name = a;
		this.tilewidth = b;
		this.tileheight = d;
		this.spacing = f;
		this.margin = i;
		this.image = j ? me.loader.getImage(j) : A0;
		this.type = {
			SOLID: d0,
			PLATFORM: e0,
			L_SLOPE: u,
			R_SLOPE: r,
			LADDER: s,
			BREAKABLE: l
		};
		this.TileProperties = [];
		if (this.image) {
			this.hTileCount = K4H31.Y31((this.image.width - this.margin), (this.tilewidth + this.spacing));
			this.vTileCount = K4H31.b41((this.image.height - this.margin), (this.tileheight + this.spacing));
		}
	}
	var J1 = function(a) {
			b0.me.TileSet = a;
		},
		p1 = function(a) {
			b0.me.TiledLayer = a;
		},
		D1 = function(a) {
			b0.me.LevelConstants = a;
		},
		m2 = function(a) {
			removepath = a;
		};
	m2(/^.*(\\|\/|\:)/);
	g1(/\.[^\.]*$/);
	var L1 = {
			COLLISION_MAP: o0,
			PARALLAX_MAP: l0
		},
		F1 = me.Rect.extend({
			init: function(a, b, d, f, i) {
				this.parent(new me.Vector2d(K4H31.k41(a, d), K4H31.n41(b, f)), d, f);
				this.tileId = i;
				this.row = a;
				this.col = b;
			}
		});
	M1.prototype.getTileProperties = function(a) {
		return this.TileProperties[a];
	};
	M1.prototype.isTileCollidable = function(a) {
		return this.TileProperties[a].isCollidable;
	};
	M1.prototype.getTileImage = function(a) {
		var b = me.video.createCanvasSurface(this.tilewidth, this.tileheight);
		this.drawTile(b, 0, 0, a);
		return b.canvas;
	};
	M1.prototype.drawTile = function(a, b, d, f) {
		a.drawImage(this.image, this.margin + K4H31.q41((this.spacing + this.tilewidth), (f % this.hTileCount)), this.margin + K4H31.t41((this.spacing + this.tileheight), Math.floor(f / this.hTileCount)), this.tilewidth, this.tileheight, b, d, this.tilewidth, this.tileheight);
	};
	X0.prototype.checkCollision = function(a, b) {
		var d = K4H31.w41(b.x, n0) ? a.left + b.x : a.right + b.x - w0,
			f = K4H31.z41(b.y, n0) ? a.top + b.y : a.bottom + b.y,
			i = {
				x: H0,
				y: H0,
				tile: f0,
				xprop: {},
				yprop: {}
			};
		if (K4H31.C41(d, n0) || K4H31.F41(d, this.realwidth)) i.x = k0;
		if (K4H31.I41(f, n0) || K4H31.L41(f, this.realheight)) i.y = k0;
		return i;
	};
	i0.prototype.initArray = function(a) {
		this.layerData = [];
		for (var b = 0; K4H31.O41(b, this.width); b++) {
			this.layerData[b] = [];
			for (var d = 0; K4H31.R41(d, this.height); d++) this.layerData[b][d] = null;
		}
		if (a) {
			for (b = 0; K4H31.U41(b, this.width * this.tilewidth); b++) this.xLUT[b] = Math.floor(K4H31.X41(b, this.tilewidth));
			for (d = 0; K4H31.a51(d, this.height * this.tileheight); d++) this.yLUT[d] = Math.floor(K4H31.d51(d, this.tileheight));
		}
	};
	i0.prototype.getTileId = function(a, b) {
		var d = this.layerData[this.xLUT[Math.floor(a)]][this.yLUT[Math.floor(b)]];
		return d ? d.tileId : A0;
	};
	i0.prototype.getTile = function(a, b) {
		return this.layerData[this.xLUT[Math.floor(a)]][this.yLUT[Math.floor(b)]];
	};
	i0.prototype.setTile = function(a, b, d) {
		this.layerData[a][b] = new F1(a, b, this.tilewidth, this.tileheight, d);
	};
	i0.prototype.clearTile = function(a, b) {
		this.layerData[a][b] = A0;
	};
	i0.prototype.checkCollision = function(a, b) {
		if (!a) return {
			x: H0,
			y: H0
		};
		x = K4H31.g51(b.x, n0) ? a.left + b.x : a.right + b.x;
		y = K4H31.j51(b.y, n0) ? a.top + b.y : a.bottom + b.y;
		collide = {
			x: H0,
			xtile: f0,
			xprop: {},
			y: H0,
			ytile: f0,
			yprop: {}
		};
		if (K4H31.m51(x, n0) || K4H31.p51(x, this.realwidth)) collide.x = k0;
		else {
			collide.xtile = this.getTile(x, K4H31.s51(a.bottom, w0));
			if (collide.xtile && this.tileset.isTileCollidable(collide.xtile.tileId)) {
				collide.x = k0;
				collide.xprop = this.tileset.getTileProperties(collide.xtile.tileId);
			} else {
				collide.xtile = this.getTile(x, a.top);
				if (collide.xtile && this.tileset.isTileCollidable(collide.xtile.tileId)) {
					collide.x = k0;
					collide.xprop = this.tileset.getTileProperties(collide.xtile.tileId);
				}
			}
		}
		collide.ytile = this.getTile(K4H31.v51(b.x, n0) ? a.left : a.right, y);
		if (collide.ytile && this.tileset.isTileCollidable(collide.ytile.tileId)) {
			collide.y = k0;
			collide.yprop = this.tileset.getTileProperties(collide.ytile.tileId);
		} else {
			collide.ytile = this.getTile(K4H31.y51(b.x, n0) ? a.right : a.left, y);
			if (collide.ytile && this.tileset.isTileCollidable(collide.ytile.tileId)) {
				collide.y = k0;
				collide.yprop = this.tileset.getTileProperties(collide.ytile.tileId);
			}
		}
		return collide;
	};
	i0.prototype.update = function() {
		return H0;
	};
	B1.prototype.reset = function() {
		this.tilesets = A0;
		this.mapLayers = [];
		this.objectGroups = [];
		this.initialized = H0;
	};
	B1.prototype.getObjectGroupByName = function(a) {
		return this.objectGroups[a];
	};
	B1.prototype.getObjectGroups = function() {
		return this.objectGroups;
	};
	B1.prototype.getLayerByName = function(a) {
		var b = null;
		a = a.trim().toLowerCase();
		for (var d = this.mapLayers.length; d--;)
			if (this.mapLayers[d].name.contains(a)) {
				b = this.mapLayers[d];
				break;
			} else if (K4H31.B51(a, "$collision_layer$") && K4H31.E51(this.mapLayers[d].type, L1.COLLISION_MAP)) {
			b = this.mapLayers[d];
			break;
		}
		if (a.contains(L1.COLLISION_MAP) && K4H31.H51(b, null)) b = new X0(me.game.currentLevel.realwidth, me.game.currentLevel.realheight);
		return b;
	};
	B1.prototype.getLayerByType = function(a) {
		for (var b = null, d = this.mapLayers.length; d--;)
			if (K4H31.K51(this.mapLayers[d].type, a)) {
				b = this.mapLayers[d];
				break;
			}
		return b;
	};
	B1.prototype.clearTile = function(a, b) {
		for (var d = this.mapLayers.length; d--;)
			if (this.mapLayers[d].visible || this.mapLayers[d].isCollisionMap) this.mapLayers[d].clearTile(a, b);
	};
	B1.prototype.addTo = function(a) {
		this.visible && a.add(this);
		for (var b = this.mapLayers.length; b--;)
			if (this.mapLayers[b].visible)
				if (K4H31.N51(this.mapLayers[b].site, "back")) a.addBackground(this.mapLayers[b]);
				else K4H31.Q51(this.mapLayers[b].site, "front") && a.addFrontground(this.mapLayers[b]);
	};
	B1.prototype.update = function() {
		return H0;
	};
	levelDirector = function() {
		var f = {},
			i = {},
			j = A0;
		f.reset = function() {};
		f.addLevel = function() {
			var a = "melonJS: no level loader defined";
			throw a;
		};
		f.addTMXLevel = function(a, b) {
			if (K4H31.T51(i[a], A0)) i[a] = new me.TMXTileMap(a, n0, n0);
			b && b();
		};
		f.loadLevel = function(a) {
			SG_Hooks.levelStarted(a);
			var b = getLevelData(a),
				d = null;
			if (K4H31.W51(b.length, 0)) throw "level " + a + " not found";
			else {
				d = new me.TMXTileMap(b, 0, 0);
				(isRunning = me.state.isRunning()) && me.state.pause();
				d.reset();
				d.load();
				j = a;
				me.game.loadTMXLevel(d);
				isRunning && me.state.resume();
			}
		};
		f.getCurrentLevelId = function() {
			return j;
		};
		f.reloadLevel = function() {
			return f.loadLevel(j);
		};
		f.nextLevel = function() {
			return K4H31.Z51(j + 1, i.length) ? f.loadLevel(j + 1) : false;
		};
		f.previousLevel = function() {
			return K4H31.c61(j - w0, n0) ? f.loadLevel(K4H31.f61(j, w0)) : H0;
		};
		return f;
	}();
	l1(F1);
	J1(M1);
	p1(i0);
	o1(B1);
	D1(L1);
	M0(levelDirector);
	ParallaxLayer = me.Rect.extend({
		init: function(a, b, d, f) {
			this.id = a;
			this.site = b;
			this.name = d;
			this.visible = true;
			this.vp = me.game.viewport.pos;
			this.lastx = this.vp.x;
			this.image = me.loader.getImage(d);
			if (K4H31.i61(f, "top")) this.y = 0;
			else if (K4H31.l61(f, "bottom")) this.y = K4H31.o61(me.game.viewport.height, this.image.height);
			this.parent(new me.Vector2d(0, 0), this.image.width, this.image.height);
			this.baseOffset = 0;
			this.vp_width = me.video.getWidth();
			this.updated = false;
		},
		update: function() {
			return true;
		},
		draw: function(a, b) {
			b = this.vp.x;
			var d = 1,
				f = 0;
			if (K4H31.r61(b, this.lastx)) {
				if (K4H31.u61(b, this.lastx)) {
					d = -1;
					f = 1;
				}
				var i = this.id;
				if (K4H31.x61(this.id, 0)) i = 0.5;
				else if (K4H31.A61(this.id, 2)) i = 1.3;
				this.baseOffset = Math.ceil(K4H31.D61((f * this.width + (this.baseOffset + Math.ceil(i * Math.abs(this.lastx - b)) * d)), this.width));
				this.updated = true;
				this.lastx = b;
			} else this.updated = false;
			d = this.baseOffset;
			f = this.y + -this.vp.y || 0;
			i = 0;
			var j = Math.min(K4H31.G61(this.width, d), this.vp_width);
			do {
				a.drawImage(this.image, d, 0, j, this.height, i, f, j, this.height);
				i += j;
				d = 0;
				j = Math.min(this.width, K4H31.J61(this.vp_width, i));
			} while (K4H31.M61(i, this.vp_width))
		}
	});
})(window);
var m3U80 = {
	'M01': function(a, b) {
		return a - b;
	},
	'e11': function(a, b) {
		return a * b;
	},
	'c01': function(a, b) {
		return a * b;
	},
	'Z90': function(a, b) {
		return a < b;
	},
	'K90': function(a, b) {
		return a * b;
	},
	'j90': function(a, b) {
		return a - b;
	},
	'N90': function(a, b) {
		return a * b;
	},
	'Y01': function(a, b) {
		return a * b;
	},
	'E90': function(a, b) {
		return a === b;
	},
	'G01': function(a, b) {
		return a - b;
	},
	'B90': function(a, b) {
		return a === b;
	},
	'v90': function(a, b) {
		return a === b;
	},
	'Q90': function(a, b) {
		return a > b;
	},
	'r01': function(a, b) {
		return a == b;
	},
	'i01': function(a, b) {
		return a == b;
	},
	'l01': function(a, b) {
		return a != b;
	},
	'p90': function(a, b) {
		return a === b;
	},
	'f01': function(a, b) {
		return a * b;
	},
	'm90': function(a, b) {
		return a < b;
	},
	'y90': function(a, b) {
		return a === b;
	},
	'h11': function(a, b) {
		return a * b;
	},
	'V01': function(a, b) {
		return a * b;
	},
	's90': function(a, b) {
		return a === b;
	},
	'W90': function(a, b) {
		return a < b;
	},
	'T90': function(a, b) {
		return a < b;
	},
	'b11': function(a, b) {
		return a - b;
	},
	'u01': function(a, b) {
		return a >= b;
	},
	'D01': function(a, b) {
		return a - b;
	},
	'J01': function(a, b) {
		return a >= b;
	},
	'H90': function(a, b) {
		return a == b;
	},
	'A01': function(a, b) {
		return a <= b;
	},
	'x01': function(a, b) {
		return a >= b;
	},
	'S01': function(a, b) {
		return a > b;
	},
	'P01': function(a, b) {
		return a >= b;
	},
	'o01': function(a, b) {
		return a < b;
	},
	'g90': function(a, b) {
		return a < b;
	}
};
(function(l) {
	function s(a, b, d) {
		me.TileMap.call(this, b, d);
		this.levelData = a;
		if (!this.levelData) throw "melonJS:" + a + " TMX map not found";
		this.currentLevel = 1;
		this.tilesets = this.tileMapCanvas = null;
	}
	var r = function(a) {
		l.me.TMXTileMap = a;
	};

	function u(a, b) {
		this.name = a[o0];
		this.x = a[m2];
		this.y = a[L1];
		this.wave = a[S1];
		this.scale = a[I1];
		this.z = b;
	}

	function e0(b, d) {
		if (d)
			for (var f = 0; m3U80.g90(f, d.length); f++) {
				var i = function(a) {
					b[j[o0]] = a[w0];
				};
				var j = d[f];
				i(j);
			}
	}

	function d0() {
		this.tilesets = [];
	}

	function b0(a) {
		var b = function() {
			a = a[o1] || [];
		};
		this.firstgid = a[l1];
		me.TileSet.call(this, a[o0], a[A0], a[i0], a[X0] || 0, a[B1] || 0, a[J1]);
		this.lastgid = this.firstgid + (m3U80.j90(this.hTileCount * this.vTileCount, 1) || 0);
		b();
		for (var d = 0; m3U80.m90(d, a.length); d++) {
			var f = function() {
					tileProp.isCollidable = tileProp.isSolid || tileProp.isPlatform || tileProp.isSlope || tileProp.isLadder || tileProp.isBreakable;
				},
				i = function() {
					tileProp.isSlope = tileProp.isLeftSlope || tileProp.isRightSlope;
				};
			var j = a[d][M0] + this.firstgid - 1;
			this.TileProperties[j] = {};
			tileProp = this.TileProperties[j];
			e0(tileProp, a[d][M1]);
			tileProp.isSolid = tileProp.type ? m3U80.p90(tileProp.type.toLowerCase(), this.type.SOLID) : false;
			tileProp.isPlatform = tileProp.type ? m3U80.s90(tileProp.type.toLowerCase(), this.type.PLATFORM) : false;
			tileProp.isLeftSlope = tileProp.type ? m3U80.v90(tileProp.type.toLowerCase(), this.type.L_SLOPE) : false;
			tileProp.isRightSlope = tileProp.type ? m3U80.y90(tileProp.type.toLowerCase(), this.type.R_SLOPE) : false;
			tileProp.isBreakable = tileProp.type ? m3U80.B90(tileProp.type.toLowerCase(), this.type.BREAKABLE) : false;
			tileProp.isLadder = tileProp.type ? m3U80.E90(tileProp.type.toLowerCase(), this.type.LADDER) : false;
			i();
			f();
		}
	}

	function f0(b, d, f) {
		var i = function(a) {
			b = a[D1];
		};
		this.objects = [];
		this.name = b;
		this.z = f;
		i(d);
		for (d = 0; m3U80.W90(d, b.length); d++) this.objects.push(new u(b[d], f));
	}

	function l0(b, d, f) {
		var i = function(a) {
			b = a[g1];
		};
		me.TiledLayer.call(this, b[k0], b[n0], d, f);
		this.layerInvalidated = true;
		this.name = b[o0];
		this.type = b[F1];
		this.visible = b[p1] || 1;
		this.opacity = b[H0] || 1;
		if (this.isCollisionMap = m3U80.H90(this.type, me.LevelConstants.COLLISION_MAP) ? true : false) this.visible = false;
		this.vp = me.game.viewport;
		i(b);
		if (this.visible) {
			this.layerSurface = me.video.createCanvasSurface(m3U80.K90(this.width, me.Viewport.tilewidth), m3U80.N90(this.height, me.Viewport.tileheight));
			this.layerCanvas = this.layerSurface.canvas;
			if (m3U80.Q90(this.opacity, 0) && m3U80.T90(this.opacity, 1)) this.layerSurface.globalAlpha = this.opacity;
		}
		if (this.visible || this.isCollisionMap) {
			this.initArray(this.isCollisionMap);
			this.fillArray(b);
		}
	}
	var o0 = "name",
		w0 = "value",
		k0 = "width",
		n0 = "height",
		H0 = "opacity",
		A0 = "tilewidth",
		i0 = "tileheight",
		l1 = "firstgid",
		o1 = "tile",
		M0 = "id",
		g1 = "data",
		X0 = "spacing",
		B1 = "margin",
		M1 = "properties",
		J1 = "source",
		p1 = "visible",
		D1 = "objects",
		m2 = "x",
		L1 = "y",
		F1 = "type",
		S1 = "wave",
		I1 = "scale";
	s.prototype = new me.TileMap;
	s.prototype.load = function() {
		if (!this.initialized) {
			for (var a = 0, b = this.levelData, d = 0; m3U80.Z90(d, b.length); d++) {
				var f = b[d].data;
				switch (b[d].tag) {
					case "map":
						var i = f[M1];
						this.width = f[k0];
						this.height = f[n0];
						this.tilewidth = f[A0];
						this.tileheight = f[i0];
						me.Viewport.tilewidth = this.tilewidth;
						me.Viewport.tileheight = this.tileheight;
						this.realwidth = m3U80.c01(this.width, this.tilewidth);
						this.realheight = m3U80.f01(this.height, this.tileheight);
						this.z = a++;
						e0(this, i);
						this.visible = false;
						if (this.background_color) {
							this.visible = true;
							this.bg_color = me.utils.HexToRGB(this.background_color);
						}
						if (this.bg_image) {
							this.visible = true;
							this.bg_image = me.loader.getImage(this.bg_image);
						}
						break;
					case "tileset":
						if (!this.tilesets) this.tilesets = new d0;
						this.tilesets.add(new b0(f));
						break;
					case "layer":
						if (m3U80.i01(f[F1], me.LevelConstants.PARALLAX_MAP)) {
							i = f[p1];
							if (m3U80.l01(i, false)) i = true;
							var j = f.align || "top";
							if (i) this.mapLayers.push(new ParallaxLayer(f[M0], f.site, {}.image || f[o0], j));
						} else {
							this.mapLayers.push(new l0(f, this.tilesets, a++));
							a++;
						}
						break;
					case "objectgroup":
						this.objectGroups.push(new f0(f[o0], f, a++));
				}
			}
			this.initialized = true;
		}
	};
	s.prototype.draw = function(a, b) {
		if (this.background_color) {
			a.fillStyle = this.background_color;
			a.fillRect(b.left, b.top, b.width, b.height);
		}
		this.bg_image && a.drawImage(this.bg_image, b.left, b.top, b.width, b.height, b.left, b.top, b.width, b.height);
	};
	d0.prototype.add = function(a) {
		this.tilesets.push(a);
	};
	d0.prototype.getTilesetByIndex = function(a) {
		return this.tilesets[a];
	};
	d0.prototype.getTilesetByGid = function(a) {
		for (var b = -1, d = 0, f = this.tilesets.length; m3U80.o01(d, f); d++) {
			if (this.tilesets[d].contains(a)) return this.tilesets[d];
			if (m3U80.r01(this.tilesets[d].firstgid, this.tilesets[d].lastgid))
				if (m3U80.u01(a, this.tilesets[d].firstgid)) b = d;
		}
		if (b != -1) return this.tilesets[b];
		else throw "no matching tileset found for gid " + a;
	};
	b0.prototype = new me.TileSet;
	b0.prototype.contains = function(a) {
		return m3U80.x01(a, this.firstgid) && m3U80.A01(a, this.lastgid);
	};
	l0.prototype = new me.TiledLayer;
	l0.prototype.fillArray = function(a) {
		for (var b = m3U80.D01(a.length, 1), d = m3U80.G01(this.height, 1); m3U80.J01(d, 0); d--)
			for (var f = m3U80.M01(this.width, 1); m3U80.P01(f, 0); f--) {
				gid = a[b--];
				if (m3U80.S01(gid, 0)) {
					this.setTile(f, d, gid);
					this.visible && this.tileset.drawTile(this.layerSurface, m3U80.V01(f, me.Viewport.tilewidth), m3U80.Y01(d, me.Viewport.tileheight), m3U80.b11(gid, this.tileset.firstgid));
				}
			}
	};
	l0.prototype.clearTile = function(a, b) {
		me.TiledLayer.prototype.clearTile.call(this, a, b);
		this.visible && this.layerSurface.clearRect(m3U80.e11(a, this.tilewidth), m3U80.h11(b, this.tileheight), this.tilewidth, this.tileheight);
	};
	l0.prototype.draw = function(a, b) {
		a.drawImage(this.layerCanvas, this.vp.pos.x + b.pos.x, this.vp.pos.y + b.pos.y, b.width, b.height, b.pos.x, b.pos.y, b.width, b.height);
	};
	f0.prototype.getObjectCount = function() {
		return this.objects.length;
	};
	f0.prototype.getObjectByIndex = function(a) {
		return this.objects[a];
	};
	u.prototype.getObjectPropertyByName = function(a) {
		return this[a];
	};
	r(s);
})(window);
var L8f21 = {
	'c16': 60,
	'V06': "show",
	'g21': function(a, b) {
		return a <= b;
	},
	't16': 0,
	'k16': true,
	'y16': 4,
	'r16': 1
};
var player = me.PlayerEntity.extend({
		init: function(a) {
			var b = ((14.70E1, 6.45E2) < (0xD0, 62.2E1) ? (1.423E3, 6.7E1) : (98.7E1, 7.58E2) >= 138. ? (6.91E2, 11) : (81, 147.) <= 7 ? (13.49E2, 0x200) : (1.37E3, 1.309E3)),
				d = "player_bullet3",
				f = "attack_gun3",
				i = ((38, 1.2E3) < (115., 0x122) ? (122., 36.) : (141.0E1, 0x22E) >= (47., 140) ? (0x209, 14) : (84., 0x229)),
				j = "player_bullet2",
				l = "attack_gun2",
				s = (1.491E3 > (1.141E3, 0x192) ? (26.40E1, 180) : (2.25E2, 123.60E1)),
				r = "player_bullet1",
				u = "attack_gun1",
				e0 = "attack_sword",
				d0 = (0x103 > (0xAC, 0x11E) ? 1.3E2 : (53.1E1, 50.) < (0x186, 118.9E1) ? (1.98E2, 20) : (95., 50)),
				b0 = ((0x182, 0x1F1) > 4.5E1 ? (44., 3) : (113., 113) <= 90. ? (18., 127) : (1.455E3, 3.80E1) >= (17., 0x135) ? 4.9E1 : (93., 0x81)),
				f0 = "attack",
				l0 = (82. < (142., 0x1AB) ? (135., false) : (7.10E1, 36)),
				o0 = "stand",
				w0 = "roll",
				k0 = "walk",
				n0 = "controlEightDirectionMove",
				H0 = ((0x239, 113.) <= 5.45E2 ? (145., 5) : (84, 63) <= 0 ? (92., 282) : (51., 10.3E1)),
				A0 = ((14.68E2, 10.370E2) >= (40, 0x10) ? (43, 10) : (1.329E3, 2E0));
			this.parent(a);
			me.game.viewport.follow(this, me.game.viewport.AXIS.HORIZONTAL);
			this.setVelocity(A0, H0);
			this.setAnimationSpeed(L8f21.r16);
			this.addAddons([n0, [k0, w0]]);
			this.addEffect({
				type: "fade",
				currentAnim: "hurt",
				index: 0,
				fade: {
					color: "#990000",
					duration: 10,
					alpha: 0.6
				}
			});
			this.addEffect({
				type: "fade",
				currentAnim: "dead",
				index: 0,
				fade: {
					color: "#990000",
					duration: 30,
					alpha: 0.8
				}
			});
			this.addEffect({
				type: "shake",
				currentAnim: "attack_sword3",
				index: 1,
				shake: {
					intensity: 6,
					duration: 8,
					axis: this.vp.AXIS.VERTICAL
				}
			});
			this.addEffect({
				type: "shake",
				currentAnim: "attack_gun3",
				index: 1,
				shake: {
					intensity: 4,
					duration: 6,
					axis: this.vp.AXIS.VERTICAL
				}
			});
			this.addControl({
				controlKey: me.input.KEY.X,
				animName: w0,
				resetAnim: o0,
				lock: l0,
				delay: [H0, H0]
			});
			this.addControl({
				controlKey: me.input.KEY.Z,
				animName: f0,
				resetAnim: o0,
				clearVel: [L8f21.k16, l0],
				lock: L8f21.k16,
				delay: [L8f21.t16, A0],
				animStageCount: [b0, b0],
				animStageDelay: d0
			});
			this.addControl({
				controlKey: me.input.KEY.C,
				animName: o0,
				resetAnim: o0,
				changeWeapon: L8f21.k16,
				clearVel: [L8f21.k16, L8f21.k16],
				clearKey: L8f21.k16,
				lock: L8f21.k16
			});
			this.setCollision({
				collisionAnim: e0,
				isCollision: L8f21.k16,
				frames: [b0],
				collideProp: {
					type: [me.tag.TAG_ENTITY_MONSTER],
					same: L8f21.k16
				}
			});
			this.addHoldItems({
				isOne: l0,
				bindAnimName: u,
				bindAnimIndex: L8f21.r16,
				objectName: r,
				xOff: s,
				yOff: -L8f21.y16
			});
			this.addHoldItems({
				isOne: l0,
				bindAnimName: l,
				bindAnimIndex: L8f21.r16,
				objectName: j,
				xOff: s,
				yOff: -i
			});
			this.addHoldItems({
				isOne: l0,
				bindAnimName: f,
				bindAnimIndex: L8f21.r16,
				objectName: d,
				xOff: s,
				yOff: -b
			});
		},
		onBodyCollision: function() {
			var a = "stand_",
				b = "hurt_",
				d = ((0x10D, 80.) >= (5.74E2, 33.9E1) ? (11.65E2, 33.80E1) : (8.22E2, 0x20E) < 114.30E1 ? (0x61, 300) : (9.81E2, 0x9B)),
				f = "destroy",
				i = "dead_";
			this.clearVel();
			if (L8f21.g21(this.baseStats.currentHp, L8f21.t16)) {
				this.setCurrentAnimation(i + this.weaponType[this.weapon], f, L8f21.t16, d);
				this.baseStats.currentHp = L8f21.t16;
				this.currentAnimLock = L8f21.k16;
			} else this.setCurrentAnimation(b + this.weaponType[this.weapon], a + this.weaponType[this.weapon], L8f21.t16, L8f21.y16);
		}
	}),
	player_bullet1 = me.FlyEntity.extend({
		init: function(a) {
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_DESTROY_ITEM;
			this.visible = L8f21.k16;
			this.setAnimationSpeed(L8f21.r16);
			this.setVelocity(L8f21.c16, L8f21.t16);
			this.initDirection = me.tag.TAG_DIRECTION_RIGHT;
			this.setCollision({
				collisionAnim: L8f21.V06,
				isCollision: L8f21.k16,
				frames: [L8f21.t16],
				collideProp: {
					type: [me.tag.TAG_ENTITY_MONSTER],
					same: L8f21.k16
				}
			});
		},
		onActCollision: function() {
			this.destroy();
		}
	}),
	player_bullet2 = me.FlyEntity.extend({
		init: function(a) {
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_DESTROY_ITEM;
			this.visible = L8f21.k16;
			this.setAnimationSpeed(L8f21.r16);
			this.setVelocity(L8f21.c16, L8f21.t16);
			this.initDirection = me.tag.TAG_DIRECTION_RIGHT;
			this.setCollision({
				collisionAnim: L8f21.V06,
				isCollision: L8f21.k16,
				frames: [L8f21.t16],
				collideProp: {
					type: [me.tag.TAG_ENTITY_MONSTER],
					same: L8f21.k16
				}
			});
		},
		onActCollision: function() {
			this.destroy();
		}
	}),
	player_bullet3 = me.FlyEntity.extend({
		init: function(a) {
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_DESTROY_ITEM;
			this.visible = L8f21.k16;
			this.setAnimationSpeed(L8f21.r16);
			this.setVelocity(L8f21.c16, L8f21.t16);
			this.initDirection = me.tag.TAG_DIRECTION_RIGHT;
			this.setCollision({
				collisionAnim: L8f21.V06,
				isCollision: L8f21.k16,
				frames: [L8f21.t16],
				collideProp: {
					type: [me.tag.TAG_ENTITY_MONSTER],
					same: L8f21.k16
				}
			});
		},
		onActCollision: function() {
			this.destroy();
		}
	});
var Z2E80 = {
	'f05': 1,
	'm05': 4,
	'T05': 10,
	'Z05': 50,
	'a05': false,
	'P05': true,
	'L80': function(a, b) {
		return a <= b;
	},
	'y05': "all",
	's05': 75,
	'k05': 5,
	'G05': "player",
	'X05': 420,
	'h05': 7,
	'I80': function(a, b) {
		return a <= b;
	},
	'Y94': "AIFollowMove",
	'M05': 250,
	'b05': 80,
	'O80': function(a, b) {
		return a <= b;
	},
	'R80': function(a, b) {
		return a <= b;
	},
	'H05': 65,
	'F80': function(a, b) {
		return a <= b;
	},
	'C05': 20,
	'W94': "show",
	'L05': 100,
	'i05': 30,
	'I05': 60,
	'K05': null,
	'u05': "hurt",
	'R05': "attack",
	'c05': "walk",
	'N05': "destroy",
	'V05': "dead",
	'e05': 3,
	'g05': 0
};
var monster1 = me.ObjectEntity.extend({
		init: function(a) {
			this.initDirection = me.tag.TAG_DIRECTION_LEFT;
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_MONSTER;
			this.setAnimationSpeed(Z2E80.f05);
			this.setVelocity(Z2E80.h05, Z2E80.e05);
			this.addAddons([Z2E80.Y94, [Z2E80.G05, Z2E80.y05, Z2E80.M05, {
				x: Z2E80.b05,
				y: Z2E80.C05
			}, Z2E80.K05, Z2E80.R05, Z2E80.c05, Z2E80.b05, Z2E80.i05]]);
			this.addEffect({
				type: "custom",
				currentAnim: "hurt",
				index: 0,
				effectEntity: {
					spriteName: "monster",
					flipxOff: 50,
					xOff: -30,
					yOff: -30,
					duration: 8,
					name: "blood_monster",
					currentAnim: "show"
				}
			});
			this.addEffect({
				type: "custom",
				currentAnim: "dead",
				index: 0,
				effectEntity: {
					spriteName: "monster",
					duration: 12,
					name: "blood_monster2",
					currentAnim: "show",
					count: 1,
					delay: 20
				}
			});
			this.setBaseStats({
				hp: Z2E80.I05,
				currentHp: Z2E80.I05,
				attack: Z2E80.Z05,
				currentAttack: Z2E80.Z05,
				def: Z2E80.g05,
				gold: Z2E80.i05
			});
			this.setCollision({
				collisionAnim: Z2E80.R05,
				isCollision: Z2E80.P05,
				frames: [Z2E80.k05],
				collideProp: {
					type: [me.tag.TAG_ENTITY_PLAYER],
					same: Z2E80.P05
				}
			});
		},
		onBodyCollision: function() {
			this.clearVel();
			if (Z2E80.F80(this.baseStats.currentHp, Z2E80.g05)) {
				this.setCurrentAnimation(Z2E80.V05, Z2E80.N05, Z2E80.g05, Z2E80.k05);
				this.currentAnimLock = Z2E80.P05;
			} else this.setCurrentAnimation(Z2E80.u05, Z2E80.c05, Z2E80.g05, Z2E80.m05);
		}
	}),
	boss_monster1 = monster1.extend({
		init: function(a) {
			this.parent(a);
			this.setBaseStats({
				hp: Z2E80.X05,
				currentHp: Z2E80.X05,
				attack: Z2E80.L05,
				currentAttack: Z2E80.L05,
				def: Z2E80.g05,
				gold: Z2E80.H05
			});
		}
	}),
	monster2 = me.ObjectEntity.extend({
		init: function(a) {
			var b = ((63, 0x5C) > (112.80E1, 0x1BE) ? (0x19D, "d") : 8.63E2 > (4.62E2, 71.60E1) ? (0x238, 120) : (0xB1, 1.70E1)),
				d = (0x186 <= (146., 5E0) ? 'a' : (0x244, 86.9E1) > (40, 136.70E1) ? 4.80E1 : 0x12B < (0x143, 36.2E1) ? (54., 6) : (144, 11.370E2));
			this.initDirection = me.tag.TAG_DIRECTION_LEFT;
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_MONSTER;
			this.setAnimationSpeed(Z2E80.f05);
			this.setVelocity(d, Z2E80.e05);
			this.addAddons([Z2E80.Y94, [Z2E80.G05, Z2E80.y05, Z2E80.M05, {
				x: Z2E80.b05,
				y: Z2E80.C05
			}, Z2E80.K05, Z2E80.R05, Z2E80.c05, Z2E80.b05, Z2E80.i05]]);
			this.addEffect({
				type: "custom",
				currentAnim: "hurt",
				index: 0,
				effectEntity: {
					spriteName: "monster",
					flipxOff: 50,
					xOff: -30,
					yOff: -30,
					duration: 8,
					name: "blood_monster",
					currentAnim: "show"
				}
			});
			this.addEffect({
				type: "custom",
				currentAnim: "dead",
				index: 0,
				effectEntity: {
					spriteName: "monster",
					duration: 12,
					name: "blood_monster2",
					currentAnim: "show",
					count: 1,
					delay: 20
				}
			});
			this.setBaseStats({
				hp: b,
				currentHp: b,
				attack: Z2E80.L05,
				currentAttack: Z2E80.L05,
				def: Z2E80.g05,
				gold: Z2E80.Z05
			});
			this.setCollision({
				collisionAnim: Z2E80.R05,
				isCollision: Z2E80.P05,
				frames: [Z2E80.k05],
				collideProp: {
					type: [me.tag.TAG_ENTITY_PLAYER],
					same: Z2E80.P05
				}
			});
		},
		onBodyCollision: function() {
			this.clearVel();
			if (Z2E80.I80(this.baseStats.currentHp, Z2E80.g05)) {
				this.setCurrentAnimation(Z2E80.V05, Z2E80.N05, Z2E80.g05, Z2E80.k05);
				this.currentAnimLock = Z2E80.P05;
				me.sys.player.baseStats.gold += this.baseStats.gold;
			} else this.setCurrentAnimation(Z2E80.u05, Z2E80.c05, Z2E80.g05, Z2E80.m05);
		}
	}),
	boss_monster2 = monster2.extend({
		init: function(a) {
			var b = ((10.46E2, 0x1B6) > (58.30E1, 119.30E1) ? (0x22B, "Q") : (100, 132.) > 107. ? (5, 70) : (1.403E3, 0x5A)),
				d = ((0x4F, 0x104) > 0xD ? (9.120E2, 170) : (4.9E2, 0x36)),
				f = (0xD2 < (0x1C3, 4.29E2) ? (27.70E1, 860) : (1.335E3, 0x148));
			this.parent(a);
			this.setBaseStats({
				hp: f,
				currentHp: f,
				attack: d,
				currentAttack: d,
				def: Z2E80.g05,
				gold: b
			});
		}
	}),
	monster3 = me.ObjectEntity.extend({
		init: function(a) {
			var b = "bullet_monster3",
				d = ((9.9E1, 0x191) < 137. ? (4.51E2, "s") : (88.30E1, 0xB2) >= (149., 0x1F3) ? 0x1A1 : 1.252E3 > (141., 0x125) ? (31, 130) : (1.031E3, 98)),
				f = ((31, 0xCA) < (0x229, 146) ? 0x45 : (0x48, 0x1C1) >= (0x18B, 39.) ? (0x20A, 340) : (0x160, 0x2C)),
				i = ((80.5E1, 0xDF) < (66., 8.84E2) ? (133., 400) : (138, 0x9F) <= (1.421E3, 28.) ? (131., 114) : (112, 122.)),
				j = ((22.0E1, 0x1CE) >= 96 ? (88, 500) : (48., 0x7B));
			this.initDirection = me.tag.TAG_DIRECTION_LEFT;
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_MONSTER;
			this.setAnimationSpeed(Z2E80.f05);
			this.setVelocity(Z2E80.h05, Z2E80.e05);
			this.addAddons([Z2E80.Y94, [Z2E80.G05, Z2E80.y05, j, {
				x: i,
				y: Z2E80.T05
			}, Z2E80.K05, Z2E80.R05, Z2E80.c05, Z2E80.I05, Z2E80.I05]]);
			this.addEffect({
				type: "custom",
				currentAnim: "dead",
				index: 0,
				effectEntity: {
					spriteName: "monster",
					duration: 12,
					name: "blood_monster2",
					currentAnim: "show",
					count: 1,
					delay: 20
				}
			});
			this.setBaseStats({
				hp: f,
				currentHp: f,
				attack: d,
				currentAttack: d,
				def: Z2E80.g05,
				gold: Z2E80.H05
			});
			this.addHoldItems({
				isOne: Z2E80.a05,
				bindAnimName: Z2E80.R05,
				bindAnimIndex: Z2E80.m05,
				objectName: b
			});
		},
		onBodyCollision: function() {
			this.clearVel();
			if (Z2E80.L80(this.baseStats.currentHp, Z2E80.g05)) {
				this.setCurrentAnimation(Z2E80.V05, Z2E80.N05, Z2E80.g05, Z2E80.k05);
				this.currentAnimLock = Z2E80.P05;
				me.sys.player.baseStats.gold += this.baseStats.gold;
			} else this.setCurrentAnimation(Z2E80.u05, Z2E80.c05, Z2E80.g05, Z2E80.m05);
		}
	}),
	boss_monster3 = monster3.extend({
		init: function(a) {
			var b = (99.60E1 > (0x19C, 13.63E2) ? (56., 1.477E3) : (67, 63.0E1) >= (144., 1.407E3) ? (127., 150) : (28, 0xC5) < 138.0E1 ? (0x83, 280) : (92., 5.39E2)),
				d = 2500;
			this.parent(a);
			this.setBaseStats({
				hp: d,
				currentHp: d,
				attack: b,
				currentAttack: b,
				def: Z2E80.g05,
				gold: Z2E80.s05
			});
		}
	}),
	bullet_monster3 = me.FlyEntity.extend({
		init: function(a) {
			var b = 15;
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_DESTROY_ITEM;
			this.visible = Z2E80.P05;
			this.setAnimationSpeed(Z2E80.f05);
			this.setVelocity(b, Z2E80.g05);
			this.initDirection = me.tag.TAG_DIRECTION_LEFT;
			this.setCollision({
				collisionAnim: Z2E80.W94,
				isCollision: Z2E80.P05,
				frames: [Z2E80.g05, Z2E80.f05],
				collideProp: {
					type: [me.tag.TAG_ENTITY_PLAYER],
					same: Z2E80.P05
				}
			});
		},
		onActCollision: function() {
			this.destroy();
		}
	}),
	monster4 = me.ObjectEntity.extend({
		init: function(a) {
			var b = "bullet_monster4",
				d = 150,
				f = 460;
			this.initDirection = me.tag.TAG_DIRECTION_LEFT;
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_MONSTER;
			this.setAnimationSpeed(Z2E80.f05);
			this.setVelocity(Z2E80.h05, Z2E80.e05);
			this.addAddons([Z2E80.Y94, [Z2E80.G05, Z2E80.y05, Z2E80.M05, {
				x: Z2E80.X05,
				y: Z2E80.T05
			}, Z2E80.K05, Z2E80.R05, Z2E80.c05, Z2E80.b05, Z2E80.I05]]);
			this.addEffect({
				type: "custom",
				currentAnim: "dead",
				index: 0,
				effectEntity: {
					spriteName: "monster",
					duration: 12,
					name: "blood_monster2",
					currentAnim: "show",
					count: 1,
					delay: 20
				}
			});
			this.setBaseStats({
				hp: f,
				currentHp: f,
				attack: d,
				currentAttack: d,
				def: Z2E80.g05,
				gold: Z2E80.s05
			});
			this.addHoldItems({
				isOne: Z2E80.a05,
				bindAnimName: Z2E80.R05,
				bindAnimIndex: Z2E80.m05,
				objectName: b
			});
		},
		onBodyCollision: function() {
			this.clearVel();
			if (Z2E80.O80(this.baseStats.currentHp, Z2E80.g05)) {
				this.setCurrentAnimation(Z2E80.V05, Z2E80.N05, Z2E80.g05, Z2E80.k05);
				this.currentAnimLock = Z2E80.P05;
				me.sys.player.baseStats.gold += this.baseStats.gold;
			} else this.setCurrentAnimation(Z2E80.u05, Z2E80.c05, Z2E80.g05, Z2E80.m05);
		}
	}),
	boss_monster4 = monster4.extend({
		init: function(a) {
			var b = 360,
				d = 3400;
			this.parent(a);
			this.setBaseStats({
				hp: d,
				currentHp: d,
				attack: b,
				currentAttack: b,
				def: Z2E80.g05,
				gold: Z2E80.b05
			});
		}
	}),
	bullet_monster4 = me.FlyEntity.extend({
		init: function(a) {
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_DESTROY_ITEM;
			this.visible = Z2E80.P05;
			this.setAnimationSpeed(Z2E80.f05);
			this.setVelocity(Z2E80.C05, Z2E80.g05);
			this.initDirection = me.tag.TAG_DIRECTION_LEFT;
			this.setCollision({
				collisionAnim: Z2E80.W94,
				isCollision: Z2E80.P05,
				frames: [Z2E80.g05],
				collideProp: {
					type: [me.tag.TAG_ENTITY_PLAYER],
					same: Z2E80.P05
				}
			});
		},
		onActCollision: function() {
			this.destroy();
		}
	}),
	monster5 = me.ObjectEntity.extend({
		init: function(a) {
			var b = 320,
				d = 620;
			this.initDirection = me.tag.TAG_DIRECTION_LEFT;
			this.parent(a);
			this.type = me.tag.TAG_ENTITY_MONSTER;
			this.setAnimationSpeed(Z2E80.f05);
			this.setVelocity(Z2E80.h05, Z2E80.e05);
			this.addAddons([Z2E80.Y94, [Z2E80.G05, Z2E80.y05, Z2E80.M05, {
				x: Z2E80.L05,
				y: Z2E80.C05
			}, Z2E80.K05, Z2E80.R05, Z2E80.c05, Z2E80.b05, Z2E80.i05]]);
			this.addEffect({
				type: "custom",
				currentAnim: "dead",
				index: 0,
				effectEntity: {
					spriteName: "monster",
					duration: 12,
					name: "blood_monster2",
					currentAnim: "show",
					count: 1,
					delay: 20
				}
			});
			this.setBaseStats({
				hp: d,
				currentHp: d,
				attack: b,
				currentAttack: b,
				def: Z2E80.g05,
				gold: Z2E80.H05
			});
			this.setCollision({
				collisionAnim: Z2E80.R05,
				isCollision: Z2E80.P05,
				frames: [Z2E80.k05],
				collideProp: {
					type: [me.tag.TAG_ENTITY_PLAYER],
					same: Z2E80.P05
				}
			});
		},
		onBodyCollision: function() {
			this.clearVel();
			if (Z2E80.R80(this.baseStats.currentHp, Z2E80.g05)) {
				this.setCurrentAnimation(Z2E80.V05, Z2E80.N05, Z2E80.g05, Z2E80.k05);
				this.currentAnimLock = Z2E80.P05;
				me.sys.player.baseStats.gold += this.baseStats.gold;
			} else this.setCurrentAnimation(Z2E80.u05, Z2E80.c05, Z2E80.g05, Z2E80.m05);
		}
	}),
	boss_monster5 = monster5.extend({
		init: function(a) {
			var b = 1E3,
				d = 450,
				f = ((69, 0x7C) >= 0xA4 ? 287 : 17.3E1 <= (17, 92) ? 139. : (115., 0x14B) >= 10. ? (122., 5E3) : (5.80E1, 4.43E2));
			this.parent(a);
			this.setBaseStats({
				hp: f,
				currentHp: f,
				attack: d,
				currentAttack: d,
				def: Z2E80.g05,
				gold: b
			});
		}
	});
var blood_monster = me.EffectSprite.extend({
		init: function(a) {
			var b = ((0x5A, 24.) <= 136 ? (0xA8, 1) : 0x1BC > (80.0E1, 13.450E2) ? (124, 7.80E1) : (0xA1, 121.));
			this.parent(a);
			this.setAnimationSpeed(b);
		}
	}),
	blood_monster2 = me.EffectSprite.extend({
		init: function(a) {
			this.parent(a);
		}
	});