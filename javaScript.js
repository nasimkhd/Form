var selectedPerson;

function addPerson(element) {
  var fname = document.getElementById("txtFname").value;
  var lname = document.getElementById("txtLname").value;

  if (element.value == "Add") {
    var person = document.createElement("tr");
    person.onmouseover = function () {
      this.style.backgroundColor = "white";
    };
    person.onmouseout = function () {
      this.style.backgroundColor = "thistle";
    };

    var chkCell = document.createElement("td");
    chkCell.innerHTML = "<input type='checkbox' onclick ='chkClick(this)' />";

    var fnCell = document.createElement("td");
    var fnNode = document.createTextNode(fname);
    fnCell.appendChild(fnNode);
    document.getElementById("txtFname").value = "";

    var lnCell = document.createElement("td");
    var lnNode = document.createTextNode(lname);
    lnCell.appendChild(lnNode);
    document.getElementById("txtLname").value = " ";

    var delLink = document.createElement("a");
    delLink.innerHTML = "Delete";
    delLink.href = "#";
    delLink.onclick = () => {
      delPerson(person);
    };
    var edit = document.createElement("a");
    edit.innerHTML = "Edit";
    edit.href = "#";
    edit.onclick = () => {
      editPerson(person);
    };

    var seperator = document.createTextNode(" | ");
    var opCell = document.createElement("td");
    opCell.appendChild(delLink);
    opCell.appendChild(seperator);
    opCell.appendChild(edit);

    person.appendChild(chkCell);
    person.appendChild(fnCell);
    person.appendChild(lnCell);
    person.appendChild(opCell);

    document.getElementById("tblPerson").appendChild(person);
  } else {
    selectedPerson.childNodes[1].innerHTML = fname;
    selectedPerson.childNodes[2].innerHTML = lname;
    selectedPerson.style.backgroundColor = "thistle";
  }
}
function delPerson(person) {
  document.getElementById("tblPerson").removeChild(person);
}

function editPerson(person) {
  selectedPerson = person;
  person.style.backgroundColor = "red";
  document.getElementById("txtFname").value = person.childNodes[1].innerHTML;
  document.getElementById("txtLname").value = person.childNodes[2].innerHTML;
  document.getElementById("btnAdd").value = "Modify";
}
function chkAll_click(chkAll) {
  var tbl = document.getElementById("tblPerson");
  if (chkAll.checked) {
    for (var i = 1; i < tbl.childNodes.length; ++i) {
      tbl.childNodes[i].childNodes[0].childNodes[0].checked = "checked";
    }
  } else {
    for (var i = 1; i < tbl.childNodes.length; ++i) {
      tbl.childNodes[i].childNodes[0].childNodes[0].checked = "";
    }
  }
}
function chkClick(chk) {
  var tbl = document.getElementById("tblPerson");
  if (!chk.checked) {
    document.getElementById("chkAll").checked = "";
  } else {
    for (var i = 1; i < tbl.childNodes.length; ++i) {
      if (tbl.childNodes[i].childNodes[0].childNodes[0].checked) {
        continue;
      } else {
        break;
      }
    }
    if (i == tbl.childNodes.length) {
      document.getElementById("chkAll").checked = "checked";
    }
  }
}
function deleteSelected() {
  var tbl = document.getElementById("tblPerson");
  var boxes = tbl.getElementsByTagName("input");
  for (var i = 1; i < boxes.length; ) {
    if (boxes[i].checked) {
      tbl.removeChild(boxes[i].parentNode.parentNode);
    } else ++i;
  }
}
