var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path='src/riverrun/ImportTS.d.ts' />
///<reference path='src/game/ImportTS.d.ts' />
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.config = document['ccConfig'];
        rr.ResPathManager.KEYWORD_TXT = ["123123123txt_"];
        tx.FixBug2_2_2.init();

        cc.COCOS2D_DEBUG = this.config['COCOS2D_DEBUG'];
        cc.initDebugSetting();
        cc.setup(this.config['tag']);
        cc.AppController.shareAppController().didFinishLaunchingWithOptions();
    }
    Main.prototype.applicationDidFinishLaunching = function () {
        if (cc.RenderDoesnotSupport()) {
            //show Information to user
            alert("Browser doesn't support WebGL");
            return false;
        }

        // initialize director
        var director = cc.Director.getInstance();

        tx.SharedObjectUtil.init(Root.GAME_NAME);

        //多国初始化
        rr.Localization.init();

        //TC初始化
        TC.init(Root.GAME_NAME, false);

        //        WSSLog.init("ws://192.168.189.61:9000");
        Root.__RESOLUTION_TYPE__ = tx.getResolutionType(-1);
        this.setResolutionSize();

        //设置资源缩放
        cc.EGLView.getInstance().resizeWithBrowserSize(true);
        cc.EGLView.getInstance().setDesignResolutionSize(Root.STAGE_WH.width, Root.STAGE_WH.height, cc.RESOLUTION_POLICY.SHOW_ALL);

        director.setContentScaleFactor(Root.ResourceSize.width / Root.STAGE_WH.width);

        // turn on display FPS
        director.setDisplayStats(this.config['showFPS']);

        // set FPS. the default value is 1.0/60 if you don't call this
        director.setAnimationInterval(1.0 / this.config['frameRate']);

        //开始LOADING
        cc.Loader.preload(loading_resources, this.preLoadFinish, this);

        //        cc.Loader.preload(game_resources, this.loadFinish, this);
        //        if (tx.isMoblieSys()) {
        this.initReplaceSceneEvent();
        var _this = this;
        window.addEventListener("resize", function (event) {
            _this.adjustSizeForWindow();
        });

        //        }
        return true;
    };

    Main.prototype.setResolutionSize = function () {
        if (Root.__RESOLUTION_TYPE__ == Root.RESOLUTION_TYPE_NORMAL) {
            Root.ResourceSize = tx.copyS(Root.NORMAL_WH);
            Root.ResDir = rr.ResPathManager.RESOLUTION_NORMAL;
            Root.SET_LOW(true);
            if (Root.___DEV___) {
                Root.ResDir = rr.ResPathManager.RESOLUTION_DEV;
                Root.SET_LOW(false);
            }
        } else {
            Root.ResDir = rr.ResPathManager.RESOLUTION_HD;
            if (Root.___DEV___) {
                Root.ResDir = rr.ResPathManager.RESOLUTION_DEV;
            }
            Root.SET_LOW(false);
        }

        //资源位置初始化
        rr.ResPathManager.getInstance().init(rr.Localization.currLanguage.getLangPath(), Root.ResDir);
    };

    //loading界面加载完成
    Main.prototype.preLoadFinish = function () {
        var _this = this;
        cc.log("loading ui loading finish");

        //读取spilAPI;
        rr.Localization.loadAPI('576742227280292170');

        //因为cc.PreLoader是单例,所以在回调函数里再开始会有问题
        rr.Preloader.getInstance().initUi(new UiLoading());
        var fpsSniffer = new tx.FPSSniffer();
        if (Root.__RESOLUTION_TYPE__ == Root.RESOLUTION_TYPE_NOKNOWN) {
            fpsSniffer.addEventListener(tx.Event.COMPLETE, this.fpsSnifferFinish, this);
            rr.Preloader.getInstance().addChild(fpsSniffer);
        } else {
            setTimeout(function () {
                _this.fpsSnifferFinish(null);
            }, 100);
        }
    };

    Main.prototype.fpsSnifferFinish = function (e) {
        if (Root.__RESOLUTION_TYPE__ == Root.RESOLUTION_TYPE_NOKNOWN) {
            cc.log("fpsSniffer:" + e.userParameter);
            Root.__RESOLUTION_TYPE__ = tx.getResolutionType(e.userParameter);
            this.setResolutionSize();
        }
        rr.Preloader.getInstance().initMusicLoader(musicObject, soundObject);
        rr.Preloader.getInstance().preload(game_resources, this.loadFinish, this.showSplashScreen, this, 10);
    };

    //所有美术资源加载完成
    Main.prototype.loadFinish = function () {
        cc.log("all resoucre loading finish");
        cc.Director.getInstance().setContentScaleFactor(Root.ResourceSize.width / Root.STAGE_WH.width);
        //初始化美术资源
        //TODO DEBUG时开着
        //        rr.Preloader.destroy();
        //        this.startGame();
    };

    //按了开始按钮后
    Main.prototype.showSplashScreen = function (e) {
        //trace("按钮按下去了")
        rr.Preloader.destroy();
        rr.Linker.ShowSplashScreen(this.startGame, this);
    };

    Main.prototype.startGame = function () {
        new Root();
    };

    //////////////////////////////////////////////////////////////////////////////////////
    Main.prototype.initReplaceSceneEvent = function () {
        var _this = this;
        var setNextScene = cc.Director.getInstance().setNextScene;
        cc.Director.getInstance().setNextScene = function () {
            trace("setNextScene");
            setNextScene.call(cc.Director.getInstance());
            _this.adjustSizeForWindow();
        };
    };

    Main.prototype.adjustSizeForWindow = function () {
        var currRunScene = cc.Director.getInstance().getRunningScene();
        if (!currRunScene)
            return;
        var screenSize = tx.copyS(cc.EGLView.getInstance().getFrameSize());

        var scaleW = Root.STAGE_WH.width / screenSize.width;
        var scaleH = Root.STAGE_WH.height / screenSize.height;
        var scale = scaleW > scaleH ? scaleW : scaleH;

        screenSize.width *= scale;
        screenSize.height *= scale;

        if (screenSize.width > Root.MAX_STAGE_WH.width) {
            screenSize.width = Root.MAX_STAGE_WH.width;
        }

        if (screenSize.height > Root.MAX_STAGE_WH.height) {
            screenSize.height = Root.MAX_STAGE_WH.height;
        }
        currRunScene.setPositionX((screenSize.width - Root.STAGE_WH.width) / 2);
        currRunScene.setPositionY((screenSize.height - Root.STAGE_WH.height) / 2);

        cc.EGLView.getInstance().setDesignResolutionSize(screenSize.width, screenSize.height, cc.EGLView.getInstance()._resolutionPolicy);

        if (Root.instance) {
            Root.instance.dispatchEvent(new tx.Event(tx.Event.CHANGE));
        }
    };
    return Main;
})(cc.Application);
new Main();
//# sourceMappingURL=main.js.map
