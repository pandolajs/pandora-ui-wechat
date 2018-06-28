#!/bin/bash
echo `dirname $PWD`
cd "`dirname \"$PWD\"`/src/components"
mkdir $1
cd $1
touch $1.wxml $1.less $1.json $1.
cd ".."
