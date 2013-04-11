# Wreditor v0.1.1

Wreditor is the official editor used in Write.app as a standalone front-end.

## Project goals and philosophy

Make writing in the browser not suck. I believe that [browser based text editors should rival native counterparts](https://writeapp.me/writeapp/note/the-state-of-browser-based-text-editors). Wreditor will implement:

* Save on the fly (no page reloading, that's so 90's)
* Distraction-free view (focus on the writing, get the buttons out of the way)
* Full screen mode
* Live syntax highlighting
* Bracket completion
* Real tab indents
* Export to .txt, .md, .html, or .pdf
* Themes, color schemes, and other display options (font, font size, etc. but not too many)
* Must be a plain text editor (no formatting in the editor like TinyMCE, pure Markdown only but provide perfectly formatted output)
* Save text as UTF-8 always always always

## Usage

1. Clone this repository `git clone https://github.com/WrtApp/wreditor.git`
2. Connect the backend to whatever you want.
3. Open in a browser and enjoy!

### Simple server tool

Wreditor now comes with a handly little CLI tool that opens up a simple HTTP server. This currently only worked on Mac and Linux systems. It may work on Windows but is untested. To use this tool on a Mac simply double click the `start.command` file then open up a browser window and navigate to `http://localhost:8000`. From there you'll need to navigate to where you saved Wreditor. Putting Wreditor in your home folder will make things easier if you're not familiar with the file system. I'm working on making this much simpler and better. *Note: The simple server requires Python 2.7 or later to run.*

*More detailed instructions to come when this project has more than 1 commit...*

# Credits

The Newplus theme is a very slightly modified copy of Mou Night+ by Chen Luois, originally used in Mou (http://mouapp.com). Special thanks to Chen for allowing me to use it in this project.
