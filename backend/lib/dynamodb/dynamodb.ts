import { StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { DynamoDBProps } from '../common/types';

export default class DynamoDB extends Construct implements DynamoDBProps {

  table: Table;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id);
    this.table = new Table(this, `${id}-table-${props.stackName}`, {
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

