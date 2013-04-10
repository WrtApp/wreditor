/*:::::::: Wreditor scripts ::::::::*\
 * This file contains the code that *
 * controls Wreditor's front-end 	*
 * options and styling 				*
\************************************/


/*:::: Initizlize CodeMirror instance ::::*/

var myCodeMirror = CodeMirror(function(elt) {
	editor.parentNode.replaceChild(elt, editor);
	}, {
		mode: "markdown",
		value: editor.value,
		lineWrapping: true,
		indentUnit: 4,
		smartIndent: true,
		indentWithTabs: true,
		autoCloseBrackets: true,
		theme: "newplus"
	});


/*:::: Functions for dynamically changing settings ::::*/

// Theme switching
var input = document.getElementById("select");
function selectTheme() {
	var theme = input.options[input.selectedIndex].value;
	myCodeMirror.setOption("theme", theme);
}

// Turn line numbers on and off
$(document).ready(function() {
	$('#linesOn').click(function() {
		myCodeMirror.setOption("lineNumbers", true);
	});
	$('#linesOff').click(function() {
		myCodeMirror.setOption("lineNumbers", false);
	});
});


/*:::: Change the appearance of the editor ::::*/

// Make sure CodeMirror's container grows along with the editor
// This ensures the theme's background color reaches the bottom
// of the window.
$(document).ready(function(){
	resizeDiv();
});

window.onresize = function(event) {
	resizeDiv();
};

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('#main-container').css({'min-height': vph + 'px'});
}

// Match background of editor's container to current theme
var currentTheme = ["ambiance", "blackboard", "cobalt", "eclipse", "elegant", "eleganttype", "elegantcode", "monokai", "neat", "night", "newplus", "rubyblue", "twilight"];
$('#select').change(function() {
	for (var i = 0; i < 14; i++) {
		$('#main-container').removeClass(currentTheme[i]);
	}
	var editortheme = $('#select').val();
	$('#main-container').addClass(editortheme);
});

// Enter distraction-free mode
$(document).ready(function() {
	$('.distraction-free').click(function() {
		$('header').hide();
		$(this).addClass('hidden');
		$('.resize').removeClass('hidden');
	});
	$('.resize').click(function() {
		$('header').show();
		$(this).addClass('hidden');
		$('.distraction-free').removeClass('hidden');
	});
});

// Show or hide note settings when option button is clicked
$(document).ready(function() {
	$('.options').click(function() {
		$('.settings').toggle();
	});
});

// Save to local storage
$(document).ready(function() {
	$('.save').click(function() {
		if ($('.title').val() === "" || $('.title').val() === null)
			{
				var filename = 'Untitled.md';
			}
		else
			{
				var filename = $('.title').val() + '.md';
			}
		var content = myCodeMirror.getValue();
		var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
		saveAs(blob, filename);
	});
});
