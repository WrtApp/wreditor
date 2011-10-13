<html>
<head>
<title>PHP Server Test</title>
</head>

<body>

	<h1>Server Test</h1>
	<p>
	Below are the results of a series of tests to tell if your server is running with PHP enabled
	</p>

	<p>
	<?php echo "PHP can spit out this line of text. Success."; ?>
	</p>

	<p>
	You should see the word "Success" below. If you don't, your server is not working.
	</p>

	<?php include('test2.html'); ?>

</body>
</html>