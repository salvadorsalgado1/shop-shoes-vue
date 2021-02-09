//Academic PDF

/*********************
* Global Constants
*********************/

var H1_FONT_SIZE = 18;
var H2_FONT_SIZE = 16;
var H3_FONT_SIZE = 14;
var MAX_Y = 600;		// to prevent a header being separated from its table. Adjust as needed.
var INIT_X = 30;
var INIT_Y = 10; 		// initial y value used in the text() function

// These are used to adjust vertical spacing (by modifying Y)
var SPACE_BEFORE_H2 = 11;
var SPACE_BEFORE_H3 = 7;
var SPACE_BEFORE_TABLE = 2;

// These two aren't actually constants; need to refactor them
var SPACE_BEFORE = -7;
var SPACE_AFTER = 10; 	// Space after table

var LIST_INDENT = 30;

/*********************
* End Global Constants
*********************/

/*********************
* Variables
*********************/

var doc;
var X = 0;
var Y = 0;
var lineHeight = 4; 	// amount to shift down next line (maybe it should be in constants)
var pageBuffer = false;	// used to determine if a new page should be added or not with the addition of new content

//var finalY = INIT_Y;

/*********************
* End Variables
*********************/

/*********************
* Begin Functions
*********************/

/* Function generate
*  This function is written to grab tables from an Academic Roadmaps page, along with other relevant information,
*  and add it to a PDF. In order to add this functionality to a page, add a button that calls this function.
*  Inputs: roadmap, the type of roadmap (either 'fr' for four year, or 'tr' for two-year transfer)
*  Outputs: Saves a PDF of the roadmap to downloads, generated from the page.
*/
function generate(roadmap) {
	
	initPage(); // we need to reset things, in case a PDF has been printed already

	doc = new jsPDF({unit: "px"});
	
	doc.setLanguage("en-US"); // set the language for accessibility requirements
	var tablesPerPage = 1;	// number of tables to put on each page/section

	// Extra code to handle headers and other relevant information (also allows getting table by roadmap type)
	doc.setFontSize(H1_FONT_SIZE);
	let programTitle = $('title').text().split('-', 1)[0];
	let roadmapTitle = $('h2.js-' + roadmap + '-title').text();
	
	addText(doc, `${programTitle}- ${roadmapTitle}`);
	years = $("a[class~=" + roadmap + "]");
	
	//delcare programTitle as our h1 tag of the current page example: BA: Anthropology
	let program = `${programTitle.replace(': ','-').toLowerCase().trim()}`;
	
	
	Y -= SPACE_AFTER;
	
	// Code to add content to the PDF
	// This selector grabs the correct section (either four year or two year) based on input.
	// Technically, the code doesn't restrict it to those, but roadmap will always be either 'fr' or 'tr'.
	$('.js-' + roadmap).children().each(function() {
		
		/*** Need to insert year info here ***/
		year = $(this).find("a[class~=" + roadmap + "]");
		//doc.setFontSize(SPACE_BEFORE_H2);
		//addText(doc, " ");

		// Need to set the line spacing and font size for addText()
		SPACE_BEFORE = SPACE_BEFORE_H2;
		doc.setFontSize(H2_FONT_SIZE);
		addText(doc, year.text().replace(/\s+/g, ' '));	// add Year information as header text
		//console.log($(years[counter/tablesPerPage]).text());

		Y -= SPACE_AFTER;

		$(this).find('.js-semester').each(function() {
			
			// Set spacing and font size
			SPACE_BEFORE = SPACE_BEFORE_H3;
			doc.setFontSize(H3_FONT_SIZE);
			addText(doc, $(this).find('h3').text());	// add header before table
			$(this).find('table').each(grabTable);		// finds the next table and adds it to the PDF
			
			// Add total units and milestones after table:
			// These need to be refactored to remove magic numbers
			SPACE_BEFORE = 1;
			doc.setFontSize(11);
			
			$(this).find("[class^='js-total-units']").each(function() {
				const unitText = $(this).find('p').text();
				
				if (unitText) {
					addText(doc, "Total Units: " + unitText);
					doc.previousAutoTable.finalY = undefined;
				}
			});
			
			addText(doc, "Milestones:");
			$(this).find("[class^='js-milestones']").children().each(function() {
				X += LIST_INDENT;
				
				addText(doc, "\u2022 " + $(this).text());
				X = (X < INIT_X) ? (X - LIST_INDENT) : INIT_X; 
				// to handle the case where we started a new page and reset X
			});
			
			newPage();
		});
	});

	//program consists of the title of the page, example: ba-anthropology.pdf
	doc.save(program);
}

