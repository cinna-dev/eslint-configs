#! /usr/bin/env bash

OPT_X='false';

ARGS=$(getopt --options d --long "dry-run" -- "$@");

eval set --"$ARGS";

dryRun=false;

# handle option flags
while true; do
	case "$1" in
		-d|--dry-run)
			dryRun=true
			shift;;
		--)
			break;;
		*)
		printf "unknown option %s/n" "$1"
		exit 1;;
	esac
done

packages=($(ls ./packages));

cd ./packages || exit

for p in "${packages[@]}"; do
	cd $p;
	# '::-1' remove last character
	eval npm publish @cinna-dev/${p::-1} --dry-run=$dryRun;
	cd ..;
done

cd ..;
