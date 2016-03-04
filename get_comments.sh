#!/bin/bash

echo "select slug,comment from videos,jobs where jobs.segmentid = videos.id"  | mysql -u ammirato vatic_ammirato1 > ./comments.txt



#comments=$(echo 'select slug,comment from videos,jobs where jobs.segmentid = videos.id'  | mysql -u ammirato vatic_ammirato1) 


#echo $comments

