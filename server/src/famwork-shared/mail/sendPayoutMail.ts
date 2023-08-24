
// import { dateNow } from '../time';
// import {Wallet} from '../../unboxd-entities';
// import { Pocket } from '../../typings/List.types';
// import { getUserService } from '../../unboxd-accounts/user/services';
// import { sendMailByClient } from '../../unboxd-messaging/services/mail';

// const sendMail = sendMailByClient();

// type PayoutMail = {
//   status: 'success' | "failed",
//   userID: string,
//   amount: number,
//   deduction: number,
//   net: number,
//   wishlist: string,
//   walletLink: string,
//   userWallet: Wallet,
//   bankAccount: { bankName: string; accountNumber: string; accountName: string },
//   listPocket?: Pocket,
// };

// export const sendSuccessfulPayoutMail = async (
//   {
//     status, userID, amount, deduction, net, wishlist,
//     walletLink, userWallet, bankAccount, listPocket,
//   }: PayoutMail
// ) => {
//   listPocket; bankAccount;

//   const user = await getUserService({userID}, {shouldPopulate: false});
//   const userName = user.firstname + ' ' + (user.lastname || " ");
//   await sendMail({
//     text: 'payout successful',
//     to: user.email,
//     subject: `SUCCESSFUL Unboxd Payout ${userName}`,
//     templateId: 'd-40304b41aa9e489fbe008e594444eb65',
//     templateData: {
//      amount,
//      deduction,
//      net,
//      wishlist,
//      walletLink,
//      status: 'Success',
//      date: dateNow(),
//      balance: userWallet.balance.Naira.toFixed(2),  
//     },
//   });
// };


// export const sendFailedPayoutMail = async (
//   {
//     status, userID, amount, deduction, net, wishlist,
//     walletLink, userWallet, bankAccount, listPocket,
//   }: PayoutMail
// ) => {

//   listPocket;

//   const user = await getUserService({userID}, {shouldPopulate: false});
//   const userName = user.firstname + ' ' + (user.lastname || " ");
//   const dd = {deduction, net, wishlist, walletLink};
//   dd;
//   await sendMail({
//     text: 'payout failed',
//     to: user.email,
//     subject: `FAILED Unboxd Payout ${userName}`,
//     templateId: 'd-a5893a5c923e423a8f5b505b863cf82f',
//     templateData: {
//      amount,
//      wishlist,
//      walletLink,
//     },
//   });
// };

// const PayoutMail = {
//   "success" : sendSuccessfulPayoutMail,
//   "failed" : sendFailedPayoutMail
// }

// export const sendPayoutMail = async (
//   {
//     status, userID, amount, deduction, net, wishlist,
//     walletLink, userWallet, bankAccount, listPocket,
//   }: PayoutMail
// ) => {
//   /**
//    * Notify the user on status of payout
//    */
//   await PayoutMail[status](
//     {
//       status, userID, amount, deduction, net, wishlist,
//       walletLink, userWallet, bankAccount, listPocket,
//     }
//   );
// };
