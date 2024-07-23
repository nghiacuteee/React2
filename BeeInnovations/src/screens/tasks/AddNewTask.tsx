import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import Container from '../../components/Container';


import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import SpaceComponent from '../../components/SpaceComponent';
import { TaskModel } from '../../models/TaskModel';
import InputComponent from '../../components/InputComponent';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';
import DropdownPicker from '../../components/DropdownPicker';
import { SelectModel } from '../../models/SelectModel';
import firestore from '@react-native-firebase/firestore';
import ButtonComponent from '../../components/ButtonComponent';
import TitleComponent from '../../components/TitleComponent';
import { AttachSquare } from 'iconsax-react-native';
import { colors } from '../../constants/colors';
import DocumentPicker , {DocumentPickerOptions, DocumentPickerResponse} from 'react-native-document-picker';
import TextComponent from '../../components/TextComponent';
import storage from '@react-native-firebase/storage';

const initValue: TaskModel = {
    title: '',
    desctiption: '',
    dueDate: new Date(),
    start: new Date(),
    end: new Date(),
    uids: [],
    fileUrls: [],

};

const AddNewTask = ({ navigation }: any) => {
    const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);
    const [usersSelect, setUsersSelect] = useState<SelectModel[]>([]);
    const [attchments,setAttachments] = useState<DocumentPickerResponse[]>([]); 
    const [attchmentsUrl, setAttchmentsUrl] = useState<string[]>([]);
    const [isLoading , setIsLoading ] = useState(false);

    useEffect(() => {
        handleGetAllUsers();
    }, []);


    const handleGetAllUsers = async () => {
        await firestore()
            .collection('users')
            .get()
            .then(snap => {
                if (snap.empty) {
                    console.log(`users data not found`)
                } else {
                    const items: SelectModel[] = []

                    snap.forEach(item => {
                        items.push({
                            label: item.data().name,
                            value: item.id,

                        });

                    });
                    setUsersSelect(items);
                }
            })
            .catch((error: any) => {
                console.log(`Can not get users, ${error.message}`)
            })
    }
    const handleChangeValue = (id: string, value: string | string[] | Date) => {
        const item: any = { ...taskDetail };

        item[`${id}`] = value;

        setTaskDetail(item);
    };

    // const handleAddNewTask = async () => {
    //     const data = {
    //         ...taskDetail, 
    //         fileUrls: attchmentsUrl,
    //     };

    //     await firestore()
    //     .collection('tasks')
    //     .add(data)
    //     .then(() => {
    //         console.log('New task added');
    //         navigation.goBack();
    //     })
    //     .catch(error => console.log(error));
    // };
    const handleAddNewTask = async () => {
        const data = {
            ...taskDetail,
            fileUrls: attchmentsUrl,
        };

        try {
            await firestore()
                .collection('tasks')
                .add(data);
            console.log('New task added');
            navigation.goBack();
        } catch (error) {
            console.log('Error adding task:', error);
        }
    };

    // const handlePickerDocument = () =>{
    //     DocumentPicker.pick({})
    //     .then(res => {
    //       setAttachments(res);

    //       res.forEach(item => handleUploadFileToStorage(item));
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    const handlePickerDocument = async () => {
        try {
            const res = await DocumentPicker.pick();
            setAttachments(res);

            for (const item of res) {
                await handleUploadFileToStorage(item);
            }
        } catch (error) {
            if (DocumentPicker.isCancel(error)) {
                console.log('User canceled document picker');
            } else {
                console.log('Error picking document:', error);
            }
        }
    };
    const handleUploadFileToStorage = async (item:DocumentPickerResponse) => {
        const filename = item.name ?? `file${Date.now()}`;
        const path = `documents/${filename}`;
        const items = [...attchmentsUrl]; 

        await storage().ref(path).putFile(item.uri);
        await storage()
        .ref(path)
        .getDownloadURL()
        .then(url => {
            items.push(url);
            setAttchmentsUrl(items);

        })
        .catch(error => console.log(error))
    }

 
    console.log(attchmentsUrl)

    return (
          <View style={{ flex: 1 }}>
        <Container back title="Bài biết ơn mới" isScroll>
            <SectionComponent>
                <InputComponent
                    value={taskDetail.title}
                    onChange={val => handleChangeValue('title', val)}
                    title="Title"
                    allowClear
                    placeholder="Title of task"
                    multible
                    numberOfLine={2}
                />
                <InputComponent
                    value={taskDetail.desctiption}
                    onChange={val => handleChangeValue('desctiption', val)}
                    title="Description"
                    allowClear
                    placeholder="Content"
                    multible
                    numberOfLine={3}
                />

                <DateTimePickerComponent
                    selected={taskDetail.dueDate}
                    onSelect={val => handleChangeValue('dueDate', val)}
                    placeholder="Choice"
                    type="date"
                    title="Due date"
                />

                <RowComponent>
                    <View style={{ flex: 1 }}>
                        <DateTimePickerComponent
                            selected={taskDetail.start}
                            type="time"
                            onSelect={val => handleChangeValue('start', val)}
                            title="Start"
                        />
                    </View>
                    <SpaceComponent width={14} />
                    <View style={{ flex: 1 }}>
                        <DateTimePickerComponent
                            selected={taskDetail.end}
                            onSelect={val => handleChangeValue('end', val)}
                            title="End"
                            type="time"
                        />
                    </View>
                </RowComponent>

                <DropdownPicker
                    selected={taskDetail.uids}
                    items={usersSelect}
                    onSelect={val => handleChangeValue('uids', val)}
                    multible
                    title="Members" />
                <View>
                    <RowComponent justify='flex-start' onPress={handlePickerDocument}>
                        <TitleComponent text='Attachments' flex={0} />
                        <SpaceComponent width={8} />
                        <AttachSquare size={20} color={colors.white} />
                    </RowComponent>
                    {
                        attchments.length > 0 && 
                        attchments.map((item, index) => (
                            <RowComponent
                            key = {`attachments${index}`}
                            styles = {{paddingVertical:12}}
                            >
                                <TextComponent text={item.name ?? ''}/>
                            </RowComponent>
                        ))
                    }
                </View>
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent text="Save" onPress={handleAddNewTask} />
            </SectionComponent>
        </Container>
        </View>
    );
};

export default AddNewTask;