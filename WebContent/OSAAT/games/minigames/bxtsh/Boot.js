var CCConfig = (function () {
    function CCConfig() {
        this.COCOS2D_DEBUG = 2;
        this.box2d = false;
        this.chipmunk = false;
        this.showFPS = false;
        this.loadExtension = true;
        this.frameRate = 60;
        this.tag = 'gameCanvas';
        this.engineDir = null;
        //        engineDir='http://www.cocos2d-x.org/html5-samples/cocos2d/';
        //        engineDir='cocos2d/';
        this.SingleEngineFile = 'jsLib/Cocos2d-html5-v2.2.2.min.js';
        //    SingleEngineFile = null;
        this.renderMode = 1;
        this.appFilesMin = [
            'jsLib/SimpleAudioEngine.js',
            'jsLib/platformTx.js',
            'jsLib/TweenMax.min.js',
            'jsLib/howler.js',
            'BestySandPainting.min.js'
        ];
        this.appFilesAll = [
            'jsLib/SimpleAudioEngine.js',
            'jsLib/platformTx.js',
            'jsLib/howler.js',
            'jsLib/TweenMax.min.js',
            'src/timonxue/utils/Dictionary.js',
            'src/timonxue/utils/DictionaryEx.js',
            'src/timonxue/events/EventDispatcher.js',
            'src/timonxue/events/Event.js',
            'src/timonxue/utils/Timer.js',
            'src/timonxue/displayObject/DisplayObject.js',
            'src/timonxue/displayObject/TextureAtlas.js',
            'src/timonxue/displayObject/IInteractiveObject.js',
            'src/timonxue/displayObject/InteractiveObject.js',
            'src/timonxue/displayObject/InteractiveNodeRGBA.js',
            'src/timonxue/displayObject/InteractiveLayer.js',
            'src/timonxue/displayObject/InteractiveSprite.js',
            'src/timonxue/displayObject/Graphics.js',
            'src/timonxue/displayObject/Bitmap.js',
            'src/timonxue/displayObject/BitmapData.js',
            'src/timonxue/displayObject/DragObject.js',
            'src/timonxue/displayObject/PixelList.js',
            'src/timonxue/displayObject/PixelClip.js',
            'src/timonxue/displayObject/MovieClip.js',
            'src/timonxue/ccs/WidgetEx.js',
            'src/timonxue/ccs/ImageViewMovieClip.js',
            'src/timonxue/events/MouseTouchEvent.js',
            'src/timonxue/math/Matrix.js',
            'src/timonxue/utils/Utils.js',
            'src/timonxue/utils/Attach.js',
            'src/timonxue/utils/SharedObjectUtil.js',
            'src/timonxue/debug/WSSLog.js',
            'src/timonxue/debug/Stats.js',
            'src/timonxue/debug/Trace.js',
            'src/timonxue/debug/FPSSniffer.js',
            'src/timonxue/ccTx/FixBug2_2_2.js',
            'src/riverrun/localization/Localization.js',
            'src/riverrun/localization/LocalizationEvent.js',
            'src/riverrun/localization/LocalizationSelector.js',
            'src/riverrun/ResPathManager.js',
            'src/riverrun/SoundManager.js',
            'src/riverrun/Filter.js',
            'src/riverrun/PreLoader.js',
            'src/riverrun/Linker.js',
            'src/LibTweenMax/ZTweenMax.js',
            'src/Resources.js',
            'src/game/tools/SequenceDraw.js',
            'src/game/manager/PeopleAnimationManager.js',
            'src/game/manager/XMLManager.js',
            'src/game/manager/TutorialManager.js',
            'src/game/data/Data.js',
            'src/game/data/ColorData.js',
            'src/game/data/ColorGroupData.js',
            'src/game/data/UserProfile.js',
            'src/game/data/PrmCnt.js',
            'src/game/data/TemplateData.js',
            'src/game/data/PeopleAnimationData.js',
            'src/game/data/HashMap.js',
            'src/game/data/UserPurchaseRecords.js',
            'src/game/data/RecordsManager.js',
            'src/game/manipulate/AbstractGame.js',
            'src/game/events/UIEvents.js',
            'src/game/events/MyEvent.js',
            'src/game/sand/particle/Particle.js',
            'src/game/sand/particle/AbstractMove.js',
            'src/game/sand/particle/MoveDrop.js',
            'src/game/sand/LocationWithNo.js',
            'src/game/sand/AbsBitContainer.js',
            'src/game/sand/UndoManager.js',
            'src/game/sand/DrawBitContainer.js',
            'src/game/ui/Panel/AbstractPanel.js',
            'src/game/ui/Panel/GeneralPopPanel.js',
            'src/game/ui/Panel/BuyPopPanel.js',
            'src/game/ui/Panel/BgSelectPanel.js',
            'src/game/ui/Panel/TemplatePanel.js',
            'src/game/ui/Panel/FramePanel.js',
            'src/game/ui/Panel/PageModulePanel.js',
            'src/game/ui/Panel/ToolBar.js',
            'src/game/ui/Panel/ColorBar.js',
            'src/game/ui/Panel/SandInfoPanel.js',
            'src/game/ui/Panel/SandShopPanel.js',
            'src/game/ui/AbstractScreen.js',
            'src/game/ui/UiLoading.js',
            'src/game/ui/UiMainMenu.js',
            'src/game/ui/UiSelectFrame.js',
            'src/game/ui/UiDrawOutLine.js',
            'src/game/ui/UiSelectTemplate.js',
            'src/game/ui/UIPlay.js',
            'src/game/ui/UiManager.js',
            'src/game/Game.js',
            'src/Root.js'
        ];
    }
    return CCConfig;
})();

//---------------------------------------------------------------------------------------------------------------------------------------
var Boot = (function () {
    function Boot() {
        window.addEventListener('DOMContentLoaded', function () {
            var config = new CCConfig();

            //            config["appFiles"] = config.appFilesAll;
            config["appFiles"] = config.appFilesMin;

            //first load engine file if specified
            var script = document.createElement('script');

            /*********Delete this section if you have packed all files into one*******/
            if (config.SingleEngineFile && !config.engineDir) {
                script.src = config.SingleEngineFile;
            } else if (config.engineDir && !config.SingleEngineFile) {
                script.src = config.engineDir + 'jsloader.js';
            } else {
                alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
            }

            /*********Delete this section if you have packed all files into one*******/
            //s.src = 'Packed_Release_File.js'; //IMPORTANT: Un-comment this line if you have packed all files into one
            document.body.appendChild(script);
            document["ccConfig"] = config;
            script.id = 'cocos2d-html5';
            //else if single file specified, load singlefile
        });
    }
    return Boot;
})();
new Boot();
//# sourceMappingURL=Boot.js.map
