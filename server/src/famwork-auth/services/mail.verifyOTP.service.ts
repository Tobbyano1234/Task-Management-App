import bcrypt from 'bcrypt';

import { MailVerifyOtpDTO } from "../DTOs/verifyOtp.DTO";
import { getBuyerService } from "../../famwork-accounts/buyer/services";
import { verifyOtp } from "../plugins";
import { Admin, AdminModel, Buyer, BuyerModel, GeneralModel, ModelNames, Seller, SellerModel } from '../../glide-entities';
import { UserMetaDataGeneral } from '../../typings/User.types';
import { timeDifferenceInSeconds } from '../../famwork-shared/time';
import { issueToken } from '../plugins/token.plugin';
import { AccountType } from '../../typings/Account.types';
import { sendRegistrationMail } from '../../famwork-shared/mail/sendRegistrationMail';
import { getSellerService } from '../../famwork-accounts/seller/services';
import { getAdminService } from '../../famwork-accounts/admin/services';
import { AdminMetaDataGeneral } from '../../typings/Admin.types';

export const MailVerifyBuyerOtpService = async ({email, newPassword, otp, type}: MailVerifyOtpDTO) => {
  const buyer = await getBuyerService({ email },{onBuyerNotFound: ()=>{}}) as Buyer;
  if (!buyer) return { success:false, message: 'buyer not found'};
  
  const { _id } = buyer;
  const getOtp = await verifyOtp(email, otp);
  if (!getOtp) return { success: false, message: 'otp expired or incorrect', data: null};

  if (type === 'reset' && newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const data = await BuyerModel.findByIdAndUpdate(_id, { password: hashedPassword }, {new: true}) as Buyer;
    await GeneralModel.findOneAndUpdate(
      {collectionID: _id, collectionName: ModelNames.BUYER, 'associatedData.type': 'metaData'},
      {
        $push: {'associatedData.metaData.passwordChangedAt': [new Date()]}
      },
      {new: true}
    );

    const BuyerMetaData = await GeneralModel.findOne(
      { collectionID: _id, collectionName: ModelNames.BUYER, 'associatedData.type': 'metaData' }) as
      UserMetaDataGeneral;
    if (BuyerMetaData) {
      const verifiedAt = BuyerMetaData.associatedData.metaData.verifiedAt;
      if (timeDifferenceInSeconds(verifiedAt) <= 30) {
        await sendRegistrationMail({ email:buyer.email, firstName:buyer.firstName,lastName: buyer.lastName });
      }
    };

    return { success: true, message: 'password change successfully', data };
  } else {
    const data = await BuyerModel.findByIdAndUpdate(_id, 
      { isVerified: true }, {new: true}) as Buyer;
    await GeneralModel.findOneAndUpdate(
      {collectionID: _id, collectionName: ModelNames.BUYER, 'associatedData.type': 'metaData'},
      {
        'associatedData.metaData.verifiedAt': new Date(),
      },
      {new: true}
    );
    const token = await issueToken({ accountType: AccountType.BUYER, _id, issuedAt: Date.now(), email });

    const UserMetaData = await GeneralModel.findOne(
      { collectionID: _id, collectionName: ModelNames.BUYER, 'associatedData.type': 'metaData' }) as
      UserMetaDataGeneral;
    if (UserMetaData) {
      const verifiedAt = UserMetaData.associatedData.metaData.verifiedAt;
      if (timeDifferenceInSeconds(verifiedAt) <= 30) {
        await sendRegistrationMail({ email: buyer.email, firstName: buyer.firstName, lastName: buyer.lastName });
      }
    };

    return { success: true, message: 'user verified successfully', data, token};
  }
};

