define(['pipAPI','/implicit/common/all/js/pip/piscripts/iat/iat5.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
    var global = API.getGlobal();
    var isTouch = API.getGlobal().isTouch;
    
    var set = API.shuffle(['A','B'])[0];
    var lightImages = [];
    var darkImages = [];
    var lightImagesLabel = [];
    var darkImagesLabel = [];
    var lightLabelText = ['Light Skinned People'];
    var darkLabelText = ['Dark Skinned People'];

          //Fill the sets of words and images for the gay categories, based on the gay-set condition
      if (set == 'A')
        {
            darkImages.push('tone0031b.jpg');
            darkImages.push('tone0051b.jpg');
            darkImages.push('tone0061b.jpg');
            darkImages.push('tone0081b.jpg');
            darkImages.push('tone0111b.jpg');
            darkImages.push('tone0121b.jpg');
            lightImages.push('tone0041a.jpg');
            lightImages.push('tone0071a.jpg');
            lightImages.push('tone0091a.jpg');
            lightImages.push('tone0101a.jpg');
            lightImages.push('tone0131a.jpg');
            lightImages.push('tone0141a.jpg');
            lightImagesLabel = 'label2a.jpg';
            darkImagesLabel = 'label1b.jpg';

        }

       else if (set == 'B')
        {
            darkImages.push('tone0071b.jpg');
            darkImages.push('tone0131b.jpg');
            darkImages.push('tone0091b.jpg');
            darkImages.push('tone0101b.jpg');
            darkImages.push('tone0141b.jpg');
            darkImages.push('tone0041b.jpg');
            lightImages.push('tone0081a.jpg');
            lightImages.push('tone0031a.jpg');
            lightImages.push('tone0061a.jpg');
            lightImages.push('tone0111a.jpg');
            lightImages.push('tone0051a.jpg');
            lightImages.push('tone0121a.jpg');
            lightImagesLabel ='label1a.jpg';
            darkImagesLabel ='label2b.jpg';

      }


        API.addGlobal({
        set : set,
        darkImages : darkImages,
        lightImages: lightImages,
        lightImagesLabel: lightImagesLabel,
        darkImagesLabel: darkImagesLabel,
        lightLabelText: lightLabelText,
        darkLabelText: darkLabelText,

             baseURL : '/implicit/user/demo.us/demo.skin.0002/images/',
            isTouch:isTouch,
      posWords : API.shuffle([
              'Love', 'Cheer', 'Friend', 'Pleasure', 
              'Adore', 'Cheerful', 'Friendship', 'Joyful', 
              'Smiling','Cherish', 'Excellent', 'Glad', 
              'Joyous', 'Spectacular', 'Appealing', 'Delight', 
              'Excitement', 'Laughing', 'Attractive','Delightful', 
              'Fabulous', 'Glorious', 'Pleasing', 'Beautiful', 
              'Fantastic', 'Happy', 'Lovely', 'Terrific', 
              'Celebrate', 'Enjoy', 'Magnificent', 'Triumph']), 
       negWords : API.shuffle([
              'Abuse', 'Grief', 'Poison', 'Sadness', 
              'Pain', 'Despise', 'Failure', 'Nasty', 
              'Angry', 'Detest', 'Horrible', 'Negative', 
              'Ugly', 'Dirty', 'Gross', 'Evil', 
              'Rotten','Annoy', 'Disaster', 'Horrific',  
              'Scorn', 'Awful', 'Disgust', 'Hate', 
              'Humiliate', 'Selfish', 'Tragic', 'Bothersome', 
              'Hatred', 'Hurtful', 'Sickening', 'Yucky'])
      });

    
    var darkMedia = []; 
	for(var dImage = 0; dImage < global.darkImages.length; dImage++)
	{
	    darkMedia.push({image:global.darkImages[dImage]});
	}
	
	 var lightMedia = []; 
	for(var lImage = 0; lImage < global.lightImages.length; lImage++)
	{
	    lightMedia.push({image:global.lightImages[lImage]});
	}
	
    
    return iatExtension({
        category1 : {
            name : 'Dark Skinned People', //Will appear in the data.
            title : {
                media : isTouch ? {word:global.darkLabelText} : {image:global.darkImagesLabel}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia :  darkMedia, 
    	    
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : 'Light Skinned People', //Will appear in the data.
            title : {
                media : isTouch ? {word:global.lightLabelText} : {image:global.lightImagesLabel}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia :  lightMedia, 
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
		attribute1 :
		{
			name : 'Bad',
			title : {
				media : {word : 'Bad'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: global.negWords[0]},
				{word: global.negWords[1]},
				{word: global.negWords[2]},
				{word: global.negWords[3]},
				{word: global.negWords[4]},
				{word: global.negWords[5]},
				{word: global.negWords[6]},
				{word: global.negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Good',
			title : {
				media : {word : 'Good'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: global.posWords[0]},
				{word: global.posWords[1]},
				{word: global.posWords[2]},
				{word: global.posWords[3]},
				{word: global.posWords[4]},
				{word: global.posWords[5]},
				{word: global.posWords[6]},
				{word: global.posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
        base_url : {//Where are your images at?
            image : 'https://elinorbengayev.github.io/skinImages/'
        },
		isTouch : global.isTouch
    });
});
