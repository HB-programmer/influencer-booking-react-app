// src/components/InfluencerDetails.js

import React from 'react';
import { Card, Descriptions, Avatar, Button, Modal, Result } from 'antd';

const InfluencerDetails = ({ influencer, onConfirm, onModify }) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        onConfirm();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Card
                style={{ width: '100%', maxWidth: 600, margin: 'auto' }}
                // cover={<img alt="Influencer Cover" src={influencer.imageUrl} />}
            >
                <Card.Meta
                    avatar={<Avatar src={influencer.avatarUrl} />}
                    title={influencer.name}
                    description={`Rating: ${influencer.rating}`}
                />
                <Descriptions bordered column={1} style={{ marginTop: 16 }}>
                    <Descriptions.Item label="Name">{influencer.name}</Descriptions.Item>
                    <Descriptions.Item label="Cost">{`$${influencer.cost}`}</Descriptions.Item>
                    <Descriptions.Item label="Followers">{influencer.follower}</Descriptions.Item>
                    <Descriptions.Item label="Availability">
                        {influencer.availability ? "Available" : "Not Available"}
                    </Descriptions.Item>
                </Descriptions>
                <div style={{ marginTop: 16, textAlign: 'center' }}>
                    <Button type="primary" onClick={showModal}>Confirm Booking</Button>
                    <Button style={{ marginLeft: 8 }} onClick={onModify}>Modify Selection</Button>
                </div>
            </Card>
            <Modal
                title="Booking Confirmation"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Confirm
                    </Button>,
                ]}
            >
                <Result
                    status="success"
                    title="Successfully Booked the Influencer!"
                    subTitle="Your booking details have been confirmed. You will receive a confirmation email shortly."
                    extra={[
                        <Button type="primary" key="console" onClick={handleOk}>
                            View Booking
                        </Button>,
                    ]}
                />
                <p style={{ marginTop: 16 }}>Tips:</p>
                <ul>
                    <li>Check your email for the booking confirmation.</li>
                    <li>Review the influencer's availability and plan your campaign accordingly.</li>
                    <li>Reach out to the influencer to align on the content and schedule.</li>
                </ul>
            </Modal>
        </>
    );
};

export default InfluencerDetails;
