let serial = 0;

function input(id) {
  const bField = document.getElementById(id);

  const newBFieldString = bField.value;
  const newBField = parseFloat(newBFieldString);

  bField.value = "";

  if (isNaN(newBField)) {
    return alert("Please give a int");
  } else if (newBField.toString().length != newBFieldString.length) {
    return alert(" please give a int");
  } else {
    if (newBField < 0) {
      return alert(" please give a int");
    } else {
      return newBField;
    }
  }
}

document.getElementById("btn-triangle").addEventListener("click", function () {
  const newBField1 = input("b-field");
  const newHField = input("h-field");

  const calculation = document.getElementById("btn-triangle");

  const result = 0.5 * newBField1 * newHField;

  if (isNaN(result)) {
    return;
  } else {
    serial++;
    const name = "Triangle";
    areaCal(result.toFixed(2), name);
  }
});

document.getElementById("btn-rectangle").addEventListener("click", function () {
  const newWField = input("w-field");
  const newLField = input("l-field");
  const calculation = document.getElementById("btn-rectangle");
  const result = newWField * newLField;

  if (isNaN(result)) {
    return;
  } else {
    serial++;
    const name = "Rectangle";
    areaCal(result.toFixed(2), name);
  }
});

document.getElementById("btn-para").addEventListener("click", function () {
  const newB1Field = input("b9-field");
  const newHField = input("h1-field");

  const calculation = document.getElementById("btn-para");

  const result = newB1Field * newHField;

  if (isNaN(result)) {
    return;
  } else {
    serial++;
    const name = "Parallelogram";
    areaCal(result.toFixed(2), name);
  }
});

document.getElementById("btn-rhombus").addEventListener("click", function () {
  const newD1Field = input("d1-field");
  const newD2Field = input("d2-field");

  const calculation = document.getElementById("btn-rhombus");

  const result = 0.5 * newD1Field * newD2Field;
  if (isNaN(result)) {
    return;
  } else {
    serial++;
    const name = "Rhombus";
    areaCal(result.toFixed(2), name);
  }
});

document.getElementById("btn-pentagon").addEventListener("click", function () {
  const newPField = input("p-field");
  const newB2Field = input("b2-field");

  const calculation = document.getElementById("btn-pentagon");

  const result = 0.5 * newPField * newB2Field;

  if (isNaN(result)) {
    return;
  } else {
    serial++;
    const name = "Pentagon";
    areaCal(result.toFixed(2), name);
  }
});

document.getElementById("btn-ellipse").addEventListener("click", function () {
  const newAField = input("a-field");
  const newB3Field = input("b3-field");

  const calculation = document.getElementById("btn-ellipse");

  const result = 3.1416 * newAField * newB3Field;

  if (isNaN(result)) {
    return;
  } else {
    serial++;
    const name = "Ellipse";
    areaCal(result.toFixed(2), name);
  }
});

function areaCal(totalResult, name) {
  const table = document.getElementById("table");
  const tr = document.createElement("tr");
  tr.innerHTML = `  &nbsp; <td>${serial} &nbsp;</td>
  <td> ${name} &nbsp; </td>
  <td> ${totalResult} cm <sup> 2 </sup> &nbsp;</td>
  <td> <button type="button" class="btn btn-primary my-2">Convert to m <sup>2 <sup></button> </td> `;

  table.appendChild(tr);
}

const bg = document.getElementsByClassName("background-hover");
for (const bg1 of bg) {
  bg1.addEventListener("mouseover", function () {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8);
    bg1.style.backgroundColor = color;
  });
}
