git status
git checkout -b GitWork
echo '<message>Hello from GitWork initial</message>' > hello.xml
echo '<message>Hello from GitWork updated</message>' > hello.xml
git status
git add hello.xml
git commit -m "Update hello.xml on GitWork"
git checkout master
echo '<message>Hello from master</message>' > hello.xml
git add hello.xml
git commit -m "Update hello.xml on master"
git log --oneline --graph --decorate --all
git diff master GitWork
git mergetool
git merge GitWork
git mergetool
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"
git status
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignore mergetool backups"
git branch
git branch -d GitWork
git log --oneline --graph --decorate
