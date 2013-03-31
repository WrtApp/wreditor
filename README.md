# Fraction.less Boilerplate v2.0b

Fraction.less is an HTML5/CSS3 quick-start kit meant to get sites or web apps designed and developed quickly. Using the grid classes lets you create a page layout in no more than a couple of minutes!

Fraction.less comes with a simple, solid, *responsive* grid system, some common boilerplate styling, common jQuery plugin starting points (sliders, accordions, etc.), just enough HTML5 boilerplate, and, best of all, it uses LESS.

I've tried to make this as flexible as possible while still providing a really comprehensive baseline for design and development. You may think Fraction.less is bloated in some areas and lacking in others. That's okay. The biggest challenge in creating a boilerplate/framework (whatever you want to call it) is loading it up with a comprehensive set of tools that encourage best practices without creating a bloated framework that people end up spending a lot of time removing stuff from up front.

If you have any ideas or suggestions for how to improve Fraction.less shoot me an email at __bill [at] chooseclever.com__. And please, use this, fork it, submit pull requests. I'm happy to give support to anyone who needs it and to include ideas from others.

## Components

Fraction.less Boilerplate uses code from the following projects:

* jQuery 1.9.1
* Normalize.css CSS 'reset'
* LESS CSS stylesheet language
* Parsley.js for client side form validation
* Vanity JS for common JS effects
* Test Suite references original projects within the Usage document

# Usage

Setup is pretty easy and Fraction.less comes with some tools to help you test your development environment.

## Initial Setup

Download and extract the files to where you want to start developing or do a
    git clone git://github.com/billpatrianakos/Fractionless-Boilerplate.git


## The Grid

The Fraction.less grid is based on the 1140 Grid System. It works out of the box but you have the option of being able to change the widths of each class by modifying a few LESS variables.

### Grid Usage

Basically, its like creating a layout with tables except without any tables. Your `<body>` is the canvas on which you create your grid.

You'll need to add the `.container` class to at least one element to start. This will become a container that holds your grid. It centers your elements and allows you to give an element a full screen-width background no matter how wide the browser window is while keeping your content at a max width of 1140px. I usually use `.container` to separate logical sections of my pages like the header, main content area, and footer and sometimes I use it to give different parts of pages different color backgrounds.

Next, use `.row` which will create an 1140px row in which you can put up to 12 columns in horizontally. You can have as many `.row`s as you want within a container and you can even nest rows within columns. If you add a background to a `.row` you'll notice it only spans a maximum width of 1140px.

Then, within your `.row`s you'll add columns. Column class names are just the number of columns they span. So within your row you can have any combination of columns like this:

```html
<section class="container">
	<div class="row">
		<div class="three">
			<p>My three column content</p>
		</div>

		<div class="two">
			<p>My two column content</p>
		</div>

		<div class="four">
			<p>My four column content</p>
		</div>

		<div class="three last">
			<p>My last column, which spans 3 columns and is the last in the row which adds up to 12</p>
		</div>
	</div>
</section>
```

The important things to notice here is that the column class names should **always** add up to 12 and that the very last column in a row needs to additionally have the `.last` class added to it or the layuot will fail to render properly. For those who have never seen an element with multiple classes, don't worry. It is perfectly acceptible to have multiple classes on the same HTML element. In fact, you can have as many as you want separated by spaces. It is not invalid markup at all. That said, its generally not a good idea to have elements with multiple classes everywhere unless its absolutely necessary. Best practices dictate only one class per element but it is not at all uncommon to see multiple classes per element. Just don't go crazy with this if this is a new concept to you.

Users of verion 1.0 will remember the `.full-width`, `.left`, `.right`, and column classes named after fractions. Those are gone and replaced with the new class names. If you've been using verion 1 please update your grid and restructure your HTML to align with the new grid (it really isn't that hard, I had to do it a few times myself - it just requires a quick find and replace and the addition of the `.row` element). The new grid is far more reliable, easy, and gives you a *working* responsive design.

