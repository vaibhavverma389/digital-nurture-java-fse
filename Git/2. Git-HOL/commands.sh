touch app.log
mkdir log
touch log/error.txt
echo "*.log" > .gitignore
echo "log/" >> .gitignore
git status
git add .gitignore
git commit -m "Add .gitignore rules"
