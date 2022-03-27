function rookTop(a,b){
    let myArr=[];
      for(let i=b;i<9;i++){
          myArr.push([a,i])
      }
      myArr.shift()
      return myArr;
      
  }
  function rookBottom(g,h){
    let arr=[];
      for(let i=h;i>=1;i--){
         arr.push([g,i]);
      }
      arr.shift();
      return arr;
  }
  function rookRight(u,k){
    let additionalArr=[];
      for(let i=u;i<9;i++){
          additionalArr.push([i,k]);
      }
      additionalArr.shift();
      return additionalArr;
  }
  function rookLeft(j,k){
    let theArr=[];
      for(let u=j;u>0;u--){
          theArr.push([u,k]);
      }
      theArr.shift();
      return theArr;
  }
  
  function cordinateExists(arr, a, b) {
    if (a > 8 || a < 0 || b > 8 || b < 0) {
      return false;
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === a && arr[i][1] === b) {
        return true;
      }
    }
  
    return false;
  }
  function possibleRookCoordinates(l,m){
  
    let finalArr=[...rookBottom(l,m),...rookLeft(l,m),...rookRight(l,m),...rookTop(l,m)];
    return finalArr;
     
    }
    function func(x, y) {
      console.log(x, y);
      let root = document.getElementById("root");
      removeAllChildNodes(root);
      root.appendChild(chessBoard(x, y));
    }
    
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
    //create a single div 
    function cell(c, x, y, p = false, validco) {
      let div = document.createElement("div");
      div.classList.add("damn", "parentCont");
      div.style.backgroundColor = c;
    
      if (p) {
        let img = document.createElement("img");
       img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOxBgsD4riWgYADyBwDeBFgXOSPCcmd9_7g&usqp=CAU";
        img.style.height = "100%";
        img.setAttribute("alt", "the img");
        div.appendChild(img);
    
        return div;
      }
      if (cordinateExists(validco, x, y)) {
        let img = document.createElement("img");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubeopVZj3hsjAPFRLiW29q7vlfuBeEa14Kg&usqp=CAU";
        img.style.height = "100%";
        img.setAttribute("alt", "the img");
        div.appendChild(img);
        div.setAttribute("onclick", `func(${x},${y})`);
        return div;
      }
    
      return div;
    }
    function chessBoard(x, y) {
      let parentCont = document.createElement("div");
      parentCont.classList.add("parentCont");
      let cont = document.createElement("div");
    
      let k = 1;
      var validCo = possibleRookCoordinates(x, y);
      for (var i = 1; i < 9; i++) {
        let row = document.createElement("div");
        let col = document.createElement("div");
        col.classList.add("cont");
        for (var j = 1; j < 9; j++) {
          let c = "white";
          if (k % 2 === 0) c = "black";
          if (x === i && y === j) {
            //cell(c, x, y, p = false, validco)
            col.appendChild(cell(c, i, j, true, validCo));
          } else {
            col.appendChild(cell(c, i, j, false, validCo));
          }
          k++;
          row.appendChild(col);
        }
        k++;
        cont.appendChild(row);
      }
      parentCont.appendChild(cont);
      return parentCont;
    }
    
    document.getElementById("root").appendChild(chessBoard(1,1));
    