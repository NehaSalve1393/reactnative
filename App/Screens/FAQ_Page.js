import React, { Component } from 'react';

import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {

      layout_Height: 0

    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }



  render() {
    return (
      <View style={styles.Panel_Holder}>

        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>

          <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>

          <Image
            source={require('../../App/Assets/images/Icons/DropDown.png')}
            style={styles.iconStyle} />

        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <TouchableOpacity key={key} style={styles.sub_Category_Text} >

                <Text style={{color:'#cacaca'}}> {item.name} </Text>

                <View style={{ width: '100%', height: 1, backgroundColor: '#cacaca' }} />

              </TouchableOpacity>

            ))
          }

        </View>

      </View>

    );
  }
}

export default class FAQ_Page extends Component {

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      {
        expanded: false, category_Name: "What is Carcuro?", sub_Category: [{ id: 1, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },

      {
        expanded: false, category_Name: "Loremg ipsum dolor sit amet, consectetur adipiscing elit praesent?", sub_Category: [{ id: 8, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },

      {
        expanded: false, category_Name: "Loremh ipsum dolor sit amet?", sub_Category: [{ id: 12, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },

      {
        expanded: false, category_Name: "Loremdg ipsum dolor sit amet, consectetur adipiscing?", sub_Category: [{ id: 16, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },

      {
        expanded: false, category_Name: "Loremd ipsum dolor sit amet, consectetur?", sub_Category: [{ id: 20, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },

      {
        expanded: false, category_Name: "Loremj ipsum dolor sit amet?", sub_Category: [{ id: 24, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },
      {
        expanded: false, category_Name: "Lorem 4ipsum dolor sit amet, consectetur?", sub_Category: [{ id: 20, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },
      {
        expanded: false, category_Name: "Loremu ipsum dolor sit amet, consectetur adipiscing?", sub_Category: [{ id: 20, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },
      {
        expanded: false, category_Name: "Loremk ipsum dolor sit amet?", sub_Category: [{ id: 20, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },
      {
        expanded: false, category_Name: "Loreyim ipsum dolor sit amet, consectetur adipiscing elit praesent?", sub_Category: [{ id: 20, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },
      {
        expanded: false, category_Name: "Loreym ipsum dolor sit amet, consectetur adipiscing?", sub_Category: [{ id: 20, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },
      {
        expanded: false, category_Name: "Lorekm ipsum dolor sit amet, consectetur?", sub_Category: [{ id: 20, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis auctor molestie. Etiam sed felis at tortor hendrerit porttitor. Aliquam vel dignissim magna, eu gravida urna. Aenean commodo nulla id rutrum vestibulum. Nunc ut tempor est. Maecenas tempor odio eget commodo cursus.' }]
      },


    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5, }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    marginRight: 20,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff',
  },

  iconStyle: {
    width: 9,
    height: 7,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#000',
  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#cacaca',
    padding: 10,
  },

  category_Text: {
    textAlign: 'left',
    color: '#000',
    fontSize: 15,
    width: 300,
    paddingBottom: 10,
    paddingStart: 15,
    paddingTop: 10,
  },

  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }

});