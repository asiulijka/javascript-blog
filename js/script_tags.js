const optArticleTagsSelector = '.post-tags .list';
const optTagsListSelector = '.tags.list';
const optCloudClassCount = 5;
const optCloudClasssPrefix = 'tag-size-';

function calculateTagsParams(tags){
  const params = {max: 0, min: 999999};

  for(let tag in tags){
    // console.log(tag + ' is used ' + tags[tag] + ' times');

    if(tags[tag] > params.max){
      params.max = tags[tag];
    }

    if(tags[tag] < params.min){
      params.min = tags[tag];
    }
  }

  return params;
}


function calculateTagClass(count, params){
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);

  return (optCloudClasssPrefix + classNumber);
}


function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    let newTagsListHTML = '';
    const articleTags = article.getAttribute('data-tags');
    const articleTagsArray = articleTags.split(' ');

    for(let tag of articleTagsArray){
      const linkHTML = '<li><a href="#tag-'+ tag +'">' + tag + '</a></li>\n';
      newTagsListHTML = newTagsListHTML + linkHTML;
      // console.log(newTagsListHTML);

       /* [NEW] check if this link is NOT already in allTags */
       if(!allTags[tag]){
      /* [NEW] add tag to allTags object */
         allTags[tag]=1;
       }else{
         allTags[tag]++;
       }

    }

    const tagsList = article.querySelector('div.post-tags ul');
    tagsList.innerHTML = newTagsListHTML;
  }

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');


    /* [NEW] create variable for all links HTML code */
    const tagsParams = calculateTagsParams(allTags);
    // console.log('tagsParams:', tagsParams);
    let allTagsHTML = '';


// 22.04 changes to include function calculateTagClass
    /* [NEW] START LOOP: for each tag in allTags: */
    // for(let tag in allTags){
    //   /* [NEW] generate code of a link and add it to allTagsHTML */
    //   const leftTag = tag + ' (' + allTags[tag] + ') ';
    //   const linkHTML = '<li><a href="#tag-'+ tag +'">' + leftTag + '</a></li>\n';
    //   allTagsHTML = allTagsHTML + linkHTML;
    // }
/* [NEW] END LOOP: for each tag in allTags: */

for(let tag in allTags){
  // const leftTag = tag + ' (' + allTags[tag] + ') ';

// const tagLinkHTML = calculateTagClass(allTags[tag], tagsParams);
  const tagLinkHTML = '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag +'">' + tag + '</a></li>\n';
  // console.log('tagLinkHTML:', tagLinkHTML);

    allTagsHTML += tagLinkHTML;

}


    /*[NEW] add HTML from allTagsHTML to tagList */
     tagList.innerHTML = allTagsHTML;
     // console.log(allTags);
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
