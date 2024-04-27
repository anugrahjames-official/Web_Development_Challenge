var person = {
    name: "Anugrah",
    age: 18,
    city: "Kannur",
    country: "India", 
    language: "Malayalam",
    display: function() {
        console.log(this.name + " " + this.age + " " + this.city + " " + this.country + " " + this.language)
    }
}

person.dob="08-11-2006"

//for (var key in person) {
  //  console.log(key + ": " + person[key])
//}

console.log(person)