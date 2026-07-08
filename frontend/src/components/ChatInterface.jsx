function ChatInterface() {

    return (

        <div>

            <h5>AI Chat</h5>

            <textarea
                className="form-control"
                rows="8"
                placeholder="Tell me about your meeting with the doctor..."
            />

            <button
                className="btn btn-success mt-3"
            >
                Send to AI
            </button>

        </div>

    );

}

export default ChatInterface;