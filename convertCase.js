// Nicky's Case Converter
// Author: Nicole Watson
// Date Completed: 12/05/18

"use strict";

window.onload = function() {

	const textArea = document.getElementById("textArea");

	// ***CHARACTER COUNTER*** (WITHOUT SPACES)
	var charName = document.getElementById("charName");
	var charCount = document.getElementById("charCount");
	var wordName = document.getElementById("wordName");
	var wordCount = document.getElementById("wordCount");

	const spacesToRemove = ["", " "];

	function dontCountCharSpaces() {
		textArea.addEventListener("input", function() {
			var chars = textArea.value.split("");
			var filteredChars = chars.filter(item => !spacesToRemove.includes(item));
			charCount.innerText = filteredChars.length;

			if (filteredChars.length == 0 || filteredChars.length > 1) {
				charName.innerText = "Characters:";
			}
			else 
				charName.innerText = "Character:";
		
			var words = textArea.value.split(" ");
			var filteredWords = words.filter(item => !spacesToRemove.includes(item));
			wordCount.innerText = filteredWords.length;

			if (filteredWords.length == 0 || filteredWords.length > 1) {
				wordName.innerText = "Words:";
			}
			else 
				wordName.innerText = "Word:";
		});
	}

	dontCountCharSpaces();

	// ***CHARACTER COUNTER*** (WITH SPACES)
	var spaceOption = document.getElementById("spaceOption");

	function countSpaces() {
		textArea.addEventListener("input", function() {
			var chars = textArea.value.split("");
			charCount.innerText = chars.length;

			if (chars.length == 0 || chars.length > 1) {
				charName.innerText = "Characters:";
			}
			else 
				charName.innerText = "Character:";

			var words = textArea.value.split(" ");
			var filteredWords = words.filter(item => !spacesToRemove.includes(item));
			wordCount.innerText = filteredWords.length;

			if (filteredWords.length == 0 || filteredWords.length > 1) {
				wordName.innerText = "Words:";
			}
			else 
				wordName.innerText = "Word:";
		});
	}

	spaceOption.addEventListener( "change", function() {
    	if (this.checked) {
       		countSpaces();
    	} else 
        	dontCountCharSpaces();
	});

	// ***UPPERCASE***
	var uppercase = document.getElementById("uppercase");
	function makeUppercase(str) {
		str.value = str.value.toUpperCase();
	}

	uppercase.addEventListener ("click", function() {
		makeUppercase(textArea);
	});

	// ***LOWERCASE***
	var lowercase = document.getElementById("lowercase");
	function makeLowercase(str) {
		str.value = str.value.toLowerCase();
	}

	lowercase.addEventListener ("click", function() {
		makeLowercase(textArea);
	});

	var sentenceCase = document.getElementById("sentenceCase");
	function makeSentenceCase(str) {
		var string = str.value;
		var newSentence = string.toLowerCase().replace(/(^\s*\w|[\?\.\!]\s*\w)/g,
			function(char) {
				return char.toUpperCase()
			});
		str.value = newSentence;
	}

	sentenceCase.addEventListener ("click", function() {
		makeSentenceCase(textArea);
	});

	// ***TITLE CASE***
	var titleCase = document.getElementById("titleCase");
	function makeTitleCase(str) {
		str.value = str.value.toLowerCase();
		var words = str.value.split(" ");

		for (var i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}
		str.value = words.join(" ");
	} 

	titleCase.addEventListener ("click", function() {
		makeTitleCase(textArea);
	});

	// ***ALTERNATING CASE***
	var alternating = document.getElementById("alternating");
	function makeAlternating(str) {
		str.value = str.value.toLowerCase();
		var chars = str.value.split("");

		for (var i = 0; i < chars.length; i+=2) {
			chars[i] = chars[i].toUpperCase();	
		}
		str.value = chars.join("");		
	} 

	alternating.addEventListener ("click", function() {
		makeAlternating(textArea);
	});

	// ***PASCAL CASE***
	var pascalCase = document.getElementById("pascalCase");
	function makePascalCase(str) {
		var words = textArea.value.split(" ");
		for (var i = 0; i < words.length; i++) {
			if (words[i] != "") {
				words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
			}
			else 
				words.pop();
		}
		str.value = words.join("");
	} 

	pascalCase.addEventListener ("click", function() {
		makePascalCase(textArea);
	});

	// ***HYPHEN CASE***
	var hyphenCase = document.getElementById("hyphenCase");
	function makeHyphenCase(str) {
		var words = textArea.value.split(" ");
		str.value = words.join("-");
	} 

	hyphenCase.addEventListener ("click", function() {
		makeHyphenCase(textArea);
	});

	// ***SNAKE CASE***
	var snakeCase = document.getElementById("snakeCase");
	function makeSnakeCase(str) {
		var words = textArea.value.split(" ");
		str.value = words.join("_");
	} 

	snakeCase.addEventListener ("click", function() {
		makeSnakeCase(textArea);
	});

	// ***SELECT ALL***
	var selectAll = document.getElementById("selectAll");
	function selectWords(str) {
		var words = str.value;
		words = str.select();
	} 

	selectAll.addEventListener ("click", function() {
		selectWords(textArea);
	});

	// ***CLEAR ALL***
	var clear = document.getElementById("clear");
	function clearWords(str) {
		str.value = "";
		str.focus();
	} 

	clear.addEventListener ("click", function() {
		clearWords(textArea);
		wordCount.innerText = textArea.value.length;
		charCount.innerText = textArea.value.length;
		charName.innerText = "Characters:";
		wordName.innerText = "Words:";
	});
}
