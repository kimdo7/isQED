# isQED

## Starting a new Project

Open a terminal, and cd into the folder you’d like to create the project and then type the following:

1. Create a copy of the gitHub repository which will create a project folder called isQED.
	* git clone https://github.com/kimdo7/isQED.git

2. Install all dependencies with a script:
	* cd isQED
	* ./installation
	* You will see a warning for  `found 1 high severity vulnerability`, this is for angular/build which is waiting for an update to sass. *Don't* run npm audit fix

## Setting Up MongoDB (Skip if you've setup Mongo DB already)

3. Leave mongoDB running.
    * sudo mongod
    
4. Connect to your MongoDB database.
    * mongo
    * Reference: https://docs.mongodb.com/manual/reference/mongo-shell/

## Starting the Angular Build and Server 

5. Run angular in the front end folder located in the main project folder isQED.
    * cd frontend
    * ng build --watch --aot
 
6. Go back into the main project fold isQED to run the server.
    * cd ..
    * nodemon server.js
    
7. Open your project in the url.
    * http://localhost:8000/
    
## Optional - Serving Angular's Front End Only

1. If you would like to run only the frontend, cd into the frontend folder of the main project folder isQED.
    * cd frontend
    * ng serve --aot

2. When it's runing, type in the url:
    * http://localhost:4200/

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


5. To switch between branches
    *[] `git checkout branch-name`
> For example:
>   git checkout master
>   git checkout signin


6. When you are ready to push code up stream, In the command line, add the file
    a. Adds the file <filename> to index (stage) to be tracked
    * [ ] `git add <filename>` 

    or

    b. Adds all files to index (stage) to be tracked
    * [ ] `git add .`  adds everything in a directory and below 


7. Commit files
    * [ ] `git commit -m "comment what you did"`

> For example:
>   git commit -m "made changes to controller, mode and routes for user and login"


8. Push the branch to github
    * [ ] `git push origin branch-name`
    (`git push -u origin branch-name`) the first time because you need to track it

> For example:
>   git push -u origin signin


9. Create a pull request between your branch-name and master
    `https://github.com/<user>/project`
    `https://github.com/<user>/isQED/compare?expand=1`

    A pull request has a code review, you can add reviewers.

> For example:
>   https://github.com/kimdo7/isQED/pull/2


10. You may have to keep making changes before begin ready. Just make the changes locally and then push to your branch when you are ready. Github will update the pull request when the branch is updated.
    * [ ] Do steps 5-8 again


11. When ready, approve the pull request. It will merge into master


12. Get your local branches up to date
* [ ] `git pull` in case the branch was updated on the server by someone else
* [ ] `git checkout master` 
* [ ] `git pull` now are up to date on master.


13.  When you want to pull the latest master into your working branch
* [ ] `git branch`  ** make sure you NOT ON MASTER, but on your working branch **
* [ ] `git merge origin master`  ** this will merge the latest master branch upstream to your branch.  Assuming there are no conflicts, your branch should be up to date. 
