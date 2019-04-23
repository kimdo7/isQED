<<<<<<< HEAD
# Starting a new Project
=======
# isQED Project

## We are moving code from isQED/Public with isQED/Frontend
1. Open your terminal to isQED/ and type in commands:
    * [ ] `git status` Make sure you are on the master branch
    * [ ] `git pull` pull the latest code down from master
2. change directory to frontend (isQED/Public is in the process of being migrated to frontend)
    * [ ] `cd frontend`
3. Install all dependencies
    * [ ] `npm install`
    * [ ] `cd ..`
4. Install mdpro
    * [ ] `./mdbpro-installation`
    * [ ] `cd frontend`
5. See Serving angular below 

## Serving Frontend for Building
1. Serving angular
    * [ ] `cd frontend` 
    * [ ] `ng serve` | Mac Users - angular serve is running on port 4200
    * [ ] `ng serve --aot` | PC Users - angular serve is running on port 4200

2. In chrome, go to url 
    * [ ] `localhost: 4200`

## Start the Server
1. Leave mongoose running
    * [ ] `sudo mongod` | start a mongodb
    * [ ] Kill server if needed `ps -ax | grep mongo sudo kill that_number`

2. Open to query database
    * [ ]`mongo`
    * [ ]`https://docs.mongodb.com/manual/reference/mongo-shell/`

3. path to angular public project folder and run the server
    * [ ] `cd project_name/public`
    * [ ] `ng build --watch`
 
4. Run nodemon with debug option to monitor for any changes in your source
    * [ ] `nodemon server.js`
    * [ ] `DEBUG=QEDlog nodemon server.js` // debug mode to displays logs

5. In chrome, go to url 
    * [] `localhost: 8000`

# Github Instructions

## Clone the isQED team project skeleton to your desktop.
1. Open your terminal and type in commands:
    * [ ] `$ git clone https://github.com/kimdo7/isQED.git`
    * [ ] `$ cd isQED`  
    * [ ] `$ npm install` | install all the backend packages
    * [ ] `$ cd frontend`
    * [ ] `$ npm install` | install all the fontend packages
    * [ ] `$ code ../.`   | open VSCOde

2. Open your project in VSCode editor. All files should be downloaded

## Push code changes back onto branch master
1. cd .. back to isQED folder
2. Check that you are on the master branch and status  before pulling files
    * [] `git status`
		On branch master
		Your branch is up to date with 'origin/master'.
		Changes not staged for commit:
		(use "git add <file>..." to update what will be committed)
		(use "git checkout -- <file>..." to discard changes in working directory)
		modified: README.md
		no changes added to commit (use "git add" and/or "git commit -A")`

3. Pull the file before attempting to push to avoid any errors
    * [ ] `git pull --rebase` if you have any local commits that hasn't been pushed yet,     it rebases it on top of remote.  It also keeps it more linear by preventing       unnecessary merge commits

4. Creates a new branch and Checks it out. This will automatically switch you to your new branch.  Make sure you work off of master 
    * [] `git checkout -b branch-name` 
> For example:
>   git checkout -b signin
>>>>>>> 22d61a85fbb729ead703b4d90b124dce4d9df94a

Open a terminal, and cd into the folder you’d like to create the project and then type the following:

1. Create a copy of the gitHub repository which will create a project folder called isQED.
	* `git clone https://github.com/kimdo7/isQED.git`

2. Install all dependencies with a script:
	* `cd isQED`
	* `./installation`
	* You will see a warning for  `found 1 high severity vulnerability`, this is for angular/build which is waiting for an update to sass. *Don't* run npm audit fix

## Setting Up MongoDB (Skip if you've setup Mongo DB already)

3. Leave mongoDB running.
	* `sudo mongod`
    
4. Connect to your MongoDB database.
	* `mongo`
	* Reference: https://docs.mongodb.com/manual/reference/mongo-shell/

## Starting the Angular Build and Server 

5. Run angular in the front end folder located in the main project folder isQED.
	* `cd frontend`
	* `ng build --watch --aot`
 
6. Go back into the main project fold isQED to run the server.
	* `cd ..`
	* `nodemon server.js`
    
7. Open your project in the url.
	* `http://localhost:8000/`
    
## Optional - Serving Angular's Front End Only

1. If you would like to run only the frontend, cd into the frontend folder of the main project folder isQED.
	* `cd frontend`
	* `ng serve --aot`

2. When it's runing, type in the url:
	* `http://localhost:4200/`

# Pushing Code into the Master Branch

## Pulling Latest Files from Master

1. Go to your main project folder.
	* cd isQED
	
2. Check that you are on the master branch before pulling files
	* `git status`
	* On branch master
	Your branch is up to date with 'origin/master'.
	Changes not staged for commit:
	(use "git add <file>..." to update what will be committed)
	(use "git checkout -- <file>..." to discard changes in working directory)
	modified: README.md
	no changes added to commit (use "git add" and/or "git commit -A")`

3. Pull the latest files from master before attempting to push.
	* `git pull --rebase` 
	* If you have any local commits that hasn't been pushed yet, it rebases it on top of remote. It also keeps it more linear by preventing unnecessary merge commits
	
## Creating a Branch for your development work
	
4. Create a new branch and Checks it out.
	* `git checkout -b branch-name` 
	* This will automatically switch you to your new branch.

5. In the future, to switch to your new branch type:
	* `git checkout branch-name`
	
## Adding and Committing Files for your Branch

6. You can either add a single file or all files to the commit:
	* Adds the file <filename> to index (stage) to be tracked
	* `git add filename` 
	* Adds all files to index (stage) to be tracked
	* `git add .`

7. Commit the files added.
	* `git commit -m "comment what you did"`

> For example:
>   git commit -m "made changes to controller, mode and routes for user and login"

## Pushing Committed Files into your Branch

8. Push the branch to github.
	* `git push origin branch-name`
	* (`git push -u origin branch-name`) the first time because you need to track it

> For example:
>   git push -u origin signin

## Pull Request from your branch to Master.

9. Create a pull request between your branch-name and master.
	* Go to https://github.com/kimdo7/isQED/compare
	* For the drop-down menus, choose "base:master" and "compare:your branch name".
	* Click "Create pull request".
	* Once a pull request has been intiated, reviewers will be added to review the code.
	
> For example:
>   https://github.com/kimdo7/isQED/pull/2

10. If you would like to continue to work, you can still push into your branch as GitHub will update the pull request with your changes.
	* Repeat steps 5-8 again.

11. When the reviewers have finisehd reviewing and if there are no conflicts, your code will be merged into the master branch.

## Updating Branches

12. Get your local branches up to date.
	* `git pull` in case the branch was updated on the server by someone else
	* `git checkout master` 
	* `git pull` now are up to date on master.

13.  When you want to pull the latest master into your working branch
	* `git branch`  ** make sure you NOT ON MASTER, but on your working branch **
	* `git merge origin master`  ** this will merge the latest master branch upstream to your branch.  Assuming there are no conflicts, your branch should be up to date. 
