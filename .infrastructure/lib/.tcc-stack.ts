import * as cdk from 'aws-cdk-lib';
import { StringAttribute, UserPool } from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TccStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TccQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    this.createUserPool();
  }

  createUserPool(): void {
    const userPool = new UserPool(this, 'TccUserPool', {
      userPoolName: 'tcc-user-pool',
    });
  }
}
