var newsApiKey = 'a8e23af5dadd459e861cdd082b1242db';


var newsApp = document.querySelector('#news');
var newsInput = newsApp.querySelector('.news-input');
var newsForm = newsApp.querySelector('.news-form');
var newsButton = newsApp.querySelector('.get-news-button');
var headlines = newsApp.querySelector('.headlines');

var newSources =['cnn','bbc-news','buzzfeed','breitbart-news','business-insider','hacker-news','techcrunch','time','wired-de','reuters']

function newsFiller(source){
  var url=`https://newsapi.org/v1/articles?source=${source}&apiKey=${newsApiKey}`;
  return(
    fetch(url)
    .then(response =>response.json())
    .then(info => info)
  )
}
newsFiller(newSources[Math.floor(Math.random() * 10)]).then(info =>{
  console.log(info)
  for(var i = 0; i < 5; i++){

    var y = document.createElement('LI');
    var z = document.createElement('a');
    z.href= info.articles[i].url
    z.innerHTML = info.articles[i].title
    z.target ="_blank"
    y.appendChild(z)
    headlines.appendChild(y)
  }
})

function getNews(source){
  var url=`https://newsapi.org/v1/articles?source=${source}&apiKey=${newsApiKey}`;
  return(
    fetch(url)
    .then(response =>response.json())
    .then(info => info)
  )
}

newsForm.addEventListener('submit',function(event){
  event.preventDefault();
  var source = newsInput.value;

  getNews(source)
  .then(function(info){
    if(headlines.innerHTML ===""){
    }else{
      headlines.innerHTML =""
    }
    console.log(info)
    for(var i = 0; i < 5; i++){

      var y = document.createElement('LI');
      var z = document.createElement('a');
      z.href= info.articles[i].url
      z.innerHTML = info.articles[i].title
      z.target ="_blank"
      y.appendChild(z)
      headlines.appendChild(y)
    }
  })
})
