import * as process from 'process'
import {execSync, spawn} from "child_process";


export function call(command: string) {
    return execSync(command).toString();
}

export function deployStack(stackName: string){
    console.log(`STARTING TO DEPLOY STACK: ${stackName}` )
    return call(`cdk deploy ${stackName} --require-approval never`)
}

export function destroyStack(stackName: string ){
    console.log(`STARTING TO DESTROY STACK: ${stackName}` )
    return call("cdk destroy --all --require-approval never")
}


export function deployAllStacks(){
    console.log(`STARTING TO DEPLOY ALL STACKS` )
    return call(`cdk deploy --all --outputs-file ./cdk-outputs.json --require-approval never`)
}

export function destroyAllStack(){
    console.log(`STARTING TO DESTROY ALL STACK` )
    return call("cdk destroy --all --require-approval never && rm ./cdk-outputs.json");
}
