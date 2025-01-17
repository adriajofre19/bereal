import { IconSymbol } from '@/app-example/components/ui/IconSymbol';
import React from 'react';
import { Text, View, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';

export default function Navbar() {
    return (
        <View style={{
            width: '100%',
            height: 90,
            backgroundColor: 'black',
            paddingTop: 60, // Para dejar espacio al status bar
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            {/* Sección izquierda - Icono de usuario */}
            <Link href="/friends">
                <Feather name="users" size={24} color="white" />
            </Link>

            <View>
                {/* Sección central - Título */}
                <Text style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                }}>
                    BeReal
                </Text>
            </View>

            {/* Sección derecha - Calendario y foto de perfil */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12
            }}>
                <Feather name="calendar" size={24} color="white" />

            </View>
        </View>
    );
}