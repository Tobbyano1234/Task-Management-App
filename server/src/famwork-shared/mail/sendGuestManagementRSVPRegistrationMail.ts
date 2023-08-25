
// import { sendMailByClient } from "../../unboxd-messaging/services/mail";
// import { MailAccount } from "./typings";

// const sendMail = sendMailByClient();

// export type sendGuestManagementRSVPRegistrationMailBody = {
//   hashtag: string,
//   event: {
//     qrcode: string,
//     name: string,
//     serialNumber: string,
//   },
//   wishlistLink: string
// };

// export const sendGuestManagementRSVPRegistrationMail = async (
//   {
//     email, firstname, lastname, hashtag, event, wishlistLink
//   }: MailAccount & sendGuestManagementRSVPRegistrationMailBody) => {
//   const {qrcode, name, serialNumber } = event;
//   await sendMail({
//     to: email,
//     subject: `RSVP Mail: ${firstname + ' ' + lastname}`,
//     text: `This is to notify you that you are attending an event`,
//     templateId: 'd-199ede7b9cec44b4b6bc58f982c9e993',
//     templateData: {
//       hashtag,
//       event: {
//         qrcode,
//         name,
//         serialNumber,
//       },
//       wishlistLink
//     }
//   });
// };
