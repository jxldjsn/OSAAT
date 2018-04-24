function sg_exists() {
	return "undefined" != typeof window.softgames && null !== window.softgames
}

function SG_initAPI(a) {
	return SG.initLangs(a)
}

function SG_hideAddressBar() {
	SG.hideAddressBar()
}

function SG_OrientationHandler(a, b) {
	"undefined" != typeof a && null !== a && SG.setOrientationHandler(a), "undefined" != typeof b && null !== b && SG.setResizeHandler(b)
}
var SG_Lang = "en",
	SG = {
		logger: null,
		loaded: !1,
		debug: !1,
		lang: "en",
		gameJS: [],
		d: document,
		loadScrnTimer: 10,
		loadingScreenUrl: "",
		queryParams: {},
		getLogger: function() {
			return !SG.logger && window.SoftgamesLogger && (SG.logger = new window.SoftgamesLogger("softgames-1.1")), SG.logger
		},
		logError: function(a) {
			var b = SG.getLogger();
			b ? b.error(a) : console.error(a)
		},
		boot: function() {
			SG.initLangs(window.gameLangs), sg_exists() ? (window.softgames.gameInitCallback = SG.startGame, window.softgames.getReady()) : SG.startGame()
		},
		getGameId: function() {
			return sg_exists() ? window.softgames.gameId() : void 0
		},
		startGame: function() {
			SG.loaded || (SG.loaded = !0, SG.showSpinner(), "function" == typeof window.gamePreLoader && window.gamePreLoader(), SG.loadJsFiles(window.gameJS, function() {
				SG.hideLoadScrn(), window.gameOnLoadScript && eval(window.gameOnLoadScript)
			}))
		},
		showSpinner: function() {},
		showLoadingBar: function() {
			return void 0 === SG.getUrlParameters().disableLoadingBar || "true" !== SG.getUrlParameters().disableLoadingBar
		},
		checkLoadingScreenUrl: function() {
			document.getElementsByTagName("meta")["splashscreen-game-url"] && (SG.loadingScreenUrl = document.getElementsByTagName("meta")["splashscreen-game-url"].getAttribute("content"))
		},
		showLoadScrn: function() {
			SG.checkLoadingScreenUrl(), "" === SG.loadingScreenUrl ? SG.showLoadingDots() : SG.showLoadingImage()
		},
		showLoadingImage: function() {
			var a = SG.d.createElement("img");
			a.setAttribute("src", SG.loadingScreenUrl), a.style.maxWidth = "100%";
			var b = SG.d.createElement("div");
			b.setAttribute("id", "sg-loadscrn"), b.appendChild(a);
			var c = function() {
				var a = SG.d.getElementsByTagName("body")[0];
				"undefined" != typeof a ? (a.appendChild(b), SG.loadVoyagerOrConnector()) : (SG.debug && console.log("show load-screen: body-tag not ready. retrying in " + SG.loadScrnTimer + "ms"), setTimeout(c, SG.loadScrnTimer))
			};
			c()
		},
		showLoadingDots: function() {
			var a = SG.d.createElement("div");
			if (a.setAttribute("id", "sg-loadscrn"), SG.showLoadingBar()) {
				var b = SG.d.createElement("div");
				b.setAttribute("id", "sg-spinner"), a.appendChild(b)
			}
			if (-1 != window.location.href.indexOf("adultcontent")) {
				var c = SG.d.createElement("div");
				c.setAttribute("id", "sg-loadtext"), c.innerHTML = "One moment please...<br>Your site is almost loaded!", a.appendChild(c)
			}
			var d = function() {
				var b = SG.d.getElementsByTagName("body")[0];
				"undefined" != typeof b ? (null === SG.d.getElementById("sg-loadscrn") && (SG.debug && console.log("show load-screen: complete"), b.appendChild(a)), SG.loadVoyagerOrConnector()) : (SG.debug && console.log("show load-screen: body-tag not ready. retrying in " + SG.loadScrnTimer + "ms"), setTimeout(d, SG.loadScrnTimer))
			};
			d()
		},
		hideLoadScrn: function() {
			var a = SG.d.getElementById("sg-loadscrn");
			a && a.parentNode.removeChild(a)
		},
		loadJsFiles: function(a, b) {
			var c = SG.d.getElementsByTagName("head")[0] || document.documentElement,
				d = [];
			a.length;
			if (a.length > 0) {
				var e = document.createElement("script");
				d = !1, e.type = "text/javascript", e.src = a[0], a.shift();
				var f = !1;
				e.onreadystatechange = e.onload = function() {
					f || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (f = !0, e.onload = e.onreadystatechange = null, c && e.parentNode && c.removeChild(e), SG.loadJsFiles(a, b))
				}, c.insertBefore(e, c.firstChild), SG.debug && console.log("loading " + e.src + ", " + a.length + " files left.")
			} else "function" == typeof b && (SG.debug && console.log("calling callback: " + b), b())
		},
		loadCSSFiles: function(a) {
			if (0 !== a.length)
				for (var b = SG.d.getElementsByTagName("head")[0] || document.documentElement, c = 0; c < a.length; c++) {
					var d = document.createElement("link");
					d.rel = "stylesheet", d.type = "text/css", d.href = a[c], b.insertBefore(d, b.firstChild)
				}
		},
		trigger: function(a, b) {
			if (!sg_exists()) return !1;
			switch (console.log("event data: ", a), a.type) {
				case "start":
					d = {
						type: window.softgames.eventStartingGame
					};
					break;
				case "levelStarted":
					d = {
						type: window.softgames.eventLevelStarted,
						level: a.level
					};
					break;
				case "levelFinished":
					d = {
						type: window.softgames.eventLevelFinished,
						level: a.level,
						score: a.score
					};
					break;
				case "levelUp":
					d = {
						type: window.softgames.eventLevelUp,
						level: a.level,
						prevoius_level_score: a.lastLevelScore
					};
					break;
				case "gameOver":
					d = {
						type: window.softgames.eventGameOver,
						score: a.score,
						level: a.level
					};
					break;
				case "gameCompleted":
					d = {
						type: window.softgames.eventGameCompleted,
						score: a.score
					};
					break;
				case "gamePause":
					d = {
						type: window.softgames.eventGamePause,
						state: a.state
					};
					break;
				case "gameRestart":
					d = {
						type: window.softgames.eventGameRestart
					};
					break;
				case "selectLevel":
					d = {
						type: window.softgames.eventSelectLevel,
						level: a.level
					};
					break;
				case "selectMainMenu":
					d = {
						type: window.softgames.eventSelectMainMenu
					};
					break;
				case "setSound":
					d = {
						type: window.softgames.eventSound,
						state: a.state
					};
					break;
				case "incentiviseTriggered":
					d = {
						type: window.softgames.eventIncentiviseTriggered
					}
			}
			return window.softgames.trigger(d, b), !0
		},
		initLangs: function(a) {
			var b = "function" == typeof SG_getLang ? SG_getLang() : "en",
				c = "[object array]" == Object.prototype.toString.call(a).toLowerCase();
			return c && a.indexOf(b) >= 0 && (SG.lang = b), SG_Lang = SG.lang, SG.lang
		},
		isEnabledIncentiviseButton: function() {
			return sg_exists() ? window.softgames.isEnabledIncentiviseButton() : !1
		},
		getLang: function() {
			return SG.lang
		},
		getGameConfig: function() {
			return sg_exists() ? window.softgames.game_config : void 0
		},
		setOrientationHandler: function(a) {
			sg_exists() && (window.softgames.changeScreenOrientation = a)
		},
		setResizeHandler: function(a) {
			sg_exists() && (window.softgames.changeScreenSize = a)
		},
		setPauseHandler: function(a) {
			sg_exists() && (window.softgames.gamePauseFunction = a)
		},
		setUnpauseHandler: function(a) {
			sg_exists() && (window.softgames.gameUnpauseFunction = a)
		},
		hideAddressBar: function() {
			setTimeout(function() {
				window.scrollTo(0, 1)
			}, 10)
		},
		loadVoyagerOrConnector: function() {
			SG.parseQueryParams(), SG.useEmbedderFlow() ? SG.loadConnector() : SG.loadVoyager()
		},
		useEmbedderFlow: function() {
			return SG.queryParams.ng && "true" == SG.queryParams.ng ? !0 : !1
		},
		parseQueryParams: function() {
			for (var a = window.location.search.substring(1).split("&"), b = 0; b < a.length; b++) {
				var c = a[b].split("=");
				SG.queryParams[c[0]] = c[1]
			}
		},
		loadConnector: function() {
			var a = document.createElement("script");
			a.type = "text/javascript", a.async = !0;
			var b = Math.floor(1e8 * Math.random() + 1);
			a.src = "http://games.softgames.de/assets/softgames-connector.js?_=" + b;
			var c = document.getElementsByTagName("script")[0];
			c.parentNode.insertBefore(a, c)
		},
		loadVoyager: function() {
			// var a = document.createElement("script");
			// a.type = "text/javascript", a.async = !0;
			// var b = Math.floor(1e8 * Math.random() + 1);
			// a.src = "//d3tlss08qwqpkt.cloudfront.net/assets/api/voyager.js?_=" + b, a.onload = SG.boot;
			// var c = document.getElementsByTagName("script")[0];
			// c.parentNode.insertBefore(a, c)
			SG.boot();
		},
		redirectToPortal: function() {
			Play68.goHome();
			// if (!sg_exists()) return !1;
			// try {
			// 	window.softgames._trackAction("ingameRedirectClicked"), window.softgames._trackEvent("ingameRedirectClicked");
			// 	SG.detectPortalUrl();
			// 	window.softgames.redirectToPortal()
			// } catch (a) {
			// 	SG.logError(a)
			// }
		},
		detectPortalUrl: function() {
			var a = softgames.back_url;
			return "string" != typeof a && (a = softgames.subplatform), "string" != typeof a ? a = "http://m.softgames.de" : a.match(/^http:\/\//) === !1 && (a = "http://" + a), a
		},
		getLogoUrl: function(a) {
			return "http://d1bjj4kazoovdg.cloudfront.net/assets/sg_ig_logo.png"
		},
		getUrlParameters: function() {
			for (var a, b = [], c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) a = c[d].split("="), b.push(a[0]), b[a[0]] = a[1];
			return b
		}
	};
SG.showLoadScrn();