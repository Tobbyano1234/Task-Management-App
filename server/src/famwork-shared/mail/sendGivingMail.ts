// import { config } from "../../unboxd-web-api/config";
// import { MailGivingType } from "../../typings/Giving.types";
// import {
//   Cashfund,
//   Gift,
//   GiftExchangeGift,
//   GiftExchangeWishlist,
//   Giver,
//   Giving,
//   TypeOfGiver,
//   User,
//   Wishlist,
//   WishlistCashfund,
// } from "../../unboxd-entities";

// import { sendMailByClient } from "../../unboxd-messaging/services/mail";
// const sendMail = sendMailByClient();

// export interface ImailData {
//   Giving: Giving;
//   Gift: Gift;
//   WishlistCashfund: WishlistCashfund;
//   GiftExchangeGift: GiftExchangeGift;
//   Cashfund: Cashfund;
//   recipient: User;
//   wishlist: Wishlist | GiftExchangeWishlist | WishlistCashfund;
//   Giver: Giver;
//   user: User | null;
//   Amount: MailGivingType;
// }

// // Giving Mails
// const sendAnonymousGivingMail = async (mailData: ImailData) => {
//   const { Cashfund, Gift, WishlistCashfund, GiftExchangeGift, recipient, wishlist, Amount, Giver } = mailData;

//   const title = 
//     (Gift || Cashfund) ? 
//       Gift ? 
//       Gift.title : 
//       Cashfund.title :
//         WishlistCashfund ? 
//           WishlistCashfund.title :
//           GiftExchangeGift.title;

//   // Anonymous Giver
//   await sendMail({
//     to: Giver.email,
//     subject: "Unboxd Contribution Notification",
//     text: "Contributor mail",
//     templateId: "d-657a62785b054ee69cd1c074b50c9d71",
//     templateData: {
//       contributorName: Giver.name,
//       totalAmout: +Amount!.totalAmount.toFixed(2),
//       fee: 0,
//       net: +Amount!.totalAmount.toFixed(2),
//       itemName: title,
//       recipientName: recipient.firstname,
//       qualifier: "anonymous",
//       wishlistLink: `${config.frontendAppUrl}@${recipient.username}/${(wishlist as Wishlist).slug}`,
//     },
//   });

//   // Recipient
//   await sendMail({
//     to: recipient.email,
//     subject: `Unboxd Contribution Notification  ${
//       recipient.firstname + " " + (recipient.lastname || " ")
//     }`,
//     text: "Recipient mail",
//     templateId: "d-871a71bec5fa4859b235f0e0e9c23ebe",
//     templateData: {
//       contributorName: TypeOfGiver.ANONYMOUS,
//       totalAmout: +Amount!.totalAmount.toFixed(2),
//       fee: +(Amount!.totalAmount - Amount!.AmountPaid).toFixed(2),
//       net: +Amount!.AmountPaid.toFixed(2),
//       itemName: title,
//       wishlistName: (wishlist as Wishlist)?.title,
//       walletLink: `${config.frontendAppUrl}wallet`,
//     },
//   });
// };

// const sendGuestGivingMail = async (mailData: ImailData) => {
//   const { Cashfund, Gift, recipient, WishlistCashfund, GiftExchangeGift, wishlist, Amount, Giver } = mailData;

//   const title = 
//     (Gift || Cashfund) ? 
//       Gift ? 
//       Gift.title : 
//       Cashfund.title :
//         WishlistCashfund ? 
//           WishlistCashfund.title :
//           GiftExchangeGift.title;

//   // Guest Giver
//   await sendMail({
//     to: Giver.email,
//     subject: `Unboxd Contribution Notification`,
//     text: "Contributor mail",
//     templateId: "d-657a62785b054ee69cd1c074b50c9d71",
//     templateData: {
//       contributorName: Giver.name,
//       totalAmout: +Amount!.totalAmount.toFixed(2),
//       fee: 0,
//       net: +Amount!.totalAmount.toFixed(2),
//       itemName: title,
//       recipientName: recipient.firstname,
//       wishlistLink: `${config.frontendAppUrl}@${recipient.username}/${(wishlist as Wishlist).slug}`,
//     },
//   });

