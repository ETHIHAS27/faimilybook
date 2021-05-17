var images = ["TheFamilybook.jpg", "Dada.png","Amama.jpg","Nana.jpg","Mumya.png","My.jpg","Vinoothna.jpg"];
var names = ["Fmaily Book", "Rammoorthy","Radha","Ravinder","Soumya","Ethihas","Vinoothna"];
var i = 0;
var img = 0;
function family(){
   
   if(img <= 6){
      document.getElementById('family_member_image').src = images[img];
      document.getElementById('family_member_name').innerHTML = names[img];
      img = img + 1
   }
   else{
      img = 0
      document.getElementById('family_member_image').src = images[img];
      document.getElementById('family_member_name').innerHTML = names[img];
   }
   
}
