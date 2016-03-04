var ui_disabled = 0;

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

String.prototype.getquote = function() {
    return this.replace(/&quot;/gi,"\"");
}

function decode_utf8(s) {
  if (s == null)
    return s;
  return decodeURIComponent(escape(s.getquote()));
}

function ui_build(job)
{
    var screen = ui_setup(job);
    var videoframe = $("#videoframe");
    var player = new VideoPlayer(videoframe, job);
    var tracks = new TrackCollection(player, job);
    var objectui = new TrackObjectUI($("#newobjectbutton"), $("#objectcontainer"), videoframe, job, player, tracks);

    ui_setupbuttons(job, player, tracks);
    ui_setupslider(player);
    ui_setupsubmit(job, tracks);
    ui_setupclickskip(job, player, tracks, objectui);
    ui_setupkeyboardshortcuts(job, player, tracks);
    ui_loadprevious(job, objectui);

    $("#newobjectbutton").click(function() {
        if (!mturk_submitallowed())
        {
            $("#turkic_acceptfirst").effect("pulsate");
        }
    });

  //  $("#newobjectbutton").click();

        
//    $("#newobjectbutton").button("option", "disabled", true);
}

function ui_setup(job)
{
    var screen = $("<div id='annotatescreen'></div>").appendTo(container);

    $("<table>" +
        "<tr>" +
            "<td><div id='instructionsbutton' class='button'>Instructions</div><div id='instructions'>Annotate the object of interest in every image.</td>" +
            "<td><div id='topbar'></div></td>" +
        "</tr>" +
        "<tr>" +
              "<td><div id='videoframe'></div></td>" +
              "<td rowspan='2'><div id='sidebar'></div></td>" +
          "</tr>" +
        "<tr style='height: 1px;'>" +
        "</tr>" +
          "<tr>" +
              "<td><div id='bottombar'></div></td>" +
              "<td><div id='frameinfobar'></div></td>" +
          "</tr>" +
          "<tr>" +
              "<td><div id='advancedoptions'></div></td>" +
              "<td><div id='submitbar'></div></td>" +
          "</tr>" +
          "<tr>" +
              "<td>" +
              "<div id='keyshortcuts''>" +
                  "Keyboard Shortcuts:" +
                  "<ul class='keyboardshortcuts' >" +
                //  "<li><code>t/y</code>  toggles play/pause on the video</li>" +
                 // "<li><code>r/u</code>  rewinds the video to the start</li>" +
                 // "<li><code>e/i</code>  creates a new object</li>" +
                 // "<li><code>f/j</code>  jump forward 10 frames</li>" +
                 //"<li><code>d/k</code>  jump backward 10 frames</li>" +
                //  "<li><code>v/n</code>  step forward 1 frame</li>" +
                 // "<li><code>c/m</code>  step backward 1 frame</li>" +
                 // "<li><code>g/h</code>  jump to next labeled frames</li>" +
                 // "<li><code>s/l</code>  jump to previous labeled frames</li>" +
                 // "<li><code>d/k</code>  jump backward 10 frames</li>" +
                 // "<li><code>&nbsp;b&nbsp;</code>  toggles hide boxes</li>" +
                 //"<li><code>w/o</code>  toggles hide labels</li>" +
                  //"<li><code>q/p</code>  toggles disable resize</li>" +
                    "<li><code>g/n</code>  step forward 1 image</li><br>" +
                    "<li><code>b/m</code>  step backward 1 image</li><br>" +
                    "<li><br></li><br>" +
                    "<li><code>e</code> move bottom side up</li><br>" +
                    "<li><code>d</code> move bottom side down</li><br>" +
                    "<li><code>s</code> move right side left </li><br>" +
                    "<li><code>f</code> move right side right</li><br>" +
                    "<li><br></li><br>" +
                    "<li><code>i</code>  move entire box up</li><br>" +
                    "<li><code>k</code> move entire box down</li><br>" +
                    "<li><code>j</code>  move entire box left</li><br>" +
                    "<li><code>l</code>  move entire box right</li><br>" +
                    "<li><br></li><br>" +
                    "<li><code>CTRL +</code>  zoom in</li><br>" +
                    "<li><code>CTRL -</code>  zoom out</li><br>" +
                  "</ul>" +
              "</div> " +
              "<div id='comments'>" +
                  "Comments (if any):<textarea id='commentarea'/>" +
              "</div>" +
              "</td>" +
          "</tr>" +
      "</table>").appendTo(screen).css("width", "100%");

    var playerwidth = Math.max(job.minplayerwidth , job.width);

    $("#videoframe").css({"width": job.width + "px",
                          "height": job.height + "px",
                          "margin": "0 auto"})
                    .parent().css("width", playerwidth + "px");

    $("#sidebar").css({"height": job.height + "px",
                       "width": "205px"});

    $("#annotatescreen").css("width", (playerwidth + 205) + "px");

    $("#frameinfobar").css({"width": "150px",
                            "padding-left": "20px"});
    $("#frameinfobar").append("<div style='float: left;'><strong>Frame: </strong></div><div id='frameinfo'></div> <div>/" + job.stop + "</div>");
    $("#frameinfo").css({"width": "30px",
                         "padding-left": "10px",
                         "float": "left"});

    //$("#bottombar").append("<div id='playerslider'></div>");
    $("#bottombar").append("<div class='button' id='previousbutton'>Previous Image</div> ");
    $("#bottombar").append("<div class='button' id='nextbutton'>Next Image</div> ");

    $("#topbar").append("<div id='newobjectcontainer'>" +
        "<div class='button' id='newobjectbutton'>New Object</div></div>");

    $("<div id='objectcontainer'></div>").appendTo("#sidebar");

    $("#keyshortcuts").css({"width": 400 + "px",
                            "margin": "0 auto",
                            "float": "left"});

    $("#comments").css({"width": 300 + "px",
                        "margin": "0 auto",
                        "float": "right"});

    $("#commentarea").css({"width": 300 + "px",
                           "height": 150 + "px",
                           "margin": "15 auto",
                           "padding-left": "15 px",
                           "vertical-align": "middle",
                           "resize": "none"});

    $("#commentarea").val(decode_utf8(job.comment));

   /* $("<div class='button' id='openadvancedoptions'>Options</div>")
        .button({
            icons: {
                primary: "ui-icon-wrench"
            }
        }).appendTo($("#advancedoptions").parent()).click(function() {
                eventlog("options", "Show advanced options");
                $(this).remove();
                $("#advancedoptions").show();
            });

    $("#advancedoptions").hide();

    $("#advancedoptions").append(
    "<input type='checkbox' id='annotateoptionsresize'>" +
    "<label for='annotateoptionsresize'>Disable Resize?</label> " +
    "<input type='checkbox' id='annotateoptionshideboxes'>" +
    "<label for='annotateoptionshideboxes'>Hide Boxes?</label> " +
    "<input type='checkbox' id='annotateoptionshideboxtext'>" +
    "<label for='annotateoptionshideboxtext'>Hide Labels?</label> ");

    $("#advancedoptions").append(
    "<div id='speedcontrol'>" +
    "<input type='radio' name='speedcontrol' " +
        "value='5,1' id='speedcontrolslower'>" +
    "<label for='speedcontrolslower'>Slower</label>" +
    "<input type='radio' name='speedcontrol' " +
        "value='15,1' id='speedcontrolslow'>" +
    "<label for='speedcontrolslow'>Slow</label>" +
    "<input type='radio' name='speedcontrol' " +
        "value='30,1' id='speedcontrolnorm' checked='checked'>" +
    "<label for='speedcontrolnorm'>Normal</label>" +
    "<input type='radio' name='speedcontrol' " +
        "value='90,1' id='speedcontrolfast'>" +
    "<label for='speedcontrolfast'>Fast</label>" +
    "</div>");
*/
    $("#submitbar").append("<div id='submitbutton' class='button'>Submit HIT</div>");

    if (mturk_isoffline())
    {
        $("#submitbutton").html("Save Work");
    }

    return screen;
}

