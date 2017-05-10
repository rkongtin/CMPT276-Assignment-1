// validates if the numerator of any grade is valid
function validateNumerator(n) {
  if (n == "" || n < 0 || n > 100) {
    return false;
  } else {
    return true;
  }
}

// validates if the denominator of any grade is valid
function validateDenominator(d) {
  if (d == "" || d < 1 || d > 100) {
    return false;
  } else {
    return true;
  }
}

// validates if the percentage of any grade is valid
function validatePercentage(p) {
  if (p == "" || p < 1 || p > 100) {
    return false;
  } else {
    return true;
  }
}

// calculates and display the mean of the grades if input are correct
function mean() {
  // set the variables to 0
  var numerator = [];
  var denominator = [];
  var grade = [];
  var sum = 0;
  var mean = 0;

  // collects data from the input boxes
  numerator[0] = document.getElementById("n0").value;
  numerator[1] = document.getElementById("n1").value;
  numerator[2] = document.getElementById("n2").value;
  numerator[3] = document.getElementById("n3").value;
  denominator[0] = document.getElementById("d0").value;
  denominator[1] = document.getElementById("d1").value;
  denominator[2] = document.getElementById("d2").value;
  denominator[3] = document.getElementById("d3").value;

  // checks if there is any input to calculate the mean
  var i, count = 0;
  for (i = 0; i < 4; i++) {
    // checks if the numerator is valid
    if (validateNumerator(numerator[i]) == true) {
      // checks if the denominator for the numerator is valid, it has to be bigger than or equal to the numerator
      if (validateDenominator(denominator[i]) == true && parseInt(denominator[i]) >= parseInt(numerator[i])) {
        grade[i] = parseInt(numerator[i]) / parseInt(denominator[i]); // calculates the grade
        sum += grade[i]; // adds up all the grades together
        count += 1; // counts how many grades are input
      }
      // the denominator is not valid or missing
      else {
        // displays a message to check the denominator
        alert("Please check again the denominator(s) of the grades (0 - 100 and numerator <= denominator)");
        break; // stops the loop
      }
    }
    // as the numerator is not valid or missing, checks for a denominator
    else if (validateDenominator(denominator[i]) == true) {
      // displays a message to check the numerator
      alert("Please check again the numerator(s) of the grades (0 - 100)");
      break; // stops the loop
    }
    // as the grade is not valid or missing, checks if all the input boxes are checked
    else if (i == 3 && sum == 0) {
      // displays a message to check the inputs
      alert("Please check again the inputs for the grades (0 - 100)");
    }
  }
  // checks if the mean can be calculated or not
  if (i == 4 && sum != 0) {
    // calculates and displays the mean
    mean = (sum / count) * 100;
    document.getElementById("result").innerHTML = "Mean = " + mean + "/100";
  } else {
    // do not display anything for the result
    document.getElementById("result").innerHTML = "";
  }
}

// calculates and displays the weighted grade of the grades if input are correct
function weighted() {
  // set the variables to 0
  var percentage = [];
  var numerator = [];
  var denominator = [];
  var grade = [];
  var weightedGrade = [];
  var sum = 0;
  var sumPercentage = 0;
  var weighted = 0;

  // collects data from the input boxes
  percentage[0] = document.getElementById("p0").value;
  percentage[1] = document.getElementById("p1").value;
  percentage[2] = document.getElementById("p2").value;
  percentage[3] = document.getElementById("p3").value;
  numerator[0] = document.getElementById("n0").value;
  numerator[1] = document.getElementById("n1").value;
  numerator[2] = document.getElementById("n2").value;
  numerator[3] = document.getElementById("n3").value;
  denominator[0] = document.getElementById("d0").value;
  denominator[1] = document.getElementById("d1").value;
  denominator[2] = document.getElementById("d2").value;
  denominator[3] = document.getElementById("d3").value;

  // checks if there is any input to calculate the weighted grade
  var i;
  for (i = 0; i < 4; i++) {
    // checks if the percentage is valid
    if (validatePercentage(percentage[i]) == true) {
      // checks if the numerator is valid
      if (validateNumerator(numerator[i]) == true) {
        // checks if the denominator is valid, it has to be bigger than or equal to the numerator
        if (validateDenominator(denominator[i]) == true && parseInt(denominator[i]) >= parseInt(numerator[i])) {
          grade[i] = parseInt(numerator[i]) / parseInt(denominator[i]); // calculates the grade
          weightedGrade[i] = grade[i] * parseInt(percentage[i]); // calculates the weighted grade
          sum += weightedGrade[i]; // adds up all the weighted grades together
          sumPercentage += parseInt(percentage[i]); // adds up all the percentages together
        }
        // the denominator is not valid or missing
        else {
          // displays a message to check the denominator
          alert("Please check again the denominator(s) of the grades(0 - 100 and numrator <= denominator)");
          break; // stops the loop
        }
      } 
      // as the numerator is not valid or missing, checks if the denominator is valid
      else if (validateDenominator(denominator[i]) == true) {
        // displays a message to check the numerator
        alert("Please check again the numerator(s) of the grades (0 - 100)");
        break; // stops the loop
      }
      // the grade is not valid or missing
      else {
        // displays a message to check the grade
        alert("Please check again the grades (0 - 100)");
        break; // stops the loop
      }
    }
    // as the percentage is not valid or missing, checks if the numerator is valid
    else if (validateNumerator(numerator[i]) == true) {
      // checks if the denominator is valid, it has to be bigger than or equal to the numerator
      if (validateDenominator(denominator[i]) == true && parseInt(denominator[i]) >= parseInt(numerator[i])) {
        // displays a message to check the percentage
        alert("Please check again the percentage(s) of the grades (0 - 100)");
        break; // stops the loop
      }
      // the denominator is not valid or missing too
      else {
        // displays a message to check the percentage and denominator
        alert("Please check again the percentage(s) and denominator(s) of the grades (0 - 100 and numerator <= denominator)");
        break; // stops the loop
      }
    }
    // as the numerator is not valid or missing too, checks if the denominator is valid
    else if (validateDenominator(denominator[i]) == true) {
      // displays a message to check the percentage and numerator
      alert("Please check again the percentage(s) and numerator(s) of the grades (0 - 100)");
      break; // stops the loop
    }
    // as the inputs are not valid or missing
    else if (i == 3 && sum == 0) {
      // displays a message to check the inputs
      alert("Please check again the inputs for the percentages and the grades (0 - 100)");
    }
  }

  // checks if the weighted grade can be calculated or not
  if (i == 4 && sum != 0) {
    // calculates and displays the weighted grade
    weighted = (sum / sumPercentage) * 100;
    document.getElementById("result").innerHTML = "Weighted = " + weighted + "/100";
  } else {
    // do not display anything for the result
    document.getElementById("result").innerHTML = "";
  }
}
