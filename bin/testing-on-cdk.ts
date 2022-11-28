#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TestingOnCdkStack } from '../lib/testing-on-cdk-stack';

const app = new cdk.App();
new TestingOnCdkStack(app, 'TestingOnCdkStack');
