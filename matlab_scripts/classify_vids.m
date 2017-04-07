



fid_comments = fopen('../text_files/comments.txt')

fid_good=fopen('../text_files/vids_review_good.txt','wt')
fid_bad=fopen('../text_files/vids_review_bad.txt','wt')
fid_nr=fopen('../text_files/vids_review_none.txt','wt')
fid_badish=fopen('../text_files/vids_review_badish.txt','wt')
fid_goodish=fopen('../text_files/vids_review_goodish.txt','wt')

%read header
line = fgetl(fid_comments);


line = fgetl(fid_comments);
while(ischar(line))

    %get info
    line = strsplit(line);

    vid_name = line{1};
    comment = line{2};

    if(strcmp(vid_name(1:4),'gold'))
        disp(vid_name);
        line = fgetl(fid_comments);
        continue;
    end


    if(strcmp(comment,'phil_reviewed_good') ||strcmp(comment,'phil_review_good')  )
        fprintf(fid_good, [vid_name '\n']);   
 
    elseif(strcmp(comment,'phil_reviewed_bad') ||strcmp(comment,'phil_review_bad') )
        fprintf(fid_bad, [vid_name '\n']);   
    elseif(strcmp(comment,'phil_reviewed_badish') ||strcmp(comment,'phil_review_badish') )
        fprintf(fid_badish, [vid_name '\n']);   
    elseif(strcmp(comment,'phil_reviewed_goodish') ||strcmp(comment,'phil_review_goodish') )
        fprintf(fid_goodish, [vid_name '\n']);   
    else
        fprintf(fid_nr, [vid_name '\n']);   
    end
    

    line = fgetl(fid_comments);
end % while

fclose(fid_comments);
fclose(fid_good);
fclose(fid_bad);
fclose(fid_nr);
