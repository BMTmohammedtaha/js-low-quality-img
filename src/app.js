async function imgLow(img,attr){
    let response = await fetch(img);           
    let data = await response.blob();
    let imageFile = data;
    var reader = new FileReader();
    reader.onload = e =>{
        var img = document.createElement("img");
        img.onload = () =>{
            var canvas = document.querySelector("#canvas");
            var ctx = canvas.getContext("2d");
            ctx.width = 150;
            ctx.height = 150;
            ctx.drawImage(img, 0,0, 150, 150);
            var dataurl = canvas.toDataURL(imageFile.type);
            document.querySelector(attr).src = dataurl;
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(imageFile);
}

const image = document.querySelector('#img');
imgLow('src/img.jpg','#img');
