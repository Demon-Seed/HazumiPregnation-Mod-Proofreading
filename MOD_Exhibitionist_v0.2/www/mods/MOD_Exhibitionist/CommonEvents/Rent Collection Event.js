//Turn off Exhibitionist Switch after taking a bath and at the end of the day
//And remove topless when taking a bath

(function () {
    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Scene_Boot_start.apply(this, arguments);

        // CommonEvent 12 :: Rent Collection Event
        var event = window["$dataCommonEvents"][12];
        var displayNudity = event['list'].findIndex((element) =>
            // If (Display Nudity is ON)
            JSON.stringify(element) === JSON.stringify({
              "code": 111,
              "indent": 0,
              "parameters": [
                0,
                2,
                0
              ]
            })
        );
        event['list'].splice(displayNudity, 20,
          {
            "code": 111,
            "indent": 0,
            "parameters": [
              12,
              "$gameSwitches.value(2) || $gameSwitches.value(3)"
            ]
          },
          {
            "code": 122,
            "indent": 1,
            "parameters": [
              20,
              20,
              0,
              0,
              7
            ]
          },
          {
            "code": 122,
            "indent": 1,
            "parameters": [
              1,
              1,
              0,
              0,
              6
            ]
          },
          {
            "code": 101,
            "indent": 1,
            "parameters": [
              "",
              0,
              0,
              2
            ]
          },
          {
            "code": 401,
            "indent": 1,
            "parameters": [
              "\\n<\\n[1]>Kyaaa!"
            ]
          },
          {
            "code": 401,
            "indent": 1,
            "parameters": [
              "Someone's coming!"
            ]
          },
          {
            "code": 401,
            "indent": 1,
            "parameters": [
              "Clothes! Clothes!"
            ]
          },
          {
            "code": 250,
            "indent": 1,
            "parameters": [
              {
                "name": "Equip2",
                "volume": 90,
                "pitch": 100,
                "pan": 0
              }
            ]
          },
          {
            "code": 121,
            "indent": 1,
            "parameters": [
              2,
              2,
              1
            ]
          },
          {
            "code": 121,
            "indent": 1,
            "parameters": [
              3,
              3,
              1
            ]
          },
          {
            "code": 122,
            "indent": 1,
            "parameters": [
              1,
              1,
              0,
              0,
              1
            ]
          },
          {
            "code": 122,
            "indent": 1,
            "parameters": [
              20,
              20,
              0,
              0,
              6
            ]
          },
          {
            "code": 101,
            "indent": 1,
            "parameters": [
              "",
              0,
              0,
              2
            ]
          },
          {
            "code": 401,
            "indent": 1,
            "parameters": [
              "\\n<\\n[1]>Y-Yes?"
            ]
          },
          {
            "code": 0,
            "indent": 1,
            "parameters": []
          },
          {
            "code": 411,
            "indent": 0,
            "parameters": []
          },
          {
            "code": 122,
            "indent": 1,
            "parameters": [
              1,
              1,
              0,
              0,
              4
            ]
          },
          {
            "code": 101,
            "indent": 1,
            "parameters": [
              "",
              0,
              0,
              2
            ]
          },
          {
            "code": 401,
            "indent": 1,
            "parameters": [
              "\\n<\\n[1]>Yes?"
            ]
          },
          {
            "code": 0,
            "indent": 1,
            "parameters": []
          },
          {
            "code": 412,
            "indent": 0,
            "parameters": []
          }
        );
        overrideDatabase("$dataCommonEvents", event);
    }
})();
