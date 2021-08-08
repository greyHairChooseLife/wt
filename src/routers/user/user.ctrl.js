exports.create = (res, req)=>{
    res.send('create');
    console.log('create user');
    console.log(req);
}
exports.read = (res, req)=>{
    res.send('read');
    console.log('read user');
    console.log(req);
}
exports.update = (res, req)=>{
    res.send('update');
    console.log('update user');
    console.log(req);
}
exports.delete = (res, req)=>{
    res.send('delete');
    console.log('delete user');
    console.log(req);
}
