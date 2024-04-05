// CS10 Grade Calculator

// Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let css1 = +document.getElementById("scripting").value;
  let sp1 = +document.getElementById("programming").value;
  let sp2 = +document.getElementById("structured").value;
  let css2 = +document.getElementById("client-side").value;
  let pA = +document.getElementById("project").value;

  // Process
  let total = css1 + sp1 + sp2 + css2 + pA * 5;

  // Output
  document.getElementById("output").innerHTML = total;
}
