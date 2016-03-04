#!/bin/bash



toeval="ls $2 -Rl  | wc -l" 
NUM_IMAGES=$(eval $toeval)
let "NUM_IMAGES -= 10"



costt=$((NUM_IMAGES * 10)) #cents per image
costt=$((costt + 100))

minutes=$((NUM_IMAGES / 9))

costl=$(eval "expr length $costt")
startt=$((costl - 3))

if  ((startt >0))  ; then
 #     echo $startt   startt
    costs=${costt:0:$startt}
    coste=${costt:$startt:2}
    COST=$costs"."$coste
else
    COST="."${costt:0:2}

fi



echo $COST



TITLE="Image Annotation "$NUM_IMAGES" images (~ $minutes  minutes.)"
DESCRIPTION=" Draw bounding box around one object in "$NUM_IMAGES" images. A fast worker can spend less than 5 seconds per box(see instructions for tips). May only work for CHROME browser."

DURATION="10800"  #three hours
LIFETIME="172800"  #48 hours

KEYWORDS="image, annotation, bounding, box, pictures, object, detection, computer, vision"







 
# turkic load $1 $2 $3 --title "$TITLE" --description "$DESCRIPTION" --duration $DURATION --lifetime $LIFETIME --keywords "$KEYWORDS" --cost .01 --completion-bonus $COST --train-with gold_standard_rohit_4
turkic load $1 $2 $3 --title "$TITLE" --description "$DESCRIPTION" --duration $DURATION --lifetime $LIFETIME --keywords "$KEYWORDS" --cost $COST  --offline
#turkic load $1 $2 $3 --title "$TITLE" --description "$DESCRIPTION" --duration $DURATION --lifetime $LIFETIME --keywords "$KEYWORDS" --cost $COST  
