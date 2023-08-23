import authValidation from '../validations';
// import { AuthMiddleware } from '../../services';
import { AuthController } from '../controllers';
import { baseRouter, baseValidation } from '../../../famwork-shared/api';
import passport from "passport";

// const { POST, PUT, router } = baseRouter();
const { POST, PUT, GET, router } = baseRouter();

POST('/signup-buyer', [baseValidation(authValidation.signupBuyer), AuthController.signUpBuyer]);
GET('/google', [passport.authenticate('google', { scope: ["profile"] })]);
// GET('/google', [passport.authenticate('google', { scope: ["email", "profile"] })]);
GET(
    '/sessions/oauth/google', [
    passport.authenticate('google', {
        failureRedirect: "https://glidehq-buyer-portal.onrender.com/login", // Redirect to failure page
    })]
);
GET(
    '/sessions/oauth/google/callback', [
    passport.authenticate('google', {
        failureRedirect: "https://glidehq-buyer-portal.onrender.com/login", // Redirect to failure page
    }), AuthController.signUpBuyerGoogle]
);
GET('/facebook', [passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
    // scope: ["email", "profile"]
})]);
// GET('/facebook', [passport.authenticate('facebook', {
//     scope: ["email", "profile"]
// })]);
// GET('/facebook', [passport.authenticate('facebook', { scope: ["email", "profile"] })]);
GET(
    '/sessions/oauth/facebook', [
    passport.authenticate('facebook', {
        failureRedirect: "https://glidehq-buyer-portal.onrender.com/login", // Redirect to failure page
    })]
);
GET(
    '/sessions/oauth/facebook/callback', [
    passport.authenticate('facebook', {
        failureRedirect: "https://glidehq-buyer-portal.onrender.com/login", // Redirect to failure page
    }), AuthController.signUpBuyerFacebook]
);
// import passport from "passport";
// import { Router } from 'express';
// import { Request } from 'express';

// const { POST, PUT, router } = baseRouter();
// const { POST, PUT, GET, router } = baseRouter();
// const pass = Router();

POST('/signup-buyer', [baseValidation(authValidation.signupBuyer), AuthController.signUpBuyer]);
// GET('/google', [passport.authenticate('google', { scope: ["email", "profile"] })]);
// GET(
//     '/sessions/oauth/google', [
//     passport.authenticate('google', {
//         failureRedirect: "https://glidehq-buyer-portal.onrender.com/login", // Redirect to failure page
//     })]
// );
// GET(
//     '/sessions/oauth/google/callback', [
//     passport.authenticate('google', {
//         failureRedirect: "https://glidehq-buyer-portal.onrender.com/login", // Redirect to failure page
//     }), AuthController.signUpBuyerGoogle]
// );
// GET(
//     '/sessions/oauth/google/callback',[
//         (req, res, next) => {
//             console.log("am hersbd")
//         passport.authenticate('google', (err: any, user: Express.User, info: any) => {
//             if (err) {
//                 // Handle authentication error
//                 return next(err);
//             }

//             if (!user) {
//                 // Handle authentication failure
//                 return res.redirect('https://glidehq-buyer-portal.onrender.com/login');
//             }

//             // Handle authentication success
//             req.logIn(user, (err) => {
//                 if (err) {
//                     // Handle login error
//                     return next(err);
//                 }

//                 // Redirect to success page
//                 return res.redirect('https://glidehq-buyer-portal.onrender.com');
//             });
//         })(req, res, next);
//     }]
// );

GET('/facebook', [passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
    // scope: ["email", "profile"]
})]);
// GET('/facebook', [passport.authenticate('facebook', {
//     scope: ["email", "profile"]
// })]);
// GET('/facebook', [passport.authenticate('facebook', { scope: ["email", "profile"] })]);
GET(
    '/sessions/oauth/facebook', [
    passport.authenticate('facebook', {
        failureRedirect: "https://glidehq-buyer-portal.onrender.com/login", // Redirect to failure page
    })]
);
GET(
    '/sessions/oauth/facebook/callback', [
    passport.authenticate('facebook', {
        failureRedirect: "https://glidehq-buyer-portal.onrender.com/login", // Redirect to failure page
    }), AuthController.signUpBuyerFacebook]
);
POST('/signup-create-seller', [/*baseValidation(authValidation.signupSeller),*/ AuthController.signUpCreateSeller]);
PUT('/signup-business-info-seller', [/*baseValidation(authValidation.signupSeller),*/ AuthController.signUpBusinessInfoSeller]);
PUT('/signup-bank-info-seller', [/*baseValidation(authValidation.signupSeller),*/ AuthController.signUpBankInfoSeller]);
POST('/signup-admin', [baseValidation(authValidation.signupAdmin), AuthController.signUpAdmin]);


