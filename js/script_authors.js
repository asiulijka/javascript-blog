const optArticleAuthorSelector = '.post-author';

function generateAuthors(){
  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){
    const authorsWrapper = article.querySelector(optArticleAuthorSelector);
    let newAuthorListHTML = '';
    const articleAuthor = article.getAttribute('data-author');
    const linkHTML = '<li><a href="#author-'+ articleAuthor +'">' + "by " + articleAuthor + '</a></li>';
    newAuthorListHTML = newAuthorListHTML + linkHTML;
    const authorsList = article.querySelector('.post-author');
    authorsList.innerHTML = newAuthorListHTML;
  }
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
