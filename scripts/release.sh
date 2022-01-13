echo "release started!"
git add .
git commit -m "chore(release): $1"
git push origin master
echo "release complited!"