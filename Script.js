var numNums = 3;

function sortNumbers() {
  var validInput = true;
  var outputString = "";
  var numString = document.getElementById("numbers").value;
  var numSplit = numString.split(", ");

  if (numSplit.length != numNums) {
    document.getElementById("p1").innerHTML = "Input must be three numbers";
    return;
  }
  var nums = [];
  var strHolder;
  for (i = 0; i < numNums; i++) {
    strHolder = numSplit[i];
    nums[i] = parseInt(numSplit[i]);
    if(Number.isNaN(nums[i])) {
      if(!validInput) {
        outputString += ", "
      }
      outputString += strHolder + " is not a number";
      validInput = false;
    }
  }

  if (validInput) {
    if (nums[2] < nums[1]) {
      var holder = nums[1];
      nums[1] = nums[2];
      nums[2] = holder;
    }

    if (nums[1] < nums[0]) {
      var holder = nums[0];
      nums[0] = nums[1];
      nums[1] = holder;
    }

    if (nums[2] < nums[1]) {
      var holder = nums[1];
      nums[1] = nums[2];
      nums[2] = holder;
    }

    outputString = nums[0] + ", " + nums[1] + ", " + nums[2];
  }

  document.getElementById("p1").innerHTML = outputString;
}
