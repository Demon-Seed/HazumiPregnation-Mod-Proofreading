(function() {
const _Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function () {
    _Scene_Boot_start.apply(this, arguments);
    overrides()
}

const overrides = function(){



	overrideDatabase("$dataCommonEvents",{	"id": 206,
		"list": [
			{
				"code": 122,
				"indent": 0,
				"parameters": [
					104,
					104,
					0,
					4,
					"'Midwife'"
				]
			},
			{
				"code": 111,
				"indent": 0,
				"parameters": [
					1,
					56,
					0,
					0,
					2
				]
			},
			{
				"code": 230,
				"indent": 1,
				"parameters": [
					10
				]
			},
			{
				"code": 201,
				"indent": 1,
				"parameters": [
					0,
					4,
					29,
					6,
					2,
					0
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
					3
				]
			},
			{
				"code": 122,
				"indent": 1,
				"parameters": [
					381,
					381,
					0,
					4,
					"`出産`"
				]
			},
			{
				"code": 117,
				"indent": 1,
				"parameters": [
					96
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
					"\\n<\\n[1]>Nooooooo! \nUnnngghhhh! \nI can't do it! I can't do it!...."
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
					"\\n<\\v[104]>You have to! \nOnly you can push your baby out. \nFocus on your breathing."
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
					"\\n<\\n[1]>Ok, ok I just have to breathe. \nHoo...hee..hoo..."
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
					"\\n<\\v[104]>You're definitely in labor. \nHow close are the contractions?"
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
					"\\n<\\n[1]>Aaaah...aaah, they're right on top of each other... \nUggghhh, here comes another one... \nUggggnnnhhh."
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
					"\\n<\\v[104]>I need you to relax. Breathe with me. \nHah\\.\\.\\.\\. \nHoo\\.\\.\\.\\."
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
					"\\n<\\n[1]>Hah\\.\\.\\.\\. \nHoo\\.\\.\\.\\."
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
					"\\n<\\v[104]>Good. Just like that."
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
					"\\n<\\n[1]>Hah\\.\\. \nHoo\\.\\.. \nUghhh, can I start pushing \"Hi-Hi-Hoo\"?"
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
					"\\n<\\v[104]>No, not yet. Your \\c[3]cervix\\c[0] needs to be fully dilated first. \nIn the meantime...keep up the deep breathing."
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
					"\\n<\\n[1]>Arrghh. What are you doing?"
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
					3
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
					"\\n<\\n[1]>Ow! Aaaah, it hurts please stop!"
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
					"\\n<\\v[104]>I'm checking to see how much you're dilated again. \nHang in there."
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
					2
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
					"\\n<\\n[1]>Hah\\.\\. \nHoo\\.\\. Ugh, I can feel the head \npushing through me!!"
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
					"\\n<\\v[104]>Ok, looks like you're fully dilated now. We can move \nto the delivery room."
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
					"\\n<\\n[1]>Haa, haa, haaaa. \nPlease can I push?? \nOh god..need...to...push..NOW!!!"
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
					"\\n<\\v[104]>Yes! You're fully dilated so \nif you're having a contraction, push!!!"
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
					3
				]
			},
			{
				"code": 122,
				"indent": 1,
				"parameters": [
					71,
					71,
					0,
					0,
					1
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
					"\\n<\\v[104]>I can see a tiny bit of the head! \nNow push!"
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
					"\\n<\\n[1]>Hhhhhhnnnnghhhh!!!!! \nNnnnnnnghhhh!!!!!"
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
					"\\n<\\v[104]>Ok, slow down. Switch to shorter breathes."
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
					2
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
					"\\n<\\n[1]>\\.\\.Haaaaah....\\.\\...haaaaah...\\.\\.haaah."
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
					"\\n<\\v[104]>Yes, you are doing good."
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
					"\\n<\\n[1]>\\.\\.Haaaaah....\\.\\...haaaaah...\\.\\.haaah."
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
					"\\n<\\v[104]>Okay, take a deep breath. \nNow Push!"
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
					3
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
					"\\n<\\n[1]>Gaaaaaaah!!!!!!!! Hhhhnnnnnngghhh!!!"
				]
			},
			{
				"code": 122,
				"indent": 1,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"\\n<\\v[104]>Ok, the head is out! Just a few more pushes!"
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
					"\\n<\\n[1]>Hhhhhhhnnnggghhhhhh!!!!"
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
				"code": 122,
				"indent": 1,
				"parameters": [
					71,
					71,
					0,
					0,
					3
				]
			},
			{
				"code": 250,
				"indent": 1,
				"parameters": [
					{
						"name": "_bochan",
						"volume": 100,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 355,
				"indent": 1,
				"parameters": [
					"this.waitSe(1.6)"
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
					"\\n<\\n[1]>(Aah, just when I thought I couldn't \npush anymore, the baby popped out followed \nby a gush of liquid...)"
				]
			},
			{
				"code": 230,
				"indent": 1,
				"parameters": [
					24
				]
			},
			{
				"code": 250,
				"indent": 1,
				"parameters": [
					{
						"name": "_baby_cry",
						"volume": 90,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 230,
				"indent": 1,
				"parameters": [
					55
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
					1
				]
			},
			{
				"code": 230,
				"indent": 1,
				"parameters": [
					45
				]
			},
			{
				"code": 111,
				"indent": 1,
				"parameters": [
					12,
					"hasMultiBaby()"
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
					"\\n<\\n[1]>Oh god, I feel the next one..."
				]
			},
			{
				"code": 251,
				"indent": 2,
				"parameters": []
			},
			{
				"code": 355,
				"indent": 2,
				"parameters": [
					"namingMultiBaby()"
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
					"\\n<\\v[104]>Yes, there's \\v[102] left. I know you're tired but you're \nnot done yet!"
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
					"\\n<\\n[1]>It's too much, I can't push out another baby! \nUnnnnghhh!!!"
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
				"code": 122,
				"indent": 2,
				"parameters": [
					443,
					443,
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
					"\\n<\\v[104]>I can see the next child's head. \nYou're crowning again! Just a bit more!"
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
					"\\n<\\n[1]>You keep saying that!!! \nOh god, here comes another contraction!! \nHhhhhhhhnnnngggggghhh!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					443,
					443,
					0,
					0,
					2
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
					"\\n<\\n[1]>Nnnnnnngggggggghhhhhhhh!!!"
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
					"\\n<\\v[104]>You are doing good. \nThis next baby should come out easier. \nBut you still need to push, HARD!!"
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
					"\\n<\\n[1]>Gaaaahh!!! Hhhhnnnngggghhh!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					443,
					443,
					0,
					0,
					3
				]
			},
			{
				"code": 250,
				"indent": 2,
				"parameters": [
					{
						"name": "_bochan",
						"volume": 100,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 355,
				"indent": 2,
				"parameters": [
					"this.waitSe(1.4)"
				]
			},
			{
				"code": 117,
				"indent": 2,
				"parameters": [
					243
				]
			},
			{
				"code": 230,
				"indent": 2,
				"parameters": [
					24
				]
			},
			{
				"code": 250,
				"indent": 2,
				"parameters": [
					{
						"name": "_baby_cry",
						"volume": 90,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 230,
				"indent": 2,
				"parameters": [
					55
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
					"\\n<\\v[104]>Congratulations! You did it!"
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
					"\\n<\\n[1]>(I did it!...I gave birth...I gave birth...)"
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
					"\\n<\\v[104]>You did very well for your first time giving birth."
				]
			},
			{
				"code": 115,
				"indent": 2,
				"parameters": []
			},
			{
				"code": 0,
				"indent": 2,
				"parameters": []
			},
			{
				"code": 412,
				"indent": 1,
				"parameters": []
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
					"\\n<\\v[104]>Congratulations! You did it!"
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
					"\\n<\\n[1]>I did it!... I gave birth. I gave birth to a baby."
				]
			},
			{
				"code": 115,
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
				"code": 111,
				"indent": 0,
				"parameters": [
					1,
					56,
					0,
					1,
					1
				]
			},
			{
				"code": 122,
				"indent": 1,
				"parameters": [
					23,
					23,
					0,
					1,
					56
				]
			},
			{
				"code": 122,
				"indent": 1,
				"parameters": [
					23,
					23,
					1,
					0,
					1
				]
			},
			{
				"code": 230,
				"indent": 1,
				"parameters": [
					10
				]
			},
			{
				"code": 201,
				"indent": 1,
				"parameters": [
					0,
					4,
					29,
					6,
					2,
					0
				]
			},
			{
				"code": 223,
				"indent": 1,
				"parameters": [
					[
						0,
						0,
						0,
						0
					],
					1,
					true
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
					381,
					381,
					0,
					4,
					"`出産`"
				]
			},
			{
				"code": 111,
				"indent": 1,
				"parameters": [
					0,
					449,
					1
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
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"\\n<\\n[1]>\\.\\.Ugh! \\.\\.Ugghh! \\.\\.Aaaiiieee!! It hurts!!!"
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
					"\\n<\\n[1]>Hoooooo!\\.\\....hoooo!\\.\\....hooo!"
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
					"\\n<\\n[1]>Please, help me! The contractions\\.\\....they're getting \nstronger!!"
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
					"\\n<\\v[104]>Ok \\n[1] let's check to see how far you're dilated..."
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
					"\\n<\\v[104]>Hmmm\\..\\..\\..\\..\\..\\.\\.\\.your \\c[3]cervix\\c[0] is only 5cm...You've got a \nways to go before you can start pushing..."
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
					"\\n<\\n[1]>\\.\\.Ugh..ugh...\\.\\.I'm having...\\.\\.another...\\.\\.contraction!!!"
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
					"\\n<\\n[1]>\\.\\.Nnnnnnnngggggggghhhhhh!!!"
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
					"\\n<\\n[1]>Gaaaaaaahhh!\\.\\. Gaaaaahh!\\.\\. Gaaah!"
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
					"\\n<\\n[1]>Please \\v[104]! I don't want to give birth!! I can't \ndo this!!!"
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
					"\\n<\\v[104]>Remember...it is your duty as a fertile woman to \nhelp increase the population..."
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
					"\\n<\\v[104]>You will be expected to give birth many times...but \nright now it's important that you breathe..."
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
					"\\n<\\n[1]>Yes \\v[104], ...I will do my best to have many children..."
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
					"\\n<\\n[1]>Ugh!\\.\\. Ugghh!!\\.\\. Ugggghhhh!!! Here comes another one!!!"
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
					"\\n<\\n[1]>\\.\\.Nnnnggghhh!!! \\.\\.Nnnnnnnnggggggghhhhhhh!!!"
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
					"\\n<\\v[104]>Fight the urge to push \\n[1]! You're not yet fully \ndilated!"
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
					"\\n<\\v[104]>Focus on your breathing!"
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
					"\\n<\\n[1]>Yes, \\v[104]! I'm trying!! I'm trying not to push! \nNnnnnggggghhhh!!"
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
					"\\n<\\n[1]>Haaaaaaahhh!\\.\\. Haaaaahh!\\.\\. Haaah!"
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
					"\\n<\\v[104]>That's it! Breathe!!"
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
					"\\n<\\v[104]>Ok, let's see if you're anymore dilated since the last \nfew contractions..."
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
					"\\n<\\v[104]>Your \\c[3]cervix\\c[0] is 7cm \\n[1]...just 3 more cm and you can \nstart pushing..."
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
					"\\n<\\n[1]>\\.\\.Gyyyaahhhhh!!! Please \\v[104], I can't take it!!"
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
					"\\n<\\v[104]>Yes you can \\n[1]! You can do it!"
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
					"\\n<\\v[104]>When you feel a contraction coming on...take a deep \nbreath and exhale..."
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
					"\\n<\\v[104]>Your body needs time to adjust..."
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
					"\\n<\\n[1]>\\.\\. Yes, \\v[104]...\\.\\. Haaaaahh!\\.\\. Haaah!"
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
					"\\n<\\n[1]>\\.\\.Not again!!!!!"
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
					"\\n<\\n[1]>\\.\\.Hhhngghh!\\.\\. Hhhnnnggghhh!!\\.\\. Hhhhhnnnngggghhhh!!!"
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
					"\\n<\\n[1]>\\.\\.Haaah... \\.\\.haaaah... \\.\\.hooooo..."
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
					"\\n<\\v[104]>Good! That's it!!!"
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
					"\\n<\\n[1]>\\.\\.Hooooo... \\.\\.hooooo... \\.\\.hooooo..."
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
					"\\n<\\n[1]>\\.\\.Nnngghh...\\.\\.Not...ready...\\.\\.for...another...one...\\.\\.\nso.....soon!!"
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
					"\\n<\\n[1]>\\.\\.Hhhnngghh!!\\.\\. Hhhnnnggghhh!!\\.\\. Hhhhhnnnggggghhhhh!!"
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
					"\\n<\\v[104]>Breathe!!!"
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
					"\\n<\\n[1]>\\.\\.Gaaaaaaahh! \\.\\.Gaaaaah! \\.\\. Gaah!"
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
					"\\n<\\v[104]>Ok \\n[1], you've been in labor for awhile...\nand that last contraction looked like the strongest \none yet..."
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
					"\\n<\\v[104]>Let's see if you're dilated enough to start pushing..."
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
					"\\n<\\n[1]>\\.\\.Hooooo... \\.\\.hooooo... \\.\\..hooooo..."
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
					"\\n<\\n[1]>Please \\v[104], hurry! I can feel another contraction \nbuilding!"
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
					"\\n<\\n[1]>\\.\\.Ugh.. \\.\\.ugh...\\.\\.I feel like I need to push!! \\.\\.I feel like \nI need to push!! \\.\\.Please let me push!"
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
					"\\n<\\v[104]>Let's see\\..\\..\\..\\..\\...\\.\\.\\. yes!...your \\c[3]cervix\\c[0] is at 10cm!!"
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
					"\\n<\\v[104]>Ok, \\n[1] push!!!!!"
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
					"\\n<\\n[1]>\\.\\.Hhhhhhhhhhnnnnnnngggggggghhhhhh!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>Good \\n[1]! I need long, hard pushes just like that!"
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
					"\\n<\\n[1]>Aaaiiieee!!...\\.\\. hooo...\\.\\. hooo...I can't do this!\\.\\. It hurts! \n\\.\\.Get it out! \\.Get it out!!!!"
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
					"\\n<\\v[104]>I know it hurts, but only you can push this baby out!"
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
					"\\n<\\v[104]>Your body was built for it. Just push through the \npain!"
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
					"\\n<\\n[1]>Haaaaaaahhh!\\.\\. Haaaaahh!\\.\\. Haaah!"
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
					"\\n<\\n[1]>\\.\\.Ugh!\\.\\. Ugghh!!\\.\\. Here\\.\\....it...comes\\.\\....again!!!"
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
					"\\n<\\n[1]>\\.\\.Hhhhhhhnnnnnngggggggggghhhhhh!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>That's it bear down and push...push hard!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"(\\n[1]'s vagina begins to bulge visibly, forming a \nteardrop shape before collapsing...)"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\n[1]>Gyyyyaaaaahhhhhhh!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\v[104]>You're doing it \\n[1]! The head is right there! \nI saw it!"
				]
			},	
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					1,
					1,
					0,
					0,
					2
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
					"\\n<\\n[1]>\\.\\.Aaaaiiieee! \\.\\.Aaaiiee! \\.\\.Why did it go back in??!! \n\\.\\.I want it out!! \\.\\.I want it out!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\v[104]>Stay calm, more of the head will come with each \ncontraction...I promise!"
				]
			},	
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\n[1]>Hooooo...\\.\\. hooooo...\\.\\. hooooo..."
				]
			},
		{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\v[104]>Now get ready for the next one!"
				]
			},	
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>\\.\\.Hooooo!! \\.\\.hoooo!! \\.\\.hoooo!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>\\.\\. Ok\\.\\....\\.\\.ok....\\.\\.aargghh...\\.\\.aargghh...\\.\\.it's coming \\.\\.agaaiiinnnn!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
					"\\n<\\v[104]>On three \\n[1]!!...\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!!!"
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
					"\\n<\\n[1]>\\.\\. Hhhhhhhhhhnnnnnnnnggggghhhhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"(Once again a teardrop opening forms around the baby's \nhead...this time holding its shape...)"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
					"\\n<\\n[1]>\\.\\.Nyyyyyyyyaaaaahhhhhhh!!!"
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
					"\\n<\\v[104]>Good job \\n[1]! I can still see the head! That's the \nmost progress yet!"
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
					"\\n<\\n[1]>\\.\\.It hurts!! \\.\\.It hurts!!"
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
					"\\n<\\v[104]>I know it hurts but you doing good! Try to rest \nbefore the next contraction, ok?!"
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
					"\\n<\\n[1]>\\.\\.Ok...\\.\\. haaaaahh...\\.\\. haaaaahh...\\.\\. haaaaahh..."
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
					"\\n<\\v[104]>Now listen carefully \\n[1], with the next few \ncontractions you're going to crown."
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
					"\\n<\\v[104]>This is the hardest part so don't forget to breathe!"
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
					"\\n<\\v[104]>Ready \\n[1]!!...\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!!!"
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
					"\\n<\\n[1]>\\.\\.Hhnngghh!!... \\.\\.Hhhnnnggghhh!!!... \\.\\.Hhhhhhnnnnnnggggghhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"\\n<\\v[104]>(The head briefly crowns before collapsing back into the \nteardrop shape from before...)"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
					"\\n<\\n[1]>Gyyyyyaaaaaaahhhhhhhhhh!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\v[104]>You almost had it!! A few more good, hard pushes and \nit will be over!"
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
					"\\n<\\n[1]>\\.\\.Gaaaaaaahh! \\.\\.Gaaaaah! \\.\\.Gaah!"
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
					"\\n<\\n[1]>I can't do it!! \\.\\.I can't do it!! \\.\\. haaaaaaahh...\n\\.\\.haaahh...\\.\\.haahh..."
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
					"\\n<\\v[104]>Yes you can \\n[1]!! Now I need you to push extra hard \nwith the next contraction, ok??!!"
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
					"\\n<\\v[104]>Do as I say and your baby will really crown this time..."
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
					"\\n<\\n[1]>Yes, \\v[104]... \\.\\.haaahh... \\.\\.haahh... \\.\\.haahh..."
				]
			},
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					1,
					1,
					0,
					0,
					2
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
					"\\n<\\v[104]>Ready??!!...\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!"
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
					"\\n<\\n[1]>\\.\\.Hhnngghh!!... \\.\\.Hhhnnnggghhh!!!... \\.\\.Hhhhhhnnnnnnggggghhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"(The head forcefully crowns, its girth stretching \n\\n[1]'s vagina the furthest yet...)"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"\\n<\\n[1]>\\.\\.Aaaiiieee!... \\.\\.Aaaaiiiieeee!!... \\.\\.Aaaaaiiiiieeeee!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"(\\n[1] quickly begins to feel the 'ring of fire' \nacross her labia...)"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"\\n<\\v[104]>The head is almost out \\n[1]!! It's almost out!! \nNow breathe!!"
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
					"\\n<\\n[1]>\\.\\.Aaaaaiiiiieeeee!!! \\.\\.It burns!! \\.\\.It' burns!! \n\\.\\.Get it out!! \\.\\.Get it out!!"
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
					"\\n<\\v[104]>I know it does \\n[1]!! Try to relax!! You need \nto give yourself a chance to stretch...!!"
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
					"\\n<\\v[104]>I promise you it's almost over!!"
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
					"\\n<\\n[1]>\\.\\.Haaaaaaaaaahh...\\.\\.haaaaaaahh...\\.\\.haaaahh..."
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
					"\\n<\\n[1]>\\.\\.Hooooooo...\\.\\.hooooo...\\.\\.hoooo..."
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
					"\\n<\\v[104]>That's it.....\\.\\.slow... \\.\\.deep... \\.\\.breaths..."
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
					"\\n<\\v[104]>Ok \\n[1], now that the head is out...it \nshould get easier from here on out..."
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
					"\\n<\\n[1]>\\.\\. Unnggh...I can feel it!! \\.\\.I need to push!!... \\.\\.I need to push!!..."
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
					"\\n<\\v[104]>Give me another big push \\n[1]!!...\n\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!!!"
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
					"\\n<\\n[1]>\\.\\.Hhhhhhhnnnnnngggggggggghhhhhh!!! \nI'm pussshhhhinnggg!!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>That's it \\n[1]!! Push!!! Push hard!!"
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
					"\\n<\\n[1]>\\.\\.Hhnngghh!!... \\.\\.Hhhnnnggghhh!!!... \\.\\.Hhhhhhnnnnnnggggghhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
					"\\n<\\v[104]>(Unexpectedly, the shoulders become stuck leaving the \nhead wedged in \\n[1]'s stretched opening...)"
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
					"\\n<\\n[1]>\\.Aaaaaiiiiieeeee!!! \\.\\.Please \\v[104]!! Do something!! \nIt won't come!!"
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
					"\\n<\\v[104]>Looks like the shoulders are stuck..."
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
					"\\n<\\n[1]>I can't!! I can't do it!! I can't!!"
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
					"\\n<\\v[104]>Rest for a moment \\n[1]! Then with the next \ncontraction, I need you to bear down and push harder \nthan ever, ok??!!"
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
					"\\n<\\n[1]>I've been pushing as hard as I can!!!!"
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
					"\\n<\\n[1]>\\.\\.So... \\.\\.tired.... \\.\\.I can't do it!!"
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
					"\\n<\\v[104]>\\n[1]! Listen to me! I know you're tired...but you \nhave to push to your baby out!!"
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
					"\\n<\\v[104]>On the count of three...\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!!!"
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
					"\\n<\\n[1]>\\.\\.Nnngghh!!... \\.\\.Nnnnggghhh!!!... \\.\\.Gyyyyaaaaaaaaaahhhhh!!!!!"
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
					"\\n<\\v[104]>The shoulders are coming \\n[1]!! They're coming!! Push!!!"
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
					"\\n<\\n[1]>\\.\\.Aaaaaaaaaiiiiiiiiiiieeeeeeeeee!!!!!"
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
					"\\n<\\v[104]>Just a little more!! Keep pushing!!!!"
				]
			},
						{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\v[104]>You did it \\n[1]!! You did it!!"
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
					71,
					71,
					0,
					0,
					3
				]
			},			
			{
				"code": 250,
				"indent": 2,
				"parameters": [
					{
						"name": "_bochan",
						"volume": 100,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 355,
				"indent": 2,
				"parameters": [
					"this.waitSe(1.3)"
				]
			},
			{
				"code": 250,
				"indent": 2,
				"parameters": [
					{
						"name": "_baby_cry",
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
					20,
					20,
					0,
					0,
					1
				]
			},
			{
				"code": 230,
				"indent": 2,
				"parameters": [
					45
				]
			},
			{
				"code": 111,
				"indent": 2,
				"parameters": [
					12,
					"hasMultiBaby()"
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"As soon as the first baby was born, the next one \nbegan filling my birth canal again."
				]
			},
			{
				"code": 117,
				"indent": 3,
				"parameters": [
					242
				]
			},
			{
				"code": 117,
				"indent": 3,
				"parameters": [
					243
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
				"code": 230,
				"indent": 2,
				"parameters": [
					55
				]
			},
			{
				"code": 250,
				"indent": 2,
				"parameters": [
					{
						"name": "_baby_cry",
						"volume": 90,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 115,
				"indent": 2,
				"parameters": []
			},
			{
				"code": 0,
				"indent": 2,
				"parameters": []
			},
			{
				"code": 412,
				"indent": 1,
				"parameters": []
			},
			{
				"code": 111,
				"indent": 1,
				"parameters": [
					0,
					449,
					0
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
					4
				]
			},
			{
				"code": 101,
				"indent": 2,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"I arrived at the hospital, but had to wait since my \ncervix wasn't fully dilated."
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
					7
				]
			},
			{
				"code": 101,
				"indent": 2,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"My contractions were getting stronger and closer \ntogether."
				]
			},
			{
				"code": 101,
				"indent": 2,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"And my moans were getting louder by the minute..."
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
					11
				]
			},
			{
				"code": 101,
				"indent": 2,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"Since I've given birth \\v[56] times, I thought my body \nwould be used to labor..."
				]
			},
			{
				"code": 101,
				"indent": 2,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"But it hasn't...in fact the labor pains are just \nas strong as the first time I gave birth..."
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
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"They checked my cervix again and it was finally dilated \nenough for me to go to the delivery room."
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
				"code": 117,
				"indent": 2,
				"parameters": [
					96
				]
			},
			{
				"code": 101,
				"indent": 2,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"Once again I found myself, on the delivery table, \nmy legs in stirrups getting ready to start pushing..."
				]
			},
			{
				"code": 101,
				"indent": 2,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 2,
				"parameters": [
					"My huge belly blocked my view as I felt another \ncontraction begin to surge..."
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
					"\\n<\\n[1]>\\.\\.Hhhhhhnnnnnnghhhhh!!!!!"
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
					"\\n<\\n[1]>I can't do it this again! It hurts too bad!"
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
					"\\n<\\v[104]>\\n[1], you are lucky to be so fertile...most women \ncan't have children..."
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
					"\\n<\\v[104]>The country needs women like you to give birth as many \ntimes as you can..."
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
					"\\n<\\v[104]>For now just focus on breathing and you'll be fine..."
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
					"\\n<\\n[1]>\\.\\.Hoooooo!\\.\\.....hoooo!\\.\\.....hooo!"
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
					"\\n<\\n[1]>Yes, \\v[104]..."
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
					"\\n<\\n[1]>\\.\\.Unnghhh...\\.\\.I'm having...\\.\\.another...\\.\\.contraction!!!"
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
					"\\n<\\n[1]>\\.\\.Oh, god!!! \\.\\.Hhhhhnnnnnnnnnggggggggghhhh!!"
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
					"\\n<\\v[104]>That's it \\n[1]! Use the contractions to open up your \nbottom."
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
					"\\n<\\v[104]>Then imagine yourself pushing your baby out..."
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
					"\\n<\\n[1]>\\.\\.Haaah...\\.\\.haaaah...\\.\\.haaah..."
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
					"\\n<\\n[1]>Yes, \\v[104]..."
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
					"\\n<\\v[104]>Good girl! A few more like those and your baby will be \nhere before you know it!"
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
					"\\n<\\n[1]>\\.\\.Unnghh!\\.\\. Unnghh!!\\.\\. They're\\.\\....right on top...\\.\\.of each other!!!"
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
					"\\n<\\n[1]>\\.\\.Nnngghh!!...\\.\\.Nnnnggghhh!!!...\\.\\.Nnnnnnnnnnnnnggggghhh!!!!!"
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>That's it \\n[1] bear down and push!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"(\\n[1]'s vagina begins to bulge visibly, forming a \nteardrop shape before collapsing...)"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\n[1]>Nyyyyaaaaahhhhhhh!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\v[104]>Well done \\n[1]! With that last contraction, we saw \na tiny bit of the head!"
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
					"\\n<\\v[104]>Now get ready for the next one!"
				]
			},	
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>\\.\\.Hooooo!...\\.\\.hoooo!...\\.\\.hoooo!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>\\.\\.Yes, \\v[104]\\.\\....\\.\\.aaiiee!!....\\.\\.aaiiieee!!...\\.\\.aaaiiieee!!...\n\\.\\.oh god!!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
					"\\n<\\v[104]>On three \\n[1]!!...\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!!!"
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
					"\\n<\\n[1]>\\.\\. Hhhhhhhhhhnnnnnnnnggggghhhhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"(Once again a teardrop opening forms around the baby's \nhead...this time holding its shape...)"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
					"\\n<\\n[1]>\\.\\.Aaaaaaaiiiiiiieeeeee!!!"
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
					"\\n<\\v[104]>Good job \\n[1]! I can still see the head! Now breathe \nand rest for a minute..."
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
					"\\n<\\n[1]>\\.\\.Ok...\\.\\.haaaaahh...\\.\\.haaaaahh...\\.\\.haaaaahh..."
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
					"\\n<\\v[104]>Ok \\n[1], with the next contraction you're going to \ncrown."
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
					"\\n<\\v[104]>You need you to push through the burn, ok??!!"
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
					"\\n<\\v[104]>You've done this \\v[56] times before so you know it's the \nhardest part!"
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
					"\\n<\\v[104]>Ready...\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!!!"
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
					"\\n<\\n[1]>\\.\\.Hhhhhhhnnnnnnnnggggggghhhhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"\\n<\\v[104]>(The head briefly crowns before collapsing back into \nthe teardrop shape from before...)"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
					"\\n<\\n[1]>Gyyyyyaaaaaaahhhhhhhhhh!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
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
					2
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
					"\\n<\\v[104]>You almost had it!! Push as soon as you feel the next \ncontraction coming!!"
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
					"\\n<\\n[1]>\\.\\.Gaaaaaaahh!...\\.\\.Gaaaaah!...\\.\\.Gaah!...yes, \\v[104]..."
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
					"\\n<\\n[1]>Oh god!!\\.\\. Here comes the next one!!"
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
					"\\n<\\n[1]>\\.\\.Hhhhhhhhhnnnnnnnngggggggghhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"(The head forcefully crowns, its girth stretching \n\\n[1]'s vagina the furthest yet...)"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"\\n<\\n[1]>\\.\\.Aaaaaaaaiiiiiiieeeeeeee!!!"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"(\\n[1] quickly begins to feel the 'ring of fire' \nacross her labia...)"
				]
			},
			{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
					0,
					0,
					2
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
					"\\n<\\v[104]>The head is out \\n[1]!! Now slow your breathing!!"
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
					"\\n<\\n[1]>\\.\\.Aaaaaiiiiieeeee!!! \\.\\.It burns!! \\.\\.It' burns!!"
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
					"\\n<\\v[104]>I know it does \\n[1]!! Relax and give yourself a \nchance to stretch...!!"
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
					"\\n<\\v[104]>One more big push and it's almost over!!"
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
					"\\n<\\n[1]>\\.\\.Oh god...unnnghh!! \\.\\.Oh god...It's coming!!"
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
					"\\n<\\v[104]>On three \\n[1]!!...\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!!!"
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
					"\\n<\\n[1]>\\.\\.Hhhhhhhnnnnnngggggggggghhhhhh!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>That's it \\n[1]!! Push!!! Push hard!!"
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
					"\\n<\\n[1]>\\.\\.Hhhhhhhhhhnnnnnnnnnnggggggggghhhhhh!!!!!"
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
					"\\n<\\v[104]>It's coming \\n[1]!! It's coming! Push!!!"
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
					"\\n<\\n[1]>\\.\\.Aaaaaaaaaiiiiiiiiiiieeeeeeeeee!!!!!"
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
					"\\n<\\v[104]>Just a little more!! Keep pushing!!!!"
				]
			},
						{
				"code": 122,
				"indent": 2,
				"parameters": [
					71,
					71,
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
					"\\n<\\v[104]>You did it \\n[1]!! You did it!!"
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
					71,
					71,
					0,
					0,
					3
				]
			},	
			{
				"code": 250,
				"indent": 2,
				"parameters": [
					{
						"name": "_bochan",
						"volume": 100,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 355,
				"indent": 2,
				"parameters": [
					"this.waitSe(1.6)"
				]
			},
			{
				"code": 250,
				"indent": 2,
				"parameters": [
					{
						"name": "_baby_cry",
						"volume": 90,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 230,
				"indent": 2,
				"parameters": [
					55
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
				"code": 230,
				"indent": 2,
				"parameters": [
					45
				]
			},
			{
				"code": 111,
				"indent": 2,
				"parameters": [
					12,
					"hasMultiBaby()"
				]
			},
			{
				"code": 355,
				"indent": 3,
				"parameters": [
					"namingMultiBaby()"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>\\.\\.Haaaaaah...\\.\\.haaaah...\\.\\.haah...."
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"As I looked down at my belly, it was still quite big \nand round..."
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"Then the familar feeling of intense \npressure building inside me returned..."
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					1,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"...and next head began filling my birth canal..."
				]
			},
			{
				"code": 251,
				"indent": 3,
				"parameters": []
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>It's not over yet \\n[1]!! Remember you're technically \nstill pregnant until you push the last one out..."
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>Unnnghh!! Can't...\\.\\.push...\\.\\.anymore...!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>If you don't have to push right this second, try to \nrest while you can."
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>Ughhh! I feel another contraction coming on, right now!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>Oh my \\n[1], it looks the next baby isn't going to \nwait!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>\\.\\.Ready?!! \\.\\.Push!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>\\.\\.Hhnngghh!!... \\.\\.Hhhnnnggghhh!!!... \\.\\.Hhhhhhnnnnnnggggghhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					443,
					443,
					0,
					0,
					1
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},			
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>There's the first sign of the next baby's head \\n[1]!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>Ok, now calm down and slow your breathing..."
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>With your birth canal already opened up, it should be \neasier this time."
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>No! It's not easy at all! Ughh...here comes another one!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>\\.\\.Nnngghh!!... \\.\\.Nnnnggghhh!!!... \\.\\.Gyyyyaaaaaaaaaahhhhh!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					443,
					443,
					0,
					0,
					2
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>You're starting to crown again!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					1,
					1,
					0,
					0,
					2
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>\\.\\.Hooooooo...\\.\\.hooooo...\\.\\.hoooo..."
				]
			},
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					1,
					1,
					0,
					0,
					2
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>Pant \\n[1]! I know this one burns too..."
				]
			},	
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					1,
					1,
					0,
					0,
					2
				]
			},
			{
				"code": 101,
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>Aaaaaiiieee!!! \\.\\.It hurts!!...\\.\\.It hurts!!..."
				]
			},
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\v[104]>Ignore the pain and get ready for one final push!!...\n\\.\\.one...\\.\\.two...\\.\\.three...\\.\\.push!!!!!"
				]
			},	
			{
				"code": 122,
				"indent": 3,
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
				"indent": 3,
				"parameters": [
					"",
					0,
					0,
					2
				]
			},
			{
				"code": 401,
				"indent": 3,
				"parameters": [
					"\\n<\\n[1]>\\.\\.Hnnngggghh!!!! \\.\\.Aaaieee!! I'm puuuusssshhhhhinggg!!!!!"
				]
			},
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					443,
					443,
					0,
					0,
					3
				]
			},
			{
				"code": 122,
				"indent": 3,
				"parameters": [
					1,
					1,
					0,
					0,
					2
				]
			},
			{
				"code": 250,
				"indent": 3,
				"parameters": [
					{
						"name": "_bochan",
						"volume": 100,
						"pitch": 100,
						"pan": 0
					}
				]
			},
			{
				"code": 355,
				"indent": 3,
				"parameters": [
					"this.waitSe(1.6)"
				]
			},
			{
				"code": 117,
				"indent": 3,
				"parameters": [
					243
				]
			},
			{
				"code": 250,
				"indent": 3,
				"parameters": [
					{
						"name": "_baby_cry",
						"volume": 90,
						"pitch": 100,
						"pan": 0
					}
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
					"\\n<\\v[104]>Congratulations \\n[1]!!!"
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
					"\\n<\\n[1]>\\.\\.\\.Haaaaahh...\\.\\.\\.haaahh...\\.\\.\\.haahh...\\.\\.\\. It's over..."
				]
			},
			{
				"code": 115,
				"indent": 2,
				"parameters": []
			},
			{
				"code": 0,
				"indent": 2,
				"parameters": []
			},
			{
				"code": 412,
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
				"code": 0,
				"indent": 0,
				"parameters": []
			}
		],
		"name": "206 【出産】 病院で出産",
		"switchId": 1,
		"trigger": 0
	},)
    //overrideDatabase("$dataXXX", {})
};

})();