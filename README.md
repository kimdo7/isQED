# isQED Project

## Clone the isQED team project skeleton to your desktop.
1. Open your terminal and type in commands:
    * [ ] `$ git clone https://github.com/kimdo7/isQED.git`
    * [ ] `$ cd isQED`  
    * [ ] `$ npm install` | install all the backend packages
    * [ ] `$ cd public`
    * [ ] `$ npm install` | install all the fontend packages
    * [ ] `$ code ../.`   | open VSCOde

2. Open your project in VSCode editor. All files should be downloaded

##Serving Frontend for Building
1. Serving angular
    * [ ] `cd public` 
    * [ ] `ng serve` | angular serve is running on port 4200

2. In chrome, go to url 
    * [] `localhost: 4200`

## Start the Server
1. Leave mongoose running
    * [ ] `sudo mongod` | start a mongodb
    * [ ] Kill server if needed `ps -ax | grep mongo sudo kill that_number`

2. Open to query database
    * [ ]`mongo`

3. path to angular public project folder and run the server
    * [ ] `cd project_name/public `
    * [ ] `ng build --watch`

6. In chrome, go to url 
    * [] `localhost: 8000
    `
# Github Instructions
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
* [ ] `git merge origin master`  ** this will merge the latest master branch upstream to your branch.  Assuming there is no conflicts, your branch should be up to date. 
