echo "release started!"
git add .
git commit -m "$1: $2"
git push origin master
echo "release complited!"