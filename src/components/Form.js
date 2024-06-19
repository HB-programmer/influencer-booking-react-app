// src/components/InfluencerPreferencesForm.js
import React, { useState } from 'react';
import { Form, Checkbox, Slider, Button, Select, Card } from 'antd';
import './InfluencerPreferencesForm.css';

const { Option } = Select;

const InfluencerPreferencesForm = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState({
    prioritizeCost: false,
    prioritizeGender: false,
    prioritizeRating: false,
    prioritizeFollowers: false,
    costRange: [0, 10000],
    followerRange: [0, 100000],
    gender: '',
    minRating: 0,
  });

  const handleCheckboxChange = (checkedValues) => {
    setPreferences((prev) => ({
      ...prev,
      prioritizeCost: checkedValues.includes('prioritizeCost'),
      prioritizeGender: checkedValues.includes('prioritizeGender'),
      prioritizeRating: checkedValues.includes('prioritizeRating'),
      prioritizeFollowers: checkedValues.includes('prioritizeFollowers'),
    }));
  };

  const handleSliderChange = (value, option) => {
    setPreferences((prev) => ({
      ...prev,
      [option]: value,
    }));
  };

  const handleGenderChange = (value) => {
    setPreferences((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleRatingChange = (value) => {
    setPreferences((prev) => ({
      ...prev,
      minRating: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(preferences);
  };

  return (
    <Card className="preferences-card">
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Prioritize By">
          <Checkbox.Group
            options={[
              { label: 'Cost of Influencer', value: 'prioritizeCost' },
              { label: 'Gender', value: 'prioritizeGender' },
              { label: 'Rating', value: 'prioritizeRating' },
              { label: 'Followers', value: 'prioritizeFollowers' },
            ]}
            value={[
              preferences.prioritizeCost && 'prioritizeCost',
              preferences.prioritizeGender && 'prioritizeGender',
              preferences.prioritizeRating && 'prioritizeRating',
              preferences.prioritizeFollowers && 'prioritizeFollowers',
            ].filter(Boolean)}
            onChange={handleCheckboxChange}
          />
        </Form.Item>

        {preferences.prioritizeCost && (
          <Form.Item label="Cost Range">
            <Slider
              range
              min={0}
              max={10000}
              value={preferences.costRange}
              onChange={(value) => handleSliderChange(value, 'costRange')}
              tooltip={{ formatter: (value) => `$${value}` }}
            />
          </Form.Item>
        )}

        {preferences.prioritizeFollowers && (
          <Form.Item label="Followers Range">
            <Slider
              range
              min={0}
              max={100000}
              value={preferences.followerRange}
              onChange={(value) => handleSliderChange(value, 'followerRange')}
              tooltip={{ formatter: (value) => `${value} followers` }}
            />
          </Form.Item>
        )}

        {preferences.prioritizeGender && (
          <Form.Item label="Gender">
            <Select
              value={preferences.gender}
              onChange={handleGenderChange}
              placeholder="Select gender"
            >
              <Option value="">Any</Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        )}

        {preferences.prioritizeRating && (
          <Form.Item label="Minimum Rating">
            <Slider
              min={0}
              max={5}
              step={0.1}
              value={preferences.minRating}
              onChange={(value) => handleRatingChange(value)}
              tooltip={{ formatter: (value) => `${value} stars` }}
            />
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default InfluencerPreferencesForm;
