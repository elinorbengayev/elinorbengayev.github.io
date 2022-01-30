define(['pipAPI' ,'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/ep/qualtrics/quep5.js'], function(APIConstructor, epExtension) {var API = new APIConstructor(); return epExtension({
    "prime1": {
        "name": "prime1ddd",
        "mediaArray": [
            {
                "word": "prime1Stim1"
            },
            {
                "word": "prime1Stim2"
            },
            {
                "word": "dddd"
            }
        ]
    },
    "prime2": {
        "name": "prime2ddd",
        "mediaArray": [
            {
                "word": "prime2Stim2"
            },
            {
                "word": "prime2Stim2"
            },
            {
                "word": "d"
            }
        ]
    },
    "primeStimulusCSS": {
        "color": "#0000FF",
        "font-size": "2.3em"
    },
    "primeDuration": 200,
    "targetCats": {
        "rightAttTargets": {
            "name": "Pleasantd",
            "title": {
                "media": {
                    "word": "Pleasantd"
                },
                "css": {
                    "color": "#0000FF",
                    "font-size": "3em"
                }
            },
            "mediaArray": [
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
                    "word": "Friend"
                },
                {
                    "word": "Splendid"
                },
                {
                    "word": "Love"
                },
                {
                    "word": "Glee"
                },
                {
                    "word": "Smile"
                },
                {
                    "word": "Enjoy"
                },
                {
                    "word": "Delight"
                },
                {
                    "word": "Beautiful"
                },
                {
                    "word": "Attractive"
                },
                {
                    "word": "Likeable"
                },
                {
                    "word": "Wonderful"
                },
                {
                    "word": "d"
                }
            ],
            "stimulusCSS": {
                "color": "#0000FF",
                "font-size": "2em"
            }
        },
        "leftAttTargets": {
            "name": "Unpleasant",
            "title": {
                "media": {
                    "word": "Unpleasant"
                },
                "css": {
                    "color": "#0000FF",
                    "font-size": "3em"
                }
            },
            "mediaArray": [
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
                },
                {
                    "word": "Ugly"
                },
                {
                    "word": "Dirty"
                },
                {
                    "word": "Stink"
                },
                {
                    "word": "Noxious"
                },
                {
                    "word": "Humiliate"
                },
                {
                    "word": "Annoying"
                },
                {
                    "word": "Disgusting"
                },
                {
                    "word": "Offensive"
                }
            ],
            "stimulusCSS": {
                "color": "#0000FF",
                "font-size": "2em"
            }
        }
    },
    "isQualtrics": true,
    "separateStimulusSelection": true,
    "fixationDuration": 0,
    "deadlineDuration": 4,
    "deadlineMsgDuration": 750,
    "fixationStimulus": {
        "css": {
            "color": "#000000",
            "font-size": "5em"
        },
        "media": {
            "word": "XX"
        }
    },
    "deadlineStimulus": {
        "css": {
            "color": "#FF0000",
            "font-size": "2.5em"
        },
        "media": {
            "word": "!!!PLEASE RESPOND FASTER!!!XXX"
        },
        "location": {
            "bottom": 10
        }
    },
    "base_url": {
        "image": "https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/docs/images/"
    },
    "nTrialsPerPrimeTargetPair": 15,
    "nBlocks": 3,
    "firstBlock": "<div><p style=\"font-size:1.3em; text-align:left; margin-left:10px; font-family:arial\"><color=\"000000\"><br/>Put your middle or index fingers on the <b>E</b> and <b>I</b> keys of your keyboard. Pairs of items (words and images) will appear one after another. For each pair of items, ignore the first item and categorize the second item as posAttribute or negAttribute.<br/><br/>When the second item you see belongs to the category \"negAttribute\", press <b>E</b>; when the item belongs to the category \"posAttribute\", press <b>I</b>. If you make an error, an </color> <font color=\"#ff0000\"><b>X</b></font> will appear.<br/><br/>This is a timed sorting task. <b>GO AS FAST AS YOU CAN</b> while making as few mistakes as possible.</color></p><p style=\"font-size:14px; text-align:center; font-family:arial\"><color=\"000000\"><br/><br/>press SPACE to begin</p><p style=\"font-size:12px; text-align:center; font-family:arial\"><color=\"000000\">[Round 1 of nBlocks]</p></div>",
    "middleBlock": "<div><p style=\"font-size:1.3em; text-align:left; margin-left:10px; font-family:arial\"><color=\"000000\"><br/>Press SPACE to continue with the same task.<br/><br/>Ignore the first item and categorize the second item.<br/><br/>Press <b>E</b> if the second item is negAttribute.<br/>Press <b>I</b> if the second item is posAttribute.</p><br/><br/><p style=\"font-size:12px; text-align:center; font-family:arial\"><color=\"000000\">[Round blockNum of nBlocks]</p></div>",
    "lastBlock": "<div><p style=\"font-size:1.3em; text-align:left; margin-left:10px; font-family:arial\"><color=\"000000\"><br/>This task can be a little exhausting. Try to challenge yourself to respond as quickly as you can without making mistakes.<br/><br/>Press SPACE for the final round.</p><br/><br/><p style=\"font-size:12px; text-align:center; font-family:arial\"><color=\"000000\">[Round nBlocks of nBlocks]</p></div>"
});});
