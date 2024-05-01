#!/usr/bin/env bash

git status -s | awk 'match($2, /packages\/([^\/]+)\//, ary) {print ary[1]}' | uniq
