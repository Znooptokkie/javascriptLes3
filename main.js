// Met knoppen erbij elke keer 10 monsters laten zien, met de buttons van vorige les. datasetgit
let monster = [];

window.addEventListener("load", function () {
  fetch(
    "https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json"
  )
    .then((response) => response.json())
    .then(laadData);
});

function laadData(data) {
  monster = data;
  console.log(monster);
  const soort = "Dragon";
  for (let i = 0; i <= monster.length; i++) {
    // const naamVanSoort = monster[i].name.includes(soort);
    switch (true) {
      case monster[i].name.includes(soort):
        showMonster(monster[i]);
        break;
      // default:
      //   showMonster(monster[i]);
      //   break;
    }
  }
}

function showMonster(monster) {
  const monsterTemplate = document.getElementById("monster-template");
  const monsterArticle = monsterTemplate.content.cloneNode(true);
  monsterArticle.querySelector("h1.name").innerHTML = monster.name;
  monsterArticle.querySelector(
    "p.description"
  ).innerHTML = `${monster.size} ${monster.alignment} ${monster.type}`;
  ///
  const unorderedLijst = monsterArticle.querySelector("ul.actions");
  monster.actions.forEach((action) => {
    const lijst = document.createElement("li");
    lijst.innerHTML = action.name;
    unorderedLijst.appendChild(lijst);
  });

  ///

  document.body.appendChild(monsterArticle);
}
