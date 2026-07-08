import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import InteractionForm from "../components/InteractionForm";
import ChatInterface from "../components/ChatInterface";

function LogInteraction() {

    const [tab, setTab] = useState("form");

    return (

        <>
            <Navbar />

            <div className="d-flex">

                <Sidebar />

                <div className="container mt-4">

                    <h2>Log Interaction</h2>

                    <div className="mb-4">

                        <button
                            className="btn btn-primary me-3"
                            onClick={() => setTab("form")}
                        >
                            Structured Form
                        </button>

                        <button
                            className="btn btn-outline-primary"
                            onClick={() => setTab("chat")}
                        >
                            AI Chat
                        </button>

                    </div>

                    {
                        tab === "form"
                            ? <InteractionForm />
                            : <ChatInterface />
                    }

                </div>

            </div>

        </>

    );

}

export default LogInteraction;