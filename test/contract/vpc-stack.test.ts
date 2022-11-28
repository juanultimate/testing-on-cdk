import * as cdk from 'aws-cdk-lib';
import * as TestingOnCdk from '../../lib/network/vpc-stack';
import {Vpc} from "aws-cdk-lib/aws-ec2/lib/vpc";


describe('VPCStack contract tests', function () {
    test("VPCStack exposes VPC object", () => {
        const app = new cdk.App();

        const stack = new TestingOnCdk.VpcStack(app, 'test-team');

        expect(stack.vpc).toBeInstanceOf(Vpc)
    });

});
