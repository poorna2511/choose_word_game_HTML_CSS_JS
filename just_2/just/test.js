var words = ["Door", "Ergo", "Meow", "Dahn", "Have", "Dese", "Male", "Pale", "Path", "Jeez", "Pass", "Tara", "Bold", "Pooh", "Rate", "King", "Send", "Some", "Sick", "Pair",
    "Wine", "Amen", "Your", "Bear", "Case", "Foot", "Baby", "Back", "Test", "Nice", "Line", "Ring", "Text", "Wall", "Road", "Dumb", "Weak", "Hand", "Idly", "Ciao",
    "Lone", "Away", "Hmmm", "Even", "West", "Game", "Vast", "Bare", "Task", "Nish", "Real", "City", "Rise", "Stop", "Tall", "Yuck", "Love", "Fast", "Next", "File",
    "Open", "Pull", "Team", "Tidy", "Beat", "Wake", "Fore", "Grow", "Card", "Feel", "Egad", "Shut", "Thor", "Hour", "Tree", "Pain", "Name", "Lady", "Play", "Rule",
    "Wise", "Sure", "Only", "Deal", "Find", "Late", "Here", "Ugly", "Rest", "Seem", "Able", "Life", "Heck", "Page", "Hill", "Jack", "Land", "Join", "Dark", "Wide",
    "Nada", "Rely", "Paul", "Upon", "Nazi", "Pugh", "Snap", "Risk", "Grey", "Tiny", "Ahem", "Once", "Unit", "Face", "Mark", "Very", "Last", "Such", "Wear", "Vain",
    "Drop", "Foul", "Just", "Flat", "Duty", "Park", "Date", "Must", "From", "Keep", "Dare", "Wish", "Plus", "Role", "High", "Fear", "Like", "Half", "Side", "Enuf",
    "Mary", "Lend", "Atop", "List", "Mong", "John", "Onto", "Book", "Shop", "Body", "Sith", "Wait", "Deep", "Cold", "Pure", "Note", "Warn", "Flip", "Seat", "Move",
    "Will", "Skin", "Wary", "Wham", "East", "What", "Seek", "Bill", "Hear", "Wife", "Week", "Read", "Link", "Many", "Hers", "Lift", "Dear", "Wind", "Thro", "Cash",
    "View", "Fair", "News", "Main", "Holy", "Hang", "With", "Girl", "Step", "Town", "Hell", "Unto", "Star", "Cool", "Hold", "Sore", "Wash", "Hiya", "Sale", "Nowt",
    "Blow", "Food", "Hard", "Duly", "Hide", "Sing", "Cook", "Afar", "Rock", "Fact", "Else", "Firm", "Nyet", "Word", "Head", "Cast", "Oral", "Long", "Push", "Lose",
    "Mass", "Sort", "Blah", "Amid", "Year", "Fund", "They", "Wild", "Draw", "Mean", "Fall", "Mere", "Hurt", "Fill", "Shoo", "Fond", "Slow", "Huge", "Ajax", "Roll",
    "Slim", "Ably", "Near", "Blue", "Both", "Earn", "Them", "Okay", "Goal", "Lack", "Hall", "Take", "Nigh", "Whiz", "Tend", "Sell", "Room", "Damn", "Kind", "Busy",
    "Work", "Thou", "Race", "Anew", "Honk", "Hope", "Thin", "Bank", "Anti", "Past", "Urgh", "Much", "Soon", "Tell", "Free", "Ever", "Talk", "Come", "Pick", "Army",
    "Jump", "Sign", "Doon", "Gold", "Loss", "Phut", "Mang", "Help", "Care", "True", "Dual", "Sole", "Mind", "Stay", "Same", "Look", "Time", "Area", "Gosh", "Easy",
    "Pink", "Dead", "Show", "Chez", "Waly", "Thon", "Cope", "Mine", "Deaf", "Wood", "Plan", "Give", "Tour", "Dull", "Ball", "Edge", "Offa", "Bang", "Rich", "Club",
    "Lest", "Whom", "Meet", "Cost", "Vice", "Then", "Pray", "Calm", "Over", "Down", "Thus", "Alas", "Nome", "Suit", "Miss", "Into", "Glad", "That", "Eina", "Apud",
    "Band", "Yere", "Fine", "Save", "Phew", "Fail", "Post", "Rear", "Lord", "Base", "Turn", "Jinx", "Thee", "Vary", "Rude", "Lazy", "This", "Grim", "Idea", "Neat",
    "Call", "Film", "Site", "Self", "Hair", "Ride", "Make", "None", "Vote", "Darn", "Type", "Fish", "Term", "Bout", "Burn", "Part", "Size", "Whoa", "Rain", "Keen",
    "Ahoy", "Warm", "Ouch", "Form", "Lead", "Fire", "User", "Slip", "Shed", "Safe", "Good", "Deny", "Rare", "Hate", "Need", "Want", "Gain", "Live", "Home", "Damp",
    "Hist", "Mild", "Farm", "Solo", "Hern", "Hmph", "Tone", "Walk", "Know", "Than", "Hunh", "Full", "Poor", "Loud", "Oops", "Zero", "Tory", "Ours", "Till", "Poof",
    "Kill", "Evil", "When", "Soft", "Mwah", "Bass", "Thru", "Outa", "Crud"];

