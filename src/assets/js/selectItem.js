function selectTile(x, y, size){
    //alert(`Select tile ${x} ${y}`);
    //let tile = document.getElementsByClassName('items');//X[x*size+y];
    //let tile = document.getElementsByClassName('items')[x];//.getElementsByTagName('div')[y];//X[x*size+y];
    let tile2 = document.getElementsByClassName('items')[x].getElementsByTagName('div')[y].getElementsByTagName('div')[0];//X[x*size+y];
    //let i = tile.getElementsByClassName(tile);
    console.log(`Select tile ${x} ${y}`);
    console.log(tile2);
    //tile2.innerHTML = 'test';
}