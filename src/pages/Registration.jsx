import React, { useState } from 'react';

const TeamInfo = ({ formData, setFormData, nextStep }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, teamLogo: e.target.files[0] });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Team Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Team Name</label>
        <input
          type="text"
          name="teamName"
          value={formData.teamName}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Team Logo (optional)</label>
        <input
          type="file"
          name="teamLogo"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
       <div className="mb-4">
        <label className="block text-gray-700">Coach Name</label>
        <input
          type="text"
          name="coach name"
          value={formData.coachname}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
       </div>
       <div className="mb-4">
        <label className="block text-gray-700">Coach Contact Number</label>
        <input
          type="text"
          name="coach contact"
          value={formData.coachcontact}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
       </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Club/Organization (optional)</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Region/City</label>
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
         <label className="block text-gray-700">Tournament Category</label>
        <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
        >
            <option value="">Select a category</option> {/* Placeholder option */}
            <option value="U-18">T20 Championship(Girls)</option>
            <option value="Open">T20 Championship(Boys)</option>
            <option value="Women">ODI League</option>
            <option value="Veterans">Test Match Series</option>
        </select>
    </div>
       <button
        onClick={nextStep}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};


const CaptainInfo = ({ formData, setFormData, prevStep, nextStep }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Captain's Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Captain’s Full Name</label>
        <input
          type="text"
          name="captainName"
          value={formData.captainName}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contact Number</label>
        <input
          type="tel"
          name="captainContact"
          value={formData.captainContact}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          name="captainEmail"
          value={formData.captainEmail}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Player Role</label>
        <input
          type="text"
          name="captainRole"
          value={formData.captainRole}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="e.g., Batsman, Bowler, All-rounder"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">T-shirt Size</label>
        <select
            name="captainTshirtSize"
            value={formData.captainTshirtSize}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
        >
            <option value="">Select T-shirt size</option> {/* Placeholder option */}
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
            <option value="XXL">Double Extra Large (XXL)</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Emergency Contact</label>
        <input
          type="tel"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};


const PlayerDetails = ({ formData, setFormData, prevStep, nextStep }) => {
    const handlePlayerChange = (index, e) => {
      const { name, value } = e.target;
      const players = [...formData.players];
      players[index] = { ...players[index], [name]: value };
      setFormData({ ...formData, players });
    };
  
    const addPlayer = () => {
      if (formData.players.length < 15) {
        setFormData({
          ...formData,
          players: [...formData.players, { playerName: '', role: '', age: '', tshirtSize: '' }],
        });
      }
    };
  
    const canProceed = formData.players.length >= 11;
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Team Players' Information</h2>
        {formData.players.map((player, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-700">Player {index + 1} Name</label>
              <input
                type="text"
                name="playerName"
                value={player.playerName}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Player Role</label>
              <input
                type="text"
                name="role"
                value={player.role}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Age</label>
              <input
                type="text"
                name="age"
                value={player.age}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            {/* <div className="mb-2">
              <label className="block text-gray-700">T-shirt Size</label>
              <input
                type="text"
                name="tshirtSize"
                value={player.tshirtSize}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div> */}
            <div className="mb-4">
        <label className="block text-gray-700">T-shirt Size</label>
        <select
            type="text"
            name="tshirtSize"
            value={player.tshirtSize}
            onChange={(e) => handlePlayerChange(index, e)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
        >
            <option value="">Select T-shirt size</option> {/* Placeholder option */}
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
            <option value="XXL">Double Extra Large (XXL)</option>
        </select>
      </div>
          </div>
        ))}
        <button
          onClick={addPlayer}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
          disabled={formData.players.length >= 15}
        >
          Add Player
        </button>
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Previous
          </button>
          <button
            onClick={canProceed ? nextStep : undefined}
            className={`px-4 py-2 rounded ${
              canProceed ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-300 text-gray-600 cursor-not-allowed'
            }`}
            disabled={!canProceed}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  


const PaymentDetails = ({ formData, setFormData, prevStep, nextStep }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, paymentProof: e.target.files[0] });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Registration Fee</label>
        <input
          type="number"
          name="registrationFee"
          value={formData.registrationFee}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Total fee calculation"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Payment Method</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          <option value="">Select</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="UPI">UPI</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Payment Reference/Transaction ID</label>
        <input
          type="text"
          name="paymentReference"
          value={formData.paymentReference}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Upload Proof of Payment (optional)</label>
        <input
          type="file"
          name="paymentProof"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};


