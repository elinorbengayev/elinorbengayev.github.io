define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/stiat6.js'], function(APIConstructor, iatExtension){
  var API = new APIConstructor();
  
  
		  return stiatExtension({
		  category : { 
		    name : 'Dogs', //Will appear in the data.
		    title : {
		      media : {word : 'Dogs'}, //Name of the category presented in the task.
		      css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
		      height : 4 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
			{word: 'Labrador'},
			{word: 'Boxer'},
			{word: 'Poodle'},
			{word: 'Beagle'},
			{word: 'Schnauzer'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31940F','font-size':'1.8em'}
		  },	

  		attribute1 : 
			{
				name : 'Unpleasant', //Attribute label
				title : {
					media : {word : 'Negative'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 7 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'Bomb'},
					{word: 'Abuse'},
					{word: 'Sadness'},
					{word: 'Pain'},
					{word: 'Poison'},
					{word: 'Grief'}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},
			attribute2 : 
			{
				name : 'Pleasant', //Attribute label
				title : {
					media : {word : 'Positive'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 7 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'Paradise'},
					{word: 'Pleasure'},
					{word: 'Cheer'},
					{word: 'Wonderful'},
					{word: 'Splendid'},
					{word: 'Love'}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},

  //base_url : {//Where are your images at?
    //image : base_url
  } 
  )
  });
