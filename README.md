# isQED Project

  

## Clone the isQED team project skeleton to your desktop.

  

1. Open your terminal and type in commands:
    -[ ] `$ git clone https://github.com/kimdo7/isQED.git`
    -[ ] `$ cd isQED`
    -[ ] `$ npm install`
    -[ ] `$ cd public`
    -[ ] `$ npm install`
    -[ ] `$ node install`

2. Open your project in VSCode editor. All files should be downloaded
  
## Start the Server
1. leave mongoose running
    `cd~/ 
    sudo mongod`
* Kill server if needed `ps -ax | grep mongo sudo kill that_number`

2. open to query database
    `cd~/ 
    mongo`

3. path to angular public project folder and run the server
    `cd project_name/public
    ng build --watch`

4. open terminal window in vscode terminal
    `ng serve`

5. open another terminal window for terminal operations
    `~/Desktop/isQed`

6. In chrome, go to url `localhost: 4200`

## Push code changes back onto branch master
1. cd .. back to isQED folder
2. check that you are on the master branch
3. Check status before pulling files
-[] git status

		On branch master
		Your branch is up to date with 'origin/master'.
		Changes not staged for commit:
		(use "git add <file>..." to update what will be committed)
		(use "git checkout -- <file>..." to discard changes in working directory)
		modified: README.md
		no changes added to commit (use "git add" and/or "git commit -A")`

4. Pull the file before attempting to push to avoid any errors
-[ ] `git pull`

5. In the command line, add the file
-[ ] `git add <filename.extention>`

6. Commit file
-[ ] `git commit -m "add comment to changes you made"`

7. Push to Master branch
-[ ] `git push`
