#!/bin/bash

#input_file="./src/index.js"
#output_file="./src/config.js"

# this script takes in a eslint.config.js flat config and returns the reduced configs
# to the keys "files" and "rules"

function is-comment {
      # ignore comments, declarations, spread
     line=$1
      if [[ $line =~ // || $line =~ \/\*   || $line =~ \*\/   ]]; then
        echo 1;
      fi
      echo 0;
}

input_file="$1"
output_file="$2"

if [[ -z $input_file ]]; then
   echo "please define a input file path";
   exit 1;
fi

if [[ -e $input_file ]]; then
    echo "Path exists"
else
    echo "Path does not exist"
    echo "you are in" pwd;
fi

if [[ -z $output_file ]]; then
   echo "please define a output file path";
   exit 1;
fi

if [[ -e $output_file ]]; then
    echo "Path exists"
else
    echo "Path does not exist"
    echo "you are in" pwd;
fi

active=1;
nesting=0;

#{
    while IFS= read -r line; do
      # make sure active at begin of each iteration if not inside a nested object
#      if is-comment line; then
#        continue;
#      fi

      if [[ $nesting == 0 ]]; then
        active=1;
      fi

      # ignore object keys/values content
      if [[ $line =~ "off" ]]; then
#        echo "found!"
        active=0;
      fi
      if [[ "$line" =~ [ ]]; then
        ((nesting++));
      elif  [[ "$line" =~ ] ]]; then
        ((nesting--));
      fi
      if [[ "$line" =~ { ]]; then
        ((nesting++));
      elif  [[ "$line" =~ } ]]; then
        ((nesting--));
      fi
      if [[ $active == 0 ]]; then
        continue;
      fi
        echo "$line";
    done < "$input_file"
#} > "$output_file"

echo "Processed file saved to $output_file"

function nestingCrawler {
 json=$1;
 if [[ -z "$json" ]]; then
   echo 'no json input received';
   exit 1;
 fi
 echo 'foo';
}
