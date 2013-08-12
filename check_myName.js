var text = "my name is Rancet \
            Rancet has a boy whose names is Jinhyoung \
            rancet's wife is Venice ";
            
var myName = "Rancet";
var hits = [];

for(var i=0; i < text.length ;i++){
    if (text[i] === "R") {
        for (var j = i; j < (myName.length + i); j++){
            hits.push(text[j]);
        }  
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);   
}
