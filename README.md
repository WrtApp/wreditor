# Fraction.less Boilerplate

An HTML5/CSS3 boilerplate with a misleading name.

Fraction.less is geared toward web dev n00bs and the lazy. It places a heavy emphasis on using the [http://lesscss.org](Less CSS) language, provides some great and commonly used JavaScript libraries, gives a good base directory structure, and implements a very simple grid.

Despite the name, Fraction.less uses a grid that's totally about fractions. Instead of using columns like every other grid system, Fraction.less uses fractions within wrappers splitting the page up into halves, thirds, and quarters.

## Components

Fraction.less Boilerplate uses code from the following projects:

* jQuery Effects Library (1.6.4) - Minified and uncompressed dev versions included
* Normalize.css - Not a reset, a baseline to be modified
* 1140 CSS Grid - The heart of our Less-based grid system, modified with Less
* Less CSS - The Less stylesheet language
* Less.app - For those of you on a Mac, download the Mac branch to get this great compiler
* More as we add them...

# Usage

Setup is pretty easy and Fraction.less comes with some tools to help you test your development environment.

## Initial Setup

Download and extract the files to where you want to start developing or do a 
    git clone git://github.com/billpatrianakos/Fractionless-Boilerplate

At this point you have the option to run the server test. You may open the `/test/index.php` file directly or navigate to it in your browser (usually from `http://localhost/path/to/your/site). The test will just check to see if PHP is running on your computer. You can skip this altogether if you don't plan on using anything other than HTML, CSS, and JavaScript.

## The Grid

The Fraction.less grid is based on the 1140 Grid System. It works out of the box but you have the option of being able to change the widths of each class by modifying a few Less variables.

To use the grid, apply the `.full-width` class to any container elements. These will either hold content spanning the entire page width or a minimum of two smaller elements.

Always add the `.left` class to all elements you plan to line up in a row. All rows must add up to 1 thus you must be able to add simple fractions in your head.

The last element in each row will get a `.last` class so you don't mess up the layout.

Apply `.clearfix` to any `.full-width` elements that act up on you. In 90% of my tests, all layout issues could be solved with `.clearfix`.

## style.less

This is your main stylesheet. It imports the grid and normalize.css files. Imports will only work if you've compiled your Less files first which requires either the Less Ruby Gem, the Less compiler running on Node.js, or Less.app on Mac.

We've also included `less.js` for those who want to save compiling for later or want a quick way to experiment with Less.



### Usage Notes

Take heed of the following as there are some components of the boilerplate that need a bit of extra attention to work correctly.

**HTACCESS Files:**
The .htaccess file bundled with Fraction.less is named '1.htaccess'. The settings specified in this file will not take effect until you rename the file to simply '.htaccess'. Note that it has no characters before the dot (.). The reason for this is because most systems hide files without a name by default. Copying the contents of a folder with a hidden .htaccess file on a Mac or Windows system will only copy the non-hidden files to the new location. Be mindful of this after you've renamed the file and set up a testing or production environment.

The consequences of a non-existent .htaccess file include:
* No Chrome Frame for IE users
* Media playback errors (especially in Firefox) when using new HTML5 `<audio` and `<video>` tags.

### Credits

We have to give credit where credit is due. Thanks to all these folks who are by far much smarter and more talented that I.

Paul Irish - HTML5 Boilerplate - http://html5boilerplate.com
@andytlr - 1140 Grid System - http://cssgrid.net
Cloudhead - LESS dynamic stylesheet language - http://lesscss.org
Bryan Jone - LESS.app (Mac only) - http://incident57.com/less/
... and more coming soon.