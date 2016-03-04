


fid_jobs = fopen('./hits_workers_data.txt');
fid_good = fopen('./vids_review_good.txt');


good_slugs = cell(0);


line = fgetl(fid_good);
line = fgetl(fid_good);
while(ischar(line))
    good_slugs{end+1} = line;
    
    line = fgetl(fid_good);
end




good_workers = cell(1,length(good_slugs));

bs_counter = 1;

line = fgetl(fid_jobs);
line = fgetl(fid_jobs);
while(ischar(line))
    
    line = strsplit(line);
    slug = line{1};

    if(strcmp(slug,good_slugs(bs_counter)))
        good_workers{bs_counter}  = line{3};
        bs_counter = bs_counter+1;
        if(bs_counter > length(good_slugs))
            break;
        end
    end
    line = fgetl(fid_jobs);
end




fid_out = fopen('./bonus_workers.txt', 'at');

    fprintf(fid_out, ['-------------------------', '\n']);
for i=1:length(good_workers)
    fprintf(fid_out, [good_workers{i}, '\n']);
    
end

fclose(fid_out);

