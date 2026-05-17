const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const form = document.getElementById("form");
const invalideDate = document.getElementById("invalide-date");
const currentYear = new Date().getFullYear()
const jour = document.getElementById("jour");
const mois = document.getElementById("mois");
const annee = document.getElementById("annee");
     //--DAY--//
day.addEventListener("input", ()=>{
	const dayValue = Number(day.value);
	if(!day.value || dayValue < 1 || dayValue > 31){
		
setError(day) } 
  else { setSuccess(day) };

 
} );

       //--MONTH--//
month.addEventListener("input", ()=>{
	const monthValue = Number(month.value);
	if(!month.value || monthValue < 1 || monthValue > 12){
		
setError(month) } 
  else { setSuccess(month) };

 
} );
    //--YEAR--//
    
  year.addEventListener("input", ()=>{
	const yearValue = Number(year.value);
	if(!year.value || yearValue < 1 || yearValue > currentYear){
		
setError(year) } 
  else { setSuccess(year) };

 
} );
  



form.addEventListener("submit", (event)=>{
	event.preventDefault();
	dateValidation();
	ageReturn();
} );

function dateValidation(){
	const dayValue = Number(day.value);
	const monthValue = Number(month.value);
	const yearValue = Number(year.value);
	//----DAY----//
	const daysInTheMonth = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31] ;
  if (monthValue === 2 && (
(yearValue % 4 === 0 ) && (yearValue % 100 !== 0) || ( yearValue % 400 === 0))) {
    	daysInTheMonth[1] = 29 ;}
    

   
     if( dayValue > daysInTheMonth[ monthValue -1]) {
    	invalideDate.style.visibility ="visible" ;
ageReturn()
}
    
   else {invalideDate.style.visibility = "hidden" ;
   }
	//----MONTH----//
	
	//----YEAR----//
}


function setError(element){
	const parent = element.parentElement ;
	parent.classList.add("error");
}
function setSuccess(element){
	const parent = element.parentElement ;
	parent.classList.remove("error");
	
	
}

function ageReturn(){
	const dayValue = Number(day.value);
	const monthValue = Number(month.value);
	const yearValue = Number(year.value); 
	const now = new Date() ;
	let thisYear =  now.getFullYear();
	let thisMonth = now.getMonth();
	let today = now.getDate();
	let y = thisYear - yearValue ;
	let m = thisMonth - monthValue ;
	let d = today - dayValue ;
	
	if( m < 0 ){
       m +=  12 ;
       y-- ;
      }

	
	
	annee.innerText = y ;
	mois.innerText = m ;
	jour.innerText = d ;
	
	
	
	
	}