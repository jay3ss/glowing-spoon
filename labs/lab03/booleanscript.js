var isMale = true;
var isOld = true;
var isOldMan = isMale && isOld;
alert(isOldMan);

var isFemale = false;
isOld = true;
isOldMan = isFemale && isOld;
alert(isOldMan);

var isOldOrFemale = isFemale || isOld;
alert(isOldOrFemale);

isMale = !isFemale;

