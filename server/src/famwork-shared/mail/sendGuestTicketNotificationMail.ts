
// import { sendMailByClient } from "../../unboxd-messaging/services/mail";
// import { nairaFormat } from "../misc";
// import { MailAccount } from "./typings";

// const sendMail = sendMailByClient();

// export type sendGuestTicketNotificationMailBody = {
//   hashtag: string,
//   event: {
//     logo: string,
//     backdrop: string,
//     proxyName: string,
//     celebrantName: string,
//     price: number,
//     quantity: number,
//     ticketDescription: string,
//     title: string,
//     day: string,
//     time: string,
//     colors: {
//       code1: string,
//       code2: string,
//       title: string
//     },
//     theme: string,
//     outfit: string,
//     location: string,
//     address: string
//   },
//   wishlistLink: string
// };

// export const sendGuestTicketNotificationMail = async (
//   {
//     email, firstname, lastname, hashtag, event, wishlistLink
//   }: MailAccount & sendGuestTicketNotificationMailBody) => {
//   const {title: eventTitle, proxyName, celebrantName, backdrop, logo, ticketDescription, theme, price, quantity, day, time, colors, outfit, address} = event;
//   const { code1, code2, title: colorTitle } = colors;
//   await sendMail({
//     to: email,
//     subject: `RSVP Mail: ${firstname + ' ' + lastname}`,
//     text: `This is to notify you that you are attending an event`,
//     templateId: 'd-937160e30f4f43778dad2a8fe41bcc05',
//     templateData: {
//       hashtag,
//       event: {
//         logo,
//         backdrop,
//         proxyName,
//         celebrantName,
//         title: eventTitle,
//         day,
//         time,
//         colors: {
//           code1,
//           code2,
//           title: colorTitle
//         },
//         outfit,
//         ticketDescription,
//         address,
//         location,
//         price: nairaFormat(price),
//         quantity,
//         theme,
//       },
//       wishlistLink
//     }
//   });
// };
