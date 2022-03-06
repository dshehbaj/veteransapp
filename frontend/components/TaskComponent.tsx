import { Card } from 'react-native-paper';
import { Text } from 'react-native';


const TaskCard = (props) => {
  const { description, hours, listing_owner, listing_type} = props;
  return (
    <Card>
      <Card.Title title={listing_type} />
      <Card.Content>
        <Text>{description}</Text>
        <Text>{listing_owner}</Text>
        <Text>{hours}</Text>
      </Card.Content>
    </Card>
  );
};

export default TaskCard;

