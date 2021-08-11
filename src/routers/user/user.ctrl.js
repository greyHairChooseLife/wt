// 회원 관리에 jwt 토큰을 사용해야 할 것 같습니다.
const db = require('../../config/db.js');

exports.register = (req, res)=>{ // 회원 가입
    // todo
    // 1. email, password 값 존재 확인
    // 2. DB에 이메일이 이미 존재하는 검사
    // 3. 없다면 이메일 인증시작
    // 4. 이메일과 비밀번호를 db에 저장
    // 5. 다시 로그인 요청 혹은 자동 로그인
    // 6. / 로 리다이렉션,
    
    console.log('register user');
    console.log(req);
    res.send('register');
}
exports.edit = (req, res)=>{
    // 회원 정보 수정 구현
    console.log('login user');
    console.log(req);
    res.send('login');
}
exports.login = (req, res)=>{ // 로그인, 세션에 로그인 정보를 저장
    // todo
    // 1. email, password 값 존재 확인
    // 2. DB에 계정이 존재하는 검사
    // 3. 계정이 존재한다면 password와 함께 다시 검색
    // 4. 로그인 완료 토큰 발급
    // 5. / 로 리다이렉션
    console.log('login user');
    console.log(req);
    res.send('login');
}
exports.logout = (req, res)=>{ // 로그아웃, 세션 파괴
    // todo
    // 1. email, password 값 존재 확인
    // 2. / 로 리다이렉션
    console.log('logout user');
    console.log(req);
    res.send('logout');
}
exports.delete = (req, res)=>{ // 계정 삭제
    console.log(req);
    console.log('delete account');
    res.send('delete account');
}
