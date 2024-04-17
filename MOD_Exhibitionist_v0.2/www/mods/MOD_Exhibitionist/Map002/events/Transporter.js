(function () {
  var _Scene_Map_onMapLoaded_base = Scene_Map.prototype.onMapLoaded; // This is needed to load the map fully first before load the $dataMap variable
  Scene_Map.prototype.onMapLoaded = function() {                     //
    _Scene_Map_onMapLoaded_base.call(this);                          //
    let mapTargetID = 2; // MapID of the target (Apartment)
    let eventTargetID = 18; // EventID of the target (Transporter)
    if($gameMap.mapId() == mapTargetID){ // check whether the player right now is in the target map or not
      let event = window["$dataMap"]["events"][eventTargetID]["pages"]; // Initialize the event pages data
      let pagesIndex = 0; // Pages Index of the page where you wanna put your lines in. Ignore if you wanna add whole pages into the event.
      event.splice(event.length, 0, // Adding a new page in the event. If you just wanna add a few lines in the already existing pages then use event[pagesIndex]["list"]
        // The pages sequence
      {
        "conditions": {
          "actorId": 1,
          "actorValid": false,
          "itemId": 1,
          "itemValid": false,
          "selfSwitchCh": "A",
          "selfSwitchValid": false,
          "switch1Id": 2,
          "switch1Valid": true,
          "switch2Id": 1,
          "switch2Valid": false,
          "variableId": 243,
          "variableValid": true,
          "variableValue": 1
        },
        "directionFix": false,
        "image": {
          "tileId": 325,
          "characterName": "",
          "characterIndex": 0,
          "direction": 2,
          "pattern": 0
        },
        "list": [
          {
            "code": 117,
            "indent": 0,
            "parameters": [
              20
            ]
          },
          {
            "code": 111,
            "indent": 0,
            "parameters": [
              0,
              33,
              0
            ]
          },
          {
            "code": 115,
            "indent": 1
          },
          {
            "code": 0,
            "indent": 1
          },
          {
            "code": 412,
            "indent": 0
          },
          {
            "code": 111,
            "indent": 0,
            "parameters": [
              12,
              "$gameSwitches.value(2) || $gameSwitches.value(3)"
            ]
          },
          {
            "code": 121,
            "indent": 1,
            "parameters": [
              1,
              1,
              0
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
              0
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
              "\\n<\\n[1]>Do I want to go outside like this?"
            ]
          },
          {
            "code": 102,
            "indent": 1,
            "parameters": [
              [
                "Yes! I do!",
                "No... Maybe I shouldn't"
              ],
              1,
              0,
              2,
              0
            ]
          },
          {
            "code": 402,
            "indent": 1,
            "parameters": [
              0,
              "Yes! I do!"
            ]
          },
          {
            "code": 122,
            "indent": 2,
            "parameters": [
              1,
              1,
              0,
              0,
              3
            ]
          },
          {
            "code": 101,
            "indent": 2,
            "parameters": [
              "",
              0,
              0,
              2
            ]
          },
          {
            "code": 401,
            "indent": 2,
            "parameters": [
              "\\n<\\n[1]>I wanna go outside like this."
            ]
          },
          {
            "code": 0,
            "indent": 2,
            "parameters": []
          },
          {
            "code": 402,
            "indent": 1,
            "parameters": [
              1,
              "No... Maybe I shouldn't"
            ]
          },
          {
            "code": 122,
            "indent": 2,
            "parameters": [
              1,
              1,
              0,
              0,
              9
            ]
          },
          {
            "code": 101,
            "indent": 2,
            "parameters": [
              "",
              0,
              0,
              2
            ]
          },
          {
            "code": 401,
            "indent": 2,
            "parameters": [
              "\\n<\\n[1]>I should get dressed properly before leaving."
            ]
          },
          {
            "code": 250,
            "indent": 2,
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
            "indent": 2,
            "parameters": [
              2,
              2,
              1
            ]
          },
          {
            "code": 121,
            "indent": 2,
            "parameters": [
              3,
              3,
              1
            ]
          },
          {
            "code": 111,
            "indent": 2,
            "parameters": [
              1,
              426,
              0,
              1,
              2
            ]
          },
          {
            "code": 121,
            "indent": 3,
            "parameters": [
              17,
              17,
              1
            ]
          },
          {
            "code": 0,
            "indent": 3,
            "parameters": []
          },
          {
            "code": 412,
            "indent": 2,
            "parameters": []
          },
          {
            "code": 0,
            "indent": 2,
            "parameters": []
          },
          {
            "code": 404,
            "indent": 1,
            "parameters": []
          },
          {
            "code": 230,
            "indent": 1,
            "parameters": [
              60
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
          },
          {
            "code": 117,
            "indent": 0,
            "parameters": [
              18
            ]
          },
          {
            "code": 121,
            "indent": 0,
            "parameters": [
              5,
              5,
              1
            ]
          },
          {
            "code": 121,
            "indent": 0,
            "parameters": [
              30,
              30,
              1
            ]
          },
          {
            "code": 122,
            "indent": 0,
            "parameters": [
              242,
              242,
              0,
              0,
              2
            ]
          },
          {
            "code": 0,
            "indent": 0,
            "parameters": []
          }
        ],
        "moveFrequency": 3,
        "moveRoute": {
          "list": [
            {
              "code": 0,
              "parameters": []
            }
          ],
          "repeat": true,
          "skippable": false,
          "wait": false
        },
        "moveSpeed": 3,
        "moveType": 0,
        "priorityType": 1,
        "stepAnime": false,
        "through": false,
        "trigger": 0,
        "walkAnime": true
      },
      {
        "conditions": {
          "actorId": 1,
          "actorValid": false,
          "itemId": 1,
          "itemValid": false,
          "selfSwitchCh": "A",
          "selfSwitchValid": false,
          "switch1Id": 3,
          "switch1Valid": true,
          "switch2Id": 1,
          "switch2Valid": false,
          "variableId": 243,
          "variableValid": true,
          "variableValue": 1
        },
        "directionFix": false,
        "image": {
          "tileId": 325,
          "characterName": "",
          "characterIndex": 0,
          "direction": 2,
          "pattern": 0
        },
        "list": [
          {
            "code": 117,
            "indent": 0,
            "parameters": [
              20
            ]
          },
          {
            "code": 111,
            "indent": 0,
            "parameters": [
              0,
              33,
              0
            ]
          },
          {
            "code": 115,
            "indent": 1
          },
          {
            "code": 0,
            "indent": 1
          },
          {
            "code": 412,
            "indent": 0
          },
          {
            "code": 111,
            "indent": 0,
            "parameters": [
              12,
              "$gameSwitches.value(2) || $gameSwitches.value(3)"
            ]
          },
          {
            "code": 121,
            "indent": 1,
            "parameters": [
              1,
              1,
              0
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
              0
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
              "\\n<\\n[1]>Do I want to go outside like this?"
            ]
          },
          {
            "code": 102,
            "indent": 1,
            "parameters": [
              [
                "Yes! I do!",
                "No... Maybe I shouldn't"
              ],
              1,
              0,
              2,
              0
            ]
          },
          {
            "code": 402,
            "indent": 1,
            "parameters": [
              0,
              "Yes! I do!"
            ]
          },
          {
            "code": 122,
            "indent": 2,
            "parameters": [
              1,
              1,
              0,
              0,
              3
            ]
          },
          {
            "code": 101,
            "indent": 2,
            "parameters": [
              "",
              0,
              0,
              2
            ]
          },
          {
            "code": 401,
            "indent": 2,
            "parameters": [
              "\\n<\\n[1]>I wanna go outside like this."
            ]
          },
          {
            "code": 0,
            "indent": 2,
            "parameters": []
          },
          {
            "code": 402,
            "indent": 1,
            "parameters": [
              1,
              "No... Maybe I shouldn't"
            ]
          },
          {
            "code": 122,
            "indent": 2,
            "parameters": [
              1,
              1,
              0,
              0,
              9
            ]
          },
          {
            "code": 101,
            "indent": 2,
            "parameters": [
              "",
              0,
              0,
              2
            ]
          },
          {
            "code": 401,
            "indent": 2,
            "parameters": [
              "\\n<\\n[1]>I should get dressed properly before leaving."
            ]
          },
          {
            "code": 250,
            "indent": 2,
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
            "indent": 2,
            "parameters": [
              2,
              2,
              1
            ]
          },
          {
            "code": 121,
            "indent": 2,
            "parameters": [
              3,
              3,
              1
            ]
          },
          {
            "code": 111,
            "indent": 2,
            "parameters": [
              1,
              426,
              0,
              1,
              2
            ]
          },
          {
            "code": 121,
            "indent": 3,
            "parameters": [
              17,
              17,
              1
            ]
          },
          {
            "code": 0,
            "indent": 3,
            "parameters": []
          },
          {
            "code": 412,
            "indent": 2,
            "parameters": []
          },
          {
            "code": 0,
            "indent": 2,
            "parameters": []
          },
          {
            "code": 404,
            "indent": 1,
            "parameters": []
          },
          {
            "code": 230,
            "indent": 1,
            "parameters": [
              60
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
          },
          {
            "code": 117,
            "indent": 0,
            "parameters": [
              18
            ]
          },
          {
            "code": 121,
            "indent": 0,
            "parameters": [
              5,
              5,
              1
            ]
          },
          {
            "code": 121,
            "indent": 0,
            "parameters": [
              30,
              30,
              1
            ]
          },
          {
            "code": 122,
            "indent": 0,
            "parameters": [
              242,
              242,
              0,
              0,
              2
            ]
          },
          {
            "code": 0,
            "indent": 0,
            "parameters": []
          }
        ],
        "moveFrequency": 3,
        "moveRoute": {
          "list": [
            {
              "code": 0,
              "parameters": []
            }
          ],
          "repeat": true,
          "skippable": false,
          "wait": false
        },
        "moveSpeed": 3,
        "moveType": 0,
        "priorityType": 1,
        "stepAnime": false,
        "through": false,
        "trigger": 0,
        "walkAnime": true
      });
    };
  };
})();
