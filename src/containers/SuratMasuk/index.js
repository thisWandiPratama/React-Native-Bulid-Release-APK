import React from 'react'
import { View, Text, TextInput, Image, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';


class SuratMasuk extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tagMenteri: false,
            tagTerbaru: true,
            tagDiTandai: false,
            modalVisible: false,
            content: [
                {
                    id: 930,
                    label: 'Rahasia',
                    title: 'GUBERNUR SUMATERA SELATAN',
                    NoSeri: '001/DARURAT-SB/1/2021',
                    date: '14/08/2021',
                    tagTandai: false,
                    tagMenteri: false,
                    tagTerbaru: true,
                },
                {
                    id: 188,
                    label: 'Penting',
                    title: 'GUBERNUR SULAWESI BARAT',
                    NoSeri: '001/DARURAT -SB/1/2021',
                    date: '14/08/2021',
                    tagTandai: false,
                    tagMenteri: true,
                    tagTerbaru: true,
                },
                {
                    id: 179,
                    label: 'Rahasia',
                    title: 'FARID SR & PARTNERS',
                    NoSeri: '135/FSRP-P/1/2021',
                    date: '17/07/2021',
                    tagTandai: true,
                    tagMenteri: false,
                    tagTerbaru: true,
                },
                {
                    id: 165,
                    label: 'Biasa',
                    title: 'RAPIMNAS FORUM PSAA LKSA',
                    NoSeri: '066/FN.PSAA/XII/2020',
                    date: '17/06/2021',
                    tagTandai: false,
                    tagMenteri: false,
                    tagTerbaru: true,
                },
                {
                    id: 161,
                    label: 'Segera',
                    title: 'YAYASAN LENTERA ANAK(LENTER..',
                    NoSeri: '002/YLA/26-02/1/2021',
                    date: '14/05/2021',
                    tagTandai: false,
                    tagMenteri: false,
                    tagTerbaru: true,
                },
                {
                    id: 138,
                    label: 'Penting',
                    title: 'GUBERNUR SULAWESI BARAT',
                    NoSeri: '001/DARURAT -SB/1/2021',
                    date: '14/08/2021',
                    tagTandai: false,
                    tagMenteri: true,
                    tagTerbaru: true,
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
                case this.state.tagMenteri === value.tagMenteri && this.state.tagTerbaru === value.tagTerbaru && this.state.tagDiTandai === value.tagTandai:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailSuratMasuk', { nosuratmasuk: value.NoSeri })} key={index} style={{
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
                                {value.tandai === true ?
                                    <Image source={{ uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png' }} style={{ height: 25, width: 25 }} />
                                    :
                                    <Image source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }} style={{ height: 25, width: 25 }} />
                                }
                            </View>
                        </TouchableOpacity>
                    )
                    break;
                case this.state.tagMenteri === value.tagMenteri && this.state.tagTerbaru === value.tagTerbaru:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailSuratMasuk', { nosuratmasuk: value.NoSeri })} key={index} style={{
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
                                {value.tagTandai === true ?
                                    <Image source={{ uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png' }} style={{ height: 25, width: 25 }} />
                                    :
                                    <Image source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }} style={{ height: 25, width: 25 }} />
                                }
                            </View>
                        </TouchableOpacity>
                    )
                    break;
                case this.state.tagTerbaru === value.tagTerbaru && this.state.tagDiTandai === value.tagTandai:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailSuratMasuk', { nosuratmasuk: value.NoSeri })} key={index} style={{
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
                                {value.tagTandai === true ?
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
                        <Text style={styles.titleHeader}>Surat Masuk</Text>
                        <View style={styles.boxIconTitle}>
                            <Icon name='help' size={25} color='white' />
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Notifikasi',{
                                tagDiskusi: false,
                                tagSuratMasuk: true,
                                tagSuratKeluar: false,
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
                        <Icon name='inbox' size={80} color='#C33831' />
                        <View style={styles.boxCount}>
                            <Text style={styles.count}>4014</Text>
                            <Text style={styles.desCount}>Belum dibaca</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.boxTag}>
                        <TouchableOpacity onPress={() => this.setState({ tagMenteri: !this.state.tagMenteri })} style={[styles.listTag, { backgroundColor: this.state.tagMenteri === true ? '#C33831' : 'transparent' }]}>
                            <Text style={{ fontSize: 11, color: this.state.tagMenteri === true ? 'white' : '#C33831', fontWeight: 'bold' }}>Tag Meteri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.listTag, { backgroundColor: this.state.tagTerbaru === true ? '#C33831' : 'transparent' }]}>
                            <Text style={{ fontSize: 11, color: this.state.tagTerbaru === true ? 'white' : '#C33831', fontWeight: 'bold' }}>Terbaru</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ tagDiTandai: !this.state.tagDiTandai })} style={[styles.listTag, { backgroundColor: this.state.tagDiTandai === true ? '#C33831' : 'transparent' }]}>
                            <Text style={{ fontSize: 11, color: this.state.tagDiTandai === true ? 'white' : '#C33831', fontWeight: 'bold' }}>Telah ditandai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} style={[styles.listTag, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={{ fontSize: 11, color: '#C33831' }}>Filter</Text>
                            <View style={{
                                height: 18,
                                width: 18,
                                backgroundColor: '#C33831',
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
                            placeholder='Cari Surat Masuk'
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
                        this.setState({modalVisible:!this.state.modalVisible});
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{
                            height: '67%',
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
                                <TouchableOpacity style={[styles.listTag, { backgroundColor: this.state.tagTerbaru === true ? '#C33831' : 'transparent', marginLeft: 0, marginTop: 5 }]}>
                                    <Text style={{ fontSize: 11, color: this.state.tagTerbaru === true ? 'white' : '#000', fontWeight: 'bold' }}>Terbaru</Text>
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
                                    <TouchableOpacity onPress={() => this.setState({ tagDiTandai: !this.state.tagDiTandai })} style={[styles.listTag, { backgroundColor: this.state.tagDiTandai === true ? 'red' : 'transparent' }]}>
                                        <Text style={{ fontSize: 11, color: this.state.tagDiTandai === true ? 'white' : '#C33831', fontWeight: 'bold' }}>Telah ditandai</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ tagMenteri: !this.state.tagMenteri })} style={[styles.listTag, { backgroundColor: this.state.tagMenteri === true ? '#C33831' : 'transparent' }]}>
                                        <Text style={{ fontSize: 11, color: this.state.tagMenteri === true ? 'white' : '#C33831', fontWeight: 'bold' }}>Tag Meteri</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#000',
                                        paddingTop: 20
                                    }}
                                >Sifat Surat</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    <TouchableOpacity style={[styles.listTag, { width: 50 }]}>
                                        <Text style={{ fontSize: 11, color: '#C33831', fontWeight: 'bold' }}>Penting</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 40 }]}>
                                        <Text style={{ fontSize: 11, color: '#C33831', fontWeight: 'bold' }}>Biasa</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 45 }]}>
                                        <Text style={{ fontSize: 11, color: '#C33831', fontWeight: 'bold' }}>Segera</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 50 }]}>
                                        <Text style={{ fontSize: 11, color: '#C33831', fontWeight: 'bold' }}>Rahasia</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 100 }]}>
                                        <Text style={{ fontSize: 11, color: '#C33831', fontWeight: 'bold' }}>Sangat Rahasia</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 60 }]}>
                                        <Text style={{ fontSize: 11, color: '#C33831', fontWeight: 'bold' }}>Terbatas</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#000',
                                        paddingTop: 20
                                    }}
                                >Jenis Surat</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    <TouchableOpacity style={[styles.listTag, { width: 100 }]}>
                                        <Text style={{ fontSize: 11, color: 'red', fontWeight: 'bold' }}>Surat Undangan</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 90 }]}>
                                        <Text style={{ fontSize: 11, color: 'red', fontWeight: 'bold' }}>Surat Biasa</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 80 }]}>
                                        <Text style={{ fontSize: 11, color: 'red', fontWeight: 'bold' }}>Nota Dinas</Text>
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

export default SuratMasuk
