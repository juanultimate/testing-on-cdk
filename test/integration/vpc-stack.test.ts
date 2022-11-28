import {call, deployStack, destroyStack} from "../bash-command-runner";

describe('VPCStack integration tests', function () {
    const VPC_STACK_NAME = "Network-Stack"
    beforeAll(() => {
        deployStack(VPC_STACK_NAME);
    });

    test("VPCStack enables One VPC on AWS",  async () => {

        const response = call("aws ec2 describe-vpcs --output=json --filters Name=tag:Name,Values=TeamAlpha-network");
        const responseAsJSON = JSON.parse(response);
        const vpc = responseAsJSON.Vpcs[0]
        expect(vpc.State).toEqual("available")

    });

    afterAll(() => {
        return destroyStack(VPC_STACK_NAME);
    });

});
