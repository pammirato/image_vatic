#!/bin/bash



while read -u 10 i; do
    

   
    vid_name=$i   
    
    turkic delete $vid_name  --force
    echo ------------------------------------ 

    # read -n 1 -s
done 10<./text_files/to_delete.txt



