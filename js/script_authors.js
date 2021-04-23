const optArticleAuthorSelector = '.post-author';
const optAuthorsListSelector = '.authors.list';

function generateAuthors(){

  let allAuthors = {};

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){
    const authorsWrapper = article.querySelector(optArticleAuthorSelector);
    let newAuthorListHTML = '';
    const articleAuthor = article.getAttribute('data-author');
    const linkHTML = '<li><a href="#author-'+ articleAuthor +'">' + articleAuthor + '</a></li>';
    newAuthorListHTML = newAuthorListHTML + linkHTML;

   if(!allAuthors[articleAuthor]){
     allAuthors[articleAuthor]=1;
   }else{
     allAuthors[articleAuthor]++;
   }

    const authorsList = article.querySelector('.post-author');
    authorsList.innerHTML = newAuthorListHTML;
  }

  const authorsList = document.querySelector('.authors');

  let allAuthorsHTML = '';

  for(let articleAuthor in allAuthors){
    const authorLinkHTML = '<li><a href="#author-' + articleAuthor + '">' + articleAuthor + ' (' + allAuthors[articleAuthor] + ')</a></li>\n';
    allAuthorsHTML += authorLinkHTML;
  }

  authorsList.innerHTML = allAuthorsHTML;
}

generateAuthors();

function authorClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');

  const author = href.replace('#author-','');

  const activeLinks = document.querySelectorAll('a.active[href^="#author-"]');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  let activeAuthorLinks = document.querySelectorAll("a[href='" + href + "']");

  for (let activeAuthorLink of activeAuthorLinks){
    activeAuthorLink.classList.add('active');
  }

  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){
  const links = document.querySelectorAll('a[href^="#author-"]');
  for(let link of links){
    link.addEventListener('click', authorClickHandler);
  }
}

addClickListenersToAuthors();
