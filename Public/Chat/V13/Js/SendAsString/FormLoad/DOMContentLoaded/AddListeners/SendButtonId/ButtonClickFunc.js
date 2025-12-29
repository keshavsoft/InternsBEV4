let StartFunc_old_10dep2025 = () => {
    const jVarLocalToSend = jFLocalToSendMessageId();
    webSocket.send(jVarLocalToSend);
};

let StartFunc = () => {
    const jVarLocalCurrentTarget = event.currentTarget;
    const jVarLocalWebSocketId = jVarLocalCurrentTarget.dataset.websocketid;

    const jVarLocalMessageToSend = jFLocalToSendMessageId();

    webSocket.send(jVarLocalMessageToSend);
};

let jFLocalToSendMessageId = () => {
    let jVarLocalToSendMessageId = 'ToSendMessageId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalToSendMessageId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };