exports.create = (req, res)=>{
    res.send('create');
    console.log('create diary');
    console.log(req);
}
exports.read = (req, res)=>{
    res.send('read');
    console.log('read diary');
    console.log(req);
}
exports.update = (req, res)=>{
    res.send('update');
    console.log('update diary');
    console.log(req);
}
exports.delete = (req, res)=>{
    res.send('delete');
    console.log('delete diary');
    console.log(req);
}