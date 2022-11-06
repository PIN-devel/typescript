#!/bin/bash
function commit() {
  if [ -z "$1"]; then
    return 1
  fi
  yarn tsc&&git add .&&git commit -m $1&&git push origin master
  return 0
}
commit $1
result="$?"
if [ "$result" -eq 0 ]; then
  echo "success"
else
  echo "no commit message"
fi