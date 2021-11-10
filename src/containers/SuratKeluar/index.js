import React from 'react'
import { View, Text, TextInput, Image, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';


class SuratKeluar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tagTelahDitandai: false,
            tagTerbaru: true,
            modalVisible: false,
            content: [
                {
                    id: 476,
                    label: 'Subbagian Tata Usaha',
                    title: 'Undangan Meeting Video Con..',
                    NoSeri: 'B-1119G/Biroum&SDM/KA.06...',
                    date: '14/08/2021',
                    tagTerbaru: true,
                    tagTelahDitandai: false,
                },
                {
                    id: 454,
                    label: 'ASIPIRASI AHLI MUDA 1',
                    title: 'Pelaksanaan Kerjasama den...',
                    NoSeri: 'ND-51/Setmen/KL.01/03/2021',
                    date: '14/08/2021',
                    tagTerbaru: true,
                    tagTelahDitandai: true,
                },
                {
                    id: 445,
                    label: 'Subbagian Tata Usaha',
                    title: 'Permohonan Perubahan Ala..',
                    NoSeri: '135/FSRP-P/1/2021',
                    date: '17/07/2021',
                    tagTerbaru: true,
                    tagTelahDitandai: false,
                },
                {
                    id: 435,
                    label: 'ASIPIRASI AHLI MUDA 1',
                    title: 'Permintaan Identifikasi dan...',
                    NoSeri: 'ND-51/Setmen/KL.01/03/2021',
                    date: '14/08/2021',
                    tagTerbaru: true,
                    tagTelahDitandai: true,
                },
                {
                    id: 426,
                    label: 'Subbagian Tata Usaha',
                    title: 'Undangan Meeting video con..',
                    NoSeri: '135/FSRP-P/1/2021',
                    date: '17/07/2021',
                    tagTerbaru: true,
                    tagTelahDitandai: false,
                },
                {
                    id: 411,
                    label: 'ASIPIRASI AHLI MUDA 1',
                    title: 'Permintaan Identifikasi dan...',
                    NoSeri: 'ND-51/Setmen/KL.01/03/2021',
                    date: '14/08/2021',
                    tagTerbaru: true,
                    tagTelahDitandai: true,
                },
            ]
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    renderContent = () => {
        return this.state.content.map((value, index) => {
            switch (true) {
                case this.state.tagTerbaru === value.tagTerbaru && value.tagTerbaru === true:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailSuratKeluar', { nosuratmasuk: value.NoSeri })} key={index} style={{
                            height: 85,
                            width: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: '#E7EAEF',
                            flexDirection: 'row',
                            backgroundColor: 'white'
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
                                {value.tandai === true ?
                                    <Image source={{ uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png' }} style={{ height: 25, width: 25 }} />
                                    :
                                    <Image source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }} style={{ height: 25, width: 25 }} />
                                }
                            </View>
                        </TouchableOpacity>
                    )
                    break;
                case this.state.tagTelahDitandai === value.tagTelahDitandai && value.tagTelahDitandai === true:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailSuratKeluar', { nosuratmasuk: value.NoSeri })} key={index} style={{
                            height: 85,
                            width: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: '#E7EAEF',
                            flexDirection: 'row',
                            backgroundColor: 'white'
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
                                {value.tandai === true ?
                                    <Image source={{ uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png' }} style={{ height: 25, width: 25 }} />
                                    :
                                    <Image source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }} style={{ height: 25, width: 25 }} />
                                }
                            </View>
                        </TouchableOpacity>
                    )
                    break;
            }

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.titleHeader}>Daftar Surat Keluar</Text>
                        <View style={styles.boxIconTitle}>
                            <Icon name='help' size={25} color='white' />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifikasi', {
                                tagDiskusi: false,
                                tagSuratMasuk: false,
                                tagSuratKeluar: true,
                                tagSuratCC: false,
                            })}>
                                <Icon name='notifications' size={25} color='white' />
                                <View style={styles.customBadge} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.labelName}>
                        <Icon name='mail' size={80} color='#EB5F3C' />
                        <View style={styles.boxCount}>
                            <Text style={styles.count}>9</Text>
                            <Text style={styles.desCount}>Belum dibaca</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.boxTag}>
                        <TouchableOpacity onPress={() => this.setState({
                            tagTelahDitandai: !this.state.tagTelahDitandai,
                            tagTerbaru: this.state.tagTerbaru === true && this.state.tagTerbaru === false ? false : !this.state.tagTerbaru
                        })} style={[styles.listTag, { backgroundColor: this.state.tagTelahDitandai === true ? '#EB5F3C' : 'transparent' }]}>
                            <Text style={{ fontSize: 11, color: this.state.tagTelahDitandai === true ? 'white' : '#EB5F3C', fontWeight: 'bold' }}>Telah ditandai</Text>
                        </TouchableOpacity>
                        <View style={[styles.listTag, { backgroundColor: this.state.tagTerbaru === true ? '#EB5F3C' : 'transparent' }]}>
                            <Text style={{ fontSize: 11, color: this.state.tagTerbaru === true ? 'white' : '#EB5F3C', fontWeight: 'bold' }}>Terbaru</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} style={[styles.listTag, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={{ fontSize: 11, color: '#EB5F3C' }}>Filter</Text>
                            <View style={{
                                height: 18,
                                width: 18,
                                backgroundColor: '#EB5F3C',
                                marginLeft: 7,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 3
                            }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}
                                >2</Text>
                            </View>
                        </TouchableOpacity>
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
                            placeholder='Cari Surat Keluar'
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
                    <ScrollView>
                        {this.renderContent()}
                    </ScrollView>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{
                            height: '38%',
                            width: '100%',
                            backgroundColor: 'white',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 10
                        }}>
                            <View
                                style={{
                                    width: '100%',
                                    height: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <View
                                    style={{
                                        height: 8,
                                        width: 50,
                                        backgroundColor: '#9FA6B0',
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    margin: 19
                                }}
                            >
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#000'
                                }}>Filter</Text>

                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#000',
                                        paddingTop: 20
                                    }}
                                >Urutkan</Text>
                                <TouchableOpacity style={[styles.listTag, { backgroundColor: this.state.tagTerbaru === true ? '#EB5F3C' : 'transparent', marginLeft: 0, marginTop: 5 }]}>
                                    <Text style={{ fontSize: 11, color: this.state.tagTerbaru === true ? 'white' : 'white', fontWeight: 'bold' }}>Terbaru</Text>
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#000',
                                        paddingTop: 20
                                    }}
                                >Tampilkan</Text>
                                <View
                                    style={{
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity style={[styles.listTag, { backgroundColor: 'transparent' }]}>
                                        <Text style={{ fontSize: 11, color: '#EB5F3C', fontWeight: 'bold' }}>Telah ditandai</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default SuratKeluar
