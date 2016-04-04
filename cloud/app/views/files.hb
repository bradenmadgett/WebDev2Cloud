<!DOCTYPE html>
<html>
  <head>
    <title>Files!</title>
  </head>
  <body>
    <form method="POST" enctype="multipart/form-data">
      Upload a file:
      <input type="file" name="myfile"/>
      <br/>
      <input type="submit" value="Upload"/>
    </form>
    {{#if upload}}
    <p>Uploaded: <kbd>{{upload}}</kbd></p>
    {{/if}}
    <p><a href="download">Download the file</a></p>
  </body>
</html>
