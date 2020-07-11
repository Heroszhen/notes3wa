#! /bin/bash
#push to github

git remote -v
git add -A 
git commit -m "maj"
git push origin master

if [ $1 = "archive" ]
then
    zip ../symfony-default.zip -r * .[^.]* -x "vendor/*"
fi