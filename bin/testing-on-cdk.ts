#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {VpcStack} from "../lib/network/vpc-stack";

const app = new cdk.App();
new VpcStack(app, 'TeamAlpha', {
    tags: {
        team: 'cdk-workshop-team',
    }});
