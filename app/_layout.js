import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            TabsBarStyle: {
                backgroundColor: '#fff',
                borderTopColor: '#888',
                borderTopWidth: 1,
            },
            tabBarActiveTintColor: '#007aff',
            tabBarInactiveTintColor: '#888',
        }}
    >
        <Tabs.Screen
            name="home"
            options={{
                title: "Home",
                tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏠</Text>,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Perfil",
                tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>👤</Text>,
            }}
        />
    </Tabs>
  );
}
