import * as cdk from 'aws-cdk-lib';
import {Template,} from 'aws-cdk-lib/assertions';
import * as TestingOnCdk from '../../lib/network/vpc-stack';


describe('DemoApp Contract tests', function () {
    describe('VPCStack exposes vpc object', function () {
        test("VPC Name contains team name", () => {
            const app = new cdk.App();

            const stack = new TestingOnCdk.VpcStack(app, 'test-team');
            expect(stack.vpcName).toEqual("test-team-network")
        });
    });

    describe('Testing Domain-specific Language', function () {
        test('VPC contains only one subnet', () => {
            const app = new cdk.App();

            const stack = new TestingOnCdk.VpcStack(app, 'test-team');

            const template = Template.fromStack(stack);
            template.resourceCountIs('AWS::EC2::Subnet', 2);

        });
    });
});