### style.less

This is your main stylesheet. It imports the colors, grid, normalize.css (CSS reset), and other required files. Its best not to compile any of the LESS files except for `style.less` because each LESS file has dependencies upon the others. `style.less` will automatically import the other LESS files, and the resulting file will include the code from all the files in one single file, `style.css`. Please keep the order of imports in `style.less` the same as it is. Each successive file in the list depends on the successful compilation of the last for `style.less` to successfully compile. Changing the order of these files will cause compiles to fail. Feel free to add imports of your own making to the list, however.

__For those who have various problems with LESS__

You have three options:

* Use the precompiled CSS files (which is a pain because they're minified)
* Use `style.less` with already-compiled CSS files like `normalize.css` and the others
* Use the LESS files as-is without compiling them (allows you to either write LESS and use the code without compiling or lets you write normal CSS within the LESS files and still have them run)

We've included `less.js` for those who want to save compiling for later or want a quick way to experiment with Less. If you don't know much about LESS and want Fraction.less to work out of the box, just uncomment the line in the `index.html` file that has a `<link>` to the `less.js` file. This will solve most problems all three types of people above may have. *Please don't use `less.js` in production. On a live website it forces you to rely on JavaScript browser support AND slows page load times.*

#### Less.app

Fraction.less no longer includes [Less.app](http://incident57.com/less/). Less.app is great but this is a design framework and I'm trying to focus the project more. You can find a LESS compiler on your own (I use [CodeKit](http://incident57.com/codekit/) by the same developer as Less.app. It's great!). On Linux I use the Node package which is installed via NPM. But like I said, just Google around. LESS compilers are not hard to come by. Here are some good ones:

* [Less.app](http://incident57.com/less/) (Mac only)
* [CodeKit](http://incident57.com/codekit/) (Mac only)
* [Crunch](http://crunchapp.net/) (Win/Mac)
* [SimpleLESS](http://wearekiss.com/simpless) (Win/Mac/Linux)
* [Less Parser](http://www.proving-ground.be/less/) (Windows only - Basically a cloned version of LESS.app for Windows with permission from the original creator of LESS.app)

### Usage Notes

Take heed of the following as there are some components of the boilerplate that need a bit of extra attention to work correctly.

_.htaccess Files_ - Fraction.less comes with a file named `bootstrap.htaccess`. On many systems hidden files are not included when pressing `Ctrl + A` then `Ctrl + C` to copy files between folders. To ensure this important file gets included in that situation we've named it. For it to work correctly you must rename it to simply `.htaccess`.

### Credits

I have to give credit where credit is due. Thanks to all these folks who are by far much smarter and more talented that I.

* [Paul Irish and the HTML5 Boilerplate team](http://html5boilerplate.com) - HTML5 Boilerplate
* [@andytlr](http://cssgrid.net) - 1140 Grid System
* [Alex Sellier](http://lesscss.org) - LESS dynamic stylesheet language
* [Bryan Jones](http://incident57.com/less/) - LESS.app and CodeKit (Mac only)
* [Enavu](http://vanity.enavu.com/) - Vanity JS common jQuery plugin starter kit

... and many more I know I'm forgetting.

# License

Fraction.less Boilerplate is licensed under the BSD license. See the License.md file for details. This means you can use it however and wherever you want. You don't have to release any derivatives as open source and you are free to charge money for derived works. That's why I didn't go with the GPL. I'm not very fond of the GPL to say the least.

# Roadmap

The following features will be implemented in upcoming releases:

* Add a basic favicon and apple touch icons __Implemented__
* Alternate/improved/better/new dependency management like YepNope.js *Abandoned*
* Basic mailto script (Is this necessary?) *Abandoned*
* Build scripts and optimizers
* Benchmarking tests
* Prettier 404 __Implemented__
* General optimizations everywhere and time-savers __Implemented__

Contributors and suggetions welcome! bill-at-chooseclever-dot-com
