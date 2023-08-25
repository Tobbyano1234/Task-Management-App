// import { sendMailByClient } from "../../unboxd-messaging/services/mail";
// import { nairaFormat } from "../misc";
// import { MailAccount } from "./typings";

// const sendMail = sendMailByClient();

// export type SendAdminTicketSaleNotificationMailBody = {
//   hashtag: string,
//   buyer: string, 
//   ticket: string,
//   net: number,
//   quantity: number,
//   guestType: string,
//   guestListLink: string
// };

// export const sendAdminTicketSaleNotificationMail = async (
//   {
//     email, hashtag, buyer, ticket, net, quantity, guestType, guestListLink
//   }: Pick<MailAccount, 'email'> & SendAdminTicketSaleNotificationMailBody) => {
//   await sendMail({
//     to: email,
//     subject: `New Ticket Sales`,
//     text: `New Ticket Sold`,
//     templateId: 'd-0ddc8b306c75419f804eb1f5ece56a92',
//     templateData: {
//       net: nairaFormat(net),
//       hashtag, buyer, ticket, quantity, guestType, guestListLink
//     }
//   });
// };
