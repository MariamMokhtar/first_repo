function add(qty_id, price_id, total_id) {
  var tot = document.getElementById(qty_id).innerHTML;
  tot = parseInt(tot);
  tot = tot + 1;
  document.getElementById(qty_id).innerHTML = tot;
  calculateTotal(qty_id, price_id, total_id);
}

function sub(qty_id, price_id, total_id) {
  var tot = document.getElementById(qty_id).innerHTML;
  tot = parseInt(tot);
  if (tot <= 0) {
    return;
  } else {
    tot = tot - 1;
  }
  document.getElementById(qty_id).innerHTML = tot;
  calculateTotal(qty_id, price_id, total_id);
}

function del(id) {
  var tot = document.getElementById(id).remove();
}

function calculateTotal(qty_id, price_id, total_id) {
  var tot1 = document.getElementById(qty_id).innerHTML;
  tot1 = parseInt(tot1);
  var tot2 = document.getElementById(price_id).innerHTML;
  tot2 = parseInt(tot2);
  var tot3 = tot1 * tot2;
  console.log(tot3);
  document.getElementById(total_id).innerHTML = tot3;
}

function changeColor(love) {
  let heartElement = document.getElementById(love);

  if (heartElement.style.color == "black" || heartElement.style.color == "") {
    heartElement.style.color = "red";
  } else {
    heartElement.style.color = "black";
  }
}
