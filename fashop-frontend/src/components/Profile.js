import React from 'react';
import { Card } from 'semantic-ui-react';

const Profile = ( {user} ) => (
  <>
  <br></br>
  <br></br>
    <Card centered>
      <Card.Content>
        <Card.Header>{user.user.name}</Card.Header>
        <Card.Description>
          Email: {user.user.email}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          Age: {user.user.age}
        </a>
      </Card.Content>
    </Card>
  </>
)

export default Profile;
