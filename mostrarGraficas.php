<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Fuzzy Logic</title>
</head>
<script src="./js/logicaDifusa/presentation.js"></script>
<script src="./js/logicaDifusa/raphael-min.js"></script>
<body onLoad="presentation();">
<h1>Input Variables:</h1>
<div id="variables_input"></div>
<hr>
<h1>Output Variables:</h1>
<div id="variable_output"></div>
<hr>
<h1>Inferences:</h1>
<div id="inferences"></div>
<hr>
<h1>Input:</h1>
<div id="input"></div>
<hr>
<span id="result"><?php Result: echo $_GET['valorCrisp'] ?></span>
<div id="draw_result"></div>
<script src="./js/logicaDifusa/fuzzy.min.js"></script>
<script>
	var obj = {
		crisp_input: [<?php echo $_GET['ayudas'] ?>, <?php echo $_GET['errores'] ?>, <?php echo $_GET['tiempo'] ?>],
		variables_input: [
			{
				name: "Errores",
				setsName: ["Pocos", "Normales", "Muchos"],
				sets: [
					[0,0,0,1.5],
					[1,2,2,3],
					[2,5,5,5]
				]
			},
			{
				name: "Ayuda",
				setsName: ["Pocas", "Normales", "Muchas"],
				sets: [
					[0,0,0,1],
					[1,2,2,3],
					[2,5,5,5]
				]
			},
			{
				name: "Tiempo",
				setsName: ["Poco", "Moderado", "Excedido"],
				sets: [
					[0,0,0,1],
					[1,2,2,3],
					[2,5,5,5]
				]
			}
		],
		variable_output: {
			name: "Complejidad",
			setsName: ["Facil", "Media", "Dificil"],
			sets: [
				[0,0,0,45],
				[45,65,65,85],
				[85,100,100,100]
			]
		},
		inferences: [
			[2,1,0],
			[2,1,0],
			[2,1,0]
		]
	};
	var fl = new FuzzyLogic();
</script>
</body>
</html>
