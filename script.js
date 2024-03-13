let age= prompt("votre âge ?");
     
if (age>=0 && age<=14) {
    alert("tu es un enfant!")
} 
else if (age>=15 && age<=24) {
    alert("Tu es un adolescent!")
} 
else if (age>=25 && age<=64) {
    alert("Vous êtes un adulte!")
}
else if (age>=65) {
    alert('Vous êtes un Ainé!')
}
else{
    alert('Error');
}
