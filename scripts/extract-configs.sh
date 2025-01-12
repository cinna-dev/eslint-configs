#!/bin/bash

#input_file="./src/index.js"
#output_file="./src/config.js"

# this script takes in a eslint.config.js flat config and returns the reduced configs
# to the keys "files" and "rules"

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

{
    while IFS= read -r line; do
      # ignore comments, declarations, spread
      if [[ $line =~ // || $line =~ \/\* || $line =~ \.\.\. || $line =~ ^const ]]; then
        continue;
      fi
      # ignore empty line
      if [[ $line =~ ^[[:space:]]*$ ]]; then
        continue;
      fi

      # make sure active at begin of each iteration if not inside a nested object
      if [[ $nesting == 0 ]]; then
        active=1;
      fi

      # ignore object keys/values content
      if [[ $line =~ settings: || $line =~ plugins: ]]; then
#        echo "found!"
        active=0;
      fi

      if [[ $active == 0 ]]; then
        if [[ "$line" =~ "{" ]]; then
#          echo "$nesting++";
          ((nesting++));
        elif  [[ "$line" =~ "}" ]]; then
#          echo "$nesting--";
          ((nesting--));
        fi
      fi
      if [[ $active == 0 ]]; then
        continue;
      fi
        echo "$line";
    done < "$input_file"
} > "$output_file"

echo "Processed file saved to $output_file"