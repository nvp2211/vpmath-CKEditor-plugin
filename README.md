# vpmath CKEditor plugin
Plugin for CKEditor 3 to input math formula easily and efficient.

#Demo
http://thanhanhiepthong.net/phunguyen/demo-vpmath/index.php

#Overview
This plugin is built and tested only with CKEditor 3 that comes with question2answer 1.6.3 flatform.

Current Version is 0.0.1a

This version is still missing some important math symbols such as matrix and the design is still messy.
This plugin is built base on:
- Mathquill. https://github.com/mathquill/mathquill
- Mathjax.   https://github.com/mathjax/MathJax

#Install
Note: The install instruction is for only question2answer flatform version 1.6.3
- Copy folder vpmath to question2answer/qa-plugin/wysiwyg-editor/plugins
- Replace line 147 of the file question2answer/qa-plugin/wysiwyg-editor/qa-wysiwyg-editor.php by "['RemoveFormat', 'Maximize', 'Vpmath']".
- Add to line 9 of the file question2answer/qa-plugin/wysiwyg-editor/config.js the following code: config.extraPlugins = 'vpmath';
- Insert to the header of every page the following code: 
\<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
\</script>
\<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
\</script>
- The above code is the link to the CDN of Mathjax and the configuration. For more information visit Mathjax website: https://www.mathjax.org/

#Usage
After successful install the plugin, you should see the Pi symbol button at the last postion of tools in the editor. Click on that button to input the formula then click OK button. The plugin will place a line of Latex code to the text editor, not the formula. After posting the post, Mathjax will take care that Latex code and display the formula.

Note: The Mathjax doesn't work in case using ajax. In this case you need to refresh the page to see the formula instead of LaTex code

