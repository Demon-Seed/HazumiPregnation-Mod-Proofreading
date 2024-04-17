(function () {
  var _Scene_Map_onMapLoaded_base = Scene_Map.prototype.onMapLoaded; // This is needed to load the map fully first before load the $dataMap variable
  Scene_Map.prototype.onMapLoaded = function() {                     //
    _Scene_Map_onMapLoaded_base.call(this);                          //
    let mapTargetID = 7; // MapID of the target (Institute)
    let eventTargetID = 13; // EventID of the target (Horny Boy)
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
            "variableId": 1,
            "variableValid": false,
            "variableValue": 0
          },
          "directionFix": false,
          "image": {
            "tileId": 0,
            "characterName": "Student_boy_1",
            "direction": 4,
            "pattern": 0,
            "characterIndex": 6
          },
          "list": [
            {
              "code": 111,
              "indent": 0,
              "parameters": [
                0,
                46,
                0
              ]
            },
            {
              "code": 102,
              "indent": 1,
              "parameters": [
                [
                  "Let him rape you",
                  "Run away!"
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
                "Let him rape you"
              ]
            },
            {
              "code": 355,
              "indent": 2,
              "parameters": [
                "var bun = 3"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "if(v[11] >= 40){"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "  bun += 1"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "}"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "v[22] = randmm(0,bun)"
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                1,
                1,
                0
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
                "\\n<Horny Boy>Oh boy! Don't blame me for doing this to you!"
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
              ]
            },
            {
              "code": 221,
              "indent": 2,
              "parameters": []
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                381,
                381,
                0,
                4,
                "\"Doggy Style\""
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
                2
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                20,
                20,
                0,
                0,
                1
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                338,
                338,
                0
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                382,
                382,
                0,
                0,
                1
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                95
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                99
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                96
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                89,
                89,
                0,
                0,
                2
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                89
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
                "\\n<Horny Boy>Ahn! Yesss! \\n[1]!"
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
                "\\n<Horny Boy>How!\\| Dare!\\| You!\\| Get pregnant with other man's child!"
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
                "\\n<Horny Boy>Take this, \\n[1]!"
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
                "\\n<Horny Boy>I'm comingggg!!"
              ]
            },
            {
              "code": 355,
              "indent": 2,
              "parameters": [
                "$gameTemp.isShasei = true"
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                21,
                21,
                1,
                2,
                0,
                6
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                77,
                77,
                1,
                1,
                21
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                355,
                355,
                1,
                0,
                1
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                75,
                75,
                1,
                0,
                1
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                78
              ]
            },
            {
              "code": 355,
              "indent": 2,
              "parameters": [
                "$gameTemp.isShasei = false"
              ]
            },
            {
              "code": 230,
              "indent": 2,
              "parameters": [
                60
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                382,
                382,
                0,
                0,
                1
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                89,
                89,
                0,
                0,
                2
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                89
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
                "\\n<Horny Boy>Ugh! I'm gonna do it again!"
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
                "\\n<Horny Boy>I'm gonna be the one who knock you up next time!"
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
                "\\n<Horny Boy>I'm comingggg!!"
              ]
            },
            {
              "code": 355,
              "indent": 2,
              "parameters": [
                "$gameTemp.isShasei = true"
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                77,
                77,
                1,
                1,
                21
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                355,
                355,
                1,
                0,
                1
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                75,
                75,
                1,
                0,
                2
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                78
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                78
              ]
            },
            {
              "code": 355,
              "indent": 2,
              "parameters": [
                "$gameTemp.isShasei = false"
              ]
            },
            {
              "code": 230,
              "indent": 2,
              "parameters": [
                60
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                99
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
              ]
            },
            {
              "code": 222,
              "indent": 2,
              "parameters": []
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
                "\\n<Horny Boy>Fuh...That was great!"
              ]
            },
            {
              "code": 401,
              "indent": 2,
              "parameters": [
                "Thank you so much, \\n[1]!"
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                32,
                32,
                2,
                0,
                2
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                1,
                1,
                0
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
                12
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                20,
                20,
                0,
                0,
                5
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
                "\\n<\\n[1]>HEY! You owe me some money!"
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
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
                "\\n<Horny Boy>Alright, alright... Jeez..."
              ]
            },
            {
              "code": 401,
              "indent": 2,
              "parameters": [
                "Here's a tip, \\n[1]!"
              ]
            },
            {
              "code": 250,
              "indent": 2,
              "parameters": [
                {
                  "name": "Item1",
                  "volume": 90,
                  "pitch": 100,
                  "pan": 0
                }
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                21,
                21,
                0,
                4,
                "$gameVariables.value(47)/2"
              ]
            },
            {
              "code": 125,
              "indent": 2,
              "parameters": [
                0,
                1,
                21
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
                "Received a \\v[21] yen tip."
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                1,
                1,
                0
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
              "code": 122,
              "indent": 2,
              "parameters": [
                20,
                20,
                0,
                0,
                0
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
                "\\n<\\n[1]>Thank you!"
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                20,
                20,
                0,
                0,
                0
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
                0
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                90
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                77
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                84
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
                "Run away!"
              ]
            },
            {
              "code": 205,
              "indent": 2,
              "parameters": [
                -1,
                {
                  "list": [
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 0
                    }
                  ],
                  "repeat": false,
                  "skippable": true,
                  "wait": true
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
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
                9
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
                "\\n<Horny Boy>Are you trying to seduce me, \\n[1]? Let's do it in"
              ]
            },
            {
              "code": 401,
              "indent": 1,
              "parameters": [
                "storage room! (I will make sure to knock you up～!!)"
              ]
            },
            {
              "code": 102,
              "indent": 1,
              "parameters": [
                [
                  "Blow him",
                  "Run away"
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
                "Blow him"
              ]
            },
            {
              "code": 355,
              "indent": 2,
              "parameters": [
                "if($gameTemp.isOralSex){"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "  $gameTemp.isOralSex = true"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "} else {"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "  $gameTemp.isOralSex = true;"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "  v[382] = 3;"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "  s[85] = false"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "  $gameTemp.isPiston=false"
              ]
            },
            {
              "code": 655,
              "indent": 2,
              "parameters": [
                "}"
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
                "\\n<\\n[1]>I can give you a blowjob, instead!"
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
                "\\n<Horny Boy>\\{Sure!\\} Let's do it right now, \\n[1]!"
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
              ]
            },
            {
              "code": 221,
              "indent": 2,
              "parameters": []
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                381,
                381,
                0,
                4,
                "\"Doggy Style\""
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
                2
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                20,
                20,
                0,
                0,
                1
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                338,
                338,
                0
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                85,
                85,
                1
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                382,
                382,
                0,
                0,
                3
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                99
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                96
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                89,
                89,
                0,
                0,
                1
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                89
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
                "\\n<Horny Boy>Ahn! Yesss! \\n[1]!"
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
                "\\n<Horny Boy>Suck it harder!"
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
                "\\n<Horny Boy>I'm comingggg!!"
              ]
            },
            {
              "code": 355,
              "indent": 2,
              "parameters": [
                "$gameTemp.isShasei = true"
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                21,
                21,
                1,
                2,
                0,
                6
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                76,
                76,
                1,
                1,
                21
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                353,
                353,
                1,
                0,
                1
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                75,
                75,
                1,
                0,
                1
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                78
              ]
            },
            {
              "code": 355,
              "indent": 2,
              "parameters": [
                "$gameTemp.isShasei = false"
              ]
            },
            {
              "code": 230,
              "indent": 2,
              "parameters": [
                60
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                99
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
              ]
            },
            {
              "code": 222,
              "indent": 2,
              "parameters": []
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
                "\\n<Horny Boy>Fuh...That was great!"
              ]
            },
            {
              "code": 401,
              "indent": 2,
              "parameters": [
                "Thank you so much, \\n[1]!"
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                21,
                21,
                0,
                4,
                "$gameVariables.value(47)/4"
              ]
            },
            {
              "code": 250,
              "indent": 2,
              "parameters": [
                {
                  "name": "Item1",
                  "volume": 90,
                  "pitch": 100,
                  "pan": 0
                }
              ]
            },
            {
              "code": 125,
              "indent": 2,
              "parameters": [
                0,
                1,
                21
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
                "Received a \\v[21] yen tip."
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                32,
                32,
                2,
                0,
                1
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
                0
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                90
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                77
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                84
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
                "Run away"
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
                12
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
                "\\n<\\n[1]>I'm not doing this to seduce anyone!"
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
                0
              ]
            },
            {
              "code": 205,
              "indent": 2,
              "parameters": [
                -1,
                {
                  "list": [
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 0
                    }
                  ],
                  "repeat": false,
                  "skippable": true,
                  "wait": true
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
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
              "code": 122,
              "indent": 0,
              "parameters": [
                75,
                75,
                0,
                0,
                0
              ]
            },
            {
              "code": 122,
              "indent": 0,
              "parameters": [
                382,
                382,
                0,
                0,
                0
              ]
            },
            {
              "code": 122,
              "indent": 0,
              "parameters": [
                373,
                373,
                0,
                0,
                0
              ]
            },
            {
              "code": 122,
              "indent": 0,
              "parameters": [
                383,
                383,
                0,
                0,
                0
              ]
            },
            {
              "code": 122,
              "indent": 0,
              "parameters": [
                322,
                322,
                0,
                0,
                0
              ]
            },
            {
              "code": 117,
              "indent": 0,
              "parameters": [
                22
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
            "variableId": 1,
            "variableValid": false,
            "variableValue": 0
          },
          "directionFix": false,
          "image": {
            "tileId": 0,
            "characterName": "Student_boy_1",
            "direction": 4,
            "pattern": 0,
            "characterIndex": 6
          },
          "list": [
            {
              "code": 111,
              "indent": 0,
              "parameters": [
                0,
                46,
                0
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
                9
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
                "\\n<Horny Boy>Ah, hello \\n[1]... I see you are as healthy as ever."
              ]
            },
            {
              "code": 401,
              "indent": 1,
              "parameters": [
                "Your milk looks delicious today too. May I?"
              ]
            },
            {
              "code": 102,
              "indent": 1,
              "parameters": [
                [
                  "Enjoy yourself!",
                  "This is for the baby!"
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
                "Enjoy yourself!"
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
                1
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
                "\\n<\\n[1]>Do you want to drink my milk?"
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
                "\\n<Horny Boy>\\{Of course!\\}"
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
              "code": 121,
              "indent": 2,
              "parameters": [
                90,
                90,
                0
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                91,
                91,
                0
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
                "\\n<Horny Boy>mhhmm...."
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
                6
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
                "\\n<\\n[1]>Ahn! Being milked by my classmate is amazin'!"
              ]
            },
            {
              "code": 401,
              "indent": 2,
              "parameters": [
                "\\.\\{Ahn!!\\}"
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                214
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
                "\\n<Horny Boy>Thank you so much, \\n[1]!"
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                21,
                21,
                0,
                4,
                "$gameVariables.value(47)/4"
              ]
            },
            {
              "code": 250,
              "indent": 2,
              "parameters": [
                {
                  "name": "Item1",
                  "volume": 90,
                  "pitch": 100,
                  "pan": 0
                }
              ]
            },
            {
              "code": 125,
              "indent": 2,
              "parameters": [
                0,
                1,
                21
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
                "Received a \\v[21] yen tip."
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                32,
                32,
                2,
                0,
                1
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                90,
                90,
                1
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                91,
                91,
                1
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
                0
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
                "This is for the baby!"
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
                12
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
                "\\n<\\n[1]>No way! My baby need this!"
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
                0
              ]
            },
            {
              "code": 205,
              "indent": 2,
              "parameters": [
                -1,
                {
                  "list": [
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 0
                    }
                  ],
                  "repeat": false,
                  "skippable": true,
                  "wait": true
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
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
                9
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
                "\\n<Horny Boy>Whoa! Mamamia! Look at you, \\n[1]!"
              ]
            },
            {
              "code": 401,
              "indent": 1,
              "parameters": [
                "May I... \\.May I touch those? (I'm gonna touch myself"
              ]
            },
            {
              "code": 401,
              "indent": 1,
              "parameters": [
                "tonight～.)"
              ]
            },
            {
              "code": 102,
              "indent": 1,
              "parameters": [
                [
                  "Let him...",
                  "No way!"
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
                "Let him..."
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
                1
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
                "\\n<\\n[1]>Do you want to suck on these?"
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
                "\\n<Horny Boy>\\{May I!?\\}"
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
                "\\n<\\n[1]>Sure!"
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                90,
                90,
                0
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
                "\\n<Horny Boy>mmhhmm\\..\\..\\..\\.."
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
                6
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
                "\\n<\\n[1]>Ahn! He is sucking like a baby!"
              ]
            },
            {
              "code": 401,
              "indent": 2,
              "parameters": [
                "\\.\\{Ahn!!\\}"
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                33
              ]
            },
            {
              "code": 117,
              "indent": 2,
              "parameters": [
                214
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
                "\\n<Horny Boy>Thank you so much, \\n[1]!"
              ]
            },
            {
              "code": 122,
              "indent": 2,
              "parameters": [
                21,
                21,
                0,
                4,
                "$gameVariables.value(47)/6"
              ]
            },
            {
              "code": 250,
              "indent": 2,
              "parameters": [
                {
                  "name": "Item1",
                  "volume": 90,
                  "pitch": 100,
                  "pan": 0
                }
              ]
            },
            {
              "code": 125,
              "indent": 2,
              "parameters": [
                0,
                1,
                21
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
                "Received a \\v[21] yen tip."
              ]
            },
            {
              "code": 121,
              "indent": 2,
              "parameters": [
                90,
                90,
                1
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
                0
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
                "No way!"
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
                12
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
                "\\n<\\n[1]>Go away, you creep!"
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
                0
              ]
            },
            {
              "code": 205,
              "indent": 2,
              "parameters": [
                -1,
                {
                  "list": [
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 13,
                      "indent": null
                    },
                    {
                      "code": 0
                    }
                  ],
                  "repeat": false,
                  "skippable": true,
                  "wait": true
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
            },
            {
              "code": 505,
              "indent": 2,
              "parameters": [
                {
                  "code": 13,
                  "indent": null
                }
              ]
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
                22
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
