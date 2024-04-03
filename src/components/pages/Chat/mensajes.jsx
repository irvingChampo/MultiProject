import Chat from './Chat';

const App = () => {
  const userImage = 'https://rciminternet.com/wp-content/uploads/2019/04/usuario.png';
  const userName = 'Irving Champo';
  const messages = [
    { text: 'Hola, ¿cómo estás?', sent: false },
    { text: '¡Hola! Estoy bien, gracias. ¿Y tú?', sent: true },
    { text: 'Estoy bien también, gracias por preguntar.', sent: false },
    { text: '¡Genial! ¿Necesitas ayuda con algo más?', sent: true },
    { text: 'Hola, ¿cómo estás?', sent: false },
    { text: '¡Hola! Estoy bien, gracias. ¿Y tú?', sent: true },
    { text: 'Estoy bien también, gracias por preguntar.', sent: false },
    { text: 'Hola, ¿cómo estás?', sent: false },
    { text: '¡Hola! Estoy bien, gracias. ¿Y tú?', sent: true },
    { text: 'Estoy bien también, gracias por preguntar.', sent: false },
    { text: 'Hola, ¿cómo estás?', sent: false },
    { text: '¡Hola! Estoy bien, gracias. ¿Y tú?', sent: true },
    { text: 'Estoy bien también, gracias por preguntar.', sent: false },
    { text: 'Hola, ¿cómo estás?', sent: false },
    { text: '¡Hola! Estoy bien, gracias. ¿Y tú?', sent: true },
    { text: 'Estoy bien también, gracias por preguntar.', sent: false },
];

  return <Chat userImage={userImage} userName={userName} messages={messages} />;
};

export default App;
