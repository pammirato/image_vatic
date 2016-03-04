#!/bin/bash



BASE_PATH="/net/search/playpen/ammirato/RohitData"


scene_path=$BASE_PATH/$1

turkic_path=$BASE_PATH/$1/"turkic_data"

org_path=$BASE_PATH/$1/"org_data"

echo $scene_path


while read -u 10 i; do
    


    vid_name=$i   
    
    turkic delete $vid_name --force

    vid_name=$vid_name
    echo $vid_name
    # ./load_video $vid_name $out_path $i
    # echo ------------------------------------ 

    len=$((${#i}-1)) 
    last=${i:len:2} 

    scene_len=$((${#1}-1)) 
    i=${i:((scene_len+2)):((len-scene_len))}

    out_path=$turkic_path/$i

#    rm -rf $turkic_path/$i
 #   rm -rf $org_path/$i
  #  mv $scene_path/$i $org_path/
   # turkic formatframes $org_path/$i $turkic_path/$i


    len=$((${#i}-1)) 
    if  ((last ==1)) || ((last ==2)) || ((last ==3)) || ((last ==4)) || ((last ==5))|| ((last ==6)) ; then 
        label=${i:0:((len-1))}
    else
        label=$i
    fi


    ./load_video $vid_name $out_path $label
    #turkic delete $vid_name
    echo ------------------------------------ 

    # read -n 1 -s
done 10<vids_review_bad.txt


