define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/stiat6.js'], function(APIConstructor, stiatExtension){
	var API = new APIConstructor();
	var global = API.getGlobal();
	
	return stiatExtension(
		{			
			remindErrorText : '<p align="center" style="font-size:"4em"; font-family:arial">' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<p/>',
			//Define the category.
			category :  
			{
				name : 'Man', //Category label.
				title : {
					media : {word : 'Man'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 7 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: global.man_stims[0]},
					{word: global.man_stims[1]},
					{word : global.man_stims[2]}, 
        		    {word : global.man_stims[3]},
        		    {word : global.man_stims[4]}
				],
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},
			attribute1 : 
			{
				name : 'Me', //Attribute label
				title : {
					media : {word : 'Me'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 7 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: global.peritems.questions.birthmonth.response},
					{word: global.peritems.questions.birthday.response},
					{word: global.peritems.questions.birthyear.response},
					{word: global.peritems.questions.eyecolor.response}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},
			attribute2 : 
			{
				name : 'Not-me', //Attribute label
				title : {
					media : {word : 'Not-me'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 7 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word : global.non_birthmonth}, 
        			{word : global.non_birthday},
        			{word : global.non_birthyear},
        			{word : global.non_eyecolor} 
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},
			
			trialsByBlock : 
			[//Each object in this array defines a block
				{
					instHTML : '', //Empty means we will create the inst from the instTemplate variable further below. 
					block : 1, //The block variable is not used later, but could help the user. 
					//In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
					miniBlocks : 1, //Set to 1 if don't need mini blocks. 0 will break the task.
					singleAttTrials : 10,  //Number of trials of the attribute that does not share key with the category (in a mini block).
					sharedAttTrials : 10, //Number of trials of the attribute that shares key with the category (in a mini block).
					categoryTrials : 0 // Number of trials of the category (in a mini-block). If 0, the label does not appear.
					//Note: if no category trials, then attribute1, the one on the left, is considered the single attribute.
				}, 
				{ 
					instHTML : '', 
					block : 2, 
					miniBlocks : 2, 
					singleAttTrials : 7, 
					sharedAttTrials : 4, 
					categoryTrials : 5
				}, 
				{ 
					instHTML : '', 
					block : 3, 
					miniBlocks : 2, 
					singleAttTrials : 7, 
					sharedAttTrials : 4, 
					categoryTrials : 5
				}, 
				{ 
					instHTML : '', 
					block : 4, 
					miniBlocks : 2, 
					singleAttTrials : 7, 
					sharedAttTrials : 4, 
					categoryTrials : 5
				}, 
				{ 
					instHTML : '', 
					block : 5, 
					miniBlocks : 2, 
					singleAttTrials : 7, 
					sharedAttTrials : 4, 
					categoryTrials : 5
				}
			],
			
			//The default feedback messages for each cutoff. 
			//If you put attribute1, attribute2 and category here, 
			//these will be replaced with the names of attribute1, attribute2 and category.
			fb_strongAssociationWithAttribute2 : 'Your data suggest a strong automatic association between attribute2 and thecategory.',
			fb_moderateAssociationWithAttribute2 : 'Your data suggest a moderate automatic association between attribute2 and thecategory.',
			fb_weakAssociationWithAttribute2 : 'Your data suggest a weak automatic association between attribute2 and thecategory.',
			fb_neutralAssociation : 'Your data suggest a neutral automatic association between attribute1 and thecategory.',
			fb_weakAssociationWithAttribute1 : 'Your data suggest a weak automatic association between attribute1 and thecategory.' ,
			fb_moderateAssociationWithAttribute1 : 'Your data suggest a moderate automatic association between attribute1 and thecategory.' ,
			fb_strongAssociationWithAttribute1 : 'Your data suggest a strong automatic association between attribute1 and thecategory.', 
		
		    base_url : {//Where are your images?
			    image : 'http://app-prod-04.implicit.harvard.edu/openserver/users/ebengayev/bisourcspt-125/images/'
		}
	});
});

