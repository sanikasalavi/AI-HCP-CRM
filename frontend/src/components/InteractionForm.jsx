import { useState } from "react";

function InteractionForm() {

    const [formData, setFormData] = useState({
        doctorName: "",
        hospital: "",
        speciality: "",
        meetingDate: "",
        products: "",
        discussion: "",
        followUpDate: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        alert("Interaction Saved Successfully!");
    };

    return (

        <form onSubmit={handleSubmit}>

            <div className="mb-3">

                <label>Doctor Name</label>

                <input
                    className="form-control"
                    name="doctorName"
                    onChange={handleChange}
                />

            </div>

            <div className="mb-3">

                <label>Hospital</label>

                <input
                    className="form-control"
                    name="hospital"
                    onChange={handleChange}
                />

            </div>

            <div className="mb-3">

                <label>Speciality</label>

                <input
                    className="form-control"
                    name="speciality"
                    onChange={handleChange}
                />

            </div>

            <div className="mb-3">

                <label>Meeting Date</label>

                <input
                    type="date"
                    className="form-control"
                    name="meetingDate"
                    onChange={handleChange}
                />

            </div>

            <div className="mb-3">

                <label>Products Discussed</label>

                <input
                    className="form-control"
                    name="products"
                    onChange={handleChange}
                />

            </div>

            <div className="mb-3">

                <label>Discussion</label>

                <textarea
                    rows="5"
                    className="form-control"
                    name="discussion"
                    onChange={handleChange}
                />

            </div>

            <div className="mb-3">

                <label>Follow-up Date</label>

                <input
                    type="date"
                    className="form-control"
                    name="followUpDate"
                    onChange={handleChange}
                />

            </div>

            <button className="btn btn-primary">
                Save Interaction
            </button>

        </form>

    );

}

export default InteractionForm;