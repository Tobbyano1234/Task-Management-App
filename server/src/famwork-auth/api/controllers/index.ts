import { Request } from 'express';
import httpStatus from 'http-status';
import { Types } from 'mongoose';

import { BaseController } from "../../../famwork-shared/api";
import { LocalSignInDTO } from '../../DTOs/signIn.DTO';
import { LocalSignUpAdminDTO, LocalSignUpBankInfoSellerDTO, LocalSignUpBusinessInfoSellerDTO, LocalSignUpBuyerDTO, LocalSignUpCreateSellerDTO } from '../../DTOs/signUp.DTO';
import { LocalSignInBuyerService, LocalSignUpBuyerService, MailSendAdminOtpService, MailSendBuyerOtpService, MailSendSellerOtpService, MailVerifyAdminOtpService, MailVerifyBuyerOtpService, MailVerifySellerOtpService, ResetBuyerPasswordService } from '../../../glide-auth/services';
import { MailSendOtpDTO } from '../../../glide-auth/DTOs/sendOtp.DTO';
import { MailVerifyOtpDTO } from '../../../glide-auth/DTOs/verifyOtp.DTO';
import { LoginStatusService } from '../../services/login.status.service';
import { LoginStatusDTO } from '../../../glide-auth/DTOs/LoginStatusDTO';
import { ResetPasswordDTO } from '../../../glide-auth/DTOs/passwordManager.DTO';
import { LocalSignUpBankInfoSellerService, LocalSignUpBusinessInfoSellerService, LocalSignUpCreateSellerService } from '../../../glide-auth/services/local.signUp.seller.service';
import { LocalSignInSellerService } from '../../../glide-auth/services/local.signIn.seller.service';
import { ResetSellerPasswordService } from '../../../glide-auth/services/passwordManager.seller.service';
import { LocalSignUpAdminService } from '../../../glide-auth/services/local.signUp.admin.service';
import { LocalSignInAdminService } from '../../../glide-auth/services/local.signIn.admin.service';
export class AuthController {
    static signUpBuyer = BaseController(
        async (request: Request) => {
            const LocalSignUpDTO = request.body as LocalSignUpBuyerDTO;
            const { success, message, data } = await LocalSignUpBuyerService(LocalSignUpDTO);
            return { status: success ? httpStatus.CREATED : httpStatus.BAD_REQUEST, message, data, };
        }
    );

    static signUpBuyerGoogle = BaseController(
        async (request: Request | any) => {
            const buyer = request.user; // Access the session object from the request object
            const { success, message, token } = buyer;
            if (buyer) {
                return {
                    status: success ? httpStatus.OK : httpStatus.BAD_REQUEST,
                    message,
                    data: token,
                    redirect: { url: "http://localhost:5173/" + token },
                    // redirect: { url: "https://glidehq-buyer-portal.onrender.com", token },
                };
            } else {
                // Handle the case where buyer account creation failed
                return {
                    status: 400,
                    message: "failed to create buyer account",
                };
            }
        }
    );

    // static signUpBuyerGoogle = BaseController(
    //     async (request: Request) => {
    //         console.log("req", request)
    //         const buyer = request.user; // Access the session object from the request object
    //         const { success, message } = buyer;
    //         if (buyer) {
    //             return {
    //                 status: success ? httpStatus.OK : httpStatus.BAD_REQUEST,
    //                 message,
    //                 data: buyer,
    //                 redirect: { url: "https://glidehq-buyer-portal.onrender.com" },
    //             };
    //         } else {
    //             // Handle the case where buyer account creation failed
    //             return {
    //                 status: 400,
    //                 message: "failed to create buyer account",
    //             };
    //         }
    //     }
    // );

    static signUpBuyerFacebook = BaseController(
        async (request: Request | any) => {
            const buyer = request.user; // Access the session object from the request object
            const { success, message } = buyer;
            if (buyer) {
                return {
                    status: success ? httpStatus.OK : httpStatus.BAD_REQUEST,
                    message,
                    data: buyer,
                    redirect: { url: "https://glidehq-buyer-portal.onrender.com" },
                };
            } else {
                // Handle the case where buyer account creation failed
                return {
                    status: 400,
                    message: "failed to create buyer account",
                };
            }
        }
    );

    static signInBuyer = BaseController(
        async (request: Request) => {
            const LocalSignInDTO = request.body as LocalSignInDTO;
            const { success, message, data, token } = await LocalSignInBuyerService(LocalSignInDTO);
            return { status: success ? httpStatus.OK : httpStatus.UNAUTHORIZED, message, data, token };
        }
    );

