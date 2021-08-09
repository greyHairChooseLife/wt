exports.list = (req, res) => {
    console.log('list of users');
    console.log(req);
    res.send('list');
}
exports.read = (req, res) => {
    console.log('read user');
    console.log(req);
    res.send('read');
}
exports.update = (req, res) => {
    console.log('update user');
    console.log(req);
    res.send('update');
}
exports.delete = (req, res) => {
    console.log('delete user');
    console.log(req);
    res.send('delete');
}