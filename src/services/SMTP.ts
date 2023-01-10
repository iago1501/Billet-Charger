type smtpDispatchProps = {
  email: string;
}

export function smtpDispatch({email}: smtpDispatchProps) {
  try {
    console.log(`[SMTP Service] Sending email to ${email}`)
  }
  catch(error){
    console.log(`[SMTP Service Failure] Email not sent to ${email} due ${error}`)
  }
}

export async function smtpServerStart(){
  const connectionPort = 587
  console.log("[smtpService] => Service started")
  return connectionPort
}

export function smtpServerStop(connectionPort: number){
  console.log(`[smtpService] => Service at port ${connectionPort} stopped`)
}