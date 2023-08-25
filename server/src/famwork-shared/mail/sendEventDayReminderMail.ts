// import { sendMailByClient } from "../../unboxd-messaging/services/mail";
// import { nairaFormat } from "../misc";
// import { MailAccount } from "./typings";

// const sendMail = sendMailByClient();


// export type sendEventDayReminderMailBody = {
//   hashtag: string,
//   event: {
//     logo: string,
//     backdrop: string,
//     celebrantName: string,
//     theme: string,
//     day: string,
//     time: string,
//     address: string,
//     location: string,
//     price: number,
//     quantity: number
//   },
//   wishlistLink: string
// };

// export const sendEventDayReminderMail = async (
//   {
//     email, firstname, lastname, hashtag, event, wishlistLink
//   }: MailAccount & sendEventDayReminderMailBody) => {
//   const { backdrop, celebrantName, location, logo, theme, price, quantity, day, time, address} = event;
//   await sendMail({
//     to: email,
//     subject: `RSVP Mail: ${firstname + ' ' + lastname}`,
//     text: `This is to notify you that you are attending an event`,
//     templateId: 'd-d3fe5aff4b3646b3832f5ab42cceb20e',
//     templateData: {
//       hashtag,
//       event: {
//         logo,
//         backdrop,
//         celebrantName,
//         theme,
//         day,
//         time,
//         address,
//         location,
//         price: nairaFormat(price),
//         quantity,
//       },
//       wishlistLink
//     }
//   });
// };




