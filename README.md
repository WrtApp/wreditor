# Fraction.less Boilerplate

Fraction.less is an HTML5/CSS3 quick-start kit meant to be super easy to start with. Check out the grid classes and you can have a page layout in no more than 5 minutes!

Fraction.less comes with a simple, solid grid system, some common boilerplate styling, common jQuery plugin starting points (sliders, accordions, etc.), tons of HTML% boilerplate, and best of all, it takes advantage of the LESS stylesheet superset!

## Components

Fraction.less Boilerplate uses code from the following projects:

* jQuery 1.6.4 effect library
* Normalize.css CSS 'reset'
* LESS CSS stylesheet language
* Validate.js for client side form validation
* Vanity JS for common jQuery plugins
* Load.js script loader

# Usage

Setup is pretty easy and Fraction.less comes with some tools to help you test your development environment.

## Initial Setup

Download and extract the files to where you want to start developing or do a 
    git clone git://github.com/billpatrianakos/Fractionless-Boilerplate.git


## The Grid

The Fraction.less grid is based on the 1140 Grid System. It works out of the box but you have the option of being able to change the widths of each class by modifying a few Less variables.

To use the grid, apply the `.full-width` class to any container elements. These will either hold content spanning the entire page width or a minimum of two smaller elements.

Always add the `.left` class to all elements you plan to line up in a row. All rows must add up to 1 thus you must be able to add simple fractions in your head.

The last element in each row will get a `.last` class so you don't mess up the layout.

Apply `.clearfix` to any `.full-width` elements that act up on you. In 90% of my tests, all layout issues could be solved with `.clearfix`.

The grid is easily extensible but only ships with divisions from full-width to one-quarter. This is enough to get a layout working within 5 minutes and can be easily added to with intermediate sized columns if needed.

### style.less

This is your main stylesheet. It imports the grid and normalize.css files. Imports will only work if you've compiled your Less files first which requires either the Less Ruby Gem, the Less compiler running on Node.js, or Less.app on Mac.

We've also included `less.js` for those who want to save compiling for later or want a quick way to experiment with Less.

### Compiling your .less files

#### Using Less.js (The lazy way)

You can have your less files compile on the fly using less.js. This is not recommended for production. Use this in development mode only as the overhead necessary to download and parse less.js on the client side isn't worth it when you can compile .less directly to CSS using the methods below.

In the `index.html` file, uncomment the `<link>` tag referring to less.js file and make sure the path is set to the correct .less file. If you use this method you must take care to also link to `normalize.less` and `grid.less` or the grid system and reset will not work. The easy way to do this would be to use `@import` in your `style.less`.

#### Using Less.app

Mac users can search for and install Less.app which gives you an easy GUI interface app that watches for changes to .less files and compiles them automatically. UPDATE: A new Mac App called CodeKit is now available by the same developer as Less.app. It compiles LESS, CoffeeScript, does image optimization, concatenation, minification on all files, and more! It's free while in beta so check it out.

#### Using the Ruby Gem

First install the LESS gem using `you@computer$ gem install less`

#### Less Compiler via Node.js and NPM

Or you can get LESS if you've got node.js and npm using `you@computer$ npm install less`

To compile your less stylesheets run `you@computer$ cd /path/to/project/` making sure that you switch to the directory that holds your `/less` and `/css` directories. Then run the following command:

`you@computer$ lessc /less

### Usage Notes

Take heed of the following as there are some components of the boilerplate that need a bit of extra attention to work correctly.

_.htaccess Files_ - Fraction.less comes with a file named `bootstrap.htaccess`. On many systems hidden files are not included when pressing `Ctrl + A` then `Ctrl + C` to copy files between folders. To ensure this important file gets included in that situation we've named it. For it to work correctly you must rename it to simply `.htaccess`.

### Credits

I have to give credit where credit is due. Thanks to all these folks who are by far much smarter and more talented that I.

[http://html5boilerplate.com](Paul Irish) - HTML5 Boilerplate
[http://cssgrid.net](@andytlr) - 1140 Grid System
[http://lesscss.org](Cloudhead) - LESS dynamic stylesheet language
[http://incident57.com/less/](Bryan Jones) - LESS.app and CodeKit (Mac only)
[http://rickharrison.github.com/validate.js/](Rick Harrison) - validate.js, client side JavaScript validation library
[http://vanity.enavu.com/](Enavu Network) - Vanity JS common jQuery plugin starter kit
[https://github.com/chriso/load.js](ChrisO) - Load.js, a js lazyloader
... and more coming soon.

# License

Fraction.less Boilerplate is licensed under the Apache License 2.0. See the License.md file for details. This means you can use it however and wherever you want. You don't have to release any derivatives as open source and you are free to charge money for derived works. That's why I didn't go with the GPL. GPL kind of sucks...

# Roadmap

The following features will be implemented in upcoming releases:

* Add a basic favicon and apple touch icons
* Alternate/improved/better/new dependency management like YepNope.js
* Self-adjusting grid (using functions in LESS)
* Basic mailto script
* Customize `normalize.css` and `style.less` even more
* Build scripts and optimizers
* Typography styles
* Benchmarking tests
* Prettier 404
* General optimizations everywhere and time-savers

Contributors and suggetions welcome! bill-at-billpatrianakos-dot-me