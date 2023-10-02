let counter = 0;

const btnLoadNews = document.getElementById('btnLoadNews');

const newsheader1 = document.getElementById('newsHeader1');
const newsheader2 = document.getElementById('newsHeader2');
const newsheader3 = document.getElementById('newsHeader3');
const newsheader4 = document.getElementById('newsHeader4');
const newsheader5 = document.getElementById('newsHeader5');
const newsheader6 = document.getElementById('newsHeader6');

const newsbrief1 = document.getElementById('newsBrief1');
const newsbrief2 = document.getElementById('newsBrief2');
const newsbrief3 = document.getElementById('newsBrief3');
const newsbrief4 = document.getElementById('newsBrief4');
const newsbrief5 = document.getElementById('newsBrief5');
const newsbrief6 = document.getElementById('newsBrief6');

const newsurl1 = document.getElementById('newsUrl1');
const newsurl2 = document.getElementById('newsUrl2');
const newsurl3 = document.getElementById('newsUrl3');
const newsurl4 = document.getElementById('newsUrl4');
const newsurl5 = document.getElementById('newsUrl5');
const newsurl6 = document.getElementById('newsUrl6');

//use AJAX to read JSON file
//-----------------------------
var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            newsFeed = JSON.parse(xhr.responseText);
        }
    }
xhr.open('GET', 'articles.json');
xhr.send();
//-----------------------------

function loadNews() {
            
        newsheader1.innerHTML = newsFeed[0].header;
        newsbrief1.innerHTML = newsFeed[0].brief;
        newsurl1.href = newsFeed[0].url;
        newsurl1.innerHTML = newsFeed[0].tag;

        newsheader2.innerHTML = newsFeed[1].header;
        newsbrief2.innerHTML = newsFeed[1].brief;
        newsurl2.href = newsFeed[1].url;
        newsurl2.innerHTML = newsFeed[1].tag;

        newsheader3.innerHTML = newsFeed[2].header;
        newsbrief3.innerHTML = newsFeed[2].brief;
        newsurl3.href = newsFeed[2].url;
        newsurl3.innerHTML = newsFeed[2].tag;
            
        newsheader4.innerHTML = newsFeed[3].header;
        newsbrief4.innerHTML = newsFeed[3].brief;
        newsurl4.href = newsFeed[3].url;
        newsurl4.innerHTML = newsFeed[3].tag;

        newsheader5.innerHTML = newsFeed[4].header;
        newsbrief5.innerHTML = newsFeed[4].brief;
        newsurl5.href = newsFeed[4].url;
        newsurl5.innerHTML = newsFeed[4].tag;

        newsheader6.innerHTML = newsFeed[5].header;
        newsbrief6.innerHTML = newsFeed[5].brief;
        newsurl6.href = newsFeed[5].url;
        newsurl6.innerHTML = newsFeed[5].tag;

    counter++;
};

btnLoadNews.addEventListener('click', loadNews);