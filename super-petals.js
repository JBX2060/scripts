// **WARNING**
// - This script makes it seem like you have petals that you actually don't.
//   Therefore, if you equip them or use them for crafting more than once, your account will be banned.
// - We do NOT recommend running the script outside of a guest account if you are not a ban speedrunner!
// - Don't forget that we do NOT have any responsibility for any damage to you caused by the script.

(async () => {

	const currentVersionHash = (await (await fetch("https://florr.io")).text()).match(/const\sversionHash\s=\s"(.*)";/)[1];
	if (currentVersionHash !== "0632b897e7ee99355108538ebb209d14758b218a") {
		console.error("VersionHash error (tell this to kit2d2 if broken on discord)");
		return;
	}

	const kMaxRarities = 8;
	const kMaxPetals = 80;
	const petalInventoryBaseAddress = 2092972;

	for (let petalIndex = 1; petalIndex <= kMaxPetals; petalIndex++) {
		for (let rarityIndex = 0; rarityIndex < kMaxRarities; rarityIndex++) {
			const offset = ((petalIndex * kMaxRarities + rarityIndex) << 2);
			Module.HEAPU32[(petalInventoryBaseAddress + offset) >> 2] = 1;
		}
	}

	console.log("success!");

})();
