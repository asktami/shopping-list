/*
 Your challenge is to create an application that allows users to add, check, uncheck, and remove items from a shopping list.

 To complete this challenge requires:

	Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.

	Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).

	Linking to your application JavaScript file from the index.html page.

	Using this and event delegation


	REQUIREMENTS

In terms of user experience, your shopping list app must allow users to:

    enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
    check and uncheck items on the list by clicking the "Check" button
    permanently remove items from the list

Additionally:

	You must use a CDN-hosted version of jQuery (done)

	Put your application code in a file called index.js and link to it in index.html (done)

	Be sure to put both script elements at the bottom of the <body> element. (done)

	Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features. (done)

    Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

*****************************

	USER STORIES (what the app should do):

    A shopping list should be rendered to the page
    You should be able to add items to the list
    You should be able to check & uncheck items on the list
    You should be able to delete items from the list

*****************************

QUESTIONS:

 1. WHICH is the correct enclosing code for jQuery
 // this waits for DOM to finish loading before running
	 $(document).ready(function() {
	 ...
	});

OR
// this doesn't wait for DOM to finish loading
// only use if NOT waiting for something to render on the page
// wraps all code in an anonymous function
	$(function() {...});


2. WHEN do you do:

vanilla JS declare then invoke:
 	function fName () { };
 	fName();

 VS.

 jQuery declare then invoke:
 	function fName () {
	 $('.selector').on('click', function (event) {
		...
	 });
  	};
 	$(fName);


 VS.

 jQuery declare & invoke anonymous function:
	 $(function() {...});

*****************************
*/

$(function() {
	// add item
	$('#js-shopping-list-form').submit(event => {
		// stop the default form submission behavior
		event.preventDefault();

		// CAPTURE INPUT VALUE SUBMITTED
		let item = $(this)
			.find('input[name="shopping-list-entry"]')
			.val();

		// ALTERNATIVE:
		// const item = $('.shopping-list-entry').val();

		// CLEAR INPUT FIELD
		$('#shopping-list-entry').val('');

		$('ul.shopping-list').append(
			`<li>
					<span class="shopping-item">${item}</span>
					<div class="shopping-item-controls">
						<button class="shopping-item-toggle">
							<span class="button-label">check</span>
						</button>
						<button class="shopping-item-delete">
							<span class="button-label">delete</span>
						</button>
					</div>
				</li>`
		);
	});

	// CHECK/UNCHECK ITEM
	// closest = travel up & get FIRST (single) ancestor, of selected element, starting with selected element
	// find = travel down & get all descendants, of selected element, NOT starting with selected element ?
	// children = travel down & get direct descendants, 1 single level down, of selected element, NOT starting with selected element ?
	// prev() = get immediately previous ancestor/parent of selected element

	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		$(this)
			.closest('div')
			.prev()
			.toggleClass('shopping-item__checked');
	});

	/* ALTERNATIVE
	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    	$(this)
    	.closest('li')
    	.find('.shopping-item')
    	.toggleClass('shopping-item__checked');
  	});
	  */

	// DELETE ITEM
	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
		$(this)
			.closest('li')
			.remove();
	});
});
