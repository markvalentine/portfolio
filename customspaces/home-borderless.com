<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Test Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <style>
      body {
          margin: 0;
          padding: 0;
          border: 0;
      }

      a {
          text-decoration: none;
          display: block;
      }
      div{
        text-align: center;
        padding: 60px 0px;
        font-size: 28px;
        font-family: 'Open Sans', sans-serif;
        color: #EEEEEE;
        letter-spacing: 1px;
        background-color: #C45F5F;
      }
    </style>
  </head>

  <body style="margin:0;padding:0;border:0;">
    <img src="CS-Home-borderless.png" style="width:100%">
    <a href="search-results.html"><div>To Search Results</div></a>
  </body>
</html>