// $(function(){

// 	var $tags = $('.tag');
// 	var $posts = $('.post');

// 	var topicsToDisplay = [];

// 	$tags.on('click', function(e){
// 		$this = $(this);

// 		// add styling class
// 		$this.toggleClass('is-primary is-info');

// 		var tagName = $this.attr('class').split(' ')[1];

// 		// add to array if it is not already there
// 		if ($.inArray(tagName, topicsToDisplay) == -1){
// 			topicsToDisplay.push(tagName);
// 		} else {
// 			var index = topicsToDisplay.indexOf(tagName);
// 			if (index !== -1) {
// 			    topicsToDisplay.splice(index, 1);
// 			}
// 		}

// 		renderSelectedTags();
// 	});

// 	function renderAllPosts(){
// 		// $posts.fadeIn();
// 		topicsToDisplay = [];
// 		$this.toggleClass('is-primary is-info');
// 	}

// 	function renderSelectedTags(){
// 		// go through every post
// 		$posts.each(function(i, post){
// 			var postTags = $('.post.hidden').text();
// 			console.log(postTags);

// 			topicsToDisplay.forEach(function(topic){
// 				var id = '#' + topic;
// 				$(post).has(id).fadeOut();
// 			});
// 		});
// 	}
// });


