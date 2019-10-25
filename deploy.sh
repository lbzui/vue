#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:app

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'lbzui.lanbizhong.com' > CNAME

git init
git add -A
git commit -m 'Initial commit'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lbzui/lbzui-vue.git master:gh-pages

cd -
