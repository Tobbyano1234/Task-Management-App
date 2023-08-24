// import { sendMailByClient } from "../../unboxd-messaging/services/mail";
// import { nairaFormat } from "../misc";
// import { MailAccount } from "./typings";

// const sendMail = sendMailByClient();

// export type sendCelebrantsAndHangoutsTicketMailBody = {
//   hashtag: string,
//   event: {
//     logo: string,
//     backdrop: string,
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

// export const sendCelebrantsAndHangoutsTicketRSVPMail = async (
//   {
//     email, firstname, lastname, hashtag, event, wishlistLink
//   }: MailAccount & sendCelebrantsAndHangoutsTicketMailBody) => {
//   const {title: eventTitle, logo, celebrantName, location, backdrop, ticketDescription, theme, price, quantity, day, time, colors, outfit, address} = event;
//   const { code1, code2, title: colorTitle } = colors;
//   await sendMail({
//     to: email,
//     subject: `RSVP Mail: ${firstname + ' ' + lastname}`,
//     text: `This is to notify you that you are attending an event`,
//     templateId: 'd-bfa544153aaf40bd81224948b4318640',
//     templateData: {
//       hashtag,
//       event: {
//         logo,
//         backdrop,
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
