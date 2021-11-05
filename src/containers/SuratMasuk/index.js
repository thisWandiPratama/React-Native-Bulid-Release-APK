import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';


class SuratMasuk extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content: [
                {
                    id: 188,
                    label: 'Penting',
                    title : 'GUBERNUR SULAWESI BARAT',
                    NoSeri : '001/DARURAT -SB/1/2021',
                    date : '14/08/2021',
                    tandai : false
                },
                {
                    id: 179,
                    label: 'Rahasia',
                    title : 'FARID SR & PARTNERS',
                    NoSeri : '135/FSRP-P/1/2021',
                    date : '17/07/2021',
                    tandai : true
                },
                {
                    id: 165,
                    label: 'Biasa',
                    title : 'RAPIMNAS FORUM PSAA LKSA',
                    NoSeri : '066/FN.PSAA/XII/2020',
                    date : '17/06/2021',
                    tandai : false
                },
                {
                    id: 161,
                    label: 'Segera',
                    title : 'YAYASAN LENTERA ANAK(LENTER..',
                    NoSeri : '002/YLA/26-02/1/2021',
                    date : '14/05/2021',
                    tandai : false
                },
                {
                    id: 138,
                    label: 'Penting',
                    title : 'GUBERNUR SULAWESI BARAT',
                    NoSeri : '001/DARURAT -SB/1/2021',
                    date : '14/08/2021',
                    tandai : false
                },
            ]
        }
    }

    renderContent = () => {
        return this.state.content.map((value, index) => {
            return (
                <View style={{
                    height: 85,
                    width: '100%',
                    borderBottomWidth: 2,
                    borderBottomColor: '#E7EAEF',
                    flexDirection: 'row'
                }}>
                    <View style={{ width: 60, height: 85, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{value.id}</Text>
                    </View>
                    <View
                        style={{
                            height: 85,
                            width: 212,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: '#000',
                            fontWeight: 'bold'
                        }}>{value.label}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>{value.title}</Text>
                        <Text style={{ fontSize: 15, color: '#80878E' }}>{value.NoSeri}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            paddingBottom: 10
                        }}>{value.date}</Text>
                        <View>
                            <Icon name='push-pin' size={35} color='#727982' />
                        </View>
                    </View>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.titleHeader}>Surat Masuk</Text>
                        <View style={styles.boxIconTitle}>
                            <Icon name='help' size={25} color='white' />
                            <Icon name='notifications' size={25} color='white' />
                            <View style={styles.customBadge} />
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.labelName}>
                        <Icon name='inbox' size={80} color='#C33831' />
                        <View style={styles.boxCount}>
                            <Text style={styles.count}>4014</Text>
                            <Text style={styles.desCount}>Belum dibaca</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.boxTag}>
                        <View style={styles.listTag}>
                            <Text style={{ fontSize: 11, color: '#000' }}>Tag Meteri</Text>
                        </View>
                        <View style={styles.listTag}>
                            <Text style={{ fontSize: 11, color: '#000' }}>Terbaru</Text>
                        </View>
                        <View style={styles.listTag}>
                            <Text style={{ fontSize: 11, color: '#000' }}>Telah ditandai</Text>
                        </View>
                        <View style={styles.listTag}>
                            <Text style={{ fontSize: 11, color: '#000' }}>Filter</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 40,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: '#E7EAEF',
                        borderBottomWidth: 2,
                    }}>
                        <TextInput
                            placeholder='Search'
                            style={{ paddingLeft: 50 }}
                        />
                        <View style={{ paddingRight: 15 }}>
                            <Icon name='search' size={25} color='#727982' />
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <Scroo
                    {this.renderContent()}
                </View>
            </View>
        )
    }
}

export default SuratMasuk
