


fid_jobs = fopen('./hits_workers_data.txt');
fid_bad = fopen('./vids_review_bad.txt');


bad_slugs = cell(0);


line = fgetl(fid_bad);
line = fgetl(fid_bad);
while(ischar(line))
    bad_slugs{end+1} = line;
    
    line = fgetl(fid_bad);
end




bad_workers = cell(1,length(bad_slugs));

bs_counter = 1;

line = fgetl(fid_jobs);
line = fgetl(fid_jobs);
while(ischar(line))
    
    line = strsplit(line);
    slug = line{1};

    if(strcmp(slug,bad_slugs(bs_counter)))
        bad_workers{bs_counter}  = line{3};
        bs_counter = bs_counter+1;
        if(bs_counter > length(bad_slugs))
            break;
        end
    end
    line = fgetl(fid_jobs);
end




fid_out = fopen('./one_strike_workers.txt', 'at');

    fprintf(fid_out, ['-------------------------', '\n']);
for i=1:length(bad_workers)
    fprintf(fid_out, [bad_workers{i}, '\n']);
    
end

fclose(fid_out);

