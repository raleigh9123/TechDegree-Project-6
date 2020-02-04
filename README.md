# TechDegree-Project-6
 Static Node.js and Express Site

 --Description
This project is a portfolio site built in Node.js and Express using the Pug templating package. Each project's data is listed in a static JSON file and contains the project description, links, and references to the project's images. The site provides links to live demos utilizing github pages, as well as links to the origial Github repository. 


--Skills and Process
Skills: Node.js, Express App, Pug Templating, setting up a server, editing repository on local development server, CLI: Terminal
-Site generated via express and HTML rendered via Pug
-Site configured via the following:
    1. package.json specifies nodemon package to run live preview upon save from terminal via "npm start". app.js opens port 3000 for local preview.
    2. package.json specifies site via app.js as main.
    3. app.js: 
        a. requires express, 
        b. sets pug as view engine, 
        c. requires static files (images, css, front-end js)
        d. requires routes and configures express to use routes.
        e. catch errors and provide user friendly responses via 'error' view.
        f. Open port to allow preview on localhost: port
    4. /routes directory contains index.js for main routes (homepage and about page) and projects.js for each project page. /route files require express and extend router() objects to declare .use() methods for page queries.
    5. /views directory contains templates to render html files. Data is passed from data.json files in routes files

--Project Attempt
Exceeds Expectations
-'npm start' command in terminal runs app via nodemon using app.js as main terminal execution file.
-Errors are caught in app.js and passed to pug template to render a user-friendly error page. Page extends the layout of the site and includes error information and the corresponding stack trace. (error includes err.message, err.status, and err.stack)
-CSS modifications:
1. Box shadows modified on homepage thumbnails.
2. Sidebar color modified as well as contained text color.
3. About page includes edited list items. List adds pseudo-classes to delineate categories of front-end and back-end development skills.