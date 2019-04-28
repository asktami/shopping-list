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
QUESTIONS:

 1. WHICH is the correct enclosing code for jQuery
	 $(document).ready(function() {
	 ...
	});

OR
	$(function() {...});


2. WHEN do you do:

 	function fName () { }
 	fName();

 VS.

 	function fName () {
	 $('.selector').on('click', function (event) {
		...
	 });
  	}
 	$(fName);


 VS.

	 $(function() {...});

*****************************
*/

$(function() {
	// add item
	$('#js-shopping-list-form').submit(event => {
		// stop the default form submission behavior
		event.preventDefault();

		// capture item submitted
		let item = $(this)
			.find('input[name="shopping-list-entry"]')
			.val();

		// clear input value
		$('#shopping-list-entry').val('');

		$('ul.shopping-list').append(`<li>
					<span class="shopping-item">${item}</span>
					<div class="shopping-item-controls">
						<button class="shopping-item-toggle">
							<span class="button-label">check</span>
						</button>
						<button class="shopping-item-delete">
							<span class="button-label">delete</span>
						</button>
					</div>
				</li>`);
	});

	// check/uncheck item
	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		$(this)
			.closest('div')
			.prev()
			.toggleClass('shopping-item__checked');
	});

	// delete item
	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
		$(this)
			.closest('li')
			.remove();
	});
});
