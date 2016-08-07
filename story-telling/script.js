$(document).ready(function() {
    var config = {
      apiKey: "AIzaSyAhQLT8paJzRW_zemooz9RWEFtBxeGe8Mg",
      authDomain: "story-telling-3f55b.firebaseapp.com",
      databaseURL: "https://story-telling-3f55b.firebaseio.com",
      storageBucket: "story-telling-3f55b.appspot.com",
    };
    firebase.initializeApp(config);

    var titleText = $('#title');
    var nameText = $('#name');
    var storyText = $('#story');
    var submitButton = $('#submit');
    var database = firebase.database().ref();
    var allStories = $('.all-stories');
    var imageURL = null;

    submitButton.click(function(event) {
        var title = titleText.val();
        var name = nameText.val();
        var story = storyText.val();

        //VALIDATE
        if (title.length != 0 && story.length != 0) {
            titleText.val("");
            storyText.val("");
            nameText.val("");
            $('#the-uploaded-image').remove()
            database.push({title: title, text: story, name: name, display: -1, imageURL: imageURL})
        }
    });

    var startListening = function() {
        database.on('child_added', function(snapshot) {
            var thisStory = snapshot.val();
            //story
            var storyString = "<div class=\"story\">";
            //title
            storyString += "<h3>"+thisStory.title+"</h3>";
            //image
            if(thisStory.imageURL) {
                storyString += "<div class=\"centered\"><img src=\""+thisStory.imageURL+"\"></div>";
            }
            //text
            storyString += "<p>"+thisStory.text.replace(/\n/g, "<br/>")+"</p>";
            //author
            if (thisStory.name.length != 0) {
                storyString += "<div class=\"name\">- "+thisStory.name+"</div>";
            }
            storyString += "</div>";
            allStories.prepend(storyString);
        });
    }

    // Begin listening for data
    startListening();

    $('#image-upload').submit(function(event){
        event.preventDefault();
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            alert('The File APIs are not fully supported in this browser.');
            return;
        }

        input = document.getElementById('fileinput');
        if (!input) {
            alert("Um, couldn't find the fileinput element.");
        }else if (!input.files) {
            alert("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            alert("Please select a file before clicking 'Load'");
        }
        else {
            file = input.files[0];
            console.log(file);
            if (file.size < 10000000) {

                var storageRef = firebase.storage().ref();
                var uploadTask = storageRef.child('images/' + file.name).put(file);

                uploadTask.on('state_changed', function(snapshot){
                  // Observe state change events such as progress, pause, and resume
                  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log(progress);
                  $('#uploadImage').html(progress.toFixed(0) + "%");
                  // See below for more detail
                }, function(error) {
                  console.log('fucked up');
                  console.log(error);
                }, function() {
                  var downloadURL = uploadTask.snapshot.downloadURL;
                  imageURL = downloadURL;
                  $('#uploaded-image').append("<img id=\"the-uploaded-image\" src=\""+downloadURL+"\">");
                  input.value = "";
                  $('#uploadImage').html("Upload Image");
                });
            }

        }
    });
});