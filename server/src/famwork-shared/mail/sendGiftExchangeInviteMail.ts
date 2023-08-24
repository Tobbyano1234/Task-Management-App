// import { sendMailByClient } from "../../unboxd-messaging/services/mail";

// const sendMail = sendMailByClient();

// type giftExchangeInviteMailDTO = {
//   email: string;
//   giftExchangeTitle: string;
//   companyName: string;
//   signUpURL: string;
// };
// export const sendGiftExchangeInviteMail = async (giftExchangeInviteMailDTO: giftExchangeInviteMailDTO) => {
//   const { giftExchangeTitle, email, companyName, signUpURL } = giftExchangeInviteMailDTO;
//   await sendMail({
//     to: email,
//     subject: `Unboxd Gift Exchange Invite`,
//     text: `Hi, you have been invited by ${companyName} to ${giftExchangeTitle}'s gift exchange.`,
//     templateId: 'd-4b9a0880ed4f4127bb01e99ea40e493b',
//     templateData: { giftExchangeTitle, email, companyName, signUpURL }
//   });
// };
