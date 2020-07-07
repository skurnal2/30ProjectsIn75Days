//#region IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {motion} from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Chats from './components/chats';
import SendChat from './components/send-chat';
//#endregion

class App extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
      }

    rerenderParentCallback() {
        this.fetchResults();
        
    }

    state = {
        chats: []
    }

    componentDidMount() {
        this.fetchResults();
    }

    fetchResults() {
        fetch('http://localhost/30projectsin60days/bee-chat-rest-api/api/post/read.php')
            .then(res => res.json())
            .then((data) => {
                this.setState({chats: data.data})
            })
            .catch(console.log)
    }

    render() {
       
        return(
            <motion.div className="main-panel shadow"
                initial="hidden"
                animate="show"
                transition={{delay: .5, duration: .3}} 
                variants={{
                    hidden: {
                            opacity: 0, 
                            borderRadius: "50%"
                            },
                    show: {
                            y: 20, 
                            opacity: 1,
                            borderRadius: "0%"
                          }
                }}
            >
                <motion.h1 
                whileHover={{
                    rotate: 0,
                    scale: 1,                    
                }}
                
                animate={{                    
                    rotate: -15,
                    scale: 1.2,
                    transition: {delay:1.5}
                    }}
                >
                    BeeChat
                </motion.h1><br/>                                
                <motion.div className="chat-panel">
                    <Chats chats={this.state.chats} />
                </motion.div>
                <SendChat rerenderParentCallback={this.rerenderParentCallback}/>
            </motion.div>            
        );
    }
}

// ========================================

ReactDOM.render(
    <Container>
        <App />
    </Container>,
    document.getElementById('root')
);
