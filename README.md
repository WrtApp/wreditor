# Boilerplate Redux

There are a ton of awesome front end HTML boilerplates out there and it can be tough to choose between them all. So why choose at all? Boilerplate Redux is my version of the perfect HTML5 boilerplate. It's based on a number of different projects all mashed together to suit my workflow. It is a total rewrite of my original boilerplate project (still available if anyone like it better) called HTML5 Bill-erplate.

BP-Redux places a heavy focus on the LESS stylesheet language (http://lesscss.org) and a fluid grid system based on a max-width of 1140px.

## Components

Boilerplate Redux uses code from the following projects:

* jQuery Effects Library - Minified and uncompressed dev versions included
* Normalize.css - Not a reset, a baseline to be modified
* 1140 CSS Grid - The heart of our Less-based grid system
* More as we add them...

# Usage

Right now, this is at version 0.0.1. That means there isn't enough to provide a working project. If you'd just like to download the code and make your own modifications, feel free. Otherwise we'll have a run down of how to set yourself up real quick soon.

## Usage Notes

Take heed of the following as there are some components of the boilerplate that need a bit of extra attention to work correctly.

**HTACCESS Files:**
The .htaccess file bundled with BP-Redux is named '1.htaccess'. The settings specified in this file will not take effect until you rename the file to simply '.htaccess'. Note that it has no characters before the dot (.). The reason for this is because most systems hide files without a name by default. Copying the contents of a folder with a hidden .htaccess file on a Mac or Windows system will only copy the non-hidden files to the new location. Be mindful of this after you've renamed the file and set up a testing or production environment.

The consequences of a non-existent .htaccess file include:
* No Chrome Frame for IE users
* Media playback errors (especially in Firefox) when using new HTML5 `<audio` and `<video>` tags.

### Credits

We have to give credit where credit is due. Thanks to all these folks who are by far much smarter and more talented that I.

Paul Irish - HTML5 Boilerplate - http://html5boilerplate.com
@andytlr - 1140 Grid System - http://cssgrid.net
Cloudhead - LESS dynamic stylesheet language - http://lesscss.org
... and more coming soon.