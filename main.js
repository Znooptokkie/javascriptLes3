let JSONdata = [];

window.addEventListener("load", function () {
  fetch(
    "https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json"
  )
    .then(klaarMetLaden)
    .then(laadData);
});

function klaarMetLaden(response) {
  return response.json();
}

function laadData(data) {
  JSONdata = data;
  console.log(JSONdata);
}
