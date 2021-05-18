define(['pipAPI' ,'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension) {var API = new APIConstructor(); return stiatExtension({
    "category": {
        "name": "Black people",
        "title": {
            "media": {
                "word": "Black people"
            },
            "css": {
                "color": "#262725",
                "font-size": "2em"
            },
            "height": 4
        },
        "css": {
            "color": "#df564e",
            "font-size": "2em"
        },
        "media": [
            {
                "word": "Tayron"
            },
            {
                "word": "Jazamin"
            },
            {
                "word": "Shanice"
            },
            {
                "word": "חטע"
            }
        ]
    },
    "attribute1": {
        "name": "Unpleasant",
        "title": {
            "media": {
                "word": "Unpleasant"
            },
            "css": {
                "color": "#e87dc6",
                "font-size": "2em"
            },
            "height": 4
        },
        "css": {
            "color": "#31b404",
            "font-size": "2em"
        },
        "media": [
            {
                "word": "Bomb"
            },
            {
                "word": "Abuse"
            },
            {
                "word": "Sadness"
            },
            {
                "word": "Pain"
            },
            {
                "word": "Poison"
            },
            {
                "word": "Grief"
            }
        ]
    },
    "attribute2": {
        "name": "Plea",
        "title": {
            "media": {
                "word": "Plea"
            },
            "css": {
                "color": "#31b404",
                "font-size": "2em"
            },
            "height": 4
        },
        "css": {
            "color": "#31b404",
            "font-size": "2em"
        },
        "media": [
            {
                "word": "Paradise"
            },
            {
                "word": "Pleasure"
            },
            {
                "word": "Cheer"
            },
            {
                "word": "Wonderful"
            },
            {
                "word": "Splendid"
            },
            {
                "word": "Love"
            }
        ]
    },
    "base_url": "",
    "trialsByBlock": [
        {
            "instHTML": "",
            "block": 1,
            "miniBlocks": 1,
            "singleAttTrials": 10,
            "sharedAttTrials": 10,
            "categoryTrials": 0
        },
        {
            "instHTML": "",
            "block": 2,
            "miniBlocks": 2,
            "singleAttTrials": 10,
            "sharedAttTrials": 7,
            "categoryTrials": 7
        },
        {
            "instHTML": "",
            "block": 3,
            "miniBlocks": 2,
            "singleAttTrials": 10,
            "sharedAttTrials": 7,
            "categoryTrials": 8
        }
    ],
    "blockOrder": "startLeft",
    "switchSideBlock": 8,
    "isQualtrics": true,
    "leftKeyText": "Press \"E\" for",
    "rightKeyText": "Press \"I\" for",
    "orKeyText": "or",
    "remindErrorText": "<p style=\"font-size:0.6em;font-family:arial sans-serif; text-align:center;\">If you make a mistake, a red <font-color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<p/>",
    "finalText": "You have completed this task<br/><br/>Press SPACE to continue.",
    "instTemplatePractice": "<div><p align=\"center\" style=\"font-size:20px; font-family:arial\"><font color=\"#000000\"><u>Part blockNum of nBlocks</u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Put a left finger on the <b>E</b> key for items that belong to the category <font color=\"#31b404\">attribute1</font>.<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color=\"#31b404\">attribute2</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><br/><p align=\"center\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "instTemplateCategoryRight": "<div><p align=\"center\" style=\"font-size:20px; font-family:arial\"><font color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Put a left finger on the <b>E</b> key for items that belong to the category <font color=\"#31b404\">attribute1</font>.<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color=\"#31b404\">attribute2</font> and for items that belong to the category <font color=\"#31b404\">thecategory</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><br/><p align=\"center\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "instTemplateCategoryLeft": "<div><p align=\"center\" style=\"font-size:20px; font-family:arial\"><font color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Put a left finger on the <b>E</b> key for items that belong to the category <font color=\"#31b404\">attribute1</font> and for items that belong to the category <font color=\"#31b404\">thecategory</font>.<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color=\"#31b404\">attribute2</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><br/><p align=\"center\">Press the <b>space bar</b> when you are ready to start.</font></p></div>"
});});