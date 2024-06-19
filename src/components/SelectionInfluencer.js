// src/pages/InfluencerSelectionPage.js
import React, { useState } from 'react';
import InfluencerPreferencesForm from './Form';
import InfluencerResults from './Result';
import InfluencerDetails from './InfluencerDetails';
import { Layout, Steps, Result, Button } from 'antd';
import './InfluencerSelectionPage.css';

const { Content } = Layout;
const { Step } = Steps;

const InfluencerSelectionPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState(null);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  const handlePreferencesSubmit = (values) => {
      setPreferences(values);
      setCurrentStep(1);
  };

  const handleModifyCriteria = () => {
      setCurrentStep(0);
  };

  const handleBookInfluencer = (influencer) => {
      setSelectedInfluencer(influencer);
      setCurrentStep(2);
  };

  const handleConfirmBooking = () => {
      setCurrentStep(0);
      alert('Booking confirmed!');
  };

  const steps = [
      {
          title: 'Set Preferences',
          content: (
              <InfluencerPreferencesForm onSubmit={handlePreferencesSubmit} />
          ),
      },
      {
          title: 'Select Influencer',
          content: (
              <InfluencerResults
                  preferences={preferences}
                  onModifyCriteria={handleModifyCriteria}
                  onBookInfluencer={handleBookInfluencer}
              />
          ),
      },
      {
          title: 'Booking Details',
          content: selectedInfluencer ? (
              <InfluencerDetails
                  influencer={selectedInfluencer}
                  onConfirm={handleConfirmBooking}
                  onModify={() => setCurrentStep(1)}
              />
          ) : (
              <Result
                  status="404"
                  title="No Influencer Selected"
                  subTitle="Please select an influencer to view booking details."
                  extra={<Button type="primary" onClick={() => setCurrentStep(1)}>Back to Selection</Button>}
              />
          ),
      },
  ];

  return (
      <Layout className="selection-page">
          <Steps current={currentStep}>
              {steps.map((step) => (
                  <Step key={step.title} title={step.title} />
              ))}
          </Steps>
          <Content className="step-content">{steps[currentStep].content}</Content>
      </Layout>
  );
};

export default InfluencerSelectionPage;
