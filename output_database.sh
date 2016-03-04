echo "select frame,xtl,ytl,xbr,ybr,slug from boxes,videos,paths where boxes.pathid=paths.id AND paths.jobid = videos.id"  | mysql -u ammirato vatic_ammirato1 > ./outputfile.txt
