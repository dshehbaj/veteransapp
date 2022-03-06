// A CDK stack initializing a lambda function
import { StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export default class ListingCrudLambda extends Construct {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id);

    // Bucket created for WER demo, potentially not needed

    const handler = new NodejsFunction(this, `${id}-handler-${props.stackName}`, {
      entry: '',
      handler: '',
    });

  }
}