    static signInStatus = BaseController(
        async (request: Request) => {
            const LoginStatusDTO = request.body as LoginStatusDTO;
            if (LoginStatusDTO.buyerID) {
                LoginStatusDTO.buyerID = new Types.ObjectId(LoginStatusDTO.buyerID);
            }
            if (LoginStatusDTO.sellerID) {
                LoginStatusDTO.sellerID = new Types.ObjectId(LoginStatusDTO.sellerID);
            }
            if (LoginStatusDTO.adminID) {
                LoginStatusDTO.adminID = new Types.ObjectId(LoginStatusDTO.adminID);
            }
            const { success, message, data, token } = await LoginStatusService(LoginStatusDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data, token };
        }
    );

    static signUpAdmin = BaseController(
        async (request: Request) => {
            const LocalSignUpDTO = request.body as LocalSignUpAdminDTO;
            const { message, data } = await LocalSignUpAdminService(LocalSignUpDTO);
            return { status: httpStatus.CREATED, message, data };
        }
    );

    static signInAdmin = BaseController(
        async (request: Request) => {
            const LocalSignInDTO = request.body as LocalSignInDTO;
            const { success, message, data, token } = await LocalSignInAdminService(LocalSignInDTO);
            return { status: success ? httpStatus.OK : httpStatus.PRECONDITION_REQUIRED, message, data, token };
        }
    );

    static signUpCreateSeller = BaseController(
        async (request: Request) => {
            const LocalSignUpSellerDTO = request.body as LocalSignUpCreateSellerDTO;
            const { success, message, data } = await LocalSignUpCreateSellerService(LocalSignUpSellerDTO)
            return { status: success ? httpStatus.CREATED : httpStatus.BAD_REQUEST, message, data };
        }
    );

    static signUpBusinessInfoSeller = BaseController(
        async (request: Request) => {
            const LocalSignUpSellerDTO = request.body as LocalSignUpBusinessInfoSellerDTO;
            const { success, message, data } = await LocalSignUpBusinessInfoSellerService(LocalSignUpSellerDTO)
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
        }
    );

    static signUpBankInfoSeller = BaseController(
        async (request: Request) => {
            const LocalSignUpSellerDTO = request.body as LocalSignUpBankInfoSellerDTO;
            const { success, message, data } = await LocalSignUpBankInfoSellerService(LocalSignUpSellerDTO)
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
        }
    );

    static signInSeller = BaseController(
        async (request: Request) => {
            const LocalSignInDTO = request.body as LocalSignInDTO;
            const { success, message, data, token } = await LocalSignInSellerService(LocalSignInDTO);
            return { status: success ? httpStatus.OK : httpStatus.UNAUTHORIZED, message, data, token };
        }
    );