var pickedWordsOfDay = ["", "", "", ""];

var prevSelTileRow = [-1, -1, -1, -1];

var wordFound = 0;

function SetUpGame() {

    var gameBoard = document.getElementById('gameBoard');

    for (var rowIdx = 0; rowIdx < 6; rowIdx++) {

        var rowPos = $("#" + rowIdx).position();
        for (var colIdx = 0; colIdx < 4; colIdx++) {

            var newDiv = document.createElement('div');
            newDiv.className = 'wordTile';
            newDiv.id = "n" + rowIdx + colIdx;
            newDiv.textContent = "";
            var tileObjPos = $("#" + rowIdx + colIdx).position();

            var x = "" + tileObjPos.left + "px";
            var y = "" + rowPos.top + "px";
            $(newDiv).css({ left: x, top: y });

            gameBoard.appendChild(newDiv);
        }
    }

    //assign words randomly
    for (var colIdx = 0; colIdx < 4; colIdx++) {

        var nums = [0, 1, 2, 3, 4, 5];
        var randNums = [-1, -1, -1, -1];

        //let get 4 random numbers
        for (var randIdx = 0; randIdx < 4; randIdx++) {

            var randNum = Math.floor(Math.random() * 10);
            var len = nums.length;
            var randIndex = randNum % len;
            randNums[randIdx] = nums[randIndex];

            var temp = nums.splice(randIndex, 1);
        }

        for (var randIdx = 0; randIdx < 4; randIdx++) {

            var letter = pickedWordsOfDay[randIdx][colIdx]
            $("#n" + randNums[randIdx] + colIdx).text(letter.toUpperCase());
        }
    }
}

window.onload = function () {

    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    //to get some random number for the given date
    //just to pick a random word from the words list everyday and unique for the day
    //it is kind of hash function, hashing the date input
    //rand() shoudnt be used here as it wont give unique rand num for the given date
    var randomizeDateVal = (year + (month * 3) + (date * 11) + 17) * (year + 2) * (month + 5) * (date + 7) + date;
    var wordsCount = words.length;
    var wordIdx = randomizeDateVal % wordsCount;

    pickedWordsOfDay[0] = words[(wordIdx + 0) % wordsCount];
    pickedWordsOfDay[1] = words[(wordIdx + 1) % wordsCount];
    pickedWordsOfDay[2] = words[(wordIdx + 2) % wordsCount];
    pickedWordsOfDay[3] = words[(wordIdx + 3) % wordsCount];

    SetUpGame();
}

function ThrowTheWordTilesDown() {

    $("#n" + prevSelTileRow[0] + 0).animate({ "top": "1000px" }, 500);
    $("#n" + prevSelTileRow[1] + 1).animate({ "top": "1000px" }, 500);
    $("#n" + prevSelTileRow[2] + 2).animate({ "top": "1000px" }, 500);
    $("#n" + prevSelTileRow[3] + 3).animate({ "top": "1000px" }, 500);

    $("#n" + prevSelTileRow[0] + 0).attr("id", "validWord");
    $("#n" + prevSelTileRow[1] + 1).attr("id", "validWord");
    $("#n" + prevSelTileRow[2] + 2).attr("id", "validWord");
    $("#n" + prevSelTileRow[3] + 3).attr("id", "validWord");
}

function JustSleep(param) {
    for (var idx = 0; idx < param; idx++) {
        var k = 0;
    }
}

function ResetPrevSelection() {

    prevSelTileRow[0] = -1;
    prevSelTileRow[1] = -1;
    prevSelTileRow[2] = -1;
    prevSelTileRow[3] = -1;
}

