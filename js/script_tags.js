const optArticleTagsSelector = '.post-tags .list';

function generateTags(){
  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    let newTagsListHTML = '';
    const articleTags = article.getAttribute('data-tags');
    const articleTagsArray = articleTags.split(' ');

    for(let tag of articleTagsArray){
      const linkHTML = '<li><a href="#tag-'+ tag +'">' + tag + '</a></li>\n';
      newTagsListHTML = newTagsListHTML + linkHTML;
    }

    const tagsList = article.querySelector('div.post-tags ul');
    tagsList.innerHTML = newTagsListHTML;
  }
}

generateTags();

function tagClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const tag = href.replace('#tag-','');
  const activeLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  let activeTagLinks = document.querySelectorAll("a[href='" + href + "']");

  for (let activeTagLink of activeTagLinks){
    activeTagLink.classList.add('active');
  }

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  const links = document.querySelectorAll('a[href^="#tag-"]');
  for(let link of links){
    link.addEventListener('click', tagClickHandler);
  }
}

addClickListenersToTags();
