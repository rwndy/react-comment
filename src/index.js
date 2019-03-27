import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return(
  <div className="ui comments">
    <h3 className="ui dividing header" style={{marginTop: 5, marginLeft: 20}}>Comments</h3>
    <ApprovalCard>
     <CommentDetails 
       author="Radit"
       text="Boleh juga tuh" 
       avatar={faker.image.avatar()} 
      />
    </ApprovalCard>
    <ApprovalCard>
     <CommentDetails
       author="Dika" 
       text="apanya tuh??" 
       avatar={faker.image.avatar()}
     />
    </ApprovalCard>
    <ApprovalCard>
     <CommentDetails 
       author="Nurhadi" 
       text="milenial kepo" 
       avatar={faker.image.avatar()}
     />
    </ApprovalCard>
    <ApprovalCard>
     <CommentDetails 
       author="aldo" 
       text="nyimak gan" 
       avatar={faker.image.avatar()} 
     />
    </ApprovalCard>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))