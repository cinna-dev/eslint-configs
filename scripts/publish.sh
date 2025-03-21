#!/usr/bin/env bash

pnpm update \
&& pnpm run lerna:build \
&& git add . \
&& git commit -m "update" . \
&& pnpm run lerna:version \
&& pnpm run lerna:publish
