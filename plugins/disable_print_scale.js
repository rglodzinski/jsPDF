/**
 * jsPDF Desable Print Scale Plugin
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

/**
 * Makes the PDF automatically disable pdf reader auto print scale. This works in Chrome, Firefox, Acrobat
 * Reader.
 *
 * @returns {jsPDF}
 * @name disablePrintScale
 * @example
 * var doc = new jsPDF()
 * doc.text(10, 10, 'This is a test')
 * doc.disablePrintScale()
 * doc.save('autoprint.pdf')
 */

(function (jsPDFAPI) {
				'use strict';
				jsPDFAPI.disablePrintScale = function () {
								'use strict'
								this
												.internal
												.events
												.subscribe('postPutResources', function () {
																this
																				.internal
																				.newObject()
																this
																				.internal
																				.write("/ViewerPreferences<</Duplex/Simplex/Enforce[/PrintScaling]/PrintScaling/None>>", "endobj");
												});
								return this;
				};
})(jsPDF.API);
