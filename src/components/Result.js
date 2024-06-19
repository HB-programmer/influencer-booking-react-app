// src/components/InfluencerResults.js
import React, { useState, useEffect } from 'react';
import { Card, Button, List, Spin, Typography, notification } from 'antd';
import axios from 'axios';
import './InfluencerResults.css';

const { Title, Paragraph, Text } = Typography;

const InfluencerResults = ({ preferences, onModifyCriteria, onBookInfluencer }) => {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/8d24e7f8-3eac-48c8-95fd-6a750180bbbf');
        const filteredInfluencers = filterInfluencers(response.data);
        setInfluencers(filteredInfluencers);
        console.log("filteredInfluencers: ",filteredInfluencers)
      } catch (error) {
        console.error('Error fetching data:', error);
        notification.error({
          message: 'Error',
          description: 'Failed to fetch influencers data.',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [preferences]);

  const filterInfluencers = (data) => {
    return data.Influencers.filter((influencer) => {
      if (preferences.prioritizeCost) {
        if (influencer.cost < preferences.costRange[0] || influencer.cost > preferences.costRange[1]) {
          return false;
        }
      }
      if (preferences.prioritizeFollowers) {
        if (influencer.followers < preferences.followerRange[0] || influencer.followers > preferences.followerRange[1]) {
          return false;
        }
      }
      if (preferences.prioritizeGender && preferences.gender) {
        if (influencer.gender !== preferences.gender) {
          return false;
        }
      }
      if (preferences.prioritizeRating) {
        if (influencer.rating < preferences.minRating) {
          return false;
        }
      }
      return true;
    });
  };

  if (loading) {
    return <Spin tip="Loading influencers..." />;
  }

  if (influencers.length === 0) {
    return (
      <div className="no-results">
        <Title level={4}>No Influencers Found</Title>
        <Button type="primary" onClick={onModifyCriteria}>Modify Criteria</Button>
      </div>
    );
  }

  return (
    <div className="results-list">
      <Title level={4}>Influencer Results</Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={influencers}
        renderItem={(influencer) => (
          <List.Item>
            <Card
              title={influencer.name}
              extra={<Text>${influencer.cost}</Text>}
            >
              <Paragraph>Followers: {influencer.follower}</Paragraph>
              <Paragraph>Rating: {influencer.rating}</Paragraph>
              <Paragraph>Gender: {influencer.gender}</Paragraph>
              <Paragraph>Availability: {influencer.avilablity ? 'Available' : 'Unavailable'}</Paragraph>
              <Button type="primary" onClick={() => onBookInfluencer(influencer)}>Book</Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default InfluencerResults;
