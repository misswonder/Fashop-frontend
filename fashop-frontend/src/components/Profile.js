import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import profile2 from "../image/profile2.jpg";

const Profile = () => (
  <>
  <br></br>
  <br></br>
    <Card centered>
      <Image src={ profile2 } wrapped ui={false} />
      <Card.Content>
        <Card.Header>Yvonne</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2021</span>
        </Card.Meta>
        <Card.Description>
          Email: yvonne@gmail.com
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          Age: 25
        </a>
      </Card.Content>
    </Card>
  </>
)

export default Profile;
