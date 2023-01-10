export const csvFile = `name,governmentId,email,debtAmount,debtDueDate,debtId
Indebt Name 1,11111111111,johndoe@kanastra.com.br,1000000.00,2022-10-12,8291 
Indebt Name 2,22222222222,johndoe2@kanastra.com.br,1000000.00,2022-10-12,8292 
Not Indebt Name 3,33333333333,johndoe3@kanastra.com.br,1000000.00,2024-10-12,8293 `

type csvToJsonProps = {
  csv: string;
}

export function csvToJSON({csv}: csvToJsonProps){  

  let lines = csv?.split("\n");  

  let result = [];

  let headers=lines[0].split(",");

  for(let i=1;i<lines.length;i++){

	  let obj = {} as any;
	  let currentline=lines[i].split(",");    

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j].trim();
	  }

	  result.push(obj);

  }  
  return result; //JSON
}