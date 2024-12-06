
const upgradesDiv = {
	"boat": [],
	"pipe": [],
};
const nameUpgrade = {
	"boat_small": "Petit bateau",
	"boat_mid": "Bateau moyen",
	"boat_big": "Gros bateau",
	"factory_small": "Petite usine",
	"factory_mid": "Usine moyenne",
	"factory_big": "Grosse usine",
	"waste": "Déchets",
	"waste_nuk": "Déchets nucléaires",
};
const idUpgrade = {
	"boat_small": "img-boat_small",
	"boat_mid": "img-boat_mid",
	"boat_big": "img-boat_big",
	"factory_small": "img-factory_small",
	"factory_mid": "img-factory_mid",
	"factory_big": "img-factory_big",
	"waste": "img-waste",
	"waste_nuk": "img-waste_nuk",
};
const coastUpgrade = {
	"boat_small": 30,
	"boat_mid": 100,
	"boat_big": 250,
	"factory_small": 200,
	"factory_mid": 400,
	"factory_big": 600,
	"waste": 500,
	"waste_nuk": 1000,
};
const nbrFishToAddForUpgrade = {
	"boat_small": 1,
	"boat_mid": 3,
	"boat_big": 7,
	"factory_small": 2,
	"factory_mid": 5,
	"factory_big": 8,
	"waste": 20,
	"waste_nuk": 100,
};

const delayEffectUpgrade = {
	"boat_small": 750,
	"boat_mid": 1000,
	"boat_big": 2000,
	"factory_small": 750,
	"factory_mid": 1000,
	"factory_big": 1500,
	"waste": 8000,
	"waste_nuk": 10000,
};


function doubleConfirmationBuyUpgrade() {
	const confirmUpgrade = confirm("Êtes-vous sûr d'acheter cette amélioration ?");
	if (confirmUpgrade && confirm("Confirmez encore une fois !")) {
		return true;
	}
	return false;
}



/**
 * 
 * @param {*} elem l'élément sur lequel on a cliqué de l'upgrade
 */
function buyUpgradeIfPossible(elem) {
	const upgradeEffectType = elem.getAttribute("data-effect-type");
	const upgradeCost = coastUpgrade[upgradeEffectType];
	const upgradeEffectDelay = delayEffectUpgrade[upgradeEffectType];
	const nbrFishToAdd = nbrFishToAddForUpgrade[upgradeEffectType];

	if (score >= upgradeCost) {
		if (doubleConfirmationBuyUpgrade()) {
			for (let child of elem.children) {
				if (child.tagName === "BUTTON") {
					child.innerHTML = "Acheté";
					child.disabled = true;
				}
			}

			alert("Amélioration achetée !");
			updateScore(-upgradeCost);


			document.getElementById(idUpgrade[upgradeEffectType]).style.visibility = "visible";
			setInterval(() => { // effet de l'upgrade
				updateScore(nbrFishToAdd);
			}, upgradeEffectDelay);
		}
	} else {
		//TODO modal pas assez d'argent
	}
}


upgradeButtons.forEach((button) => {
	elementP = button.parentElement;
	const upgradeEffectType = elementP.getAttribute("data-effect-type");
	const upgradeCost = coastUpgrade[upgradeEffectType];
	const upgradeEffectDelay = delayEffectUpgrade[upgradeEffectType];
	const nbrFishToAdd = nbrFishToAddForUpgrade[upgradeEffectType];

	elementP.querySelector("span").textContent = `${nameUpgrade[upgradeEffectType]} ${upgradeCost}🐠 pour +${nbrFishToAdd} 🐠 chaque ${upgradeEffectDelay / 1000}s`;
	button.addEventListener("click", () => {
		buyUpgradeIfPossible(button.parentElement);
	});
});