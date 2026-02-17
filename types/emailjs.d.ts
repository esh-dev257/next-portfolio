declare module '@emailjs/browser' {
  export function sendForm(serviceID: string, templateID: string, form: HTMLFormElement, publicKey?: string): Promise<any>;
  export default {
    sendForm: (serviceID: string, templateID: string, form: HTMLFormElement, publicKey?: string) => Promise<any>
  };
}
