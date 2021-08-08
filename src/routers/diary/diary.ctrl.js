exports.create = (res, req)=>{
    res.send('create');
    console.log('create diary');
    console.log(req);
}
exports.read = (res, req)=>{
    res.send('read');
    console.log('read diary');
    console.log(req);
}
exports.update = (res, req)=>{
    res.send('update');
    console.log('update diary');
    console.log(req);
}
exports.delete = (res, req)=>{
    res.send('delete');
    console.log('delete diary');
    console.log(req);
}