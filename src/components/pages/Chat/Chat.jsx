/* eslint-disable react/prop-types */
import './chat.css';
import Header from '../../pages/header/Header'
import Input from '../../ui/input/Input';
import enviar from '../../../../public/img/enviar.png'


// eslint-disable-next-line react/prop-types
const Chat = ({ userImage, userName, messages }) => {
  return (
    <>
    <Header/>
    <section className='section-chat'>
            <div className="chat">
              <div className="chat-header">
                <img className='img-user' src={userImage} alt="User" />
                <h2>{userName}</h2>
              </div>
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.sent ? 'right' : 'left'}`}>
                    {message.text}
                  </div>
                ))}
              </div>
                <div className="chat-input">
                  <Input type="text" placeholder="mensaje..." size="47.5" height='80' color={'#FFFFFF'} />
                  <img style={{width:'2.5%', height:'70%',marginLeft:'5%'}} src={enviar} alt='icon'/>
                </div>
            </div>
    </section>
    </>
  );
};

export default Chat;
