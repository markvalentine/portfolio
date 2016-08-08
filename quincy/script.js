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
    var imageRef = null;
    var toDelete = false;

    submitButton.click(function(event) {
        toDelete = false;
        var title = titleText.val();
        var name = nameText.val();
        var story = storyText.val();

        //VALIDATE
        if (story.length != 0 || imageURL != null) {
            titleText.val("");
            storyText.val("");
            nameText.val("");
            $('#the-uploaded-image').remove()
            database.push({title: title, text: story, name: name, display: -1, imageURL: imageURL})
            window.location.href = "stories.html";
        }
    });

    var startListening = function() {
        database.on('child_added', function(snapshot) {
            var thisStory = snapshot.val();
            //story
            var storyString = "<div class=\"story\">";
            //title
            if (thisStory.title) {
                storyString += "<h3>"+thisStory.title+"</h3>";
            }
            //image
            if(thisStory.imageURL) {
                storyString += "<div class=\"centered\"><img src=\""+thisStory.imageURL+"\"></div>";
            }
            //text
            if (thisStory.text) {
                storyString += "<p>"+thisStory.text.replace(/\n/g, "<br/>")+"</p>";
            }
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

    function generateUUID(){
        var d = new Date().getTime();
        if(window.performance && typeof window.performance.now === "function"){
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    $('body').on('submit', '#image-upload', function() {
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
                imageRef = 'images/' + generateUUID()
                var imgRef = storageRef.child(imageRef);
                var uploadTask = imgRef.put(file);

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
                  toDelete = true;
                  imageURL = downloadURL;
                  $('#uploaded-image').append("<div id=\"delete-image\">X</div><img id=\"the-uploaded-image\" src=\""+downloadURL+"\">");
                  input.value = "";
                  // $('#uploadImage').html("Upload Image");
                  $('#image-upload').remove();
                });
            }

        }
    });

    $('body').on('click', '#delete-image', function() {
        if (imageRef != null) {
            var storageRef = firebase.storage().ref();
            storageRef.child(imageRef).delete().then(function() {
                // File deleted successfully
                $('#uploaded-image').before("<form id=\"image-upload\"><div class=\"input-overlay\"><div class=\"filename\">&nbsp;</div><button class=\"inline-blue\" id=\"uploadImage\" type=\"submit\">Upload Image</button><div class=\"fileinput\"><input type=\"file\" name=\"file\" id=\"fileinput\"></div></div></form>");
                $('#the-uploaded-image').remove();
                $('#delete-image').remove();

            }).catch(function(error) {
                // Uh-oh, an error occurred!
            }); 
        }
    });

    function deleteImage() {
        console.log(imageRef)
        if (imageRef != null) {
            var storageRef = firebase.storage().ref();
            storageRef.child(imageRef).delete().then(function() {
                // File deleted successfully
                console.log("deleted");
            }).catch(function(error) {
                // Uh-oh, an error occurred!
            }); 
        }
    }

    window.onbeforeunload = function() {
        // console.log("askdfha;sdjflkasd");
        // if (toDelete) {
        //     return "Are you sure you want to leave so soon?";
        // }
        // if (toDelete) {
        //     deleteImage();   
        // }
    }

    
    
    function hideDropdown() {
        if($('.prompt-dropdown')) {
            $('.prompt-dropdown').animate({'height': 0}, function() {
                $('.prompt-dropdown').remove();
                $('.not-sure').unbind('click', hideDropdown);
                $('.not-sure').bind('click', showDropdown);
            });
            $('li').each(function() {
                $(this).animate({'opacity': 0});
            });
        }
    }

    function showDropdown() {
        $('.not-sure').after("<div class=\"prompt-dropdown\"><ul><li>How would you describe Quincy to others?</li><li>What is a particularly memorable quality about Quincy?</li><li>Share a photo you have of Quincy. Why does this particular photo stand out? </li><li>How would you and Quincy normally spend time together? </li><li>Is there a particular moment/story that shines out as truly \"Quincy\"?</li><li>Think back to your first memories of Quincy. How did you meet?</li><li>What will you always remember Quincy for?</li><li>List 3 words that come to mind when thinking about Quincy. Why these?</li><li>If you had a theme song for Quincy, what would it be?</li><li>Try writing a haiku or poem for Quincy. </li></ul></div>");
        var initialHeight =  $('.prompt-dropdown').height();
        $('.prompt-dropdown').height(0);
        $('.prompt-dropdown').css({'opacity': 1, 'position': 'static'});

        $('.prompt-dropdown').animate({'height': initialHeight});
        $('li').each(function() {
            $(this).animate({'opacity': 1});
        });
        $('.not-sure').unbind('click', showDropdown);
        $('.not-sure').bind('click', hideDropdown);
    }

    $('.not-sure').bind('click', showDropdown);

    $(window).resize(function(event) {
        hideDropdown();
    });

});