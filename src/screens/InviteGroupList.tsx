import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, SectionList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { COLORS, ALPHABET } from '../constants'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { Avatar, CheckBox } from 'react-native-elements'

const alphabet = ALPHABET.toUpperCase().split('')

type InviteGroupListProp = {
  navigation: StackNavigationProp<any, 'Invite List'>
}

const InviteGroupList = ({ navigation }: InviteGroupListProp) => {
  const data = alphabet.map((groupName: any) => ({ title: groupName, data: ['Cedric Chin', 'Adam Wishney', 'Alex Nodelan'] }))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actionArea}>
        <Text style={styles.actionBase} onPress={() => navigation.navigate('Invite List')}>Cancel</Text>
        <Text style={[styles.actionBase, styles.nextAction]} onPress={() => navigation.navigate('New Group List')}>Next</Text>
      </View>

      <View style={styles.bodyArea}>
        <View style={styles.searchArea}>
          <EvilIcons name='search' size={24} color="#ddd" />
          <TextInput placeholder={'Search friends'} style={styles.searchInputArea} />
        </View>

        <SectionList
          sections={data}
          renderItem={({ item }) =>
            <View style={styles.itemHeader}>
              <View style={{ flex: 0.15 }}>
                <Avatar
                  rounded
                  containerStyle={{ alignSelf: 'center' }}
                  source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
                />
              </View>

              <Text style={{ flex: 0.9 }}>{item}</Text>

              <CheckBox
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={false}
              />
            </View>
          }
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.title == 'Saved groups' &&
                <Ionicons name='add-circle-outline' size={24} color='#333' style={styles.newGroups}/>
              }
            </View>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backGroundColor
  },
  actionArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#06899f',
  },
  actionBase: {
    color: 'white',
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  nextAction: {
    marginRight: 10,
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInputArea: {
    height: 50,
    fontSize: 17,
    marginLeft: 10,
    flex: 1,
  },
  bodyArea: {
    backgroundColor: 'white',
  },
  sectionHeader: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: 15,
  },
  newGroups: {
    position: 'absolute',
    right: 21,
    top: 15,
  },
  itemHeader: {
    borderStyle: 'solid',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'center'
  }
})

export default InviteGroupList
