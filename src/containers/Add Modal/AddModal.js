import React from 'react';
import axios from 'axios';
import aes256 from 'aes256';
import Modal from 'react-responsive-modal';
import { Dropdown, Icon, Button, Form, Label, Message } from 'semantic-ui-react';
import classes from './AddModal.css';


export default class AddModal extends React.Component {

 state = {

      open: false,
      type: null,
      name: null,
      id: null,
      auth_key: null,
      infoMessageText: 'All fields are necessary.',
      infoMessageColor: 'violet',
      infoMessageIcon: 'info circle'    
    };

  onOpenModal = () =>{

    this.setState({ open: true });
  }
 
  onCloseModal = () => {

    this.setState({ open: false,
                    type: null,
                    name: null,
                    id: null,
                    auth_key: null,
                    infoMessageText: 'All fields are necessary',
                    infoMessageColor: 'violet',
                    infoMessageIcon: 'info circle'});
  }
 

  typeOnChangeHandler = (event) => {
    
    this.setState({type: event.nativeEvent.target.innerText});        
  }

  nameOnChangeHandler = (event) => {

    this.setState({name: event.target.value});    
  }

  idOnChangeHandler = (event) => {

    this.setState({id: event.target.value});    
  }

  authenticationKeyOnChangeHandler = (event) => {

    this.setState({auth_key: event.target.value});    
  }

  postDataToFirebase = () => {

    const userData = {
      ...this.state
    }

    if ( userData.name === null || userData.id === null || (userData.auth_key === null || userData.auth_key.trim() === '') ) {

      this.setState({ infoMessageText: 'Please fill all fields.',
                      infoMessageColor: 'red',
                      infoMessageIcon: 'warning circle'});
      return;
    }

    let encryptedMessage = 'api_key is correct posting to database';

    const aes256Hash = 'A8v3q+/VFBTfvxDoCxVELUFTVNpEf5pkb8C5wOjfSnpGDccXwrjUwSypNmo3MDY9Mm/B7kOe';
    
    let decryptedMessage = aes256.decrypt(this.state.auth_key.trim(),aes256Hash);

    if (encryptedMessage === decryptedMessage) {

        this.setState({infoMessageText: 'Authentication Key is verified. Posting to database',
                       infoMessageColor: 'green',
                       infoMessageIcon: 'wait'});


      axios.post('https://the-collections-project.firebaseio.com/' + userData.type + '.json',
                 [{ name: userData.name,id: userData.id }])
            .then(response => {

                  console.log('[Response] :: Data has been posted');

                  this.setState({infoMessageText: 'Data has been posted.',
                                infoMessageIcon: 'check'});

           }).catch(error => {

                  this.setState({
                    infoMessageText: 'Error while posting data, Check your internet connectivity.',
                    infoMessageColor: 'red',
                    infoMessageIcon: 'close'
          });

        });

    } else {

      this.setState({

        infoMessageText: 'Authentication Key is invalid.',
        infoMessageColor: 'red',
        infoMessageIcon: 'warning circle'
      });
      return;        
    }
  }

  render() {

    const { open } = this.state;

    const formFieldColor = '#303030';

    const inputFieldsStyle = {
      
        backgroundColor: formFieldColor,
        borderRadius: '20px',
        color: 'white',
        marginTop: '20px'
  }

    let AddOptions = [
                        {
                          text: 'shows',
                          value: 'shows',
                          image: { avatar: true, src: require('../../assets/images/avatars/shows.png') },
                        },
                        {
                          text: 'movies',
                          value: 'movies',
                          image: { avatar: true, src: require('../../assets/images/avatars/movies.png') },
                        },
                        {
                          text: 'games',
                          value: 'games',
                          image: { avatar: true, src: require('../../assets/images/avatars/games.png') },
                        }
                    ];

  const infoMessageStyle = {

    marginTop: '20px',
    borderRadius: '20px'
  }

  let infoMessage = (<Message 
                             style={infoMessageStyle}
                             color={this.state.infoMessageColor}>
                             <Icon name={this.state.infoMessageIcon} />
                             {this.state.infoMessageText}
                     </Message>);


    return (

      <div>
      
        <Button
          className={classes.triggerButton}
          style={{marginTop: '10px',
                  marginRight: '10px',
                  borderRadius: '20px',
                  height: '40px',
                  justify: 'center'}}
          onClick={this.onOpenModal}
          color='teal'
          inverted>
          <Icon name='plus' /> Add
        </Button>

            <Modal 
            styles = {{
              
              overlay: {

                        // filter: 'blur(2px)'
                       },
              modal:   {
                        borderRadius: '20px',
                        backgroundColor: 'rgba(100,100,100,0.2)',
                        width: '500px',
                        height: '465px'
                       },
              closeIcon: {
                      backgroundColor: 'white',
                      borderRadius: '20px'
                       }
              }} 
              open={open} 
              onClose={this.onCloseModal}
              closeIconSize={20}
              animationDuration={500} 
              little>

              <Label className= {classes.modalLabel}
                style = {{color: 'white',
                backgroundColor: 'transparent',
                fontSize: '38px',
                marginBottom: '10px'}}>

                  <Icon name='archive' />
                  Add To Database
              </Label>

              <Form>

                <Dropdown
                  onChange={this.typeOnChangeHandler}
                  style={{
                    height: 20,
                    backgroundColor: formFieldColor,
                    borderRadius: '20px',
                    color: 'white'
                  }}
                  placeholder='Select Type'
                  fluid selection
                  options={AddOptions} />


                  <input onChange={(event) => this.nameOnChangeHandler(event)} style={inputFieldsStyle} placeholder='Name' />
                
                  <input onChange={(event) => this.idOnChangeHandler(event)} style={inputFieldsStyle} placeholder='id' />

                  <input onChange={(event) => this.authenticationKeyOnChangeHandler(event)} style={inputFieldsStyle} placeholder='Authentication Key' type = 'password'/>
                  
                  {infoMessage}

              </Form>
              
              <p className = {classes.postPara} >Post Data ?</p>

              <div className = {classes.postButtonsDiv} style = {{marginTop: '20px',marginLeft: '200px'}}>

                <Button
                onClick={this.onCloseModal}
                style = {{width: '120px'}}
                basic color='red'
                inverted>
                    <Icon name='remove' /> No
                </Button>

                <Button
                onClick={this.postDataToFirebase}
                style = {{
                  marginLeft: '19px',
                  width: '120px'
                }}
                color='green'
                inverted>
                    <Icon name='checkmark' /> Yes
                </Button>
              </div>
        </Modal>
      </div>
    );
  }
}