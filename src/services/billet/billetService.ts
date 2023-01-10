export function billetServiceStart(){
  console.log("[billetService] => Service started")
}

export function billetServiceStop(intervalId: number){
  clearInterval(intervalId)
  console.log("[billetService] => Service ended")
}