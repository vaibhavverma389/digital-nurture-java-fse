git branch GitNewBranch
git branch -a
git checkout GitNewBranch
echo "sample content" > temp.txt
git add temp.txt
git commit -m "Add temp.txt in GitNewBranch"
git status
git checkout master
git diff master GitNewBranch
git merge GitNewBranch
git log --oneline --graph --decorate
git branch -d GitNewBranch
git status
