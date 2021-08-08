exports.create = (req, res)=>{
    res.send('create');
    console.log('create user');
    console.log(req);
}
exports.read = (req, res)=>{
    res.send('read');
    console.log('read user');
    console.log(req);
}
exports.update = (req, res)=>{
    res.send('update');
    console.log('update user');
    console.log(req);
}
exports.delete = (req, res)=>{
    res.send('delete');
    console.log('delete user');
    console.log(req);
}
