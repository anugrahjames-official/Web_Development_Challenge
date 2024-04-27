function person(name,age,city,country,language){
    this.name = name
    this.age = age
    this.city = city
    this.country = country
    this.language = language
    this.display = function(){
        console.log(this.name + " " + this.age + " " + this.city + " " + this.country + " " + this.language)
    }
}

var Anugrah = new person("Anugrah", 18, "Kannur", "India", "Malayalam")
var Albin = new person("Albin", 17, "Kannur", "India", "Malayalam")

Anugrah.display()
Albin.display()