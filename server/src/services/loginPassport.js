import db from '../models';
import bcrypt from 'bcrypt';

/**passport */
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const hashRounds = 10;

/**메인 로그인 로직 */
const loginFunc = function(req, userId, password, done) {
  let user;
  db.User.findOne({
    where: {
      userId: userId,
      del: 0
    }
  })
  .then( result => {
    if(!result) { return done(null, false); }
    user = result.dataValues;
    return bcrypt.compare(password, user.password)
  }, err => done(err) )
  .then( res => {
    if(!res) {
      return done(null, false);
    }else{
      return done(null, user);
    }
  })
}

passport.use(new Strategy({
    usernameField: 'userId',
    passwordField: 'password',
    session: false, // 세션에 저장 여부
    passReqToCallback: true
  },loginFunc
));

//로그인 성공시 실행
passport.serializeUser(function(user, done) {
  // console.log('serializeUser. user:', user);
  done(null, user);
});

//서버로 들어오는 요청마다 실제 DB와 비교
// passport.deserializeUser(function(user, cb) {
//   // console.log('deserial');
//   db.Users.find({
//     where: {
//       userId: user.userId
//     }
//   }).then(user => {
//     cb(null, user.dataValues);
//   }, err=>{
//     // console.log('deserializeUser err', err);
//     cb(err);
//   })
// });


// router.use(passport.session());

// loginPassport.initialize(), 
// loginPassport.authenticate('local', {}),

const loginPassport = {
  init: passport.initialize(),
  auth: passport.authenticate('local', {})
}


export default loginPassport;