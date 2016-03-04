#!/bin/bash



BASE_PATH="/net/search/playpen/ammirato/RohitData"


scene_path=$BASE_PATH/$1

turkic_path=$BASE_PATH/$1/"turkic_data"

org_path=$BASE_PATH/$1/"org_data"

add_path=$scene_path/"to_add"


for i in $(ls $add_path); do
    


    vid_name=$1"_"$i   



    len=$((${#i}-1)) 
    last=${i:len:1} 
    sec_last=${i:len-1:1} 


    out_path=$turkic_path/$i

    mv $add_path/$i $org_path/
    turkic formatframes $org_path/$i $turkic_path/$i



    len=$((${#i}-1)) 

    if [[ "$sec_last" != "_" ]] ; then
        label=$i
    else
        if  ((last ==1)) || ((last ==2)) || ((last ==3)) || ((last ==4)) || ((last ==5))|| ((last ==6)) ; then 
            label=${i:0:((len-1))}
        else
            label=$i
        fi
    fi

    ./load_video $vid_name $out_path $label
    #turkic delete $vid_name
    echo ------------------------------------ 

    # read -n 1 -s
done 


