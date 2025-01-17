import axios, { AxiosInstance, AxiosError } from 'axios';

import { ISendSms } from './interface/global.interface';

class SmsMobizen {
  private apiEnvironment: ISendSms;

  constructor(apiKey: string, apiServer: string, apiVersion: string, format: string) {
    this.apiEnvironment = {
      apiKey,
      apiServer,
      apiVersion,
      format,
    };
  }

  private createRequestBody(recipient: string, text: string): URLSearchParams {
    return new URLSearchParams({
      recipient,
      text,
      output: this.apiEnvironment.format,
      api: this.apiEnvironment.apiVersion,
      apiKey: this.apiEnvironment.apiKey,
    });
  }

  async sendSms(recipients: string[], text: string): Promise<string[]> {
    const url = `${this.apiEnvironment.apiServer}/service/Message/sendsmsmessage`;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const sendRequests = recipients.map(async (recipient) => {
      const body = this.createRequestBody(recipient, text);
      try {
        const response = await axios.post<string>(url, body.toString(), { headers });
        return response.data;
      } catch (e) {
        const error = e as AxiosError;
        return error.response?.status === 0
          ? 'The request was cancelled due to a timeout.'
          : `Erro:r ${error.response?.statusText || 'Unknown'}`;
      }
    });

    return Promise.all(sendRequests).then(results => results.map(result => result || 'Unknown error'));
  }
}

export default SmsMobizen;
