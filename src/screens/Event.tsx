import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, useWindowDimensions } from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { StackNavigationProp } from '@react-navigation/stack'

type EventProp = {
  navigation: StackNavigationProp<any, 'Event'>
}

const Item = () => {
  return (
    <FlatList
      nestedScrollEnabled
      data={[
        { eventName: 'Marta Baby shower', day: 13, month: 'Mar', dateTime: 'Sat 11:30am', location: 'Tanjong Pagar', key: '1' },
        { eventName: 'Nerd Dinner', day: 6, month: 'Mar', dateTime: 'Sat 7:30am', location: 'Clarke Quay', key: '2' },
        { eventName: 'Birthday Dinner', day: 23, month: 'Feb', dateTime: 'Sat 7:30am', location: 'Celementi Pagar', key: '3' },
      ]}
      renderItem={({ item }) =>
        <View key={item.key} style={styles.flatListItems}>
          <View style={{ flex: 0.5, paddingVertical: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 40 }}>{item.day}</Text>
            <Text style={{ color: '#06899f', fontWeight: '600' }}>{item.month}</Text>
          </View>

          <View style={{ flex: 1.5, paddingVertical: 35, alignItems: 'flex-start' }}>
            <Text style={{ fontWeight: '600' }}>{item.eventName}</Text>
            <Text style={{ marginTop: 7 }}>{item.dateTime} - {item.location}</Text>
          </View>
        </View>
      }
      keyExtractor={item => item.key}
    />
  )
}

const Event = ({ navigation }: EventProp) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Going' },
    { key: 'second', title: 'Declined' },
  ])

  const renderScene = SceneMap({
    first: Item,
    second: Item,
  })

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Create Event')}>
        <View style={styles.header}>
          <Text style={styles.eventButton}>Create Event</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.body}>
        <View style={styles.bodyTop}>
          <View style={styles.bodyTopPendingView}>
            <Text style={styles.bodyTopPendingTitle}>Pending</Text>
          </View>

          <Item />
        </View>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props =>
            <TabBar
              {...props}
              style={styles.tabBar}
              indicatorStyle={styles.tabBarIndicator}
              renderLabel={({ route }) =>
                <Text style={styles.tabBarLabel}>{route.title}</Text>
              }
            />
          }
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06899f',
  },
  eventButton: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#fff',
    marginTop: 35,
    height: 55,
    width: 200,
    justifyContent: 'center',
    borderRadius: 50,
    alignSelf: 'center'
  },
  body: {
    flex: 9,
    backgroundColor: 'white',
    marginTop: 30
  },
  bodyTop: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyTopPendingView: {
    padding: 10,
    borderStyle: 'solid',
    borderBottomColor: '#06899f',
    borderBottomWidth: 2,
  },
  bodyTopPendingTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  flatListItems: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  tabBar: {
    backgroundColor: '#f2f2f2',
  },
  tabBarIndicator: {
    backgroundColor: '#06899f',
  },
  tabBarLabel: {
    color: 'black',
    fontSize: 20,
  }
})

export default Event
