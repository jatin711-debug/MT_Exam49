// SYST24444 Mid-Term Exam Script

$(document).ready(function() {
	console.log("in doc ready");

	$.ajax({type: "GET", url: "./mtdata/mtexam.json", 
					dataType: "json", success: mtQuestions});

}); // end of document ready

function mtQuestions(data) {
/* READ ALL QUESTION DATA CAREFULLY AND YOU MUST INCLUDE YOUR CODING WHERE INDICATED */

/* NOTE: MUST use jQuery to complete these questions; 
				 Use console.log() and the Chrome Developer Tools to help you debug your code  */



/* Question 01 (2 parts):
	 Part01: Using the private data from the JSON file, create the following
	 sentences in a <p> tags using Template Literals and put in the Question #1 output area 
	 in index.html on document load; BOLD all data from the JSON file (<strong> tags can be used); 

	  Sheridan Program: <Sheridan program from JSON> / Sheridan Campus: <Sheridan campus from JSON>
		Sheridan ID: <Sheridan student number from JSON> / Sheridan Username: <Sheridan username from JSON>
		My official Sheridan Name: <Full Name from JSON>
	 
	 <>s denote data that must come from the JSON file. You will have to look in JSON file to determine the data to pull

	 Part02: Create a CSS class (your choice of name) in the mtexam.css file that includes the following formatting:
	 - lightpink text colour
	 - darkblue background colour
	 - make font-size 1.25em

	 - Using jQuery, add the class formatting to the output area
*/  
const {PrivateP04,Inventory} = data;

/* ------------------ Include Q1 code here ----------------------*/
	$("#privateFacts").append(`
		<p>
				Sheridan Program: ${PrivateP04.sheridanProg}  / Sheridan Campus: ${PrivateP04.sheridanCampus}<br>
				Sheridan ID: ${PrivateP04.sheridanNumber} / Sheridan Username: ${PrivateP04.sheridanUsername}<br>
				My official Sheridan Name: ${PrivateP04.sheridanName}
		</p>
	`);$("#privateFacts").addClass('myClass');



/* ---------------------- end of Q1 ----------------------------*/
/* Question 02:
	Once the Question #2 button is clicked  (see index.html for button identification) create a click event and 
	display all data that matches the criteria stated in the button text (see index.html). 

	Include data that meets the criteria in a <section> tag and use Template Literals to build output.

	Bold all data pulled from JSON (except Image)
	Follow each line with a <hr> tag
	Display Image must be small (ex. width="30")

		Stock Area <stock area> includes plant <plant label> at a cost of <retail price> <display Image here>

	where <> denotes data to be pulled from the JSON file. You will need to look in the JSON file
	to find the corresponding data identifier (data shown in line above is not the exact data
	identifier from the JSON file but you should be able to determine which is the correct match. )

	Note: the <strong> tags can be used to bold text within a line
*/
/* ------------------ Include Q2 code here ----------------------*/
$("#areaCheck").click(()=>{
	$("#stockUl").html(" ");
	for(var i=0; i<Inventory.length; i++) {
		if(Inventory[i].stockArea == "CT551"){
			$("#stockUl").append(`
			<li>
			Stock Area <b>${Inventory[i].stockArea}</b> includes plant <b>${Inventory[i].plantLabel}</b> at a cost of <b>${Inventory[i].retailPrice}</b> <img src="../images/${Inventory[i].displayImg}"/>
			</li>
			<hr>
			`)
		}
	}
});
/* -------------------- end of Q2 code ------------------------*/
/* Question 03: 
	Once the Question #3 button is clicked (see index.html for button identification) create a click event and 
	highlight all list items in the Q3 search area list in HTML that matches the criteria stated in the button text 
	(see index.html). Must use jQuery formatting (does not have to toggle):

	Use CSS to highlight the selected list items specified to change the text colour to darkgreen and the background colour to lightyellow.

*/

/* ------------------ Include Q3 code here ----------------------*/
$("#anchorCheck").click(function(e){
	$("#includesAnchor li").has("a").css({"background-color":"lightyellow","color":'darkgreen'});
});

/* -------------------- end of Q3 code ------------------------*/


/* Question 04:
	Using the JSON data, list all the data specified below from the JSON file in the output area designated
	in index.html using jQuery (must use a for/of loop). Be sure to include data in the output structure format and
	use Template Literals to build output. 

	This following should be displayed on document load. Each line should include the following data:
		<Department>    <Plant Label>    <Price>

	where <> denotes data to be pulled from the JSON file. You will need to look in the JSON file
	to find the corresponding data identifier (data shown in line above may not be the exact data
	identifier from the JSON file but you should be able to determine which is the correct match.)
*/

/* ------------------ Include Q4 code here ----------------------*/
$(function() {
	for(let i=0 ;i < Inventory.length;i++){
	$("#listByDept").append(`
		<tr>
			<td> ${Inventory[i].departmentGroup} </td>
			<td> ${Inventory[i].plantLabel} </td>
			<td> ${Inventory[i].retailPrice} </td>
		</tr>
`)
}
})
/* ------------------    end of Q4 code     --------------------*/

	
}
