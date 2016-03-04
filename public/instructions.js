function instructions(job, h)
{
    h.append("<h1>May only work in CHROME</h1>");
    h.append("<h1>Important Instructions</h1>");
    h.append("<p>You are to draw a box around the given object of interest in each image.</p>");


    var str = "<ul>";
    str += "<li>Make your boxes as tight as possible.</li>";
/*    if (job.perobject > 0)
    {
        var amount = Math.floor(job.perobject * 100);
        str += "<li>We will pay you <strong>" + amount + "&cent; for each object</strong> you annotate.</li>";
    }
    if (job.completion > 0)
    {
        var amount = Math.floor(job.completion * 100);
        str += "<li>We will award you a <strong>bonus of " + amount + "&cent; if you annotate every object</strong>.</li>";
    }
    if (job.skip > 0)
    {
       // str += "<li>When the video pauses, adjust your annotations.</li>";
    } */
    str += "<li>We will hand review your work.</li>";
    str += "<li>See the tips for going fast at the end of these instructions.</li>";
    str += "</ul>";
    h.append(str);

    //h.append("<h2>Getting Started</h2>");

   h.append("<h3>Training</h3>");
    h.append("<p>If you have not completed a task with us before, you may be given 4 training images to make sure you understand the task.</p>"); 




   h.append("<h3>Object of Interest Image</h3>");


    h.append("<img src='ooi_image.jpg' align='right'heigth='250' width='250'>");
    h.append("<p>The first image you see will contain one object, the object of interest. For all other images you are to find this object, and annotate it with a bounding box(You should label this image too).</p>"); 




   //h.append("<img src='box.jpg' align='right'>");
  //  h.append("<p> Position your cursor over the view screen to click on the corner of the object of interest. Use the cross hairs to line up your click. Click on another corner to finish drawing the box. The rectangle should tightly and completely enclose the object you are annotating. Resize the box, if necessary, by dragging the edges of the box.</p>");

    h.append("<p> To start, click the top left and bottom right points of the object. The rectangle should tightly and completely enclose the object. Resize the box, if necessary, by dragging the edges of the box or using the <strong> keyboard shortcuts </strong>.</p>");


    h.append("<img src='pringles_bbq_gtbox_labelon.png' align='right'heigth='300' width='400'>");
   // h.append("<img src='pringles_bbq_gtbox_labeloff.jpg'align='right'heigth='300' width='400'>");


   h.append("<h3> Finding the Object</h3>");
   h.append("<p> If you are having trouble finding the object, we provide a red dot near the object to help you find it. Note that the <strong> dot may not be on the object, or may be on a different object, but you should still only annotate the object of interest from the first image</strong>. The dots are simply a  guidline to help you find the object, or distnguish it from similar objects in the scene. </p>");


   // h.append("<img src='classify.jpg' align='right'>");
   // h.append("<p>On the right, directly below the New Object button, you will find a colorful box. The box is prompting you to input which type of object you have labeled. Click the correst response.</p>");

    /*if (job.skip > 0)
    {
        h.append("<p>Press the <strong>Play</strong> button. The video will play. When the video automatically pauses, adjust the boxes. Using your mouse, drag-and-drop the box to the correct position and resize if necessary. Continue in this fashion until you have reached the end of the video.</p>");
    }
    else
    {
        h.append("<p>Press the <strong>Play</strong> button. The video will begin to play forward. After the object you are tracking has moved a bit, click <strong>Pause</strong>. Using your mouse, drag-and-drop the box to the correct position and resize if necessary. Continue in this fashion until you have reached the end of the video.</p>");
    }

    if (job.perobject > 0)
    {
        h.append("<p>Once you have reached the end, you should rewind by pressing the rewind button (next to Play) and repeat this process for every object of interest. You are welcome to annotate multiple objects each playthrough. We will pay you a bonus for every object that you annotate.</p>");
    }
    else
    {
        h.append("<p>Once you have reached the end, you should rewind by pressing the rewind button (next to Play) and repeat this process for every object of interest. You are welcome to annotate multiple objects each playthrough.</p>");
    }
   */



        h.append("<p>To move to the next image, click the <strong>Next Image</strong> button. To go back to previous images, click the <strong>Previous Image</strong> button.</p>");









    //h.append("<img src='outsideoccluded.jpg' align='right'>");
    h.append("<img src='check_boxes.jpg' align='right'heigth='150' width='200'>");
/*    h.append("<p>If an object leaves the screen, mark the <strong>Outside of view frame</strong> checkbox for the corresponding sidebar rectangle. Make sure you click the right button. When you mouse over the controls, the corresponding rectangle will light up in the view screen. Likewise, if the object you are tracking is still in the view frame but the view is obstructed (e.g., inside a car), mark the <strong>Occluded or obstructed</strong> checkbox. When the object becomes visible again, remember to uncheck these boxes. If there are additional checkboxes describing attributes, mark those boxes for the duration that it applies. For example, only mark \"Walking\" when the person is walking.</p>");

    h.append("<p>If there are many objects on the screen, it can become difficult to select the right bounding box. By pressing the lock button <img src='lock.jpg'> on an object's sidebar rectangle, you can prevent changes to that track. Press the lock button again to renable modifications.</p>");

    h.append("<p>Remembering which box correspond to which box can be confusing. If you click on a box in the view screen, a tooltip will pop that will attempt to remind you of the box's identity.</p>");


    h.append("<p>When you are ready to submit your work, rewind the video and watch it through one more time. Does each rectangle follow the object it is tracking for the entire sequence? If you find a spot where it misses, press <strong>Pause</strong> and adjust the box. After you have checked your work, press the <strong>Submit HIT</strong> button. We will pay you as soon as possible.</p>");

*/




    h.append("<p>If the object is not in the image, mark the <strong>Outside of view frame</strong> checkbox (this may happen very often or not at all). <br/><br/> Likewise, if the object is still in the image but the view is obstructed(or if the object is cut-off on the boundary), mark the <strong>Occluded or obstructed</strong> checkbox. <strong> Still annotate the object if it is occluded. </strong>  In the next image, remember to uncheck these boxes if the object becomes visible. </p>");


//    h.append("<p>When you are ready to submit your work, you may want to double check using the <strong> Previous Image</strong> button. After you have checked your work, press the <strong>Submit HIT</strong> button. We will pay you as soon as possible.</p>");









    h.append("<h2>How We Accept Your Work</h2>");
    h.append("<p>We will hand review your work and we will only accept high quality work. Your annotations are not compared against other workers. Follow these guidelines to ensure your work is accepted:</p>");

    h.append("<h3>Label Every Image</h3>")
    //h.append('<iframe title="YouTube video player" width="560" height="349" src="https://www.youtube.com/embed/H8cMZkz8Kbw?rel=0" frameborder="0" allowfullscreen></iframe>');
    //h.append("<img src='secret.png'>");
    //h.append("<img src='everyobject.jpg'>");

    /*if (job.perobject > 0)
    {
        h.append("<p>Every object of interest should be labeled for the entire video. The above work was accepted because every object has a box around it. An object is not labeled more than once. Even if the object does not move, you must label it. We will pay you a bonus for every object you annotate.</p>");
    }
    else
    {
        h.append("<p>Every object of interest should be labeled for the entire video. The above work was accepted because every object has a box around it. An object is not labeled more than once. Even if the object does not move, you must label it.</p>");
    } */

    h.append("<p> Even though a box may be shown in the image, an annotation will only be recorded if you manually move the box to the correct location. An annotation is recorded once you see <strong>two crossing lines</strong> inside the box.  So <strong> annotating one box and just clicking through the rest of the images will not be accepted </strong>. </p>"); 


    h.append("<h3>Boxes Are Tight</h3>");
    h.append("<table><tr><td><img src='good_pepto.jpg'height='200' width='300'></td><td><img src='bad_pepto.jpg'height='200' width='300'></td></tr><tr><th>Good</th><th>Bad</th></tr></table>");
    h.append("<table><tr><td><img src='good_box.jpg'height='200' width='300'></td><td><img src='bad_box.jpg'height='200' width='300'></td></tr><tr><th>Good</th><th>Bad</th></tr></table>");
    h.append("<table><tr><td><img src='good_nature.jpg'height='200' width='300'></td><td><img src='bad_nature.jpg'height='200' width='300'></td></tr><tr><th>Good</th><th>Bad</th></tr></table>");
    h.append("<p>The boxes you draw must be tight. They boxes must fit around the object as close as possible. The loose annotation on the right would be rejected while the tight annotation on the left will be accepted.</p>");

/*    h.append("<h3>Entire Video is Labeled</h3>")
    h.append("<img src='sequence1.jpg'> ");
    h.append("<img src='sequence3.jpg'> ");
    h.append("<img src='sequence4.jpg'><br>");
    h.append("<p>The entire video sequence must be labeled. When an object moves, you must update its position. A box must describe only one object. You should never change which object identity a particular box tracks.</p>");
*/



    h.append("<h3>Out of image vs. in image</h3>");
    h.append("<p>In order for your work to be accepted, you must correctly label the object as being out of the image if it is not present. You must also <strong> remember to uncheck the box once the obejct is present in the image again </strong>.</p>");

    //h.append("<img src='entering1.png'> <img src='entering2.png'> <img src='entering3.png'> <img src='entering4.png'><br>");
    h.append("<img src='object_in_frame2.jpg' height='200' width='200'> <img src='object_outside_frame2.jpg' height='200' width='200'> <br>");

  /*  h.append("<p>If one object enters another object (such as a person getting inside a car), you should mark the disappearing object as outside of the view frame. Likewise, you should start annotating an object the moment it steps out of the enclosing object.</p>");

    h.append("<img src='outofcar1.png'> <img src='outofcar2.png'> <img src='outofcar3.png'> <br>");

    h.append("<p>If an object disappears from the scene and the exact same object reappears later in the scene, you must mark that object as back inside the view frame. Do <em>not</em> draw a new object for its second appearance. Simply find the corresponding right-column rectangle and uncheck the <strong>Outside of view frame</strong> checkbox and position the box.</p>");

*/

//    h.append("<h2>Advanced Features</h2>");
/*    h.append("<p>We have provided some advanced tools for videos that are especially difficult. Clicking the <strong>Options</strong> button will enable the advanced options.</p>");
    h.append("<ul>" +
        "<li>Clicking <strong>Disable Resize?</strong> will toggle between allowing you to resize the boxes. This option is helpful when the boxes become especially tiny.</li>" +
        "<li>Clicking <strong>Hide Boxes?</strong> will temporarily hide the boxes on the screen. This is useful when the scene becomes too crowded. Remember to click it again to show the boxes again!</li>" +
        "<li>The <strong>Slow</strong>, <strong>Normal</strong>, <strong>Fast</strong> buttons will change how fast the video plays back. If the video becomes confusing, slowing the play back speed may help.</li>" +
    "</ul>");
*/

   h.append("<h2> Tips For Going Fast</h2>");

    h.append("<p> When starting a new image, move the box so that the top and left sides of the box are in the correct spot, and then adjust the bottom an right sides. <strong> Use the keyboard shortcuts </strong>, they are designed for this strategy.</p>");

    h.append("<p> After you learn the keyboard shortcuts, <strong> zoom in with control +</strong> and use the keyboard to change images</p>");
    h.append("<h3>Keyboard Shortcuts</h3>");
    h.append("<p>These keyboard shortcuts are available for your convenience:(and are printed beldow each image)</p>");
   /* h.append("<div><ul class='keyboardshortcuts'>" +
        "<li><code>t/y</code>  toggles play/pause on the video</li><br>" +
        "<li><code>r/u</code>  rewinds the video to the start</li><br>" +
        "<li><code>e/i</code>  creates a new object</li><br>" +
        "<li><code>f/j</code>  jump forward 10 frames</li><br>" +
        "<li><code>d/k</code>  jump backward 10 frames</li><br>" +
        "<li><code>v/n</code>  step forward 1 frame</li><br>" +
        "<li><code>c/m</code>  step backward 1 frame</li><br>" +
        "<li><code>g/h</code>  jump to next labeled frames</li><br>" +
        "<li><code>s/l</code>  jump to previous labeled frames</li><br>" +
        "<li><code>&nbsp;b&nbsp;</code>  toggles hide boxes</li><br>" +
        "<li><code>w/o</code>  toggles hide labels</li><br>" +
        "<li><code>q/p</code>  toggles disable resize</li><br>" +
        '</ul></div>');*/
    h.append("<div><ul class='keyboardshortcuts'>" +
        "<li><code>f/n</code>  step forward 1 image</li><br>" +
        "<li><code>b/m</code>  step backward 1 image</li><br>" +
        "<li><br></li><br>" +
        "<li><code>e</code> move bottom side up</li><br>" +
        "<li><code>s</code> move right side left </li><br>" +
        "<li><code>d</code> move bottom side down</li><br>" +
        "<li><code>f</code> move right side right</li><br>" +
        "<li><br></li><br>" +
        "<li><code>i</code>  move entire box up</li><br>" +
        "<li><code>j</code>  move entire box left</li><br>" +
        "<li><code>k</code> move entire box down</li><br>" +
        "<li><code>l</code>  move entire box right</li><br>" +
        '</ul></div>');
}
