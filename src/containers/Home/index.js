import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class LoginView extends Component {

    constructor(props) {
        super(props);
        state = {}
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.titleHeader}>Dashboard</Text>
                        <View style={styles.boxIconTitle}>
                            <Icon name='help' size={25} color='white' />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifikasi', {
                                tagDiskusi: true,
                                tagSuratMasuk: false,
                                tagSuratKeluar: false,
                                tagSuratCC: false,
                            })} >
                                <Icon name='notifications' size={25} color='white' />
                                <View style={styles.customBadge} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.labelName}>
                        <Text style={styles.labelFirst}>CHITARA FEBRIANTY LUTHFI</Text>
                        <Text style={styles.labelScound}>(ARSIPARIS AHLI MUDA 1)</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.listContent}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Surat Masuk')} style={[styles.boxContent, { marginRight: 40, marginBottom: 60 }]}>
                            <Icon name="inbox" size={70} color="white" />
                            <Text style={styles.count}>4104</Text>
                            <Text style={styles.countTitle}>Surat Masuk</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Disposisi')} style={[styles.boxContent, { backgroundColor: '#68B3C8' }]}>
                            <Icon name="assignment-ind" size={70} color="white" />
                            <Text style={styles.count}>116</Text>
                            <Text style={styles.countTitle}>Disposisi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Surat Keluar')} style={[styles.boxContent, { marginRight: 40, backgroundColor: '#EB5F3C' }]}>
                            <Icon name="mail" size={70} color="white" />
                            <Text style={styles.count}>5</Text>
                            <Text style={styles.countTitle}>Surat Keluar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Draf Surat Keluar')} style={[styles.boxContent, { backgroundColor: '#F3BA46', }]}>
                            <Icon name="drafts" size={70} color="white" />
                            <Text style={styles.count}>18</Text>
                            <Text style={styles.countTitle}> Draft Surat Keluar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

