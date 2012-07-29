<?php

  $id = $_GET['id'];
  
?>

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>BackOnMyFeet.co.uk</title>
    <meta property="og:title" content="BackOnMyFeet.co.uk">
    <meta property="og:url" content="http://backonmyfeet.co.uk/d.php?id=<?=$id?>">
    <meta property="og:site_name" content="Back On My Feet"/>
    <meta property="og:description" name="description" content="I donated money to Back On My Feet, you should do the same! See my message for the guys.">
    <meta property="og:image" content="http://bomf.niklaspalm.se/images/facebook-image.png">
  </head>
  <body>
    <p>I donated money to Back On My Feet, you should do the same! See my message for the guys</p>
    <script type="text/javascript" charset="utf-8">
      window.location = "./#donation:<?=$_GET['id']?>";
    </script>
  </body>
</html>