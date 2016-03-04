



scene = 'SN208';


base_path = '/net/search/playpen/ammirato/RohitData/';


scene_path = fullfile(base_path,scene);


vid_names = dir(fullfile(scene_path,'output_boxes','*.mat'));
vid_names = {vid_names.name};


for i=1:length(vid_names)
    v_name = vid_names{i};

    v_mat = load(fullfile(scene_path,'output_boxes',v_name));


    image_names = dir(fullfile(scene_path,'org_data',v_name(1:end-4),'*.jpg'));
    image_names = {image_names.name};


    annotations = v_mat.annotations;

    for j=1:length(annotations)
        ann = annotations{j};

        cur_name = image_names{ann.frame + 1};

        %ann.frame = str2num(cur_name(1:10));
        ann.frame = strcat(cur_name(1:10),'.png')

        annotations{j} = ann;

    end

    v_mat.annotations = annotations;

    save(fullfile(scene_path,'output_boxes',v_name),'-struct','v_mat');

end    





