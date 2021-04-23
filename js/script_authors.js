const optArticleAuthorSelector = '.post-author';
const optAuthorsListSelector = '.authors.list';

function generateAuthors(){

  /* [NEW] create a new variable allAuthors with an empty object */
  let allAuthors = {};


  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){
    const authorsWrapper = article.querySelector(optArticleAuthorSelector);
    let newAuthorListHTML = '';
    const articleAuthor = article.getAttribute('data-author');
    const linkHTML = '<li><a href="#author-'+ articleAuthor +'">' + articleAuthor + '</a></li>';
    newAuthorListHTML = newAuthorListHTML + linkHTML;
console.log(newAuthorListHTML);
//

// /* [NEW] check if this link is NOT already in allAuthors */
// if(allAuthors.indexOf(linkHTML) == -1){
//   /* [NEW] add generated code to allAuthors array */
//   allAuthors.push(linkHTML);
// }

/* [NEW] check if this link is NOT already in allAuthors */
     if(!allAuthors[articleAuthor]){
/* [NEW] add author to allAuthors object */
       allAuthors[articleAuthor]=1;
     }else{
       allAuthors[articleAuthor]++;
     }




    const authorsList = article.querySelector('.post-author');
    authorsList.innerHTML = newAuthorListHTML;


  }

  /* [NEW] find list of authors in right column */
  const authorsList = document.querySelector('.authors');

  /* [NEW] add html from allTags to tagList */
  // authorsList.innerHTML = allAuthors.join(' ');

console.log(allAuthors);


/* [NEW] create variable for all links HTML code */
let allAuthorsHTML = '';

/* [NEW] START LOOP: for each tag in allTags: */
for(let articleAuthor in allAuthors){
  /* [NEW] generate code of a link and add it to allTagsHTML */
  // allAuthorsHTML += articleAuthor + ' (' + allAuthors[articleAuthor] + ') ';

const authorLinkHTML = '<li><a href="#author-' + articleAuthor + '">' + articleAuthor + ' (' + allAuthors[articleAuthor] + ')</a></li>\n';

allAuthorsHTML += authorLinkHTML;


//     const tagLinkHTML = '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag +'">' + tag + '</a></li>\n';
// // console.log('tagLinkHTML:', tagLinkHTML);
//
//       allTagsHTML += tagLinkHTML;



}
/* [NEW] END LOOP: for each tag in allTags: */

/*[NEW] add HTML from allTagsHTML to tagList */
authorsList.innerHTML = allAuthorsHTML;




//
// /* [NEW] create variable for all links HTML code */
//   const tagsParams = calculateTagsParams(allTags);
// // console.log('tagsParams:', tagsParams);
//   let allTagsHTML = '';


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
