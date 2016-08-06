$(document).ready(function() {
    var titleText = $('#title');
    var storyText = $('#story');
    var submitButton = $('#submit');
    var myFirebase = new Firebase('https://sweltering-fire-8007.firebaseio.com/');
    var allStories = $('.all-stories');

    submitButton.click(function(event) {
        var title = titleText.val()
        var story = storyText.val();
        titleText.val("");
        storyText.val("");
        myFirebase.push({title: title, text: story})
    });

    var startListening = function() {
        console.log("start listenting");
        myFirebase.on('child_added', function(snapshot) {
            var thisStory = snapshot.val();
            console.log(thisStory.text);
            var storyString = "<div class=\"story\"><h3>"+thisStory.title+"</h3><p>"+thisStory.text.replace(/\n/g, "<br/>")+"</p></div>";
            allStories.append(storyString);
        });
    }

    // Begin listening for data
    startListening();
});