var friends = {

Bill: {
    firstName: 'Bill',
    lastName: 'Kim',
    number: '010-5555-9999',
    address: ['Nusnag', 'Jongno', 'Seoul', 'Korea'] },

Steve: {
  firstName: "Steve",
  lastName: "Lee",
  number: "010-5555-6666",
  address: ["Sajik", "Junggu", "Busan", "Korea"] }

};

var list = function(obj){
    for(var prop in obj){
    console.log(prop);    
    }
};

var search = function(name){
  for(var prop in obj){
  if (friends[prop].firstName === name) {
    console.log(friends[prop]);
    return  friends[prop];
  }
  }
};

list(friends);
search('Bill');