export const MailVerifySellerOtpService = async ({email, newPassword, otp, type}: MailVerifyOtpDTO) => {
  const seller = await getSellerService({ email }, () => { });
  
  const {_id} = seller;
  const getOtp = await verifyOtp(email, otp);
  if (!getOtp) return { success: false, message: 'Otp expired or incorrect', data: null, hookData: null };

  if (type === 'reset' && newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const data = await SellerModel.findByIdAndUpdate(_id, { password: hashedPassword }, {new: true}) as Seller;
    await GeneralModel.findOneAndUpdate(
      {collectionID: _id, collectionName: ModelNames.SELLER, 'associatedData.type': 'metaData'},
      {
        $push: {'associatedData.metaData.passwordChangedAt': [new Date()]}
      },
      {new: true}
    );

    const UserMetaData = await GeneralModel.findOne(
      { collectionID: _id, collectionName: ModelNames.SELLER, 'associatedData.type': 'metaData' }) as
      UserMetaDataGeneral;
    if (UserMetaData) {
      const verifiedAt = UserMetaData.associatedData.metaData.verifiedAt;
      if (timeDifferenceInSeconds(verifiedAt) <= 30) {
        await sendRegistrationMail({ email: seller.email, firstName: seller.firstName, lastName: seller.lastName }
);
      }
    };    

    return { success: true, message: 'password change succesful', data, hookData: data };
  } else {
    const data = await SellerModel.findByIdAndUpdate(_id, 
      { isVerified: true }, {new: true}) as Seller;
    await GeneralModel.findOneAndUpdate(
      {collectionID: _id, collectionName: ModelNames.SELLER, 'associatedData.type': 'metaData'},
      {
        'associatedData.metaData.verifiedAt': new Date(),
      },
      {new: true}
    );
    const token = await issueToken({ accountType: AccountType.SELLER, _id, issuedAt: Date.now(), email });

    const UserMetaData = await GeneralModel.findOne(
      { collectionID: _id, collectionName: ModelNames.SELLER, 'associatedData.type': 'metaData' }) as
      UserMetaDataGeneral;
    if (UserMetaData) {
      const verifiedAt = UserMetaData.associatedData.metaData.verifiedAt;
      if (timeDifferenceInSeconds(verifiedAt) <= 30) {
        await sendRegistrationMail({ email: seller.email, firstName: seller.firstName, lastName: seller.lastName });
      }
    };

    return { success: true, message: 'success', data, token, hookData: data };
  }
};


export const MailVerifyAdminOtpService = async ({email, newPassword, otp, type}: MailVerifyOtpDTO) => {
  const admin = await getAdminService({email}, {withPassword: false, onAdminNotFound: () => {}});
  const {_id} = admin;

  const getOtp = await verifyOtp(email, otp);
  if (!getOtp) return { success: false, message: 'Otp expired or incorrect', data: null, hookData: null };

  if (type === 'reset' && newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const data = await AdminModel.findByIdAndUpdate(_id, { password: hashedPassword }, {new: true}) as Admin;
    await GeneralModel.findOneAndUpdate(
      {collectionID: _id, collectionName: ModelNames.ADMIN, 'associatedData.type': 'metaData'},
      {
        $push: {'associatedData.metaData.passwordChangedAt': [new Date()]}
      },
      {new: true}
    );

    const AdminMetaData = await GeneralModel.findOne(
      { collectionID: _id, collectionName: ModelNames.ADMIN, 'associatedData.type': 'metaData' }) as
      AdminMetaDataGeneral;
    if (AdminMetaData) {
      const verifiedAt = AdminMetaData.associatedData.metaData.verifiedAt;
      if (timeDifferenceInSeconds(verifiedAt) <= 30) {
        await sendRegistrationMail({ email: admin.email, firstName: admin.firstName, lastName: admin.lastName });
      }
    }

    return { success: true, message: 'password change succesful', data, hookData: data };
  } else {
    const data = await AdminModel.findByIdAndUpdate(_id, 
      { isVerified: true }, {new: true}) as Admin;
    await GeneralModel.findOneAndUpdate(
      {collectionID: _id, collectionName: ModelNames.ADMIN, 'associatedData.type': 'metaData'},
      {
        'associatedData.metaData.verifiedAt': new Date(),
      },
      {new: true}
    );
    const token = await issueToken({ accountType: AccountType.ADMIN, _id, issuedAt: Date.now(), email });

    const AdminMetaData = await GeneralModel.findOne(
      { collectionID: _id, collectionName: ModelNames.ADMIN, 'associatedData.type': 'metaData' }) as
      AdminMetaDataGeneral;
    if (AdminMetaData) {
      const verifiedAt = AdminMetaData.associatedData.metaData.verifiedAt;
      if (timeDifferenceInSeconds(verifiedAt) <= 30) {
        await sendRegistrationMail({ email: admin.email, firstName: admin.firstName, lastName: admin.lastName });
      }
    }

    return { success: true, message: 'success', data, token, hookData: data };
  }
};

