const btnLoadNews = document.getElementById('btnLoadNews');
const newsFlash = document.getElementById('newsFlash');

let newsFeed = [];
var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            newsFeed = JSON.parse(xhr.responseText);
            loadNews();
        }
    }
xhr.open('GET', 'articles.json');
xhr.send();
let output =" ";
function loadNews() {
    let output = "";
    let numRows = Math.ceil(newsFeed.length / 3);
    let counter = 0;
    for(var i = 0; i < numRows; i++) {
        for(var j = 0; counter < newsFeed.length && j < 3; j++) { 
            //
            //Add ouput to newsFlash here
            //
            //output =+ '<div class="container"></div>'
            output += '<div class="col-sm-4">'  
            
            output += `<h3>${newsFeed[counter].header}</h3>`;
            output += `<p>${newsFeed[counter].brief}</p>`;
            output += `<a href="${newsFeed[counter].url}"target="blank">${newsFeed[counter].tag}</a>`;
            output += `</div>`
            counter++;
        }
    }

    newsFlash.innerHTML = output;
};