import React, { useState, useLayoutEffect, useCallback } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot,
    QuerySnapshot,
    DocumentData,
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';

import { useNavigation, NavigationProp } from '@react-navigation/native';


// Định nghĩa kiểu dữ liệu cho thông điệp
interface ChatMessage extends IMessage {
    _id: string;
    createdAt: Date;
    text: string;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}

export default function Chat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const navigation = useNavigation<NavigationProp<any>>();

    const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.logoutButton} onPress={onSignOut}>
                    {/* <AntDesign name="logout" size={24} color={colors.gray} /> */}
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    useLayoutEffect(() => {
        const collectionRef = collection(database, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot: QuerySnapshot<DocumentData>) => {
            console.log('querySnapshot unsubscribe');
            setMessages(
                querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        _id: data._id,
                        createdAt: data.createdAt.toDate(),
                        text: data.text,
                        user: data.user,
                    };
                })
            );
        });

        return unsubscribe;
    }, []);

    const onSend = useCallback((messages: IMessage[] = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
        const { _id, createdAt, text, user } = messages[0];

        addDoc(collection(database, 'chats'), {
            _id,
            createdAt,
            text,
            user,
        });
    }, []);

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={false}
            showUserAvatar={false}
            onSend={messages => onSend(messages)}
            messagesContainerStyle={styles.messagesContainer}
            textInputStyle={styles.textInput}
            user={{
                _id: auth?.currentUser?.email || '',
                avatar: 'https://i.pravatar.cc/300',
            }}
        />
    );
}

const styles = StyleSheet.create({
    logoutButton: {
        marginRight: 10,
    },
    messagesContainer: {
        backgroundColor: '#fff',
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 20,
    },
});
