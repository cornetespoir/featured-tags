// setting this up as a vanilla JS alternative to jquery's getScript
function getScript(scriptUrl, callback, errors) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = callback;
    script.onerror = errors
    document.body.appendChild(script);
}
 
 // setting up the selectors for the featured tags and the total number of posts
 const featuredTags = document.querySelectorAll('.featured-tags a[href*="/tagged"]') 
 const totals = document.querySelectorAll('.featured-tags a[href*="/tagged"] .total')
 
  // get each tag
    featuredTags.forEach((tag, index) => {
    // grabs the url of the tag and removes everything except the tag name
        const tagged = tag.href.split('/tagged/')[1]
        let tagData;
        // gets the API link based on the tag name
        const tagUrl = `https://{name}.tumblr.com/api/read/json?tagged=${ tagged }`
        
        // when there are errors, change the tag's text to say it was not found
        function onErrors() {
           tag.innerHTML = `${ tagged } not found`
        }
        
        // when there are no errors and the script loads
        function onLoad() {
            // variable for the data
            tagData = tumblr_api_read;
            // total number of posts
            const total = tagData['posts-total']
            totals[index].innerHTML = total === '1' ?  `${ total } post` : `${ total } posts`
            // this is the placeholder for images on the left side of the tag's text
            const placeholder = document.createElement('div')
            placeholder.classList.add('placeholder')
            tag.prepend(placeholder)
            
            // if this is a legacy photo post
            if (tagData.posts[0]['photo-url-500'] != null) {
                const tagImg = document.createElement('img')
                tagImg.src = tagData.posts[0]['photo-url-500']
                placeholder.prepend(tagImg)
            }
            // if this is an NPF post
            if (tagData.posts[0].type === 'regular') {
              //inserts the NPF post html, the rest gets sorted out by CSS
                placeholder.innerHTML = tagData.posts[0]['regular-body']
            }
    }
        getScript(tagUrl, onLoad, onErrors);
    })
