#/bin/bash 
set -x
echo "Using MINGW64 `which -a bundle`"
bundle exec jekyll serve  --incremental
