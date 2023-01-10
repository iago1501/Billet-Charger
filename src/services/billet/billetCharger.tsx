import { smtpDispatch, smtpServerStart, smtpServerStop } from "../SMTP";
import { billetServiceStart } from "./billetService";

const TIMER = 60 * 60 * 1000 //  1 hora

// const TIMER = 10 * 1000 //  10 seg

type indebtedListData = {
  email: string
}

export async function billetCharger(indebtedList: indebtedListData[]){
  billetServiceStart()
  await sendEmailToIndebted(indebtedList)
}

export async function sendEmailToIndebted(indebtedList: indebtedListData[]){  
  return setInterval( async () => {      
    if (indebtedList.length) {
      let connectionPort = await smtpServerStart();      
      indebtedList.forEach( ({email}) => smtpDispatch({email}))
      smtpServerStop(connectionPort);
    }      
  }, TIMER)
  
}

