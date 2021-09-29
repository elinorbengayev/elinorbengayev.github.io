define(['pipAPI' ,'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/ep/qualtrics/quep5.js'], function(APIConstructor, epExtension) {var API = new APIConstructor(); return epExtension({
    "primeStimulusCSS": {
        "color": "#ff00ae",
        "font-size": "2.3em"
    },
    "prime1": {
        "name": "prime1",
        "mediaArray": [
            {
                "word": "prime1Stim1"
            },
            {
                "word": "prime1Stim2"
            }
        ]
    },
    "prime2": {
        "name": "prime2",
        "mediaArray": [
            {
                "word": "prime2Stim2"
            },
            {
                "word": "prime2Stim2"
            }
        ]
    },
    "targetCats": {
        "rightAttTargets": {
            "name": "Pleasantttt",
            "title": {
                "media": {
                    "word": "Pleasanttttt"
                },
                "css": {
                    "color": "#0000FF",
                    "font-size": "3em"
                }
            },
            "mediaArray": [
                {
                    "word": "Glee"
                },
                {
                    "word": "Smile"
                },
                {
                    "word": "Beautiful"
                },
                {
                    "word": "Likeable"
                },
                {
                    "word": "Wonderful"
                },
                {
                    "word": "elinor"
                }
            ],
            "stimulusCSS": {
                "color": "#0000FF",
                "font-size": "2em"
            }
        },
        "leftAttTargets": {
            "name": "Unpleasantt",
            "title": {
                "media": {
                    "word": "Unpleasantt"
                },
                "css": {
                    "color": "#0000FF",
                    "font-size": "3em"
                }
            },
            "mediaArray": [
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
    "base_url": "",
    "separateStimulusSelection": false,
    "primeDuration": 205,
    "fixationDuration": 200,
    "deadlineDuration": 200,
    "deadlineMsgDuration": 750,
    "fixationStimulus": {
        "css": {
            "color": "#34e71d",
            "font-size": "6em"
        },
        "media": {
            "word": "X"
        }
    },
    "deadlineStimulus": {
        "css": {
            "color": "#FF0000",
            "font-size": "2.5em"
        },
        "media": {
            "word": "!!!PLEASE RESPOND FASTER!!!"
        },
        "location": {
            "bottom": 10
        }
    },
    "nTrialsPerPrimeTargetPair": 15,
    "nBlocks": 4,
    "firstBlock": "<div><p style=\"font-size:1.3em; text-align:left; margin-left:10px; font-family:arial\"><color=\"000000\"><br/>Put your middle or index fingers on the <b>E</b> and <b>I</b> keys of your keyboard. Pairs of items (words and images) will appear one after another. For each pair of items, ignore the first item and categorize the second item as posAttribute or negAttribute.<br/><br/>When the second item you see belongs to the category \"negAttribute\", press <b>E</b>; when the item belongs to the category \"posAttribute\", press <b>I</b>. If you make an error, an </color> <font color=\"#ff0000\"><b>X</b></font> will appear.<br/><br/>This is a timed sorting task. <b>GO AS FAST AS YOU CAN</b> while making as few mistakes as possible.</color></p><p style=\"font-size:14px; text-align:center; font-family:arial\"><color=\"000000\"><br/><br/>press SPACE to begin</p><p style=\"font-size:12px; text-align:center; font-family:arial\"><color=\"000000\">[Round 1 of nBlocks]</p></div>",
    "middleBlock": "<div><p style=\"font-size:1.3em; text-align:left; margin-left:10px; font-family:arial\"><color=\"000000\"><br/>Press SPACE to continue with the same task.<br/><br/>Ignore the first item and categorize the second item.<br/><br/>Press <b>E</b> if the second item is negAttribute.<br/>Press <b>I</b> if the second item is posAttribute.</p><br/><br/><p style=\"font-size:12px; text-align:center; font-family:arial\"><color=\"000000\">[Round blockNum of nBlocks]</p></div>",
    "lastBlock": "<div><p style=\"font-size:1.3em; text-align:left; margin-left:10px; font-family:arial\"><color=\"000000\"><br/>This task can be a little exhausting. Try to challenge yourself to respond as quickly as you can without making mistakes.<br/><br/>Press SPACE for the final round.</p><br/><br/><p style=\"font-size:12px; text-align:center; font-family:arial\"><color=\"000000\">[Round nBlocks of nBlocks]</p></div>"
});});
