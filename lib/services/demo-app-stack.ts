import {Stack, StackProps, Tags} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {IVpc} from "aws-cdk-lib/aws-ec2";
import {SecurityGroup} from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import {ApplicationLoadBalancedFargateService} from "aws-cdk-lib/aws-ecs-patterns";

export class DemoAppStack extends Stack {

    public vpcName: string;
    public vpc: IVpc;

    constructor(scope: Construct, id: string, vpc: IVpc, props?: StackProps) {
        super(scope, `DemoApp-Stack`, props);
        // Create an ECS cluster
        const cluster = new ecs.Cluster(this, 'service-cluster', {
            clusterName: 'service-cluster',
            containerInsights: true,
            vpc: vpc,
        });

        // Create a Fargate container image
        const image = ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample');

        const fargateServiceSecurityGroup = new SecurityGroup(
            this,
            "id-2",
            {vpc: vpc}
        );

        // Create higher level construct containing the Fargate service with a load balancer
        new ApplicationLoadBalancedFargateService(
            this,
            'amazon-ecs-sample',
            {
                cluster,
                circuitBreaker: {
                    rollback: true,
                },
                cpu: 1024,
                memoryLimitMiB: 2048,
                desiredCount: 1,
                taskImageOptions: {
                    image: image,
                    containerPort: 80,

                },
                securityGroups: [fargateServiceSecurityGroup],
                publicLoadBalancer: true,
                openListener: true,
                assignPublicIp: true
            }
        );
    }
}
