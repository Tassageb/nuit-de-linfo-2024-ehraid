function showModalContent(id) {
	let modals = document.getElementById(id);
	modals.style = "";

	setTimeout(reRender, 100);
	function reRender() {
		modals.classList.add("show");
		modals.removeAttribute("inert");
	}


}

function closeModalContent(id) {
	let modals = document.getElementById(id);
	modals.classList.remove("show");
	modals.setAttribute("inert", "");

	setTimeout(noRender, 300);
	function noRender() {
		modals.style.display = "none";
	}

}

window.onload = function () {
	showModalContent('modal_1');
}