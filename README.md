# Workflow

This directory contains a simple but fast script (gulpfile) to optimize the images but also convert and minify SASS files in CSS on small projects.

## Required software

<p>you need install **node.js** for use the line command <code>npm</code> on your computer</p>

## Getting started

He is necessary to put the file 'gulpfile' into your project directory. 2 way to do this:
- Download a zip of the repository and extract it to your project folder on your local development environment  
or  
- Clone the repository to your project folder on your local development envrionment

Then, use the terminal or command prompt your computer for go in your project folder:
- Type <code> npm install </code> as command prompt or in the terminal your computer for install the node modules (this will install the dependencies from the package.json file and create a folder 'node_modules' in your project folder).

Note: Make sure your .gitignore file is ignoring your modules!

## Gulp Task

By typing <code>gulp</code> or anothers tasks in your terminal, this will create 2 defaults folders
- assets
- public

Unless they already exist. This step is **optional** and you can comment the code if necessary. 

**Don't forget to modify the paths according to your needs !**

### Gulp build

Type <code>gulp build</code> in your terminal to convert your SASS (or LESS) files to CSS files.
This will do the following:

 - Convert all SASS files into a single CSS file
 - Convert all JS files into a single JS file (**optional**)
 - Format your CSS by following a series of predefined rules (csscomb)
 - Automatically formats your CSS file to be consistent and easy to read (cssbeautify)
 - Checking your HTML file to remove unused CSS class (uncss | **optional**)
 - Notification of completion of procedures (notify)

### Gulp optimization

Type <code>gulp optimization</code> in your terminal to optimize the images (imagesmin)

### Gulp prod

Type <code>gulp prod</code> in your terminal to get your files ready for production.
This will do the following:

- Use the task "build"
- Use the task "optimization"
- Adding auto-prefixers in CSS file and minify it(pleeease)
- rename CSS file with the suffix 'min' (rename)
- Notification of completion of procedures (notify)


### Gulp watch

- Watches for changes JS and SASS files 






