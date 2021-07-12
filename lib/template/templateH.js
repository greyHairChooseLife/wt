module.exports = {
	main_template:function(name_list){
	return `
		<!doctype html>
		<html>
		<head>
			<title>5y diary</title>
			<meta charset="utf-8">
		</head>
		<body>
			<h1>5year diary</h1>
			<h2>who's diary?</h2>
			<br>
			<p>log-in</p>
			<p><input type="text" placeholder="ID"></p>
			<p><input type="text" placeholder="PW"></p>
			<p>
				<a href="/create">create</a>
			</p>
			<table>
				<tr>
					<td>순번</td>
					<td>이름</td>
				</tr>
				${name_list}
			</table>
		</body>
		</html>
		<style>
			td {
			border : solid; 1px;
			}
		</style>
		`;
	}
}
