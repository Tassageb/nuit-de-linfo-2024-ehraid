function showModalContent(id) {
	let modals = document.getElementById(id);
	modals.style = "";

	setTimeout(reRender, 100);
	function reRender() {
		modals.classList.add("show");
		modals.removeAttribute("inert");
	}
}


function initConfirmModal(callback) {
	showModalContent('modal_confirm');
	document.querySelectorAll(".first-confirm").forEach(ff => {
		ff.style.visibility = "visible";
	});
	document.querySelectorAll(".second-confirm").forEach(sf => {
		sf.style.visibility = "hidden";
	});

	document.querySelector("#onclick-buy-confirm").onclick = () => {
		closeModalContent('modal_confirm');
		callback();
	};
}
function toSecondConfirmModal() {
	document.querySelectorAll(".first-confirm").forEach(ff => {
		ff.style.visibility = "hidden";
	});
	document.querySelectorAll(".second-confirm").forEach(sf => {
		sf.style.visibility = "visible";
	});
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