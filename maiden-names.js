const sampleData = require('./dataSchema')

const formatName =  function (data) {
    var yearsObj = {};
    // formats and organizes names
    data.map(alum => {

      // Assign all parts of the return data
      const year = alum[0]
      const first = alum[1]
      const nickname = alum[2]
      const maiden = alum[3]
      const last = alum[4]
      // Assign variable for formatted name
      var fName;

      // Creats a switch statement to format first, nickname, maiden and last into one name
      switch (true) {
        // First name & hyphenated Last Name
        case (first == nickname) && (last.includes("-")):
          fName = `${first} ${last}`;
          break;
        // First name & maiden name
        case (first == nickname) && (maiden == last):
          fName = `${first} ${last}`;
          break;
        // First name & married name
        case ((first == nickname) && (maiden != last)):
          fName = `${first} ${maiden} ${last}`;
          break;
        // Nick name & hyphenated last name
        case (first != nickname) && (last.includes("-")):
          fName = `${nickname} ${last}`;
          break;
        // Nick name & maiden name
        case (first != nickname) && (maiden == last):
          fName = `${nickname} ${last}`;
          break;
        // Nick name & married name
        case (first != nickname) && (maiden != last):
          fName = `${nickname} ${maiden} ${last}`;
          break;
        default:
          fName = "";
      }

      // Creates an object with years as keys, and an array of arrays containing [last name, formatted name]
      if (yearsObj[year]){
        yearsObj[year].push([last,fName])
      } else {
        yearsObj[year] = []
        yearsObj[year].push([last, fName])
      }

    })
    return yearsObj
  }

  console.log(formatName(sampleData));