function ui_setupbuttons(job, player, tracks)
{
    $("#instructionsbutton").click(function() {
        //player.pause();
        ui_showinstructions(job);
    }).button({
        icons: {
            primary: "ui-icon-newwin"
        }
    });

    $("#nextbutton").click(function() {
        if (!$(this).button("option", "disabled"))
        {
   /*         player.toggle();

            if (player.paused)
            {
                eventlog("playpause", "Paused video");
            }
            else
            {
                eventlog("playpause", "Play video");
            } */
            skip  =1;
            //player.pause();
            player.displace(skip);

            ui_snaptokeyframe(job, player);

        }
    }).button({
        disabled: false,
        icons: {
            primary: "ui-icon-play"
        }
    });

    $("#previousbutton").click(function() {
        if (ui_disabled) return;
/*        player.pause();
        player.seek(player.job.start);
        eventlog("rewind", "Rewind to start"); */
        skip  =-1;
        //player.pause();
        player.displace(skip);

        ui_snaptokeyframe(job, player);



    }).button({
        disabled: true,
        icons: {
            primary: "ui-icon-seek-first"
        }
    });

   /* player.onplay.push(function() {
        $("#playbutton").button("option", {
            label: "Pause",
            icons: {
                primary: "ui-icon-pause"
            }
        });
    });

    player.onpause.push(function() {
        $("#playbutton").button("option", {
            label: "Play",
            icons: {
                primary: "ui-icon-play"
            }
        });
    });
*/

    player.onupdate.push(function() {
        if (player.frame == player.job.stop)
        {
            $("#nextbutton").button("option", "disabled", true);
        }
        else if ($("#nextbutton").button("option", "disabled"))
        {
            $("#nextbutton").button("option", "disabled", false);
        }

        if (player.frame == player.job.start)
        {
            $("#previousbutton").button("option", "disabled", true);
        }
        else if ($("#previousbutton").button("option", "disabled"))
        {
            $("#previousbutton").button("option", "disabled", false);
        }
    });

    $("#speedcontrol").buttonset();
    $("input[name='speedcontrol']").click(function() {
        player.fps = parseInt($(this).val().split(",")[0]);
        player.playdelta = parseInt($(this).val().split(",")[1]);
        console.log("Change FPS to " + player.fps);
        console.log("Change play delta to " + player.playdelta);
        if (!player.paused)
        {
            //player.pause();
            //player.play();
        }
        eventlog("speedcontrol", "FPS = " + player.fps + " and delta = " + player.playdelta);
    });

    $("#commentarea").focusin(function() {
        console.log("ui disabled");
        ui_disable();
    });

    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g,"");
    }
    String.prototype.ltrim = function() {
        return this.replace(/^\s+/,"");
    }
    String.prototype.rtrim = function() {
        return this.replace(/\s+$/,"");
    }

    String.prototype.removelinebreak = function() {
        return this.replace(/(\r\n|\n|\r)/gm,"  ");
    }

    String.prototype.delquote = function() {
        return this.replace(/["]{1}/gi,"&quot;");
    }

    $("#commentarea").focusout(function() {
        console.log("ui enabled");
        job.comment = encode_utf8($(this).val().removelinebreak().delquote());
        console.log("comment added:" + job.comment);
        ui_enable();
    });

    $("#annotateoptionsresize").button().click(function() {
        var resizable = $(this).attr("checked") ? false : true;
        tracks.resizable(resizable);

        if (resizable)
        {
            eventlog("disableresize", "Objects can be resized");
        }
        else
        {
            eventlog("disableresize", "Objects can not be resized");
        }
    });

    $("#annotateoptionshideboxes").button().click(function() {
        var visible = !$(this).attr("checked");
        tracks.visible(visible);

        if (visible)
        {
            eventlog("hideboxes", "Boxes are visible");
        }
        else
        {
            eventlog("hideboxes", "Boxes are invisible");
        }
    });

    $("#annotateoptionshideboxtext").button().click(function() {
        var visible = !$(this).attr("checked");

        if (visible)
        {
           // $(".boundingboxtext").show();
        }
        else
        {
            $(".boundingboxtext").hide();
        }
    });
}

function ui_setupkeyboardshortcuts(job, player, tracks)
{
    $(window).keypress(function(e) {
        var target = e.target || e.srcElement;
        if (target.tagName == "TEXTAREA")
        {
            return;
        }

        console.log("Key press: " + e.keyCode);

        if (ui_disabled)
        {
            console.log("Key press ignored because UI is disabled.");
            return;
        }

        var keycode = e.keyCode ? e.keyCode : e.which;
        eventlog("keyboard", "Key press: " + keycode);

       /* if (keycode == 32 || keycode == 116 || keycode == 121)
        {
            // 32 ==> space, 116 ==> t, 121 ==> y
            $("#nextbutton").click();
        }
        if (keycode == 114 || keycode == 117)
        {
            // 114 ==> r, 117 ==>u
            $("#previousbutton").click();
        }
        else if (keycode == 101 || keycode == 105)
        {
            // 101 ==> e, 105 ==>i
            $("#newobjectbutton").click();
        }
        else if (keycode == 98)
        {
            // 98 ==> b
            $("#annotateoptionshideboxes").click();
        }
        else if (keycode == 119 || keycode == 111)
        {
            // 119 ==> w, 111 ==> o
            $("#annotateoptionshideboxtext").click();
        }
        else if (keycode == 113 || keycode == 112)
        {
            // 113 ==> q, 112 ==> p
            $("#annotateoptionsresize").click();
        }*/
//        else
  //      {
            var skip = 0;
            var box_change = 5;
            /*if (keycode == 100 || keycode == 107)
            {
                // 100 ==> d, 107 ==> k
                skip = job.skip > 0 ? -job.skip : -10;
            }
            else if (keycode == 102 || keycode == 106)
            {
                // 102 ==> f, 106 ==> j
                skip = job.skip > 0 ? job.skip : 10;
            }*/
            if (keycode == 103 || keycode == 110)
            {
                // 103 ==> g, 110 ==> n
                skip = job.skip > 0 ? job.skip : 1;
            }
            else if (keycode == 98 || keycode == 109)
            {
                // 98 ==> b, 109 ==> m
                skip = job.skip > 0 ? -job.skip : -1;
            }
            else if (keycode == 101)//move bottom side up
            {
                // 101 ==> e                 
                
                var track3 = tracks.tracks;

                var track = track3[0];
                var old_position = track.pollposition();            

                old_position.ybr = old_position.ybr - box_change;
                old_position.height = old_position.height - box_change;

                track.draw(track.handle,old_position);
                track.fixposition();
                track.recordposition();
                track.notifyupdate();

            }
            else if (keycode == 100)//move bottom side down
            {
                // 100 ==> d                 
                
                var track3 = tracks.tracks;

                var track = track3[0];
                var old_position = track.pollposition();            

                old_position.ybr = old_position.ybr + box_change;
                old_position.height = old_position.height + box_change;

                track.draw(track.handle,old_position);
                track.fixposition();
                track.recordposition();
                track.notifyupdate();

            }
            else if (keycode == 102)//move right side right
            {
                // 102 ==> f                 
                
                var track3 = tracks.tracks;

                var track = track3[0];
                var old_position = track.pollposition();            

                old_position.xbr = old_position.xbr + box_change;
                old_position.width = old_position.width + box_change;

                track.draw(track.handle,old_position);
                track.fixposition();
                track.recordposition();
                track.notifyupdate();

            }
            else if (keycode == 115)//move right side left
            {
                // 115 ==> s                 
                
                var track3 = tracks.tracks;

                var track = track3[0];
                var old_position = track.pollposition();            

                old_position.xbr = old_position.xbr - box_change;
                old_position.width = old_position.width - box_change;

                track.draw(track.handle,old_position);
                track.fixposition();
                track.recordposition();
                track.notifyupdate();

            }
            else if ( keycode ==  106)//move left
            {
                // 102 ==> f, 106 ==> j                
                
                var track3 = tracks.tracks;

                var track = track3[0];
                var old_position = track.pollposition();            

                old_position.xtl = old_position.xtl - box_change;
                old_position.xbr = old_position.xbr - box_change;
                //old_position.ytl = old_position.ytl - box_change;
                //old_position.ybr = old_position.ybr - box_change;

                track.draw(track.handle,old_position);
                track.fixposition();
                track.recordposition();
                track.notifyupdate();

            }
            else if ( keycode ==  107)//move down
            {
                // 103 ==> g, 107 ==> k                
                
                var track3 = tracks.tracks;

                var track = track3[0];
                var old_position = track.pollposition();            

                //old_position.xtl = old_position.xtl - box_change;
                //old_position.xbr = old_position.xbr - box_change;
                old_position.ytl = old_position.ytl + box_change;
                old_position.ybr = old_position.ybr + box_change;

                track.draw(track.handle,old_position);
                track.fixposition();
                track.recordposition();
                track.notifyupdate();

            }
            else if ( keycode ==  105)//move up
            {
                // 114 ==> r, 105 ==> i                
                
                var track3 = tracks.tracks;

                var track = track3[0];
                var old_position = track.pollposition();            

                //old_position.xtl = old_position.xtl - box_change;
                //old_position.xbr = old_position.xbr - box_change;
                old_position.ytl = old_position.ytl - box_change;
                old_position.ybr = old_position.ybr - box_change;

                track.draw(track.handle,old_position);
                track.fixposition();
                track.recordposition();
                track.notifyupdate();

            }
            else if ( keycode ==  108)//move right
            {
                // 116 ==> t, 108 ==> l                
                
                var track3 = tracks.tracks;

                var track = track3[0];
                var old_position = track.pollposition();            

                old_position.xtl = old_position.xtl + box_change;
                old_position.xbr = old_position.xbr + box_change;
                //old_position.ytl = old_position.ytl - box_change;
                //old_position.ybr = old_position.ybr - box_change;

                track.draw(track.handle,old_position);
                track.fixposition();
                track.recordposition();
                track.notifyupdate();

            }
         /*   else if (keycode == 115 || keycode == 108)
            {
                // 115 ==> s, 108 ==> l
                var cur_frame = player.frame;
                var final_frame = player.job.start;
                // find the closest manually annotated frame from the left
                for (var i in tracks.tracks)
                {
                    var track = tracks.tracks[i];
                    if (!track.deleted)
                    {
                        var seek_frame = player.job.start;
                        for (var frame in track.journal.annotations)
                        {
                            frame = parseInt(frame);
                            if (frame >= cur_frame)
                            {
                                break;
                            }
                            seek_frame = frame;
                        }
                        if (seek_frame > final_frame)
                        {
                            final_frame = seek_frame;
                        }
                    }
                }
                skip = final_frame - cur_frame;
            }
            else if (keycode == 103 || keycode == 104)
            {
                // 103 ==> g, 104 ==> h
                var cur_frame = player.frame;
                var final_frame = player.job.stop;
                // find the closest manually annotated frame from the right
                for (var i in tracks.tracks)
                {
                    var track = tracks.tracks[i];
                    if (!track.deleted)
                    {
                        var seek_frame = player.job.stop;
                        for (var frame in track.journal.annotations)
                        {
                            frame = parseInt(frame);
                            if (frame > cur_frame)
                            {
                                seek_frame = frame;
                                break;
                            }
                        }
                        if (seek_frame < final_frame)
                        {
                            final_frame = seek_frame;
                        }
                    }
                }
                skip = final_frame - cur_frame;
            }*/

            if (skip != 0)
            {
                //player.pause();
                player.displace(skip);

                ui_snaptokeyframe(job, player);
            }
    //    }
    });

}

function ui_canresize()
{
    return !$("#annotateoptionsresize").attr("checked");
}

function ui_areboxeshidden()
{
    return $("#annotateoptionshideboxes").attr("checked");
}

function ui_setupslider(player)
{
    var slider = $("#playerslider");
    slider.slider({
        range: "min",
        value: player.job.start,
        min: player.job.start,
        max: player.job.stop,
        slide: function(event, ui) {
            //player.pause();
            player.seek(ui.value);
            // probably too much bandwidth
            //eventlog("slider", "Seek to " + ui.value);
        }
    });

    /*slider.children(".ui-slider-handle").hide();*/
    slider.children(".ui-slider-range").css({
        "background-color": "#868686",
        "background-image": "none"});

    slider.css({
        marginTop: "6px",
        width: parseInt(slider.parent().css("width")) - 200 + "px",
        float: "right"
    });

    /*player.onupdate.push(function() {
        slider.slider({value: player.frame});
    });*/
}

function ui_iskeyframe(frame, job)
{
    return frame == job.stop || (frame - job.start) % job.skip == 0;
}

function ui_snaptokeyframe(job, player)
{
    if (job.skip > 0 && !ui_iskeyframe(player.frame, job))
    {
        console.log("Fixing slider to key frame");
        var remainder = (player.frame - job.start) % job.skip;
        if (remainder > job.skip / 2)
        {
            player.seek(player.frame + (job.skip - remainder));
        }
        else
        {
            player.seek(player.frame - remainder);
        }
    }
       $("#not_done_text").html(" ");
}

function ui_setupclickskip(job, player, tracks, objectui)
{
    if (job.skip <= 0)
    {
        return;
    }

    player.onupdate.push(function() {
        if (ui_iskeyframe(player.frame, job))
        {
            console.log("Key frame hit");
            //player.pause();
            //$("#newobjectbutton").button("option", "disabled", false);
            $("#nextbutton").button("option", "disabled", false);
            tracks.draggable(true);
            tracks.resizable(ui_canresize());
            tracks.recordposition();
            objectui.enable();
        }
        else
        {
            $("#newobjectbutton").button("option", "disabled", true);
            $("#nextbutton").button("option", "disabled", true);
            tracks.draggable(false);
            tracks.resizable(false);
            objectui.disable();
        }
    });

    $("#playerslider").bind("slidestop", function() {
        ui_snaptokeyframe(job, player);
    });
}

function ui_loadprevious(job, objectui)
{
    var overlay = $('<div id="turkic_overlay"></div>').appendTo("#container");
    var note = $("<div id='submitdialog'>One moment...</div>").appendTo("#container");

    server_request("getboxesforjob", [job.jobid], function(data) {
        overlay.remove();
        note.remove();

        for (var i in data)
        {
            objectui.injectnewobject(data[i]["label"],
                                     data[i]["boxes"],
                                     data[i]["attributes"]);
        }

        if(data.length == 0)        
        {
            $("#newobjectbutton").click();
            $("#newobjectbutton").button("option", "disabled", true);
        }
    });
}

function ui_setupsubmit(job, tracks)
{
    $("#submitbutton").button({
        icons: {
            primary: 'ui-icon-check'
        }
    }).click(function() {
        if (ui_disabled) return;

        var a = tracks.tracks[0].journal.annotations;

        var num_annotations = Object.keys(a).length;

        //var min_a = job.stop/1.5;
        var min_a = job.stop/50;

        if(num_annotations < min_a)
        { 
            alert("You haven't annotated all the images yet!");
            $("#not_done_text").html("You haven't annotated all the images yet!");
            return;
        }

        if(confirm("Do you really want to SUBMIT?")){
            ui_submit(job, tracks);
        } else {
            return;
        }
    });
}

function ui_submit(job, tracks)
{
    console.dir(tracks);

    completeinfo = "[[\"" + job.comment + "\"]," + tracks.serialize() + "]";
    console.log("Start submit - status: " + completeinfo);

    if (!mturk_submitallowed())
    {
        alert("Please accept the task before you submit.");
        return;
    }

    /*if (mturk_isassigned() && !mturk_isoffline())
    {
        if (!window.confirm("Are you sure you are ready to submit? Please " +
                            "make sure that the entire video is labeled and " +
                            "your annotations are tight.\n\nTo submit, " +
                            "press OK. Otherwise, press Cancel to keep " +
                            "working."))
        {
            return;
        }
    }*/

    var overlay = $('<div id="turkic_overlay"></div>').appendTo("#container");
    ui_disable();

    var note = $("<div id='submitdialog'></div>").appendTo("#container");

    function validatejob(callback)
    {
        server_post("validatejob", [job.jobid], completeinfo,
            function(valid) {
                if (valid)
                {
                    console.log("Validation was successful");
                    callback();
                }
                else
                {
                    note.remove();
                    overlay.remove();
                    ui_enable();
                    console.log("Validation failed!");
                    ui_submit_failedvalidation();
                }
            });
    }

    function respawnjob(callback)
    {
        server_request("respawnjob", [job.jobid], function() {
            callback();
        });
    }

    function savejob(callback)
    {
        server_post("savejob", [job.jobid],
            completeinfo, function(data) {
                callback()
            });
    }

    function finishsubmit(redirect)
    {
        if (mturk_isoffline())
        {
            window.setTimeout(function() {
                note.remove();
                overlay.remove();
                ui_enable();
            }, 1000);
        }
        else
        {
            window.setTimeout(function() {
                redirect();
            }, 1000);
        }
    }

    if (job.training)
    {
        console.log("Submit redirect to train validate");

        note.html("Checking...");
        validatejob(function() {
            savejob(function() {
                mturk_submit(function(redirect) {
                    respawnjob(function() {
                        note.html("Good work!");
                        finishsubmit(redirect);
                    });
                });
            });
        });
    }
    else
    {
        note.html("Saving...");
        savejob(function() {
            mturk_submit(function(redirect) {
                note.html("Saved!");
                finishsubmit(redirect);
            });
        });
    }
}

function ui_submit_failedvalidation()
{
    $('<div id="turkic_overlay"></div>').appendTo("#container");
    var h = $('<div id="failedverificationdialog"></div>')
    h.appendTo("#container");

    h.append("<h1>Low Quality Work</h1>");
    h.append("<p>Sorry, but your work is low quality. We would normally <strong>reject this assignment</strong>, but we are giving you the opportunity to correct your mistakes since you are a new user.</p>");

    h.append("<p>Please review the instructions, double check your annotations, and submit again. Remember:</p>");

    var str = "<ul>";
    str += "<li>You must label every object.</li>";
    str += "<li>You must draw your boxes as tightly as possible.</li>";
    str += "</ul>";

    h.append(str);

    h.append("<p>When you are ready to continue, press the button below.</p>");

    $('<div class="button" id="failedverificationbutton">Try Again</div>').appendTo(h).button({
        icons: {
            primary: "ui-icon-refresh"
        }
    }).click(function() {
        $("#turkic_overlay").remove();
        h.remove();
    }).wrap("<div style='text-align:center;padding:5x 0;' />");
}

function ui_showinstructions(job)
{
    console.log("Popup instructions");

    if ($("#instructionsdialog").size() > 0)
    {
        return;
    }

    eventlog("instructions", "Popup instructions");

    $('<div id="turkic_overlay"></div>').appendTo("#container");
    var h = $('<div id="instructionsdialog"></div>').appendTo("#container");

    $('<div class="button" id="instructionsclosetop">Dismiss Instructions</div>').appendTo(h).button({
        icons: {
            primary: "ui-icon-circle-close"
        }
    }).click(ui_closeinstructions);

    instructions(job, h)
    $('<div class="button" id="instructionsclosetop">Dismiss Instructions</div>').appendTo(h).button({
        icons: {
            primary: "ui-icon-circle-close"
        }
    }).click(ui_closeinstructions);

    ui_disable();
}

function ui_closeinstructions()
{
    console.log("Popdown instructions");
    $("#turkic_overlay").remove();
    $("#instructionsdialog").remove();
    eventlog("instructions", "Popdown instructions");

    ui_enable();
}

function ui_disable()
{
    if (ui_disabled++ == 0)
    {
        $("#newobjectbutton").button("option", "disabled", true);
        $("#nextbutton").button("option", "disabled", true);
        $("#previousbutton").button("option", "disabled", true);
        $("#submitbutton").button("option", "disabled", true);
        $("#playerslider").slider("option", "disabled", true);

        console.log("Disengaged UI");
    }

    console.log("UI disabled with count = " + ui_disabled);
}

function ui_enable()
{
    if (--ui_disabled == 0)
    {
        //$("#newobjectbutton").button("option", "disabled", false);
        $("#nextbutton").button("option", "disabled", false);
        $("#previousbutton").button("option", "disabled", false);
        $("#submitbutton").button("option", "disabled", false);
        $("#playerslider").slider("option", "disabled", false);

        console.log("Engaged UI");
    }

    ui_disabled = Math.max(0, ui_disabled);

    console.log("UI disabled with count = " + ui_disabled);
}
