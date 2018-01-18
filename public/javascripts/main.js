window.onload = function() {

  /* -------------- USER STARTS GAME ---------------*/
  // Wait for user to start game

  /* -------------- INITIALIZE GAME ----------------*/
  // Attach handler to display country
  $(".land").mousedown(function(){
    // console.log('click!');
    // console.log('ID: ', this.id);
    // console.log('class: ', $("#" +this.id).attr("class"));
    // console.log('title: ', $("#" +this.id).attr("title"));

    // Display country name when event occurs
    document.getElementById('country-name').innerHTML = $("#" + this.id).attr("title");
  });

  // create an array of countries
  var countryPathsFromSVG = $(".land");
  console.log("$(\".land\")", countryPathsFromSVG);
  console.log('countryPathsFromSVG[4]: ', countryPathsFromSVG[4]);
  console.log('-------shiznits-------');
  console.dir(countryPathsFromSVG[4]);
  console.log("ID:", countryPathsFromSVG[4].attributes.id.nodeValue);
  console.log("class:", countryPathsFromSVG[4].attributes.class.nodeValue);
  console.log("Country Name:", countryPathsFromSVG[4].attributes.title.nodeValue);

  // var countries = [];

  var createCountryObject = function(countryPath, i, arr) {
    // console.log("countryPath: ", countryPath);
    console.log('----countyPath-----');
    console.dir(countryPath);
    // DEBUG Why do I need this? Why is 'countryPath' only an index.  Shouldn't map pass in each item of the array?
    var countryPathObj = countryPathsFromSVG[countryPath];
    // console.log("countryPathObj:", countryPathObj);
    //
    var country = {};
    country.id = countryPathObj.attributes.id.nodeValue;
    country.name = countryPathObj.attributes.title.nodeValue;
    country.attempts = 0;
    // console.log("country: ", country);
    return country;
  };

  console.log('countryPathsFromSVG[4]: ', countryPathsFromSVG[4]);
  console.log('typeof(countryPathsFromSVG[4]): ', typeof(countryPathsFromSVG[4]));
  console.log("typeof(countryPathsFromSVG): ", typeof(countryPathsFromSVG));
  console.log("-----Yodelleheehooo------");
  console.dir(countryPathsFromSVG[4]);
  var countries;
  countries = countryPathsFromSVG.map(createCountryObject);
  // console.log(countries);
  console.log("countries[3]: ", countries[3]);

  // Play start game sound

  // Play music
  // Start timer

  /* -------------- GAME LOOP ----------------------*/
  // while (countriesNotDoneArray has item)
    // select random country from countriesNotDoneArray
    // get click
    // if country clicked is in the countriesNotDoneArray
    // if user is correct, move country to done-array & increase number of attempts
    // make correct sound

    // if wrong, increase number of attempts
    // make incorrect sound
};


// {
//   name:
//   done:
//   numberOfAttempts:
// }
