import { Card } from 'react-native-paper';
import { Text, TextBase } from 'react-native';


const TaskCard = (props) => {
  const { description, hours, listing_owner, listing_type} = props;
  return (
    <Card style={{borderRadius: 40, borderColor: 'black', backgroundColor: 'lightgrey'
                , borderWidth: 3}}>
      <Card.Title title={listing_type}/>
      <Card.Content>
      <Text>{listing_owner}</Text>
        <Text>{description}</Text>
        
        <Text>{hours} Hrs</Text>
      </Card.Content>
    </Card>
    
  );
};

export default TaskCard;

