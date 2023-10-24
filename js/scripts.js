
function drawRow(){
  const row = document.createElement('div')
  row.classList.add("row")

  for (let x = 0; x < 16; x++){
    div = createBox()
    row.appendChild(div)

    div.addEventListener('mouseover', function (e){
      e.target.style.background = "black";
    })
  }
  const container = document.getElementById("container")
  container.append(row)
}

function createBox(){
  const div = document.createElement('div')
  div.classList.add("square")
  return div
}


for (let x = 0; x < 16; x++){
  drawRow()
};
