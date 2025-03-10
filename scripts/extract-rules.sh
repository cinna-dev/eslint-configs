#!/bin/bash

#input_file="./src/index.js"
#output_file="./src/config.js"

# this script takes in a eslint.config.js flat config and returns the reduced configs
# to the keys "files" and "rules"

input_file="$1"
output_file="$2"

inline_comment="//"
block_comment="[[:space:]]\/\*"
template_comment="^\/\*\*"
spread_operator="\.\.\."
declaration="^const"
empty_line="^[[:space:]]*$"

if [[ -z $input_file ]]; then
   echo "please define a input file path";
   exit 1;
fi

if [[ ! -e $input_file ]]; then
    echo "Path does not exist"
    echo "you are in $(pwd)";
    exit 1;
fi

if [[ -z $output_file ]]; then
   echo "please define a output file path";
   exit 1;
fi

if [[ ! -e $output_file ]]; then
    echo "Path does not exist"
    echo "you are in $(pwd)";
    exit 1;
fi

nesting_level=0; # if nested we map over an object
is_buffering=0;
start_buffer_level=0; # the level at wich we start buffering
buffer=""; # buffer nested objects
is_rules=0;
rules_level=0;
is_module_export=0;
module_export_level=0;
discard_buffer_level=0;

function flush_buffer() {
    buffer="";
    is_buffering=0;
}

function join_buffer() {
  buffer="$buffer$1";
}

{
    while IFS= read -r line; do
      # ignore comments, declarations, spread
      if [[ $line =~ $inline_comment || $line =~ $template_comment || $line =~ $block_comment || $line =~ $spread_operator || $line =~ $declaration ]]; then
        continue;
      fi

      # ignore empty line
      if [[ $line =~ $empty_line ]]; then
        continue;
      fi

      if [[ "$is_rules" = "1" && "$is_buffering" = "0" ]]; then
        if [[ "$line" =~ :[[:space:]]\[ || "$line" =~ :[[:space:]]\{ ]]; then
          is_buffering=1;
          start_buffer_level=$nesting_level;
        fi
      fi

      # discard others
      if [[ "$is_rules" = "0" && "$is_buffering" = "0" && ($line =~ plugins || $line =~ settings) ]]; then
          is_buffering=1;
          discard_buffer_level=$nesting_level;
      fi


      if [[ $line =~ rules ]]; then
        is_rules=1;
        rules_level=$nesting_level;
      fi

      if [[ $line =~ module\.exports ]]; then
        module_export_level="$nesting_level";
        is_module_export=1;
      fi

      if [[ "$is_module_export" && "$module_export_level" = "$nesting_level" ]]; then
        is_module_export=0;
      fi

      if [[ "$line" =~ \{ || "$line" =~ \[ ]]; then
        ((nesting_level++));
      fi

      if  [[ "$line" =~ \} || "$line" =~ \] ]]; then
        ((nesting_level--));
      fi

      if [[ "$is_rules" = "1" && "$rules_level" = "$nesting_level" ]]; then
        is_rules=0;
      fi

      if [[ "$is_buffering" = 0 && $line =~ \"off\" ]]; then
        continue;
      fi

      # discard others
      if [[ "$is_rules" = "0" && "$is_buffering" = "1" ]]; then
        join_buffer "$line";
        if [[ "$nesting_level" = "$discard_buffer_level" ]]; then
          discard_buffer_level=0;
          is_buffering=0;
          flush_buffer;
        fi
        continue;
      fi

      if [[ "$is_rules" = "1" && "$is_buffering" = "1" ]]; then
        join_buffer "$line";
        if [[ "$nesting_level" = "$start_buffer_level" ]]; then
          is_buffering=0;
          # filter rules
          if [[ "$buffer" =~ \[\"off\" || "$buffer" =~ \[[[:space:]]\"off\" || "$buffer" =~ \"off\" ]]; then
            flush_buffer;
            continue;
          fi
           echo "$buffer";
           flush_buffer;
        fi
        continue;
      fi

      echo "$line";
    done < "$input_file"
} > "$output_file"

echo "Processed file saved to $output_file"
