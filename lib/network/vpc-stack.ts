import {Stack, StackProps, Tags} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import {IVpc} from "aws-cdk-lib/aws-ec2";

export class VpcStack extends Stack {

    public vpcName: string;
    private readonly _vpc: IVpc;

    constructor(scope: Construct, teamName: string, props?: StackProps) {
        super(scope, `NetWork-Stack`, props);

        this.vpcName = `${teamName}-network`
        this._vpc = new ec2.Vpc(this, this.vpcName, {
            subnetConfiguration: [
                {
                    name: `${teamName}-public-subnet`,
                    subnetType: ec2.SubnetType.PUBLIC,
                    cidrMask: 24,
                },

            ],
            natGateways: 1,
            maxAzs: 2
        });

        this._vpc.publicSubnets.forEach(subnet => {
            Tags.of(subnet).add("Name", `public-subnet-${subnet.availabilityZone}`,
            );
        });
        Tags.of(this._vpc).add("Name", this.vpcName)
    }

    public get vpc(){
        return this._vpc;
    }
}