// export const MailVerifyCompanyOtpPipe = async ({email, newPassword, otp, type}: MailVerifyOtpDTO) => {
//   const company = await CompanyModel.findOne({email});
//   if (!company) throw new Error('Company does not exist');
  
//   const {_id} = company;
//   const getOtp = await verifyOtp(email, otp);
//   if (!getOtp) return { success: false, message: 'Otp expired or incorrect', data: null, hookData: null };

//   if (type === 'reset' && newPassword) {
//     const hashedPassword = await bcrypt.hash(newPassword, 12);
//     const data = await CompanyModel.findByIdAndUpdate(_id, { password: hashedPassword }, {new: true}) as Company;
//     await GeneralModel.findOneAndUpdate(
//       {collectionID: _id, collectionName: ModelNames.COMPANY, 'associatedData.type': 'metaData'},
//       {
//         $push: {'associatedData.metaData.passwordChangedAt': [new Date()]}
//       },
//       {new: true}
//     );
//     return { success: true, message: 'password change succesful', data, hookData: data };
//   } else {
//     const data = await CompanyModel.findByIdAndUpdate(_id, { isVerified: true }, {new: true}) as Company;
//     await GeneralModel.findOneAndUpdate(
//       {collectionID: _id, collectionName: ModelNames.COMPANY, 'associatedData.type': 'metaData'},
//       {
//         'associatedData.metaData.verifiedAt': new Date(),
//       },
//       {new: true}
//     );
//     const token = await issueToken({ accountType: AccountType.COMPANY, _id, issuedAt: Date.now(), email });

//     return { success: true, message: 'success', data, token, hookData: data };
//   }
// };

// export const MailVerifyMerchantOtpPipe = async ({email, newPassword, otp, type}: MailVerifyOtpDTO) => {
//   const merchant = await MerchantModel.findOne({email});
//   if (!merchant) throw new Error('Merchant does not exist');
  
//   const {_id} = merchant;
//   const getOtp = await verifyOtp(email, otp);
//   if (!getOtp) return { success: false, message: 'Otp expired or incorrect', data: null, hookData: null };

//   if (type === 'reset' && newPassword) {
//     const hashedPassword = await bcrypt.hash(newPassword, 12);
//     const data = await MerchantModel.findByIdAndUpdate(_id, { password: hashedPassword }, {new: true}) as Merchant;
//     await GeneralModel.findOneAndUpdate(
//       {collectionID: _id, collectionName: ModelNames.MERCHANT, 'associatedData.type': 'metaData'},
//       {
//         $push: {'associatedData.metaData.passwordChangedAt': [new Date()]}
//       },
//       {new: true}
//     );
//     return { success: true, message: 'password change succesful', data, hookData: data };
//   } else {
//     const data = await MerchantModel.findByIdAndUpdate(_id, { isVerified: true }, {new: true}) as Merchant;
//     await GeneralModel.findOneAndUpdate(
//       {collectionID: _id, collectionName: ModelNames.MERCHANT, 'associatedData.type': 'metaData'},
//       {
//         'associatedData.metaData.verifiedAt': new Date(),
//       },
//       {new: true}
//     );
//     const token = await issueToken({ accountType: AccountType.MERCHANT, _id, issuedAt: Date.now(), email });

//     return { success: true, message: 'success', data, token, hookData: data };
//   }
// };
