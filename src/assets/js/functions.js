function SaveMap(data, fileName){
    download(data, fileName, "json");
}

function LoadMap(){
    let result;
    let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
            // you can use this method to get file and perform respective operations
            let file = Array.from(input.files[0]);
            console.log(JSON.parse(file));
            result = file;
            /*if (file.name.match(/\.(json)$/)) {
                var reader = new FileReader();
        
                reader.onload = function() {
                    console.log(reader.result);
                };
        
                reader.readAsText(file);
                //console.log(reader);
            }
            else {
                alert("File not supported, .txt or .json files only");
            }*/
            //console.log()
        };
    input.click();
    return result;
    //console.log(input);
}

function LoadMap2(fileName){
    //let file = URL.createObjectURL(e.target.files[0])
    //var file = document.getElementById('jsonFile');
    //console.log(file);
    
    /*fetch(fileName)
        .then(response => response.json())
        .then(json => console.log(json));
    */
    
    /*console.log(fileName);
    var reader = new FileReader();

    reader.onload = function (e){
        document.getElementById('jsonFile').src = e.target.result;
    }

    reader.readAsDataURL(document.getElementById('jsonFile').files[0]);*/

    console.log(fileName);
    const selectedFile = document.getElementById('jsonFile').files[0];

    //console.log(fileName);
    //var test = document.getElementById("jsonFile").files[0].name;

    //var fReader = new FileReader();
    //fReader.readAsDataURL(test.files[0]);

}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}