    static sendBuyerOTP = BaseController(
        async (request: Request) => {
            const MailSendOtpDTO = request.body as MailSendOtpDTO;
            const { success, message, data } = await MailSendBuyerOtpService(MailSendOtpDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
        }
    );

    static sendAdminOTP = BaseController(
        async (request: Request) => {
            const MailSendOtpDTO = request.body as MailSendOtpDTO;
            const { success, message, data } = await MailSendAdminOtpService(MailSendOtpDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
        }
    );

    static sendSellerOTP = BaseController(
        async (request: Request) => {
            const MailSendOtpDTO = request.body as MailSendOtpDTO;
            const { success, message, data } = await MailSendSellerOtpService(MailSendOtpDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
        }
    );

    static verifyBuyerOTP = BaseController(
        async (request: Request) => {
            const MailVerifyOtpDTO = request.body as MailVerifyOtpDTO;
            const { success, message, data, token } = await MailVerifyBuyerOtpService(MailVerifyOtpDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data, token };
        }
    );

    static verifyAdminOTP = BaseController(
        async (request: Request) => {
            const MailVerifyOtpDTO = request.body as MailVerifyOtpDTO;
            const { success, message, data, token } = await MailVerifyAdminOtpService(MailVerifyOtpDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data, token };
        }
    );

    static verifySellerOTP = BaseController(
        async (request: Request) => {
            const MailVerifyOtpDTO = request.body as MailVerifyOtpDTO;
            const { success, message, data, token } = await MailVerifySellerOtpService(MailVerifyOtpDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data, token };
        }
    );

    // static verifyBuyerPassword = BaseController(
    //     async (request: Request) => {
    //         const VerifyPasswordDTO = request.body as VerifyBuyerPasswordDTO;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO: ['verify-user-password', VerifyPasswordDTO],
    //             onSuccess: UserPasswordVerifyHook
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static verifyAdminPassword = BaseController(
    //     async (request: Request) => {
    //         const VerifyPasswordDTO = request.body as VerifyAdminPasswordDTO;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO: ['verify-admin-password', VerifyPasswordDTO],
    //             onSuccess: AdminPasswordVerifyHook
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static verifySellerPassword = BaseController(
    //     async (request: Request) => {
    //         const VerifyPasswordDTO = request.body as VerifySellerPasswordDTO;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO: ['verify-company-password', VerifyPasswordDTO],
    //             onSuccess: CompanyPasswordVerifyHook
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static verifyBuyerEmail = BaseController(
    //     async (request: Request) => {
    //         const VerifyEmailDTO = request.body as VerifyBuyerEmailDTO;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO:
    //                 ['verify-user-email', VerifyEmailDTO], onSuccess: () => { }
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static verifyAdminEmail = BaseController(
    //     async (request: Request) => {
    //         const VerifyEmailDTO = request.body as VerifyAdminEmailDTO;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO:
    //                 ['verify-admin-email', VerifyEmailDTO], onSuccess: () => { }
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static verifySellerEmail = BaseController(
    //     async (request: Request) => {
    //         const VerifyEmailDTO = request.body as VerifySellerEmailDTO;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO:
    //                 ['verify-company-email', VerifyEmailDTO], onSuccess: () => { }
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static changeBuyerPassword = BaseController(
    //     async (request: Request) => {
    //         const ChangePasswordDTO = request.body as ChangeBuyerPasswordDTO;
    //         ChangePasswordDTO.userID = request.token._id;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO: ['change-user-password', ChangePasswordDTO],
    //             onSuccess: UserPasswordChangedHook
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static changeAdminPassword = BaseController(
    //     async (request: Request) => {
    //         const ChangePasswordDTO = request.body as ChangeAdminPasswordDTO;
    //         ChangePasswordDTO.adminID = request.token._id;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO: ['change-admin-password', ChangePasswordDTO],
    //             onSuccess: AdminPasswordChangedHook
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static changeSellerPassword = BaseController(
    //     async (request: Request) => {
    //         const ChangePasswordDTO = request.body as ChangeSellerPasswordDTO;
    //         ChangePasswordDTO.companyID = request.token._id;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO: ['change-company-password', ChangePasswordDTO],
    //             onSuccess: CompanyPasswordChangedHook
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    static resetBuyerPassword = BaseController(
        async (request: Request) => {
            const ResetPasswordDTO = request.body as ResetPasswordDTO;
            const { success, message, data } = await ResetBuyerPasswordService(ResetPasswordDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
        }
    );

    // static resetAdminPassword = BaseController(
    //     async (request: Request) => {
    //         const ResetPasswordDTO = request.body as ResetPasswordDTO;
    //         const { success, message, data } = (await PasswordManagerModule({
    //             DTO: ['reset-admin-password', ResetPasswordDTO],
    //             onSuccess: AdminPasswordChangedHook
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    static resetSellerPassword = BaseController(
        async (request: Request) => {
            const ResetPasswordDTO = request.body as ResetPasswordDTO;
            const { success, message, data } = await ResetSellerPasswordService(ResetPasswordDTO);
            return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
        }
    );

    // static suspendUserAccount = BaseController(
    //     async (request: Request) => {
    //         const UserSuspendAccountDTO = request.body as UserSuspendAccountDTO;
    //         const { success, message, data } = (await SuspendAccountModule({
    //             DTO:
    //                 ['user', UserSuspendAccountDTO], onSuccess: () => { }
    //         }))!;
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );

    // static deactivateAccount = BaseController(
    //     async (request: Request) => {
    //         const DeactivateAccountDTO = request.body as DeactivateAccountDTO;
    //         DeactivateAccountDTO.userID = request.token._id;
    //         const { success, message, data } = await DeactivateAccountModule({ DTO: ['user', DeactivateAccountDTO], onSuccess: UserDeactivateAccountHook });
    //         return { status: success ? httpStatus.OK : httpStatus.BAD_REQUEST, message, data };
    //     }
    // );
}
