#!/bin/bash

#rm to_review.txt
while read -u 10 p; do
  turkic find --id $p  >> to_review.txt
done 10<vids_review_none.txt
