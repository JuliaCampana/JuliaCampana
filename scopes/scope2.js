let locales = {
  europe: function() {          // The Europe continent's local scope
    let myFriend = "Monique";

    let france = function() {   // The France country's local scope
      let myFriend = 'james';
      let paris = function() {  // The Paris city's local scope
        //console.log(myFriend);
      };

      paris();
    };

    france();
    //console.log(myFriend);
  }
};
locales.europe();
console.log(myFriend);

