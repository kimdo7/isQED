# Starting a new Project

Open a terminal, and cd into the folder you’d like to create the project and then type the following:

1. Create a copy of the gitHub repository which will create a project folder called isQED.
	* `git clone https://github.com/kimdo7/isQED.git`

2. Install all dependencies with a script:
	* `cd isQED`
	* `./installation`
	* You will see a warning for  `found 1 high severity vulnerability`, this is for angular/build which is waiting for an update to sass. *Don't* run npm audit fix

## Setting Up MongoDB (Skip if you've have Mongo DB running already)

3. Leave mongoDB running.
	* `sudo mongod`
    
4. Connect to your MongoDB database.
	* `mongo`
	* Reference: https://docs.mongodb.com/manual/reference/mongo-shell/

## Starting the Angular Build and Server 

5. Run angular in the front end folder located in the main project folder isQED.
	* `cd frontend`
	* `ng build --watch --aot`
 
6. Open a `New Terminal`. Go back into the main project folder isQED and run the server.
	* `cd isQED`
	* `nodemon server.js`
    
7. Open your project in the url.
	* `http://localhost:8000/`
    
## Optional - Serving Angular's Front End Only

1. If you would like to run only the frontend, cd into the frontend folder of the main project folder isQED.   (Do NOT run this in addition to ng build --watch --aot.)
	* `cd frontend`
	* `ng serve --aot`

2. When it's running, type in the url:
	* `http://localhost:4200/`

# Pushing Code into the Master Branch

## Pulling Latest Files from Master

1. Go to your main project folder.
	* `cd isQED`
	
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
	
4. Install dependencies whenever everytime you've pulled the latest files from GitHub.
	* `cd isQED`
	* `./installation`
	
## Creating a Branch for your development work
	
4. Create a new branch and check it out.
	* `git checkout -b branch-name` 
	* This will automatically switch you to your new branch.

5. In the future, to switch to the new branch.
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

## Pull Request from your branch to Master

9. Create a pull request between your branch-name and master.
	* Go to https://github.com/kimdo7/isQED/compare
	* For the drop-down menus, choose "base:master" and "compare:your branch name".
	* Click "Create pull request".
	* Once a pull request has been intiated, reviewers will be added to review the code.
	
> For example:
>   https://github.com/kimdo7/isQED/pull/2

10. If you would like to continue to work, you can still push into your branch as GitHub will update the pull request with your changes.
	* Repeat steps 5-8 again.

11. When the reviewers have finished reviewing and if there are no conflicts, your code will be merged into the master branch.

## Updating Branches

12. Get your local branches up to date.
	* `git pull` in case the branch was updated on the server by someone else
	* `git checkout master` 
	* `git pull` now are up to date on master.

13.  When you want to pull the latest master into your working branch
	* `git branch`  ** make sure you NOT ON MASTER, but on your working branch **
	* `git merge origin master`  ** this will merge the latest master branch upstream to your branch.  Assuming there are no conflicts, your branch should be up to date. 

# UNIT TEST
1. cd /server/unit-test
2. npm install
3. npm test
