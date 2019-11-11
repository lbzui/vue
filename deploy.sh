#!/usr/bin/env sh

# run commands
# chmod 777 deploy.sh (if "Permission denied")
# ./deploy.sh

# abort on errors
set -e

# build
npm run build:app

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'lbzui-vue.lanbizhong.com' > CNAME

git init
git add -A
git commit -m '0.1.0'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lbzui/lbzui-vue.git master:gh-pages

cd -
