var dataProject = [];

function addProject(event) {
    event.preventDefault();

    let nama = document.getElementById("name").value;
    let start = document.getElementById("start-d").value;
    let end = document.getElementById("end-d").value;
    let message = document.getElementById("content").value;
    let upload = document.getElementById("upload").files[0];
    let uploadURL = URL.createObjectURL(upload);
    let cexbox = document.getElementById(".skill");


    if (nama === "") {
        return alert("Please entered your project name!")
    } else if (start === "") {
        return alert("Please entered your start date!")
    } else if (end === "") {
        return alert("Please entered your end date!")
    } else if (message === "") {
        return alert("Please fill the content")
    } else if (uploadURL === "") {
        return alert("Please upload your image!")
    } else if (cexbox === "") {
        return alert("Please choose")
    }


    if (start > end) {
        return alert("404 errorrrrrrrrrrrr start date tidak boleh lebih besar dari end date !!")
    }

    dataProject.push({
        nama: nama,
        start: start,
        end: end,
        message: message,
        upload: uploadURL,
        cexbox: cexbox,
    })

    console.log(dataProject);

    newData()
}

function newData() {
    document.getElementById("div-3").innerHTML = ""

    for (let i = 0; i < dataProject.length; i++) {
        const project = dataProject[i]


        document.getElementById("div-3").innerHTML += `
    <div id="div-3">
     <div id="card">
        <a href="./project.html"><img class="logo" src="${project.upload}" alt="dumbways"></a>
            <h2>${project.nama}</h2>
            <p class="duration">durasi 3 bulan</p>
            <p>${project.message}</p>
            <div>
                <img class="image" src="./asset/image/playstore.png" alt="playstore">
                <img class="image" src="./asset/image/android.png" alt="android">
                <img class="image" src="./asset/image/java.png" alt="java">
            </div>
            <div>
                <button class="edit" id="satu">edit</button>
                <button class="edit">delete</button>
            </div>
     </div>
     </div
    
    `
    }

}