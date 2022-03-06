import { StackProps, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb';

export default class DynamoDB extends Construct {


  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id);

    new Table(this, `${id}-table-${props.stackName}`, {
      partitionKey: {
        name: "listing_id",
        type: AttributeType.STRING,
      },
      sortKey: {
        name: "listing_owner",
        type: AttributeType.STRING,
      }
    });

  }
}

