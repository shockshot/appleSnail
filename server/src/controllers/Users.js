import db from '../models';



export const login = (req, res) => {
  db.User.findAll().then( result => {
    const users = result.map(data=>data.dataValues);

    return res.send(JSON.stringify(users));

  });

  // const userInfo = {
  //   userNo : 1,
  //   userId : 'abcde@navar.com',
  //   userName : '홍길동'
  // }
  
}