function RearangeTiles(strRedOrGreen) {

    for (var colIdx = 0; colIdx < 4; colIdx++) {
        for (var tileIdx = prevSelTileRow[colIdx] - 1; tileIdx >= 0; tileIdx--) {

            var tileObj = document.getElementById("n" + tileIdx + colIdx);

            if (tileObj) {

                var strNewId = "n" + (tileIdx + 1) + colIdx;
                tileObj.id = strNewId;

                var rowPosition = $("#" + (tileIdx + 1)).position();

                var duration = 800 / ((colIdx + 1) * (tileIdx + 1));
                $("#" + strNewId).animate({ "top": "" + rowPosition.top + "px" }, duration).delay(duration + 50);
            }
        }
    }

    if (strRedOrGreen == "red") {

        $("#t0").animate({ "background-color": "navy" }, 10);
        $("#t1").animate({ "background-color": "navy" }, 10);
        $("#t2").animate({ "background-color": "navy" }, 10);
        $("#t3").animate({ "background-color": "navy" }, 10);

        $("#t0").css("color", "white");
        $("#t1").css("color", "white");
        $("#t2").css("color", "white");
        $("#t3").css("color", "white");

        for (var colIdx = 0; colIdx < 4; colIdx++) {
            for (var tileIdx = 0; tileIdx < 6; tileIdx++) {

                var tileObj = document.getElementById("n" + tileIdx + colIdx);

                if (tileObj) {

                    var rowPosition = $("#" + (tileIdx - 1)).position();
                    var strNewId = "n" + (tileIdx - 1) + colIdx;

                    $("#t" + colIdx).attr("id", strNewId);
                    $("#" + strNewId).animate({ "top": "" + rowPosition.top + "px" }, 400);
                }
            }
        }
    }
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

$(document).ready(function () {

    $(".wordTile").click(function () {

        var strSenderId = this.id;
        subStr = strSenderId.substring(1);
        var number = parseInt(subStr);

        var onesDig = number % 10;//col
        var tensDig = parseInt(number / 10, 10);//row

        //if tiles from top are selected then dont do any process
        if (tensDig <= 2)
            return;

        //reset the old selection
        if (prevSelTileRow[onesDig] != -1) {

            $("#n" + prevSelTileRow[onesDig] + onesDig).css("background-color", "navy");
            $("#n" + prevSelTileRow[onesDig] + onesDig).css("color", "white");
        }

        //update the new selection
        prevSelTileRow[onesDig] = tensDig;
        $("#n" + prevSelTileRow[onesDig] + onesDig).css("background-color", "yellow");
        $("#n" + prevSelTileRow[onesDig] + onesDig).css("color", "black");

    });

    $("#enter").click(function () {

        for (var idx = 0; idx < 4; idx++) {
            if (prevSelTileRow[idx] == -1)
                return;
        }

        var str1 = $("#n" + prevSelTileRow[0] + 0).text().toUpperCase();
        var str2 = $("#n" + prevSelTileRow[1] + 1).text().toLowerCase();
        var str3 = $("#n" + prevSelTileRow[2] + 2).text().toLowerCase();
        var str4 = $("#n" + prevSelTileRow[3] + 3).text().toLowerCase();

        var strChoosenWord = str1 + str2 + str3 + str4;

        if (words.includes(strChoosenWord) == true) {

            wordFound++;
            $("#n" + prevSelTileRow[0] + 0).css("background-color", "green").delay(300);
            $("#n" + prevSelTileRow[1] + 1).css("background-color", "green").delay(300);
            $("#n" + prevSelTileRow[2] + 2).css("background-color", "green").delay(300);
            $("#n" + prevSelTileRow[3] + 3).css("background-color", "green").delay(300);

            //JustSleep(1e9);
            //sleep(1000);
            ThrowTheWordTilesDown();
            RearangeTiles("green");
            ResetPrevSelection();
        } else {

            $("#n" + prevSelTileRow[0] + 0).animate({ "background-color": "red" }, 10).delay(100);
            $("#n" + prevSelTileRow[1] + 1).animate({ "background-color": "red" }, 10).delay(100);
            $("#n" + prevSelTileRow[2] + 2).animate({ "background-color": "red" }, 10).delay(100);
            $("#n" + prevSelTileRow[3] + 3).animate({ "background-color": "red" }, 10).delay(100);

            $("#n" + prevSelTileRow[0] + 0).animate({ "top": "-60px" }, 400).delay(400);
            $("#n" + prevSelTileRow[1] + 1).animate({ "top": "-60px" }, 400).delay(400);
            $("#n" + prevSelTileRow[2] + 2).animate({ "top": "-60px" }, 400).delay(400);
            $("#n" + prevSelTileRow[3] + 3).animate({ "top": "-60px" }, 400).delay(400);

            $("#n" + prevSelTileRow[0] + 0).attr("id", "t0");
            $("#n" + prevSelTileRow[1] + 1).attr("id", "t1");
            $("#n" + prevSelTileRow[2] + 2).attr("id", "t2");
            $("#n" + prevSelTileRow[3] + 3).attr("id", "t3");

            //JustSleep(1e5);
            RearangeTiles("red");
            ResetPrevSelection();
        }
    });

});