POST('/signin-buyer', [baseValidation(authValidation.signinBuyer), AuthController.signInBuyer]);
POST('/signin-seller', [baseValidation(authValidation.signinSeller), AuthController.signInSeller]);
POST('/signin-status', [baseValidation(authValidation.signinStatusBuyer), AuthController.signInStatus]);
POST('/signin-admin', [baseValidation(authValidation.signinAdmin), AuthController.signInAdmin]);

/**
 *  these class of apis will soon no longer be supported
 *  /sendOTP
 *  /verifyOtp
 *  /verifyPassword
 *  /verifyEmail
 *  /changePassword
 *  /resetPassword
 * @DEPRECATE
 */
// POST('/sendOtp', [baseValidation(authValidation.sendOtpUser), AuthController.sendUserOTP]);
// POST('/verifyOtp', [
//     baseValidation(authValidation.verifyOtpUser), /*forgotPasswordRateLimiter,*/ AuthController.verifyUserOTP]);
// POST('/verifyPassword', [
//     baseValidation(authValidation.verifyPasswordUser), AuthController.verifyUserPassword]);
// POST('/verifyEmail', [
//     baseValidation(authValidation.verifyEmailUser), AuthController.verifyUserEmail]);
// POST('/changePassword', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.changePasswordUser), AuthMiddleware.baseAuthToken, AuthMiddleware.IsUserMiddleware, AuthController.changeUserPassword]);
// POST('/resetPassword', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.resetPasswordUser), AuthController.resetUserPassword]);


POST('/send-otp-buyer', [baseValidation(authValidation.sendOtpBuyer), AuthController.sendBuyerOTP]);
POST('/send-otp-seller', [baseValidation(authValidation.sendOtpSeller), AuthController.sendSellerOTP]);
POST('/send-otp-admin', [baseValidation(authValidation.sendOtpAdmin), AuthController.sendAdminOTP]);

POST('/verify-otp-buyer', [
    baseValidation(authValidation.verifyOtpBuyer), /*forgotPasswordRateLimiter,*/ AuthController.verifyBuyerOTP]);
POST('/verify-otp-seller', [
    baseValidation(authValidation.verifyOtpSeller), /*forgotPasswordRateLimiter,*/ AuthController.verifySellerOTP]);
POST('/verify-otp-admin', [
    baseValidation(authValidation.verifyOtpAdmin), /*forgotPasswordRateLimiter,*/ AuthController.verifyAdminOTP]);

// POST('/verify-password-buyer', [
//     baseValidation(authValidation.verifyPasswordBuyer), AuthController.verifyBuyerPassword]);
// POST('/verify-password-seller', [
//     baseValidation(authValidation.verifyPasswordSeller), AuthController.verifySellerPassword]);
// POST('/verify-password-admin', [
//     baseValidation(authValidation.verifyPasswordAdmin), AuthController.verifyAdminPassword]);

// POST('/verify-email-buyer', [
//     baseValidation(authValidation.verifyEmailBuyer), AuthController.verifyBuyerEmail]);
// POST('/verify-email-seller', [
//     baseValidation(authValidation.verifyEmailSeller), AuthController.verifySellerEmail]);
// POST('/verify-email-admin', [
//     baseValidation(authValidation.verifyEmailAdmin), AuthController.verifyAdminEmail]);

// POST('/change-password-buyer', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.changePasswordBuyer), AuthMiddleware.baseAuthToken, AuthMiddleware.IsBuyerMiddleware, AuthController.changeBuyerPassword]);
// POST('/change-password-seller', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.changePasswordSeller), AuthMiddleware.baseAuthToken, AuthMiddleware.IsSellerMiddleware, AuthController.changeSellerPassword]);
// POST('/change-password-admin', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.changePasswordAdmin), AuthMiddleware.baseAuthToken, AuthMiddleware.IsAdminMiddleware, AuthController.changeAdminPassword]);

POST('/reset-password-buyer', [ /*changePasswordRateLimiter,*/
    baseValidation(authValidation.resetPasswordBuyer), AuthController.resetBuyerPassword]);
// POST('/reset-password-seller', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.resetPasswordSeller), AuthController.resetSellerPassword]);
// POST('/reset-password-admin', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.resetPasswordAdmin), AuthController.resetAdminPassword]);

// POST('/deactivate-account-buyer', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.deactivateAccount), AuthMiddleware.baseAuthToken, AuthMiddleware.IsBuyerMiddleware, AuthController.deactivateAccount]);
// POST('/deactivate-account-seller', [ /*changePasswordRateLimiter,*/
//     baseValidation(authValidation.deactivateAccount), AuthMiddleware.baseAuthToken, AuthMiddleware.IsSellerMiddleware, AuthController.deactivateAccount]);
// POST('/suspendAccount/user/:accountID', [AuthMiddleware.baseAuthToken, AuthMiddleware.IsAdminMiddleware, AuthController.suspendUserAccount]);

export default router;
