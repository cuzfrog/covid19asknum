import React, {useEffect, useRef, useState} from "react";
import Chat, { Bubble, useMessages } from '@chatui/core';
import '@chatui/core/dist/index.css';
import "./App.scss";
import {search} from "./search-func";

export default function App(){
  const { messages, appendMsg, setTyping } = useMessages([]);
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
        .then(resp => resp.json())
        .then(setData)
        .catch(err => console.log(err));
  }, []);

  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);
      const result = search(data, val);

      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: result },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
      <Chat
          navbar={{ title: 'COVID-19 Ask How Many.' }}
          messages={messages}
          renderMessageContent={renderMessageContent}
          onSend={handleSend}
          locale="en-US"
      />
  );
};

