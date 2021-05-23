module.exports = {
	daily_template:function(title, content, uuid){
		return `
			<!doctype html>
			<html>
			<head>
				<title>${title}'s diary</title>
				<meta charset="utf-8">
			</head>
			<body>
				<p><a href="/">home page</a></p>
				<h1>daily</h1>
				<h2>who's : ${title}</h2>
				<table>
				${content}
				</table>
				<form action="/${title}/daily_upload" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="hidden" name="name" value="${title}">
					<textarea name="content" placeholder="2문장 이하, 오늘의 일기"></textarea>
					<input type="submit" value="저장">
				</form>
				<table>
				<tr>
				<td>
				<form action="/${title}/daily" method="post">
					<input type="submit" value="daily">
				</form>
				</td>
				<td>
				<form action="/${title}/weekly" method="post">
					<input type="submit" value="weekly">
				</form>
				</td>
				<td>
				<form action="/${title}/monthly" method="post">
					<input type="submit" value="monthly">
				</form>
				</td>
				<td>
				<form action="/${title}/annualy" method="post">
					<input type="submit" value="annualy">
				</form>
				</td>
				<td>
				<form action="/${title}/lifelong" method="post">
					<input type="submit" value="lifelong">
				</form>
				</td>
				<td>
				<form action="/${title}/picture_story" method="post">
					<input type="submit" value="picture_story">
				</form>
				</td>
				</tr>
				</table>
			</body>
			</html>
			<style>
				textarea {
				width: 500px;
				height: 50px;
				}
				td {
				border: solid 1px;
				}
				td.content {
				text-align: center;
				width: 800px;
				height: 100px;
				}
			</style>
		`;
	}
}
