/**
 *install json web token
 *jwt require
 *jwt.sign(payload,secret,{expiredIn:'1hr'})
 *send the token to the client side
 */

/**
 * How to store token in the client side
 *1. memory-not recommended
 2.local storage--(can be hacked by XSS attack {cross side scripting })--ok type
 3.browser cookies- http only-- recommended
 */

/**
 * 1.set cookie with http only ,for development secure:false
 *
 * 2.cors set {cross origin} credential true
 * cors({
    origin: ["http://localhost:5000"],
    credentials:true;
  })
 *
 * 3client side axios setting
 *  in axios set {withCredentials:true}
 */

/**
 *1 To send the cookies from the client side make sure tou added withCredential : true for the api call using axios

 2.use cookieParser as middleware 
 */
