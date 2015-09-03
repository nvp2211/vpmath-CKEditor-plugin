/**
 * Basic sample plugin inserting current date and time into CKEditor editing area.
 */

// Register the plugin with the editor.
// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.plugins.html
CKEDITOR.plugins.add( 'vpmath',
{
	// The plugin initialization logic goes inside this method.
	// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.pluginDefinition.html#init	
	init: function( editor )
	{
		var path = this.path;
		

		editor.addCommand( 'vpmathDialog', new CKEDITOR.dialogCommand( 'vpmathDialog' ) );


		// Create a toolbar button that executes the plugin command. 
		// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.ui.html#addButton
		editor.ui.addButton( 'Vpmath',
		{
			// Toolbar button tooltip.
			label: 'Insert equation',
			// Reference to the plugin command name.
			command: 'vpmathDialog',
			// Button's icon file path.
			icon: this.path + 'images/vpmath.png'
		} );		


		CKEDITOR.dialog.add( 'vpmathDialog', function( editor )
		{
			return {
				title : 'Insert Equation',
				minWidth : 518,
				minHeight : 300,
				contents :
				[
					{
						id: 'equation',
						label: 'Insert equation',
						title: 'Insert equation',
						elements: [
							{
								type : 'html',
								html : '<div id="group1" class="formula" style="clear:both; background-color:#ffffff; font-size:12px;">'
										  +'<div style="width:50px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										    +'<tr>'
											  +'<td style="height:30px; width:25px"><div id="fraction"><span><img src="'+path+'images/divide.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td>'
										   	  +'<td style="height:30px"><div id="squareRoot"><span><img src="'+path+'images/sqrt.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td>'
										   	+'</tr>'
										   	+'<tr>'
										   	  +'<td style="height:30px; width:25px"><div id="rfraction"><span><img src="'+path+'images/trenduoi.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td>'
										   	  +'<td style="height:30px"><div id="squareRootN"><span><img src="'+path+'images/sqrta.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td>'
										   	+'</tr>'
										  +'</table></div><div style="width:25px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'										  	
										   	  +'<tr><td style="height:30px"><div id="power"><span><img src="'+path+'images/somu.jpg" width=25px; height=25px; style="cursor:pointer"><span></div></td></tr>'
										   	  +'<tr><td style="height:30px"><div id="indices"><span><img src="'+path+'images/sub.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td></tr>'
										  +'</table></div><div style="width:50px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										   	  +'<td style="height:30px"><div id="ngoac"><span><img src="'+path+'images/ngoactron.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td>'
										   	  +'<td style="height:30px"><div id="ngoacVuong"><span><img src="'+path+'images/ngoacvuong.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										   	  +'<td style="height:30px"><div id="ngoacThang"><span><img src="'+path+'images/ngoacdung.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td>'
										   	  +'<td style="height:30px"><div id="ngoacNhon"><span><img src="'+path+'images/ngoacnhon.jpg" width=25px; height=25px; style="cursor:pointer"></span></div></td>'
										   	+'</tr>'
										  +'</table></div>'
										  +'<div style="width:40px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:13px; padding-left:7px"><div id="plus"><span class="mathquill-embedded-latex" style="font-size:16px">+</span></div></td>'
										  		+'<td style="height:20px; width:13px; padding-left:7px"><div id="minus"><span class="mathquill-embedded-latex" style="font-size:16px">-</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:13px; padding-left:7px"><div id="multiply"><span class="mathquill-embedded-latex" style="font-size:16px">x</span></div></td>'
										  		+'<td style="height:20px; width:13px; padding-left:7px"><div id="divide"><span class="mathquill-embedded-latex" style="font-size:16px">/</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:13px; padding-left:7px"><div id="plusMinus"><span class="mathquill-embedded-latex" style="font-size:16px">\\pm</span></div></td>'
										  		+'<td style="height:20px; width:13px; padding-left:7px"><div id="div"><span class="mathquill-embedded-latex" style="font-size:16px">\\div</span></div></td>'
										  	+'</tr>'
										  +'</table></div>'
										  //andf
										  +'<div style="width:50px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:20px; padding-left:5px"><div id="lonBang"><span class="mathquill-embedded-latex" style="font-size:16px">\\geq</span></div></td>'
										  		+'<td style="height:20px; width:20px; padding-left:5px"><div id="nhoBang"><span class="mathquill-embedded-latex" style="font-size:16px">\\leq</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:20px; padding-left:5px"><div id="thuoc"><span class="mathquill-embedded-latex" style="font-size:16px">\\in</span></div></td>'
										  		+'<td style="height:20px; width:20px; padding-left:5px"><div id="con"><span class="mathquill-embedded-latex" style="font-size:16px">\\subset</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:20px; padding-left:5px"><div id="union"><span class="mathquill-embedded-latex" style="font-size:16px">\\cup</span></div></td>'
										  		+'<td style="height:20px; width:20px; padding-left:5px"><div id="intersection"><span class="mathquill-embedded-latex" style="font-size:16px">\\cap</span></div></td>'
										  	+'</tr>'
										  +'</table></div>'
										  //asdf
										  +'<div style="width:40px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="epsilon"><span class="mathquill-embedded-latex" style="font-size:16px">\\varepsilon</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="lambda"><span class="mathquill-embedded-latex" style="font-size:16px">\\lambda</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="vocuc"><span class="mathquill-embedded-latex" style="font-size:16px">\\infty</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="delta"><span class="mathquill-embedded-latex" style="font-size:16px">\\Delta</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="pi"><span class="mathquill-embedded-latex" style="font-size:16px">\\pi</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="miu"><span class="mathquill-embedded-latex" style="font-size:16px">\\mu</span></div></td>'
										  	+'</tr>'
										  +'</table></div>'
										  //greek letters
										  +'<div style="width:60px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="a"><span class="mathquill-embedded-latex" style="font-size:16px">\\alpha</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="b"><span class="mathquill-embedded-latex" style="font-size:16px">\\beta</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="tau"><span class="mathquill-embedded-latex" style="font-size:16px">\\tau</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="g"><span class="mathquill-embedded-latex" style="font-size:16px">\\gamma</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="t"><span class="mathquill-embedded-latex" style="font-size:16px">\\theta</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="vp"><span class="mathquill-embedded-latex" style="font-size:16px">\\varphi</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="s"><span class="mathquill-embedded-latex" style="font-size:16px">\\sigma</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="o"><span class="mathquill-embedded-latex" style="font-size:16px">\\omega</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="deltaThuong"><span class="mathquill-embedded-latex" style="font-size:16px">\\delta</span></div></td>'
										  	+'</tr>'
										  +'</table></div>'
										  +'<div style="width:20px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="phiHoa"><span class="mathquill-embedded-latex" style="font-size:16px">\\Phi</span></div></td>'	
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="psi"><span class="mathquill-embedded-latex" style="font-size:16px">\\Psi</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="omegaHoa"><span class="mathquill-embedded-latex" style="font-size:16px">\\Omega</span></div></td>'
										  	+'</tr>'
										  +'</table></div>'
										  +'<div style="width:40px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:3px"><div id="bang"><span class="mathquill-embedded-latex" style="font-size:16px">\\=</span></div></td>'
										  		+'<td style="height:20px; width:17px><div id="tuongDuong"><span class="mathquill-embedded-latex" style="font-size:16px">\\equiv</span></div></td>'	
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:3px"><div id="sim"><span class="mathquill-embedded-latex" style="font-size:16px">\\sim</span></div></td>'
										  		+'<td style="height:20px; width:17px><div id="approx"><span class="mathquill-embedded-latex" style="font-size:16px">\\approx</span></div></td>'	
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:3px"><div id="simeq"><span class="mathquill-embedded-latex" style="font-size:16px">\\simeq</span></div></td>'
										  		+'<td style="height:20px; width:17px"><div id="neq"><span class="mathquill-embedded-latex" style="font-size:16px">\\neq</span></div></td>'	
										  	+'</tr>'
										  +'</table></div>'
										  //asdf
										   +'<div style="width:50px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:30px; width:45px; padding-left:5px"><div id="lim"; style="margin-top:5px"><span class="mathquill-embedded-latex" style="font-size:12px">\\lim_{x \\to \\infty}</span></div></td>'	
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:30px; width:45px; padding-left:5px"><div id="sum"><span class="mathquill-embedded-latex" style="font-size:16px">\\sum_{a}^{b}</span></div></td>'
										  	+'</tr>'										  	
										  +'</table></div>'
										  //asdf
										  +'<div style="width:30px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:30px; width:25px; padding-left:5px"><div id="int" style="margin-top:5px"><span class="mathquill-embedded-latex" style="font-size:16px">\\int</span></div></td>'	
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:30px; width:25px; padding-left:5px"><div id="log" style="margin-top:5px"><span class="mathquill-embedded-latex" style="font-size:16px">\\log</span></div></td>'
										  	+'</tr>'										  	
										  +'</table></div>'
										  //asdf
										  +'<div style="width:50px; height:60px; float:left; border-right:solid 1px #000;background-color:#ffffff"><table>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="leftarrow"><span class="mathquill-embedded-latex" style="font-size:18px">\\leftarrow</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="rightarrow"><span class="mathquill-embedded-latex" style="font-size:18px">\\rightarrow</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="leftarrowHoa"><span class="mathquill-embedded-latex" style="font-size:18px">\\Leftarrow</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="rightarrowHoa"><span class="mathquill-embedded-latex" style="font-size:18px">\\Rightarrow</span></div></td>'
										  	+'</tr>'
										  	+'<tr>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="leftrightarrow"><span class="mathquill-embedded-latex" style="font-size:18px">\\leftrightarrow</span></div></td>'
										  		+'<td style="height:20px; width:15px; padding-left:5px"><div id="leftrightarrowHoa"><span class="mathquill-embedded-latex" style="font-size:18px">\\Leftrightarrow</span></div></td>'
										  	+'</tr>'
										  +'</table></div>'										  
									   +'</div>'									   
									   +'</br>'
									   +'<div style="clear:both">'										  
										  +'<div><b>Enter function here:</b></div>'									
										  +'<div><span class="mathquill-editable" style="background-color:#fff;height:60px; width:100%"></span></div>'
									   +'</div>'									   
									   +'In case the symbols you need doesn\'t appear above, '
									   +'please prefer the latex code documentation<br>'
									   +'and add it to the latex source box below<br>'
									   +'http://en.wikibooks.org/wiki/LaTeX/Mathematics<br>'
									   +'Details: video here'
							},	
								{
								type : 'text',
								id : 'latex-source',
								// Text that labels the field.
								// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.ui.dialog.labeledElement.html#constructor
								label : 'Latex source',
								// Validation checking whether the field is not empty.
								validate : CKEDITOR.dialog.validate.notEmpty( 'The Displayed Text field cannot be empty.' ),
								// This field is required.
								required : true,
								// Function to be run when the commitContent method of the parent dialog window is called.
								// Get the value of this field and save it in the data object attribute.
								// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.dom.element.html#getValue
								commit : function( data )
								{
									data.equation = this.getValue();
								}
							},					
						]									
					},					
				],
				onLoad: function()
				{					
					$(document).ready(function(){							
						$('head').append('<link rel="stylesheet" href="' + path + 'mathquill-0.9.3/mathquill.css' +'" type="text/css" />');//<script src="'+ path +'mathquill-0.9.3/mathquill.min.js"></script>');						
						var s = document.createElement("script");
							s.type = "text/javascript";
							s.src = path + 'mathquill-0.9.3/mathquill.min.js';
							$("head").append(s);						


						var latexMath = $('.mathquill-editable'), latexSource = $('#cke_57_textInput');
											
						$(function() {
  latexMath.bind('keydown keypress', function() {
    setTimeout(function() {
      var latex = latexMath.mathquill('latex');
      latexSource.val(latex);
//      location.hash = '#'+latex; //extremely performance-crippling in Chrome for some reason
      htmlSource.text(printTree(latexMath.mathquill('html')));
    });
  }).keydown().focus();

  latexSource.bind('keydown keypress', function() {
    var oldtext = latexSource.val();
    setTimeout(function() {
      var newtext = latexSource.val();
      if(newtext !== oldtext) {
        latexMath.mathquill('latex', newtext);
        htmlSource.text(printTree(latexMath.mathquill('html')));
      }
    });
  });

  if(location.hash && location.hash.length > 1)
    latexMath.mathquill('latex', decodeURIComponent(location.hash.slice(1))).focus();
});

//print the HTML source as an indented tree. TODO: syntax highlight
function printTree(html) {
  html = html.match(/<[a-z]+|<\/[a-z]+>|./ig);
  if (!html) return '';
  var indent = '\n', tree = [];
  for (var i = 0; i < html.length; i += 1) {
    var token = html[i];
    if (token.charAt(0) === '<') {
      if (token.charAt(1) === '/') { //dedent on close tag
        indent = indent.slice(0,-2);
        if (html[i+1] && html[i+1].slice(0,2) === '</') //but maintain indent for close tags that come after other close tags
          token += indent.slice(0,-2);
      }
      else { //indent on open tag
        tree.push(indent);
        indent += '  ';
      }

      token = token.toLowerCase();
    }

    tree.push(token);
  }
  return tree.join('').slice(1);
}
						
						// var latexCode = latexMath.mathquill('latex');
						//       latexSource.val(latexCode);
						var begin = editor.getSelection().getSelectedText();
						if(begin !== ''){																							
							begin = begin.replace('$\\large ','');
							begin = begin.replace('$','');															
							latexSource.val(begin);
							latexMath.mathquill('write',begin).focus();													
						}																	

						//insert formula - common
						$('#fraction').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\frac{}{}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#squareRoot').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\sqrt{}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#rfraction').click(function(event) {
							$('.mathquill-editable').mathquill('write','^{}/_{}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#squareRootN').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\sqrt[]{}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#power').click(function(event) {
							$('.mathquill-editable').mathquill('write','^{}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#indices').click(function(event) {
							$('.mathquill-editable').mathquill('write','_{}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#ngoac').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\left(\\right)');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#ngoacVuong').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\left[\\right]');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#ngoacThang').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\left|\\right|');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#ngoacNhon').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\left\\{\\right\\}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#plus').click(function(event) {
							$('.mathquill-editable').mathquill('write','+');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#minus').click(function(event) {
							$('.mathquill-editable').mathquill('write','-');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#multiply').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\times');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#divide').click(function(event) {
							$('.mathquill-editable').mathquill('write','/');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#plusMinus').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\pm');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#div').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\div');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#lonBang').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\geq');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#nhoBang').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\leq');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#thuoc').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\in');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#con').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\subset');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#union').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\cup');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#intersection').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\cap');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#epsilon').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\varepsilon');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#lambda').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\lambda');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#vocuc').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\infty');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#delta').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\Delta');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#pi').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\pi');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#miu').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\mu');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#a').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\alpha');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#b').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\beta');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#tau').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\tau');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#g').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\gamma');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#t').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\theta');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#vp').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\varphi');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#s').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\sigma');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#o').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\omega');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#deltaThuong').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\delta');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#phiHoa').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\Phi');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#psi').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\Psi');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#omegaHoa').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\Omega');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#bang').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\=');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#tuongDuong').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\equiv');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#sim').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\sim');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#approx').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\approx');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#simeq').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\simeq');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#neq').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\neq');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#lim').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\lim_{a \\to b}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#sum').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\sum_{a}^{b}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#int').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\int_{a}^{b}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#log').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\log_{a}{b}');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#leftarrow').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\leftarrow');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#rightarrow').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\rightarrow');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#leftarrowHoa').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\Leftarrow');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#rightarrowHoa').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\Rightarrow');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#leftrightarrow').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\leftrightarrow');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
						$('#leftrightarrowHoa').click(function(event) {
							$('.mathquill-editable').mathquill('write','\\Leftrightarrow');
							var latex = latexMath.mathquill('latex');
						      latexSource.val(latex);
						});
					});
				},
				onShow : function()
				{
					var latexMath = $('.mathquill-editable'), latexSource = $('#cke_57_textInput');					
					var begin = editor.getSelection().getSelectedText();
						if(begin !== ''){																				
							begin = begin.replace('$\\large ','');
							begin = begin.replace('$','');								
							latexSource.val(begin).focus();						
							latexMath.mathquill('write',begin);
						}						

				},
				onOk : function()
				{
						// Create a link element and an object that will store the data entered in the dialog window.
					// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.dom.document.html#createElement
					var dialog = this,
						data = {},
						eq = '';//editor.document.createElement( 'eq' );
					// Populate the data object with data entered in the dialog window.
					// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.dialog.html#commitContent
					this.commitContent( data );
					//alert(data.equation);
					eq = '$\\large '+data.equation+'$';
					editor.insertText(eq);
					//editor.inserthtml( eq );
				}

			};
		});		


	}
} );

