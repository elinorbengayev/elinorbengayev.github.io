define(['pipAPI' ,'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension) {var API = new APIConstructor(); return iatExtension({
    "category1": {
        "name": "Dogs",
        "title": {
            "media": {
                "word": "Dogs"
            },
            "css": {
                "color": "#e35431",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "chiwawa"
            },
            {
                "word": "haski"
            }
        ],
        "stimulusCss": {
            "color": "#d572cd",
            "font-size": "7em"
        }
    },
    "category2": {
        "name": "Cats",
        "title": {
            "media": {
                "word": "Cats"
            },
            "css": {
                "color": "#5778db",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Parsian "
            },
            {
                "word": "something else"
            }
        ],
        "stimulusCss": {
            "color": "#336600",
            "font-size": "1.8em"
        }
    },
    "attribute1": {
        "name": "Bad",
        "title": {
            "media": {
                "word": "Bad"
            },
            "css": {
                "color": "#336600",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Worst"
            },
            {
                "word": "Bad"
            },
            {
                "word": "Stupid"
            }
        ],
        "stimulusCss": {
            "color": "#336600",
            "font-size": "2.3em"
        }
    },
    "attribute2": {
        "name": "Good ",
        "title": {
            "media": {
                "word": "Good "
            },
            "css": {
                "color": "#336600",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "lovely"
            }
        ],
        "stimulusCss": {
            "color": "#336600",
            "font-size": "2.3em"
        }
    },
    "base_url": "",
    "remindError": true,
    "errorCorrection": true,
    "isTouch": true,
    "isQualtrics": true,
    "showDebriefing": true,
    "fullscreen": true,
    "blockCategories_nTrials": 40,
    "blockCategories_nMiniBlocks": 10,
    "blockAttributes_nTrials": 50,
    "blockAttributes_nMiniBlocks": 13,
    "blockFirstCombined_nTrials": 60,
    "blockFirstCombined_nMiniBlocks": 5,
    "blockSecondCombined_nTrials": 30,
    "blockSecondCombined_nMiniBlocks": 10,
    "blockSwitch_nTrials": 28,
    "blockSwitch_nMiniBlocks": 7,
    "randomBlockOrder": false,
    "randomAttSide": true,
    "textOnError": "<p align=\"center\" style=\"font-size:0.6em\"; font-family:arial\">If you make a mistake, a red <font color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<p/>",
    "leftKeyText": "Press \"E\" for ",
    "rightKeyText": "or",
    "orKeyText": "Press \"I\" for",
    "AttributesBlockInstructions": "<div><p align=\"center\" style=\"font-size:20px; font-family:arial\"><font color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Put a left finger on the <b>E</b> key for items that belong to the category <font color=\"#0000ff\">leftAttribute.</font><br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color=\"#0000ff\">rightAttribute</font>.<br/><br/>If you make a mistake, a red <font color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p align=\"center\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "CategoriesBlockInstructions": "<div><p align=\"center\" style=\"font-size:20px; font-family:arial\"><font color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Put a left finger on the <b>E</b> key for items that belong to the category <font color=\"#336600\">leftCategory</font>. <br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color=\"#336600\">rightCategory</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p align=\"center\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "FirstCombinedBlockInstructions": "<div><p align=\"center\" style=\"font-size:20px; font-family:arial\"><font color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Use the <b>E</b> key for <font color=\"#336600\">leftCategory</font> and for <font color=\"#0000ff\">leftAttribute</font>.<br/>Use the <b>I</b> key for <font color=\"#336600\">rightCategory</font> and for  <font color=\"#0000ff\">rightAttribute</font>.<br/>Each item belongs to only one category.<br/><br/>If you make a mistake, a red <font color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p align=\"center\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "SecondCombinedBlockInstructions": "<div><p align=\"center\" style=\"font-size:20px; font-family:arial\"><font color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">This is the same as the previous part.<br/>Use the <b>E</b> key for <font color=\"#336600\">leftCategory</font> and for <font color=\"#0000ff\">leftAttribute</font>.<br/>Use the <b>I</b> key for <font color=\"#336600\">rightCategory</font> and for  <font color=\"#0000ff\">rightAttribute</font>.<br/>Each item belongs to only one category.<br/><br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p align=\"center\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "SwitchedCategoriesInstructions": "<div><p align=\"center\" style=\"font-size:20px; font-family:arial\"><font color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\"><b>Watch out, the labels have changed position!</b><br/>Put the left finger on the <b>E</b> key for <font color=\"#336600\">leftCategory</font>.<br/>Put the right finger on the <b>I</b> key for <font color=\"#336600\">rightCategory</font>.<br/><br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p align=\"center\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "PreDebriefingText": "Press space to continue to your feedback "
})});
