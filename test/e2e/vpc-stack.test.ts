import {call, destroyAllStack, deployAllStacks} from "../bash-command-runner";

describe('VPCStack E2E tests', function () {
    beforeAll(() => {
        deployAllStacks();
    });

    test("VPCStack can allocate a simple demo app",  async () => {
        const fs = require('fs');
        const data = fs.readFileSync('./cdk-outputs.json',{encoding:'utf8', flag:'r'});
        const dataAsObject = JSON.parse(data);
        const simpleAppURL = dataAsObject["DemoApp-Stack"]["amazonecssampleServiceURLE3D5AC2F"];

        const response = call(`curl -s -o /dev/null -w "%{http_code}" ${simpleAppURL}`);
        expect(response).toEqual("200");
    });

    afterAll(() => {
        return destroyAllStack();
    });


});
