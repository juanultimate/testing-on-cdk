#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {VpcStack} from "../lib/network/vpc-stack";
import {DemoAppStack} from "../lib/services/demo-app-stack";

const app = new cdk.App();
const vpcStack = new VpcStack(app, 'TeamAlpha', {
    tags: {
        team: 'cdk-workshop-team',
    }});
new DemoAppStack(app, 'DemoAppStack', vpcStack.vpc)
