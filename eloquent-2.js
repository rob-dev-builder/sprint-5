//////  Looping Function

var output = "#";
var i = 0;
do {
    console.log(output);
    output += '#';
    i++;
} while (i < 7)

////// Fizz Buzz

// Build An array of numbers from 1 to 100
var numbers = []
for (var i = 0; i < 100; i++) {
    numbers.push(i);
}

var checkNumbers = function() {
    for (i = 0; i < numbers.length; i++) {
        var divByThree = (numbers[i] % 3)
        var divByFive = (numbers[i] % 5)

        if ((divByThree === 0) && (divByFive === 0)) {
            //    return "FizzBuzz";
            console.log("FizzBuzz");
        } else if ((divByThree === 0) && (divByFive !== 0)) {
            //   return "Fizz";
            console.log("Fizz ");
        } else if ((divByFive === 0) && (divByThree !== 0)) {
            // return "Buzz";
            console.log("Buzz");
        } else {
            console.log(numbers[i])
        };
    };
};

///// Build chessboardArray

var chessboardArray = []
var blockType = 1

var displayChessboard = function() {

    // Build the chessboard array
    var chessboardWidth = chessboardArray[0].length;
    var chessboardHeight = chessboardArray.length;
    var row = "";

    // for each row in the array
    for (var r = 0; r < chessboardHeight; r++) {
        // for each item in the row
        for (var i = 0; i < chessboardWidth; i++) {
            if (chessboardArray[r][i] === 0) {
                row += " ";
            } else if (chessboardArray[r][i] === 1) {
                row += "#";
            }
        }
        row += "\n";
        //alert("row created: " + row);
    }
    alert(row);
    //console.log(row);
}

var buildChessboard = function(Width, Height) {

    // Check if numbers a valid
    // Numbers must be divisable by 2 to make chessboard
    if ((Number(Height) % 2 === 0) && (Number(Width) % 2 === 0)) {
        console.log("numbers are valid")

        for (var r = 0; r < Height; r++) {
            chessboardArray.push([])
            for (var i = 0; i < Width; i++) {

                if (blockType === 0) {
                    chessboardArray[r].push(1)
                    blockType = 1
                } else if (blockType === 1) {
                    chessboardArray[r].push(0)
                    blockType = 0
                }
            }

            if (blockType === 0) {
                blockType = 1
            } else if (blockType === 1) {
                blockType = 0
            }
        }
        displayChessboard()
    } else {
        console.log("numbers are not valid")
    }
}
