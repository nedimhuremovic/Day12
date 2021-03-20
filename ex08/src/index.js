var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: "12365495208",
    likes: ["C", "C++", "C#"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: "4568295761",
    likes: ["Phyton", "Swift", "R"],
  },
  {
    firstName: "Richard",
    lastName: "Roe",
    number: "6938257149",
    likes: ["React", "Angular", "Vue"],
  },
  {
    firstName: "Jane",
    lastName: "Roe",
    number: "unknown",
    likes: ["Javascript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  var person=0;
  var stuf=0;
  for (var i = 0; i < contacts.length; i++) {
    //console.log(contacts[i].firstName);
    if (contacts[i].firstName === name) {
      person = i;
    }
  }
    if (person == undefined) return "No such contact";
  for (var i = 0; i < contacts[person].length; i++) {
    if (contacts[person][i] === prop) {
      stuf = i;
    }
  }
  
  if (stuf == undefined) return "No such property";
  else return contacts[person].stuf;
  // Only change code above this line
}
console.log(lookUpProfile("John", "lastName"));
module.exports = lookUpProfile;
