import * as React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
const window = Dimensions.get('window')

export default class MainScreen extends React.Component{

    render(){
        this.props.navigation.setOptions({
            headerBackTitle: '',
            headerShown: false
        })

        return(
            <View 
                style={{flex: 1,  
                backgroundColor: '#fff' }}>

                {/* --- TITLE BAR --- */}
                <View 
                    style={{ flexDirection: 'row',  
                    height: 100, 
                    backgroundColor: '#eeeeee', 
                    width: '100%', 
                    alignItems: 'center', 
                    paddingTop: 60, 
                    paddingHorizontal: 20, 
                    justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={()=> alert('Profile - Ryanprawira')}>
                        <Ionicons 
                            name="md-person" 
                            size={25} 
                            color="#000"
                        />
                    </TouchableOpacity>
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold' }}>
                        EXPLANED
                    </Text>
                    <TouchableOpacity
                        onPress={()=> alert('Mau pergi kemana ')}>
                        <Ionicons 
                            name="md-search" 
                            size={25} 
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView>

                {/* --- WELCOME SECTION --- */}
                <View >
                    <Image
                        style={{ 
                            borderBottomLeftRadius: 30, 
                            borderBottomRightRadius: 30, 
                            width: window.width, 
                            height: window.height / 2.5 
                        }}
                        source={{ uri: 'https://www.coe.int/documents/204503/67779280/Astana/280011e3-f61c-df49-3218-e6ac50b66239?t=1592324080000' }}
                    />

                    <View 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: window.height / 2.5,
                            width: window.width,
                            borderBottomRightRadius: 50, 
                            borderBottomLeftRadius: 50,
                            backgroundColor: '#00000050', 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }}>
                        <Text 
                            style={{ 
                                fontSize: 21, 
                                color: '#FFF',
                                fontWeight: 'bold' 
                                 }}>
                                Kazakhstan
                        </Text>
                        <Text 
                            style={{ 
                                fontSize: 21, 
                                color: '#FFF', 
                                fontWeight: 'bold' }}>
                            
                        </Text>
                    </View>
                </View>
                <View
                    style={{ paddingLeft: 20, marginVertical: 20 }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold'  }}>LATEST TRIPS</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }}>
                        <View>
                            <Image
                                style={{ height: 100, width: 120, borderRadius: 5 }}
                                source={{ uri: 'https://akcdn.detik.net.id/community/media/visual/2017/03/02/55df3f59-094a-4e78-a44e-ab52b579115c.jpg?w=700&q=90' }}
                            />
                            <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Pulau Lombok</Text>
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Image
                                style={{ height: 100, width: 120, borderRadius: 5 }}
                                source={{ uri: 'https://talktravelapp.com/wp-content/uploads/Seoul-1.jpg' }}
                            />
                            <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Seoul</Text>
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Image
                                style={{ height: 100, width: 120, borderRadius: 5 }}
                                source={{ uri: 'https://statik.tempo.co/data/2017/12/12/id_669206/669206_720.jpg' }}
                            />
                            <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Selandia Baru</Text>
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Image
                                style={{ height: 100, width: 120, borderRadius: 5 }}
                                source={{ uri: 'https://www.balitoursclub.net/wp-content/uploads/2019/08/Destinasi-wisata-populer-di-Bali.jpg' }}
                            />
                            <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Bali</Text>
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Image
                                style={{ height: 100, width: 120, borderRadius: 5 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteY_hpGB2z6Od3wLOqSRk5eijIxcptXpVBg&usqp=CAU' }}
                            />
                            <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Bali</Text>
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Image
                                style={{ height: 100, width: 120, borderRadius: 5 }}
                                source={{ uri: 'https://www.viceroybali.com/wp-content/uploads/2020/08/viceroy-bali-main-pool-evening.jpg' }}
                            />
                            <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Bali</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ backgroundColor: '#eceff1', height: 100, margin: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center',  }} >
                    <Text style={{ color: '#000' }}>Tawaran hari ini</Text>
                    <TouchableOpacity
                        style={{ paddingVertical: 7, paddingHorizontal: 13, backgroundColor: '#ffb300', borderRadius: 30, marginTop: 5 }}
                        >
                        <Text>Pesan Sekarang</Text>
                    </TouchableOpacity>
                </View>

                
                </ScrollView>


            </View>

        )
    }
}