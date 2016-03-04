#!/bin/bash

echo "select slug,hitid,workerid from videos,jobs,turkic_hits where jobs.segmentid = videos.id AND jobs.id = turkic_hits.id"  | mysql -u ammirato vatic_ammirato1 > ./hits_workers_data.txt


