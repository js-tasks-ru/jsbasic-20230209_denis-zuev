function makeDiagonalRed(table) {
  for(let i = 0; i < table.rows.length; i++){
    if (i < table.rows[i].children.length) {
      table.rows[i].children[i].style = 'background: red';
    }
  }

}
