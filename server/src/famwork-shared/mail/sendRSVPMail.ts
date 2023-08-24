// import { sendMailByClient } from "../../unboxd-messaging/services/mail";
// import { MailAccount } from "./typings";

// const sendMail = sendMailByClient();

// export const sendRSVPMail = async (
//   {email, firstname, lastname, weddingImage, hashtag, event, weddingLink}: MailAccount & { weddingImage: string,
//     hashtag: string,
//     event: { title: string, day: string, time: string },
//     weddingLink: string,
// }) => {
//   const {title, day, time} = event;
//   await sendMail({
//     to: email,
//     subject: `RSVP Mail: ${firstname + ' ' + lastname}`,
//     text: `This is to notify you that you are attending an event`,
//     templateId: 'd-0ef77cc2ede64721b37f15fe2b03b79f',
//     templateData: {
//       weddingImage,
//       hashtag,
//       event: { title, day, time },
//       weddingLink,
//     }
//   });
// };
