import { Request, Response } from "express";
import { companiesService } from "../services/companiesService.js";
import { createBot } from 'whatsapp-cloud-api';

export async function postWhatsapp(req: Request, res: Response) {
  try {
    // replace the values below from the values you copied above
    const from = '101623412898257';
    const token = 'EAANRrQVXUM4BAGuAHtZBpO7pdmcmSeUEhadlbdmrP0eDiXFvBwdDZB56r5fxoAgGHWYjjpZB3oPAAS8nUR3wiGXUdJYQuNDEF1YvQm7maIPKnrTtQPWdU3sqkucCrUTX58VmMl8PNmpY73K8hB3Y2B67Yt3osNpJJgnKtZBt8ZBDiKcBxu8a1KA2NWiCR931ZCTrfHmQugxgZDZD';
    const to = '5511972665730'; // your phone number without the leading '+'

    const bot = createBot(from, token);

    const result = await bot.sendText(to, 'Ola, mensagem teste');
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
}

export async function getWhatsapp(req: Request, res: Response) {
  const from = '101623412898257';
  const token = 'EAANRrQVXUM4BALJweJZB1zi0Bdphozoa1nsFSyR0FZCZCq5negE6zwZCltu79GfHMYlu24Yo1A9Fo4NPdiJOxaCHS9utgRcV01Inxbm4ZAoyeJ600ZCGgj6loyxVCOPCcjpDh5ZABVyrNZBZAvXXcroWW4vVjYFXVaAiuUJXjgO1LAQolm1IJSowUjPzmZCVdWw3P2xpeWIUauYgZDZD';
  const to = '5511972665730'; // your phone number without the leading '+'
  const webhookVerifyToken = 'securityToken123!'; // use a random value, e.g. 'bju#hfre@iu!e87328eiekjnfw'
  const bot = createBot(from, token);

  try {
    await bot.startExpressServer({
      port: 3000,
      webhookVerifyToken,
    });

    // Listen to ALL incoming messages
    bot.on('message', async (msg) => {
      console.log("mensagem:", msg);

      if (msg.type === 'text') {
        await bot.sendText(msg.from, 'Received your text message!');
      } else if (msg.type === 'image') {
        await bot.sendText(msg.from, 'Received your image!');
      }
    });
  } catch (error) {
    console.log(error);
  }
  res.status(200).send('Get whatsapp running');

}

