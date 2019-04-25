const keys = require('./keys');
const mongoose = require('mongoose');

const Employer = mongoose.model('employer');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        Employer.findById(jwt_payload.id)
            .then(employer => {
                if (employer) {
                    return done(null, employer);

                }

                return done(null, false);
            })
            .catch(err => console.log(err));
    }))
};


