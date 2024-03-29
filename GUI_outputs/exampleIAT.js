define(['pipAPI' ,'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension) {var API = new APIConstructor(); return iatExtension({
    "category1": {
        "name": "Black people!",
        "title": {
            "media": {
                "word": "Black people"
            },
            "css": {
                "color": "#336600",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Tayron"
            },
            {
                "word": "Malik"
            },
            {
                "word": "Terrell"
            },
            {
                "word": "Jazamin"
            },
            {
                "word": "Tiara"
            },
            {
                "word": "Shanice"
            }
        ],
        "stimulusCss": {
            "color": "#336600",
            "font-size": "1.8em"
        }
    },
    "category2": {
        "name": "White people!",
        "title": {
            "media": {
                "word": "White people"
            },
            "css": {
                "color": "#336600",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Jake"
            },
            {
                "word": "Conor"
            },
            {
                "word": "Bradley"
            },
            {
                "word": "Allison"
            },
            {
                "word": "Emma"
            },
            {
                "word": "Emily"
            }
        ],
        "stimulusCss": {
            "color": "#336600",
            "font-size": "1.8em"
        }
    },
    "attribute1": {
        "name": "Bad Words",
        "title": {
            "media": {
                "word": "Bad Words"
            },
            "css": {
                "color": "#0000FF",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Awful"
            },
            {
                "word": "Failure"
            },
            {
                "word": "Agony"
            },
            {
                "word": "Hurt"
            },
            {
                "word": "Horrible"
            },
            {
                "word": "Terrible"
            },
            {
                "word": "Nasty"
            },
            {
                "word": "Evil"
            }
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2.3em"
        }
    },
    "attribute2": {
        "name": "Good Words",
        "title": {
            "media": {
                "word": "Good Words"
            },
            "css": {
                "color": "#0000FF",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Laughter"
            },
            {
                "word": "Happy"
            },
            {
                "word": "Glorious"
            },
            {
                "word": "Joy"
            },
            {
                "word": "Wonderful"
            },
            {
                "word": "Peace"
            },
            {
                "word": "Pleasure"
            },
            {
                "word": "Love"
            }
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2.3em"
        }
    },
    "base_url": "",
    "remindError": true,
    "errorCorrection": true,
    "isTouch": false,
    "isQualtrics": true,
    "showDebriefing": true,
    "fullscreen": false,
    "leftKey": "E",
    "rightKey": "I",
    blockAttributes_nTrials : 20,
    blockAttributes_nMiniBlocks : 5,
    blockCategories_nTrials : 20,
    blockCategories_nMiniBlocks : 5,
    blockFirstCombined_nTrials : 20,
    blockFirstCombined_nMiniBlocks : 5,
    blockSecondCombined_nTrials : 0, //Change to 0 if you want 5 blocks (you would probably want to increase blockFirstCombined_nTrials).
    blockSecondCombined_nMiniBlocks : 10,
    blockSwitch_nTrials : 28,
    blockSwitch_nMiniBlocks : 7,
    "randomBlockOrder": true,
    "randomAttSide": false,
    "remindErrorText": "<p style=\"font-size:0.6em;font-family:arial serif;text-align:center;\">If you make a mistake, a red <font-color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<p/>",
    "leftKeyText": "Press \"E\" for ",
    "rightKeyText": "Press \"I\" for",
    "orText": "or",
    "instAttributePractice": "<div><p  style=\"font-size:20px;font-family:arial serif;text-align:center;\"><font-color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Put a left finger on the <b>E</b> key for items that belong to the category <font-color=\"#0000ff\">leftAttribute.</font><br/>Put a right finger on the <b>I</b> key for items that belong to the category <font-color=\"#0000ff\">rightAttribute</font>.<br/><br/>If you make a mistake, a red <font-color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p style=\"text-align:center;\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "instCategoriesPractice": "<div><p style=\"font-size:20px; font-family:arial serif;text-align:center;\"><font-color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Put a left finger on the <b>E</b> key for items that belong to the category <font-color=\"#336600\">leftCategory</font>. <br/>Put a right finger on the <b>I</b> key for items that belong to the category <font-color=\"#336600\">rightCategory</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font-color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p style=\"text-align:center;\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "instFirstCombined": "<div><p style=\"font-size:20px; font-family:arial serif;text-align:center;\"><font-color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Use the <b>E</b> key for <font-color=\"#336600\">leftCategory</font> and for <font-color=\"#0000ff\">leftAttribute</font>.<br/>Use the <b>I</b> key for <font-color=\"#336600\">rightCategory</font> and for  <font-color=\"#0000ff\">rightAttribute</font>.<br/>Each item belongs to only one category.<br/><br/>If you make a mistake, a red <font-color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p style=\"text-align:center;\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "instSecondCombined": "<div><p style=\"font-size:20px; font-family:arial serif;text-align:center;\"><font-color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">This is the same as the previous part.<br/>Use the <b>E</b> key for <font-color=\"#336600\">leftCategory</font> and for <font-color=\"#0000ff\">leftAttribute</font>.<br/>Use the <b>I</b> key for <font-color=\"#336600\">rightCategory</font> and for  <font-color=\"#0000ff\">rightAttribute</font>.<br/>Each item belongs to only one category.<br/><br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p style=\"text-align:center;\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "instSwitchCategories": "<div><p style=\"font-size:20px; font-family:arial serif;text-align:center;\"><font-color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\"><b>Watch out, the labels have changed position!</b><br/>Put the left finger on the <b>E</b> key for <font-color=\"#336600\">leftCategory</font>.<br/>Put the right finger on the <b>I</b> key for <font-color=\"#336600\">rightCategory</font>.<br/><br/><u>Go as fast as you can</u> while being accurate.<br/><br/></p><p style=\"text-align:center;\">Press the <b>space bar</b> when you are ready to start.</font></p></div>",
    "preDebriefingText": "Press space to continue to your feedback "
});});
