# featured-tags
small featured tags script for tumblr themes using v1 of the api

To use this in your theme, make sure you have your featured tags set up in your theme's HTML like this:

```HTML
<div class="featured-tags">
  {block:HasPages}
    {block:Pages}
      <a href="{URL}"><div><span class="tagname">#{Label}</span> <br><span class="total"></span></div></a>
    {/block:Pages}
  {/block:HasPages}
</div>
```
You will need to put the JS in a script tag and your CSS should go somewhere in your style tags in your theme.
If you would prefer, you can save the code as .css and .js files and upload them as theme assets instead. 

Keep in mind that the dashboard theme that uses this is incomplete, and this code is subject to be changed/refined as time goes on. I also did not include any specific CSS from the theme.

If you run into an issue, please let me know!
