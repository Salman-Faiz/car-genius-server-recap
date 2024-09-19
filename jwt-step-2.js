/**
 *
 * Make API secure
 *
 * the person who should have\\
 *
 * concept :
 * 1.Assign two tokens for each person (access token,,refresh token)
 * 2.Access token contain:user identification (email,role etc) valid for a shorter duration
 * 3.Refresh Token is used to recreate an access token that was expired.
 * 4.if refresh token is invalid then log out the user.
 *
 */

/**
 * --1--jwt- json web token
 * 2.generate a token by using jwt.sign
 * 3.create api set to cookie... httpOnly, secure,sameSite
 * 4.from client side: axios withCredentials:true {if use fetch thn have to use credentials:includes}
 * 5.cors setup ,,origin:'url' and credentials:true
 */

/**
 *For secure api calls
 1.server side: install cookie parser and use it as a middleware
 2.req.cookies
 3.on client Side: make api call using axios withCredentials true
 */
