import chalk from 'chalk'
import { stdout } from '../cli'

export async function printLogo() {
  const magenta = chalk.hex('#FF0056')
  await stdout(
    magenta(`                    
  .::                                    .::            
                                         .::            
       .:: .::    .:: .::       .::    .:.: .:    .::    
 .:::   .::  .::   .::  .::   .::  .::   .::    .:  .:: 
  .::   .::  .::   .::  .::  .::   .::   .::   .:::::.::
  .::   .::  .::   .::  .::  .::   .::   .::   .:        
  .::  .:::  .::  .:::  .::    .:: .:::   .::    .::::   \n\n`),
  )
}