const ReviewSubmit = ({ formData, prevStep, submitForm }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
      <h3 className="text-lg font-semibold mb-2">Team Information</h3>
      <p><strong>Team Name:</strong> {formData.teamName}</p>
      <p><strong>Club/Organization:</strong> {formData.organization}</p>
      <p><strong>Region/City:</strong> {formData.region}</p>
      <p><strong>Tournament Category:</strong> {formData.category}</p>
      
      <h3 className="text-lg font-semibold mt-4 mb-2">Captain's Information</h3>
      <p><strong>Captain’s Name:</strong> {formData.captainName}</p>
      <p><strong>Contact Number:</strong> {formData.captainContact}</p>
      <p><strong>Email:</strong> {formData.captainEmail}</p>
      <p><strong>Role:</strong> {formData.captainRole}</p>
      <p><strong>T-shirt Size:</strong> {formData.captainTshirtSize}</p>
      <p><strong>Emergency Contact:</strong> {formData.emergencyContact}</p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Players Information</h3>
      {formData.players.map((player, index) => (
        <div key={index} className="mb-2">
          <p><strong>Player {index + 1} Name:</strong> {player.playerName}</p>
          <p><strong>Role:</strong> {player.role}</p>
          <p><strong>Age:</strong> {player.age}</p>
          <p><strong>T-shirt Size:</strong> {player.tshirtSize}</p>
        </div>
      ))}
      
      <h3 className="text-lg font-semibold mt-4 mb-2">Payment Details</h3>
      <p><strong>Registration Fee:</strong> {formData.registrationFee}</p>
      <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
      <p><strong>Payment Reference:</strong> {formData.paymentReference}</p>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="terms"
          className="mr-2"
          required
        />
        <label className="text-gray-700">I agree to the Terms and Conditions</label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="liabilityWaiver"
          className="mr-2"
          required
        />
        <label className="text-gray-700">I agree to the Liability Waiver</label>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={submitForm}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    teamLogo: null,
    organization: '',
    region: '',
    category: '',
    captainName: '',
    captainContact: '',
    captainEmail: '',
    captainRole: '',
    captainTshirtSize: '',
    emergencyContact: '',
    players: [{ playerName: '', role: '', age: '', tshirtSize: '' }],
    registrationFee: '',
    paymentMethod: '',
    paymentReference: '',
    paymentProof: null,
    terms: false,
    liabilityWaiver: false,
  });
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = () => {
    const dataToSubmit = new FormData();
    Object.keys(formData).forEach(key => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((item, index) => {
          Object.keys(item).forEach(subKey => {
            dataToSubmit.append(`${key}[${index}][${subKey}]`, item[subKey]);
          });
        });
      } else {
        dataToSubmit.append(key, formData[key]);
      }
    });

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: dataToSubmit,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setIsSubmitted(true); // Set the form as submitted on success
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
      });
  };
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-24 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Form Submitted Successfully!</h1>
          <p className="text-lg text-gray-700">Thank you for registering for the event.</p>
          <p className="text-lg text-gray-700">We have received your submission.</p>
          <p className="text-lg text-gray-700"> Further details of the match will be sent to the captain's email. Please keep an eye on your inbox for updates.</p>
        </div>
      </div>
    );
  }
 
  switch (step) {
    case 1:
      return <TeamInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <CaptainInfo formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />;
    case 3:
      return <PlayerDetails formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />;
    case 4:
      return <PaymentDetails formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />;
    case 5:
      return <ReviewSubmit formData={formData} prevStep={prevStep} submitForm={submitForm} />;
    default:
      return <div>Unknown step</div>;
  }
};

export default MultiStepForm;






