#!/bin/bash


BASE_PATH="/net/search/playpen/ammirato/RohitData"



for i in $(ls $BASE_PATH/$1/"org_data"); do
    turkic formatframes  $BASE_PATH/$1/"org_data"/$i $BASE_PATH/$1/"turkic_data"/$i 
done


