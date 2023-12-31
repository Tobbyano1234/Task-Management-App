export interface IMailInfo {
  from?: string;
  to: string;
  subject: string;
  text: string;
  additionalInfo?: string;
  templateData?: Template;
  // templateData?: object;
  templateId?: string;

}


export type Template = {
  otp: string,
  firstName: string,
  lastName?: string
  timeLeft: string,
  url?: string,
}