//   // Recipient
//   await sendMail({
//     to: recipient.email,
//     subject: `Unboxd Contribution Notification  ${
//       recipient.firstname + " " + (recipient.lastname || " ")
//     }`,
//     text: "Recipient mail",
//     templateId: "d-871a71bec5fa4859b235f0e0e9c23ebe",
//     templateData: {
//       contributorName: Giver.name,
//       totalAmout: +Amount!.totalAmount.toFixed(2),
//       fee: +(Amount!.totalAmount - Amount!.AmountPaid).toFixed(2),
//       net: +Amount!.AmountPaid.toFixed(2),
//       itemName: title,
//       wishlistName: (wishlist as Wishlist)?.title,
//       walletLink: `${config.frontendAppUrl}wallet`,
//     },
//   });
// };

// const sendUserGivingMail = async (mailData: ImailData) => {
//   const { Cashfund, Gift, recipient, WishlistCashfund, GiftExchangeGift, wishlist, Giver, Amount, user } = mailData;

//   const title = 
//     (Gift || Cashfund) ? 
//       Gift ? 
//       Gift.title : 
//       Cashfund.title :
//         WishlistCashfund ? 
//           WishlistCashfund.title :
//           GiftExchangeGift.title;

//   // User Giver
//   await sendMail({
//     to: Giver.email,
//     subject: `Unboxd Contribution Notification ${
//       user?.firstname + " " + (user?.lastname || " ")
//     }`,
//     text: "Contributor mail",
//     templateId: "d-657a62785b054ee69cd1c074b50c9d71",
//     templateData: {
//       contributorName: `${user?.firstname + " " + (user?.lastname || " ")}`,
//       totalAmout: +Amount!.totalAmount.toFixed(2),
//       fee: 0,
//       net: +Amount!.totalAmount.toFixed(2),
//       itemName: title,
//       recipientName: recipient.firstname,
//       wishlistLink: `${config.frontendAppUrl}@${recipient.username}/${(wishlist as Wishlist).slug}`,
//     },
//   });

//   // Recipient
//   await sendMail({
//     to: recipient.email,
//     subject: `Unboxd Contribution Notification  ${
//       recipient.firstname + " " + (recipient.lastname || " ")
//     }`,
//     text: "Recipient mail",
//     templateId: "d-871a71bec5fa4859b235f0e0e9c23ebe",
//     templateData: {
//       contributorName: `${user?.firstname + " " + (user?.lastname || " ")}`,
//       totalAmout: +Amount!.totalAmount.toFixed(2),
//       fee: +(Amount!.totalAmount - Amount!.AmountPaid).toFixed(2),
//       net: +Amount!.AmountPaid.toFixed(2),
//       itemName: title,
//       wishlistName: (wishlist as Wishlist).title,
//       walletLink: `${config.frontendAppUrl}wallet`,
//     },
//   });
// };

// const GivingMail = {
//   [TypeOfGiver.ANONYMOUS]: sendAnonymousGivingMail,
//   [TypeOfGiver.GUEST]: sendGuestGivingMail,
//   [TypeOfGiver.USER]: sendUserGivingMail,
// };

// /**
//  * @desription Notify both the giver and recipient based on the type of giver
//  */
// export const sendGivingMail = async (mailData: ImailData) => {
//   const { recipient, wishlist, Giver, Cashfund, Giving, WishlistCashfund, Gift, GiftExchangeGift, user, Amount } =
//     mailData;

//   // console.log(Giving, 'Giving');
//   // console.log([Giving.typeOfGiver]);
//   await GivingMail[Giving.typeOfGiver]({
//     Giving,
//     Cashfund,
//     Gift,
//     recipient,
//     wishlist,
//     WishlistCashfund,
//     Giver,
//     GiftExchangeGift,
//     Amount,
//     user,
//   });
// };
