import Navbar from '@/components/navbar';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
export default function Friends() {
    return (
        <ScrollView style={{ backgroundColor: 'black', width: '100%', height: '100%' }}
        >
            <Navbar />
        </ScrollView>
    )
}