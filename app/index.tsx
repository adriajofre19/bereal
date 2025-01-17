import Navbar from "@/components/navbar";
import { Image, Text, View, ScrollView } from "react-native";


export default function Index() {
  return (
    <ScrollView style={{ backgroundColor: 'black', width: '100%', height: '100%' }}
    >
      <Navbar />
      <View style={{ padding: 16, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ paddingRight: 20, fontSize: 18, color: 'white' }}>Mis amigos</Text>
        <Text style={{ paddingLeft: 20, fontSize: 18, color: 'gray' }}>Amigos de amigos</Text>
      </View>


      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index}>
          <View style={{ padding: 16, flexDirection: "row", alignItems: 'center', paddingTop: 20 }}>
            <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: 40, height: 40, borderRadius: 50 }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ paddingLeft: 20, fontSize: 16, color: 'white' }}>Nombre de usuario</Text>
              <Text style={{ paddingLeft: 20, fontSize: 14, color: 'gray', paddingTop: 4 }}>Ubicacion, Ciudad 17000</Text>
            </View>
          </View>

          <View style={{ padding: 16, flexDirection: "row", alignItems: 'center' }}>
            <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: '100%', height: 600, borderRadius: 40 }} />
          </View>
        </View>
      ))}

    </ScrollView>
  );
}
