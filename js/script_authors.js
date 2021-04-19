const optArticleAuthorSelector = '.post-author';

function generateAuthors(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const authorsWrapper = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let newAuthorListHTML = '';
    /* get tags from data-tags attribute */
    const articleAuthor = article.getAttribute('data-author');

    /* split tags into array */
    // const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    // for(let tag of articleTagsArray){
      /* generate HTML of the link */

      const linkHTML = '<li><a href="#author-'+ articleAuthor +'">' + "by " + articleAuthor + '</a></li>';

      // const linkHTML = '<li><a href="#tag-'+ tag +'">' + tag + '</a></li>\n';

      /* add generated code to html variable */
      newAuthorListHTML = newAuthorListHTML + linkHTML;
    /* END LOOP: for each tag */
    // }
    /* insert HTML of all the links into the tags wrapper */
    const authorsList = article.querySelector('.post-author');
    authorsList.innerHTML = newAuthorListHTML;
  /* END LOOP: for every article: */
  }
}

generateAuthors();

function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */

  const author = href.replace('#author-','');

  /* find all tag links with class active */
  const activeLinks = document.querySelectorAll('a.active[href^="#author-"]');
  /* START LOOP: for each active tag link */
  for(let activeLink of activeLinks){
    /* remove class active */
    activeLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  // let activeTagLinks = document.querySelectorAll('href');

  // ????
  let activeAuthorLinks = document.querySelectorAll("a[href='" + href + "']");
  /* START LOOP: for each found tag link */
  for (let activeAuthorLink of activeAuthorLinks){
    /* add class active */
    activeAuthorLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){
  /* find all links to tags */
  // const links = document.querySelectorAll('a[href="' + href + '"]');
  const links = document.querySelectorAll('a[href^="#author-"]');
  /* START LOOP: for each link */
  for(let link of links){
  /* add tagClickHandler as event listener for that link */
    // tagClickHandler(link);
    link.addEventListener('click', authorClickHandler);
  /* END LOOP: for each link */
  }

}

addClickListenersToAuthors();
