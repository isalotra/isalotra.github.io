let togg1 = document.getElementById('project1');
let text_project1 = document.getElementById('text-project1');

let togg2 = document.getElementById('project2');
let text_project2 = document.getElementById('text-project2');

let togg3 = document.getElementById('project3');
let text_project3 = document.getElementById('text-project3');

let togg4 = document.getElementById('project4');
let text_project4 = document.getElementById('text-project4');

let togg5 = document.getElementById('project5');
let text_project5 = document.getElementById('text-project5');

let togg6 = document.getElementById('project6');
let text_project6 = document.getElementById('text-project6');

function text_appear(bouton, para){
	para.style.display = "none";

bouton.addEventListener("click", () => {
	if(getComputedStyle(para).display != "none"){
		para.style.display = "none";
	}
	else{
		para.style.display = "block";
	}
})
}
text_appear(togg1, text_project1);
text_appear(togg2, text_project2);
text_appear(togg3, text_project3);
text_appear(togg4, text_project4);
text_appear(togg5, text_project5);
text_appear(togg6, text_project6);
