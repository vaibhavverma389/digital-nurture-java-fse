git --version
git config --global user.name "Vaibhav Verma"
git config --global user.email "vaibhavverma0687@gmail.com"
git config --list
alias notepad++="c/Program Files/Notepad++/notepad++.exe"
git config --global core.editor "notepad++"
git config -e
mkdir GitDemo
cd GitDemo
git init
ls -a .git
echo "Welcome to Git session" > welcome.txt
cat welcome.txt
git status
git add welcome.txt
git commit
git status
git remote add origin https://gitlab.com/vaibhav/GitDemo.git
git pull origin master
git push -u origin master
