---
title: Why are the GIF files so big?
_id: huge-file
order: 5
nav_title: Big files
---

Peek is using ImageMagick to optimize the GIF files and reduce the file size. As was shown in <a href="https://github.com/phw/peek/issues/3#issuecomment-243872774">issue #3</a> the resulting files are already small and compare well to other GIF recording software. In the end the GIF format is not well suited for doing large animations with a lot of changes and colors. For best results:
<ul>
<li><span>Use a lower frame rate. 10fps is the default and works well, but in many cases you can even get good results with lower framerates.</span></li>
    <li><span>Avoid too much change. If there is heavy animation the frames will differ a lot.</span></li>
    <li><span>Record small areas or use the downsample option to scale the image. The GIF file format is not well suited for high resolution or full screen recording.</span></li>
    <li><span>Avoid too many colors, since GIF is limited to a 256 color palette. This one is not so much about file size but more about visual quality.</span></li>
    <li><span>If the above suggestions are not suitable for your use case, consider using WebM or MP4 format (see below).</span></li>
</ul>