/*********************
* Utility Functions
*	These are intended for extracting a table from HTML. 
*	They are general can be used anywhere they are needed.
*	(I.e. they don't rely on anything else in this file, except each other)
*********************/

/* grabTable
*  Function to extract information from an HTML table found by jQuery and add it to the PDF using AutoTable
*  This assumes only one header row. That is, it only works for simple tables.
*  Inputs: table, the jQuery object matching a table in the DOM
*  Outputs: none
*/
function grabTable(table) {
	var header, columns;
	header = getHeaderRow($(this).children('thead')); // this is an array
	columns = getColumns($(this).children('tbody'));  // this is a 2D array
	
	// add spacing to keep things from getting squashed
	Y += SPACE_BEFORE_TABLE;
	
	var finalY = doc.previousAutoTable.finalY;
	doc.autoTable({
		startY: Y + 5, //(finalY == undefined) ? finalY : finalY + 15,
		head: [header],
		pageBreak:'avoid',
		
		body: columns,
		// Default for all cells
		styles: {overflow: 'linebreak', cellWidth: 'wrap'},
		// Default for all columns
		bodyStyles: {cellWidth: 'auto'},
		columnStyles: {4: {minCellWidth: 20}, 6: {cellWidth: 20}},
	});
}

// Helper function for grabTable: grabs the header elements of the current table
function getHeaderRow(head) {
	var row = [];
	var c = 0;
	head.find('th').each(function() {
		// if we're on the fourth column, add tabs for spacing
		if(c++ == 4)
			row.push($(this).text() + "      " + "      ");
		else
			row.push($(this).text());
	});
	return row;
}

// Helper function for grabTable: gets the column data of the current table
function getColumns(body) {
	var rows = []; // holds each row of data
	body.children('tr').each(function() {
		var currRow = [];
		$(this).children('td').each(function() {
			currRow.push($(this).text());
		});
		rows.push(currRow);
	});
	return rows;
}

// Helper function for grabTable: gets the column data of the current row of the current table
function getBodyRow(row) {
	$(this).children('td').each(function() {
		rows.push($(this).text());
	});
}

// initializes global variables for page formatting
function initPage() {
	X = INIT_X;
	Y = INIT_Y;
}

// helper function to add a new page
function newPage() {
	pageBuffer = true;
}

// function to handle adding text to the page (formatting, etc.)
function addText(pdf, text) {
	
	if (pageBuffer)
	{
		doc.addPage();
		doc.previousAutoTable.finalY = undefined; 	// if this isn't set to undefined when adding a page, everything continues as if it were the same page
		initPage();
		Y -= SPACE_BEFORE_H2 + SPACE_AFTER;
		pageBuffer = false;
	}
	
	const lineHeight = pdf.getFontSize();
	Y = (pdf.previousAutoTable.finalY == undefined) ? (Y + lineHeight) : (pdf.previousAutoTable.finalY + 15);
	
	if (Y >= MAX_Y) {
		newPage();
		Y += SPACE_BEFORE_H2 + SPACE_AFTER;
	}
	
	Y += SPACE_BEFORE + SPACE_AFTER;
	
	pdf.text(text, X, Y);
}

function addListItem(pdf, text) {
	X += LIST_INDENT;
	addText(pdf, "- " + text);
	X -= LIST_INDENT;
}

/*********************
* End Utility Functions
*********************/


/*********************
* End Functions
*********************/
