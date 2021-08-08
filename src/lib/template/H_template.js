module.exports = {
	main_template:function(user_list){
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
			<br>
			<br>
			<br>
			<br>
			<p>
				<a href="/create">create</a>
			</p>
			<table>
				<tr>
					<td>순번</td>
					<td>이름</td>
				</tr>
				${user_list}
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
