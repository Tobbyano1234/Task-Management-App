
// import { sendMailByClient } from "../../unboxd-messaging/services/mail";
// import { nairaFormat } from "../misc";
// import { MailAccount } from "./typings";

// const sendMail = sendMailByClient();

// export type sendProxyGifteeEventTicketMailBody = {
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

// export const sendProxyGifteeEventTicketMail = async (
//   {
//     email, firstname, lastname, hashtag, event, wishlistLink
//   }: MailAccount & sendProxyGifteeEventTicketMailBody) => {
//   const {title: eventTitle, proxyName, backdrop, celebrantName, location, logo, ticketDescription, theme, price, quantity, day, time, colors, outfit, address} = event;
//   const { code1, code2, title: colorTitle } = colors;
//   await sendMail({
//     to: email,
//     subject: `RSVP Mail: ${firstname + ' ' + lastname}`,
//     text: `This is to notify you that you are attending an event`,
//     templateId: 'd-14062116c2d1429a9c81b945256759f9',
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
