#!/bin/bash


#rm to_review.txt
while read -u 10 p; do
  turkic find --id $p  >> ./text_files/to_review.txt
done 10<./text_files/vids_review_none.txt

