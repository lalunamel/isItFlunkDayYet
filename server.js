/* TODO: Add POST to flip isFlunkDayVariable */

var http = require("http");

var isFlunkDay = false;

var falseResponses = [
	"Nope, go back to sleep",
	"Nope, put your pants back on",
	"Nope, finish your homework",
	"Nope, Flunk Day is tomorrow",
	"Nope, put that bottle opener away",
	"Nope, keep looking for clues",
	"Nope, try again later",
	"Nope, the stars aren't in alignment",
	"Nope, try harder next time",
	"Nope ... nopenopenopenopenopenopenopenopenopenope",
	"Nope, Flunk Day is forever",
	"Nope, tomorrow is always Flunk Day",
	"Nope, Flunk Day does not exist",
	"Nope, it's just Pass Day today",
	"Nope, turn down your speakers",
	"Nope, stop dancing",
	"If you have to ask, it's not Flunk Day",
	"Nope, the trucks haven't arrived",
	"3...<br>2...<br>1...<br>Nope, it's still not Flunk Day",
	"Nope, go back to the WikiFire"
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function writeDocument(response) {
	response.write("<!doctype html><html><body>");
		response.write("<p style='font-family: \"Helvetica\", \"Arial\", sans-serif; font-size: 5em; text-transform: uppercase; font-weight: bold; margin: 0; padding: 0; color: rgb(25,25,25);'>");
			response.write(isFlunkDay ? "Yep, go party" : falseResponses[getRandomInt(0, falseResponses.length-1)]);
		response.write("</p>");
	response.write("</body></html>");
}

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  writeDocument(response);
  response.end();
}).listen(8888);