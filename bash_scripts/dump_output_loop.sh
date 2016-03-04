#!/bin/bash


BASE_PATH="/net/search/playpen/ammirato/RohitData"

NEW_DIR="output_boxes"


mkdir $BASE_PATH/$1/$NEW_DIR

for i in $(ls $BASE_PATH/$1/"org_data") ; do
#    turkic dump $1"_"$i -o $BASE_PATH/$1/$NEW_DIR/$i".txt"
    turkic dump $1"_"$i -o $BASE_PATH/$1/$NEW_DIR/$i".mat" --matlab
done
