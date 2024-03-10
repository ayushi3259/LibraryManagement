User{
    id : 1,
    firstName : "",
    lastName : "",
    branch : "",
    (unique) roll : 1,
    (unique, not null) email : "",
    password : "BcryptValue",
    sessionId : encodeBase64(email:Bcrypt{password}:tokenIssueTimeInUnix),
    sessionStartTime : tokenIssueTimeInUnix(current time),
    isAdmin : False,

}

1). signUp : "user/signup" -> create user in user table {} : return 
{
    user: User(),
    sessionId : encodeBase64(username:Bcrypt{password}:currentTimeInunix)
}

2). login : "user/login" -> input email and password : return (if password and email exist)
{
    user: User(),
    sessionId : encodeBase64(username:Bcrypt{password}:currentTimeInunix)
}

