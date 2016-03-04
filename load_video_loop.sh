#!/bin/bash



BASE_PATH="/net/search/playpen/ammirato/RohitData/"


scene_path=$BASE_PATH$1/"turkic_data"

echo $scene_path

for i in $(ls $scene_path); do
   vid_name=$1"_"$i   
   out_path=$scene_path/$i
   # ./load_video $vid_name $out_path $i
   # echo ------------------------------------ 
 
    len=$((${#i}-1)) 
    last=${i:len:2} 
 

    if  ((last ==1)) || ((last ==2)) || ((last ==3)) || ((last ==4)) || ((last ==5))|| ((last ==6))|| ((last ==7))|| ((last ==8))|| ((last ==9))|| ((last ==0)) ; then 
        label=${i:0:((len-1))}
    else
        label=$i
    fi


    ./load_video $vid_name $out_path $label
    #turkic delete $vid_name
    echo ------------------------------------ 

   # read -n 1 -s
done


