//Turn off Exhibitionist Switch after taking a bath and at the end of the day
//And remove topless when taking a bath

(function () {
    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Scene_Boot_start.apply(this, arguments);

        // CommonEvent 176 :: Bathing at Home
        var event = window["$dataCommonEvents"][176];
        var bathParameter = event['list'].findIndex((element) =>
            // Display Nudity = ON
            JSON.stringify(element) === JSON.stringify({"code":121,"indent":0,"parameters":[2,2,0]})
        );
        event['list'].splice(bathParameter+1, 0,
          {"code":121,"indent":0,"parameters":[3,3,1]}
        );
        overrideDatabase("$dataCommonEvents", event);
    }
})();
