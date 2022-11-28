import * as process from 'process'
import {execSync, spawn} from "child_process";


export function call(command: string) {
    return execSync(command).toString();
}

export function deployStack(stackName: string){
    console.log(`STARTING TO DEPLOY STACK: ${stackName}` )
    return call(`cdk deploy ${stackName} --require-approval never`)
    console.log(`${stackName} DEPLOYED`)
}

export function destroyStack(stackName: string ){
    console.log(`STARTING TO DESTROY STACK: ${stackName}` )

    return call("cdk destroy --all --require-approval never")
    console.log(`${stackName} DESTROYED`)
}
