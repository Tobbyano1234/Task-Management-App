import { Joi } from "celebrate";
import joi from "joi";
import JoiPhoneNumber from "joi-phone-number";
// import { toObjectId } from '../../../glide-shared/validateToObjectID';
// import { joiPasswordExtendCore } from 'joi-password';

const ExtendedJoi = joi.extend(JoiPhoneNumber);

// const joiPassword = Joi.extend(joiPasswordExtendCore);
// const PasswordValidation = joiPassword
//   .string()
//   .min(8)
//   .minOfSpecialCharacters(1)
//   .minOfLowercase(1)
//   .minOfUppercase(1)
//   .minOfNumeric(1)
//   .noWhiteSpaces()
//   .messages({
//     'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
//     'password.minOfSpecialCharacters':
//           '{#label} should contain at least {#min} special character',
//     'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
//     'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
//     'password.noWhiteSpaces': '{#label} should not contain white spaces',
//   })
//   .required();

export default {
    signupBuyer: {
        body: {
            firstName: Joi.string().min(2).max(25).required(),
            lastName: Joi.string().min(2).max(25).required(),
            email: Joi.string().min(5).max(500).required(),
            country: Joi.string().min(5).max(500).required(),
            password: Joi.string().min(8).required(),
            confirmPassword: Joi.ref('password'),
        },
    },
    signupSeller: {
        body: {
            storeName: Joi.string().min(2).max(25).required(),
            storeUrl: Joi.string().uri({ scheme: ["http", "https"] }).required(),
            storeDescription: Joi.string().min(2).max(1000).required(),
            businessType: Joi.string().allow("Product Service", "Business Service").required(),
            title: Joi.string().allow("Mr", "Mrs", "Miss").required(),
            firstName: Joi.string().min(2).max(25).required(),
            lastName: Joi.string().min(2).max(25).required(),
            email: Joi.string().min(5).max(500).required(),
            phoneNumber: ExtendedJoi.string().phoneNumber().required(),
            password: Joi.string().min(8).required(),
            confirmPassword: Joi.ref('password'),
            storeLocation: Joi.string().required(),
            state: Joi.string().required(),
            localGovt: Joi.string().required(),
            country: Joi.string().required(),
            nearestBustop: Joi.string().required(),
            businessPhoneNumber: ExtendedJoi.string().phoneNumber().required(),
            businessFormOfIdentity: Joi.string().allow("International Passport", "National Identification Number", "Driver's License", "Voter's Card").required(),
            noOfEmployees: Joi.number().required(),
            formOfIdentityImage: Joi.string().required(),
            cacRegNo: Joi.string(),
            taxIdentityNo: Joi.string(),
            nationalIdentityNumber: Joi.number().required(),
            accountName: Joi.string().required(),
            accountNumber: Joi.string().required(),
            bank: Joi.string().required(),
        },
    },
    signinBuyer: {
        body: {
            email: Joi.string().min(5).max(500).required(),
            password: Joi.string().required(),
        },
    },
    signinStatusBuyer: {
        body: {
            buyerID: Joi.string().min(24).max(24).required(),
            token: Joi.string().required(),
        },
    },
    signinSeller: {
        body: {
            email: Joi.string().min(5).max(500).required(),
            password: Joi.string().required(),
        },
    },
    signinStatusSeller: {
        body: {
            sellerID: Joi.string().min(24).max(24).required(),
            token: Joi.string().required(),
        },
    },
    signupAdmin: {
        body: {
            firstName: Joi.string().min(2).max(25).required(),
            lastName: Joi.string().min(2).max(25).required(),
            email: Joi.string().min(5).max(500).required(),
            phoneNumber: Joi.string().required(),
            password: Joi.string().min(8).required(),
        },
    },
    signinAdmin: {
        body: {
            email: Joi.string().min(5).max(500).required(),
            password: Joi.string().required(),
        },
    },
    signinStatusAdmin: {
        body: {
            sellerID: Joi.string().min(24).max(24).required(),
            token: Joi.string().required(),
        },
    },
    sendOtpBuyer: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            type: Joi.string()
                .allow('reset', 'verify')
                .lowercase(),
        },
    },
    sendOtpSeller: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            type: Joi.string()
                .allow('reset', 'verify')
                .lowercase(),
        },
    },
    sendOtpAdmin: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            type: Joi.string()
                .allow('reset', 'verify')
                .lowercase(),
        },
    },
    verifyOtpBuyer: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            newPassword: Joi.string().min(8),
            otp: Joi.required(),
            type: Joi.string()
                .allow('reset', 'verify')
                .lowercase(),
        },
    },
    verifyOtpSeller: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            newPassword: Joi.string().min(8),
            otp: Joi.required(),
            type: Joi.string()
                .allow('reset', 'verify')
                .lowercase(),
        },
    },
    verifyOtpAdmin: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            newPassword: Joi.string().min(8),
            otp: Joi.required(),
            type: Joi.string()
                .allow('reset', 'verify')
                .lowercase(),
        },
    },
    verifyPasswordBuyer: {
        body: {
            oldPassword: Joi.string().min(8).required(),
            email: Joi.string().email().min(5).max(500).required(),
        },
    },
    verifyPasswordSeller: {
        body: {
            oldPassword: Joi.string().min(8).required(),
            email: Joi.string().email().min(5).max(500).required(),
        },
    },
    verifyPasswordAdmin: {
        body: {
            oldPassword: Joi.string().min(8).required(),
            email: Joi.string().email().min(5).max(500).required(),
        },
    },
    verifyEmailBuyer: {
        body: {
            buyerID: Joi.string().min(24).max(24).required(),
            email: Joi.string().email().min(5).max(500).required(),
        },
    },
    verifyEmailSeller: {
        body: {
            sellerID: Joi.string().min(24).max(24).required(),
            email: Joi.string().email().min(5).max(500).required(),
        },
    },
    verifyEmailAdmin: {
        body: {
            adminID: Joi.string().min(24).max(24).required(),
            email: Joi.string().email().min(5).max(500).required(),
        },
    },
    changePasswordBuyer: {
        body: {
            oldPassword: Joi.string().min(8).required(),
            newPassword: Joi.string().min(8).required(),
            confirmPassword: Joi.string().min(8).required(),
            otp: Joi.string().required(),
        },
    },
    changePasswordSeller: {
        body: {
            oldPassword: Joi.string().min(8).required(),
            newPassword: Joi.string().min(8).required(),
            confirmPassword: Joi.string().min(8).required(),
            otp: Joi.string().required(),
        },
    },
    changePasswordAdmin: {
        body: {
            newPassword: Joi.string().min(8).required(),
            confirmPassword: Joi.string().min(8).required(),
        },
    },
    resetPasswordBuyer: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            newPassword: Joi.string().min(8).required(),
            confirmPassword: Joi.string().min(8).required(),
            otp: Joi.string().required(),
        },
    },
    resetPasswordSeller: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            newPassword: Joi.string().min(8).required(),
            confirmPassword: Joi.string().min(8).required(),
            otp: Joi.string().required(),
        },
    },
    resetPasswordAdmin: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            newPassword: Joi.string().min(8).required(),
            confirmPassword: Joi.string().min(8).required(),
            otp: Joi.string().required(),
        },
    },
    deactivateAccount: {
        body: {
            email: Joi.string().email().min(5).max(500).required(),
            password: Joi.string().min(8).required(),
        }
    }
};
