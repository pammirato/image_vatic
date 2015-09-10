function Job(data)
{
    var me = this;

    this.slug = null;
    this.start = null;
    this.stop = null;
    this.width = null;
    this.height = null;
    this.skip = null;
    this.perobject = null;
    this.completion = null;
    this.blowradius = null;
    this.thisid = null;
    this.labels = null;
    this.comment = null;

    this.frameurl = function(i)
    {
        folder1 = parseInt(Math.floor(i / 100));
        folder2 = parseInt(Math.floor(i / 10000));
        return "frames/" + me.slug +
            "/" + folder2 + "/" + folder1 + "/" + parseInt(i) + ".jpg";
    }
}

function job_import(data)
{
    var guiscaleStr = getUrlVars()["guiscale"] ;
    var minplayerwidthStr = getUrlVars()["minplayerwidth"];
    var minplayerwidth = minplayerwidthStr != null ? parseFloat(minplayerwidthStr) : 720.0;
    if (guiscaleStr == null)
        var guiscale = 1.0;
    else if (guiscaleStr === 'auto')
        var guiscale = minplayerwidth/parseInt(data["width"]);
    else
        var guiscale = parseFloat(guiscaleStr);
    console.log("Using guiscale " + guiscale)
    var job = new Job();
    job.slug = data["slug"];
    job.start = parseInt(data["start"]);
    job.stop = parseInt(data["stop"]);
    job.width = guiscale*parseInt(data["width"]); // ME: add video scale in gui
    job.height = guiscale*parseInt(data["height"]); // ME: add video scale in gui
    job.skip = parseInt(data["skip"]);
    job.perobject = parseFloat(data["perobject"]);
    job.completion = parseFloat(data["completion"]);
    job.blowradius = parseInt(data["blowradius"]);
    job.jobid = parseInt(data["jobid"]);
    job.labels = data["labels"];
    job.attributes = data["attributes"];
    job.training = parseInt(data["training"]);
    job.minplayerwidth = minplayerwidth;
    job.comment = data["comment"];
    if(job.comment == "NULL" || job.comment == "null")
        job.comment = null;

    console.log("Job configured!");
    console.log("  Slug: " + job.slug);
    console.log("  Start: " + job.start);
    console.log("  Stop: " + job.stop);
    console.log("  Width: " + job.width);
    console.log("  Height: " + job.height);
    console.log("  Skip: " + job.skip);
    console.log("  Per Object: " + job.perobject);
    console.log("  Blow Radius: " + job.blowradius);
    console.log("  Training: " + job.training);
    console.log("  Job ID: " + job.jobid);
    console.log("  Min Player Width: " + job.minplayerwidth)
    console.log("  Labels: ");
    for (var i in job.labels)
    {
        console.log("    " + i + " = " + job.labels[i]);
    }
    console.log("  Attributes:");
    for (var i in job.attributes)
    {
        for (var j in job.attributes[i])
        {
            console.log("    " + job.labels[i] + " = " + job.attributes[i][j])
        }
    }
    console.log("  Comment: " + job.comment);

    return job;
}
