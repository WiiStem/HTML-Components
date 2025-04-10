### **Basic Git Concepts**

1.  **Repository (Repo)**
    A Project Folder that git is tracking. Can be 
    **local** (on your computer) or **remote**
    (Like Github)

2.  **Verison Control**
    A system that tracks changes to code over time, 
    letting you revert to previous versions or collaborate with others.

3.  **Commit**
    A snapshot of your changes. Includes a message describing what changed.

4. **Working Directory**
    Thw current state of your files on disk.

5.  **Staging Area**
    Where you prepare changes before commiting. You "stage" files 
    that are ready to be committed.

---

### **Common Commands**

6.  `git init`
    Initialize a new Git repository in a folder.

7.  `git status`
    Shows the current state of the working directory and staging area.

8. `git add <file>`
    Stages changes in a file for the next commit.

9. `git commit -m "message`
    Saves the staged changes with a commit message

10.  `git push`
    Sends local commits to the remote repository. 
    **Note** You may need to first create a repo in github, and use 
    add origin to link you local repo to the remote one.

11. `git pull`
    Fetches and merges changes from the remote repository to your local one.

12.  `git merge`
    Merges changes from one branch into another.

13. `git fetch`
    Downloads changes from the remote, but doesn't merge them automatically.


### **`.gitignore`**
    Use this file to specify files that should not be tracked/
    commited by git.
    Once a file is tracked by git, adding it to .gitignore won't
    remove it. You need to untrack it with git rm --cashed