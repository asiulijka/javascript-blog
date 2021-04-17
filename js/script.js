const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  clickedElement.classList.add('active');

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  const articleSelector = clickedElement.getAttribute("href");
  const targetArticle = document.querySelector(articleSelector);

  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}




const optArticleSelector = ".post",
      optTitleSelector = ".post-title",
      optTitleListSelector = ".titles";

function generateTitleLinks() {
  console.log("Funkcja generateTitleLinks została wykonana");

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */

    /* get the article id */
    /* find the title element */

    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles){
      const articleId = article.getAttribute('id');
      console.log(articleId);
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);
    }






    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

  generateTitleLinks();
