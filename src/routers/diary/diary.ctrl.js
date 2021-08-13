exports.create = (req, res) => {
    console.log('create diary');
    console.log(req);
    res.send('create');
}
exports.list = (req, res) => {
    console.log('list of diary');
    console.log(req);
    res.send('list');
}
exports.read = (req, res) => {
    console.log('read diary');
    console.log(req);
    res.send('read');
}
exports.update = (req, res) => {
    console.log('update diary');
    console.log(req);
    res.send('update');
}
exports.delete = (req, res) => {
    console.log('delete diary');
    console.log(req);
    res.send('delete');
}